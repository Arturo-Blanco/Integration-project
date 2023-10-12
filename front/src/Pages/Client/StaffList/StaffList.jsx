import { useEffect, useState } from "react"
import { getAll } from "./service/getStaff.mjs";
import './staffList.css';
import CardSection from "./CardSection/CardSection";
import CardSectionAdmin from '../../Admin/StaffList/CardSection/CardSectionAdmin';


const StaffList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getAll().then(data => {
            setList(data)
        })
            .catch((error) => {
                console.error('Error getting staff' + error.message)
            })
    }, [])

    return (
        <section className="cards-section">
            <div className="section-header">
            <h1 className="section-title"> Nuestro staff </h1>
            </div>
            {location.pathname === '/admin' ? <CardSectionAdmin staff ={list} /> :
            <CardSection staff={list}/> }
        </section>
    )
}
export default StaffList;