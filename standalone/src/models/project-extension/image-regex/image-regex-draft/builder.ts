import { Builder } from '../../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateImageRegexDraftBuilder, TImageRegexDraft } from './types';

const Model: TCreateImageRegexDraftBuilder = () =>
  Builder<TImageRegexDraft>({
    generator,
    transformers,
  });

export default Model;
