import { Row, Col } from "react-bootstrap"
// import { Category, FlavorTag, stallStatus } from "../types/menu"

import DishCard from "../components/DishCard"
import type { Dish } from "../types/menu"

export default function Menu(props: {dishes: Dish[]}) {

    return (
        <div>
            <p>This is a Menu page!</p>
            {
                <Row>
                    { props.dishes.map(dish => <Col key={dish.id} 
                    xm={12} md={6} lg={4}>
                        <DishCard {...dish}></DishCard>
                    </Col>) }
                </Row>
            }
        </div>
    )
}