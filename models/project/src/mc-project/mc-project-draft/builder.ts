import { Builder } from '@commercetools-test-data/core';
import type { TCreateMcProjectDraftBuilder, TMcProjectDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateMcProjectDraftBuilder = () =>
  Builder<TMcProjectDraft>({
    generator,
    transformers,
  });

export default Model;
