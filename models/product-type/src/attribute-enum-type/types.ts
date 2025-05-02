import type { AttributeEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpEnumAttributeDefinitionType,
  TCtpEnumTypeDraft,
} from '@commercetools-test-data/graphql-types';

/**
 * @deprecated use `TAttributeEnumTypeRest` or `TAttributeEnumTypeGraphql` instead
 */
export type TAttributeEnumType = AttributeEnumType;
/**
 * @deprecated use `TAttributeEnumTypeRest` or `TAttributeEnumTypeGraphql` instead
 */
export type TAttributeEnumTypeDraft = AttributeEnumType;

export type TAttributeEnumTypeRest = AttributeEnumType;
export type TAttributeEnumTypeDraftRest = AttributeEnumType;

export type TAttributeEnumTypeGraphql = TCtpEnumAttributeDefinitionType;
export type TAttributeEnumTypeDraftGraphql = TCtpEnumTypeDraft;

export type TCreateAttributeEnumTypeBuilder<
  TAttributeEnumTypeModel extends
    | TAttributeEnumTypeRest
    | TAttributeEnumTypeDraftRest
    | TAttributeEnumTypeGraphql
    | TAttributeEnumTypeDraftGraphql,
> = () => TBuilder<TAttributeEnumTypeModel>;
