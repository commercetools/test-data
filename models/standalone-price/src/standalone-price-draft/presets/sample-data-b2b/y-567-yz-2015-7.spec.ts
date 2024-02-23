import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20157 from './y-567-yz-2015-7';

describe(`with y567Yz20157 preset`, () => {
  it(`should return a y567Yz20157 preset`, () => {
    const y567Yz20157Preset = y567Yz20157().build<TStandalonePriceDraft>();
    expect(y567Yz20157Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-7",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2760000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20157 preset when built for graphql`, () => {
    const y567Yz20157PresetGraphql =
      y567Yz20157().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20157PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2015-7",
        "sku": "y567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2760000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
