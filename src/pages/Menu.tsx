import { dishesData,  } from "../data/mockData"
import { Row, Col } from "react-bootstrap"
// import { Category, FlavorTag, stallStatus } from "../types/menu"

import DishCard from "../components/DishCard"

export default function Menu() {

    const dishes = dishesData;

    return (
        <div>
            <p>This is a Menu page!</p>
            {
                <Row>
                    { dishes.map(dish => <Col key={dish.id} 
                    xm={12} md={6} lg={4}>
                        <DishCard {...dish}></DishCard>
                    </Col>) }
                </Row>
            }
        </div>
    )
}