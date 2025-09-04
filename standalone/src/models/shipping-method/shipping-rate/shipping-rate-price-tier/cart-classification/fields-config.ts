import { fake, type TModelFieldsConfig } from '@/core';
import { MoneyDraftRest } from '@/models/commons';
import type {
  TCartClassificationPriceTierGraphql,
  TCartClassificationPriceTierRest,
} from './types';

// https://docs.commercetools.com/api/projects/shippingMethods#cartclassificationtier

const commonFieldsConfig = {
  type: 'CartClassification',
  price: fake(() => MoneyDraftRest.presets.withCurrency('EUR')),
  value: fake((f) => f.lorem.word()),
  isMatching: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TCartClassificationPriceTierRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TCartClassificationPriceTierGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CartClassificationPriceTier',
    },
  };
