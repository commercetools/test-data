import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20235 from './qq-567-yz-2023-5';

describe(`with qq567Yz20235 preset`, () => {
  it(`should return a qq567Yz20235 preset`, () => {
    const qq567Yz20235Preset = qq567Yz20235().build<TStandalonePriceDraft>();
    expect(qq567Yz20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-5",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20235 preset when built for graphql`, () => {
    const qq567Yz20235PresetGraphql =
      qq567Yz20235().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2023-5",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
