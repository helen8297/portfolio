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
        <div>
            <Head>
                <title>Hello Liam!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <MainHeading
                heading="Hello, I'm Helen"
                subHeading="Junior Frontend Engineer"
                emoji="👋🏼"
            />
            <AboutSection />
            <PortfolioSection />
            <BlogSection />
            <ContactSection />
        </div>
    </React.Fragment>
);
