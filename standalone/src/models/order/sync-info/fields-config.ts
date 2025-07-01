import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import type { TSyncInfoGraphql, TSyncInfoRest } from './types';

// Public docs: https://docs.commercetools.com/api/projects/orders#syncinfo

const [getOlderDate] = createRelatedDates();

const commonFieldsConfig = {
  externalId: null,
  channel: null,
  syncedAt: fake(getOlderDate),
};

export const restFieldsConfig: TModelFieldsConfig<TSyncInfoRest> = {
  fields: {
    ...commonFieldsConfig,
    channel: fake(() => ReferenceRest.presets.channelReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TSyncInfoGraphql> = {
  fields: {
    ...commonFieldsConfig,
    channel: null,
    channelRef: fake(() => ReferenceGraphql.presets.channelReference()),
    __typename: 'SyncInfo',
  },
  postBuild: (model) => {
    if (model.channel) {
      model.channelRef.id = model.channel.id;
    }
    return model;
  },
};
