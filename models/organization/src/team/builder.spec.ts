/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TTeam, TTeamGraphql } from './types';
import * as Team from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTeam, TTeam>(
      'default',
      Team.random().name('foo'),
      expect.objectContaining({
        id: expect.any(String),
        name: 'foo',
        members: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TTeam, TTeam>(
      'rest',
      Team.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        members: expect.any(Array),
      })
    )
  );

  it(
    ...createBuilderSpec<TTeam, TTeamGraphql>(
      'graphql',
      Team.random(),
      expect.objectContaining({
        __typename: 'Team',
        id: expect.any(String),
        name: expect.any(String),
        members: expect.any(Array),
      })
    )
  );
});
