import type { TBuilder } from '@/core';
import type { TMcSettingsCustomApplicationDeploymentPreview } from '@/graphql-types';

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
