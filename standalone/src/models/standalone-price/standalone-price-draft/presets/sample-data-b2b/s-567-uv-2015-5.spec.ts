import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20155 from './s-567-uv-2015-5';

describe(`with s567Uv20155 preset`, () => {
  it(`should return a s567Uv20155 preset`, () => {
    const s567Uv20155Preset = s567Uv20155().build<TStandalonePriceDraft>();
    expect(s567Uv20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-5",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 855000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20155 preset when built for graphql`, () => {
    const s567Uv20155PresetGraphql =
      s567Uv20155().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-5",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 855000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
