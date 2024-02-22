import type { TStandalonePriceDraft } from '../../../types';
import kk567Yz20233 from './kk-567-yz-2023-3';

describe(`with kk567Yz20233 preset`, () => {
  it(`should return a kk567Yz20233 preset`, () => {
    const kk567Yz20233Preset = kk567Yz20233().build<TStandalonePriceDraft>();
    expect(kk567Yz20233Preset).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2023-3",
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4620000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a kk567Yz20233 preset when built for graphql`, () => {
    const kk567Yz20233PresetGraphql =
      kk567Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(kk567Yz20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "kk567-yz-2023-3",
        "sku": "kk567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4620000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
