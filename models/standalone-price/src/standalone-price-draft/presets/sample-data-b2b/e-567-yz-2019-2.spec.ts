import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20192 from './e-567-yz-2019-2';

describe(`with e567Yz20192 preset`, () => {
  it(`should return a e567Yz20192 preset`, () => {
    const e567Yz20192Preset = e567Yz20192().build<TStandalonePriceDraft>();
    expect(e567Yz20192Preset).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2019-2",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a e567Yz20192 preset when built for graphql`, () => {
    const e567Yz20192PresetGraphql =
      e567Yz20192().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "e567-yz-2019-2",
        "sku": "e567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
