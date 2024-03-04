import { Transformer } from '@commercetools-test-data/core';
import type { TTeamRest } from './types';

const transformers = {
  default: Transformer<TTeamRest, TTeamRest>('default', {
    buildFields: ['members'],
  }),
  rest: Transformer<TTeamRest, TTeamRest>('rest', {
    buildFields: ['members'],
  }),
};

export default transformers;
