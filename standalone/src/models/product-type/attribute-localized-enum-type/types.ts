import { AttributeLocalizedEnumType } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TCtpLocalizableEnumAttributeDefinitionType,
  TCtpLocalizableEnumTypeDraft,
} from '../../../graphql-types';

/**
 * @deprecated use `TAttributeLocalizedEnumTypeRest` or `TAttributeLocalizedEnumTypeGraphql` instead
 */
export type TAttributeLocalizedEnumType = AttributeLocalizedEnumType;
/**
 * @deprecated use `TAttributeLocalizedEnumTypeRest` or `TAttributeLocalizedEnumTypeGraphql` instead
 */
export type TAttributeLocalizedEnumTypeDraft = AttributeLocalizedEnumType;

// REST types
export type TAttributeLocalizedEnumTypeRest = AttributeLocalizedEnumType;
export type TAttributeLocalizedEnumTypeDraftRest = AttributeLocalizedEnumType;

// GraphQL types
export type TAttributeLocalizedEnumTypeGraphql =
  TCtpLocalizableEnumAttributeDefinitionType;
export type TAttributeLocalizedEnumTypeDraftGraphql =
  TCtpLocalizableEnumTypeDraft;

// Builders type
export type TCreateAttributeLocalizedEnumTypeBuilder<
  TAttributeLocalizedEnumTypeModel extends
    | TAttributeLocalizedEnumTypeRest
    | TAttributeLocalizedEnumTypeDraftRest
    | TAttributeLocalizedEnumTypeGraphql
    | TAttributeLocalizedEnumTypeDraftGraphql,
> = () => TBuilder<TAttributeLocalizedEnumTypeModel>;
