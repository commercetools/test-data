import { Transformer } from '@commercetools-test-data/core';
import type { TChannel, TChannelDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TChannel, TChannel>('default', {
    buildFields: ['name', 'description', 'address'],
  }),
  rest: Transformer<TChannel, TChannel>('rest', {
    buildFields: ['name', 'description', 'address'],
  }),
  graphql: Transformer<TChannel, TChannelDraftGraphql>('graphql', {
    buildFields: ['name', 'description', 'address'],
    addFields: () => ({
      __typename: 'ChannelDraft',
    }),
  }),
};

export default transformers;
