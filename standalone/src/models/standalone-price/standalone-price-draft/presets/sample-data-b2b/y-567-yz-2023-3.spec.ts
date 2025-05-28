import type { TStandalonePriceDraft } from '../../../types';
import y567Yz20233 from './y-567-yz-2023-3';

describe(`with y567Yz20233 preset`, () => {
  it(`should return a y567Yz20233 preset`, () => {
    const y567Yz20233Preset = y567Yz20233().build<TStandalonePriceDraft>();
    expect(y567Yz20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-3",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3542000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a y567Yz20233 preset when built for graphql`, () => {
    const y567Yz20233PresetGraphql =
      y567Yz20233().buildGraphql<TStandalonePriceDraft>();
    expect(y567Yz20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "y567-yz-2023-3",
        "recurrencePolicy": undefined,
        "sku": "y567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3542000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
