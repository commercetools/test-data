import { Builder } from '@commercetools-test-data/core';
import type { TCreateUserDraftBuilder, TUserDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateUserDraftBuilder = () =>
  Builder<TUserDraft>({
    generator,
    transformers,
  });

export default Model;
