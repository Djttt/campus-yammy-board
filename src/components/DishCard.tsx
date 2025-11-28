import { Link } from "react-router-dom"
import { Card, Container } from "react-bootstrap"

import type { Dish } from "../types/menu"

export default function DishCard(props: Dish) {

    return (<>
        <Card style={{margin: "1rem"}}>
            <div>
                <Container>
                    <img  style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "4 /3",
                        objectFit: "cover",  
                        borderRadius: "8px",
                        padding: "2px"
                    }}
                        alt={props.name} src={props.imageUrl}>
                    </img>
                    <h3>{props.name}</h3>
                    <p>{props.tags.join(", ")}</p>
                    <p>价格: {props.price}元 分类: {props.category}</p>
                    <p>rating: {props.rating}  calories: {props.calories}J</p>
                    <Link to={`/detail/${props.name}` + `-${props.id}`}>详情</Link>
                </Container>
            </div>

        </Card>
    </>
    );
}