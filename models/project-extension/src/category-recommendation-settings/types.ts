import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCategoryRecommendationSettings } from '@commercetools-test-data/graphql-types/src/generated/settings';

export type TCategoryRecommendationSettings = Omit<
  TMcSettingsCategoryRecommendationSettings,
  '__typename'
>;

export type TCategoryRecommendationSettingsGraphql =
  TMcSettingsCategoryRecommendationSettings;

export type TCategoryRecommendationSettingsBuilder =
  TBuilder<TCategoryRecommendationSettings>;
export type TCreateCategoryRecommendationSettings =
  () => TCategoryRecommendationSettingsBuilder;
