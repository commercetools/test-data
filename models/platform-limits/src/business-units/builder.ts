import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TBusinessUnitLimitsProjection,
  TCreateBusinessUnitLimitsProjectionBuilder,
} from './types';

const Model: TCreateBusinessUnitLimitsProjectionBuilder = () =>
  Builder<TBusinessUnitLimitsProjection>({
    generator,
    transformers,
  });

export default Model;