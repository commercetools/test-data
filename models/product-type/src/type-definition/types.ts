import { CreatedBy, LastModifiedBy } from '@commercetools/platform-sdk';
import type {
  TLocalizedString,
  TLocalizedStringGraphql,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TFieldDefinition } from '@commercetools-test-data/type';

export type TTypeDefinition = {
  key: string;
  name: TLocalizedString;
  description?: TLocalizedString;
  resourceTypeIds: string[];
  fieldDefinitions: TFieldDefinition[];
  id: string;
  version: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy?: LastModifiedBy;
  createdBy?: CreatedBy;
};

export type TTypeDefinitionGraphql = Omit<
  TTypeDefinition,
  'name' | 'description'
> & {
  nameAllLocales: TLocalizedStringGraphql;
  descriptionAllLocales?: TLocalizedStringGraphql;
  name?: string | null;
  description?: string | null;
  __typename: 'TypeDefinition';
};

export type TTypeDefinitionBuilder = TBuilder<TTypeDefinition>;

export type TCreateTypeDefinitionBuilder = () => TTypeDefinitionBuilder;
