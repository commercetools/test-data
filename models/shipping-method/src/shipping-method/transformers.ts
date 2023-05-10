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
    ],
    replaceFields: ({ fields }) => ({
      ...fields,
      taxCategory: Reference.random().typeId('tax-category').buildRest(),
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

      return {
        localizedNameAllLocales,
        localizedDescriptionAllLocales,
        __typename: 'ShippingMethod',
      };
    },
  }),
};

export default transformers;
