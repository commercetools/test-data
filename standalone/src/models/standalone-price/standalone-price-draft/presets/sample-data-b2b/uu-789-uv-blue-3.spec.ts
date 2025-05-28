import type { TStandalonePriceDraft } from '../../../types';
import uu789UvBlue3 from './uu-789-uv-blue-3';

describe(`with uu789UvBlue3 preset`, () => {
  it(`should return a uu789UvBlue3 preset`, () => {
    const uu789UvBlue3Preset = uu789UvBlue3().build<TStandalonePriceDraft>();
    expect(uu789UvBlue3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-3",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a uu789UvBlue3 preset when built for graphql`, () => {
    const uu789UvBlue3PresetGraphql =
      uu789UvBlue3().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvBlue3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-blue-3",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
