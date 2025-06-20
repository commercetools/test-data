import { IResourceIdentifier } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpResourceIdentifier } from '@/graphql-types';

export type TResourceIdentifierRest = IResourceIdentifier;
export type TResourceIdentifierGraphql = TCtpResourceIdentifier;

export type TCreateResourceIdentifierBuilder<
  TModel extends TResourceIdentifierRest | TResourceIdentifierGraphql,
> = () => TBuilder<TModel>;
