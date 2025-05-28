import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue7 from './uu-789-uv-blue-7';

describe(`with uu789UvBlue7 preset`, () => {
  it(`should return a uu789UvBlue7 preset`, () => {
    const uu789UvBlue7Preset = uu789UvBlue7().build<TStandalonePriceDraft>();
    expect(uu789UvBlue7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-7",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvBlue7 preset when built for graphql`, () => {
    const uu789UvBlue7PresetGraphql =
      uu789UvBlue7().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-7",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
