import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { TCtpSelectionMode } from '@commercetools-test-data/graphql-types';
import omit from 'lodash/omit';
import {
  CountOnCustomLineItemUnitsGraphql,
  CountOnCustomLineItemUnitsRest,
} from '../count-on-custom-line-item-units';
import {
  CountOnLineItemUnitsGraphql,
  CountOnLineItemUnitsRest,
} from '../count-on-line-item-units';
import type {
  TCartDiscountPatternTargetGraphql,
  TCartDiscountPatternTargetRest,
} from './types';

const commonFieldsConfig = {
  type: 'pattern',
  maxOccurrence: fake((f) =>
    f.helpers.arrayElement([null, 1, f.number.int({ min: 2, max: 10 })])
  ),
  selectionMode: fake((f) =>
    f.helpers.arrayElement(Object.values(TCtpSelectionMode))
  ),
};

export const restFieldsConfig: TModelFieldsConfig<TCartDiscountPatternTargetRest> =
  {
    fields: {
      ...commonFieldsConfig,
      targetPattern: fake((f) =>
        f.helpers.multiple(
          () =>
            f.helpers.arrayElement([
              CountOnLineItemUnitsRest.random(),
              CountOnCustomLineItemUnitsRest.random(),
            ]),
          { count: { min: 1, max: 8 } }
        )
      ),
      triggerPattern: fake((f) =>
        f.helpers.multiple(
          () =>
            f.helpers.arrayElement([
              CountOnLineItemUnitsRest.random(),
              CountOnCustomLineItemUnitsRest.random(),
            ]),
          { count: { min: 1, max: 8 } }
        )
      ),
    },
  };

export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountPatternTargetGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      targetPattern: fake((f) =>
        f.helpers.multiple(
          () =>
            f.helpers.arrayElement([
              CountOnLineItemUnitsGraphql.random(),
              CountOnCustomLineItemUnitsGraphql.random(),
            ]),
          { count: { min: 1, max: 8 } }
        )
      ),
      triggerPattern: fake((f) =>
        f.helpers.multiple(
          () =>
            f.helpers.arrayElement([
              CountOnLineItemUnitsGraphql.random(),
              CountOnCustomLineItemUnitsGraphql.random(),
            ]),
          { count: { min: 1, max: 8 } }
        )
      ),
      __typename: 'CartDiscountPatternTarget',
    },
    postBuild: (fields) => ({
      ...fields,
      triggerPattern: fields.triggerPattern.map((pattern) =>
        omit(pattern, 'excludeCount')
      ),
    }),
  };
