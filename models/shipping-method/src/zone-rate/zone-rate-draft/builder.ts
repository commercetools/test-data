import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateZoneRateDraftBuilder, TZoneRateDraft } from './types';

const Model: TCreateZoneRateDraftBuilder = () =>
  Builder<TZoneRateDraft>({
    generator,
    transformers,
  });

export default Model;
