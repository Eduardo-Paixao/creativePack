import { toastError } from "../components/Toasts";
import { apiGitHub } from "../services/api";
import { ILanguage, IRepos } from "./Interfaces";

export const getAllRepos = async (
  setRepos: React.Dispatch<React.SetStateAction<IRepos[]>>,
  setLanguage: React.Dispatch<React.SetStateAction<ILanguage[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const { data } = await apiGitHub.get(
      `search/repositories?q=repositories?q=created:%3E2017-06-01&sort=stars&order=desc`
    );
    setRepos(data.items);
    data.items.map((items: ILanguage) => {
      if (items.language) {
        setLanguage((prevState) => [
          ...prevState,
          {
            language: items.language,
          },
        ]);
      }
    });
  } catch (error: any) {
    setIsLoading(false);
    toastError(error?.response?.data.message);
  } finally {
    setIsLoading(false);
  }
};

export const removeRepos = (
  id: number,
  setReposFavorite: React.Dispatch<React.SetStateAction<IRepos[]>>,
  reposFavorite: IRepos[]
) => {
  setReposFavorite(
    reposFavorite.filter((reposFavorites) => reposFavorites.id !== id)
  );
};
