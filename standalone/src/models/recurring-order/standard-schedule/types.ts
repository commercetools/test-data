import type { TBuilder } from '@/core';
import { TCtpStandardSchedule } from '@/graphql-types';

export type TStandardScheduleGraphql = TCtpStandardSchedule;

export type TCreateStandardScheduleBuilder<
  TModel extends TStandardScheduleGraphql,
> = () => TBuilder<TModel>;
