import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateLocalizedStringBuilder, TLocalizedString } from './types';

const Model: TCreateLocalizedStringBuilder = () =>
  Builder<TLocalizedString>({
    generator,
    transformers,
  });

export default Model;
