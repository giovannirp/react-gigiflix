import React from "react";
import Header from "../header/header";
import Footer from "../footer/Footer";
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

const PageDefault = ({children}) => {
    return (
        <React.Fragment>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default PageDefault;