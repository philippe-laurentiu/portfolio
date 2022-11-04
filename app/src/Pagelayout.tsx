import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Pagelayout = (): any => {
  return (
        <div>
            <Header />
                <Outlet />
                {/* <Container>
                    <Landingpage />
                </Container> */}
            <Footer />
        </div>
  )
}

export default Pagelayout
