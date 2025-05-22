import { CustomApplicationDeploymentPreviewGraphql } from './index';

describe('CustomApplicationDeploymentPreviewGraphql', () => {
  it('should build a graphql model', () => {
    const graphqlModel =
      CustomApplicationDeploymentPreviewGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'TMcSettingsCustomApplicationDeploymentPreview',
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });
});
