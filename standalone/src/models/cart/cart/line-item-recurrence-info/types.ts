import {
  LineItemRecurrenceInfo,
  LineItemRecurrenceInfoDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpLineItemRecurrenceInfo,
  TCtpLineItemRecurrenceInfoDraft,
} from '@/graphql-types';

export type TLineItemRecurrenceInfoRest = LineItemRecurrenceInfo;
export type TLineItemRecurrenceInfoDraftRest = LineItemRecurrenceInfoDraft;
export type TLineItemRecurrenceInfoGraphql = TCtpLineItemRecurrenceInfo;
export type TLineItemRecurrenceInfoDraftGraphql =
  TCtpLineItemRecurrenceInfoDraft;

export type TCreateLineItemRecurrenceInfoBuilder<
  TModel extends
    | TLineItemRecurrenceInfoRest
    | TLineItemRecurrenceInfoGraphql
    | TLineItemRecurrenceInfoDraftRest
    | TLineItemRecurrenceInfoDraftGraphql,
> = () => TBuilder<TModel>;
