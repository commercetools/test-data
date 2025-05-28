import type { TStandalonePriceDraft } from '../../../types';
import w789Uv20154 from './w-789-uv-2015-4';

describe(`with w789Uv20154 preset`, () => {
  it(`should return a w789Uv20154 preset`, () => {
    const w789Uv20154Preset = w789Uv20154().build<TStandalonePriceDraft>();
    expect(w789Uv20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-4",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a w789Uv20154 preset when built for graphql`, () => {
    const w789Uv20154PresetGraphql =
      w789Uv20154().buildGraphql<TStandalonePriceDraft>();
    expect(w789Uv20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "w789-uv-2015-4",
        "recurrencePolicy": undefined,
        "sku": "w789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
