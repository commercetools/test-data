import type { ReturnInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';

export type TReturnInfo = ReturnInfo;

export type TReturnInfoGraphql = TReturnInfo & {
  __typename: 'ReturnInfo';
};

export type TReturnInfoBuilder = TBuilder<ReturnInfo>;
export type TCreateReturnInfoBuilder = () => TReturnInfoBuilder;
