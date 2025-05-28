import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20154 from './x-456-yz-2015-4';

describe(`with x456Yz20154 preset`, () => {
  it(`should return a x456Yz20154 preset`, () => {
    const x456Yz20154Preset = x456Yz20154().build<TStandalonePriceDraft>();
    expect(x456Yz20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-4",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x456Yz20154 preset when built for graphql`, () => {
    const x456Yz20154PresetGraphql =
      x456Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2015-4",
        "recurrencePolicy": undefined,
        "sku": "x456-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
