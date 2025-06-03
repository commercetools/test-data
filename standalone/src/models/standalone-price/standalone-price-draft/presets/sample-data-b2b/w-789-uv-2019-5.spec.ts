import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20195 from './w-789-uv-2019-5';

describe(`with w789Uv20195 preset`, () => {
  it(`should return a w789Uv20195 preset`, () => {
    const w789Uv20195Preset = w789Uv20195().build<TStandalonePriceDraft>();
    expect(w789Uv20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-5",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2700000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a w789Uv20195 preset when built for graphql`, () => {
    const w789Uv20195PresetGraphql =
      w789Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2019-5",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2700000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
