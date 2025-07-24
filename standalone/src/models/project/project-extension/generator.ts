import { fake, Generator } from '@/core';
import { CustomApplicationInstallationGraphql } from '@/models/customization/custom-application';
import { CustomViewInstallation } from '@/models/customization/custom-view';
import { createRelatedDates } from '@/utils';
import * as CategoryRecommendationSettings from './category-recommendation-settings';
import * as ImageRegex from './image-regex';
import * as SampleDataImport from './sample-data-import';

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
    installedApplications: fake(() => [
      CustomApplicationInstallationGraphql.random(),
    ]),
    installedCustomViews: fake(() => [CustomViewInstallation.random()]),
    isRichTextEditorEnabled: fake((f) => f.datatype.boolean()),
    isReducedReviewModifiedProductsPaginationEnabled: fake((f) =>
      f.datatype.boolean()
    ),
    orderStatesVisibility: fake((f) =>
      f.helpers.arrayElements([
        'HideOrderState',
        'HidePaymentState',
        'HideShipmentState',
      ])
    ),
    categoryRecommendationSettings: fake(() =>
      CategoryRecommendationSettings.random()
    ),
    sampleDataImport: fake(() => SampleDataImport.random()),
    isCustomerEmailValidationDisabled: fake((f) => f.datatype.boolean()),
    isSingleCustomerGroupAssignmentHidden: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
