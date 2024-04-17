import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomApplicationInstallation,
  TCreateCustomApplicationInstallationBuilder,
} from './types';

const Model: TCreateCustomApplicationInstallationBuilder = () =>
  Builder<TCustomApplicationInstallation>({
    generator,
    transformers,
  });

export default Model;
