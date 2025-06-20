import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TResourceIdentifierGraphql,
  TResourceIdentifierRest,
} from './types';

const commonFieldsConfig = {
  key: fake((f) => f.string.uuid()),
  id: fake((f) => f.string.uuid()),
  typeId: null,
};

export const restFieldsConfig: TModelFieldsConfig<TResourceIdentifierRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TResourceIdentifierGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'ResourceIdentifier',
    },
  };
