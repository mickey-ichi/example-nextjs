import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepTwo: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    // updateContext
    // push to step 2
    router.push('/step_two').then(() => console.log('loaded page two'))
  }

  const handleBack = () => {
    router.push('/').then(() => console.log('loaded page one'))
  }

  return (
      <SellerLayout step={2} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepTwo
