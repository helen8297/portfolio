import Head from 'next/head';
import styled from 'styled-components';

const WrapperDiv = styled.div<{ hasMargin: boolean }>`
    display: flex;
    justify-content: center;
    ${({ hasMargin }) => hasMargin && `margin: 1.6rem 0;`}
`;
const HeadingH1 = styled.h1``;

export default function Home() {
    return (
        <WrapperDiv hasMargin={true}>
            <Head>
                <title>Hello Liam!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeadingH1>Hello Helen</HeadingH1>
        </WrapperDiv>
    );
}
