import { Builder } from '@/core';
import type { TCreateDivisionDraftBuilder, TDivisionDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateDivisionDraftBuilder = () =>
  Builder<TDivisionDraft>({
    generator,
    transformers,
  });

export default Model;
