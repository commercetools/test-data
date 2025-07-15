import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { ReferenceRest, ReferenceGraphql } from '@/models/commons';
import { DiscountCode } from '@/models/discount/discount-code';
import { discountCodeState } from './constants';
import type { TDiscountCodeInfoGraphql, TDiscountCodeInfoRest } from './types';

const commonFieldsConfig = {
  state: oneOf(...Object.values(discountCodeState)),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountCodeInfoRest> = {
  fields: {
    ...commonFieldsConfig,
    discountCode: fake(() => ReferenceRest.presets.discountCodeReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountCodeInfoGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      discountCode: fake(() => DiscountCode.random()),
      discountCodeRef: null,
      __typename: 'DiscountCodeInfo',
    },
    postBuild: (model) => {
      const discountCodeRef = model.discountCode
        ? ReferenceGraphql.presets
            .discountCodeReference()
            .id(model.discountCode.id)
            .buildGraphql()
        : model.discountCodeRef;

      return {
        ...model,
        discountCodeRef,
      };
    },
  };
