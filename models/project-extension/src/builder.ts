import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProjectExtensionBuilder,
  TProjectExtension,
} from './types';

const Model: TCreateProjectExtensionBuilder = () =>
  Builder<TProjectExtension>({
    generator,
    transformers,
  });

export default Model;
