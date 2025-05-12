import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateDivisionBuilder, TDivision } from './types';

const Model: TCreateDivisionBuilder = () =>
  Builder<TDivision>({
    generator,
    transformers,
  });

export default Model;
