import { Transformer } from '../../../core';
import type {
  TCategoryRecommendationSettings,
  TCategoryRecommendationSettingsGraphql,
} from './types';

const buildFields: (keyof TCategoryRecommendationSettings)[] = [];

const transformers = {
  default: Transformer<
    TCategoryRecommendationSettings,
    TCategoryRecommendationSettings
  >('default', {
    buildFields,
  }),
  graphql: Transformer<
    TCategoryRecommendationSettings,
    TCategoryRecommendationSettingsGraphql
  >('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'CategoryRecommendationSettings',
    }),
  }),
};

export default transformers;
