import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, wordsArray, setWordsArray }) => {
    const onInputChange = (event) => {
        setInput (event.target.value);
    };

const onFormSubmit = (event) => {
    event.preventDefault();
    setWordsArray([ ... wordsArray, { id: uuidv4(), title: input}]);
    setInput("");
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Следующий ход..."
            value={input}
            required
            onChange={onInputChange}
        />
            <button type="submit">
                Ход
            </button>
        </form>
    );
};

export default Form;


