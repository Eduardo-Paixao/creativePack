import React from "react";
import CodeCollaboration from "../assets/images/code_collaboration.svg";

import "../styles/home.scss";
const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="text">
          <h2 className="h2 fw-bold">Chega mais Dev!</h2>
          <p className="h6">
            Vem verificar essa super ferramenta de pesquisa de repositórios no
            GitHub, que utiliza React.js, Bootstrap, SASS, TypeScript e Firebase. 
          </p>
          <p className="h6">
            Clica em <a>"Entrar com GitHub"</a> e aproveite
          </p>
        </div>
        <div>
          <img src={CodeCollaboration} alt="PeopleSearch" width={600} />
        </div>
      </div>
    </div>
  );
};

export default Home;
