import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import type { TCountOnLineItemUnitsDraftGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCountOnLineItemUnitsDraftGraphql> =
  {
    fields: {
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
    },
  };
