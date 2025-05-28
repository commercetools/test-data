import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20195 from './cc-789-uv-2019-5';

describe(`with cc789Uv20195 preset`, () => {
  it(`should return a cc789Uv20195 preset`, () => {
    const cc789Uv20195Preset = cc789Uv20195().build<TStandalonePriceDraft>();
    expect(cc789Uv20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-5",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1980000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20195 preset when built for graphql`, () => {
    const cc789Uv20195PresetGraphql =
      cc789Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2019-5",
        "recurrencePolicy": undefined,
        "sku": "cc789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1980000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
