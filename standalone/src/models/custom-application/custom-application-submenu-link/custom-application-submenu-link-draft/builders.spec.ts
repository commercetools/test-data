import type { TCustomApplicationSubmenuLinkDraftGraphql } from './types';
import { CustomApplicationSubmenuLinkDraftGraphql } from './index';
describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationSubmenuLinkDraftGraphql.random().buildGraphql<TCustomApplicationSubmenuLinkDraftGraphql>();

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
