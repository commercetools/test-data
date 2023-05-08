/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCentPrecisionMoneyDraft,
  TCentPrecisionMoneyDraftGraphql,
} from '../types';
import * as CentPrecisionMoneyDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCentPrecisionMoneyDraft, TCentPrecisionMoneyDraft>(
      'default',
      CentPrecisionMoneyDraft.random(),
      expect.objectContaining({
        type: 'centPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: 2,
      })
    )
  );

  it(
    ...createBuilderSpec<TCentPrecisionMoneyDraft, TCentPrecisionMoneyDraft>(
      'rest',
      CentPrecisionMoneyDraft.random(),
      expect.objectContaining({
        type: 'centPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: 2,
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCentPrecisionMoneyDraft,
      TCentPrecisionMoneyDraftGraphql
    >(
      'graphql',
      CentPrecisionMoneyDraft.random(),
      expect.objectContaining({
        type: 'centPrecision',
        centAmount: expect.any(Number),
        currencyCode: expect.any(String),
        fractionDigits: 2,
        __typename: 'MoneyInput',
      })
    )
  );
});
