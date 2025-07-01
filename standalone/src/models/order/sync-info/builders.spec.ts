import { ChannelGraphql } from '@/models/channel';
import { SyncInfoRest, SyncInfoGraphql } from './index';

describe('SyncInfo Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = SyncInfoRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        channel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        externalId: null,
        syncedAt: expect.any(String),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = SyncInfoGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        channel: null,
        channelRef: expect.objectContaining({
          typeId: 'channel',
          __typename: 'Reference',
        }),
        externalId: null,
        syncedAt: expect.any(String),
        __typename: 'SyncInfo',
      })
    );
  });

  it('should correctly compute the channelRef ID for the GraphQL representation', () => {
    const channelId = 'channel-id-1';
    const graphqlModel = SyncInfoGraphql.random()
      .channel(ChannelGraphql.random().id(channelId))
      .build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        channel: expect.objectContaining({
          id: channelId,
          __typename: 'Channel',
        }),
        channelRef: expect.objectContaining({
          id: channelId,
          typeId: 'channel',
          __typename: 'Reference',
        }),
      })
    );
  });
});
