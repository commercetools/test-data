/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TZoneRateDraft, TZoneRateDraftGraphql } from './types';
import * as ZoneRateDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TZoneRateDraft, TZoneRateDraft>(
      'default',
      ZoneRateDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TZoneRateDraft, TZoneRateDraft>(
      'rest',
      ZoneRateDraft.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TZoneRateDraft, TZoneRateDraftGraphql>(
      'graphql',
      ZoneRateDraft.random(),
      expect.objectContaining({
        __typename: 'ZoneRateDraft',
      })
    )
  );
});
