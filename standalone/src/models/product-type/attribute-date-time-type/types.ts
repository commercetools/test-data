import type { AttributeDateTimeType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpDateTimeAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeDefinitionRest` or `TAttributeDefinitionGraphql` instead
 */
export type TAttributeDateTimeType = AttributeDateTimeType;
/**
 * @deprecated use `TAttributeDefinitionRest` or `TAttributeDefinitionGraphql` instead
 */
export type TAttributeDateTimeTypeDraft = AttributeDateTimeType;

export type TAttributeDateTimeTypeRest = AttributeDateTimeType;
export type TAttributeDateTimeTypeDraftRest = AttributeDateTimeType;

export type TAttributeDateTimeTypeGraphql = TCtpDateTimeAttributeDefinitionType;
export type TAttributeDateTimeTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

export type TCreateAttributeDateTimeTypeBuilder<
  TAttributeDateTimeTypeModel extends
    | TAttributeDateTimeTypeRest
    | TAttributeDateTimeTypeDraftRest
    | TAttributeDateTimeTypeGraphql
    | TAttributeDateTimeTypeDraftGraphql,
> = () => TBuilder<TAttributeDateTimeTypeModel>;
