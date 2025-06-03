import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20236 from './k-567-yz-2023-6';

describe(`with k567Yz20236 preset`, () => {
  it(`should return a k567Yz20236 preset`, () => {
    const k567Yz20236Preset = k567Yz20236().build<TStandalonePriceDraft>();
    expect(k567Yz20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-6",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2023",
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

  it(`should return a k567Yz20236 preset when built for graphql`, () => {
    const k567Yz20236PresetGraphql =
      k567Yz20236().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-6",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2023",
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
