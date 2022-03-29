import type { TClientLogging, TClientLoggingGraphql } from './types';
import * as ClientLogging from '.';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = ClientLogging.random().build<TClientLogging>();

    expect(built.externalUserId).toEqual(expect.any(String));
    expect(built.anonymousId).toEqual(expect.any(String));
    expect(built.clientId).toEqual(expect.any(String));
    expect(built.customer).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        typeId: 'customer',
      })
    );
  });
});

describe('building as GraphQL', () => {
  it('should build all primitive properties', () => {
    const built = ClientLogging.random().buildGraphql<TClientLoggingGraphql>();

    expect(built.__typename).toEqual('Initiator');
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
