import { Item } from "../components/Item"

export const ItemList = ({products}) => 
products.map(prenda => <Item key={prenda.id} prenda={prenda}/>)