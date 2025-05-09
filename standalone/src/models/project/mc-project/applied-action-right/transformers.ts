import { Transformer } from '../../../../core';
import type { TAppliedActionRight, TAppliedActionRightGraphql } from './types';

const transformers = {
  default: Transformer<TAppliedActionRight, TAppliedActionRight>('default', {}),
  rest: Transformer<TAppliedActionRight, TAppliedActionRight>('rest', {}),
  graphql: Transformer<TAppliedActionRight, TAppliedActionRightGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'AppliedActionRight',
      }),
    }
  ),
};

export default transformers;
