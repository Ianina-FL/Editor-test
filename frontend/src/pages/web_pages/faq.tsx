import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Editor test';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and who is it for?',
      answer:
        '${projectName} is a CRM solution tailored for the legal industry, designed to streamline operations and enhance communication across departments like sales, customer service, and marketing.',
    },
    {
      question: 'How does ${projectName} improve lead management?',
      answer:
        'With ${projectName}, you can efficiently track and manage leads, update their statuses, and ensure timely follow-ups, maximizing conversion rates and client engagement.',
    },
    {
      question: 'Is ${projectName} secure for handling sensitive data?',
      answer:
        'Yes, ${projectName} employs advanced security measures, including encryption and regular backups, to ensure your data is protected at all times.',
    },
    {
      question: 'Can ${projectName} integrate with other tools?',
      answer:
        'Absolutely! ${projectName} offers integration capabilities with popular tools and platforms, ensuring a seamless workflow across your existing systems.',
    },
    {
      question: 'What support options are available with ${projectName}?',
      answer:
        'We provide comprehensive support, including onboarding assistance, training sessions, and 24/7 customer service to ensure you get the most out of ${projectName}.',
    },
    {
      question: 'Is there a trial version of ${projectName}?',
      answer:
        'Yes, we offer a free trial period for new users to explore the features and benefits of ${projectName} before committing to a subscription.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, services, and how we can assist you.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Person reading FAQ on tablet']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Get insights into our features and services.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'Editor test'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
