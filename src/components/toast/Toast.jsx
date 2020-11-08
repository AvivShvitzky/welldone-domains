
import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

import { TOAST_SUCCESS, TOAST_WARNING } from './Toast.consts'

function Toast() {
  const notify = (toastType, toastText) => {
    if (toastType === TOAST_SUCCESS) {
      toast.success(toastText)
    }
    else if (toastType === TOAST_WARNING) {
      toast.warning(toastText)
    }
  }
  return notify
};

export default Toast;
