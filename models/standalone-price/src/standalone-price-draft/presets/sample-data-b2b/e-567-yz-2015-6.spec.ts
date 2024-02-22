import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20156 from './e-567-yz-2015-6';

describe(`with e567Yz20156 preset`, () => {
  it(`should return a e567Yz20156 preset`, () => {
    const e567Yz20156Preset = e567Yz20156().build<TStandalonePriceDraft>();
    expect(e567Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-6",
        "sku": "e567-yz-2015",
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

  it(`should return a e567Yz20156 preset when built for graphql`, () => {
    const e567Yz20156PresetGraphql =
      e567Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-6",
        "sku": "e567-yz-2015",
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
