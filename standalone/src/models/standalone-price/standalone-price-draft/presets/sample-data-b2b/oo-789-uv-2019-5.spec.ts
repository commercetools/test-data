import type { TStandalonePriceDraft } from '../../../types';
import oo789Uv20195 from './oo-789-uv-2019-5';

describe(`with oo789Uv20195 preset`, () => {
  it(`should return a oo789Uv20195 preset`, () => {
    const oo789Uv20195Preset = oo789Uv20195().build<TStandalonePriceDraft>();
    expect(oo789Uv20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-5",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a oo789Uv20195 preset when built for graphql`, () => {
    const oo789Uv20195PresetGraphql =
      oo789Uv20195().buildGraphql<TStandalonePriceDraft>();
    expect(oo789Uv20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "oo789-uv-2019-5",
        "recurrencePolicy": undefined,
        "sku": "oo789-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
