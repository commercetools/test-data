import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20234 from './a-789-bc-2023-4';

describe(`with a789Bc20234 preset`, () => {
  it(`should return a a789Bc20234 preset`, () => {
    const a789Bc20234Preset = a789Bc20234().build<TStandalonePriceDraft>();
    expect(a789Bc20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-4",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1250000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a a789Bc20234 preset when built for graphql`, () => {
    const a789Bc20234PresetGraphql =
      a789Bc20234().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-4",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1250000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
