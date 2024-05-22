import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCategoryRecommendationSettingsDataInput } from '@commercetools-test-data/graphql-types';

export type TCategoryRecommendationSettingsDraft = Omit<
  TMcSettingsCategoryRecommendationSettingsDataInput,
  '__typename'
>;

export type TCategoryRecommendationSettingsDraftGraphql =
  TMcSettingsCategoryRecommendationSettingsDataInput;

export type TCategoryRecommendationSettingsDraftBuilder =
  TBuilder<TCategoryRecommendationSettingsDraft>;
export type TCreateCategoryRecommendationSettingsDraft =
  () => TCategoryRecommendationSettingsDraftBuilder;
