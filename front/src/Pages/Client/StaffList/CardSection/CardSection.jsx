/* eslint-disable react/prop-types */
import Card from "../../Card/Card";
import './cardSection.css';

const CardSection = ({ staff }) => {
    return (
        <div className="cards-container">
            {staff.map(professional => (
                <Card key={professional.id}
                    name={professional.name}
                    surname={professional.surname}
                    profession={professional.profession}
                    registration={professional.registration}
                    urlImg={professional.url_img} />
            ))}
        </div>
    )
} 
export default CardSection;