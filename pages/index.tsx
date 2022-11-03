import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SellerLayout } from "../components/modules/SellerLayout"

const Home: NextPage = () => {
    const router = useRouter()

    const handleNext = () => {
        // updateContext
        // push to step 2
        router.push('/step_two')
    }

    return (
            <SellerLayout
                step={1}
                onNext={handleNext}
                onBack={function (): void {
                    throw new Error('Function not implemented.')
                } }
            />
    )
}

export default Home
