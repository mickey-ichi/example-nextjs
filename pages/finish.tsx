import type { NextPage } from 'next'
import { SellerLayout } from "../components/modules/SellerLayout";
import { useRouter } from 'next/router'

const Finish: NextPage = () => {
  const router = useRouter()

  const handleNext = () => {
    router.push('/display_results').then(() => console.log('loaded display results page again'))
  }

  const handleBack = () => {
    router.push('/finish').then(() => console.log('loaded finish page'))
  }

  return (
      <SellerLayout step={6} onNext={handleNext} onBack={handleBack} />
  )
}

export default Finish
