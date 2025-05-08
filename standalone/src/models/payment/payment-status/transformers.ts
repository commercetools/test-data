import { Transformer } from '../../../core';
import { Reference } from '../../commons';
import type { TPaymentStatus, TPaymentStatusGraphql } from './types';

const transformers = {
  default: Transformer<TPaymentStatus, TPaymentStatus>('default', {
    buildFields: ['state'],
  }),
  rest: Transformer<TPaymentStatus, TPaymentStatus>('rest', {
    buildFields: [],
    addFields: ({ fields }) => ({
      ...fields,
      state: Reference.random().typeId('state').build(),
    }),
  }),
  graphql: Transformer<TPaymentStatus, TPaymentStatusGraphql>('graphql', {
    buildFields: ['state'],
    addFields: () => ({
      __typename: 'PaymentStatus',
      // TODO: transform from field when state model is available
      stateRef: Reference.random().typeId('state').buildGraphql(),
    }),
  }),
};

export default transformers;
