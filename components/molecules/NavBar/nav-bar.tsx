import React from 'react';
import { LinkButton } from '@components/atoms';

export function NavBar() {
    return (
        <nav>
            <LinkButton>Home</LinkButton>
            <LinkButton>About</LinkButton>
            <LinkButton>Portfolio</LinkButton>
            <LinkButton>Blog</LinkButton>
            <LinkButton>Contact</LinkButton>
        </nav>
    );
}
