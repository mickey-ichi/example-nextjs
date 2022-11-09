import React from 'react'
import { Navbar } from '../elements/Navbar'
import { Progressbar } from '../elements/Progressbar'
import { DescriptionPage } from "../pages/home/DescriptionPage";
import { CategoriesPage } from "../pages/step_two/CategoriesPage";
import { PhotosPage } from "../pages/step_three/PhotosPage";
import { DeliveryPage } from "../pages/step_four/DeliveryPage";
import { ComplaintsPage } from "../pages/step_five/ComplaintsPage";
import {PageBody} from "../elements/PageBody";

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
                {step === 4 && <DeliveryPage onNext={onNext} onBack={onBack} />}
                {step === 5 && <ComplaintsPage onNext={onNext} onBack={onBack} />}
            </PageBody>
        </>
    )
}
