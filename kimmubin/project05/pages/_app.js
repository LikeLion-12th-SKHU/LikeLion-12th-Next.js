function MyApp({ Component, pageProps }) {
    // console.log('Rendering Component:', Component);
    // console.log('Rendering pageProps:', pageProps);
    return <Component {...pageProps} />;
}

export default MyApp;
