import Section from "../components/Section";

export default function Home() {
    return (
        <>
            <div className="home-hero-section">
                <h1 className="web-title text-center">Daniela Porta</h1>
                <h2 className="web-subtitle center">Psicología Integrativa</h2>
            </div>

            <Section extraClass="home-section__01">
                <div className="container gap-16 section-container home__section flex flex-row flex-center">
                    <p className="flex-basis-66 no-margin">
                        Desde una mirada integral abordaremos tu <span className="circle-text">momento</span> actual y navegaremos juntxs tu periodo de transformación.
                    </p>
                    <div className="image__home-section-01 window-shaped-image flex-basis-33"/>
                </div>
            </Section>
        </>
    )
}