import type { TStandalonePriceDraft } from '../../../types';
import uu789UvGreen2 from './uu-789-uv-green-2';

describe(`with uu789UvGreen2 preset`, () => {
  it(`should return a uu789UvGreen2 preset`, () => {
    const uu789UvGreen2Preset = uu789UvGreen2().build<TStandalonePriceDraft>();
    expect(uu789UvGreen2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-2",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a uu789UvGreen2 preset when built for graphql`, () => {
    const uu789UvGreen2PresetGraphql =
      uu789UvGreen2().buildGraphql<TStandalonePriceDraft>();
    expect(uu789UvGreen2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "uu789-uv-green-2",
        "recurrencePolicy": undefined,
        "sku": "uu789-uv-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
