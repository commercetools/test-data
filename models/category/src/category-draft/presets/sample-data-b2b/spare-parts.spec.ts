import type { TCategoryDraft } from '../../../types';
import spareParts from './spare-parts';

describe(`with spareParts preset`, () => {
  it(`should return a spareParts preset`, () => {
    const sparePartsPreset = spareParts().build<TCategoryDraft>();
    expect(sparePartsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Austauschbares Teil, das für die Reparatur oder den Austausch defekter Einheiten in Maschinen, Fahrzeugen oder elektronischen Geräten verwendet wird",
          "en-AU": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          "en-GB": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          "en-NZ": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          "en-US": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          "es-ES": "Pieza intercambiable utilizada para la reparación o sustitución de unidades defectuosas en maquinaria, vehículos o dispositivos electrónicos",
          "fr-FR": "Pièce interchangeable utilisée pour la réparation ou le remplacement d'unités défaillantes dans des machines, véhicules ou dispositifs électroniques",
          "it-IT": "Parte intercambiabile utilizzata per la riparazione o la sostituzione di unità guaste in macchinari, veicoli o dispositivi elettronici",
          "nl-NL": "Uitwisselbaar onderdeel gebruikt voor de reparatie of vervanging van defecte eenheden in machines, voertuigen of elektronische apparaten",
          "pt-PT": "Peça intercambiável usada para a reparação ou substituição de unidades avariadas em maquinaria, veículos ou dispositivos eletrónicos",
        },
        "externalId": undefined,
        "key": "spare-parts",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Ersatzteile",
          "en-AU": "Spare Parts",
          "en-GB": "Spare Parts",
          "en-NZ": "Spare Parts",
          "en-US": "Spare Parts",
          "es-ES": "Piezas de Repuesto",
          "fr-FR": "Pièces de Rechange",
          "it-IT": "Parti di Ricambio",
          "nl-NL": "Reserveonderdelen",
          "pt-PT": "Peças Sobressalentes",
        },
        "orderHint": "0.000017113644845271199915511",
        "parent": undefined,
        "slug": {
          "de-DE": "ersatzteile",
          "en-AU": "spare_parts",
          "en-GB": "spare_parts",
          "en-NZ": "spare_parts",
          "en-US": "spare_parts",
          "es-ES": "piezas_de_repuesto",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Austauschbares Teil, das für die Reparatur oder den Austausch defekter Einheiten in Maschinen, Fahrzeugen oder elektronischen Geräten verwendet wird",
          },
          {
            "locale": "it-IT",
            "value": "Parte intercambiabile utilizzata per la riparazione o la sostituzione di unità guaste in macchinari, veicoli o dispositivi elettronici",
          },
          {
            "locale": "nl-NL",
            "value": "Uitwisselbaar onderdeel gebruikt voor de reparatie of vervanging van defecte eenheden in machines, voertuigen of elektronische apparaten",
          },
          {
            "locale": "fr-FR",
            "value": "Pièce interchangeable utilisée pour la réparation ou le remplacement d'unités défaillantes dans des machines, véhicules ou dispositifs électroniques",
          },
          {
            "locale": "en-AU",
            "value": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          },
          {
            "locale": "es-ES",
            "value": "Pieza intercambiable utilizada para la reparación o sustitución de unidades defectuosas en maquinaria, vehículos o dispositivos electrónicos",
          },
          {
            "locale": "en-GB",
            "value": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          },
          {
            "locale": "en-NZ",
            "value": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          },
          {
            "locale": "pt-PT",
            "value": "Peça intercambiável usada para a reparação ou substituição de unidades avariadas em maquinaria, veículos ou dispositivos eletrónicos",
          },
          {
            "locale": "en-US",
            "value": "Interchangeable part used for the repair or replacement of failed units in machinery, vehicles, or electronic devices",
          },
        ],
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
        "orderHint": "0.000017113644845271199915511",
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
