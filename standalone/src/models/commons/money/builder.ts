import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TMoney, TCreateMoneyBuilder } from './types';

const Model: TCreateMoneyBuilder = () =>
  Builder<TMoney>({
    name: 'Money',
    generator,
    transformers,
  });

export default Model;
