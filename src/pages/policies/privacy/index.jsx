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
        {/* <HeroSub title="Privacy Policy"
          description={[
                      'We are committed to protecting your privacy. This privacy statement explains what information we collect from you when you visit our website and how we use that information. We collect personal information that you voluntarily provide to us when you fill out forms on our website or contact us by email. We also collect non-personal information, such as the type of browser you are using and the pages you visit on our website. We use the information we collect to improve the content of our website, respond to inquiries, and provide legal services to clients. We do not share your personal information with third parties unless required by law or as necessary to provide legal services to clients. We may use non-personal information to analyze website traffic and usage patterns. Any discounts offered by our law firm are conditional upon income and may not be available to everyone. By using our website, you consent to the collection and use of information as outlined in this privacy statement.'          
                    ]}
          herobgcolor="lightblue-100"
          /> */}
      </main>
      <Footer />
    </>
  )
}