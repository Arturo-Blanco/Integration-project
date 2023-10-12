/* eslint-disable react/prop-types */
import { useState } from "react";
import CardAdmin from "../../CardAdmin/CardAdmin";
import './cardSection.css';
import { getCreate, getDelete, getUpdate } from "./services/api.mjs";

const CardSection = ({ staff }) => {

    const [idProfessional, setIdProfessional] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        profession: '',
        registration: '',
        url_img: ''
    })

    const hadleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (professional) => {
        setFormData(professional)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!idProfessional) {
                await getCreate(formData);
                console.log('Profesional añadido exitosamente');
            }

            if (idProfessional) {
                await getUpdate(idProfessional, formData);
                console.log('Profesional editado exitosamente');
            }
            setFormData({
                name: '',
                surname: '',
                profession: '',
                registration: '',
                url_img: ''
            })
            setIdProfessional(null)
        } catch (error) {
            console.error('Hubo un error:', error.message);
        }
    }

    const handleDelete = async (professionalId) => {
        try {
            await getDelete(professionalId)
        } catch (error) {
            console.error('Hubo un error:', error.message);
        }
    }
    return (
        <>
            <form id='staff-form' className="staff-form" onSubmit={handleFormSubmit}>
                <label className='label-form' htmlFor="">Apellido</label>
                <input id="input-surname" className="input-form" type="text" name="surname" value={formData.surname} onChange={hadleInputChange} required />
                <label className='label-form' htmlFor="">Nombre</label>
                <input id="id-name" className="input-form" type="text" name="name" value={formData.name} onChange={hadleInputChange} required />
                <label className='label-form' htmlFor="">Profesion</label>
                <input id="id-profession" className="input-form" type="text" name="profession" value={formData.profession} onChange={hadleInputChange} required />
                <label className='label-form' htmlFor="">Matricula</label>
                <input id="id-registration" className="input-form" type="text" name="registration" value={formData.registration} onChange={hadleInputChange} required />
                <label className='label-form' htmlFor="">url-Imagen</label>
                <input id="id-img" className="input-form" type="text" name="url_img" value={formData.url_img} onChange={hadleInputChange} required />
                <button className="btn-form" type="submit">Agregar</button>
            </form>
            <div className="cards-container">
                {staff.map(professional => (
                    <CardAdmin key={professional.id}
                        name={professional.name}
                        surname={professional.surname}
                        profession={professional.profession}
                        registration={professional.registration}
                        urlImg={professional.url_img}
                        onClickEdit={() => { handleEdit(professional), setIdProfessional(professional.id) }}
                        onClickDelete={() => { handleDelete(professional.id) }}
                    />
                ))}
            </div>
        </>
    )
}
export default CardSection;