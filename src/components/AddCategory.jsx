import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        // console.log(event);
        setInputValue(target.value);
    };
    const onInputClick = () => {
        // setInputValue('');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        if (inputValue.trim().length <= 3) return;

        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange } />
        </form>
        
    )
};