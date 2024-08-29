/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TBusinessUnitLimitsProjection } from './types';
import * as BusinessUnitsPlatformLimits from './index';

const expectedLimit = expect.objectContaining({
  limit: expect.any(Number),
});
describe('building', () => {
  it(
    ...createBuilderSpec<
      TBusinessUnitLimitsProjection,
      TBusinessUnitLimitsProjection
    >(
      'default',
      BusinessUnitsPlatformLimits.presets.withLimit(),
      expect.objectContaining({
        maxDivisions: expectedLimit,
        maxDepthLimit: expectedLimit,
        maxAssociates: expectedLimit,
        maxAssociateRoles: expectedLimit,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TBusinessUnitLimitsProjection,
      TBusinessUnitLimitsProjection
    >(
      'rest',
      BusinessUnitsPlatformLimits.presets.withLimit(),
      expect.objectContaining({
        maxDivisions: expectedLimit,
        maxDepthLimit: expectedLimit,
        maxAssociates: expectedLimit,
        maxAssociateRoles: expectedLimit,
      })
    )
  );
  it(
    ...createBuilderSpec<
      TBusinessUnitLimitsProjection,
      TBusinessUnitLimitsProjection
    >(
      'graphql',
      BusinessUnitsPlatformLimits.presets.withLimit(),
      expect.objectContaining({
        maxDivisions: expectedLimit,
        maxDepthLimit: expectedLimit,
        maxAssociates: expectedLimit,
        maxAssociateRoles: expectedLimit,
        __typename: 'BusinessUnitLimitsProjection',
      })
    )
  );
});
