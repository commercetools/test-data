import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsKids from './bottoms-kids';

describe(`with bottomsKids preset`, () => {
  it('should provide a bottomsKids preset', () => {
    const bottomsKidsCategoryDraft = bottomsKids().build<TCategoryDraft>();
    expect(bottomsKidsCategoryDraft.key).toMatchInlineSnapshot(
      `"bottoms_kids"`
    );
    expect(bottomsKidsCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Bottoms",
        "fr": undefined,
      }
    `);
    expect(bottomsKidsCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "bottoms_kids",
        "fr": undefined,
      }
    `);
    expect(bottomsKidsCategoryDraft.description).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Bottoms",
        "fr": undefined,
      }
    `);
    expect(bottomsKidsCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "clothing-kids",
        "typeId": "category",
      }
    `);
    expect(bottomsKidsCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.3"`);
  });

  it('should provide a bottomsKids preset when built for graphql', () => {
    const bottomsKidsCategoryDraftGraphql =
      bottomsKids().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsKidsCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"bottoms_kids"`
    );
    expect(bottomsKidsCategoryDraftGraphql.nameAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Bottoms",
        },
      ]
    `);
    expect(bottomsKidsCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "bottoms_kids",
        },
      ]
    `);
    expect(bottomsKidsCategoryDraftGraphql.descriptionAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Bottoms",
        },
      ]
    `);
    expect(bottomsKidsCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "clothing-kids",
        "typeId": "category",
      }
    `);
    expect(bottomsKidsCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.3"`
    );
  });
});
