import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTeamBuilder, TTeam, TTeamRest } from './types';

const Model: TCreateTeamBuilder = () =>
  Builder<TTeam | TTeamRest>({
    generator,
    transformers,
  });

export default Model;
