import Navbar from "./components/navbar"
import Search from "./components/search"
import Products from "./components/products"
import About from "./components/about"
import Footer from "./components/footer"

function App(){
    return (
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <About></About>
        <Footer></Footer>
        
         </div>
    )
}
export default App;