import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCategoryDraft, TCategoryDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCategoryDraft, TCategoryDraft>('default', {
    buildFields: ['description', 'name', 'slug', 'parent'],
  }),
  rest: Transformer<TCategoryDraft, TCategoryDraft>('rest', {
    buildFields: ['description', 'name', 'slug', 'parent'],
  }),
  graphql: Transformer<TCategoryDraft, TCategoryDraftGraphql>('graphql', {
    buildFields: ['description', 'name', 'slug', 'parent'],
    addFields: ({ fields }) => {
      const nameAllLocales = LocalizedString.toLocalizedField(fields.name);
      const descriptionAllLocales = LocalizedString.toLocalizedField(
        fields.description
      );

      return {
        __typename: 'CategoryDraft',
        nameAllLocales,
        descriptionAllLocales,
      };
    },
  }),
};

export default transformers;
