import type { TMcSettingsCustomApplicationDeploymentPreview } from '@commercetools-test-data/graphql-types';
import type { TBuilder } from '@/core';

export type TCustomApplicationDeploymentPreviewGraphql =
  TMcSettingsCustomApplicationDeploymentPreview;

export type TCreateCustomApplicationDeploymentPreviewBuilder<
  TModel extends TCustomApplicationDeploymentPreviewGraphql,
> = () => TBuilder<TModel>;
