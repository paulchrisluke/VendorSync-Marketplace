import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
// import { customHeadProps } from '@/utils'
// import { CustomHead } from '@/components/CustomHead'
// import { HeroSub } from '@/components/HeroSub'

// const headProps = customHeadProps({
//   og: {
//     title: 'Privacy Policy | Bull City Legal Services',
//     url: 'https://bullcitylegalservices.com/policies/privacy',
//     description: "Welcome to our website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use: The content of this website is for informational purposes only and is subject to change without notice."
//   },
//   title: 'Privacy Policy | Bull City Legal Services',
//   canonicalUrl: 'https://bullcitylegalservices.com/policies/privacy',
//   description: "Welcome to our website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use: The content of this website is for informational purposes only and is subject to change without notice."
// })

export default function Privacy() {
  return (
    <>
      {/* <CustomHead { ...headProps } /> */}
      <Header />
      <main>
      <div className="bg-white px-6 pt-8 pb-12 sm:pb-16">
  <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
  <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
heading
</h1>
  <p className='text-base leading-7 text-gray-600'>
    test
    </p>
    </div>
    </div>

      </main>
      <Footer />
    </>
  )
}