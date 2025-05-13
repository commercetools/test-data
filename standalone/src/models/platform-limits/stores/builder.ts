import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TStoreLimitsProjection,
  TCreateStoreLimitsProjectionBuilder,
} from './types';

const Model: TCreateStoreLimitsProjectionBuilder = () =>
  Builder<TStoreLimitsProjection>({
    generator,
    transformers,
  });

export default Model;
