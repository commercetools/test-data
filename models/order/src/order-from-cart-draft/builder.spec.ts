/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TOrderFromCartDraft, TOrderFromCartDraftGraphql } from '../types';
import * as OrderFromCartDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrderFromCartDraft, TOrderFromCartDraft>(
      'default',
      OrderFromCartDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TOrderFromCartDraft, TOrderFromCartDraft>(
      'rest',
      OrderFromCartDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TOrderFromCartDraft, TOrderFromCartDraftGraphql>(
      'graphql',
      OrderFromCartDraft.random(),
      expect.objectContaining({
        __typename: 'OrderFromCartDraft',
      })
    )
  );
});
