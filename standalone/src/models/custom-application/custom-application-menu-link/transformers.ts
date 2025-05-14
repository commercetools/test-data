import { Transformer } from '@/core';

const transformers = {
  default: Transformer('default', {
    buildFields: ['labelAllLocales'],
  }),
  graphql: Transformer('graphql', {
    buildFields: ['labelAllLocales'],
    addFields: () => ({
      __typename: 'CustomApplicationMenuLink',
    }),
  }),
};

export default transformers;
