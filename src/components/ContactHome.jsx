export default function ContactHome() {
  return (
    <div className="section__two-columns gap-40 flex flex-center flex-between">
      <div className="flex-grow flex-basis-50 no-margin">
        <p className="main-text">
          ¿Trabajamos juntxs?
        </p>
        <p className="main-text">
          Contactame para una sesión
        </p>

        <hr/>

        <div className="contact-info">
          <p><b><i>@danielaportapsic</i></b></p>

          <div className="contact-info__item flex">
            <img src="images/icons/phone.svg" alt=""/>
            <div>
              <p>WHATSAPP</p>
              <p>+ 34 666 640 595 </p>
            </div>
          </div>

          <div className="contact-info__item flex">
            <img src="images/icons/correos.svg" alt=""/>
            <div>
              <p>Correo</p>
              <p>danielaportapsicologa@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

      <div className="img image__home-section-03"/>

    </div>
  )
}