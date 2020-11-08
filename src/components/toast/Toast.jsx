
import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

import { TOAST_SUCCESS, TOAST_WARNING, CREATE_TOAST, DELETE_TOAST } from './Toast.consts'

function Toast() {
  const notify = ( toastContext, toastType, toastText) => {
    if (toastContext === CREATE_TOAST) {
      if (toastType === TOAST_SUCCESS) {
        toast.success(toastText)
      }
      else if (toastType === TOAST_WARNING) {
        toast.warning(toastText)
      }
    } else if (toastContext === DELETE_TOAST) {
      toast.dismiss()
    }
  }
  return notify
};

export default Toast;

