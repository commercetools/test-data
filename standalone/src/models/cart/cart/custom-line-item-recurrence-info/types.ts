import {
  CustomLineItemRecurrenceInfo,
  CustomLineItemRecurrenceInfoDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpCustomLineItemRecurrenceInfo,
  TCtpCustomLineItemRecurrenceInfoDraft,
} from '@/graphql-types';

export type TCustomLineItemRecurrenceInfoRest = CustomLineItemRecurrenceInfo;
export type TCustomLineItemRecurrenceInfoDraftRest =
  CustomLineItemRecurrenceInfoDraft;
export type TCustomLineItemRecurrenceInfoGraphql =
  TCtpCustomLineItemRecurrenceInfo;
export type TCustomLineItemRecurrenceInfoDraftGraphql =
  TCtpCustomLineItemRecurrenceInfoDraft;

export type TCreateCustomLineItemRecurrenceInfoBuilder<
  TModel extends
    | TCustomLineItemRecurrenceInfoRest
    | TCustomLineItemRecurrenceInfoGraphql
    | TCustomLineItemRecurrenceInfoDraftRest
    | TCustomLineItemRecurrenceInfoDraftGraphql,
> = () => TBuilder<TModel>;
