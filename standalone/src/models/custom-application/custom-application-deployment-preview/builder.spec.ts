/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type {
  TCustomApplicationDeploymentPreview,
  TCustomApplicationDeploymentPreviewGraphql,
} from './types';
import * as CustomApplicationInstallationModel from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCustomApplicationDeploymentPreview,
      TCustomApplicationDeploymentPreview
    >(
      'default',
      CustomApplicationInstallationModel.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        alias: expect.any(String),
        url: expect.any(String),
      })
    )
  );
  it(
    ...createBuilderSpec<
      TCustomApplicationDeploymentPreview,
      TCustomApplicationDeploymentPreviewGraphql
    >(
      'graphql',
      CustomApplicationInstallationModel.random(),
      expect.objectContaining({
        __typename: 'CustomApplicationDeploymentPreview',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        alias: expect.any(String),
        url: expect.any(String),
      })
    )
  );
});
