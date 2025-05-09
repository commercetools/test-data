import { Builder } from '../../../../core';
import type { TCreateCompanyDraftBuilder, TCompanyDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCompanyDraftBuilder = () =>
  Builder<TCompanyDraft>({
    generator,
    transformers,
  });

export default Model;
