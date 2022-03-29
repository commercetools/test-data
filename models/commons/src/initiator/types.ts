import type { TBuilder } from '@commercetools-test-data/core';
import type { TReference } from '../reference/types';

export type TInitiatorBuilder<TypeId = string> = TBuilder<TInitiator<TypeId>>;
export type TCreateInitiatorBuilder<TypeId = string> =
  () => TInitiatorBuilder<TypeId>;

export type TInitiator<TypeId = string> = {
  isPlatformClient: boolean;
  externalUserId: string;
  anonymousId: string;
  clientId: string;
  customerRef: TReference<TypeId>;
  userRef: TReference<TypeId>;
};

export type TInitiatorGraphql<TypeId = string> = TInitiator<TypeId> & {
  __typename: 'Initiator';
};
