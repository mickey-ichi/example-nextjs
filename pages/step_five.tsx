import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepFive: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/step_six').then(() => console.log('loaded page six'))
  }

  const handleBack = () => {
    router.push('/step_four').then(() => console.log('loaded page four'))
  }

  return (
      <SellerLayout step={5} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepFive
