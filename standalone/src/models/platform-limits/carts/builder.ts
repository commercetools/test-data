import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCartLimitsProjection,
  TCreateCartLimitsProjectionBuilder,
} from './types';

const Model: TCreateCartLimitsProjectionBuilder = () =>
  Builder<TCartLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
