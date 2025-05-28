import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose2 from './hydraulic-hose-2';

describe(`with hydraulicHose2 preset`, () => {
  it(`should return a hydraulicHose2 preset`, () => {
    const hydraulicHose2Preset =
      hydraulicHose2().build<TStandalonePriceDraft>();
    expect(hydraulicHose2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-2",
        "recurrencePolicy": undefined,
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hydraulicHose2 preset when built for graphql`, () => {
    const hydraulicHose2PresetGraphql =
      hydraulicHose2().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-2",
        "recurrencePolicy": undefined,
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
