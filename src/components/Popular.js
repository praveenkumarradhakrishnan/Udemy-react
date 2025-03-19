
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"

function Popular () {
    return (
      <div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">Pic the best pic</p>
        <div class=" popular__container">
          <div class="course-card">
            <img src={c1} alt="c1"></img>
              <h3>PHP Basic to Advanced</h3>
              <p>col Steel</p>
              <p>4.6 ⭐⭐⭐⭐</p>
              <p>499 <del>1099</del></p>
          </div>
          <div class="course-card">
            <img src={c2}alt="c2"></img>
              <h3>Basic to Advanced DSA in Java</h3>
              <p>jhon dear</p>
              <p>3.8 ⭐⭐⭐</p>
              <p>399 <del>1499</del></p>
          </div>
  
          <div class="course-card">
            <img src={c4} alt="c4"></img>
              <h3>2025 python Data Visaulisation</h3>
              <p>colson mag</p>
              <p>4.3 ⭐⭐⭐⭐</p>
              <p>699 <del>1999</del></p>
          </div>
          <div class="course-card">
            <img src={c3} alt="c3"></img>
              <h3>Master UI/UX design With figma</h3>
              <p>jenifer</p>
              <p>4.4 ⭐⭐⭐⭐</p>
              <p>499 <del>1099</del></p>
          </div>
  
  
          <div class="course-card">
            <img src={c8}alt="c8"></img>
              <h3>CS50</h3>
              <p>col Steel</p>
              <p>4.6 ⭐⭐⭐⭐</p>
              <p>499 <del>1099</del></p>
          </div>
          <div class="course-card">
            <img src={c7}alt="c7"></img>
              <h3>DAVOP</h3>
              <p>devon</p>
              <p>3.8 ⭐⭐⭐</p>
              <p>399 <del>1499</del></p>
          </div>
  
          <div class="course-card">
            <img src={c6} alt="c6"></img>
              <h3>CREO</h3>
              <p> magnus</p>
              <p>4.3 ⭐⭐⭐⭐</p>
              <p>699 <del>1999</del></p>
          </div>
          <div class="course-card">
            <img src={c5} alt="c5"></img>
              <h3>HVAC</h3>
              <p>jenipascal</p>
              <p>4.4 ⭐⭐⭐⭐</p>
              <p>499 <del>1099</del></p>
          </div>
  
        </div>
        
      </div>
    )
  }
  export default Popular