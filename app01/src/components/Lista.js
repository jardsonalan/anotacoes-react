import React from 'react';

export default function Lista() {

    // const carros = ['HIV', 'Golf', 'Focus', 'Cruze', 'Argo'];

    const carros = [
        {categoria: 'Esporte', preco: '11000.00', modelo: 'Golf GTI'},
        {categoria: 'Esporte', preco: '12000.00', modelo: 'Camaro'},
        {categoria: 'SUV', preco: '85000.00', modelo: 'HRV'},
        {categoria: 'SUV', preco: '83000.00', modelo: 'T-Cross'},
        {categoria: 'Utilitário', preco: '120000.00', modelo: 'Hillux'},
        {categoria: 'Utilitário', preco: '90000.00', modelo: 'Ranger'}
    ];

    const listaCarros = carros.map((el, i)=>
        <li key={i}>{el.modelo} - {el.categoria} - R${el.preco}</li>
    );

    return (
        <>
            <ul>{listaCarros}</ul>
        </>
    );
};