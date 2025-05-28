import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvRed3 from './aaa-789-uv-red-3';

describe(`with aaa789UvRed3 preset`, () => {
  it(`should return a aaa789UvRed3 preset`, () => {
    const aaa789UvRed3Preset = aaa789UvRed3().build<TStandalonePriceDraft>();
    expect(aaa789UvRed3Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-3",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 5940000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a aaa789UvRed3 preset when built for graphql`, () => {
    const aaa789UvRed3PresetGraphql =
      aaa789UvRed3().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvRed3PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-red-3",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 5940000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
