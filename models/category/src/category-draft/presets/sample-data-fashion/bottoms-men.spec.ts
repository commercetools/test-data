import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsMen from './bottoms-men';

describe(`with bottomsMen preset`, () => {
  it('should provide a bottomsMen preset', () => {
    const bottomsMenCategoryDraft = bottomsMen().build<TCategoryDraft>();
    expect(bottomsMenCategoryDraft.key).toMatchInlineSnapshot(`"bottoms-men"`);
    expect(bottomsMenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Bottoms",
        "fr": undefined,
      }
    `);
    expect(bottomsMenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "bottoms_men",
        "fr": undefined,
      }
    `);
    expect(bottomsMenCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "men",
        "typeId": "category",
      }
    `);
    expect(bottomsMenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.4"`);
  });

  it('should provide a bottomsMen preset when built for graphql', () => {
    const bottomsMenCategoryDraftGraphql =
      bottomsMen().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsMenCategoryDraftGraphql.key).toMatchInlineSnapshot(
      `"bottoms-men"`
    );
    expect(bottomsMenCategoryDraftGraphql.nameAllLocales)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Bottoms",
        },
      ]
    `);
    expect(bottomsMenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "bottoms_men",
        },
      ]
    `);
    expect(bottomsMenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "men",
        "typeId": "category",
      }
    `);
    expect(bottomsMenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.4"`
    );
    expect(bottomsMenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
