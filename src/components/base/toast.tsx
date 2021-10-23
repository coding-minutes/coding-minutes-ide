import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToast } from '~/store/action/ui';
import { getToast } from '~/store/getters/ui';

interface Props {}

export const Toast: React.FC<Props> = (props) => {
  const toast = useSelector(getToast());
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (toast) {
      setTimeout(() => {
        dispatch(setToast(null));
      }, toast.timeout);
    }
  }, [toast]);

  // TODO: Add ToastType styling

  const message = toast ? toast.message : '';

  return <div className={'toast ' + (toast ? 'active' : '')}>{message}</div>;
};
