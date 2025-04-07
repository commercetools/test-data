import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TCountOnLineItemUnitsGraphql,
  TCountOnLineItemUnitsRest,
} from './types';

const commonFieldsConfig = {
  type: 'CountOnLineItemUnits',
  predicate: fake((f) =>
    f.helpers.arrayElement([
      '1 = 1',
      `sku = "${f.commerce.productName().replaceAll(' ', '-')}"`,
      `sku = "${f.commerce
        .productName()
        .replaceAll(' ', '-')}" and price = "${f.finance.amount()} USD"`,
    ])
  ),
  minCount: fake((f) =>
    f.helpers.arrayElement([1, f.number.int({ min: 2, max: 5 })])
  ),
  maxCount: fake((f) =>
    f.helpers.arrayElement([null, 0, f.number.int({ min: 1, max: 5 })])
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TCountOnLineItemUnitsRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TCountOnLineItemUnitsGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CountOnLineItemUnits',
    },
    postBuild: (fields) => {
      return {
        ...fields,
        maxCount:
          fields.maxCount === null
            ? fields.maxCount
            : fields.minCount! + fields.maxCount!,
      };
    },
  };
