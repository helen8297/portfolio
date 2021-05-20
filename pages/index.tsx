import React from 'react';
import fetch from 'node-fetch';

import { Home } from '@components/templates';
import { GetServerSideProps } from 'next';

export default function HomePage() {
    return <Home />;
}

export const getServerSideProps: GetServerSideProps = async context => {
    try {
        const options: any = {
            method: 'GET',
            headers: { Authorization: process.env.HABIT_API_KEY },
        };
        const habitifyResponse = await fetch(
            'https://api.habitify.me/habits',
            options
        );
        const habitifyJson = await habitifyResponse.json();

        return {
            props: {
                habitify: habitifyJson,
            },
        };
    } catch {
        return {
            props: {
                habitify: false,
            },
        };
    }
};
