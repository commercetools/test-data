import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTeamRestBuilder, TTeamRest } from './types';

const Model: TCreateTeamRestBuilder = () =>
  Builder<TTeamRest>({
    generator,
    transformers,
  });

export default Model;
