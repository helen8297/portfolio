import React from 'react';

import Head from 'next/head';

import { NavBar, MainHeading } from '@components/molecules';
import {
    AboutSection,
    BlogSection,
    PortfolioSection,
    ContactSection,
} from '@components/organisms';

export const Home: React.FC = () => (
    <React.Fragment>
        <Head>
            <title>Hello Liam!</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />
        <MainHeading
            heading="Hello, I'm Helen"
            subHeading="Frontend Master"
            emoji="🔥"
        />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
    </React.Fragment>
);
