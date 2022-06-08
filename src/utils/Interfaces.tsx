export interface IRepos {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
  description: string;
  language?: string;
}
export interface ILanguage {
  language: string;
}