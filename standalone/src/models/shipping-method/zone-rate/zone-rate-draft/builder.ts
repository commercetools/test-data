import { Builder } from '@/core';
import type { TCreateZoneRateDraftBuilder, TZoneRateDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateZoneRateDraftBuilder = () =>
  Builder<TZoneRateDraft>({
    generator,
    transformers,
  });

export default Model;
