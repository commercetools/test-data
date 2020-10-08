import type { TCreateLocalizedStringBuilder, TLocalizedString } from './types';

import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';

const LocalizedString: TCreateLocalizedStringBuilder = ({ defaults } = {}) =>
  Builder<TLocalizedString>({
    generator,
    transformers,
    defaults,
  });

export default LocalizedString;
