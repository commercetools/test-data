import type { TCustomApplicationMenuLinkGraphql } from './types';
import { CustomApplicationMenuLinkGraphql } from './index';

describe('builder', () => {
  it('GraphQL model', () => {
    const graphqlModel =
      CustomApplicationMenuLinkGraphql.random().buildGraphql<TCustomApplicationMenuLinkGraphql>();

    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'CustomApplicationMenuLink',
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
      })
    );
  });
});
