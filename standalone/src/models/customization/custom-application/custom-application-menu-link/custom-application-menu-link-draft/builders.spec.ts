import { CustomApplicationMenuLinkDraftGraphql } from './index';
describe('CustomApplicationMenuLinkDraft', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel = CustomApplicationMenuLinkDraftGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        labelAllLocales: [
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
        defaultLabel: expect.any(String),
        permissions: [],
      })
    );
  });
});
