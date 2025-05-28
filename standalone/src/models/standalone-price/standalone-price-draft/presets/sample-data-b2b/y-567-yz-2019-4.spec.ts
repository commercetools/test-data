import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20194 from './y-567-yz-2019-4';

describe(`with y567Yz20194 preset`, () => {
  it(`should return a y567Yz20194 preset`, () => {
    const y567Yz20194Preset = y567Yz20194().build<TStandalonePriceDraft>();
    expect(y567Yz20194Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-4",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
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

  it(`should return a y567Yz20194 preset when built for graphql`, () => {
    const y567Yz20194PresetGraphql =
      y567Yz20194().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20194PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2019-4",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2019",
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
