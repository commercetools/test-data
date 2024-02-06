import { Transformer } from '@commercetools-test-data/core';
import type { TAssociateRoleDraft, TAssociateRoleDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TAssociateRoleDraft, TAssociateRoleDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TAssociateRoleDraft, TAssociateRoleDraft>('rest', {
    buildFields: [],
  }),
  //only scaffolding provided at this time
  graphql: Transformer<TAssociateRoleDraft, TAssociateRoleDraftGraphql>(
    'graphql',
    { buildFields: [] }
  ),
};

export default transformers;
