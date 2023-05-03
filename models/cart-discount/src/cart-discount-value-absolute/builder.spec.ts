/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCartDiscountValueAbsolute,
  TCartDiscountValueAbsoluteGraphql,
} from './types';
import * as CartDiscountValueAbsolute from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsolute
    >(
      'default',
      CartDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
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
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsolute
    >(
      'rest',
      CartDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
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
      TCartDiscountValueAbsolute,
      TCartDiscountValueAbsoluteGraphql
    >(
      'graphql',
      CartDiscountValueAbsolute.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            type: 'centPrecision',
          }),
        ]),
        __typename: 'CartDiscountValueAbsolute',
      })
    )
  );
});
