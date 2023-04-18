import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsKids from './tops-kids';

describe(`with topsKids preset`, () => {
  it('should provide a topsKids preset', () => {
    const topsKidsCategoryDraft = topsKids().build<TCategoryDraft>();
    expect(topsKidsCategoryDraft.key).toMatchInlineSnapshot(`"tops-kids"`);
    expect(topsKidsCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Tops",
        "fr": undefined,
      }
    `);
    expect(topsKidsCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "tops_kids",
        "fr": undefined,
      }
    `);
    expect(topsKidsCategoryDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Tops",
        "fr": undefined,
      }
    `);
    expect(topsKidsCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "clothing-kids",
        "typeId": "category",
      }
    `);
    expect(topsKidsCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.3"`);
  });

  it('should provide a topsKids preset when built for graphql', () => {
    const topsKidsCategoryDraftGraphql =
      topsKids().buildGraphql<TCategoryDraftGraphql>();
    expect(topsKidsCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"tops-kids"`
    );
    expect(topsKidsCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Tops",
        },
      ]
    `);
    expect(topsKidsCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "tops_kids",
        },
      ]
    `);
    expect(topsKidsCategoryDraftGraphql.descriptionAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Tops",
        },
      ]
    `);
    expect(topsKidsCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "clothing-kids",
        "typeId": "category",
      }
    `);
    expect(topsKidsCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.3"`
    );
    expect(topsKidsCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
