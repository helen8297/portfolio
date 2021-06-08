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
                <title>helenkent.dev</title>
                <link
                    rel="icon"
                    href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/balloon_1f388.png"
                />
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
