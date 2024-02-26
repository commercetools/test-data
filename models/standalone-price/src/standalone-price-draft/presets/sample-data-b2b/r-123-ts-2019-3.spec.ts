import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20193 from './r-123-ts-2019-3';

describe(`with r123Ts20193 preset`, () => {
  it(`should return a r123Ts20193 preset`, () => {
    const r123Ts20193Preset = r123Ts20193().build<TStandalonePriceDraft>();
    expect(r123Ts20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-3",
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1358500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a r123Ts20193 preset when built for graphql`, () => {
    const r123Ts20193PresetGraphql =
      r123Ts20193().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-3",
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1358500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
