import React from "react";

import { toast } from "react-toastify";

export const toastError = ( message:string) => {

  return toast.error(message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};


