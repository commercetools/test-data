import { TChannelDraft, TChannelDraftGraphql } from '../types';
import { roles } from '../constants';
import * as ChannelDraft from './';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = ChannelDraft.random().build<TChannelDraft>();

    expect(built).toEqual(
      expect.objectContaining({
        key: expect.any(String),
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
        custom: null,
        geoLocation: null,
        roles: [roles.Primary],
      })
    );
  });

  it('should build all nested properties', () => {
    const built = ChannelDraft.random().build<TChannelDraft>();

    expect(built.name).toBeDefined();
    expect(built.description).toBeDefined();
    expect(built.address).toBeDefined();
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = ChannelDraft.random().buildGraphql<TChannelDraftGraphql>();

    expect(built.__typename).toEqual('ChannelDraft');
  });

  it('should build all nested properties', () => {
    const built = ChannelDraft.random().buildGraphql<TChannelDraftGraphql>();

    expect(built.name).toBeDefined();
    expect(built.description).toBeDefined();
    expect(built.address).toBeDefined();
  });
});
