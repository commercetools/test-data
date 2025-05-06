import type { AttributeMoneyType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpMoneyAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@commercetools-test-data/graphql-types';

/**
 * @deprecated use `TAttributeMoneyTypeRest` or `TAttributeMoneyTypeGraphql` instead
 */
export type TAttributeMoneyType = AttributeMoneyType;
/**
 * @deprecated use `TAttributeMoneyTypeRest` or `TAttributeMoneyTypeGraphql` instead
 */
export type TAttributeMoneyTypeDraft = AttributeMoneyType;

// REST types
export type TAttributeMoneyTypeRest = AttributeMoneyType;
export type TAttributeMoneyTypeDraftRest = AttributeMoneyType;

// GraphQL types
export type TAttributeMoneyTypeGraphql = TCtpMoneyAttributeDefinitionType;
export type TAttributeMoneyTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

// Builders types
export type TCreateAttributeMoneyTypeBuilder<
  TAttributeMoneyTypeModel extends
    | TAttributeMoneyTypeRest
    | TAttributeMoneyTypeDraftRest
    | TAttributeMoneyTypeGraphql
    | TAttributeMoneyTypeDraftGraphql,
> = () => TBuilder<TAttributeMoneyTypeModel>;
