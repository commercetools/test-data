import type { TBuilder } from '@commercetools-test-data/core';
import type { TReference } from '../reference/types';

export type TInitiatorBuilder = TBuilder<TInitiator>;
export type TCreateInitiatorBuilder = () => TInitiatorBuilder;

export type TInitiator = {
  isPlatformClient: boolean;
  externalUserId: string;
  anonymousId: string;
  clientId: string;
  customerRef: TReference;
  userRef: TReference;
};

export type TInitiatorGraphql = TInitiator & {
  __typename: 'Initiator';
};
