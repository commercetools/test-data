import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20155 from './kk-567-yz-2015-5';

describe(`with kk567Yz20155 preset`, () => {
  it(`should return a kk567Yz20155 preset`, () => {
    const kk567Yz20155Preset = kk567Yz20155().build<TStandalonePriceDraft>();
    expect(kk567Yz20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-5",
        "sku": "kk567-yz-2015",
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

  it(`should return a kk567Yz20155 preset when built for graphql`, () => {
    const kk567Yz20155PresetGraphql =
      kk567Yz20155().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-5",
        "sku": "kk567-yz-2015",
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
