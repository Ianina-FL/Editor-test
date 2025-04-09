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
  AboutUsDesigns,
  FeaturesDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Seamless Collaboration',
      description:
        'Facilitate smooth communication between departments with integrated tools that keep everyone on the same page, enhancing teamwork and productivity.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Advanced Lead Tracking',
      description:
        'Monitor and manage leads effectively with real-time updates and insights, ensuring no opportunity is missed and follow-ups are timely.',
      icon: 'mdiMagnify',
    },
    {
      name: 'Comprehensive Analytics',
      description:
        'Gain valuable insights into your operations with detailed analytics, helping you make informed decisions and optimize your strategies.',
      icon: 'mdiChartBar',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, and how we are transforming the legal industry with our innovative CRM solution. Discover our features and get in touch with us.`}
        />
      </Head>
      <WebSiteHeader projectName={'Editor test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'Editor test'}
          image={['Team brainstorming in modern office']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to revolutionizing the legal industry with our cutting-edge CRM solution. Learn about our journey, mission, and the values that drive us.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'Editor test'}
          image={['Team discussing project roadmap']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`${projectName} was born from a vision to streamline legal operations. Our dedicated team works tirelessly to provide innovative solutions that empower legal professionals.`}
          design={AboutUsDesigns.IMAGE_RIGHT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'Editor test'}
          image={['Features displayed on a screen']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover how ${projectName} can transform your legal operations with its powerful features designed for efficiency and collaboration.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <ContactFormSection
          projectName={'Editor test'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Person using a contact form']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`We're here to help! Reach out to us anytime with your questions or feedback. Our team at ${projectName} is ready to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'Editor test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
