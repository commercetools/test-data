import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit4 from './pin-and-bushing-kit-4';

describe(`with pinAndBushingKit4 preset`, () => {
  it(`should return a pinAndBushingKit4 preset`, () => {
    const pinAndBushingKit4Preset =
      pinAndBushingKit4().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-4",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 32500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pinAndBushingKit4 preset when built for graphql`, () => {
    const pinAndBushingKit4PresetGraphql =
      pinAndBushingKit4().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-4",
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 32500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
