import { Transformer } from '@commercetools-test-data/core';
import type { TChannelDraft, TChannelDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TChannelDraft, TChannelDraft>('default', {
    buildFields: ['name', 'description', 'address'],
  }),
  rest: Transformer<TChannelDraft, TChannelDraft>('rest', {
    buildFields: ['name', 'description', 'address'],
  }),
  graphql: Transformer<TChannelDraft, TChannelDraftGraphql>('graphql', {
    buildFields: ['name', 'description', 'address'],
    addFields: () => ({
      __typename: 'ChannelDraft',
    }),
  }),
};

export default transformers;
