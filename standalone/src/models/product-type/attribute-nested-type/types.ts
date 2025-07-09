import type { AttributeNestedType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpNestedAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

// REST types
export type TAttributeNestedTypeRest = AttributeNestedType;
export type TAttributeNestedTypeDraftRest = AttributeNestedType;

// GraphQL types
export type TAttributeNestedTypeGraphql = TCtpNestedAttributeDefinitionType;
export type TAttributeNestedTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

// Builders types
export type TCreateAttributeNestedTypeBuilder<
  TAttributeNestedTypeModel extends
    | TAttributeNestedTypeRest
    | TAttributeNestedTypeDraftRest
    | TAttributeNestedTypeGraphql
    | TAttributeNestedTypeDraftGraphql,
> = () => TBuilder<TAttributeNestedTypeModel>;
