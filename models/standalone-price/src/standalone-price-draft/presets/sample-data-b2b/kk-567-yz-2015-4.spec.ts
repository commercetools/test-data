import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20154 from './kk-567-yz-2015-4';

describe(`with kk567Yz20154 preset`, () => {
  it(`should return a kk567Yz20154 preset`, () => {
    const kk567Yz20154Preset = kk567Yz20154().build<TStandalonePriceDraft>();
    expect(kk567Yz20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-4",
        "sku": "kk567-yz-2015",
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

  it(`should return a kk567Yz20154 preset when built for graphql`, () => {
    const kk567Yz20154PresetGraphql =
      kk567Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-4",
        "sku": "kk567-yz-2015",
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
