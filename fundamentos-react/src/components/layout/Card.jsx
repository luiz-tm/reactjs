
import './Card.css'
export default function Card(props) {
    const { titulo } = props;

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title">{titulo}</div>
            
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}