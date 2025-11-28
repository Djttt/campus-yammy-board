import Window from "./Window";
import { Row, Col } from "react-bootstrap"
import type { Floor } from "../types/menu";

export default function Floor(props: Floor) {
    
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
                    <Window  {...w}></Window>
                </Col>)
            }
        </Row>        
    </div>
    );
}