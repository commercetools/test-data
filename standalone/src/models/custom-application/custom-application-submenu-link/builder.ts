import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCreateCustomApplicationSubmenuLinkBuilder,
  TCustomApplicationSubmenuLink,
} from './types';

const Model: TCreateCustomApplicationSubmenuLinkBuilder = () =>
  Builder<TCustomApplicationSubmenuLink>({
    generator,
    transformers,
  });

export default Model;
