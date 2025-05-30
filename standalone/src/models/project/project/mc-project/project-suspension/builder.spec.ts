/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TProjectSuspension, TProjectSuspensionGraphql } from './types';
import * as ProjectSuspension from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProjectSuspension, TProjectSuspension>(
      'default',
      ProjectSuspension.random(),
      expect.objectContaining({
        isActive: expect.any(Boolean),
        reason: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectSuspension, TProjectSuspension>(
      'rest',
      ProjectSuspension.random(),
      expect.objectContaining({
        isActive: expect.any(Boolean),
        reason: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectSuspension, TProjectSuspensionGraphql>(
      'graphql',
      ProjectSuspension.random().isActive(true).reason('Bad behavior'),
      expect.objectContaining({
        __typename: 'ProjectSuspension',
        isActive: true,
        reason: 'Bad behavior',
      })
    )
  );
});
