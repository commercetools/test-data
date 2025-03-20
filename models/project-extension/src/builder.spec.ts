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
        updatedAt: expect.any(String),
        applications: expect.any(Array),
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
        categoryRecommendationSettings: expect.objectContaining({
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          searchProperty: expect.any(String),
          attributeName: expect.any(String),
        }),
        imageRegex: expect.objectContaining({
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          small: expect.objectContaining({
            flag: expect.any(String),
            replace: expect.any(String),
            search: expect.any(String),
          }),
          thumb: expect.objectContaining({
            flag: expect.any(String),
            replace: expect.any(String),
            search: expect.any(String),
          }),
        }),
        sampleDataImport: expect.objectContaining({
          completed: expect.any(Boolean),
          dataset: expect.any(String),
        }),
        orderStatesVisibility: expect.arrayContaining([expect.any(String)]),
        isCustomerEmailValidationDisabled: expect.any(Boolean),
        isSingleCustomerGroupAssignmentHidden: expect.any(Boolean),
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
        updatedAt: expect.any(String),
        applications: expect.any(Array),
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
        categoryRecommendationSettings: expect.objectContaining({
          __typename: 'CategoryRecommendationSettings',
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          searchProperty: expect.any(String),
          attributeName: expect.any(String),
        }),
        imageRegex: expect.objectContaining({
          __typename: 'ImageRegex',
          id: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          small: expect.objectContaining({
            flag: expect.any(String),
            replace: expect.any(String),
            search: expect.any(String),
          }),
          thumb: expect.objectContaining({
            flag: expect.any(String),
            replace: expect.any(String),
            search: expect.any(String),
          }),
        }),
        sampleDataImport: expect.objectContaining({
          __typename: 'SampleDataImportMetadata',
          completed: expect.any(Boolean),
          dataset: expect.any(String),
        }),
        orderStatesVisibility: expect.arrayContaining([expect.any(String)]),
        isCustomerEmailValidationDisabled: expect.any(Boolean),
        isSingleCustomerGroupAssignmentHidden: expect.any(Boolean),
      })
    )
  );
});
