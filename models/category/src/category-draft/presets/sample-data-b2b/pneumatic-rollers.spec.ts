import type { TCategoryDraft } from '../../../types';
import pneumaticRollers from './pneumatic-rollers';

describe(`with pneumaticRollers preset`, () => {
  it(`should return a pneumaticRollers preset`, () => {
    const pneumaticRollersPreset = pneumaticRollers().build<TCategoryDraft>();
    expect(pneumaticRollersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "pneumatic-rollers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Pneumatische Walzen",
          "en": undefined,
          "en-AU": "Pneumatic Rollers",
          "en-GB": "Pneumatic Rollers",
          "en-NZ": "Pneumatic Rollers",
          "en-US": "Pneumatic Rollers",
          "es-ES": "Rodillos neumáticos",
          "fr": undefined,
          "fr-FR": "Rouleaux pneumatiques",
          "it-IT": "Rulli Pneumatici",
          "nl-NL": "Pneumatische Walsen",
          "pt-PT": "Rolos Pneumáticos",
        },
        "orderHint": "0.00001708382947601996147782",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "pneumatische_walzen",
          "en": undefined,
          "en-AU": "pneumatic_rollers",
          "en-GB": "pneumatic_rollers",
          "en-NZ": "pneumatic_rollers",
          "en-US": "pneumatic_rollers",
          "es-ES": "rodillos_neumaticos",
          "fr": undefined,
          "fr-FR": "rouleaux_pneumatiques",
          "it-IT": "pneumatic_rollers",
          "nl-NL": "pneumatic_rollers",
          "pt-PT": "pneumatic_rollers",
        },
      }
    `);
  });

  it(`should return a pneumaticRollers preset when built for graphql`, () => {
    const pneumaticRollersPresetGraphql =
      pneumaticRollers().buildGraphql<TCategoryDraft>();
    expect(pneumaticRollersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "pneumatic-rollers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Pneumatische Walzen",
          },
          {
            "locale": "it-IT",
            "value": "Rulli Pneumatici",
          },
          {
            "locale": "nl-NL",
            "value": "Pneumatische Walsen",
          },
          {
            "locale": "fr-FR",
            "value": "Rouleaux pneumatiques",
          },
          {
            "locale": "en-AU",
            "value": "Pneumatic Rollers",
          },
          {
            "locale": "es-ES",
            "value": "Rodillos neumáticos",
          },
          {
            "locale": "en-GB",
            "value": "Pneumatic Rollers",
          },
          {
            "locale": "en-NZ",
            "value": "Pneumatic Rollers",
          },
          {
            "locale": "pt-PT",
            "value": "Rolos Pneumáticos",
          },
          {
            "locale": "en-US",
            "value": "Pneumatic Rollers",
          },
        ],
        "orderHint": "0.00001708382947601996147782",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "pneumatische_walzen",
          },
          {
            "locale": "it-IT",
            "value": "pneumatic_rollers",
          },
          {
            "locale": "nl-NL",
            "value": "pneumatic_rollers",
          },
          {
            "locale": "fr-FR",
            "value": "rouleaux_pneumatiques",
          },
          {
            "locale": "en-AU",
            "value": "pneumatic_rollers",
          },
          {
            "locale": "es-ES",
            "value": "rodillos_neumaticos",
          },
          {
            "locale": "en-GB",
            "value": "pneumatic_rollers",
          },
          {
            "locale": "en-NZ",
            "value": "pneumatic_rollers",
          },
          {
            "locale": "pt-PT",
            "value": "pneumatic_rollers",
          },
          {
            "locale": "en-US",
            "value": "pneumatic_rollers",
          },
        ],
      }
    `);
  });
});
