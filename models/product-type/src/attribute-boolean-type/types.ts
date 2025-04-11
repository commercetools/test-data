import type { AttributeBooleanType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpBooleanAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@commercetools-test-data/graphql-types';

/**
 * @deprecated use `TAttributeDefinitionRest` or `TAttributeDefinitionGraphql` instead
 */
export type TAttributeBooleanType = AttributeBooleanType;
/**
 * @deprecated use `TAttributeDefinitionRest` or `TAttributeDefinitionGraphql` instead
 */
export type TAttributeBooleanTypeDraft = AttributeBooleanType;

export type TAttributeBooleanTypeRest = AttributeBooleanType;
export type TAttributeBooleanTypeDraftRest = AttributeBooleanType;

export type TAttributeBooleanTypeGraphql = TCtpBooleanAttributeDefinitionType;
export type TAttributeBooleanTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

export type TCreateAttributeBooleanTypeBuilder<
  TAttributeBooleanTypeModel extends
    | TAttributeBooleanTypeRest
    | TAttributeBooleanTypeDraftRest
    | TAttributeBooleanTypeGraphql
    | TAttributeBooleanTypeDraftGraphql,
> = () => TBuilder<TAttributeBooleanTypeModel>;
