import type { AttributeNumberType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpNumberAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeNumberTypeRest` or `TAttributeNumberTypeGraphql` instead
 */
export type TAttributeNumberType = AttributeNumberType;
/**
 * @deprecated use `TAttributeNumberTypeRest` or `TAttributeNumberTypeGraphql` instead
 */
export type TAttributeNumberTypeDraft = AttributeNumberType;

// REST types
export type TAttributeNumberTypeRest = AttributeNumberType;
export type TAttributeNumberTypeDraftRest = AttributeNumberType;

// GraphQL types
export type TAttributeNumberTypeGraphql = TCtpNumberAttributeDefinitionType;
export type TAttributeNumberTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

// Builders types
export type TCreateAttributeNumberTypeBuilder<
  TAttributeNumberTypeModel extends
    | TAttributeNumberTypeRest
    | TAttributeNumberTypeDraftRest
    | TAttributeNumberTypeGraphql
    | TAttributeNumberTypeDraftGraphql,
> = () => TBuilder<TAttributeNumberTypeModel>;
