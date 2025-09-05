import type { TBuilder } from '@/core';
import { TCtpRecurrencePolicyScheduleInput } from '@/graphql-types';

export type TRecurrencePolicyScheduleInputGraphql =
  TCtpRecurrencePolicyScheduleInput;

export type TCreateRecurrencePolicyScheduleInputBuilder<
  TModel extends TRecurrencePolicyScheduleInputGraphql,
> = () => TBuilder<TModel>;
