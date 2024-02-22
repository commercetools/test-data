import type { TCategoryDraft } from '../../../types';
import spareParts from './spare-parts';

describe(`with spareParts preset`, () => {
  it(`should return a spareParts preset`, () => {
    const sparePartsPreset = spareParts().build<TCategoryDraft>();
    expect(sparePartsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "spare-parts",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Ersatzteile",
          "en": undefined,
          "en-AU": "Spare Parts",
          "en-GB": "Spare Parts",
          "en-NZ": "Spare Parts",
          "en-US": "Spare Parts",
          "es-ES": "Piezas de Repuesto",
          "fr": undefined,
          "fr-FR": "Pièces de Rechange",
          "it-IT": "Parti di Ricambio",
          "nl-NL": "Reserveonderdelen",
          "pt-PT": "Peças Sobressalentes",
        },
        "orderHint": "0.00001708382951385193293756",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "ersatzteile",
          "en": undefined,
          "en-AU": "spare_parts",
          "en-GB": "spare_parts",
          "en-NZ": "spare_parts",
          "en-US": "spare_parts",
          "es-ES": "piezas_de_repuesto",
          "fr": undefined,
          "fr-FR": "pieces_de_rechange",
          "it-IT": "parti_di_ricambio",
          "nl-NL": "reserveonderdelen",
          "pt-PT": "pecas_sobressalentes",
        },
      }
    `);
  });

  it(`should return a spareParts preset when built for graphql`, () => {
    const sparePartsPresetGraphql = spareParts().buildGraphql<TCategoryDraft>();
    expect(sparePartsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "spare-parts",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Ersatzteile",
          },
          {
            "locale": "it-IT",
            "value": "Parti di Ricambio",
          },
          {
            "locale": "nl-NL",
            "value": "Reserveonderdelen",
          },
          {
            "locale": "fr-FR",
            "value": "Pièces de Rechange",
          },
          {
            "locale": "en-AU",
            "value": "Spare Parts",
          },
          {
            "locale": "es-ES",
            "value": "Piezas de Repuesto",
          },
          {
            "locale": "en-GB",
            "value": "Spare Parts",
          },
          {
            "locale": "en-NZ",
            "value": "Spare Parts",
          },
          {
            "locale": "pt-PT",
            "value": "Peças Sobressalentes",
          },
          {
            "locale": "en-US",
            "value": "Spare Parts",
          },
        ],
        "orderHint": "0.00001708382951385193293756",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "ersatzteile",
          },
          {
            "locale": "it-IT",
            "value": "parti_di_ricambio",
          },
          {
            "locale": "nl-NL",
            "value": "reserveonderdelen",
          },
          {
            "locale": "fr-FR",
            "value": "pieces_de_rechange",
          },
          {
            "locale": "en-AU",
            "value": "spare_parts",
          },
          {
            "locale": "es-ES",
            "value": "piezas_de_repuesto",
          },
          {
            "locale": "en-GB",
            "value": "spare_parts",
          },
          {
            "locale": "en-NZ",
            "value": "spare_parts",
          },
          {
            "locale": "pt-PT",
            "value": "pecas_sobressalentes",
          },
          {
            "locale": "en-US",
            "value": "spare_parts",
          },
        ],
      }
    `);
  });
});
