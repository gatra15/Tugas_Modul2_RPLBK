import React from 'react';
import './Card.css';

//menggunakan JSX
const ReactJSX = (props) => {
    return (
        <div className="card">
        <img src="avatar.png" alt="Avatar" />
            <div className="container">
                <h4>{props.dataAegis.nama_panggilan}</h4>
                <h4>{props.dataAegis.nama_lengkap}</h4>
                <h4>{props.dataAegis.nim}</h4>
                <h4>{props.dataAegis.email}</h4>
                <h4>{props.dataAegis.hobi}</h4>
            </div>
        </div>
        
    );
}

export default ReactJSX;