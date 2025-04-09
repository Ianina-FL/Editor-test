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
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Client Management',
      description:
        'Efficiently manage client information and interactions. Keep track of all client communications and ensure personalized service delivery.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Task Automation',
      description:
        'Automate repetitive tasks to save time and reduce errors. Focus on what matters most while ${projectName} handles the routine.',
      icon: 'mdiRobot',
    },
    {
      name: 'Document Organization',
      description:
        'Organize and access legal documents with ease. Ensure all your files are securely stored and easily retrievable when needed.',
      icon: 'mdiFileDocumentOutline',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the range of services offered by ${projectName} to enhance your legal operations. Discover how our CRM solution can streamline your processes and improve efficiency.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Legal professionals using CRM software']}
          mainText={`Transform Your Legal Services with ${projectName}`}
          subTitle={`Discover how ${projectName} can revolutionize your legal operations. Our comprehensive services are designed to streamline processes and enhance efficiency across your firm.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'Editor test'}
          image={['Features displayed on a tablet']}
          withBg={1}
          features={features_points}
          mainText={`Unleash the Power of ${projectName}`}
          subTitle={`Explore the robust features of ${projectName} designed to elevate your legal services and streamline your operations.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <ContactFormSection
          projectName={'Editor test'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person filling out contact form']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`Have questions about our services? Contact us anytime, and our team at ${projectName} will respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
