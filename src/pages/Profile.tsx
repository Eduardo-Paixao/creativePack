import React, { useEffect, useState } from "react";
import { AiOutlineGlobal, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Button from "../components/Button";
import Spiner from "../components/Spiner";
import "../styles/profile.scss";
import { getAllRepos, removeRepos } from "../utils/Functions";
import { ILanguage, IRepos } from "../utils/Interfaces";

const Profile = () => {
  const [repos, setRepos] = useState<IRepos[]>([]);
  const [reposFavorite, setReposFavorite] = useState<IRepos[]>([]);
  const [reposLanguage, setReposLanguage] = useState<IRepos[]>([]);
  const [language, setLanguage] = useState<ILanguage[]>([]);
  const [filterLanguage, setFilterLanguage] = useState<ILanguage[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showReposLanguage, setShowReposLanguage] = useState(false);
  const [isRepo, setIsRepo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isRepo) {
      setIsRepo(true);
      getAllRepos(setRepos, setLanguage, setIsLoading);
    }
  }, [isRepo, repos]);

  const filterLaguage = () => {
    const filterLanguage = language.filter((element, index, array) => {
      return (
        array.findIndex((el) => el.language === element.language) === index
      );
    });
    setFilterLanguage(filterLanguage);
  };

  const languageRepository = (element: string) => {
    setReposLanguage(
      repos.filter((reposFavorites) => reposFavorites.language === element)
    );
    setShowReposLanguage(true);
  };

  return (
    <div className="profile container-sm mx-auto mt-5">
      <Spiner loading={isLoading} message="Carregando..." />
      <div className="d-flex gap-3 mx-auto">
        <Button
          className="btn-color-primary"
          onClick={() => {
            getAllRepos(setRepos, setLanguage, setIsLoading);
            setShowFavorites(false);
            setShowReposLanguage(false);
          }}
        >
          <AiOutlineGlobal className="me-2" /> Todos
        </Button>

        <select
          className="form-select w-auto "
          onClick={() => filterLaguage()}
          onChange={(e) => {
            languageRepository(e.target.value);
          }}
        >
          <option selected>Linguagens</option>
          {filterLanguage.map((languagens) => (
            <option value={languagens.language}>{languagens.language}</option>
          ))}
        </select>
        <Button
          className="btn-color-primary"
          onClick={() => {
            setShowFavorites(true);
          }}
        >
          <AiOutlineStar className="me-2" />
          Repositórios favoritos
        </Button>
      </div>
      <div className="d-flex gap-3 mt-4 scroll">
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Link</th>
              <th scope="col">Descrição</th>
              <th scope="col">Qntd. Estrelas</th>
              <th scope="col">Favoritos</th>
            </tr>
          </thead>
          <tbody>
            {showFavorites
              ? reposFavorite.map((repo) => (
                  <tr className="table-light">
                    <td>{repo?.name}</td>
                    <td>
                      <a href={repo?.html_url} target="_blank">
                        Abri link
                      </a>
                    </td>
                    <td>{repo?.description}</td>
                    <td>{repo?.stargazers_count}</td>
                    <td>
                      <Button
                        className="btn-table"
                        onClick={() => {
                          removeRepos(repo.id, setReposFavorite, reposFavorite);
                        }}
                      >
                        <AiTwotoneStar className="me-2" />
                        Favoritar
                      </Button>
                    </td>
                  </tr>
                ))
              : showReposLanguage
              ? reposLanguage.map((repo) => (
                  <tr className="table-light">
                    <td>{repo?.name}</td>
                    <td>
                      <a href={repo?.html_url} target="_blank">
                        Abri link
                      </a>
                    </td>
                    <td>{repo?.description}</td>
                    <td>{repo?.stargazers_count}</td>
                    <td>
                      <Button
                        className="btn-table"
                        onClick={() => {
                          reposFavorite.findIndex(
                            (repoFavofite) => repoFavofite.id === repo.id
                          ) < 0
                            ? setReposFavorite([
                                ...reposFavorite,
                                {
                                  id: repo.id,
                                  name: repo.name,
                                  html_url: repo.html_url,
                                  description: repo.description,
                                  stargazers_count: repo.stargazers_count,
                                },
                              ])
                            : removeRepos(
                                repo.id,
                                setReposFavorite,
                                reposFavorite
                              );
                        }}
                      >
                        {reposFavorite.findIndex(
                          (repoFavofite) => repoFavofite.id === repo.id
                        ) < 0 ? (
                          <AiOutlineStar className="me-2" />
                        ) : (
                          <AiTwotoneStar className="me-2" />
                        )}
                        Favoritar
                      </Button>
                    </td>
                  </tr>
                ))
              : repos.map((repo) => (
                  <tr className="table-light">
                    <td>{repo?.name}</td>
                    <td>
                      <a href={repo?.html_url} target="_blank">
                        Abri link
                      </a>
                    </td>
                    <td>{repo?.description}</td>
                    <td>{repo?.stargazers_count}</td>
                    <td>
                      <Button
                        className="btn-table"
                        onClick={() => {
                          reposFavorite.findIndex(
                            (repoFavofite) => repoFavofite.id === repo.id
                          ) < 0
                            ? setReposFavorite([
                                ...reposFavorite,
                                {
                                  id: repo.id,
                                  name: repo.name,
                                  html_url: repo.html_url,
                                  description: repo.description,
                                  stargazers_count: repo.stargazers_count,
                                },
                              ])
                            : removeRepos(
                                repo.id,
                                setReposFavorite,
                                reposFavorite
                              );
                        }}
                      >
                        {reposFavorite.findIndex(
                          (repoFavofite) => repoFavofite.id === repo.id
                        ) < 0 ? (
                          <AiOutlineStar className="me-2" />
                        ) : (
                          <AiTwotoneStar className="me-2" />
                        )}
                        Favoritar
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
