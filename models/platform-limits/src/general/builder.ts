import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TProjectCustomLimitsProjection,
  TCreateProjectCustomLimitsProjectionBuilder,
} from './types';

const Model: TCreateProjectCustomLimitsProjectionBuilder = () =>
  Builder<TProjectCustomLimitsProjection>({
    generator,
    transformers,
  });

export default Model;