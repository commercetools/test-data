import type { TCategoryDraft } from '../../../types';
import fineGraders from './fine-graders';

describe(`with fineGraders preset`, () => {
  it(`should return a fineGraders preset`, () => {
    const fineGradersPreset = fineGraders().build<TCategoryDraft>();
    expect(fineGradersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "fine-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Fein-Grader",
          "en": undefined,
          "en-AU": "Fine Graders",
          "en-GB": "Fine Graders",
          "en-NZ": "Fine Graders",
          "en-US": "Fine Graders",
          "es-ES": "Motoniveladoras finas",
          "fr": undefined,
          "fr-FR": "Niveleuses fines",
          "it-IT": "Livellatrici Fine",
          "nl-NL": "Fijne Graders",
          "pt-PT": "Motoniveladoras Finas",
        },
        "orderHint": "0.00001708382946805785223058",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "fein_grader",
          "en": undefined,
          "en-AU": "fine_graders",
          "en-GB": "fine_graders",
          "en-NZ": "fine_graders",
          "en-US": "fine_graders",
          "es-ES": "motoniveladoras_finas",
          "fr": undefined,
          "fr-FR": "niveleuses_fines",
          "it-IT": "fine_graders",
          "nl-NL": "fine_graders",
          "pt-PT": "fine_graders",
        },
      }
    `);
  });

  it(`should return a fineGraders preset when built for graphql`, () => {
    const fineGradersPresetGraphql =
      fineGraders().buildGraphql<TCategoryDraft>();
    expect(fineGradersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "fine-graders",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Fein-Grader",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrici Fine",
          },
          {
            "locale": "nl-NL",
            "value": "Fijne Graders",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuses fines",
          },
          {
            "locale": "en-AU",
            "value": "Fine Graders",
          },
          {
            "locale": "es-ES",
            "value": "Motoniveladoras finas",
          },
          {
            "locale": "en-GB",
            "value": "Fine Graders",
          },
          {
            "locale": "en-NZ",
            "value": "Fine Graders",
          },
          {
            "locale": "pt-PT",
            "value": "Motoniveladoras Finas",
          },
          {
            "locale": "en-US",
            "value": "Fine Graders",
          },
        ],
        "orderHint": "0.00001708382946805785223058",
        "parent": {
          "key": "high-capacity-motor-graders",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "fein_grader",
          },
          {
            "locale": "it-IT",
            "value": "fine_graders",
          },
          {
            "locale": "nl-NL",
            "value": "fine_graders",
          },
          {
            "locale": "fr-FR",
            "value": "niveleuses_fines",
          },
          {
            "locale": "en-AU",
            "value": "fine_graders",
          },
          {
            "locale": "es-ES",
            "value": "motoniveladoras_finas",
          },
          {
            "locale": "en-GB",
            "value": "fine_graders",
          },
          {
            "locale": "en-NZ",
            "value": "fine_graders",
          },
          {
            "locale": "pt-PT",
            "value": "fine_graders",
          },
          {
            "locale": "en-US",
            "value": "fine_graders",
          },
        ],
      }
    `);
  });
});
