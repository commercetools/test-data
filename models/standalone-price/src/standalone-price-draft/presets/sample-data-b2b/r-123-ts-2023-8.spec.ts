import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20238 from './r-123-ts-2023-8';

describe(`with r123Ts20238 preset`, () => {
  it(`should return a r123Ts20238 preset`, () => {
    const r123Ts20238Preset = r123Ts20238().build<TStandalonePriceDraft>();
    expect(r123Ts20238Preset).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2023-8",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045001,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20238 preset when built for graphql`, () => {
    const r123Ts20238PresetGraphql =
      r123Ts20238().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20238PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2023-8",
        "sku": "r123-ts-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045001,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
