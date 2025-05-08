import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20152 from './y-567-yz-2015-2';

describe(`with y567Yz20152 preset`, () => {
  it(`should return a y567Yz20152 preset`, () => {
    const y567Yz20152Preset = y567Yz20152().build<TStandalonePriceDraft>();
    expect(y567Yz20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-2",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2277000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20152 preset when built for graphql`, () => {
    const y567Yz20152PresetGraphql =
      y567Yz20152().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-2",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2277000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
