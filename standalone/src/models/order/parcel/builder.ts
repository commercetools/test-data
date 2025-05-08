import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateParcelBuilder, TParcel } from './types';

const Model: TCreateParcelBuilder = () =>
  Builder<TParcel>({
    generator,
    transformers,
  });

export default Model;
