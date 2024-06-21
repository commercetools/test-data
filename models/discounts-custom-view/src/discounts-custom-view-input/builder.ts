import { Builder } from '@commercetools-test-data/core';
import type {
  TDiscountsCustomViewInput,
  TCreateDiscountsCustomViewInputBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateDiscountsCustomViewInputBuilder = () =>
  Builder<TDiscountsCustomViewInput>({
    generator,
    transformers,
  });

export default Model;
