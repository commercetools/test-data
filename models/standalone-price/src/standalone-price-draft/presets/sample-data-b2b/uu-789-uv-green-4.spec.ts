import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen4 from './uu-789-uv-green-4';

describe(`with uu789UvGreen4 preset`, () => {
  it(`should return a uu789UvGreen4 preset`, () => {
    const uu789UvGreen4Preset = uu789UvGreen4().build<TStandalonePriceDraft>();
    expect(uu789UvGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-4",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen4 preset when built for graphql`, () => {
    const uu789UvGreen4PresetGraphql =
      uu789UvGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-4",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
