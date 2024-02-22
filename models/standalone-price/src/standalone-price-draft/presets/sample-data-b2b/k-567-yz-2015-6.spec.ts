import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20156 from './k-567-yz-2015-6';

describe(`with k567Yz20156 preset`, () => {
  it(`should return a k567Yz20156 preset`, () => {
    const k567Yz20156Preset = k567Yz20156().build<TStandalonePriceDraft>();
    expect(k567Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-6",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1040000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a k567Yz20156 preset when built for graphql`, () => {
    const k567Yz20156PresetGraphql =
      k567Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-6",
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1040000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
