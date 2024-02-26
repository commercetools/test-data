import type { TStandalonePriceDraft } from '../../../types';
import e567Yz20154 from './e-567-yz-2015-4';

describe(`with e567Yz20154 preset`, () => {
  it(`should return a e567Yz20154 preset`, () => {
    const e567Yz20154Preset = e567Yz20154().build<TStandalonePriceDraft>();
    expect(e567Yz20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-4",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1100000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a e567Yz20154 preset when built for graphql`, () => {
    const e567Yz20154PresetGraphql =
      e567Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(e567Yz20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "e567-yz-2015-4",
        "sku": "e567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1100000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
