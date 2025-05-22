import type { AttributeTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpTimeAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeTimeTypeRest` or `TAttributeTimeTypeGraphql` instead
 */
export type TAttributeTimeType = AttributeTimeType;
/**
 * @deprecated use `TAttributeTimeTypeRest` or `TAttributeTimeTypeGraphql` instead
 */
export type TAttributeTimeTypeDraft = AttributeTimeType;

// REST types
export type TAttributeTimeTypeRest = AttributeTimeType;
export type TAttributeTimeTypeDraftRest = AttributeTimeType;

// GraphQL types
export type TAttributeTimeTypeGraphql = TCtpTimeAttributeDefinitionType;
export type TAttributeTimeTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

// Builders types
export type TCreateAttributeTimeTypeBuilder<
  TAttributeTimeTypeModel extends
    | TAttributeTimeTypeRest
    | TAttributeTimeTypeDraftRest
    | TAttributeTimeTypeGraphql
    | TAttributeTimeTypeDraftGraphql,
> = () => TBuilder<TAttributeTimeTypeModel>;
