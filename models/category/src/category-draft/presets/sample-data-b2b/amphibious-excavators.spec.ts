import type { TCategoryDraft } from '../../../types';
import amphibiousExcavators from './amphibious-excavators';

describe(`with amphibiousExcavators preset`, () => {
  it(`should return a amphibiousExcavators preset`, () => {
    const amphibiousExcavatorsPreset =
      amphibiousExcavators().build<TCategoryDraft>();
    expect(amphibiousExcavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "amphibious-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Amphibienbagger",
          "en": undefined,
          "en-AU": "Amphibious Excavators",
          "en-GB": "Amphibious Excavators",
          "en-NZ": "Amphibious Excavators",
          "en-US": "Amphibious Excavators",
          "es-ES": "Excavadoras anfibias",
          "fr": undefined,
          "fr-FR": "Excavatrices amphibies",
          "it-IT": "Escavatori Anfibi",
          "nl-NL": "Amfibische Graafmachines",
          "pt-PT": "Escavadeiras Anfíbias",
        },
        "orderHint": "0.00001708382940863337373225",
        "parent": {
          "key": "large-scale-mining-excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "amphibien_bagger",
          "en": undefined,
          "en-AU": "amphibious_excavators",
          "en-GB": "amphibious_excavators",
          "en-NZ": "amphibious_excavators",
          "en-US": "amphibious_excavators",
          "es-ES": "excavadoras_anfibias",
          "fr": undefined,
          "fr-FR": "excavatrices_amphibious",
          "it-IT": "amphibious_excavators",
          "nl-NL": "amphibious_excavators",
          "pt-PT": "amphibious_excavators",
        },
      }
    `);
  });

  it(`should return a amphibiousExcavators preset when built for graphql`, () => {
    const amphibiousExcavatorsPresetGraphql =
      amphibiousExcavators().buildGraphql<TCategoryDraft>();
    expect(amphibiousExcavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "amphibious-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Amphibienbagger",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori Anfibi",
          },
          {
            "locale": "nl-NL",
            "value": "Amfibische Graafmachines",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices amphibies",
          },
          {
            "locale": "en-AU",
            "value": "Amphibious Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras anfibias",
          },
          {
            "locale": "en-GB",
            "value": "Amphibious Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Amphibious Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras Anfíbias",
          },
          {
            "locale": "en-US",
            "value": "Amphibious Excavators",
          },
        ],
        "orderHint": "0.00001708382940863337373225",
        "parent": {
          "key": "large-scale-mining-excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "amphibien_bagger",
          },
          {
            "locale": "it-IT",
            "value": "amphibious_excavators",
          },
          {
            "locale": "nl-NL",
            "value": "amphibious_excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_amphibious",
          },
          {
            "locale": "en-AU",
            "value": "amphibious_excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_anfibias",
          },
          {
            "locale": "en-GB",
            "value": "amphibious_excavators",
          },
          {
            "locale": "en-NZ",
            "value": "amphibious_excavators",
          },
          {
            "locale": "pt-PT",
            "value": "amphibious_excavators",
          },
          {
            "locale": "en-US",
            "value": "amphibious_excavators",
          },
        ],
      }
    `);
  });
});
