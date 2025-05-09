import { Transformer } from '../../../core';
import type { TTrackingData, TTrackingDataGraphql } from './types';

const transformers = {
  default: Transformer<TTrackingData, TTrackingData>('default', {
    buildFields: [],
  }),
  rest: Transformer<TTrackingData, TTrackingData>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TTrackingData, TTrackingDataGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'TrackingData',
    }),
  }),
};

export default transformers;
