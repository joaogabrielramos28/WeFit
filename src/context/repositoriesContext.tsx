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

const RepositoriesContext = createContext({} as IRepositoriesContextProps);

const RepositoriesProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [userName, setUserName] = useState("appswefit");

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

  useEffect(() => {
    api.get<IRepos[]>(`${userName}/repos`).then((response) => {
      setRepos(response.data);
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
