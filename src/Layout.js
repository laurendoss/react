import React from 'react'
import Navbar from './Components/Navbar/index'
import {Container, Header, Content, Footer, Sidebar} from 'rsuite'
import './index.css'



const Layout = () => {

return (
<Container>
    <Sidebar><Navbar/></Sidebar>
    <Container>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Container>
</Container>
    )
}

export default Layout