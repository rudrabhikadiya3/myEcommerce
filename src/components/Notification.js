import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { resetAlert } from "../redux/action/alert.action";

function Notification(props) {
  const { enqueueSnackbar } = useSnackbar();
  const msgData = useSelector((state) => state.alert);
    const dispatch = useDispatch();

  useEffect(() => {
    if (msgData.msg !== "") {
      enqueueSnackbar(msgData.msg, {
        variant: msgData.color,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    }

    setTimeout(() => {
        dispatch(resetAlert())
    }, 2000);
  }, [msgData.msg]);
  return <></>;
}

export default Notification;
