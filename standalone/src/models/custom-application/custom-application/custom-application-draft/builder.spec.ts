import type { TCustomApplicationDraftGraphql } from '../types';
import { CustomApplicationDraftGraphql } from './index';

describe('builder', () => {
  it('graphql model', () => {
    const graphqlModel =
      CustomApplicationDraftGraphql.random().buildGraphql<TCustomApplicationDraftGraphql>();

    expect(graphqlModel).toMatchObject({
      url: expect.any(String),
      description: expect.any(String),
      permissions: expect.arrayContaining([
        expect.objectContaining({
          name: expect.stringMatching(/^(view|manage)(\w+)$/),
          oAuthScopes: expect.arrayContaining([expect.any(String)]),
        }),
      ]),
      icon: expect.any(String),
      name: expect.any(String),
      entryPointUriPath: expect.any(String),
      mainMenuLink: expect.objectContaining({
        defaultLabel: expect.any(String),
        permissions: [],
        labelAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
      }),
      submenuLinks: expect.arrayContaining([
        expect.objectContaining({
          labelAllLocales: [
            expect.objectContaining({
              locale: expect.any(String),
              value: expect.any(String),
            }),
          ],
          defaultLabel: expect.any(String),
          permissions: [],
          uriPath: expect.any(String),
        }),
      ]),
    });
  });
});
