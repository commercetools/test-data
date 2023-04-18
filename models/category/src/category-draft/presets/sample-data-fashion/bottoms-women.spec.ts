import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bottomsWomen from './bottoms-women';

describe(`with bottomsWomen preset`, () => {
  it('should provide a bottomsWomen preset', () => {
    const bottomsWomenCategoryDraft = bottomsWomen().build<TCategoryDraft>();
    expect(bottomsWomenCategoryDraft.key).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraft.name).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraft.slug).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraft.parent).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraft.orderHint).toMatchInlineSnapshot();
  });

  it('should provide a bottomsWomen preset when built for graphql', () => {
    const bottomsWomenCategoryDraftGraphql =
      bottomsWomen().buildGraphql<TCategoryDraftGraphql>();
    expect(bottomsWomenCategoryDraftGraphql.key).toMatchInlineSnapshot();
    expect(
      bottomsWomenCategoryDraftGraphql.nameAllLocales
    ).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraftGraphql.slug).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraftGraphql.parent).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraftGraphql.orderHint).toMatchInlineSnapshot();
    expect(bottomsWomenCategoryDraftGraphql.__typename).toMatchInlineSnapshot();
  });
});
