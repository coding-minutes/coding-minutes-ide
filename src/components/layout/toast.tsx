import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowToast } from '~/store/action/ui';
import { showToast } from '~/store/getters/ui';

interface Props {}

export const Toast: React.FC<Props> = (props) => {
  const isToastVisible = useSelector(showToast());
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isToastVisible) {
      setTimeout(() => {
        dispatch(setShowToast(false));
      }, 3000);
    }
  }, [isToastVisible]);

  return <div className={'toast ' + (isToastVisible ? 'active' : '')}>Code saved successfully</div>;
};
