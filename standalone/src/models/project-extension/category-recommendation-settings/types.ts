import type { TBuilder } from '@/core';
import type { TMcSettingsCategoryRecommendationSettings } from '@/graphql-types';

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
