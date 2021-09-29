import React, { useState, useEffect }  from 'react'
import {get} from '../Utils/Mock';
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom";

function ItemListContainer() {
    
     const [productos, setProductos] = useState([])
     const [cargando, setCargando] = useState(true)
     const { idCategoria } = useParams()

   useEffect(() => {

      if(idCategoria){
         get 
         .then(respuesta =>{
            setProductos( respuesta.filter(prod => prod.categoria === idCategoria) )
         console.log(respuesta)
         })
         .catch(error => console.log(error))
         .finally(() => setCargando(false)) 
      }else {
         get 
         .then(respuesta =>{
            setProductos(respuesta)
         })
         .catch(error => console.log(error))
         .finally(() => setCargando(false))      
      }
   }, [idCategoria])

     
    return (
        <>
        <div>
            {cargando ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}
        </div>
        </>
      )
}
export default ItemListContainer
