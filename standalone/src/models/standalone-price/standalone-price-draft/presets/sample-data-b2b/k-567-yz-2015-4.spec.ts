import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20154 from './k-567-yz-2015-4';

describe(`with k567Yz20154 preset`, () => {
  it(`should return a k567Yz20154 preset`, () => {
    const k567Yz20154Preset = k567Yz20154().build<TStandalonePriceDraft>();
    expect(k567Yz20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-4",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a k567Yz20154 preset when built for graphql`, () => {
    const k567Yz20154PresetGraphql =
      k567Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-4",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
