import { fake, Generator } from '@commercetools-test-data/core';
import { CustomApplicationInstallation } from '@commercetools-test-data/custom-application';
import { CustomViewInstallation } from '@commercetools-test-data/custom-view';
import { createRelatedDates } from '@commercetools-test-data/utils';

import * as CategoryRecommendationSettings from './category-recommendation-settings';
import * as ImageRegex from './image-regex';

import type { TProjectExtension } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TProjectExtension>({
  fields: {
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    id: fake((f) => f.string.uuid()),
    projectKey: fake((f) => f.lorem.slug()),
    imageRegex: fake(() => ImageRegex.random()),
    applications: [], // Note: This is deprecated
    installedApplications: fake(() => [CustomApplicationInstallation.random()]),
    installedCustomViews: fake(() => [CustomViewInstallation.random()]),
    isRichTextEditorEnabled: fake((f) => f.datatype.boolean()),
    orderStatesVisibility: [],
    categoryRecommendationSettings: fake(() =>
      CategoryRecommendationSettings.random()
    ),
    sampleDataImport: {},
  },
});

export default generator;
