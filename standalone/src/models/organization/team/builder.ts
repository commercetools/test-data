import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTeamBuilder, TTeam } from './types';

const Model: TCreateTeamBuilder = () =>
  Builder<TTeam>({
    generator,
    transformers,
  });

export default Model;
