/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCartDiscountValueFixed,
  TCartDiscountValueFixedGraphql,
} from './types';
import * as CartDiscountValueFixed from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCartDiscountValueFixed, TCartDiscountValueFixed>(
      'default',
      CartDiscountValueFixed.random(),
      expect.objectContaining({
        type: 'fixed',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TCartDiscountValueFixed, TCartDiscountValueFixed>(
      'rest',
      CartDiscountValueFixed.random(),
      expect.objectContaining({
        type: 'fixed',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueFixed,
      TCartDiscountValueFixedGraphql
    >(
      'graphql',
      CartDiscountValueFixed.random(),
      expect.objectContaining({
        type: 'fixed',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
        __typename: 'CartDiscountValueFixed',
      })
    )
  );
});
