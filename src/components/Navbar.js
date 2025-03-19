function Navbar() {
    return (
      <div class="navbar">
        <div class="navbar__s1">
          <h1 class="name__s1__title">
            Udemy
          </h1>
  
        </div>
  
        <div class="navbar__s2">
  
          <i class="fa-solid fa-magnifying-glass" style={{ color: " #00090a;" }}></i>
          <input placeholder="Search for any thing hear.Tech,Business,Art.." />
        </div>
  
        <div class="navbar__s3">
          <p>Courses</p>
          <div class="Mylearning">
            <p>My Learning</p>
            <div class="Mylearning__popup">
              <p>You did not purachase any  thing yet</p>
            </div>
          </div>
          <i class="fa-solid fa-cart-shopping" style={{ color: " #00040a;" }}></i>
          <i class="fa-regular fa-bell" style={{ color: " #00040a;" }}></i>
          <i class="fa-regular fa-user" style={{ color: " #00040a;" }}></i>
  
        </div>
        <div class="menu-bar"><i class="fa-solid fa-bars"></i></div>
  
  
      </div>
    )
  }
  export default Navbar