import { Transformer } from '@/core';
import type {
  TCategoryRecommendationSettingsDraft,
  TCategoryRecommendationSettingsDraftGraphql,
} from './types';

const buildFields: (keyof TCategoryRecommendationSettingsDraft)[] = [];

const transformers = {
  default: Transformer<
    TCategoryRecommendationSettingsDraft,
    TCategoryRecommendationSettingsDraft
  >('default', {
    buildFields,
  }),
  graphql: Transformer<
    TCategoryRecommendationSettingsDraft,
    TCategoryRecommendationSettingsDraftGraphql
  >('graphql', {
    buildFields,
  }),
};

export default transformers;
