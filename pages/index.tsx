import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { CurrentFormProvider } from '../context/CurrentFormContext'
import { SellerLayout } from "../components/modules/SellerLayout"

const Home: NextPage = () => {
    const router = useRouter()

    const handleNext = () => {
        // updateContext
        // push to step 2
        router.push('/step_two')
    }
    return (
      <CurrentFormProvider>
          <SellerLayout step={1} onNext={handleNext} />
              {/* <DescriptionPage value={{title: ''}} onNext={handleNext}/> */}
      </CurrentFormProvider>
    )
}

export default Home
