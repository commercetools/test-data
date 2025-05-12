import { Builder } from '../../../../core';
import type { TCreateImageDraftBuilder, TImageDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateImageDraftBuilder = () =>
  Builder<TImageDraft>({
    generator,
    transformers,
  });

export default Model;
