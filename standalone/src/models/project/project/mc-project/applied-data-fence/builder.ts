import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAppliedDataFenceBuilder,
  TAppliedDataFence,
} from './types';

const Model: TCreateAppliedDataFenceBuilder = () =>
  Builder<TAppliedDataFence>({
    generator,
    transformers,
  });

export default Model;
