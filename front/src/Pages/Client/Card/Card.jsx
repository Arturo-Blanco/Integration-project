/* eslint-disable react/prop-types */
import './card.css';

const Card = ({ name, surname, profession, registration, urlImg }) => {
    return (
        <article className='card'>
            <div className='img-container'>
                <img className='card-img' src={urlImg ? urlImg : "https://static.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg"} alt="" />
            </div>
            <div className='card-content'>
                <h2 className='card-name'>
                    {surname + ' ' + name}
                </h2>
                <p className='card-profession'>
                    {profession}
                </p>
                <p className='card-registration'> {registration}</p>
            </div>
            <div className='btn-container'>
                <button type='button' className='btn-card'>Solicitar turno</button>
            </div>
        </article>
    )
}
export default Card;