import type { TBuilder } from '@commercetools-test-data/core';
import type {
  TMcUser as TMcUserGraphql,
  TMcIdTokenUserInfo as TMcIdTokenUserInfoGraphql,
} from '@commercetools-test-data/graphql-types/src/generated/mc';
export type { TMcUserGraphql, TMcIdTokenUserInfoGraphql };

export type TMcUser = Omit<TMcUserGraphql, '__typename'>;
export type TMcIdTokenUserInfo = Omit<TMcIdTokenUserInfoGraphql, '__typename'>;

export type TMcUserDraft = {
  password: string;
  firstName: string;
  lastName: string;
  businessRole?: string;
};

export type TMcUserBuilder = TBuilder<TMcUser>;
export type TMcUserDraftBuilder = TBuilder<TMcUserDraft>;
export type TMcIdTokenUserInfoBuilder = TBuilder<TMcIdTokenUserInfo>;

export type TMcCreateUserBuilder = () => TMcUserBuilder;
export type TMcCreateUserDraftBuilder = () => TMcUserDraftBuilder;
export type TMcCreateIdTokenUserInfoBuilder = () => TMcIdTokenUserInfoBuilder;
