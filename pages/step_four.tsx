import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepFour: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    // updateContext
    // push to step 2
    router.push('/step_four').then(() => console.log('loaded page four'))
  }

  const handleBack = () => {
    router.push('/step_three').then(() => console.log('loaded page three'))
  }

  return (
      <SellerLayout step={4} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepFour
