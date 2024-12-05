import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";


export default function Layout({children}) {
    return(
        <>
            <Header/>
            <div className="min-h-[90vh] flex items-start justify-center">
                <div className="w-9/12">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}