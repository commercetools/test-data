import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20235 from './k-567-yz-2023-5';

describe(`with k567Yz20235 preset`, () => {
  it(`should return a k567Yz20235 preset`, () => {
    const k567Yz20235Preset = k567Yz20235().build<TStandalonePriceDraft>();
    expect(k567Yz20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-5",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1170000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a k567Yz20235 preset when built for graphql`, () => {
    const k567Yz20235PresetGraphql =
      k567Yz20235().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-5",
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1170000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
