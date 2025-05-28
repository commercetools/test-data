import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit2 from './pin-and-bushing-kit-2';

describe(`with pinAndBushingKit2 preset`, () => {
  it(`should return a pinAndBushingKit2 preset`, () => {
    const pinAndBushingKit2Preset =
      pinAndBushingKit2().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-2",
        "recurrencePolicy": undefined,
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 32500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pinAndBushingKit2 preset when built for graphql`, () => {
    const pinAndBushingKit2PresetGraphql =
      pinAndBushingKit2().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-2",
        "recurrencePolicy": undefined,
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 32500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
