import React, { ReactNode, useContext } from "react";
import { AiOutlineGithub, AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";
import logo from "../assets/images/logo.svg";
import "../styles/header.scss";
import Spiner from "./Spiner";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router";

interface IHeaderProps {
  children: ReactNode;
}

const Header = ({ children }: IHeaderProps) => {
  const { isLoading, user, signInWithGitHub } = useContext(AuthContext);

  const history = useHistory();

  const login = () => {
    if (!user) {
      signInWithGitHub();
      history.push("/profile");
    } else if(user) {
      signInWithGitHub();
      history.push("/");
    }
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo Compass" />
        <div className="d-grid gap-2">
          <Button
            className="btn-color-primary rounded-pill"
            onClick={() => {
              login();
            }}
          >
            <AiOutlineGithub size={32} className="mx-2" />
            {user ? (
              <>
                {user.profile.name}
                <AiFillCloseCircle className="mx-2" size={20} />
              </>
            ) : (
              "Entrar com GitHub"
            )}
          </Button>
        </div>
      </header>

      <div>
        <Spiner loading={isLoading} message="Carregando..." />
        {children}
      </div>
    </>
  );
};

export default Header;
