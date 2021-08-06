import React from 'react';
import { useDispatch } from 'react-redux';
import { BaseModal } from '~/components/base/modal';
import { SCREEN_SIZE_MODAL } from '~/constants/modal';
import Config from '~/config';
import { setActiveModal } from '~/store/action/ui';

export const ScreenSizeModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <BaseModal name={SCREEN_SIZE_MODAL} className="d-md-none d-flex">
      <div className="overlay__modal__title mb-3">SORRY :(</div>
      <img
        src="https://minio.codingminutes.com/assets/cm-logo-oneline.svg"
        alt="Coding Minutes Logo"
        style={{ height: '20px' }}
        className="mb-3"
      />
      <div>
        IDE doesn't support screen widths smaller than <strong>768px</strong> at the moment! To give
        you an idea why, we've kept every non-responsive piece transparent in the background!
        <br />
        <strong>YUP! Pretty broken. :)</strong>
      </div>
      <div className="overlay__modal__divider"></div>
      <div>
        Move to a bigger screen size, fix your aspect ratio or just zoom out to sort this issue.
        IDE's shouldn't have mobile views in the first place but we're working on it for you. Hope
        you had fun interacting with a fellow dev who wanted to vent.
        <br />
        <strong>Thanks for hearing me out! HAPPY CODING. :)</strong>
      </div>
    </BaseModal>
  );
};
