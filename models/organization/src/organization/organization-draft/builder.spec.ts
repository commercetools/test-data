/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TOrganizationDraft, TOrganizationDraftGraphql } from '../types';
import * as OrganizationDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TOrganizationDraft, TOrganizationDraft>(
      'default',
      OrganizationDraft.random().name('foo'),
      expect.objectContaining({
        name: 'foo',
        owner: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TOrganizationDraft, TOrganizationDraft>(
      'rest',
      OrganizationDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        owner: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TOrganizationDraft, TOrganizationDraftGraphql>(
      'graphql',
      OrganizationDraft.random(),
      expect.objectContaining({
        __typename: 'OrganizationDraft',
        name: expect.any(String),
        owner: null,
      })
    )
  );
});
