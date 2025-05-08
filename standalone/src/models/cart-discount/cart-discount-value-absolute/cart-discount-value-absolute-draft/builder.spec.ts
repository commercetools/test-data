/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import type {
  TCartDiscountValueAbsoluteDraft,
  TCartDiscountValueAbsoluteDraftGraphql,
} from '../types';
import * as CartDiscountValueAbsoluteDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueAbsoluteDraft,
      TCartDiscountValueAbsoluteDraft
    >(
      'default',
      CartDiscountValueAbsoluteDraft.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueAbsoluteDraft,
      TCartDiscountValueAbsoluteDraft
    >(
      'rest',
      CartDiscountValueAbsoluteDraft.random(),
      expect.objectContaining({
        type: 'absolute',
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueAbsoluteDraft,
      TCartDiscountValueAbsoluteDraftGraphql
    >(
      'graphql',
      CartDiscountValueAbsoluteDraft.random(),
      expect.objectContaining({
        absolute: {
          money: expect.arrayContaining([
            expect.objectContaining({
              centAmount: expect.any(Number),
            }),
          ]),
        },
      })
    )
  );
});
