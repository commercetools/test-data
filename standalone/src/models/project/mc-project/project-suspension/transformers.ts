import { Transformer } from '../../../../core';
import type { TProjectSuspension, TProjectSuspensionGraphql } from './types';

const transformers = {
  default: Transformer<TProjectSuspension, TProjectSuspension>('default', {}),
  rest: Transformer<TProjectSuspension, TProjectSuspension>('rest', {}),
  graphql: Transformer<TProjectSuspension, TProjectSuspensionGraphql>(
    'graphql',
    {
      addFields: () => ({
        __typename: 'ProjectSuspension',
      }),
    }
  ),
};

export default transformers;
