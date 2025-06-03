import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20231 from './k-567-yz-2023-1';

describe(`with k567Yz20231 preset`, () => {
  it(`should return a k567Yz20231 preset`, () => {
    const k567Yz20231Preset = k567Yz20231().build<TStandalonePriceDraft>();
    expect(k567Yz20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1716000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a k567Yz20231 preset when built for graphql`, () => {
    const k567Yz20231PresetGraphql =
      k567Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2023-1",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1716000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
