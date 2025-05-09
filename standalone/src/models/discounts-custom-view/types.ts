import type { TBuilder } from '../../core';
import type {
  TMcSettingsDiscountsCustomView,
  TMcSettingsDiscountsCustomViewInput,
} from '../../graphql-types';
import type { TLocalizedString, TLocalizedStringGraphql } from '../commons';

export type TDiscountsCustomView = Omit<
  TMcSettingsDiscountsCustomView,
  '__typename' | 'nameAllLocales'
> & {
  name: TLocalizedString;
};
export type TDiscountsCustomViewInput = Omit<
  TMcSettingsDiscountsCustomViewInput,
  '__typename' | 'nameAllLocales'
> & {
  name: TLocalizedString;
};

export type TDiscountsCustomViewGraphql = TDiscountsCustomView & {
  __typename: 'DiscountsCustomView';
  nameAllLocales: TLocalizedStringGraphql | null;
};
export type TDiscountsCustomViewInputGraphql = TDiscountsCustomViewInput & {
  nameAllLocales: TLocalizedStringGraphql | null;
};

export type TDiscountsCustomViewBuilder = TBuilder<TDiscountsCustomView>;
export type TDiscountsCustomViewInputBuilder =
  TBuilder<TDiscountsCustomViewInput>;

export type TCreateDiscountsCustomViewBuilder =
  () => TDiscountsCustomViewBuilder;
export type TCreateDiscountsCustomViewInputBuilder =
  () => TDiscountsCustomViewInputBuilder;
