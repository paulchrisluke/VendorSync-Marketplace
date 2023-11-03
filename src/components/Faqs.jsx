import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is a multivendor marketplace app for Shopify?',
      answer:
        'A multivendor marketplace app for Shopify is a powerful tool that allows businesses to transform their Shopify store into a platform where multiple sellers can list and sell their products, creating a larger and more diverse product catalog.',
    },
    {
      question: 'How can joining a multivendor marketplace benefit my business?',
      answer: 'Joining a multivendor marketplace app can significantly expand your product offerings, attract more customers, increase revenue streams, and boost overall visibility in the e-commerce market.',
    },
    {
      question: 'Is it easy to set up and manage a multivendor marketplace on Shopify?',
      answer:
        'Absolutely! Our app offers an intuitive and user-friendly interface, making it seamless to set up, customize, and manage your multivendor marketplace. No technical expertise required!',
    },
  ],
  [
    {
      question: 'What features does the multivendor marketplace app offer?',
      answer:
        'Our app provides a wide range of features including customizable storefronts for each seller, secure payment processing, order management, reviews and ratings, robust reporting tools, and more.',
    },
    {
      question:
        'How does the payment process work for sellers?',
      answer:
        'Sellers can choose from various payment methods, and their earnings are securely processed and directly deposited into their preferred account. Our app ensures a transparent and hassle-free payment process.',
    },
    {
      question:
        'Is there a support system in place for sellers on the multivendor marketplace?',
      answer:
        'Yes, we offer dedicated support for both sellers and administrators. Our team is here to assist with any questions or issues to ensure a seamless experience for everyone involved.',
    },
  ],
  [
    {
      question: 'Can I track the performance and analytics of my sales?',
      answer:
        'Yes, our app comes with robust reporting and analytics tools that allow you to track sales, monitor seller performance, and gain valuable insights to make data-driven decisions.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
