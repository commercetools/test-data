import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { TCtpSelectionMode } from '@commercetools-test-data/graphql-types';
import { CountOnCustomLineItemUnitsDraftGraphql } from '../../../count-on-custom-line-item-units';
import { CountOnLineItemUnitsDraftGraphql } from '../../../count-on-line-item-units';

import type { TCartDiscountPatternTargetDraftGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountPatternTargetDraftGraphql> =
  {
    fields: {
      maxOccurrence: fake((f) =>
        f.helpers.arrayElement([null, 1, f.number.int({ min: 2, max: 10 })])
      ),
      selectionMode: fake((f) =>
        f.helpers.arrayElement(Object.values(TCtpSelectionMode))
      ),
      targetPattern: fake((f) =>
        f.helpers.multiple(
          () =>
            f.helpers.arrayElement([
              CountOnLineItemUnitsDraftGraphql.random,
              CountOnCustomLineItemUnitsDraftGraphql.random,
            ]),
          { count: { min: 1, max: 8 } }
        )
      ),
      triggerPattern: fake((f) =>
        f.helpers.multiple(
          () =>
            f.helpers.arrayElement([
              CountOnLineItemUnitsDraftGraphql.random,
              CountOnCustomLineItemUnitsDraftGraphql.random,
            ]),
          { count: { min: 1, max: 8 } }
        )
      ),
    },
  };
