import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TDiscountCode, TDiscountCodeGraphql } from './types';

const transformers = {
  default: Transformer<TDiscountCode, TDiscountCode>('default', {
    buildFields: ['name', 'description', 'createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TDiscountCode, TDiscountCode>('rest', {
    buildFields: ['name', 'description', 'createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TDiscountCode, TDiscountCodeGraphql>('graphql', {
    buildFields: ['name', 'description', 'createdBy', 'lastModifiedBy'],
    addFields: ({ fields }) => ({
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
      descriptionAllLocales: LocalizedString.toLocalizedField(
        fields.description
      ),
      __typename: 'DiscountCode',
    }),
  }),
};

export default transformers;
