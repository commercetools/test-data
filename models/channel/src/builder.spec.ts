import { TChannel, TChannelGraphql } from './types';
import { roles } from './constants';
import * as Channel from '.';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = Channel.random().build<TChannel>();

    expect(built).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        createdBy: expect.objectContaining({
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        address: expect.objectContaining({
          country: expect.any(String),
          // ...
        }),
        reviewRatingStatistics: null,
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    );
  });

  it('should build all nested properties', () => {
    const built = Channel.random().build<TChannel>();

    expect(built.name).toBeDefined();
    expect(built.description).toBeDefined();
    expect(built.address).toBeDefined();
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = Channel.random().buildGraphql<TChannelGraphql>();

    expect(built.__typename).toEqual('Channel');
  });

  it('should build all nested properties', () => {
    const built = Channel.random().buildGraphql<TChannelGraphql>();

    expect(built.nameAllLocales).toBeDefined();
    expect(built.descriptionAllLocales).toBeDefined();
    expect(built.address).toBeDefined();
  });
});
