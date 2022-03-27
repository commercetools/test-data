import type { TInitiator, TInitiatorGraphql } from './types';
import * as Initiator from '.';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = Initiator.random().build<TInitiator>();

    expect(built.isPlatformClient).toEqual(expect.any(Boolean));
    expect(built.externalUserId).toEqual(expect.any(String));
    expect(built.anonymousId).toEqual(expect.any(String));
    expect(built.clientId).toEqual(expect.any(String));
    expect(built.customerRef).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        typeId: 'customer',
      })
    );
    expect(built.userRef).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        typeId: 'user',
      })
    );
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = Initiator.random().buildGraphql<TInitiatorGraphql>();

    expect(built).toEqual(
      expect.objectContaining({
        __typename: 'Initiator',
      })
    );
  });
});
