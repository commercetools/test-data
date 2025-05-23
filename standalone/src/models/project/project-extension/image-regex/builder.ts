import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateImageRegexBuilder, TImageRegex } from './types';

const Model: TCreateImageRegexBuilder = () =>
  Builder<TImageRegex>({
    generator,
    transformers,
  });

export default Model;
