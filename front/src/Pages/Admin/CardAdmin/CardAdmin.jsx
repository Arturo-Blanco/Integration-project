/* eslint-disable react/prop-types */
import '../../Client/Card/card.css';
import './cardAdmin.css';

const Card = ({ name, surname, profession, registration, urlImg, onClickEdit, onClickDelete }) => {

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
                <button type='button' className='btn-edit'  onClick={onClickEdit}>Editar</button>
                <button type='button' className='btn-delete' onClick={onClickDelete}>Eliminar</button>
            </div>
        </article>
    )
}
export default Card;