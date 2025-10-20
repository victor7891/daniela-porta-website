import { useState, useEffect } from "react";
import Section from "../components/Section";
import ContactHome from "../components/ContactHome.jsx";
import Button from "../components/Button.jsx";

const SERVICIOS = [
  {
    title: "Sesiones 1:1",
    slug: "sesiones",
    img: "images/sesiones-1-2-1.webp",
    description: "Sesiones online y presenciales en Barcelona"
  },
  {
    title: "Talleres y eventos",
    slug: "talleres-y-eventos",
    img: "images/talleres-y-eventos.jpg",
    description: "Experiencias de conexión y aprendizaje colectivo"
  },
  {
    title: "Retiros",
    slug: "retiros",
    img: "images/retiros.jpg",
    description: "Experiencias inmersivas donde integramos el yoga con el autoconocimiento"
  }
];

export default function Home() {
    const [textVisible, setTextVisible] = useState(false);
    const [heroAnimated, setHeroAnimated] = useState(false);

    useEffect(() => {
        // Start text animation after a small delay
        const textTimer = setTimeout(() => {
            setTextVisible(true);
        }, 0);

        // Start hero height transition after text appears
        const heroTimer = setTimeout(() => {
            setHeroAnimated(true);
        }, 200); // 300ms delay + 1500ms for text animation

        return () => {
            clearTimeout(textTimer);
            clearTimeout(heroTimer);
        };
    }, []);

    return (
        <div className="container">

            <div className={`home-hero-section ${heroAnimated ? 'hero-animated' : ''}`}>
                <div className="hero-identity">
                    <div className="hero-identity__text">
                        <h2 className={`web-subtitle ${textVisible ? 'text-visible' : ''} no-margin`}>
                            Psicologa & Terapeuta
                        </h2>
                        <h1 className={`web-title ${textVisible ? 'text-visible' : ''}`}>
                            Daniela Porta
                        </h1>
                    
                        <p className={`hero-tagline ${textVisible ? 'text-visible' : ''}`}>
                            Acompaño procesos de cambio y transiciones vitales desde una mirada integrativa
                        </p>
                        <Button text="Conocer más" extraClass="secondary" link="#home-section__01"/>
                    </div>
                    <div className={`hero-content__image ${textVisible ? 'image-visible' : ''}`}/>
                </div>

            </div>

            <div className={`home-content ${heroAnimated ? 'home-content__visible' : ''}`}>
                <Section extraClass="home-section__01 section-white" id="home-section__01">
                    <p className="main-text no-margin text-center">
                            Ofrezco un espacio terapéutico donde procesar tus experiencias, conectar con tu{' '}
                            <span className="circle-text-scribbe">
                                presente
                                <svg className="circle-svg" viewBox="0 0 700.53 274.25" xmlns="http://www.w3.org/2000/svg">
                                    <path className="circle-path" d="M232.98,248.71s348.2.91,439.66-95.09S599.74-3.5,391,2.39,13.4,70.31,2.51,152.26s155.31,119.99,288.88,119.99,254.02-13.13,371.29-74.71" fill="none" stroke="#6b5759" strokeMiterlimit="10" strokeWidth="6"/>
                                </svg>
                            </span>{' '}
                            y navegar con gentileza tu periodo de cambio y transformación
                    </p>
                    <Button text="Agenda tu primera sesión" link="#home-section__contact"/>
                </Section>

                <Section title="Servicios" extraClass="home-section__02">
                    <div className="container section-container flex">
                        {SERVICIOS.map((service) => {
                        return (
                            <div className="service-card" key={service.slug}>
                            <img src={service.img} alt=""/>
                            <p className="service-card__title">{service.title}</p>
                            <hr/>
                            <p className="service-description">{service.description}</p>
                            </div>
                        );
                        })}
                    </div>
                </Section>

                <Section extraClass="home-section__03 section-white home-section__contact" id="home-section__contact">
                    <ContactHome />
                </Section>
            </div>

        </div>
    )
}