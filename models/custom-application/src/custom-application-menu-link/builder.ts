import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCustomApplicationMenuLinkBuilder,
  TCustomApplicationMenuLink,
} from './types';

const Model: TCreateCustomApplicationMenuLinkBuilder = () =>
  Builder<TCustomApplicationMenuLink>({
    generator,
    transformers,
  });

export default Model;
