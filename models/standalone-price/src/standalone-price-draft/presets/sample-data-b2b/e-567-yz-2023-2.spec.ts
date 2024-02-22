import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20232 from './e-567-yz-2023-2';

describe(`with e567Yz20232 preset`, () => {
  it(`should return a e567Yz20232 preset`, () => {
    const e567Yz20232Preset = e567Yz20232().build<TStandalonePriceDraft>();
    expect(e567Yz20232Preset).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2023-2",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1331000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a e567Yz20232 preset when built for graphql`, () => {
    const e567Yz20232PresetGraphql =
      e567Yz20232().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20232PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2023-2",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1331000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
