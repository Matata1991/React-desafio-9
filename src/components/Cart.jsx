import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { cartContext } from '../context/cartContext';


const Cart = () => {

    const { cartList, totalPrecios, eliminarDelCarrito } = useContext(cartContext)

    const CarritoVacio=  <> 
                            <center>
                            <h1>El carrito se encuentra vacio! </h1>
                            <Link to='/'>
                                <Button variant="primary">Ir a comprar!!</Button>
                            </Link> 
                            </center>
                        </>

        if (cartList.length === 0) return CarritoVacio;

    return (
        <div>
            <center>
            { cartList.map(item => <h2>Producto: {item.item.titulo}<br/> 
            Descripcion: {item.item.descripcion}<br/>
            Precio: {item.item.precio}<br/>
            Cantidad: {item.cantidad}<br/>
            <Button onClick={() => {eliminarDelCarrito(item)}} variant="primary">Eliminar item</Button>
            </h2>)
            }
            <h3>Precio total: {totalPrecios()}</h3>
            </center>
        </div>
    )
}

export default Cart
