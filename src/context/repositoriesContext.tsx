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

const RepositoriesContext = createContext({} as IRepositoriesContextProps);

const FAVORITES_STORAGE_KEY = "@wefit:favoritesRepos";

const RepositoriesProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [favoritesRepos, setFavoritesRepos] = useState<IRepos[]>([]);
  const [userName, setUserName] = useState("appswefit");
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);

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
        const reposWithoutFavorites = response.data.filter(
          (repo) => !favoritesRepos.some((favRepo) => favRepo.id === repo.id)
        );
        setRepos(reposWithoutFavorites);
      })
      .catch(() => {
        setIsShowingAlert(true);
        setUserName("appswefit");
        setTimeout(() => {
          setIsShowingAlert(false);
        }, 2000);
      });
  }, [userName]);

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
