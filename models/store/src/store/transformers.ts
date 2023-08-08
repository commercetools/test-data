import { Transformer } from '@commercetools-test-data/core';
import type { TStore, TStoreGraphql } from './types';

//TODO: confirm no storeDraftQL
//TODO: confirm if nameAllLocales necessary??
//TODO: confirm if distributionChannels and distributionChannelRef are needed both? just one?
//TODO: confirm if supplyChannels and supplyChannelRef are needed. both? just one?
//TODO: review default again for ProductSelectionSetting. why transform it to use ProductSelection to only omit it?

const transformers = {
  default: Transformer<TStore, TStore>('default', {
    buildFields: ['name', 'distributionChannels', 'supplyChannels'],
  }),
  rest: Transformer<TStore, TStore>('rest', {
    buildFields: ['name', 'distributionChannels', 'supplyChannels'],
  }),
  graphql: Transformer<TStore, TStoreGraphql>('graphql', {
    buildFields: ['name', 'distributionChannels', 'supplyChannels'],
    addFields: () => ({ __typename: 'Store' }),
    //nameAllLocales??
  }),
};

export default transformers;
