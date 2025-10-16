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
                <h1 className={`web-title text-center ${textVisible ? 'text-visible' : ''}`}>
                    Daniela Porta
                </h1>
                <h2 className={`web-subtitle center ${textVisible ? 'text-visible' : ''} no-margin`}>
                    Terapeuta
                </h2>
            </div>

            <div className={`home-content ${heroAnimated ? 'home-content__visible' : ''}`}>
                <Section extraClass="home-section__01 section-linear-white">
                    <div className="section__two-columns gap-40 flex flex-center">
                        <div className="flex-basis-66 flex flex-column gap-40 sm-order-2">
                        <p className="main-text no-margin">
                            Te ofrezco un espacio terapéutico donde procesar tus experiencias, conectar con tu <span className="circle-text">presente</span> y navegar con gentileza tu periodo de cambio y transformación
                        </p>

                        <Button text="Agenda tu primera sesión" link="#home-section__contact"/>

                        </div>
                        <div className="img image__home-section-01 sm-order-1"/>
                    </div>
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