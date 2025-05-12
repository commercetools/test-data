import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20194 from './a-789-bc-2019-4';

describe(`with a789Bc20194 preset`, () => {
  it(`should return a a789Bc20194 preset`, () => {
    const a789Bc20194Preset = a789Bc20194().build<TStandalonePriceDraft>();
    expect(a789Bc20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-4",
        "sku": "a789-bc-2019",
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

  it(`should return a a789Bc20194 preset when built for graphql`, () => {
    const a789Bc20194PresetGraphql =
      a789Bc20194().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-4",
        "sku": "a789-bc-2019",
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
