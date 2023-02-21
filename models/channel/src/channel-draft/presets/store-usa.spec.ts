import { TChannelDraft, TChannelDraftGraphql } from '../../types';
import storeUsa from './store-usa';

describe('store-usa channel', () => {
  it('should match REST snapshot', () => {
    const channel = storeUsa().build<TChannelDraft>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": "USA Store",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "store_usa",
        "name": {
          "de": undefined,
          "en": "USA Store",
          "fr": undefined,
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = storeUsa().buildGraphql<TChannelDraftGraphql>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en",
            "value": "USA Store",
          },
        ],
        "geoLocation": undefined,
        "key": "store_usa",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en",
            "value": "USA Store",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
