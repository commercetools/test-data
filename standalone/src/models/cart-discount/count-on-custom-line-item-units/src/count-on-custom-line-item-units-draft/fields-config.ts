import { fake, type TModelFieldsConfig } from '../../../../../core';
import { TCountOnCustomLineItemUnitsDraftGraphql } from '../../types';

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
    },
  };
