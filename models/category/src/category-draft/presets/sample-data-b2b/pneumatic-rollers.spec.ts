import type { TCategoryDraft } from '../../../types';
import pneumaticRollers from './pneumatic-rollers';

describe(`with pneumaticRollers preset`, () => {
  it(`should return a pneumaticRollers preset`, () => {
    const pneumaticRollersPreset = pneumaticRollers().build<TCategoryDraft>();
    expect(pneumaticRollersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Walzen, die pneumatische Kraft für die Verdichtung verwenden",
          "en-AU": "Rollers using pneumatic force for compaction",
          "en-GB": "Rollers using pneumatic force for compaction",
          "en-NZ": "Rollers using pneumatic force for compaction",
          "en-US": "Rollers using pneumatic force for compaction",
          "es-ES": "Rodillos que utilizan fuerza neumática para compactar",
          "fr-FR": "Rouleaux utilisant la force pneumatique pour le compactage",
          "it-IT": "Rulli che utilizzano la forza pneumatica per la compattazione",
          "nl-NL": "Walsen die pneumatische kracht gebruiken voor verdichting",
          "pt-PT": "Rolos que utilizam força pneumática para compactação",
        },
        "externalId": undefined,
        "key": "pneumatic-rollers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Pneumatische Walzen",
          "en-AU": "Pneumatic Rollers",
          "en-GB": "Pneumatic Rollers",
          "en-NZ": "Pneumatic Rollers",
          "en-US": "Pneumatic Rollers",
          "es-ES": "Rodillos neumáticos",
          "fr-FR": "Rouleaux pneumatiques",
          "it-IT": "Rulli Pneumatici",
          "nl-NL": "Pneumatische Walsen",
          "pt-PT": "Rolos Pneumáticos",
        },
        "orderHint": "0.00001711364484772490385449",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "pneumatische_walzen",
          "en-AU": "pneumatic_rollers",
          "en-GB": "pneumatic_rollers",
          "en-NZ": "pneumatic_rollers",
          "en-US": "pneumatic_rollers",
          "es-ES": "rodillos_neumaticos",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Walzen, die pneumatische Kraft für die Verdichtung verwenden",
          },
          {
            "locale": "it-IT",
            "value": "Rulli che utilizzano la forza pneumatica per la compattazione",
          },
          {
            "locale": "nl-NL",
            "value": "Walsen die pneumatische kracht gebruiken voor verdichting",
          },
          {
            "locale": "fr-FR",
            "value": "Rouleaux utilisant la force pneumatique pour le compactage",
          },
          {
            "locale": "en-AU",
            "value": "Rollers using pneumatic force for compaction",
          },
          {
            "locale": "es-ES",
            "value": "Rodillos que utilizan fuerza neumática para compactar",
          },
          {
            "locale": "en-GB",
            "value": "Rollers using pneumatic force for compaction",
          },
          {
            "locale": "en-NZ",
            "value": "Rollers using pneumatic force for compaction",
          },
          {
            "locale": "pt-PT",
            "value": "Rolos que utilizam força pneumática para compactação",
          },
          {
            "locale": "en-US",
            "value": "Rollers using pneumatic force for compaction",
          },
        ],
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
        "orderHint": "0.00001711364484772490385449",
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
