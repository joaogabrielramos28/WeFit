import { IRepos } from "../Dtos/repos";

export interface IRepositoriesContextProps {
  repos: IRepos[];
  favoritesRepos: IRepos[];
  actionSheetIsOpen: boolean;
  closeActionSheet: () => void;
  openActionSheet: () => void;
  handleEditUserName: (value: string) => void;
  userName: string;
  isShowingAlert: boolean;
  addRepoToFavorite: (repo: IRepos) => Promise<void>;
  removeRepoFromFavorite: (repo: IRepos) => Promise<void>;
  isConnectToInternet: boolean;
}
