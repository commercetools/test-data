import {
  StandardSchedule,
  StandardScheduleDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpStandardSchedule,
  TCtpStandardScheduleInput,
} from '@/graphql-types';

export type TStandardScheduleRest = StandardSchedule;
export type TStandardScheduleDraftRest = StandardScheduleDraft;

export type TStandardScheduleGraphql = TCtpStandardSchedule;
export type TStandardScheduleInputGraphql = TCtpStandardScheduleInput;

export type TCreateStandardScheduleBuilder<
  TStandardScheduleModel extends
    | TStandardScheduleGraphql
    | TStandardScheduleInputGraphql
    | TStandardScheduleRest
    | TStandardScheduleDraftRest,
> = () => TBuilder<TStandardScheduleModel>;
