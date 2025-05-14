import type { AttributeDateType } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpDateAttributeDefinitionType,
  TCtpSimpleAttributeTypeDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TAttributeDateTypeRest` or `TAttributeDateTypeGraphql` instead
 */
export type TAttributeDateType = AttributeDateType;
/**
 * @deprecated use `TAttributeDateTypeRest` or `TAttributeDateTypeGraphql` instead
 */
export type TAttributeDateTypeDraft = AttributeDateType;

export type TAttributeDateTypeRest = AttributeDateType;
export type TAttributeDateTypeDraftRest = AttributeDateType;

export type TAttributeDateTypeGraphql = TCtpDateAttributeDefinitionType;
export type TAttributeDateTypeDraftGraphql = TCtpSimpleAttributeTypeDraft;

export type TCreateAttributeDateTypeBuilder<
  TAttributeDateTypeModel extends
    | TAttributeDateTypeRest
    | TAttributeDateTypeDraftRest
    | TAttributeDateTypeGraphql
    | TAttributeDateTypeDraftGraphql,
> = () => TBuilder<TAttributeDateTypeModel>;
