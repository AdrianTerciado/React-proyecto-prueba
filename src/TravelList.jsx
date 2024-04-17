import React, { useState } from 'react'
import TravelItem from './TravelItem'
import data from './data'

function TravelList() {

    const [list, setList] = useState(data); // [{},{},{}] lista de items

    const paintItems = () =>
        list.map((item, index) => 
            <TravelItem
                key={index}
                title={item.title}
                desc={item.desc}
                img_url={item.img_url}
                delete={ () => deleteItem(index)}
            />
        );

    const clearItems = () => setList([]); // vacia la lista

    const resetItems = () => setList(data);

    const createItem = () => {
        alert("Crear destino nuevo");
        const title = prompt("Introduce el título del destino");
        const desc = prompt("Introduce la descripción del destino");
        const img_url = prompt("Introduce la url de imagen");

        const item = { title, desc, img_url }; // Nuevo objeto destino
        //list.push(item); // No se recomiendoa modificar directamente. Usar setList
        setList([...list, item]); // Añade el nuevo destino a la lista
    }

    const deleteItem = (pos) => {
        alert("Borrar destinoO");
        const remainingItems = list.filter((item, index) => index !== pos);
        setList(remainingItems);
    }

    return (
        <section>
            <h2>Aquí va TravelList</h2>
            <button onClick={clearItems}>Borrar todo</button>
            <button onClick={resetItems}>Recargar</button>
            <button onClick={createItem}>Crear destino</button>
            {paintItems()}
        </section>
    )
}

export default TravelList