import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
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
      'target',
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
      'target',
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
      'target',
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
