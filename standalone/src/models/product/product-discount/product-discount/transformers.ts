import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
import type { TProductDiscount, TProductDiscountGraphql } from './types';

const transformers = {
  default: Transformer<TProductDiscount, TProductDiscount>('default', {
    buildFields: [
      'value',
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TProductDiscount, TProductDiscount>('rest', {
    buildFields: [
      'value',
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  graphql: Transformer<TProductDiscount, TProductDiscountGraphql>('graphql', {
    buildFields: [
      'value',
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: ({ fields }) => ({
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
      descriptionAllLocales: LocalizedString.toLocalizedField(
        fields.description
      ),
      __typename: 'ProductDiscount',
    }),
  }),
};

export default transformers;
