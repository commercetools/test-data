import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20196 from './r-123-ts-2019-6';

describe(`with r123Ts20196 preset`, () => {
  it(`should return a r123Ts20196 preset`, () => {
    const r123Ts20196Preset = r123Ts20196().build<TStandalonePriceDraft>();
    expect(r123Ts20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-6",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a r123Ts20196 preset when built for graphql`, () => {
    const r123Ts20196PresetGraphql =
      r123Ts20196().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-6",
        "recurrencePolicy": undefined,
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
