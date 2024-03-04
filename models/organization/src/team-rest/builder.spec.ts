/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TTeamRest } from './types';
import * as TeamRest from './index';

const membersAssertion = expect.arrayContaining([
  expect.objectContaining({
    id: expect.any(String),
    typeId: 'user',
  }),
]);

describe('builder', () => {
  it(
    ...createBuilderSpec<TTeamRest, TTeamRest>(
      'default',
      TeamRest.random().name('foo'),
      expect.objectContaining({
        id: expect.any(String),
        name: 'foo',
        members: membersAssertion,
      })
    )
  );

  it(
    ...createBuilderSpec<TTeamRest, TTeamRest>(
      'rest',
      TeamRest.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        members: membersAssertion,
      })
    )
  );
});
