import { CreatedBy, LastModifiedBy } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type {
  TLocalizedString,
  TLocalizedStringGraphql,
} from '@/models/commons';
import type { TFieldDefinition } from '@/models/type';

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
