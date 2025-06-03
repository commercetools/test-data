import type { TStandalonePriceDraft } from '../../../types';
import qq567Yz20156 from './qq-567-yz-2015-6';

describe(`with qq567Yz20156 preset`, () => {
  it(`should return a qq567Yz20156 preset`, () => {
    const qq567Yz20156Preset = qq567Yz20156().build<TStandalonePriceDraft>();
    expect(qq567Yz20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-6",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a qq567Yz20156 preset when built for graphql`, () => {
    const qq567Yz20156PresetGraphql =
      qq567Yz20156().buildGraphql<TStandalonePriceDraft>();
    expect(qq567Yz20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "qq567-yz-2015-6",
        "recurrencePolicy": undefined,
        "sku": "qq567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
