import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomViewTypeSettings,
  TCreateCustomViewTypeSettingsBuilder,
} from './types';

const Model: TCreateCustomViewTypeSettingsBuilder = () =>
  Builder<TCustomViewTypeSettings>({
    generator,
    transformers,
  });

export default Model;
