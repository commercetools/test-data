import { Transformer } from '@commercetools-test-data/core';
import type { TCustomViewDraft, TCustomViewDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCustomViewDraft, TCustomViewDraft>('default', {
    buildFields: ['labelAllLocales', 'permissions', 'typeSettings'],
  }),
  graphql: Transformer<TCustomViewDraft, TCustomViewDraftGraphql>('graphql', {
    buildFields: ['labelAllLocales', 'permissions', 'typeSettings'],
    addFields: () => ({
      __typename: 'CustomViewDraftDataInput',
    }),
  }),
};

export default transformers;
