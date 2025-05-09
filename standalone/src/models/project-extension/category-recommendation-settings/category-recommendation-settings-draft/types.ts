import type { TBuilder } from '../../../../core';
import type { TMcSettingsCategoryRecommendationSettingsDataInput } from '../../../../graphql-types';

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
