export interface RepositoryNavigateParams {
  id: string;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  stargazers_count: number;
  language: string;
  html_url: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Repositories: undefined;
      Repository: RepositoryNavigateParams;
      FavoritesRepositories: undefined;
    }
  }
}
