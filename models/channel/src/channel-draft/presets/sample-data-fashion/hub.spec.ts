import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import hub from './hub';

describe('hub channel', () => {
  it('should match REST snapshot', () => {
    const channel = hub().build<TChannelDraft>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Hub",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "hub",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Hub",
          "fr": undefined,
        },
        "roles": [
          "ProductDistribution",
          "InventorySupply",
        ],
      }
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = hub().buildGraphql<TChannelDraftGraphql>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Hub",
          },
        ],
        "geoLocation": undefined,
        "key": "hub",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Hub",
          },
        ],
        "roles": [
          "ProductDistribution",
          "InventorySupply",
        ],
      }
    `);
  });
});
