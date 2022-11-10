// TODO: create a component that displays a single bakery item
import { useId } from "react"

// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div>
            {props.item.name}
            <img src={props.item.image} />
            {props.item.price}
            <button onClick={() => props.updateCart(props.index)}> Add {props.item.name} to your cart!</button>
        </div>
    )
    
}
