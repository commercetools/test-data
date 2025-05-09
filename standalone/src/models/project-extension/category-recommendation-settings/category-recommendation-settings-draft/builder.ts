import { Builder } from '../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCategoryRecommendationSettingsDraft,
  TCategoryRecommendationSettingsDraft,
} from './types';

const Model: TCreateCategoryRecommendationSettingsDraft = () =>
  Builder<TCategoryRecommendationSettingsDraft>({
    generator,
    transformers,
  });

export default Model;
