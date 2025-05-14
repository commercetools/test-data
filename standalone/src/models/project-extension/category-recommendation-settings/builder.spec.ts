/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCategoryRecommendationSettings,
  TCategoryRecommendationSettingsGraphql,
} from './types';
import * as CategoryRecommendationSettings from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCategoryRecommendationSettings,
      TCategoryRecommendationSettings
    >(
      'default',
      CategoryRecommendationSettings.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        searchProperty: expect.any(String),
        attributeName: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCategoryRecommendationSettings,
      TCategoryRecommendationSettingsGraphql
    >(
      'graphql',
      CategoryRecommendationSettings.random(),
      expect.objectContaining({
        __typename: 'CategoryRecommendationSettings',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        searchProperty: expect.any(String),
        attributeName: expect.any(String),
      })
    )
  );
});
