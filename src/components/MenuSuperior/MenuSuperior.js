import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenuSuperior extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Klinsmann</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarNav">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Resumo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/consulta" className="nav-link">Consultas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faturamento" className="nav-link">Faturamentos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MenuSuperior;