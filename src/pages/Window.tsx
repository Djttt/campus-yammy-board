
import { Card, Button, Container } from "react-bootstrap"
import { useState } from "react"
import type { Window } from "../types/menu"
import Menu from "../pages/Menu"
import { Link } from "react-router-dom"

export interface WindowProps extends Window {
    canteenId: string;
    floorId: string; 
}

export default function Window(props: WindowProps) {

    const [shownMenus, setShownMenus] = useState(false);

    return (
        <Card>
            <h2>{props.name}</h2>
            <img alt={props.name} src={props.imageUrl} />
            <p>{props.description}</p>
            <p>提供的菜品总数: {props.dishes.length}</p>
            <Button onClick={() => setShownMenus(!shownMenus)}>提供的菜品</Button>
            {
                shownMenus && (
                    <Container className="p-3"> {
                        props.dishes.map(dish =>
                            <Link className="p-4"
                                key={dish.id} 
                                to={`/canteens/${props.canteenId}/floors/${props.floorId}/${dish.name}`}>{dish.name}
                            </Link>
                        )
                    }   
                    </Container>
                    
                    // <Menu dishes={props.dishes}></Menu>
                )
            }
        </Card>
    );
}