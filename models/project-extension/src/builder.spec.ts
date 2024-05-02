/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TProjectExtension, TProjectExtensionGraphql } from './types';
import * as ProjectExtension from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProjectExtension, TProjectExtension>(
      'default',
      ProjectExtension.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        projectKey: expect.any(String),
        isRichTextEditorEnabled: expect.any(Boolean),
        installedApplications: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<TProjectExtension, TProjectExtensionGraphql>(
      'graphql',
      ProjectExtension.random(),
      expect.objectContaining({
        __typename: 'ProjectExtension',
        id: expect.any(String),
        createdAt: expect.any(String),
        projectKey: expect.any(String),
        isRichTextEditorEnabled: expect.any(Boolean),
        installedApplications: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        installedCustomViews: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
    )
  );
});
