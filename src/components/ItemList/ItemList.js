import React from 'react';
import Item from '../Item/Item';


const ItemList = ({Productos}) => {

	return (
		Productos.map((Productos) => <Item key = {Productos.id} Productos = {Productos}/>)
	);
};

export default ItemList;