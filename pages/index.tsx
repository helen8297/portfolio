import Head from 'next/head';
import styled from 'styled-components';

import { Deving } from '@components/templates/Deving';

const Emo = styled.div`
    background: black;
    height: 100vh;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Hello Liam!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Emo>
                <Deving />
            </Emo>
        </>
    );
}
