import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen5 from './uu-789-uv-green-5';

describe(`with uu789UvGreen5 preset`, () => {
  it(`should return a uu789UvGreen5 preset`, () => {
    const uu789UvGreen5Preset = uu789UvGreen5().build<TStandalonePriceDraft>();
    expect(uu789UvGreen5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-5",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen5 preset when built for graphql`, () => {
    const uu789UvGreen5PresetGraphql =
      uu789UvGreen5().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-5",
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
