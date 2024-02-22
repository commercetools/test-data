import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20158 from './kk-567-yz-2015-8';

describe(`with kk567Yz20158 preset`, () => {
  it(`should return a kk567Yz20158 preset`, () => {
    const kk567Yz20158Preset = kk567Yz20158().build<TStandalonePriceDraft>();
    expect(kk567Yz20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-8",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20158 preset when built for graphql`, () => {
    const kk567Yz20158PresetGraphql =
      kk567Yz20158().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "kk567-yz-2015-8",
        "sku": "kk567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
