import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20231 from './e-567-yz-2023-1';

describe(`with e567Yz20231 preset`, () => {
  it(`should return a e567Yz20231 preset`, () => {
    const e567Yz20231Preset = e567Yz20231().build<TStandalonePriceDraft>();
    expect(e567Yz20231Preset).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2023-1",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a e567Yz20231 preset when built for graphql`, () => {
    const e567Yz20231PresetGraphql =
      e567Yz20231().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20231PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2023-1",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
