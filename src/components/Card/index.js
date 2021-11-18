/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import './style.scss'

export default function Card({ title, description, image, url, repositorio }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt="..." />
            </div>

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <a rel="noreferrer" target="_blank" href={url}>Página</a>
                <a rel="noreferrer" target="_blank" href={repositorio}>Repositório</a>
            </div>

        </div>
    )
}
