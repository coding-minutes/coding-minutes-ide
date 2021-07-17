import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalOverlay } from '~/store/action/ui';

export interface ModalOverlayProps {
  className: string;
}

export const OverlayModal: React.FC<ModalOverlayProps> = (props) => {
  const dispatch = useDispatch();

  const { className } = props;
  const toggleOverlay = () => {
    dispatch(toggleModalOverlay());
  };

  return (
    <>
      <div className={`overlay ${className}`}>
        <div className="overlay__modal">
          <button onClick={toggleOverlay}>
            <img
              src="https://minio.codingminutes.com/assets/cross.svg"
              alt="X"
              className="overlay__modal__close-button"
            />
          </button>
          <div className="w-100">
            <div className="overlay__modal__title mb-3">Welcome to</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cm-oneline.svg"
              alt="Coding Minutes Logo"
              style={{ height: '20px' }}
            />
            <div className="overlay__modal__divider"></div>
            <div className="overlay__modal__title mb-4">Login to your account</div>
            <div className="login-card login-card--google mb-4">
              <div className="row no-gutters align-items-center">
                <img src="https://minio.codingminutes.com/assets/google-logo.svg" alt="Google" />
                <div className="flex-1">Continue with Google</div>
              </div>
            </div>
            <div className="login-card login-card--github mb-4">
              <div className="row no-gutters align-items-center">
                <img src="https://minio.codingminutes.com/assets/github-logo.svg" alt="Github" />
                <div className="flex-1">Continue with Github</div>
              </div>
            </div>
            <div className="login-card login-card--linkedin">
              <div className="row no-gutters align-items-center">
                <img
                  src="https://minio.codingminutes.com/assets/linkedin-logo.svg"
                  alt="Linkedin"
                />
                <div className="flex-1">Continue with Linkedin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
