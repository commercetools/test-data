import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCustomApplicationDeploymentPreviewBuilder,
  TCustomApplicationDeploymentPreview,
} from './types';

const CustomApplicationDeploymentPreview: TCreateCustomApplicationDeploymentPreviewBuilder =
  () =>
    Builder<TCustomApplicationDeploymentPreview>({
      generator,
      transformers,
    });

export default CustomApplicationDeploymentPreview;
