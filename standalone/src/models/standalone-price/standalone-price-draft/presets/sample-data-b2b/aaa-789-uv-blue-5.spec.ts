import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue5 from './aaa-789-uv-blue-5';

describe(`with aaa789UvBlue5 preset`, () => {
  it(`should return a aaa789UvBlue5 preset`, () => {
    const aaa789UvBlue5Preset = aaa789UvBlue5().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-5",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4050000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvBlue5 preset when built for graphql`, () => {
    const aaa789UvBlue5PresetGraphql =
      aaa789UvBlue5().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-5",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4050000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
