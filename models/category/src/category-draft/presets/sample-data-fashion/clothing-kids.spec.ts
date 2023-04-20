import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import clothingKids from './clothing-kids';

describe(`with clothingKids preset`, () => {
  it('should provide a clothingKids preset', () => {
    const clothingKidsCategoryDraft = clothingKids().build<TCategoryDraft>();
    expect(clothingKidsCategoryDraft.key).toMatchInlineSnapshot(
      `"clothing-kids"`
    );
    expect(clothingKidsCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Clothing",
        "fr": undefined,
      }
    `);
    expect(clothingKidsCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "clothing_kids",
        "fr": undefined,
      }
    `);
    expect(clothingKidsCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "kids",
        "typeId": "category",
      }
    `);
    expect(clothingKidsCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.8"`);
  });

  it('should provide a clothingKids preset when built for graphql', () => {
    const clothingKidsCategoryDraftGraphql =
      clothingKids().buildGraphql<TCategoryDraftGraphql>();
    expect(clothingKidsCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"clothing-kids"`
    );
    expect(clothingKidsCategoryDraftGraphql.nameAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Clothing",
        },
      ]
    `);
    expect(clothingKidsCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "clothing_kids",
        },
      ]
    `);
    expect(clothingKidsCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "kids",
        "typeId": "category",
      }
    `);
    expect(clothingKidsCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.8"`
    );
    expect(clothingKidsCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
