import React from 'react'
import { Navbar } from '../elements/Navbar'
import { Progressbar } from '../elements/Progressbar'
import {DescriptionPage} from "../pages/home/DescriptionPage";
import {CategoriesPage} from "../pages/step_two/CategoriesPage";
import {PhotosPage} from "../pages/step_three/PhotosPage";

import styled from 'styled-components'

type SellerLayoutProps = {
    step: number,
    onNext: ()=>void,
    onBack: ()=>void,
}

export const SellerLayout = ({ step, onNext, onBack }: SellerLayoutProps ) => {

    return (
        <>
            <Navbar></Navbar>
            <Progressbar step={step}></Progressbar>
            <PageBody>
                {step === 1 && <DescriptionPage onNext={onNext} />}
                {step === 2 && <CategoriesPage onNext={onNext} onBack={onBack} />}
                {step === 3 && <PhotosPage onNext={onNext} onBack={onBack} />}
            </PageBody>
        </>
    )
}

const PageBody = styled.div`
    position: relative;
    z-index: 1;
    width: 100vw;
    height: auto;
    background: #F8F8F8;
    padding: 1rem;
`
