import { RestModelBuilder, GraphqlModelBuilder } from './builders';
export * from './types';

export const PaymentInfoRest = {
  random: RestModelBuilder,
};

export const PaymentInfoGraphql = {
  random: GraphqlModelBuilder,
};
