import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TProductVariantAvailabilityGraphql,
  TProductVariantAvailabilityRest,
} from './types';

const commonFieldsConfig = {
  availableQuantity: fake((f) => f.number.int()),
  id: fake((f) => f.string.uuid()),
  isOnStock: fake((f) => f.datatype.boolean()),
  restockableInDays: fake((f) => f.number.int()),
  version: null,
};

export const restFieldsConfig: TModelFieldsConfig<TProductVariantAvailabilityRest> =
  {
    fields: {
      ...commonFieldsConfig,
      channels: null,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TProductVariantAvailabilityGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ProductVariantAvailability',
    },
  };
