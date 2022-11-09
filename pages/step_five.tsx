import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepFive: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    // updateContext
    // push to step 2
    router.push('/step_five').then(() => console.log('loaded page five'))
  }

  const handleBack = () => {
    router.push('/step_four').then(() => console.log('loaded page four'))
  }

  return (
      <SellerLayout step={5} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepFive
