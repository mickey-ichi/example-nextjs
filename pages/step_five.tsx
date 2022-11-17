import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepFive: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/finish').then(() => console.log('loaded finish page'))
  }

  const handleBack = () => {
    router.push('/step_four').then(() => console.log('loaded page four'))
  }

  return (
      <SellerLayout step={5} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepFive
