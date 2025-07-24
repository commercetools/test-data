import { fake, type TModelFieldsConfig } from '@/core';
import type { TMethodTaxedPriceGraphql, TMethodTaxedPriceRest } from './types';

const commonFieldsConfig = {
  shippingMethodKey: fake((f) => f.lorem.slug(2)),
  taxedPrice: null,
};

// export interface MethodTaxedPrice {
//   readonly shippingMethodKey: string;
//   readonly taxedPrice?: TaxedItemPrice;
// }
export const restFieldsConfig: TModelFieldsConfig<TMethodTaxedPriceRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

// __typename?: 'MethodTaxedPrice';
// shippingMethodKey: Scalars['String']['output'];
// taxedPrice?: Maybe<TCtpTaxedItemPrice>;
export const graphqlFieldsConfig: TModelFieldsConfig<TMethodTaxedPriceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'MethodTaxedPrice',
    },
  };
