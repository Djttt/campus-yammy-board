import type { Dish } from "../types/menu"
import Giscus from '@giscus/react'
import  { giscusConfigureData } from "../types/giscus"

export default function Detail(props: Dish) {
    
    return (
        <div>
            <p>This is a detail page!</p>
            <p>{props.description}</p>
            <Giscus  
                {...giscusConfigureData}
            />
        </div>
    )
}