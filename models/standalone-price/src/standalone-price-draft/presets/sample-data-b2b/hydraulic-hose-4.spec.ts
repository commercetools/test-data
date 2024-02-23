import type { TStandalonePriceDraft } from '../../../types';
import hydraulicHose4 from './hydraulic-hose-4';

describe(`with hydraulicHose4 preset`, () => {
  it(`should return a hydraulicHose4 preset`, () => {
    const hydraulicHose4Preset =
      hydraulicHose4().build<TStandalonePriceDraft>();
    expect(hydraulicHose4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-4",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7500,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hydraulicHose4 preset when built for graphql`, () => {
    const hydraulicHose4PresetGraphql =
      hydraulicHose4().buildGraphql<TStandalonePriceDraft>();
    expect(hydraulicHose4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hydraulic-hose-4",
        "sku": "hydraulic-hose",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7500,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
