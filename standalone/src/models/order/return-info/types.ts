import type { ReturnInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpReturnInfo } from '@/graphql-types';

/**
 * @deprecated use `TReturnInfoRest` instead
 */
export type TReturnInfo = ReturnInfo;
export type TReturnInfoRest = ReturnInfo;
export type TReturnInfoGraphql = TCtpReturnInfo;

export type TCreateReturnInfoBuilder<
  TReturnInfoModel extends TReturnInfoRest | TReturnInfoGraphql,
> = () => TBuilder<TReturnInfoModel>;
