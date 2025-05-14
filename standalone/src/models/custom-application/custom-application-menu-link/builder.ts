import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCreateCustomApplicationMenuLinkBuilder,
  TCustomApplicationMenuLink,
} from './types';

const Model: TCreateCustomApplicationMenuLinkBuilder = () =>
  Builder<TCustomApplicationMenuLink>({
    generator,
    transformers,
  });

export default Model;
