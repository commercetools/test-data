import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCustomApplicationSubmenuLinkBuilder,
  TCustomApplicationSubmenuLink,
} from './types';

const Model: TCreateCustomApplicationSubmenuLinkBuilder = () =>
  Builder<TCustomApplicationSubmenuLink>({
    generator,
    transformers,
  });

export default Model;
