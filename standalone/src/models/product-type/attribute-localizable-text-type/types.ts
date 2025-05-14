import { AttributeLocalizableTextType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpLocalizableTextAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeLocalizableTextTypeRest` or `TAttributeLocalizableTextTypeGraphql` instead
 */
export type TAttributeLocalizableTextType = AttributeLocalizableTextType;
/**
 * @deprecated use `TAttributeLocalizableTextTypeRest` or `TAttributeLocalizableTextTypeGraphql` instead
 */
export type TAttributeLocalizableTextTypeDraft = AttributeLocalizableTextType;

export type TAttributeLocalizableTextTypeRest = AttributeLocalizableTextType;
export type TAttributeLocalizableTextTypeDraftRest =
  AttributeLocalizableTextType;

export type TAttributeLocalizableTextTypeGraphql =
  TCtpLocalizableTextAttributeDefinitionType;
export type TAttributeLocalizableTextTypeDraftGraphql =
  TCtpSimpleAttributeTypeDraft;

export type TCreateAttributeLocalizableTextTypeBuilder<
  TAttributeLocalizableTextTypeModel extends
    | TAttributeLocalizableTextTypeRest
    | TAttributeLocalizableTextTypeDraftRest
    | TAttributeLocalizableTextTypeGraphql
    | TAttributeLocalizableTextTypeDraftGraphql,
> = () => TBuilder<TAttributeLocalizableTextTypeModel>;
