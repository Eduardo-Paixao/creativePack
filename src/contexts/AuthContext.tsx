import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

interface IGitHubUser {
  profile: {
    avatar_url: string;
    name: string;
    followers: number;
    following: number;
    public_repos: number;
    html_url:string;
  };
  username: string;
}
interface AuthContextType {
  user: IGitHubUser | undefined;
  isLoading: boolean;
  signInWithGitHub: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const USER_OBJECT = "@UserObject";
  
  const [user, setUser] = useState<IGitHubUser>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem(USER_OBJECT) as string));
  }, [sessionStorage.getItem(USER_OBJECT)]);

  async function signInWithGitHub() {
    const provider = new firebase.auth.GithubAuthProvider();
    if (user) {
      sessionStorage.removeItem(USER_OBJECT);
      setUser(JSON.parse(sessionStorage.getItem(USER_OBJECT) as string));
    } else {
      try {
        setIsLoading(true);
        const { additionalUserInfo } = await auth.signInWithPopup(provider);
        sessionStorage.setItem(USER_OBJECT, JSON.stringify(additionalUserInfo));
        setUser(JSON.parse(sessionStorage.getItem(USER_OBJECT) as string));
        
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signInWithGitHub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
