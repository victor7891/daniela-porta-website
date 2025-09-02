export default function Section({title, children}) {

    console.log(title);
    
    return (
        <section className="section">
            <h2 className="section__title">{title}</h2>
            {children}
        </section>
    )
}