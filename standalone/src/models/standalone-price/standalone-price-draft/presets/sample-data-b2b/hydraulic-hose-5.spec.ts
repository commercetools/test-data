import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose5 from './hydraulic-hose-5';

describe(`with hydraulicHose5 preset`, () => {
  it(`should return a hydraulicHose5 preset`, () => {
    const hydraulicHose5Preset =
      hydraulicHose5().build<TStandalonePriceDraft>();
    expect(hydraulicHose5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-5",
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

  it(`should return a hydraulicHose5 preset when built for graphql`, () => {
    const hydraulicHose5PresetGraphql =
      hydraulicHose5().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-5",
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
