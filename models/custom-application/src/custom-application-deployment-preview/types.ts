import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcSettingsCustomApplicationDeploymentPreview } from '@commercetools-test-data/graphql-types';

export type TCustomApplicationDeploymentPreviewGraphql =
  TMcSettingsCustomApplicationDeploymentPreview;

export type TCustomApplicationDeploymentPreview = Omit<
  TCustomApplicationDeploymentPreviewGraphql,
  '__typename'
>;

export type TCustomApplicationDeploymentPreviewBuilder =
  TBuilder<TCustomApplicationDeploymentPreview>;
export type TCreateCustomApplicationDeploymentPreviewBuilder =
  () => TCustomApplicationDeploymentPreviewBuilder;
