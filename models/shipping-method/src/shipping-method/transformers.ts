import {
  LocalizedString,
  Reference,
  type TReferenceGraphql,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type {
  TShippingMethod,
  TShippingMethodRest,
  TShippingMethodGraphql,
} from './types';

const transformers = {
  default: Transformer<TShippingMethod, TShippingMethod>('default', {
    buildFields: [
      'localizedName',
      'localizedDescription',
      'taxCategory',
      'zoneRates',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TShippingMethod, TShippingMethodRest>('rest', {
    buildFields: [
      'localizedName',
      'localizedDescription',
      'zoneRates',
      'createdBy',
      'lastModifiedBy',
      'taxCategory',
    ],
    replaceFields: ({ fields }) => ({
      ...fields,
      taxCategory: Reference.random()
        .id(fields.taxCategory.id)
        .typeId('tax-category')
        .build(),
    }),
  }),
  graphql: Transformer<TShippingMethod, TShippingMethodGraphql>('graphql', {
    buildFields: [
      'localizedName',
      'localizedDescription',
      'taxCategory',
      'zoneRates',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: ({ fields }) => {
      const localizedNameAllLocales = LocalizedString.toLocalizedField(
        fields.localizedName
      );
      const localizedDescriptionAllLocales = LocalizedString.toLocalizedField(
        fields.localizedDescription
      );
      const taxCategoryRef: TReferenceGraphql = Reference.random()
        .id(fields.taxCategory.id)
        .typeId('tax-category')
        .buildGraphql();

      return {
        localizedNameAllLocales,
        localizedDescriptionAllLocales,
        taxCategoryRef,
        __typename: 'ShippingMethod',
      };
    },
  }),
};

export default transformers;
