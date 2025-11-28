
import { Card, Button } from "react-bootstrap";
import { useState } from "react"
import type { Window } from "../types/menu"
import Menu from "../pages/Menu"

export default function Window(props: Window) {

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
                    <Menu dishes={props.dishes}></Menu>
                )
            }
        </Card>
    );
}