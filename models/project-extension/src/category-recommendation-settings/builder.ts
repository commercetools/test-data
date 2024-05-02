import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCategoryRecommendationSettings,
  TCategoryRecommendationSettings,
} from './types';

const Model: TCreateCategoryRecommendationSettings = () =>
  Builder<TCategoryRecommendationSettings>({
    generator,
    transformers,
  });

export default Model;
