import type { NextPage } from 'next'
import { CurrentFormProvider } from '../context/CurrentFormContext'
import { SellerLayout } from "../components/modules/SellerLayout";
import { DescriptionPage } from '../components/pages/home/DescriptionPage'
import {router} from "next/client";

const Home: NextPage = () => {
    const handleNext = (values?:any) => {
        // updateContext
        // push to step 2
        // router.push('/step_two')
    }
    return (
      <CurrentFormProvider>
          <SellerLayout step={1}>
              {/*<DescriptionPage value={{title: ''}} onNext={handleNext}/>*/}
          </SellerLayout>
      </CurrentFormProvider>
    )
}

export default Home
