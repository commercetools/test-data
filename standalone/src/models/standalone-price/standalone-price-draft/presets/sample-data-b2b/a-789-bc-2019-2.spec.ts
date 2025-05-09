import type { TStandalonePriceDraft } from '../../../types';
import a789Bc20192 from './a-789-bc-2019-2';

describe(`with a789Bc20192 preset`, () => {
  it(`should return a a789Bc20192 preset`, () => {
    const a789Bc20192Preset = a789Bc20192().build<TStandalonePriceDraft>();
    expect(a789Bc20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-2",
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1375000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a a789Bc20192 preset when built for graphql`, () => {
    const a789Bc20192PresetGraphql =
      a789Bc20192().buildGraphql<TStandalonePriceDraft>();
    expect(a789Bc20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "a789-bc-2019-2",
        "sku": "a789-bc-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1375000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
