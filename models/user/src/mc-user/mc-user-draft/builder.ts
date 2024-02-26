import { Builder } from '@commercetools-test-data/core';
import type { TMcCreateUserDraftBuilder, TMcUserDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TMcCreateUserDraftBuilder = () =>
  Builder<TMcUserDraft>({
    generator,
    transformers,
  });

export default Model;
