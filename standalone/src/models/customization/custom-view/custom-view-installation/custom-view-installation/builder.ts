import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomViewInstallation,
  TCreateCustomViewInstallationBuilder,
} from './types';

const Model: TCreateCustomViewInstallationBuilder = () =>
  Builder<TCustomViewInstallation>({
    generator,
    transformers,
  });

export default Model;
