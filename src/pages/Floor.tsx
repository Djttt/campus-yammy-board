import Window from "./Window";
import { Row, Col } from "react-bootstrap"
import type { Floor } from "../types/menu";

interface floorProps extends Floor {
    canteenId: string;
}

export default function Floor(props: floorProps) {
    
    return (<div>
        <Row>
            {
                props.windows.map(w => 
                <Col 
                    key={w.id} 
                    xm={12} 
                    md={6}
                    lg={4}
                >
                    <Window  {...w} canteenId={props.canteenId} floorId={props.id}></Window>
                </Col>)
            }
        </Row>        
    </div>
    );
}