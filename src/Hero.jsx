import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            consequuntur laborum neque ea tempora quia corporis, quisquam ut
            temporibus saepe eum similique deserunt voluptates, cum error!
            Tempore nobis sunt reprehenderit?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className='img'/>
        </div>
      </div>
    </div>
  )
}
export default Hero
