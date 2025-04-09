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
  FeaturesDesigns,
  AboutUsDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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

  const features_points = [
    {
      name: 'Lead Management',
      description:
        'Efficiently track and manage leads with intuitive tools. Stay updated on lead statuses and ensure timely follow-ups to maximize conversions.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Department Integration',
      description:
        'Seamlessly connect sales, customer service, and marketing departments. Foster collaboration and ensure all teams are aligned with shared goals.',
      icon: 'mdiLink',
    },
    {
      name: 'Analytics \u0026 Reporting',
      description:
        "Gain insights with comprehensive analytics and reporting. Make informed decisions with data-driven strategies to enhance your firm's performance.",
      icon: 'mdiChartLine',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and who is it for?',
      answer:
        '${projectName} is a CRM solution designed specifically for the law industry. It connects sales, customer service, and marketing departments to streamline operations and enhance communication.',
    },
    {
      question: 'How does ${projectName} help manage leads?',
      answer:
        '${projectName} offers tools to efficiently track and manage leads, update their statuses, and ensure timely follow-ups, maximizing conversion rates.',
    },
    {
      question: 'Is ${projectName} suitable for large law firms?',
      answer:
        'Yes, ${projectName} is scalable and supports multitenancy, allowing large law firms to manage multiple branches seamlessly.',
    },
    {
      question: 'Can I integrate ${projectName} with other tools?',
      answer:
        'Yes, ${projectName} offers integration capabilities with popular tools and platforms, ensuring a cohesive workflow across your existing systems.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'We provide comprehensive support, including onboarding assistance, training sessions, and 24/7 customer service to ensure you get the most out of ${projectName}.',
    },
    {
      question: 'Is there a trial version available?',
      answer:
        'Yes, we offer a free trial period for new users to explore the features and benefits of ${projectName} before committing to a subscription.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        '${projectName} employs advanced security measures, including encryption and regular backups, to ensure your data is protected at all times.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM for Law Industry - Streamline Your Legal Operations`}</title>
        <meta
          name='description'
          content={`Discover our CRM solution tailored for the law industry, connecting sales, customer service, and marketing departments. Organize notes, track leads, and enhance communication across your legal firm.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Law professionals collaborating efficiently']}
          mainText={`Revolutionize Your Legal Operations Today`}
          subTitle={`Experience seamless integration with ${projectName}, the CRM designed for the law industry. Connect departments, track leads, and enhance productivity effortlessly.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'Editor test'}
          image={['Dashboard showcasing CRM features']}
          withBg={0}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Unlock the full potential of your legal operations with ${projectName}. Streamline processes, enhance communication, and drive efficiency.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'Editor test'}
          image={['Team collaborating in modern office']}
          mainText={`Empowering Legal Teams with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to transforming the legal industry. Our CRM solution bridges the gap between departments, ensuring seamless communication and enhanced productivity.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FaqSection
          projectName={'Editor test'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'Editor test'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime. Our team at ${projectName} is here to assist you with any inquiries or support you need. Expect a prompt response.`}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
