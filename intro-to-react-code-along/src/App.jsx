import Background from "./Background";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {

        return (
            <div className="App">
                <Navbar />
                <Background
                    imgUrl={
                            "https://res.cloudinary.com/dkeozpkpv/image/upload/v1710865658/mall_uhzans.jpg"
                            }/>
                <Footer />
            </div>
        );
}
    
export default App

