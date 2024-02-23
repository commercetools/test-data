import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue1 from './uu-789-uv-blue-1';

describe(`with uu789UvBlue1 preset`, () => {
  it(`should return a uu789UvBlue1 preset`, () => {
    const uu789UvBlue1Preset = uu789UvBlue1().build<TStandalonePriceDraft>();
    expect(uu789UvBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-1",
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a uu789UvBlue1 preset when built for graphql`, () => {
    const uu789UvBlue1PresetGraphql =
      uu789UvBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-1",
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
