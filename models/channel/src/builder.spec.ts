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
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: null,
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
});

describe('building as GraphQL', () => {
  it('should build all nested properties specific to graphql', () => {
    const built = Channel.random().buildGraphql<TChannelGraphql>();

    expect(built).toEqual(
      expect.objectContaining({
        __typename: 'Channel',
        nameAllLocales: expect.any(Array),
        descriptionAllLocales: expect.any(Array),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    );
  });
});
