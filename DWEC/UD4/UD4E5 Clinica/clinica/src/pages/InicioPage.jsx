import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import $negocio from '../core/negocio.js';
import './inicio.css';
import imagen from '../assets/clinica.jpg';

function InicioPage() {

    return (
        <>
            <div className='titulo'>
                <h1>Bienvenidos a la Clinica</h1>
            </div>
            <div className='texto'>
                <p>
                    En esta clínica, nos comprometemos a cuidar de tu salud con profesionalismo,
                    empatía y atención personalizada. Nuestro equipo de especialistas está dedicado
                    a brindarte un servicio integral en un entorno seguro, moderno y acogedor.
                    Tu bienestar es nuestra prioridad. Ya sea que necesites una consulta preventiva,
                    tratamiento especializado o simplemente orientación médica, estamos aquí para
                    acompañarte en cada paso del camino.<br></br>
                    Te invitamos a conocernos y descubrir cómo podemos ayudarte a vivir mejor,
                    con salud y confianza.
                </p>
            </div>
            <div className='noticias'>
                <div className='articulo'>
                    <h3>5 señales de que necesitas un chequeo médico ya</h3>
                    <p>Aprende a identificar síntomas comunes que no debes ignorar.
                        La prevención es la clave de una buena salud.</p>
                </div>
                <div className='articulo'>
                    <h3>Cómo fortalecer tu sistema inmune de forma natural</h3>
                    <p>Descubre hábitos simples y efectivos para mejorar tus defensas
                        sin recurrir a suplementos innecesarios.</p>
                </div>
                <div className='articulo'>
                    <h3>¿Cuándo fue tu última revisión general?</h3>
                    <p>Te contamos por qué una evaluación médica anual puede hacer
                        la diferencia en tu bienestar a largo plazo.</p>
                </div>
            </div>
        </>
    );
}

export default InicioPage;