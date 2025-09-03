export default function Section({title, extraClass, children}) {

    console.log(title);

    return (
        <section className={`${extraClass} section`}>
            {title && <h2 className="section__title">{title}</h2>}
            {children}
        </section>
    )
}