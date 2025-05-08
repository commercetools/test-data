import { Builder } from '../../../../core';
import type { TCreateProjectDraftBuilder, TProjectDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateProjectDraftBuilder = () =>
  Builder<TProjectDraft>({
    generator,
    transformers,
  });

export default Model;
