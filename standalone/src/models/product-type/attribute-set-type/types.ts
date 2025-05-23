import { AttributeSetType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpSetAttributeDefinitionType,
  TCtpAttributeSetTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeSetTypeRest` or `TAttributeSetTypeGraphql` instead
 */
export type TAttributeSetType = AttributeSetType;
/**
 * @deprecated use `TAttributeSetTypeDraftRest` or `TAttributeSetTypeDraftGraphql` instead
 */
export type TAttributeSetTypeDraft = AttributeSetType;

// REST types
export type TAttributeSetTypeRest = AttributeSetType;
export type TAttributeSetTypeDraftRest = AttributeSetType;

// GraphQL types
export type TAttributeSetTypeGraphql = TCtpSetAttributeDefinitionType;
export type TAttributeSetTypeDraftGraphql = TCtpAttributeSetTypeDraft;

// Builders types
export type TCreateAttributeSetTypeBuilder<
  TAttributeSetTypeModel extends
    | TAttributeSetTypeRest
    | TAttributeSetTypeDraftRest
    | TAttributeSetTypeGraphql
    | TAttributeSetTypeDraftGraphql,
> = () => TBuilder<TAttributeSetTypeModel>;
