import { Builder } from '@commercetools-test-data/core';
import type { TCreateTeamDraftBuilder, TTeamDraft } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateTeamDraftBuilder = () =>
  Builder<TTeamDraft>({
    generator,
    transformers,
  });

export default Model;
