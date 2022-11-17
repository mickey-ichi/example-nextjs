import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const DisplayResults: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/display_results').then(() => console.log('loaded page six again'))
  }

  const handleBack = () => {
    router.push('/finish').then(() => console.log('loaded finish page'))
  }

  return (
      <SellerLayout step={7} onNext={handleNext} onBack={handleBack} />
  )
}

export default DisplayResults
