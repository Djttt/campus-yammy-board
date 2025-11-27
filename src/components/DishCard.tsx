import { Link } from "react-router-dom"
import { Card, Button, Container } from "react-bootstrap"

interface DishCardProps {
    name: string;
    tags: string[];
    price: number;
    description: string;
}

export default function DishCard(props: DishCardProps) {

    return (<>
        <Card style={{margin: "1rem"}}>
            <Container>
                <img alt="" src=""></img>
                <h3>{props.name}</h3>
                <p>{props.tags.join(", ")}</p>
                <p>{props.price}元</p>
                <p>{props.description}</p>
                <Link to='/detail'>detail</Link>
            </Container>
        </Card>
    </>
    );
}