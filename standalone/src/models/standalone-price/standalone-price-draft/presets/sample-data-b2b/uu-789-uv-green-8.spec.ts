import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen8 from './uu-789-uv-green-8';

describe(`with uu789UvGreen8 preset`, () => {
  it(`should return a uu789UvGreen8 preset`, () => {
    const uu789UvGreen8Preset = uu789UvGreen8().build<TStandalonePriceDraft>();
    expect(uu789UvGreen8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-8",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen8 preset when built for graphql`, () => {
    const uu789UvGreen8PresetGraphql =
      uu789UvGreen8().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-8",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
