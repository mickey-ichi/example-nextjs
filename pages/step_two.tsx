import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepTwo: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    // updateContext
    // push to step 3
    router.push('/step_three').then(() => console.log('loaded page three'))
  }

  const handleBack = () => {
    router.push('/').then(() => console.log('loaded page one'))
  }

  return (
      <SellerLayout step={2} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepTwo
