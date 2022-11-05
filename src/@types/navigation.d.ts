export interface RepositoryNavigateParams {
  full_name: string;
  description: string;
  language: string;
  html_url: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Repositories: undefined;
      Repository: RepositoryNavigateParams;
    }
  }
}
