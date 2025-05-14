import { AttributeLocalizedEnumValue } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TCtpLocalizedEnumValue,
  TCtpLocalizedEnumValueDraft,
} from '../../../graphql-types';

/**
 * @deprecated use `TAttributeLocalizedEnumValueRest` or `TAttributeLocalizedEnumValueGraphql` instead
 */
export type TAttributeLocalizedEnumValue = AttributeLocalizedEnumValue;
/**
 * @deprecated use `TAttributeLocalizedEnumValueDraftRest` or `TAttributeLocalizedEnumValueDraftGraphql` instead
 */
export type TAttributeLocalizedEnumValueDraft = AttributeLocalizedEnumValue;

// REST types
export type TAttributeLocalizedEnumValueRest = AttributeLocalizedEnumValue;
export type TAttributeLocalizedEnumValueDraftRest = AttributeLocalizedEnumValue;

// GraphQL types
export type TAttributeLocalizedEnumValueGraphql = TCtpLocalizedEnumValue;
export type TAttributeLocalizedEnumValueDraftGraphql =
  TCtpLocalizedEnumValueDraft;

// Builders type
export type TCreateAttributeLocalizedEnumValueBuilder<
  TAttributeLocalizedEnumValueModel extends
    | TAttributeLocalizedEnumValueRest
    | TAttributeLocalizedEnumValueDraftRest
    | TAttributeLocalizedEnumValueGraphql
    | TAttributeLocalizedEnumValueDraftGraphql,
> = () => TBuilder<TAttributeLocalizedEnumValueModel>;
