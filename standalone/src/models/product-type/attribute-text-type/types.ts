import type { AttributeTextType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpTextAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeTextTypeRest` or `TAttributeTextTypeGraphql` instead
 */
export type TAttributeTextType = AttributeTextType;
/**
 * @deprecated use `TAttributeTextTypeRest` or `TAttributeTextTypeGraphql` instead
 */
export type TAttributeTextTypeDraft = AttributeTextType;

// REST types
export type TAttributeTextTypeRest = AttributeTextType;
export type TAttributeTextTypeDraftRest = AttributeTextType;

// GraphQL types
export type TAttributeTextTypeGraphql = TCtpTextAttributeDefinitionType;
export type TAttributeTextTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

// Builders types
export type TCreateAttributeTextTypeBuilder<
  TAttributeTextTypeModel extends
    | TAttributeTextTypeRest
    | TAttributeTextTypeDraftRest
    | TAttributeTextTypeGraphql
    | TAttributeTextTypeDraftGraphql,
> = () => TBuilder<TAttributeTextTypeModel>;
