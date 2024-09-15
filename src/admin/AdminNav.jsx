import React from 'react'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../custom-hooks/useAuth'
import '../styles/admin-nav.css'
import Header from '../components/Header/Header'

const admin__nav = [
    {
        display: 'Dashboard',
        path: '/dashboard'
    },
    {
        display: 'All-Products',
        path: '/dashboard/all-products'
    },
   

]
const AdminNav = () => {

    const { currentUser } = useAuth()
    return (
        <>
           
<Header />
            <section className="admin__menu p-0">
                <Container>
                    <Row>
                        <div className="admin__navigation">
                            <ul className="admin__menu-list">
                                {
                                    admin__nav.map((item, index) => (
                                        <li className="admin__menu-item" key={index}>
                                            <NavLink to={item.path} className={navClass => 
                                                navClass.isActive ? 'active__admin-menu' : ''}
                                                >{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default AdminNav