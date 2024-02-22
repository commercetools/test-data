import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20233 from './k-567-yz-2023-3';

describe(`with k567Yz20233 preset`, () => {
  it(`should return a k567Yz20233 preset`, () => {
    const k567Yz20233Preset = k567Yz20233().build<TStandalonePriceDraft>();
    expect(k567Yz20233Preset).toMatchInlineSnapshot(`
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
        "key": "k567-yz-2023-3",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2002000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20233 preset when built for graphql`, () => {
    const k567Yz20233PresetGraphql =
      k567Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "k567-yz-2023-3",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2002000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
