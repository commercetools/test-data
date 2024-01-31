import { Transformer } from '@commercetools-test-data/core';
import type { TOrganizationDraft, TOrganizationDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TOrganizationDraft, TOrganizationDraft>('default', {}),
  rest: Transformer<TOrganizationDraft, TOrganizationDraft>('rest', {}),
  graphql: Transformer<TOrganizationDraft, TOrganizationDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'OrganizationDraft',
      }),
    }
  ),
};

export default transformers;
