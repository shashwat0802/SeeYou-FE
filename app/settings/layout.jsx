import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

export default function layout ({ children }) {
    return(
        <>
        <Navbar/>
        {children}
        <Footer />
        </>
    )
}