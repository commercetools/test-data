import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20154 from './y-567-yz-2015-4';

describe(`with y567Yz20154 preset`, () => {
  it(`should return a y567Yz20154 preset`, () => {
    const y567Yz20154Preset = y567Yz20154().build<TStandalonePriceDraft>();
    expect(y567Yz20154Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-4",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a y567Yz20154 preset when built for graphql`, () => {
    const y567Yz20154PresetGraphql =
      y567Yz20154().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20154PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-4",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
