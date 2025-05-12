import type { TStandalonePriceDraft } from '../../../types';
import x456Yz20191 from './x-456-yz-2019-1';

describe(`with x456Yz20191 preset`, () => {
  it(`should return a x456Yz20191 preset`, () => {
    const x456Yz20191Preset = x456Yz20191().build<TStandalonePriceDraft>();
    expect(x456Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2019-1",
        "sku": "x456-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a x456Yz20191 preset when built for graphql`, () => {
    const x456Yz20191PresetGraphql =
      x456Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(x456Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "x456-yz-2019-1",
        "sku": "x456-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
