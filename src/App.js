import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Categories from "./components/Categories"
import Popular from "./components/Popular"
import Saleimage from "./components/Saleimage"
import Recomanded from "./components/Recomanded"
import Topics from "./components/Topics"

function App(){
    return(
        <div>   <Navbar></Navbar>
        <Categories></Categories>
        <Saleimage></Saleimage>
        <Recomanded></Recomanded>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
        </div>
    )

}
export default App