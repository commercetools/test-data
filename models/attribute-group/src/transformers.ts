import { Transformer } from '@commercetools-test-data/core';
import type { TAttributeGroup, TAttributeGroupGraphql } from './types';
const transformers = {
  graphql: Transformer<TAttributeGroup, TAttributeGroupGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: ({ fields }) => ({
      __typename: 'AttributeGroup',
      nameAllLocales: [
        {
          locale: 'en',
          value: fields.name,
        },
      ],
      descriptionAllLocales: [
        {
          locale: 'en',
          value: fields.description,
        },
      ],
    }),
  }),
};

export default transformers;
