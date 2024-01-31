import type { TBuilder } from '@commercetools-test-data/core';

type BusinessRole =
  | 'ExecutiveManagement'
  | 'CustomerService'
  | 'Marketing'
  | 'SalesAndECommerceManager'
  | 'ProductProjectManagerOrOwner'
  | 'Architect'
  | 'Engineer'
  | 'Other';

export type TUser = {
  id: string;
  version: number;
  email: string;
  lowercaseEmail: string;
  firstName: string;
  lastName: string;
  password: string;
  language: string;
  numberFormat: string;
  businessRole: BusinessRole;
  createdAt: string;
  lastModifiedAt: string;
  lastLoginAt: string;
};

export type TUserGraphql = TUser & {
  __typename: 'User';
};

export type TUserDraft = {
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  language: string;
  numberFormat?: string;
  businessRole: BusinessRole;
};

export type TUserDraftGraphql = TUserDraft & {
  __typename: 'UserDraft';
};

export type TUserBuilder = TBuilder<TUser>;
export type TUserDraftBuilder = TBuilder<TUserDraft>;
export type TCreateUserBuilder = () => TUserBuilder;
export type TCreateUserDraftBuilder = () => TUserDraftBuilder;
