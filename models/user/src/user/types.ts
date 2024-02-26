import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TCoreBusinessRole,
  TCoreUser,
} from '@commercetools-test-data/graphql-types/src/generated/core';

export type TUser = Omit<TCoreUser, '__typename'>;

export type TUserGraphql = TCoreUser;

export type TUserDraft = {
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  language: string;
  numberFormat?: string;
  businessRole?: TCoreBusinessRole;
};

export type TUserBuilder = TBuilder<TUser>;
export type TUserDraftBuilder = TBuilder<TUserDraft>;
export type TCreateUserBuilder = () => TUserBuilder;
export type TCreateUserDraftBuilder = () => TUserDraftBuilder;
