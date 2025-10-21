export default function ContactHome() {
  return (
    <div className="section__two-columns gap-80 flex flex-center flex-between">
      <div className="flex-grow flex-basis-50 no-margin">
        <p className="main-text">
          Contáctame para una sesión online o presencial en Barcelona
        </p>
        <hr/>

        <div className="contact-info">
          <a href="https://www.instagram.com/danielaportapsic" target="_blank"><b><i>@danielaportapsicologa</i></b></a>

          <div className="contact-info__item flex">
            <img src="images/icons/phone.svg" alt="telefono"/>
            <div>
              <p>WHATSAPP</p>
              <a href="https://wa.me/34666640595">
                + 34 666 640 595
              </a>
            </div>
          </div>

          <div className="contact-info__item flex">
            <img src="images/icons/correos.svg" alt="correo electronico"/>
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