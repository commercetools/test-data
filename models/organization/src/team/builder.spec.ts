/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TTeam, TTeamRest, TTeamGraphql } from './types';
import * as Team from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTeam, TTeam>(
      'default',
      Team.random().name('foo'),
      expect.objectContaining({
        id: expect.any(String),
        name: 'foo',
      })
    )
  );

  it(
    ...createBuilderSpec<TTeam, TTeamRest>(
      'rest',
      Team.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        members: ['member1', 'member2'],
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
        members: [],
      })
    )
  );
});
