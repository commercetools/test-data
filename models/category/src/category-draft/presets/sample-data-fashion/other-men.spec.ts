import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import otherMen from './other-men';

describe(`with otherMen preset`, () => {
  it('should provide an otherMen preset', () => {
    const otherMenCategoryDraft = otherMen().build<TCategoryDraft>();
    expect(otherMenCategoryDraft.key).toMatchInlineSnapshot(`"other-men"`);
    expect(otherMenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Other",
        "fr": undefined,
      }
    `);
    expect(otherMenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "other_men",
        "fr": undefined,
      }
    `);
    expect(otherMenCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "men",
        "typeId": "category",
      }
    `);
    expect(otherMenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.3"`);
  });

  it('should provide an otherMen preset when built for graphql', () => {
    const otherMenCategoryDraftGraphql =
      otherMen().buildGraphql<TCategoryDraftGraphql>();
    expect(otherMenCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"other-men"`
    );
    expect(otherMenCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Other",
        },
      ]
    `);
    expect(otherMenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "other_men",
        },
      ]
    `);
    expect(otherMenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "men",
        "typeId": "category",
      }
    `);
    expect(otherMenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.3"`
    );
    expect(otherMenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
