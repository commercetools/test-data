import { CustomFieldBooleanType } from '@commercetools-test-data/type';
import {
  getDefaultGraphqlLocalesExpect,
  getDefaultRestLocalesExpect,
} from '@commercetools-test-data/utils/src/test-utils';
import { roles } from '../constants';
import { TChannelDraftGraphql, TChannelDraftRest } from '../types';
import { ChannelDraft, ChannelDraftGraphql, ChannelDraftRest } from './index';

describe('ChannelDraft builder', () => {
  it('should build a valid REST object', () => {
    const channelDraft = ChannelDraftRest.random()
      .custom(CustomFieldBooleanType.random())
      .build();

    expect(channelDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        roles: [roles.Primary],
        name: getDefaultRestLocalesExpect(),
        description: getDefaultRestLocalesExpect(),
        address: expect.objectContaining({
          country: expect.any(String),
          state: expect.any(String),
          city: expect.any(String),
        }),
        custom: expect.objectContaining({
          name: 'Boolean',
        }),
        geoLocation: expect.objectContaining({
          type: 'Point',
          coordinates: [expect.any(Number), expect.any(Number)],
        }),
      })
    );
  });

  it('should build a valid Graphql object', () => {
    const channelDraft = ChannelDraftGraphql.random()
      .custom(CustomFieldBooleanType.random())
      .build();

    expect(channelDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        roles: [roles.Primary],
        name: getDefaultGraphqlLocalesExpect(),
        description: getDefaultGraphqlLocalesExpect(),
        address: expect.objectContaining({
          city: expect.any(String),
          __typename: 'Address',
        }),
        custom: expect.objectContaining({
          name: 'Boolean',
          __typename: 'BooleanType',
        }),
        geoLocation: expect.objectContaining({
          type: 'Point',
          coordinates: [expect.any(Number), expect.any(Number)],
          __typename: 'Geometry',
        }),
      })
    );
  });
});

describe('ChannelDraft compatibility builder', () => {
  it('should build a valid REST object', () => {
    const channelDraft = ChannelDraft.random()
      .custom(CustomFieldBooleanType.random())
      .buildRest<TChannelDraftRest>();

    expect(channelDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        roles: [roles.Primary],
        name: getDefaultRestLocalesExpect(),
        description: getDefaultRestLocalesExpect(),
        address: expect.objectContaining({
          country: expect.any(String),
          state: expect.any(String),
          city: expect.any(String),
        }),
        custom: expect.objectContaining({
          name: 'Boolean',
        }),
        geoLocation: expect.objectContaining({
          type: 'Point',
          coordinates: [expect.any(Number), expect.any(Number)],
        }),
      })
    );
  });

  it('should build a valid Graphql object', () => {
    const channelDraft = ChannelDraft.random()
      .custom(CustomFieldBooleanType.random())
      .buildGraphql<TChannelDraftGraphql>();

    expect(channelDraft).toEqual(
      expect.objectContaining({
        key: expect.any(String),
        roles: [roles.Primary],
        name: getDefaultGraphqlLocalesExpect(),
        description: getDefaultGraphqlLocalesExpect(),
        address: expect.objectContaining({
          city: expect.any(String),
          __typename: 'Address',
        }),
        custom: expect.objectContaining({
          name: 'Boolean',
          __typename: 'BooleanType',
        }),
        geoLocation: expect.objectContaining({
          type: 'Point',
          coordinates: [expect.any(Number), expect.any(Number)],
          __typename: 'Geometry',
        }),
      })
    );
  });
});
