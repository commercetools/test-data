/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type {
  TCategoryRecommendationSettingsDraft,
  TCategoryRecommendationSettingsDraftGraphql,
} from './types';
import * as CategoryRecommendationSettingsDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCategoryRecommendationSettingsDraft,
      TCategoryRecommendationSettingsDraft
    >(
      'default',
      CategoryRecommendationSettingsDraft.random(),
      expect.objectContaining({
        searchProperty: expect.any(String),
        attributeName: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCategoryRecommendationSettingsDraft,
      TCategoryRecommendationSettingsDraftGraphql
    >(
      'graphql',
      CategoryRecommendationSettingsDraft.random(),
      expect.objectContaining({
        searchProperty: expect.any(String),
        attributeName: expect.any(String),
      })
    )
  );
});
