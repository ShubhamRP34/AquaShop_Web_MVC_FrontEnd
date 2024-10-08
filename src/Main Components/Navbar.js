import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <img src="logo/favicon-32x32.png" alt="Aqualogo"  style={
                        {marginRight : "10px", borderRadius : "5px"}
                        }/>
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">but</span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link"  to="/Fish Home" >Fish</Link>
                            </li> */}

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Products
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Fish Home">Fish</Link></li>
                                    <li><Link className="dropdown-item" to="/">Food </Link></li>
                                    <li><Link className="dropdown-item" to="/">Accessories </Link></li>
                                    <li><Link className="dropdown-item" to="/">Medicines</Link></li>
                                    <li><Link className="dropdown-item" to="/">Decoration </Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="/">Disabled</Link>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search"> */}
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <button className="btn btn-outline-success" type="submit">Sign in</button>
                        {/* </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
