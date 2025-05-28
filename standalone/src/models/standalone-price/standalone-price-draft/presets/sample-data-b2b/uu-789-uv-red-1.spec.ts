import type { TStandalonePriceDraft } from '../../../types';
import uu789UvRed1 from './uu-789-uv-red-1';

describe(`with uu789UvRed1 preset`, () => {
  it(`should return a uu789UvRed1 preset`, () => {
    const uu789UvRed1Preset = uu789UvRed1().build<TStandalonePriceDraft>();
    expect(uu789UvRed1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-1",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a uu789UvRed1 preset when built for graphql`, () => {
    const uu789UvRed1PresetGraphql =
      uu789UvRed1().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvRed1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-red-1",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
