import { AttributeReference } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpAttributeReference } from '@/graphql-types';

export type TAttributeReferenceRest = AttributeReference;
export type TAttributeReferenceGraphql = TCtpAttributeReference;

export type TCreateAttributeReferenceBuilder<
  TModel extends TAttributeReferenceRest | TAttributeReferenceGraphql,
> = () => TBuilder<TModel>;
