import { TChannelDraft, TChannelDraftGraphql } from '../../../types';
import inventoryChannel from './inventory-channel';

describe('inventory channel', () => {
  it('should match REST snapshot', () => {
    const channel = inventoryChannel().build<TChannelDraft>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "en": undefined,
          "en-US": "Inventory Channel",
          "fr": undefined,
        },
        "geoLocation": undefined,
        "key": "inventory-channel",
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Inventory Channel",
          "fr": undefined,
        },
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });

  it('should match graphql snapshot', () => {
    const channel = inventoryChannel().buildGraphql<TChannelDraftGraphql>();

    expect(channel).toMatchInlineSnapshot(`
      {
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Inventory Channel",
          },
        ],
        "geoLocation": undefined,
        "key": "inventory-channel",
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Inventory Channel",
          },
        ],
        "roles": [
          "InventorySupply",
        ],
      }
    `);
  });
});
