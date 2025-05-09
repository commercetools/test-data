import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TZoneRate, TCreateZoneRateBuilder } from './types';

const Model: TCreateZoneRateBuilder = () =>
  Builder<TZoneRate>({
    generator,
    transformers,
  });

export default Model;
