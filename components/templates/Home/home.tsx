import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';

import { NavBar, MainHeading } from '@components/molecules';
import {
    AboutSection,
    BlogSection,
    PortfolioSection,
    ContactSection,
} from '@components/organisms';

const Main = styled.main``;

export const Home: React.FC = () => (
    <React.Fragment>
        <Head>
            <title>helenkent.dev</title>
            <link
                rel="icon"
                href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/balloon_1f388.png"
            />
        </Head>
        <NavBar />
        <Main>
            <MainHeading
                heading="Hello, I'm Helen"
                subHeading="Junior Frontend Engineer"
                emoji="👋🏼"
            />
            <AboutSection />
            <PortfolioSection />
            <BlogSection />
        </Main>
        <ContactSection />
    </React.Fragment>
);
