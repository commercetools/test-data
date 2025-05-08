import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20151 from './e-567-yz-2015-1';

describe(`with e567Yz20151 preset`, () => {
  it(`should return a e567Yz20151 preset`, () => {
    const e567Yz20151Preset = e567Yz20151().build<TStandalonePriceDraft>();
    expect(e567Yz20151Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-1",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a e567Yz20151 preset when built for graphql`, () => {
    const e567Yz20151PresetGraphql =
      e567Yz20151().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20151PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-1",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
