import { createSpecializedBuilder } from '@/core';
import type {
  TCreateDayOfMonthScheduleBuilder,
  TDayOfMonthScheduleDraftRest,
} from '../types';
import { restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateDayOfMonthScheduleBuilder<
  TDayOfMonthScheduleDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'DayOfMonthScheduleDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });
