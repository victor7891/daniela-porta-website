import Section from "../components/Section";

export default function Home() {
    return (
        <>
            <div className="home-hero-section hero-text-animated">
                <h1 className="web-title text-center">Daniela Porta</h1>
                <h2 className="web-subtitle center">Psicología Integrativa</h2>
            </div>

            <Section>
                <div className="section home__section flex flex-row">
                    <p>
                        Desde una mirada integral abordaremos tu <span className="circle-text">momento</span> actual y navegaremos juntxs tu periodo de transformación.
                    </p>
                    <div className="image__home-section-01"/>
                </div>
            </Section>
        </>
    )
}