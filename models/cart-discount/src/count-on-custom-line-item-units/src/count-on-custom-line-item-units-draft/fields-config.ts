import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type { TCountOnCustomLineItemUnitsDraftGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCountOnCustomLineItemUnitsDraftGraphql> =
  {
    fields: {
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
      excludeCount: fake((f) =>
        f.helpers.arrayElement([0, f.number.int({ min: 1, max: 10 })])
      ),
    },
  };
