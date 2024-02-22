import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20198 from './r-123-ts-2019-8';

describe(`with r123Ts20198 preset`, () => {
  it(`should return a r123Ts20198 preset`, () => {
    const r123Ts20198Preset = r123Ts20198().build<TStandalonePriceDraft>();
    expect(r123Ts20198Preset).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2019-8",
        "sku": "r123-ts-2019",
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

  it(`should return a r123Ts20198 preset when built for graphql`, () => {
    const r123Ts20198PresetGraphql =
      r123Ts20198().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20198PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "r123-ts-2019-8",
        "sku": "r123-ts-2019",
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
