import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20193 from './kk-567-yz-2019-3';

describe(`with kk567Yz20193 preset`, () => {
  it(`should return a kk567Yz20193 preset`, () => {
    const kk567Yz20193Preset = kk567Yz20193().build<TStandalonePriceDraft>();
    expect(kk567Yz20193Preset).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2019-3",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4290000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20193 preset when built for graphql`, () => {
    const kk567Yz20193PresetGraphql =
      kk567Yz20193().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20193PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2019-3",
        "sku": "kk567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4290000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
