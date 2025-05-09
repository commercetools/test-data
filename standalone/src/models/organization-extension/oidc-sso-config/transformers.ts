import { Transformer } from '../../../core';
import type { TOidcSsoConfig, TOidcSsoConfigGraphql } from './types';

const buildFields: (keyof TOidcSsoConfig)[] = [];

const transformers = {
  default: Transformer<TOidcSsoConfig, TOidcSsoConfig>('default', {
    buildFields,
  }),
  graphql: Transformer<TOidcSsoConfig, TOidcSsoConfigGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'OidcSsoConfig',
    }),
  }),
};

export default transformers;
