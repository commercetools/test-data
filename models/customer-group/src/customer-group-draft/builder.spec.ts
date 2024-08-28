/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import * as CustomerGroupDraft from '../customer-group-draft';
import type { TCustomerGroupDraft, TCustomerGroupDraftGraphql } from '../types';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomerGroupDraft, TCustomerGroupDraft>(
      'default',
      CustomerGroupDraft.random(),
      expect.objectContaining({
        groupName: expect.any(String),
        key: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomerGroupDraft, TCustomerGroupDraft>(
      'rest',
      CustomerGroupDraft.random(),
      expect.objectContaining({
        groupName: expect.any(String),
        key: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomerGroupDraft, TCustomerGroupDraftGraphql>(
      'graphql',
      CustomerGroupDraft.random(),
      expect.objectContaining({
        groupName: expect.any(String),
        key: expect.any(String),
        custom: null,
      })
    )
  );
});
