import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20192 from './y-567-yz-2019-2';

describe(`with y567Yz20192 preset`, () => {
  it(`should return a y567Yz20192 preset`, () => {
    const y567Yz20192Preset = y567Yz20192().build<TStandalonePriceDraft>();
    expect(y567Yz20192Preset).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2019-2",
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2530000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20192 preset when built for graphql`, () => {
    const y567Yz20192PresetGraphql =
      y567Yz20192().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "y567-yz-2019-2",
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2530000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
