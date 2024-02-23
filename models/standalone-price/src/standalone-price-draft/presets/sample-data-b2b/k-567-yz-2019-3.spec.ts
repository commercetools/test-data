import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20193 from './k-567-yz-2019-3';

describe(`with k567Yz20193 preset`, () => {
  it(`should return a k567Yz20193 preset`, () => {
    const k567Yz20193Preset = k567Yz20193().build<TStandalonePriceDraft>();
    expect(k567Yz20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-3",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1859000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20193 preset when built for graphql`, () => {
    const k567Yz20193PresetGraphql =
      k567Yz20193().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2019-3",
        "sku": "k567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1859000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
