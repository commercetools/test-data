import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20191 from './y-567-yz-2019-1';

describe(`with y567Yz20191 preset`, () => {
  it(`should return a y567Yz20191 preset`, () => {
    const y567Yz20191Preset = y567Yz20191().build<TStandalonePriceDraft>();
    expect(y567Yz20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-1",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2783000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a y567Yz20191 preset when built for graphql`, () => {
    const y567Yz20191PresetGraphql =
      y567Yz20191().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-1",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2783000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
