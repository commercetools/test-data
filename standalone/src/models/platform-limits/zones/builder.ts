import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TZoneLimitsProjection,
  TCreateZoneLimitsProjectionBuilder,
} from './types';

const Model: TCreateZoneLimitsProjectionBuilder = () =>
  Builder<TZoneLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
