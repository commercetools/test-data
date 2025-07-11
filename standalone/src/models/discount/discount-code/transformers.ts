import { faker } from '@faker-js/faker';
import { Transformer } from '@/core';
import { LocalizedString } from '@/models/commons';
import type { TDiscountCode, TDiscountCodeGraphql } from './types';

const transformers = {
  default: Transformer<TDiscountCode, TDiscountCode>('default', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'cartDiscounts',
    ],
  }),
  rest: Transformer<TDiscountCode, TDiscountCode>('rest', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'cartDiscounts',
    ],
  }),
  graphql: Transformer<TDiscountCode, TDiscountCodeGraphql>('graphql', {
    buildFields: [
      'name',
      'description',
      'createdBy',
      'lastModifiedBy',
      'cartDiscounts',
    ],
    addFields: ({ fields }) => ({
      applicationCount: faker.number.int(),
      nameAllLocales: LocalizedString.toLocalizedField(fields.name),
      descriptionAllLocales: LocalizedString.toLocalizedField(
        fields.description
      ),
      __typename: 'DiscountCode',
    }),
  }),
};

export default transformers;
