import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20232 from './k-567-yz-2023-2';

describe(`with k567Yz20232 preset`, () => {
  it(`should return a k567Yz20232 preset`, () => {
    const k567Yz20232Preset = k567Yz20232().build<TStandalonePriceDraft>();
    expect(k567Yz20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-2",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1573000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a k567Yz20232 preset when built for graphql`, () => {
    const k567Yz20232PresetGraphql =
      k567Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-2",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1573000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
