import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20152 from './k-567-yz-2015-2';

describe(`with k567Yz20152 preset`, () => {
  it(`should return a k567Yz20152 preset`, () => {
    const k567Yz20152Preset = k567Yz20152().build<TStandalonePriceDraft>();
    expect(k567Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-2",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1287000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a k567Yz20152 preset when built for graphql`, () => {
    const k567Yz20152PresetGraphql =
      k567Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-2",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1287000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
