import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExportApp = () => {
    const[categories, setCategories] = useState(['One punch', 'Samurai X']);
    const onAddCategory = (newCategory) => {
        // categories.push(newCategoy); -- evitar el push en lo posible
        // setCategories([...categories, 'Hola mundo']);
        // setCategories( cat => [...cat, 'Hola mundo']);

        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } />
                // on : emite un valor
                onNewCategory={ value => onAddCategory(value) } />

            {
                categories.map(category => (
                    <GifGrid key={ category } category= { category } />
                ))
            }
        </>
    );
}


const ccc = 'pQFaR1sPJU1TJbzzqkRMMmVyjQ5bHZQu';