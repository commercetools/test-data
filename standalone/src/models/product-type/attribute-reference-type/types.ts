import type { AttributeReferenceType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpReferenceAttributeDefinitionType,
  TCtpReferenceTypeDefinitionDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeReferenceTypeRest` or `TAttributeReferenceTypeGraphql` instead
 */
export type TAttributeReferenceType = AttributeReferenceType;
/**
 * @deprecated use `TAttributeReferenceTypeRest` or `TAttributeReferenceTypeGraphql` instead
 */
export type TAttributeReferenceTypeDraft = AttributeReferenceType;

// REST types
export type TAttributeReferenceTypeRest = AttributeReferenceType;
export type TAttributeReferenceTypeDraftRest = AttributeReferenceType;

// GraphQL types
export type TAttributeReferenceTypeGraphql =
  TCtpReferenceAttributeDefinitionType;
export type TAttributeReferenceTypeDraftGraphql =
  TCtpReferenceTypeDefinitionDraft;

// Builder type
export type TCreateAttributeReferenceTypeBuilder<
  TAttributeReferenceTypeModel extends
    | TAttributeReferenceTypeRest
    | TAttributeReferenceTypeDraftRest
    | TAttributeReferenceTypeGraphql
    | TAttributeReferenceTypeDraftGraphql,
> = () => TBuilder<TAttributeReferenceTypeModel>;
