import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepThree: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    // updateContext
    // push to step 2
    router.push('/step_three').then(() => console.log('loaded page three'))
  }

  const handleBack = () => {
    router.push('/step_two').then(() => console.log('loaded page two'))
  }

  return (
      <SellerLayout step={3} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepThree
