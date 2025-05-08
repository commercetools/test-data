import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20195 from './s-567-uv-2019-5';

describe(`with s567Uv20195 preset`, () => {
  it(`should return a s567Uv20195 preset`, () => {
    const s567Uv20195Preset = s567Uv20195().build<TStandalonePriceDraft>();
    expect(s567Uv20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-5",
        "sku": "s567-uv-2019",
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

  it(`should return a s567Uv20195 preset when built for graphql`, () => {
    const s567Uv20195PresetGraphql =
      s567Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-5",
        "sku": "s567-uv-2019",
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
