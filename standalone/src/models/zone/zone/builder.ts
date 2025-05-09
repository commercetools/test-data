import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateZoneBuilder, TZone } from './types';

const Model: TCreateZoneBuilder = () =>
  Builder<TZone>({
    generator,
    transformers,
  });

export default Model;
