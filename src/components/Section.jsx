export default function Section({title, extraClass, id, children}) {
    return (
        <section className={`${extraClass} section`} id={id}>
            {title && <h2 className="section__title">{title}</h2>}
            {children}
        </section>
    )
}