import type { ClientLogging } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import type { TReference } from '../reference/types';

export type TClientLogging = ClientLogging;
export type TClientLoggingGraphql = Pick<
  ClientLogging,
  'anonymousId' | 'clientId' | 'externalUserId'
> & {
  __typename: 'Initiator';
  isPlatformClient: boolean;
  customerRef: TReference<'customer'>;
  userRef: TReference<'user'>;
};

export type TClientLoggingBuilder = TBuilder<TClientLogging>;
export type TCreateClientLoggingBuilder = () => TClientLoggingBuilder;
