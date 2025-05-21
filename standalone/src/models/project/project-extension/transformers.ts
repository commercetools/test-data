import { Transformer } from '@/core';
import type { TProjectExtension, TProjectExtensionGraphql } from './types';

const buildFields: (keyof TProjectExtension)[] = [
  'installedApplications',
  'installedCustomViews',
  'categoryRecommendationSettings',
  'imageRegex',
  'sampleDataImport',
];

const transformers = {
  default: Transformer<TProjectExtension, TProjectExtension>('default', {
    buildFields,
  }),
  graphql: Transformer<TProjectExtension, TProjectExtensionGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'ProjectExtension',
    }),
  }),
};

export default transformers;
