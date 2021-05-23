import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStdin } from '~/store/action/editor';
import { getStdin } from '~/store/getters/editor';


export const InputFragment: React.FC = () => {
    const dispatch = useDispatch();

    const stdin = useSelector(getStdin());
    const setInput = (input) => dispatch(setStdin(input));

    return (
        <textarea 
            placeholder="Input goes here..."
            value={stdin}
            onChange={(e) => setInput(e.target.value)}
        ></textarea>
    )
}
