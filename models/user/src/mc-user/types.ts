import type { TBuilder } from '@commercetools-test-data/core';
import type { TMcProject } from '@commercetools-test-data/project';

type ProjectQueryResult = {
  count: number;
  offset: number;
  total: number;
  results: TMcProject[];
};

export type TIdTokenUserInfo = {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat?: number;
  email?: string;
  name?: string;
  additionalClaims?: string;
};

export type TIdTokenUserInfoGraphql = TIdTokenUserInfo & {
  __typename: 'IdTokenUserInfo';
};

export type TMcUser = {
  id: string;
  version: number;
  createdAt: string;
  lastModifiedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  language: string;
  numberFormat: string;
  timeZone?: string;
  launchdarklyTrackingId: string;
  launchdarklyTrackingGroup: string;
  launchdarklyTrackingSubgroup?: string;
  launchdarklyTrackingTeam: string[];
  launchdarklyTrackingTenant: string;
  launchdarklyTrackingCloudEnvironment: string;
  gravatarHash: string;
  defaultProjectKey?: string;
  projects: ProjectQueryResult;
  businessRole: string;
  idTokenUserInfo?: TIdTokenUserInfo;
  verificationStatus: 'Verified' | 'Unverified';
};

export type TMcUserGraphql = TMcUser & {
  __typename: 'User';
};

export type TMcUserDraft = {
  email: string;
  firstName: string;
  lastName: string;
};

export type TMcUserDraftGraphql = TMcUserDraft & {
  __typename: 'UserDraft';
};

export type TMcUserBuilder = TBuilder<TMcUser>;
export type TMcUserDraftBuilder = TBuilder<TMcUserDraft>;
export type TIdTokenUserInfoBuilder = TBuilder<TIdTokenUserInfo>;

export type TMcCreateUserBuilder = () => TMcUserBuilder;
export type TMcCreateUserDraftBuilder = () => TMcUserDraftBuilder;
export type TMcCreateIdTokenUserInfoBuilder = () => TIdTokenUserInfoBuilder;
