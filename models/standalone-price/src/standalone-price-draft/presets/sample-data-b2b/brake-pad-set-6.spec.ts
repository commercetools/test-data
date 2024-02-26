import type { TStandalonePriceDraft } from '../../../types';
import brakePadSet6 from './brake-pad-set-6';

describe(`with brakePadSet6 preset`, () => {
  it(`should return a brakePadSet6 preset`, () => {
    const brakePadSet6Preset = brakePadSet6().build<TStandalonePriceDraft>();
    expect(brakePadSet6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-6",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a brakePadSet6 preset when built for graphql`, () => {
    const brakePadSet6PresetGraphql =
      brakePadSet6().buildGraphql<TStandalonePriceDraft>();
    expect(brakePadSet6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "brake-pad-set-6",
        "sku": "brake-pad-set",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
