import React from 'react'
import Helmet from 'react-helmet'
import { config } from '../utils/config';

export const SEO = () => {
    return (
        <Helmet>
            <title>{config.siteTitle}</title>
            <link href={config.siteLogo} rel="shortcut icon" type="image/x-icon" />
        </Helmet>
    );
}
