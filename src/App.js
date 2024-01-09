import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

const App = () =>{
    return(
        <div style={{overflowX:'hidden'}}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default App;