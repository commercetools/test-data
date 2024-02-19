import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateAppliedActionRightBuilder,
  TAppliedActionRight,
} from './types';

const Model: TCreateAppliedActionRightBuilder = () =>
  Builder<TAppliedActionRight>({
    generator,
    transformers,
  });

export default Model;
