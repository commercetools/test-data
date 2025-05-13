import { Transformer } from '@/core';
import { KeyReference, Reference, TReferenceGraphql } from '@/models/commons';
import type { TZoneRate, TZoneRateGraphql, TZoneRateRest } from './types';

const transformers = {
  default: Transformer<TZoneRate, TZoneRate>('default', {
    buildFields: ['zone', 'shippingRates'],
  }),
  rest: Transformer<TZoneRate, TZoneRateRest>('rest', {
    buildFields: ['zone', 'shippingRates'],

    replaceFields: ({ fields }) => ({
      ...fields,
      zone: KeyReference.random().key(fields.zone.key!).typeId('zone').build(),
    }),
  }),
  graphql: Transformer<TZoneRate, TZoneRateGraphql>('graphql', {
    buildFields: ['zone', 'shippingRates'],

    addFields: ({ fields }) => {
      const zoneRef: TReferenceGraphql = Reference.random()
        .id(fields.zone.id)
        .typeId('zone')
        .buildGraphql();

      return {
        zoneRef,
        __typename: 'ZoneRate',
      };
    },
  }),
};

export default transformers;
