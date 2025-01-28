import About from "./components/About"
import Catalog from "./components/Catalog"
import Category from "./components/Category"
import Collection from "./components/Collection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Product from "./components/Products"
import Showcase from "./components/Showcase"
import Video from "./components/Video"

function App() {
    return (
        <>
            <Header />
            <Showcase />
            <Catalog />
            <Category />
            <About />
            <Product />
            <Collection />
            <Video />
            <Footer />
        </>
    )
}

export default App
