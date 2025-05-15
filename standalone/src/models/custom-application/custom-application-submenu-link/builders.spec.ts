import { CustomApplicationSubmenuLinkGraphql } from './index';
describe('CustomApplicationSubmenuLink', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel = CustomApplicationSubmenuLinkGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        permissions: expect.any(Array),
        createdAt: expect.any(String),
        id: expect.any(String),
        updatedAt: expect.any(String),
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
