import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20196 from './e-567-yz-2019-6';

describe(`with e567Yz20196 preset`, () => {
  it(`should return a e567Yz20196 preset`, () => {
    const e567Yz20196Preset = e567Yz20196().build<TStandalonePriceDraft>();
    expect(e567Yz20196Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-6",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a e567Yz20196 preset when built for graphql`, () => {
    const e567Yz20196PresetGraphql =
      e567Yz20196().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20196PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2019-6",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
