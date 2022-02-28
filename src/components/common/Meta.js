import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = props => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="utf-8" />
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta property="og:type" content={'website'} />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.image} />
                <meta property="og:url" content={props.url} />
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: '위대한 캣츠비',
    description: '고양이 쇼핑몰 사이트',
    keywords: '고양이 쇼핑몰, 고양이 사료, 교양이 간식, 고양이 용품',
    author: 'Team-Stuckyi(https://github.com/Team-Stuckyi)',
    image:
        window.location.protocol +
        '//' +
        window.location.hostname +
        ':' +
        window.location.port +
        '/img/TheGreatCatsby-Center-Pink-logo.png',
    url: window.location.href,
};

export default Meta;
