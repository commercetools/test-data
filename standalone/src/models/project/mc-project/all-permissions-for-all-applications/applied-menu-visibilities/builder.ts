import { Builder } from '../../../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAppliedMenuVisibilitiesBuilder,
  TAppliedMenuVisibilities,
} from './types';

const Model: TCreateAppliedMenuVisibilitiesBuilder = () =>
  Builder<TAppliedMenuVisibilities>({
    generator,
    transformers,
  });

export default Model;
