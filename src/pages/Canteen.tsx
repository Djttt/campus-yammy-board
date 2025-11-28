import type { Canteen } from '../types/menu'
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'


export default function Canteen(props: Canteen) {

    const navigate = useNavigate();

    function navTofloor(floorId: string) {
        navigate(`/canteens/${props.id}/floors/${floorId}`);
    }

    return ( <div className='p-2'>
        <h1 className="mb-4">{props.name}</h1>
        <img src={props.imgUrl} alt={props.name} />
        <p>{props.description}</p>

        <Tabs 
            id='canteen-tabs'
            className='mb-3'>
                <Tab eventKey="floors" title="楼层">
                    <div className="mt-3">
                        {props.floors.map(floor => 
                            <div key={floor.id} className='p-3 border rounded mb-3'
                                onClick={() => navTofloor(floor.id)}>
                                <h4>{floor.name}</h4>
                                <p>窗口数量：{floor.windows.length}</p>
                            </div>
                        )}
                    </div>
                </Tab>
        </Tabs>
    </div>
    )
}