import { Builder } from '@commercetools-test-data/core';
import type { TCreateLocalizedStringBuilder, TLocalizedString } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateLocalizedStringBuilder = () =>
  Builder<TLocalizedString>({
    generator,
    transformers,
  });

export default Model;
