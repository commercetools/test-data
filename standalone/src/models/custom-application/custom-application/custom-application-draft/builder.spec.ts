import type { TCustomApplicationDraftGraphql } from './types';
import { CustomApplicationDraftGraphql } from './index';

describe('builder', () => {
  it('graphql model', () => {
    const graphqlModel =
      CustomApplicationDraftGraphql.random().buildGraphql<TCustomApplicationDraftGraphql>();

    expect(graphqlModel).toMatchObject({
      url: expect.any(String),
      description: expect.any(String),
      permissions: expect.any(Array),
      icon: expect.any(String),
      name: expect.any(String),
      entryPointUriPath: expect.any(String),
      mainMenuLink: expect.any(Object),
      submenuLinks: expect.any(Array),
    });
  });
});
