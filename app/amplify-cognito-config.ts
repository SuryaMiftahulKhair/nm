'use client';

import { Amplify } from 'aws-amplify';

export const authConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_ZrSSW3APp',
      userPoolClientId: '2vd10nfua1oa308ta0gm86isbr',
      loginWith: {
        email: true,
      },
    },
  },
};

Amplify.configure(authConfig);

const ConfigureAmplifyClientSide = () => {
  return null;
};

export default ConfigureAmplifyClientSide;
