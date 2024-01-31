/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TTeamDraft, TTeamDraftGraphql } from '../types';
import * as TeamDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTeamDraft, TTeamDraft>(
      'default',
      TeamDraft.random().name('foo'),
      expect.objectContaining({
        name: 'foo',
        members: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TTeamDraft, TTeamDraft>(
      'rest',
      TeamDraft.random(),
      expect.objectContaining({
        name: expect.any(String),
        members: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TTeamDraft, TTeamDraftGraphql>(
      'graphql',
      TeamDraft.random(),
      expect.objectContaining({
        __typename: 'TeamDraft',
        name: expect.any(String),
        members: expect.any(Array),
      })
    )
  );
});
