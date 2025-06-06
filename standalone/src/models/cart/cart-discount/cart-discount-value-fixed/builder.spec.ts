/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCartDiscountValueFixed,
  TCartDiscountValueFixedGraphql,
} from './types';
import * as CartDiscountValueFixed from './index';

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
        __typename: 'FixedPriceDiscountValue',
      })
    )
  );
});
