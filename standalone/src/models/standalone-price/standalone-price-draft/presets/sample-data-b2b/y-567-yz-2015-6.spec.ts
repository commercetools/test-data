import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20156 from './y-567-yz-2015-6';

describe(`with y567Yz20156 preset`, () => {
  it(`should return a y567Yz20156 preset`, () => {
    const y567Yz20156Preset = y567Yz20156().build<TStandalonePriceDraft>();
    expect(y567Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-6",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1840000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a y567Yz20156 preset when built for graphql`, () => {
    const y567Yz20156PresetGraphql =
      y567Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-6",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1840000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
