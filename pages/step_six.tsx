import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const StepSix: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/step_six').then(() => console.log('loaded page six again'))
  }

  const handleBack = () => {
    router.push('/step_five').then(() => console.log('loaded page five'))
  }

  return (
      <SellerLayout step={6} onNext={handleNext} onBack={handleBack} />
  )
}

export default StepSix
