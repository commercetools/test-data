import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TCartDiscount, TCartDiscountGraphql } from './types';

const transformers = {
  default: Transformer<TCartDiscount, TCartDiscount>('default', {
    buildFields: [
      'value',
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'stores',
    ],
  }),
  rest: Transformer<TCartDiscount, TCartDiscount>('rest', {
    buildFields: [
      'value',
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'stores',
    ],
  }),

  graphql: Transformer<TCartDiscount, TCartDiscountGraphql>('graphql', {
    buildFields: [
      'value',
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'stores',
    ],
    addFields: ({ fields }) => ({
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
      descriptionAllLocales: LocalizedString.toLocalizedField(
        fields.description
      ),
      __typename: 'CartDiscount',
    }),
  }),
};

export default transformers;
