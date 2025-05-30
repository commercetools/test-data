import type { TCustomApplicationDeploymentPreviewGraphql } from './types';
import { CustomApplicationDeploymentPreviewGraphql } from './index';
describe('builder', () => {
  it('graphql model', () => {
    const graphqlModel =
      CustomApplicationDeploymentPreviewGraphql.random().buildGraphql<TCustomApplicationDeploymentPreviewGraphql>();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'CustomApplicationDeploymentPreview',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        alias: expect.any(String),
        url: expect.any(String),
      })
    );
  });
});
