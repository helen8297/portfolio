import Head from 'next/head';
import { Deving } from '@components/templates/Deving';

export default function Home() {
    return (
        <>
            <Head>
                <title>Hello Liam!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Deving />
        </>
    );
}
