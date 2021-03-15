import type { TInitiator, TInitiatorGraphql } from './types';

import Initiator from './builder';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = Initiator().build<TInitiator>();
    expect(built.isPlatformClient).toEqual(expect.any(Boolean));
    expect(built.externalUserId).toEqual(expect.any(String));
    expect(built.anonymousId).toEqual(expect.any(String));
    expect(built.clientId).toEqual(expect.any(String));
    expect(built.customerRef).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
    expect(built.userRef).toEqual(
      expect.objectContaining({
        id: expect.any(String),
      })
    );
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = Initiator().buildGraphql<TInitiatorGraphql>();
    expect(built).toEqual(
      expect.objectContaining({
        __typename: 'Initiator',
      })
    );
  });
});
