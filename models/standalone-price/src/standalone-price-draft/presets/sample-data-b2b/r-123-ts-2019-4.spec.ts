import type { TStandalonePriceDraft } from '../../../types';
import r123Ts20194 from './r-123-ts-2019-4';

describe(`with r123Ts20194 preset`, () => {
  it(`should return a r123Ts20194 preset`, () => {
    const r123Ts20194Preset = r123Ts20194().build<TStandalonePriceDraft>();
    expect(r123Ts20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-4",
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a r123Ts20194 preset when built for graphql`, () => {
    const r123Ts20194PresetGraphql =
      r123Ts20194().buildGraphql<TStandalonePriceDraft>();
    expect(r123Ts20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "r123-ts-2019-4",
        "sku": "r123-ts-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
