import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20238 from './e-567-yz-2023-8';

describe(`with e567Yz20238 preset`, () => {
  it(`should return a e567Yz20238 preset`, () => {
    const e567Yz20238Preset = e567Yz20238().build<TStandalonePriceDraft>();
    expect(e567Yz20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-8",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20238 preset when built for graphql`, () => {
    const e567Yz20238PresetGraphql =
      e567Yz20238().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2023-8",
        "sku": "e567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
