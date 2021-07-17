import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal } from '~/store/action/ui';
import { getActiveModalName } from '~/store/getters/ui';


export interface BaseModalProps {
    name: string;
}

export const BaseModal: React.FC<BaseModalProps> = (props) => {
    const dispatch = useDispatch();
    const activeModalName = useSelector(getActiveModalName())

    const toggleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(setActiveModal(null));
        }
    };
    const overlayClassName = activeModalName === props.name ? '' : 'overlay--hidden'

    return (
        <div className={`overlay ${overlayClassName}`} onClick={toggleOverlay}>
            <div className="overlay__modal">
                <div className="w-100">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
