
import './Card.css'
export default function Card(props) {
    const { titulo } = props;
    return (
        <div className="card">
            <div className="title">{titulo}</div>
            
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}