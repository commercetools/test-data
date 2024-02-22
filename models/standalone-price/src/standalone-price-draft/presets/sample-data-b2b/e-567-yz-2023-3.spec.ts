import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20233 from './e-567-yz-2023-3';

describe(`with e567Yz20233 preset`, () => {
  it(`should return a e567Yz20233 preset`, () => {
    const e567Yz20233Preset = e567Yz20233().build<TStandalonePriceDraft>();
    expect(e567Yz20233Preset).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2023-3",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1694000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20233 preset when built for graphql`, () => {
    const e567Yz20233PresetGraphql =
      e567Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20233PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2023-3",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1694000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
