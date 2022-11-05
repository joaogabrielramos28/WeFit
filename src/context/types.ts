import { IRepos } from "../Dtos/repos";

export interface IRepositoriesContextProps {
  repos: IRepos[];
  actionSheetIsOpen: boolean;
  closeActionSheet: () => void;
  openActionSheet: () => void;
  handleEditUserName: (value: string) => void;
  userName: string;
}
