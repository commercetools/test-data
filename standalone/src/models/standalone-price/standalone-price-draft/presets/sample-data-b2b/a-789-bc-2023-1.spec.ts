import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20231 from './a-789-bc-2023-1';

describe(`with a789Bc20231 preset`, () => {
  it(`should return a a789Bc20231 preset`, () => {
    const a789Bc20231Preset = a789Bc20231().build<TStandalonePriceDraft>();
    expect(a789Bc20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-1",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1650000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a a789Bc20231 preset when built for graphql`, () => {
    const a789Bc20231PresetGraphql =
      a789Bc20231().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2023-1",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1650000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
