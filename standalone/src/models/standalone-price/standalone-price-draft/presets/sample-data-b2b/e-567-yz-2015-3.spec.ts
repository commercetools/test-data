import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20153 from './e-567-yz-2015-3';

describe(`with e567Yz20153 preset`, () => {
  it(`should return a e567Yz20153 preset`, () => {
    const e567Yz20153Preset = e567Yz20153().build<TStandalonePriceDraft>();
    expect(e567Yz20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-3",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a e567Yz20153 preset when built for graphql`, () => {
    const e567Yz20153PresetGraphql =
      e567Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-3",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
