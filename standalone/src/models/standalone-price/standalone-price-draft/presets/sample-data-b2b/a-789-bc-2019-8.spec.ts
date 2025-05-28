import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20198 from './a-789-bc-2019-8';

describe(`with a789Bc20198 preset`, () => {
  it(`should return a a789Bc20198 preset`, () => {
    const a789Bc20198Preset = a789Bc20198().build<TStandalonePriceDraft>();
    expect(a789Bc20198Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-8",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1375000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a a789Bc20198 preset when built for graphql`, () => {
    const a789Bc20198PresetGraphql =
      a789Bc20198().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20198PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-8",
        "recurrencePolicy": undefined,
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1375000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
