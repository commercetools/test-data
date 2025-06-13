import { fake, type TModelFieldsConfig } from '@/core';
import { TRawCustomFielGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TRawCustomFielGraphql> = {
  fields: {
    __typename: 'RawCustomField',
    name: fake((f) => f.lorem.word()),
    // value is an overloaded field. It might be best to create your own.
    value: null,
    // Beta property
    referencedResource: null,
    // Beta property
    referencedResourceSet: [],
  },
};
