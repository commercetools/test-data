import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit6 from './pin-and-bushing-kit-6';

describe(`with pinAndBushingKit6 preset`, () => {
  it(`should return a pinAndBushingKit6 preset`, () => {
    const pinAndBushingKit6Preset =
      pinAndBushingKit6().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-6",
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

  it(`should return a pinAndBushingKit6 preset when built for graphql`, () => {
    const pinAndBushingKit6PresetGraphql =
      pinAndBushingKit6().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-6",
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
