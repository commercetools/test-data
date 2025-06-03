import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20152 from './x-456-yz-2015-2';

describe(`with x456Yz20152 preset`, () => {
  it(`should return a x456Yz20152 preset`, () => {
    const x456Yz20152Preset = x456Yz20152().build<TStandalonePriceDraft>();
    expect(x456Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1089000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a x456Yz20152 preset when built for graphql`, () => {
    const x456Yz20152PresetGraphql =
      x456Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-2",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1089000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
