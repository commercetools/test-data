import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProjectSuspensionBuilder,
  TProjectSuspension,
} from './types';

const Model: TCreateProjectSuspensionBuilder = () =>
  Builder<TProjectSuspension>({
    generator,
    transformers,
  });

export default Model;
