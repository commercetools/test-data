/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TBusinessUnitLimitsProjection } from './types';
import * as BusinessUnitsPlatformLimits from './index';

describe('building', () => {
  it(
    ...createBuilderSpec<
      TBusinessUnitLimitsProjection,
      TBusinessUnitLimitsProjection
    >(
      'default',
      BusinessUnitsPlatformLimits.random(),
      expect.objectContaining({
        maxDivisions: expect.any(Object),
        maxDepthLimit: expect.any(Object),
        maxAssociates: expect.any(Object),
        maxAssociateRoles: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TBusinessUnitLimitsProjection,
      TBusinessUnitLimitsProjection
    >(
      'rest',
      BusinessUnitsPlatformLimits.random(),
      expect.objectContaining({
        maxDivisions: expect.any(Object),
        maxDepthLimit: expect.any(Object),
        maxAssociates: expect.any(Object),
        maxAssociateRoles: expect.any(Object),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TBusinessUnitLimitsProjection,
      TBusinessUnitLimitsProjection
    >(
      'graphql',
      BusinessUnitsPlatformLimits.random(),
      expect.objectContaining({
        maxDivisions: expect.any(Object),
        maxDepthLimit: expect.any(Object),
        maxAssociates: expect.any(Object),
        maxAssociateRoles: expect.any(Object),
        __typename: 'BusinessUnitLimitsProjection',
      })
    )
  );
});
