import { Transformer } from '../../../../../core';
import type { TContactInformation, TContactInformationGraphql } from './types';

const buildFields: (keyof TContactInformation)[] = [];

const transformers = {
  default: Transformer<TContactInformation, TContactInformation>('default', {
    buildFields,
  }),
  graphql: Transformer<TContactInformation, TContactInformationGraphql>(
    'graphql',
    {
      buildFields,
      addFields: () => ({
        __typename: 'ContactInformation',
      }),
    }
  ),
};

export default transformers;
