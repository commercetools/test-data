import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import topsMen from './tops-men';

describe(`with topsMen preset`, () => {
  it('should provide a topsMen preset', () => {
    const topsMenCategoryDraft = topsMen().build<TCategoryDraft>();
    expect(topsMenCategoryDraft.key).toMatchInlineSnapshot(`"tops-men"`);
    expect(topsMenCategoryDraft.name).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "Tops",
        "fr": undefined,
      }
    `);
    expect(topsMenCategoryDraft.slug).toMatchInlineSnapshot(`
      {
        "de": undefined,
        "en": undefined,
        "en-US": "tops_men",
        "fr": undefined,
      }
    `);
    expect(topsMenCategoryDraft.parent).toMatchInlineSnapshot(`
      {
        "key": "men",
        "typeId": "category",
      }
    `);
    expect(topsMenCategoryDraft.orderHint).toMatchInlineSnapshot(`"0.6"`);
  });

  it('should provide a topsMen preset when built for graphql', () => {
    const topsMenCategoryDraftGraphql =
      topsMen().buildGraphql<TCategoryDraftGraphql>();
    expect(topsMenCategoryDraftGraphql.key).toMatchInlineSnapshot(`"tops-men"`);
    expect(topsMenCategoryDraftGraphql.nameAllLocales).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "Tops",
        },
      ]
    `);
    expect(topsMenCategoryDraftGraphql.slug).toMatchInlineSnapshot(`
      [
        {
          "__typename": "LocalizedString",
          "locale": "en-US",
          "value": "tops_men",
        },
      ]
    `);
    expect(topsMenCategoryDraftGraphql.parent).toMatchInlineSnapshot(`
      {
        "__typename": "Reference",
        "key": "men",
        "typeId": "category",
      }
    `);
    expect(topsMenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot(
      `"0.6"`
    );
    expect(topsMenCategoryDraftGraphql.__typename).toMatchInlineSnapshot(
      `"CategoryDraft"`
    );
  });
});
