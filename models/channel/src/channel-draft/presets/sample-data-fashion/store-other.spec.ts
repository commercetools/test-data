import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import storeOther from './store-other';

describe('store-other channel', () => {
  it('should match REST snapshot', () => {
    const channel = storeOther().build<TChannelDraft>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Store Other",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "store_other",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Store Other",
          "fr": undefined,
        },
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = storeOther().buildGraphql<TChannelDraftGraphql>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Store Other",
          },
        ],
        "geoLocation": undefined,
        "key": "store_other",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Store Other",
          },
        ],
        "roles": [
          "ProductDistribution",
        ],
      }
    `);
  });
});
