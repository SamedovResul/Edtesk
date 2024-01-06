import React from 'react'

const SectionOne = () => {
  return (
    <div className='container' >
      <div className="mapBox">
        <div className="textBox">
          <p>Konsultasiya əldə edin!</p>
          <p>Hərəkətə keçmək vaxtının gəldiyini düşünürsünüzsə, bizə yazın və işinizi daha yaxşı hala gətirək.</p>
          <p>contact@entesk.com</p>
          <p>+994 55 660 91 55</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4204.717866971006!2d49.82007984925487!3d40.39077245173373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d79159f13cf%3A0x55775705138fc93b!2sASK%20Plaza!5e0!3m2!1sen!2saz!4v1704541083735!5m2!1sen!2saz" width="600" height="350" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="formBox">
        <div>
          <p>Aşağıdakı formanı doldurun. Ən qısa müddətdə cavab verəcəyik.</p>
          <form action="">
            <input type="text" name="" id="" placeholder='Adınız' />
            <input type="text" name="" id="" placeholder='Soyadınız' />
            <input type="text" name="" id="" placeholder='E-poçt ünvanınız' />
            <input type="text" name="" id="" placeholder="Əlaqə nömrəniz" />
            <span>
              <input type="text" name="" id="" placeholder="Şirkətinizin adı" />
              <input type="text" name="" id="" placeholder="Veb site (link)" />
            </span>
            <input type="text" name="" id="" placeholder="Mövzu" />
            <textarea name="" id="" placeholder="Müraciətin məzmunu" ></textarea>
            <input type="submit" value='Göndər' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SectionOne