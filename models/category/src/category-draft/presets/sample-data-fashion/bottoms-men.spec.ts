import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsMen from './bottoms-men';

describe(`with bottomsMen preset`, () => {
  it('should provide a bottomsMen preset', () => {
    const bottomsMenCategoryDraft = bottomsMen().build<TCategoryDraft>();
    expect(bottomsMenCategoryDraft.key).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraft.name).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraft.slug).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraft.parent).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraft.orderHint).toMatchInlineSnapshot();
  });

  it('should provide a bottomsMen preset when built for graphql', () => {
    const bottomsMenCategoryDraftGraphql =
      bottomsMen().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsMenCategoryDraftGraphql.key).toMatchInlineSnapshot();
    expect(
      bottomsMenCategoryDraftGraphql.nameAllLocales
    ).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraftGraphql.slug).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraftGraphql.parent).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot();
    expect(bottomsMenCategoryDraftGraphql.__typename).toMatchInlineSnapshot();
  });
});
