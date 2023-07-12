// import '../styles/globals.scss';
import React, { FC, useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import { ReduxProvider } from '@/store/provider';

const myApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ReduxProvider>
                <Component {...pageProps} />
            </ReduxProvider>
        </>
    )
}

export default myApp;
