import '../styles/globals.css'
import {MainContextProvider} from "../config/mainContext";

function MyApp({Component, pageProps}) {
    return <MainContextProvider>
        <Component{...pageProps}/>
    </MainContextProvider>

}

export default MyApp
