import type { Canteen } from '../types/menu'


export default function Canteen(props: Canteen) {

    return ( <div className='p-4'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
    )
}