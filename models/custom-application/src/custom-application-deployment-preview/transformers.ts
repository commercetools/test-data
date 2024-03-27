import { Transformer } from '@commercetools-test-data/core';
import type {
  TCustomApplicationDeploymentPreview,
  TCustomApplicationDeploymentPreviewGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCustomApplicationDeploymentPreview,
    TCustomApplicationDeploymentPreview
  >('default', {}),
  graphql: Transformer<
    TCustomApplicationDeploymentPreview,
    TCustomApplicationDeploymentPreviewGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CustomApplicationDeploymentPreview',
    }),
  }),
};

export default transformers;
