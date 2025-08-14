//react hooks import
import { useState, useEffect } from "react";

//MTU css framework
import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

//components import
const NotificationToast = ({
  showToast,
  setShowToast,
  messageToast,
  variant,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (showToast) {
      enqueueSnackbar(messageToast, {
        variant: variant,
        classes: {
          root: variant === "success" ? "go1725278324" : "go167266335",
        },
      });
      setShowToast(false);
    }
  }, [showToast, enqueueSnackbar, setShowToast, messageToast, variant]);

  return null;
};

export default NotificationToast;
