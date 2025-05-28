import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20155 from './k-567-yz-2015-5';

describe(`with k567Yz20155 preset`, () => {
  it(`should return a k567Yz20155 preset`, () => {
    const k567Yz20155Preset = k567Yz20155().build<TStandalonePriceDraft>();
    expect(k567Yz20155Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-5",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2015",
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

  it(`should return a k567Yz20155 preset when built for graphql`, () => {
    const k567Yz20155PresetGraphql =
      k567Yz20155().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20155PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-5",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2015",
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
