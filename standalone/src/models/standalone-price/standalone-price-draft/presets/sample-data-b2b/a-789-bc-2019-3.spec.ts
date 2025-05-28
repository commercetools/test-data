import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20193 from './a-789-bc-2019-3';

describe(`with a789Bc20193 preset`, () => {
  it(`should return a a789Bc20193 preset`, () => {
    const a789Bc20193Preset = a789Bc20193().build<TStandalonePriceDraft>();
    expect(a789Bc20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-3",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1787500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a a789Bc20193 preset when built for graphql`, () => {
    const a789Bc20193PresetGraphql =
      a789Bc20193().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-3",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1787500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
