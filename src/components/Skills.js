import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../imag/color-sharp.png"

const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Skills</h2>
                          <p>Shown here are my skills that I excel at and are good at as a front-end developer.<br></br> I look forward to developing them professionally ,and learning additional skills in the coming days.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                              <div class="progress-container">
    <svg class="progress-circle" viewBox="0 0 100 100">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className='stop0' />
                <stop offset="100%" className='stop100' />
            </linearGradient>
        </defs>
        <circle class="background" cx="50" cy="50" r="45"></circle>
        <circle class="progress" cx="50" cy="50" r="45"></circle>
    </svg>
    <div class="progress-text">90%</div>
</div> 
                                  <h5>HTML</h5>
                              </div>
                              <div className="item">
                              <div class="progress-container">
    <svg class="progress-circle" viewBox="0 0 100 100">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className='stop0' />
                <stop offset="100%" className='stop100' />
            </linearGradient>
        </defs>
        <circle class="background" cx="50" cy="50" r="45"></circle>
        <circle class="progress" cx="50" cy="50" r="45"></circle>
    </svg>
    <div class="progress-text">80%</div>
</div> 
                                  <h5>MARTIAL UI</h5>
                              </div>
                              <div className="item">
                              <div class="progress-container">
    <svg class="progress-circle" viewBox="0 0 100 100">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className='stop0' />
                <stop offset="100%" className='stop100' />
            </linearGradient>
        </defs>
        <circle class="background" cx="50" cy="50" r="45"></circle>
        <circle class="progress" cx="50" cy="50" r="45"></circle>
    </svg>
    <div class="progress-text">95%</div>
</div> 
                                  <h5>CSS</h5>
                              </div>
                              <div className="item">
                              <div class="progress-container">
    <svg class="progress-circle" viewBox="0 0 100 100">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className='stop0' />
                <stop offset="100%" className='stop100' />
            </linearGradient>
        </defs>
        <circle class="background" cx="50" cy="50" r="45"></circle>
        <circle class="progress" cx="50" cy="50" r="45"></circle>
    </svg>
    <div class="progress-text">85%</div>
</div> 
                                  <h5>JAVASCRIPT</h5>
                              </div>
                              <div className="item">
                              <div class="progress-container">
    <svg class="progress-circle" viewBox="0 0 100 100">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className='stop0' />
                <stop offset="100%" className='stop100' />
            </linearGradient>
        </defs>
        <circle class="background" cx="50" cy="50" r="45"></circle>
        <circle class="progress" cx="50" cy="50" r="45"></circle>
    </svg>
    <div class="progress-text">80%</div>
</div> 
                                  <h5>REACT</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    )
  }
  export default Skills;