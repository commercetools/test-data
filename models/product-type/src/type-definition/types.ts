// import { TypeDefinition } from '@commercetools/platform-sdk'; shouldn't this come from here?
import type { TBuilder } from '@commercetools-test-data/core';

export interface TypeDefinition {
  id: string;
  key: string;
  name: null;
  fieldDefinitions: null;
}

export type TTypeDefinitionGraphql = TTypeDefinition & {
  __typename: 'TypeDefinition';
};

export type TTypeDefinitionBuilder = TBuilder<TypeDefinition>;

export type TTypeDefinition = TypeDefinition;

export type TCreateTypeDefinitionBuilder = () => TTypeDefinitionBuilder;
