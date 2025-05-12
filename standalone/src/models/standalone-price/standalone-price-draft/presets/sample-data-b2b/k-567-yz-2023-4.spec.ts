import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20234 from './k-567-yz-2023-4';

describe(`with k567Yz20234 preset`, () => {
  it(`should return a k567Yz20234 preset`, () => {
    const k567Yz20234Preset = k567Yz20234().build<TStandalonePriceDraft>();
    expect(k567Yz20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-4",
        "sku": "k567-yz-2023",
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

  it(`should return a k567Yz20234 preset when built for graphql`, () => {
    const k567Yz20234PresetGraphql =
      k567Yz20234().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-4",
        "sku": "k567-yz-2023",
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
