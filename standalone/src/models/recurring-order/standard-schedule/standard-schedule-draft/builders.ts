import { createSpecializedBuilder } from '@/core';
import type {
  TCreateStandardScheduleBuilder,
  TStandardScheduleDraftRest,
} from '../types';
import { restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateStandardScheduleBuilder<
  TStandardScheduleDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'StandardScheduleDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });
