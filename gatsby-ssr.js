import React from 'react';

// Google site verification for Docz
const googleSiteVerification = '5ff_Ah2x76xdO0uKMGK61YpGeFQ-AvMqtcQruaI2ZPE';

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  if (googleSiteVerification) {
    const headComponents = getHeadComponents();
    headComponents.push(
      <meta key="google-site-verification" name="google-site-verification" content={googleSiteVerification} />
    );
    replaceHeadComponents(headComponents);
  }
};
