import { Builder } from '@commercetools-test-data/core';
import type { TCreateLocalizedStringBuilder, TLocalizedString } from './types';
import generator from './generator';
import transformers from './transformers';

const LocalizedString: TCreateLocalizedStringBuilder = () =>
  Builder<TLocalizedString>({
    generator,
    transformers,
  });

export default LocalizedString;
