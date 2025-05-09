import { Builder } from '../../../../core';
import type { TMoneyDraft, TCreateMoneyBuilder } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateMoneyBuilder = () =>
  Builder<TMoneyDraft>({
    name: 'MoneyDraft',
    generator,
    transformers,
  });

export default Model;
