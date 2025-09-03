import Section from "../components/Section";
import ContactHome from "../components/ContactHome.jsx";

const SERVICIOS = [
  {
    title: "Sesiones 1:1",
    slug: "sesiones",
    img: "images/sesiones-1-2-1.webp",
    description: "Sesiones online y presenciales en Barcelona"
  },
  {
    title: "Retiros",
    slug: "retiros",
    img: "images/retiros.webp",
    description: "En estas experiencias inmersivas que realizo junto con otros profesionales integramos el yoga con el autoconocimiento"
  },
  {
    title: "Constelaciones Familiares",
    slug: "constelaciones",
    img: "images/constelaciones.webp",
    description: "Talleres grupales para contactar con el inconsciente familiar y sanar en conjunto"
  }
]

export default function Home() {
    return (
        <div className="container">

            <div className="home-hero-section">
                <h1 className="web-title text-center">Daniela Porta</h1>
                <h2 className="web-subtitle center">Psicología Integrativa</h2>
            </div>

            <Section extraClass="home-section__01 section-linear-white">
                <div className="section__two-columns gap-40 flex flex-center">
                    <p className="main-text flex-basis-66 no-margin">
                        Desde una mirada integral abordaremos tu <span className="circle-text">momento</span> actual y navegaremos juntxs tu periodo de transformación.
                    </p>
                    <div className="img image__home-section-01"/>
                </div>
            </Section>

            <Section title="Servicios" extraClass="home-section__02">
              <div className="container gap-40 section-container flex">
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

            <Section extraClass="home-section__03 section-white home-section__contact">
              <ContactHome />
            </Section>

        </div>
    )
}