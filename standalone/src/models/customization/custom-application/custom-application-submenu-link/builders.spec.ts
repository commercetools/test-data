import type { TCustomApplicationSubmenuLinkGraphql } from './types';
import { CustomApplicationSubmenuLinkGraphql } from './index';
describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationSubmenuLinkGraphql.random().buildGraphql<TCustomApplicationSubmenuLinkGraphql>();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'CustomApplicationSubmenuLink',
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
