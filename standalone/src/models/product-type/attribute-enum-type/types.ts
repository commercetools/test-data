import type { AttributeEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TCtpEnumAttributeDefinitionType,
  TCtpEnumTypeDraft,
} from '../../../graphql-types';

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
