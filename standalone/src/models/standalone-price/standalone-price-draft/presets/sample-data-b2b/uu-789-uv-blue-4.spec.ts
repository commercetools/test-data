import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue4 from './uu-789-uv-blue-4';

describe(`with uu789UvBlue4 preset`, () => {
  it(`should return a uu789UvBlue4 preset`, () => {
    const uu789UvBlue4Preset = uu789UvBlue4().build<TStandalonePriceDraft>();
    expect(uu789UvBlue4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-4",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-blue",
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

  it(`should return a uu789UvBlue4 preset when built for graphql`, () => {
    const uu789UvBlue4PresetGraphql =
      uu789UvBlue4().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-4",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-blue",
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
