import { CustomApplicationSubmenuLinkDraftGraphql } from './index';
describe('CustomApplicationSubmenuLinkDraft', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel =
      CustomApplicationSubmenuLinkDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        permissions: expect.any(Array),
        uriPath: expect.any(String),
        defaultLabel: expect.any(String),
        labelAllLocales: [
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
      })
    );
  });
});
