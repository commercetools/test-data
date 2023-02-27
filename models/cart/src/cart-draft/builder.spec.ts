/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCartDraft, TCartDraftGraphql } from '../types';
import * as CartDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCartDraft, TCartDraft>(
      'default',
      CartDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TCartDraft, TCartDraft>(
      'rest',
      CartDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TCartDraft, TCartDraftGraphql>(
      'graphql',
      CartDraft.random(),
      expect.objectContaining({
        __typename: 'CartDraft',
      })
    )
  );
});
