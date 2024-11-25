export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type TMcAdditionalUserInfo = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type TMcAllPermissionsForAllApplications = {
  __typename?: 'AllPermissionsForAllApplications';
  allAppliedActionRights: Array<TMcAppliedActionRight>;
  allAppliedDataFences: Array<TMcAppliedDataFence>;
  allAppliedMenuVisibilities: Array<TMcAppliedMenuVisibilities>;
  allAppliedPermissions: Array<TMcAppliedPermission>;
};

export type TMcAppliedActionRight = {
  __typename?: 'AppliedActionRight';
  group: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type TMcAppliedDataFence = TMcStoreDataFence;

export type TMcAppliedMenuVisibilities = {
  __typename?: 'AppliedMenuVisibilities';
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type TMcAppliedPermission = {
  __typename?: 'AppliedPermission';
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type TMcCartClassificationValue = {
  __typename?: 'CartClassificationValue';
  allLocaleLabels: Array<Maybe<TMcLocalizedField>>;
  key: Scalars['String']['output'];
};

export type TMcChangeUserBusinessRole = {
  businessRole?: InputMaybe<Scalars['String']['input']>;
};

export type TMcChangeUserLanguage = {
  language: Scalars['String']['input'];
};

export type TMcChangeUserName = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type TMcChangeUserNumberFormat = {
  numberFormat: Scalars['String']['input'];
};

export type TMcChangeUserPassword = {
  password: Scalars['String']['input'];
};

export type TMcDataFence = {
  type: Scalars['String']['output'];
};

export type TMcDeleteAccountRequest = {
  __typename?: 'DeleteAccountRequest';
  jwt?: Maybe<Scalars['String']['output']>;
};

export type TMcDeletedUser = {
  __typename?: 'DeletedUser';
  id: Scalars['String']['output'];
};

export type TMcFeature = {
  __typename?: 'Feature';
  name: Scalars['String']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  value: Scalars['Boolean']['output'];
};

export type TMcIdTokenUserInfo = {
  __typename?: 'IdTokenUserInfo';
  additionalClaims?: Maybe<Scalars['String']['output']>;
  aud: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  exp: Scalars['Float']['output'];
  iat?: Maybe<Scalars['Float']['output']>;
  iss: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sub: Scalars['String']['output'];
};

export type TMcImportResponse = {
  __typename?: 'ImportResponse';
  hasImportedSampleData?: Maybe<Scalars['Boolean']['output']>;
  importedSampleData?: Maybe<Scalars['String']['output']>;
  projectKey?: Maybe<Scalars['String']['output']>;
};

export type TMcInvitationInput = {
  emails: Array<Scalars['String']['input']>;
  organization: TMcInvitationOrganizationInput;
  team: TMcInvitationTeamInput;
};

export type TMcInvitationOrganizationInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Int']['input'];
};

export type TMcInvitationQueryResult = {
  __typename?: 'InvitationQueryResult';
  gravatarHash?: Maybe<Scalars['String']['output']>;
  hasValidEmail: Scalars['Boolean']['output'];
  isAlreadyAMemberOfTeam: Scalars['Boolean']['output'];
  isKnownUser: Scalars['Boolean']['output'];
  version: Scalars['Int']['output'];
};

export type TMcInvitationResult = {
  __typename?: 'InvitationResult';
  email: Scalars['String']['output'];
  jwt?: Maybe<Scalars['String']['output']>;
  status: TMcInvitationStatus;
};

export enum TMcInvitationStatus {
  InvitationFailure = 'InvitationFailure',
  InvitationSent = 'InvitationSent',
  PendingRegistration = 'PendingRegistration',
}

export type TMcInvitationTeamInput = {
  id: Scalars['ID']['input'];
};

export type TMcInvitationWhereInput = {
  email: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};

export type TMcLocalizedField = {
  __typename?: 'LocalizedField';
  locale: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TMcMetaData = {
  createdAt: Scalars['String']['output'];
  lastModifiedAt: Scalars['String']['output'];
  version?: Maybe<Scalars['Int']['output']>;
};

export type TMcMutation = {
  __typename?: 'Mutation';
  createMyOrganization?: Maybe<TMcOrganizationCreated>;
  createMyProject?: Maybe<TMcProjectPendingCreation>;
  createOAuthClient: TMcOAuthClient;
  createUserFromIdentity: TMcUser;
  deleteAccount: TMcDeletedUser;
  deleteOAuthClient: TMcOAuthClient;
  importSampleData: TMcImportResponse;
  invite: Array<TMcInvitationResult>;
  random: Scalars['String']['output'];
  resetPassword: TMcResetUser;
  sendLinkToDeleteAccount?: Maybe<TMcDeleteAccountRequest>;
  sendLinkToResetPassword?: Maybe<TMcResetPasswordRequest>;
  sendLinkToSignUp?: Maybe<TMcSignUpRequest>;
  signUp: TMcSignedUpUser;
  updateUser: TMcUser;
};

export type TMcMutation_CreateMyOrganizationArgs = {
  draft: TMcOrganizationDraftType;
};

export type TMcMutation_CreateMyProjectArgs = {
  draft: TMcProjectDraftType;
  myPermission: TMcMyPermissionInitializationInput;
};

export type TMcMutation_CreateOAuthClientArgs = {
  draft: TMcOAuthClientCreationInput;
};

export type TMcMutation_DeleteAccountArgs = {
  jwt: Scalars['String']['input'];
};

export type TMcMutation_DeleteOAuthClientArgs = {
  id: Scalars['ID']['input'];
};

export type TMcMutation_ImportSampleDataArgs = {
  dataset?: InputMaybe<TMcSampleDatasets>;
  projectKey: Scalars['String']['input'];
};

export type TMcMutation_InviteArgs = {
  draft: TMcInvitationInput;
  origin?: InputMaybe<Scalars['String']['input']>;
};

export type TMcMutation_RandomArgs = {
  byteLength: Scalars['Int']['input'];
};

export type TMcMutation_ResetPasswordArgs = {
  draft: TMcResetPasswordDraft;
  jwt: Scalars['String']['input'];
};

export type TMcMutation_SendLinkToResetPasswordArgs = {
  email: Scalars['String']['input'];
};

export type TMcMutation_SendLinkToSignUpArgs = {
  additionalInfo?: InputMaybe<TMcAdditionalUserInfo>;
  email: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
};

export type TMcMutation_SignUpArgs = {
  draft: TMcUserDraft;
  jwt: Scalars['String']['input'];
};

export type TMcMutation_UpdateUserArgs = {
  actions: Array<TMcUserUpdateAction>;
  version: Scalars['Int']['input'];
};

export type TMcMyPermissionInitializationInput = {
  teamId: Scalars['String']['input'];
};

export type TMcOAuthClient = {
  __typename?: 'OAuthClient';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastUsedAt?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ownerId: Scalars['ID']['output'];
  permissions: Array<TMcProjectPermission>;
  secret: Scalars['String']['output'];
};

export type TMcOAuthClientCreationInput = {
  name: Scalars['String']['input'];
  ownerId: Scalars['ID']['input'];
  permissions: Array<TMcProjectPermissionInput>;
};

export type TMcOAuthClientQueryResult = TMcQueryResult & {
  __typename?: 'OAuthClientQueryResult';
  count: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TMcOAuthClient>;
  total: Scalars['Int']['output'];
};

export type TMcOAuthClientTemplate = {
  __typename?: 'OAuthClientTemplate';
  key: Scalars['String']['output'];
  oAuthScopes: Array<Scalars['String']['output']>;
};

export type TMcOrganization = {
  __typename?: 'Organization';
  /** @deprecated This field will be removed in the future. */
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TMcOrganizationCreated = {
  __typename?: 'OrganizationCreated';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  teams: Array<TMcOrganizationTeamsCreated>;
};

export type TMcOrganizationDraftType = {
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
};

export type TMcOrganizationTeamsCreated = {
  __typename?: 'OrganizationTeamsCreated';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TMcProject = TMcMetaData & {
  __typename?: 'Project';
  allAppliedActionRights: Array<TMcAppliedActionRight>;
  allAppliedDataFences: Array<TMcAppliedDataFence>;
  /** @deprecated This field has been moved into the menuPermissionsForAllApplications field. */
  allAppliedMenuVisibilities: Array<TMcAppliedMenuVisibilities>;
  allAppliedPermissions: Array<TMcAppliedPermission>;
  allPermissionsForAllApplications: TMcAllPermissionsForAllApplications;
  apiVersion: Scalars['String']['output'];
  countries: Array<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  currencies: Array<Scalars['String']['output']>;
  expiry: TMcProjectExpiry;
  initialized: Scalars['Boolean']['output'];
  isProductionProject: Scalars['Boolean']['output'];
  isUserAdminOfCurrentProject?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  languages: Array<Scalars['String']['output']>;
  lastModifiedAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: TMcOrganization;
  plan: Scalars['String']['output'];
  sampleDataImportDataset?: Maybe<Scalars['String']['output']>;
  shippingRateInputType?: Maybe<TMcShippingRateInputType>;
  suspension: TMcProjectSuspension;
  version?: Maybe<Scalars['Int']['output']>;
};

export type TMcProjectDraftType = {
  countries: Array<Scalars['String']['input']>;
  currencies: Array<Scalars['String']['input']>;
  deleteDaysAfterCreation?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
  languages: Array<Scalars['String']['input']>;
  messagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
};

export type TMcProjectExpiry = {
  __typename?: 'ProjectExpiry';
  daysLeft?: Maybe<Scalars['Int']['output']>;
  isActive: Scalars['Boolean']['output'];
};

export type TMcProjectPendingCreation = {
  __typename?: 'ProjectPendingCreation';
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type TMcProjectPermission = {
  __typename?: 'ProjectPermission';
  key: Scalars['String']['output'];
  projectKey?: Maybe<Scalars['String']['output']>;
  storeKey?: Maybe<Scalars['String']['output']>;
};

export type TMcProjectPermissionInput = {
  key: Scalars['String']['input'];
  projectKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TMcProjectQueryResult = TMcQueryResult & {
  __typename?: 'ProjectQueryResult';
  count: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TMcProject>;
  total: Scalars['Int']['output'];
};

export type TMcProjectSuspension = {
  __typename?: 'ProjectSuspension';
  isActive: Scalars['Boolean']['output'];
  reason?: Maybe<TMcProjectSuspensionReason>;
};

export enum TMcProjectSuspensionReason {
  Other = 'Other',
  Payment = 'Payment',
  TemporaryMaintenance = 'TemporaryMaintenance',
}

export type TMcQuery = {
  __typename?: 'Query';
  allFeatures: Array<TMcFeature>;
  allImpliedOAuthScopes: Array<Scalars['String']['output']>;
  allSupportedActionRights?: Maybe<Array<TMcSupportedActionRight>>;
  allSupportedMenuVisibilities?: Maybe<Array<TMcSupportedMenuVisibility>>;
  allSupportedOAuthScopes: Array<Scalars['String']['output']>;
  allSupportedOAuthScopesForOAuthClients: Array<TMcSupportedOAuthScopeForOAuthClient>;
  allSupportedResources?: Maybe<Array<TMcSupportedResource>>;
  allSupportedStoreScopes?: Maybe<Array<TMcSupportedStoreScope>>;
  amILoggedIn: Scalars['Boolean']['output'];
  invitation?: Maybe<TMcInvitationQueryResult>;
  me?: Maybe<TMcUser>;
  oAuthClient?: Maybe<TMcOAuthClient>;
  oAuthClientTemplates: Array<TMcOAuthClientTemplate>;
  oAuthClients: TMcOAuthClientQueryResult;
  project?: Maybe<TMcProject>;
  release?: Maybe<Scalars['String']['output']>;
  releases?: Maybe<TMcReleaseHistory>;
  storeOAuthScopes: Array<Scalars['String']['output']>;
  systemStatus: TMcSystemStatus;
};

export type TMcQuery_AllImpliedOAuthScopesArgs = {
  onlyConfiguredOnTrustedClient?: InputMaybe<Scalars['Boolean']['input']>;
  resourceAccessPermissions: Array<Scalars['String']['input']>;
};

export type TMcQuery_InvitationArgs = {
  where?: InputMaybe<TMcInvitationWhereInput>;
};

export type TMcQuery_OAuthClientArgs = {
  id: Scalars['String']['input'];
};

export type TMcQuery_OAuthClientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TMcQuery_ProjectArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TMcQuery_ReleasesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  origin: TMcReleaseOrigin;
};

export type TMcQueryResult = {
  count: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TMcReference = {
  __typename?: 'Reference';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TMcReferenceInput = {
  id: Scalars['ID']['input'];
  typeId: Scalars['String']['input'];
};

export type TMcReleaseEntry = {
  __typename?: 'ReleaseEntry';
  description: Scalars['String']['output'];
  guid: Scalars['String']['output'];
  link: Scalars['String']['output'];
  releasedAt: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TMcReleaseHistory = {
  __typename?: 'ReleaseHistory';
  description: Scalars['String']['output'];
  entries: TMcReleaseQueryResult;
  link: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TMcReleaseHistory_EntriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export enum TMcReleaseOrigin {
  Ctp = 'ctp',
  Mc = 'mc',
}

export type TMcReleaseQueryResult = TMcQueryResult & {
  __typename?: 'ReleaseQueryResult';
  count: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TMcReleaseEntry>;
  total: Scalars['Int']['output'];
};

export type TMcResetPasswordDraft = {
  password: Scalars['String']['input'];
};

export type TMcResetPasswordRequest = {
  __typename?: 'ResetPasswordRequest';
  jwt?: Maybe<Scalars['String']['output']>;
};

export type TMcResetUser = {
  __typename?: 'ResetUser';
  id: Scalars['String']['output'];
};

export enum TMcSampleDatasets {
  B2B = 'B2B',
  B2Clifestyle = 'B2CLIFESTYLE',
  Goodstore = 'GOODSTORE',
}

export type TMcSetUserTimeZone = {
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type TMcShippingRateInputType = {
  __typename?: 'ShippingRateInputType';
  type: TMcShippingRateType;
  values?: Maybe<Array<Maybe<TMcCartClassificationValue>>>;
};

export enum TMcShippingRateType {
  CartClassification = 'CartClassification',
  CartScore = 'CartScore',
  CartValue = 'CartValue',
}

export type TMcSignUpRequest = {
  __typename?: 'SignUpRequest';
  jwt?: Maybe<Scalars['String']['output']>;
};

export type TMcSignedUpUser = {
  __typename?: 'SignedUpUser';
  id: Scalars['String']['output'];
};

export type TMcStoreDataFence = TMcDataFence & {
  __typename?: 'StoreDataFence';
  group: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TMcSupportedActionRight = {
  __typename?: 'SupportedActionRight';
  group: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TMcSupportedMenuVisibility = {
  __typename?: 'SupportedMenuVisibility';
  group: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TMcSupportedOAuthScopeForOAuthClient = {
  __typename?: 'SupportedOAuthScopeForOAuthClient';
  name: Scalars['String']['output'];
};

export type TMcSupportedResource = {
  __typename?: 'SupportedResource';
  name: Scalars['String']['output'];
};

export type TMcSupportedStoreScope = {
  __typename?: 'SupportedStoreScope';
  group: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum TMcSystemOperabilityStatus {
  Degraded = 'DEGRADED',
  Operational = 'OPERATIONAL',
  Outage = 'OUTAGE',
}

export type TMcSystemStatus = {
  __typename?: 'SystemStatus';
  status: TMcSystemOperabilityStatus;
};

export type TMcUser = TMcMetaData & {
  __typename?: 'User';
  businessRole?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  defaultProjectKey?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gravatarHash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idTokenUserInfo?: Maybe<TMcIdTokenUserInfo>;
  language: Scalars['String']['output'];
  lastModifiedAt: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  launchdarklyTrackingCloudEnvironment: Scalars['String']['output'];
  launchdarklyTrackingGroup: Scalars['String']['output'];
  launchdarklyTrackingId: Scalars['String']['output'];
  launchdarklyTrackingSubgroup?: Maybe<Scalars['String']['output']>;
  launchdarklyTrackingTeam?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated This field is replaced by launchdarklyTrackingCloudEnvironment. */
  launchdarklyTrackingTenant: Scalars['String']['output'];
  numberFormat: Scalars['String']['output'];
  projects: TMcProjectQueryResult;
  timeZone?: Maybe<Scalars['String']['output']>;
  /** @deprecated This field is not used anymore. */
  verificationStatus: TMcVerificationStatus;
  version?: Maybe<Scalars['Int']['output']>;
};

export type TMcUserDraft = {
  businessRole?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type TMcUserUpdateAction = {
  changeBusinessRole?: InputMaybe<TMcChangeUserBusinessRole>;
  changeLanguage?: InputMaybe<TMcChangeUserLanguage>;
  changeName?: InputMaybe<TMcChangeUserName>;
  changeNumberFormat?: InputMaybe<TMcChangeUserNumberFormat>;
  changePassword?: InputMaybe<TMcChangeUserPassword>;
  setTimeZone?: InputMaybe<TMcSetUserTimeZone>;
};

export enum TMcVerificationStatus {
  Unverified = 'Unverified',
  Verified = 'Verified',
}
