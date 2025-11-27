import type { Dish } from "../types/menu"

export default function Detail(props: Dish) {
    
    return (
        <div>
            <p>This is a detail page!</p>
            <p>{props.description}</p>
        </div>
    )
}