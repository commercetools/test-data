import { fake, type TModelFieldsConfig } from '@/core';
import { createRelatedDates, slugify } from '@/utils';
import type { TCustomApplicationDeploymentPreviewGraphql } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

export const graphqlFieldsConfig: TModelFieldsConfig<TCustomApplicationDeploymentPreviewGraphql> =
  {
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      alias: fake((f) => slugify(f.lorem.word())),
      url: fake((f) => f.internet.url()),
      __typename: 'CustomApplicationDeploymentPreview',
    },
  };
