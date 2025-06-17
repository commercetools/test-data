import { TCtpRecurringOrderState } from '@/graphql-types';

export const recurringOrderState = {
  Active: 'Active',
  Paused: 'Paused',
  Expired: 'Expired',
  Canceled: 'Canceled',
} as const;

export const recurringOrderStateGraphql = TCtpRecurringOrderState;
