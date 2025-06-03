import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationDeploymentPreview } from '@/graphql-types';

export type TCustomApplicationDeploymentPreviewGraphql =
  TMcSettingsCustomApplicationDeploymentPreview;

export type TCreateCustomApplicationDeploymentPreviewBuilder<
  TModel extends TCustomApplicationDeploymentPreviewGraphql,
> = () => TBuilder<TModel>;
