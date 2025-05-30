import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TOidcSsoConfig, TCreateOidcSsoConfigBuilder } from './types';

const Model: TCreateOidcSsoConfigBuilder = () =>
  Builder<TOidcSsoConfig>({
    generator,
    transformers,
  });

export default Model;
