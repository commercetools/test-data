import type { TStandalonePriceDraft } from '../../../types';
import pinAndBushingKit8 from './pin-and-bushing-kit-8';

describe(`with pinAndBushingKit8 preset`, () => {
  it(`should return a pinAndBushingKit8 preset`, () => {
    const pinAndBushingKit8Preset =
      pinAndBushingKit8().build<TStandalonePriceDraft>();
    expect(pinAndBushingKit8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-8",
        "recurrencePolicy": undefined,
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 32500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pinAndBushingKit8 preset when built for graphql`, () => {
    const pinAndBushingKit8PresetGraphql =
      pinAndBushingKit8().buildGraphql<TStandalonePriceDraft>();
    expect(pinAndBushingKit8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pin-and-bushing-kit-8",
        "recurrencePolicy": undefined,
        "sku": "pin-and-bushing-kit",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 32500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
