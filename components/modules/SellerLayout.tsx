import React from 'react'
import { Navbar } from '../elements/Navbar'
import { PageBody } from '../elements/PageBody';
import { Progressbar } from '../elements/Progressbar'
import { DescriptionPage } from "../pages/home/DescriptionPage";
import { CategoriesPage } from "../pages/step_two/CategoriesPage";

type SellerLayoutProps = {
    step: number,
    onNext: ()=>void,
    onBack: ()=>void,
    children: React.ReactNode
}

export const SellerLayout = ({ step, onNext, onBack, children }: SellerLayoutProps ) => {

    return (
        <>
            <Navbar></Navbar>
            <Progressbar step={step}></Progressbar>
            <PageBody>
                {step === 1 && <DescriptionPage onNext={onNext} />}
                {step === 2 && <CategoriesPage onNext={onNext} onBack={onBack} />}
                {step === 3 && <div>hello</div>}
            </PageBody>
        </>
    )
}
