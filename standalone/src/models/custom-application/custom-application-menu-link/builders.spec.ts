import { CustomApplicationMenuLinkGraphql } from './index';
describe('CustomApplicationMenuLink', () => {
  it('builds a GraphQL model', () => {
    const graphqlModel = CustomApplicationMenuLinkGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        createdAt: expect.any(String),
        id: expect.any(String),
        updatedAt: expect.any(String),
        labelAllLocales: [
          expect.objectContaining({
            locale: expect.stringMatching(/^(de|en|es)$/),
            value: expect.any(String),
          }),
        ],
        defaultLabel: expect.any(String),
        permissions: [],
        icon: expect.any(String),
      })
    );
  });
});
