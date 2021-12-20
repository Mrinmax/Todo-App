import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch} from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setCheck(id))
    }


    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                name="checkedB"
                color="primary"
            />

            
            <p className={done && "todoItem--done"}>{name}</p>
        </div>
    )
}

export default TodoItem;
