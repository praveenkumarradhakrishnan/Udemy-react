
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Recomanded() {
    return (
      <div class="Recomanded">
  
        <div class="Recomanded__course-card">
          <h1 class="Recomanded__course-card_title">Recomanded for you</h1>
          <p>Pick the best fit</p>
        </div>
        <div class="Recomanded_container">
          <div class="course-card">
            <img src={c1}alt="c1"></img>
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
            <img src={c3}alt="c3"></img>
            <h3>2025 python Data Visaulisation</h3>
            <p>colson mag</p>
            <p>4.3 ⭐⭐⭐⭐</p>
            <p>699 <del>1999</del></p>
          </div>
          <div class="course-card">
            <img src={c4} alt="c4"></img>
            <h3>Master UI/UX design With figma</h3>
            <p>jenifer</p>
            <p>4.4 ⭐⭐⭐⭐</p>
            <p>499 <del>1099</del></p>
          </div>
        </div>
      </div>
    )
  }
  export default Recomanded