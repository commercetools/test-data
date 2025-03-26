import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TCountOnCustomLineItemUnitsGraphql,
  TCountOnCustomLineItemUnitsRest,
} from './types';

const commonFieldsConfig = {
  type: 'CountOnCustomLineItemUnits',
  predicate: fake((f) =>
    f.helpers.arrayElement([
      '1 = 1',
      `slug = "${f.commerce.productName().replaceAll(' ', '-')}"`,
      `slug = "${f.commerce
        .productName()
        .replaceAll(' ', '-')}" and money = "${f.finance.amount()} USD"`,
    ])
  ),
  minCount: fake((f) =>
    f.helpers.arrayElement([1, f.number.int({ min: 2, max: 5 })])
  ),
  maxCount: fake((f) =>
    f.helpers.arrayElement([null, 0, f.number.int({ min: 1, max: 5 })])
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TCountOnCustomLineItemUnitsRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TCountOnCustomLineItemUnitsGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CountOnCustomLineItemUnits',
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
