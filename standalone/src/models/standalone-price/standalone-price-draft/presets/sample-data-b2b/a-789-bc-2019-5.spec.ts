import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20195 from './a-789-bc-2019-5';

describe(`with a789Bc20195 preset`, () => {
  it(`should return a a789Bc20195 preset`, () => {
    const a789Bc20195Preset = a789Bc20195().build<TStandalonePriceDraft>();
    expect(a789Bc20195Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-5",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1125000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20195 preset when built for graphql`, () => {
    const a789Bc20195PresetGraphql =
      a789Bc20195().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20195PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-5",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1125000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
