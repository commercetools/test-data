import {
  DayOfMonthSchedule,
  DayOfMonthScheduleDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpDayOfMonthSchedule,
  TCtpDayOfMonthScheduleInput,
} from '@/graphql-types';

export type TDayOfMonthScheduleRest = DayOfMonthSchedule;
export type TDayOfMonthScheduleDraftRest = DayOfMonthScheduleDraft;
export type TDayOfMonthScheduleGraphql = TCtpDayOfMonthSchedule;
export type TDayOfMonthScheduleInput = TCtpDayOfMonthScheduleInput;

export type TCreateDayOfMonthScheduleBuilder<
  TModel extends
    | TDayOfMonthScheduleRest
    | TDayOfMonthScheduleGraphql
    | TDayOfMonthScheduleDraftRest
    | TDayOfMonthScheduleInput,
> = () => TBuilder<TModel>;
