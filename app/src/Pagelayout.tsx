import Header from './components/Header'
import Footer from './components/Footer'
import Landingpage from './pages/Landingpage'
import Container from '@material-ui/core/Container'
import React from "react";


const Pagelayout = () => {
    return (
        <div>
            <Header />
                {/* <Container>
                    <Landingpage />
                </Container> */}
            <Footer />
        </div>
    )
}

export default Pagelayout