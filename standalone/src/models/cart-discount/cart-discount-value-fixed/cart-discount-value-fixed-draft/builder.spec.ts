/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import type {
  TCartDiscountValueFixedDraft,
  TCartDiscountValueFixedDraftGraphql,
} from '../types';
import * as CartDiscountValueFixedDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueFixedDraft,
      TCartDiscountValueFixedDraft
    >(
      'default',
      CartDiscountValueFixedDraft.random(),
      expect.objectContaining({
        type: 'fixed',
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
      TCartDiscountValueFixedDraft,
      TCartDiscountValueFixedDraft
    >(
      'rest',
      CartDiscountValueFixedDraft.random(),
      expect.objectContaining({
        type: 'fixed',
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
      TCartDiscountValueFixedDraft,
      TCartDiscountValueFixedDraftGraphql
    >(
      'graphql',
      CartDiscountValueFixedDraft.random(),
      expect.objectContaining({
        fixed: {
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
