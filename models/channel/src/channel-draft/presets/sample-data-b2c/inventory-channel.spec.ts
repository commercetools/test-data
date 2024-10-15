import type { TChannelDraftGraphql, TChannelDraftRest } from '../../../types';
import * as presets from './inventory-channel';

describe(`with inventoryChannel preset`, () => {
  it(`should return a inventoryChannel preset when built for rest`, () => {
    const inventoryChannelPreset = presets.restPreset().build();
    expect(inventoryChannelPreset).toMatchInlineSnapshot(`
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

  it(`should return a inventoryChannel preset when built for graphql`, () => {
    const inventoryChannelPreset = presets.graphqlPreset().build();
    expect(inventoryChannelPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Inventory Channel",
          },
        ],
        "geoLocation": undefined,
        "key": "inventory-channel",
        "name": [
          {
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

  it(`should return a inventoryChannel preset when built for legacy rest`, () => {
    const inventoryChannelPreset = presets
      .compatPreset()
      .buildRest<TChannelDraftRest>();
    expect(inventoryChannelPreset).toMatchInlineSnapshot(`
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

  it(`should return a inventoryChannel preset when built for legacy graphql`, () => {
    const inventoryChannelPreset = presets
      .compatPreset()
      .buildGraphql<TChannelDraftGraphql>();
    expect(inventoryChannelPreset).toMatchInlineSnapshot(`
      {
        "__typename": "ChannelDraft",
        "address": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "Inventory Channel",
          },
        ],
        "geoLocation": undefined,
        "key": "inventory-channel",
        "name": [
          {
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
