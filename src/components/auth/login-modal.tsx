import React from 'react';
import { BaseModal } from '~/components/base/modal';
import { LOGIN_MODAL } from '~/constants/modal';


export const LoginModal: React.FC = () => {
    return (
        <BaseModal name={LOGIN_MODAL} >
            <div className="overlay__modal__title mb-3">Welcome to</div>
            <img
              src="https://minio.codingminutes.com/assets/cm-logo-oneline.svg"
              alt="Coding Minutes Logo"
              style={{ height: '20px' }}
            />
            <div className="overlay__modal__divider"></div>
            <div className="overlay__modal__title mb-4">Login to your account</div>
            <div className="login-card login-card--google mb-4">
              <div className="row no-gutters align-items-center">
                <img src="https://minio.codingminutes.com/assets/google-logo.svg" alt="Google" />
                <button className="flex-1">Continue with Google</button>
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
        </BaseModal>
    )
}
