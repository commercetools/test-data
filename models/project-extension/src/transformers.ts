import { Transformer } from '@commercetools-test-data/core';
import type { TProjectExtension, TProjectExtensionGraphql } from './types';

const buildFields: (keyof TProjectExtension)[] = [
  'installedApplications',
  'installedCustomViews',
  'categoryRecommendationSettings',
  'imageRegex',
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
