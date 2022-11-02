import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../elements/Navbar'
import { Progressbar } from '../elements/Progressbar'
import {CategoriesPage} from "../pages/step_two/CategoriesPage";

type SellerLayoutProps = {
    step: number,
    children: React.ReactNode
}

export const SellerLayout = ({ step, children }: SellerLayoutProps ) => {
    return (
       // navbar, progressbar, page template
        <>
            <Navbar></Navbar>
            <Progressbar step={step}></Progressbar>
            <PageBody>
                {children}
            </PageBody>
        </>
    )
}

const PageBody = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: #F8F8F8;
`
