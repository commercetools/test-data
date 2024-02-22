import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20151 from './kk-567-yz-2015-1';

describe(`with kk567Yz20151 preset`, () => {
  it(`should return a kk567Yz20151 preset`, () => {
    const kk567Yz20151Preset = kk567Yz20151().build<TStandalonePriceDraft>();
    expect(kk567Yz20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-1",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a kk567Yz20151 preset when built for graphql`, () => {
    const kk567Yz20151PresetGraphql =
      kk567Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-1",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
