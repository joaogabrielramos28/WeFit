import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IRepos } from "../Dtos/repos";
import { api } from "../services/api";
import { IRepositoriesContextProps } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetInfo } from "@react-native-community/netinfo";

const RepositoriesContext = createContext({} as IRepositoriesContextProps);

const FAVORITES_STORAGE_KEY = "@wefit:favoritesRepos";

const RepositoriesProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [favoritesRepos, setFavoritesRepos] = useState<IRepos[]>([]);
  const [userName, setUserName] = useState("appswefit");
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);

  const netInfo = useNetInfo();
  const isConnectToInternet = netInfo.isConnected;

  const closeActionSheet = () => {
    setActionSheetIsOpen(false);
  };

  const openActionSheet = () => {
    setActionSheetIsOpen(true);
  };
  const handleEditUserName = (value: string) => {
    setUserName(value);
  };

  const addRepoToFavorite = async (repo: IRepos) => {
    const data = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
    const currentData = data ? JSON.parse(data) : [];
    await AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify([...currentData, repo])
    );

    setFavoritesRepos((prevState) => [...prevState, repo]);
  };

  const removeRepoFromFavorite = async (repo: IRepos) => {
    const data = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
    const currentData = data ? JSON.parse(data) : [];
    const newData = currentData.filter(
      (storageRepo) => storageRepo.id !== repo.id
    );
    await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newData));
    setFavoritesRepos(newData);
  };

  useEffect(() => {
    const LoadFavoritesRepos = async () => {
      const response = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      const storageFavRepos = response ? JSON.parse(response) : {};

      setFavoritesRepos(storageFavRepos);
    };
    LoadFavoritesRepos();
  }, []);

  useEffect(() => {
    api
      .get<IRepos[]>(`${userName}/repos`)
      .then((response) => {
        if (favoritesRepos.length > 0) {
          const reposWithoutFavorites = response.data.filter(
            (repo) => !favoritesRepos.some((favRepo) => favRepo.id === repo.id)
          );
          return setRepos(reposWithoutFavorites);
        } else {
          return setRepos(response.data);
        }
      })
      .catch(() => {
        setIsShowingAlert(true);
        setUserName("appswefit");
        setTimeout(() => {
          setIsShowingAlert(false);
        }, 2000);
      });
  }, [userName, favoritesRepos]);

  return (
    <RepositoriesContext.Provider
      value={{
        actionSheetIsOpen,
        closeActionSheet,
        openActionSheet,
        repos,
        handleEditUserName,
        userName,
        isShowingAlert,
        addRepoToFavorite,
        favoritesRepos,
        removeRepoFromFavorite,
        isConnectToInternet,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};

const useRepositories = () => {
  const context = useContext(RepositoriesContext);

  return context;
};

export { RepositoriesProvider, useRepositories };
