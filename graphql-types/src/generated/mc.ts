export type TMcMaybe<T> = T | null;
export type TMcInputMaybe<T> = TMcMaybe<T>;
export type TMcExact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type TMcMakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: TMcMaybe<T[SubKey]>;
};
export type TMcMakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: TMcMaybe<T[SubKey]>;
};
export type TMcMakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type TMcIncremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type TMcScalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type TMcAdditionalUserInfo = {
  firstName: TMcScalars['String']['input'];
  lastName: TMcScalars['String']['input'];
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
  group: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
  value: TMcScalars['Boolean']['output'];
};

export type TMcAppliedDataFence = TMcStoreDataFence;

export type TMcAppliedMenuVisibilities = {
  __typename?: 'AppliedMenuVisibilities';
  name: TMcScalars['String']['output'];
  value: TMcScalars['Boolean']['output'];
};

export type TMcAppliedPermission = {
  __typename?: 'AppliedPermission';
  name: TMcScalars['String']['output'];
  value: TMcScalars['Boolean']['output'];
};

export type TMcCartClassificationValue = {
  __typename?: 'CartClassificationValue';
  allLocaleLabels: Array<TMcMaybe<TMcLocalizedField>>;
  key: TMcScalars['String']['output'];
};

export type TMcChangeUserBusinessRole = {
  businessRole?: TMcInputMaybe<TMcScalars['String']['input']>;
};

export type TMcChangeUserLanguage = {
  language: TMcScalars['String']['input'];
};

export type TMcChangeUserName = {
  firstName: TMcScalars['String']['input'];
  lastName: TMcScalars['String']['input'];
};

export type TMcChangeUserNumberFormat = {
  numberFormat: TMcScalars['String']['input'];
};

export type TMcChangeUserPassword = {
  password: TMcScalars['String']['input'];
};

export type TMcDataFence = {
  type: TMcScalars['String']['output'];
};

export type TMcDeleteAccountRequest = {
  __typename?: 'DeleteAccountRequest';
  jwt?: TMcMaybe<TMcScalars['String']['output']>;
};

export type TMcDeletedUser = {
  __typename?: 'DeletedUser';
  id: TMcScalars['String']['output'];
};

export type TMcFeature = {
  __typename?: 'Feature';
  name: TMcScalars['String']['output'];
  reason?: TMcMaybe<TMcScalars['String']['output']>;
  value: TMcScalars['Boolean']['output'];
};

export type TMcIdTokenUserInfo = {
  __typename?: 'IdTokenUserInfo';
  additionalClaims?: TMcMaybe<TMcScalars['String']['output']>;
  aud: TMcScalars['String']['output'];
  email?: TMcMaybe<TMcScalars['String']['output']>;
  exp: TMcScalars['Float']['output'];
  iat?: TMcMaybe<TMcScalars['Float']['output']>;
  iss: TMcScalars['String']['output'];
  name?: TMcMaybe<TMcScalars['String']['output']>;
  sub: TMcScalars['String']['output'];
};

export type TMcImportResponse = {
  __typename?: 'ImportResponse';
  hasImportedSampleData?: TMcMaybe<TMcScalars['Boolean']['output']>;
  importedSampleData?: TMcMaybe<TMcScalars['String']['output']>;
  projectKey?: TMcMaybe<TMcScalars['String']['output']>;
};

export type TMcInvitationInput = {
  emails: Array<TMcScalars['String']['input']>;
  organization: TMcInvitationOrganizationInput;
  team: TMcInvitationTeamInput;
};

export type TMcInvitationOrganizationInput = {
  id: TMcScalars['ID']['input'];
  name?: TMcInputMaybe<TMcScalars['String']['input']>;
  version: TMcScalars['Int']['input'];
};

export type TMcInvitationQueryResult = {
  __typename?: 'InvitationQueryResult';
  gravatarHash?: TMcMaybe<TMcScalars['String']['output']>;
  hasValidEmail: TMcScalars['Boolean']['output'];
  isAlreadyAMemberOfTeam: TMcScalars['Boolean']['output'];
  isKnownUser: TMcScalars['Boolean']['output'];
  version: TMcScalars['Int']['output'];
};

export type TMcInvitationResult = {
  __typename?: 'InvitationResult';
  email: TMcScalars['String']['output'];
  jwt?: TMcMaybe<TMcScalars['String']['output']>;
  status: TMcInvitationStatus;
};

export enum TMcInvitationStatus {
  InvitationFailure = 'InvitationFailure',
  InvitationSent = 'InvitationSent',
  PendingRegistration = 'PendingRegistration',
}

export type TMcInvitationTeamInput = {
  id: TMcScalars['ID']['input'];
};

export type TMcInvitationWhereInput = {
  email: TMcScalars['String']['input'];
  organizationId: TMcScalars['ID']['input'];
  teamId: TMcScalars['ID']['input'];
};

export type TMcLocalizedField = {
  __typename?: 'LocalizedField';
  locale: TMcScalars['String']['output'];
  value: TMcScalars['String']['output'];
};

export type TMcMetaData = {
  createdAt: TMcScalars['String']['output'];
  lastModifiedAt: TMcScalars['String']['output'];
  version?: TMcMaybe<TMcScalars['Int']['output']>;
};

export type TMcMutation = {
  __typename?: 'Mutation';
  createMyOrganization?: TMcMaybe<TMcOrganizationCreated>;
  createMyProject?: TMcMaybe<TMcProjectPendingCreation>;
  createOAuthClient: TMcOAuthClient;
  createUserFromIdentity: TMcUser;
  deleteAccount: TMcDeletedUser;
  deleteOAuthClient: TMcOAuthClient;
  importSampleData: TMcImportResponse;
  invite: Array<TMcInvitationResult>;
  random: TMcScalars['String']['output'];
  resetPassword: TMcResetUser;
  sendLinkToDeleteAccount?: TMcMaybe<TMcDeleteAccountRequest>;
  sendLinkToResetPassword?: TMcMaybe<TMcResetPasswordRequest>;
  sendLinkToSignUp?: TMcMaybe<TMcSignUpRequest>;
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
  jwt: TMcScalars['String']['input'];
};

export type TMcMutation_DeleteOAuthClientArgs = {
  id: TMcScalars['ID']['input'];
};

export type TMcMutation_ImportSampleDataArgs = {
  dataset?: TMcInputMaybe<TMcSampleDatasets>;
  projectKey: TMcScalars['String']['input'];
};

export type TMcMutation_InviteArgs = {
  draft: TMcInvitationInput;
  origin?: TMcInputMaybe<TMcScalars['String']['input']>;
};

export type TMcMutation_RandomArgs = {
  byteLength: TMcScalars['Int']['input'];
};

export type TMcMutation_ResetPasswordArgs = {
  draft: TMcResetPasswordDraft;
  jwt: TMcScalars['String']['input'];
};

export type TMcMutation_SendLinkToResetPasswordArgs = {
  email: TMcScalars['String']['input'];
};

export type TMcMutation_SendLinkToSignUpArgs = {
  additionalInfo?: TMcInputMaybe<TMcAdditionalUserInfo>;
  email: TMcScalars['String']['input'];
  language?: TMcInputMaybe<TMcScalars['String']['input']>;
};

export type TMcMutation_SignUpArgs = {
  draft: TMcUserDraft;
  jwt: TMcScalars['String']['input'];
};

export type TMcMutation_UpdateUserArgs = {
  actions: Array<TMcUserUpdateAction>;
  version: TMcScalars['Int']['input'];
};

export type TMcMyPermissionInitializationInput = {
  teamId: TMcScalars['String']['input'];
};

export type TMcOAuthClient = {
  __typename?: 'OAuthClient';
  createdAt?: TMcMaybe<TMcScalars['String']['output']>;
  id: TMcScalars['ID']['output'];
  lastUsedAt?: TMcMaybe<TMcScalars['String']['output']>;
  name: TMcScalars['String']['output'];
  ownerId: TMcScalars['ID']['output'];
  permissions: Array<TMcProjectPermission>;
  secret: TMcScalars['String']['output'];
};

export type TMcOAuthClientCreationInput = {
  name: TMcScalars['String']['input'];
  ownerId: TMcScalars['ID']['input'];
  permissions: Array<TMcProjectPermissionInput>;
};

export type TMcOAuthClientQueryResult = TMcQueryResult & {
  __typename?: 'OAuthClientQueryResult';
  count: TMcScalars['Int']['output'];
  offset: TMcScalars['Int']['output'];
  results: Array<TMcOAuthClient>;
  total: TMcScalars['Int']['output'];
};

export type TMcOAuthClientTemplate = {
  __typename?: 'OAuthClientTemplate';
  key: TMcScalars['String']['output'];
  oAuthScopes: Array<TMcScalars['String']['output']>;
};

export type TMcOrganization = {
  __typename?: 'Organization';
  /** @deprecated This field will be removed in the future. */
  createdAt: TMcScalars['String']['output'];
  id: TMcScalars['ID']['output'];
  name: TMcScalars['String']['output'];
};

export type TMcOrganizationCreated = {
  __typename?: 'OrganizationCreated';
  id: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
  teams: Array<TMcOrganizationTeamsCreated>;
};

export type TMcOrganizationDraftType = {
  name: TMcScalars['String']['input'];
  ownerId: TMcScalars['String']['input'];
};

export type TMcOrganizationTeamsCreated = {
  __typename?: 'OrganizationTeamsCreated';
  id: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
};

export type TMcProject = TMcMetaData & {
  __typename?: 'Project';
  allAppliedActionRights: Array<TMcAppliedActionRight>;
  allAppliedDataFences: Array<TMcAppliedDataFence>;
  /** @deprecated This field has been moved into the menuPermissionsForAllApplications field. */
  allAppliedMenuVisibilities: Array<TMcAppliedMenuVisibilities>;
  allAppliedPermissions: Array<TMcAppliedPermission>;
  allPermissionsForAllApplications: TMcAllPermissionsForAllApplications;
  apiVersion: TMcScalars['String']['output'];
  countries: Array<TMcScalars['String']['output']>;
  createdAt: TMcScalars['String']['output'];
  currencies: Array<TMcScalars['String']['output']>;
  expiry: TMcProjectExpiry;
  initialized: TMcScalars['Boolean']['output'];
  isProductionProject: TMcScalars['Boolean']['output'];
  isUserAdminOfCurrentProject?: TMcMaybe<TMcScalars['Boolean']['output']>;
  key: TMcScalars['String']['output'];
  languages: Array<TMcScalars['String']['output']>;
  lastModifiedAt: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
  owner: TMcOrganization;
  plan: TMcScalars['String']['output'];
  sampleDataImportDataset?: TMcMaybe<TMcScalars['String']['output']>;
  shippingRateInputType?: TMcMaybe<TMcShippingRateInputType>;
  suspension: TMcProjectSuspension;
  version?: TMcMaybe<TMcScalars['Int']['output']>;
};

export type TMcProjectDraftType = {
  countries: Array<TMcScalars['String']['input']>;
  currencies: Array<TMcScalars['String']['input']>;
  deleteDaysAfterCreation?: TMcInputMaybe<TMcScalars['Int']['input']>;
  key: TMcScalars['String']['input'];
  languages: Array<TMcScalars['String']['input']>;
  messagesEnabled?: TMcInputMaybe<TMcScalars['Boolean']['input']>;
  name: TMcScalars['String']['input'];
  ownerId: TMcScalars['String']['input'];
};

export type TMcProjectExpiry = {
  __typename?: 'ProjectExpiry';
  daysLeft?: TMcMaybe<TMcScalars['Int']['output']>;
  isActive: TMcScalars['Boolean']['output'];
};

export type TMcProjectPendingCreation = {
  __typename?: 'ProjectPendingCreation';
  id: TMcScalars['String']['output'];
  key: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
  version: TMcScalars['Int']['output'];
};

export type TMcProjectPermission = {
  __typename?: 'ProjectPermission';
  key: TMcScalars['String']['output'];
  projectKey?: TMcMaybe<TMcScalars['String']['output']>;
  storeKey?: TMcMaybe<TMcScalars['String']['output']>;
};

export type TMcProjectPermissionInput = {
  key: TMcScalars['String']['input'];
  projectKey?: TMcInputMaybe<TMcScalars['String']['input']>;
  storeKey?: TMcInputMaybe<TMcScalars['String']['input']>;
};

export type TMcProjectQueryResult = TMcQueryResult & {
  __typename?: 'ProjectQueryResult';
  count: TMcScalars['Int']['output'];
  offset: TMcScalars['Int']['output'];
  results: Array<TMcProject>;
  total: TMcScalars['Int']['output'];
};

export type TMcProjectSuspension = {
  __typename?: 'ProjectSuspension';
  isActive: TMcScalars['Boolean']['output'];
  reason?: TMcMaybe<TMcProjectSuspensionReason>;
};

export enum TMcProjectSuspensionReason {
  Other = 'Other',
  Payment = 'Payment',
  TemporaryMaintenance = 'TemporaryMaintenance',
}

export type TMcQuery = {
  __typename?: 'Query';
  allFeatures: Array<TMcFeature>;
  allImpliedOAuthScopes: Array<TMcScalars['String']['output']>;
  allSupportedActionRights?: TMcMaybe<Array<TMcSupportedActionRight>>;
  allSupportedMenuVisibilities?: TMcMaybe<Array<TMcSupportedMenuVisibility>>;
  allSupportedOAuthScopes: Array<TMcScalars['String']['output']>;
  allSupportedOAuthScopesForOAuthClients: Array<TMcSupportedOAuthScopeForOAuthClient>;
  allSupportedResources?: TMcMaybe<Array<TMcSupportedResource>>;
  allSupportedStoreScopes?: TMcMaybe<Array<TMcSupportedStoreScope>>;
  amILoggedIn: TMcScalars['Boolean']['output'];
  invitation?: TMcMaybe<TMcInvitationQueryResult>;
  me?: TMcMaybe<TMcUser>;
  oAuthClient?: TMcMaybe<TMcOAuthClient>;
  oAuthClientTemplates: Array<TMcOAuthClientTemplate>;
  oAuthClients: TMcOAuthClientQueryResult;
  project?: TMcMaybe<TMcProject>;
  release?: TMcMaybe<TMcScalars['String']['output']>;
  releases?: TMcMaybe<TMcReleaseHistory>;
  storeOAuthScopes: Array<TMcScalars['String']['output']>;
  systemStatus: TMcSystemStatus;
};

export type TMcQuery_AllImpliedOAuthScopesArgs = {
  onlyConfiguredOnTrustedClient?: TMcInputMaybe<TMcScalars['Boolean']['input']>;
  resourceAccessPermissions: Array<TMcScalars['String']['input']>;
};

export type TMcQuery_InvitationArgs = {
  where?: TMcInputMaybe<TMcInvitationWhereInput>;
};

export type TMcQuery_OAuthClientArgs = {
  id: TMcScalars['String']['input'];
};

export type TMcQuery_OAuthClientsArgs = {
  limit?: TMcInputMaybe<TMcScalars['Int']['input']>;
  offset?: TMcInputMaybe<TMcScalars['Int']['input']>;
  sort?: TMcInputMaybe<Array<TMcScalars['String']['input']>>;
};

export type TMcQuery_ProjectArgs = {
  key?: TMcInputMaybe<TMcScalars['String']['input']>;
};

export type TMcQuery_ReleasesArgs = {
  limit?: TMcInputMaybe<TMcScalars['Int']['input']>;
  offset?: TMcInputMaybe<TMcScalars['Int']['input']>;
  origin: TMcReleaseOrigin;
};

export type TMcQueryResult = {
  count: TMcScalars['Int']['output'];
  offset: TMcScalars['Int']['output'];
  total: TMcScalars['Int']['output'];
};

export type TMcReference = {
  __typename?: 'Reference';
  id: TMcScalars['String']['output'];
  typeId: TMcScalars['String']['output'];
};

export type TMcReferenceInput = {
  id: TMcScalars['ID']['input'];
  typeId: TMcScalars['String']['input'];
};

export type TMcReleaseEntry = {
  __typename?: 'ReleaseEntry';
  description: TMcScalars['String']['output'];
  guid: TMcScalars['String']['output'];
  link: TMcScalars['String']['output'];
  releasedAt: TMcScalars['String']['output'];
  title: TMcScalars['String']['output'];
};

export type TMcReleaseHistory = {
  __typename?: 'ReleaseHistory';
  description: TMcScalars['String']['output'];
  entries: TMcReleaseQueryResult;
  link: TMcScalars['String']['output'];
  title: TMcScalars['String']['output'];
};

export type TMcReleaseHistory_EntriesArgs = {
  limit?: TMcInputMaybe<TMcScalars['Int']['input']>;
  offset?: TMcInputMaybe<TMcScalars['Int']['input']>;
};

export enum TMcReleaseOrigin {
  Ctp = 'ctp',
  Mc = 'mc',
}

export type TMcReleaseQueryResult = TMcQueryResult & {
  __typename?: 'ReleaseQueryResult';
  count: TMcScalars['Int']['output'];
  offset: TMcScalars['Int']['output'];
  results: Array<TMcReleaseEntry>;
  total: TMcScalars['Int']['output'];
};

export type TMcResetPasswordDraft = {
  password: TMcScalars['String']['input'];
};

export type TMcResetPasswordRequest = {
  __typename?: 'ResetPasswordRequest';
  jwt?: TMcMaybe<TMcScalars['String']['output']>;
};

export type TMcResetUser = {
  __typename?: 'ResetUser';
  id: TMcScalars['String']['output'];
};

export enum TMcSampleDatasets {
  B2B = 'B2B',
  B2Clifestyle = 'B2CLIFESTYLE',
  Goodstore = 'GOODSTORE',
}

export type TMcSetUserTimeZone = {
  timeZone?: TMcInputMaybe<TMcScalars['String']['input']>;
};

export type TMcShippingRateInputType = {
  __typename?: 'ShippingRateInputType';
  type: TMcShippingRateType;
  values?: TMcMaybe<Array<TMcMaybe<TMcCartClassificationValue>>>;
};

export enum TMcShippingRateType {
  CartClassification = 'CartClassification',
  CartScore = 'CartScore',
  CartValue = 'CartValue',
}

export type TMcSignUpRequest = {
  __typename?: 'SignUpRequest';
  jwt?: TMcMaybe<TMcScalars['String']['output']>;
};

export type TMcSignedUpUser = {
  __typename?: 'SignedUpUser';
  id: TMcScalars['String']['output'];
};

export type TMcStoreDataFence = TMcDataFence & {
  __typename?: 'StoreDataFence';
  group: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
  type: TMcScalars['String']['output'];
  value: TMcScalars['String']['output'];
};

export type TMcSupportedActionRight = {
  __typename?: 'SupportedActionRight';
  group: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
};

export type TMcSupportedMenuVisibility = {
  __typename?: 'SupportedMenuVisibility';
  group: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
};

export type TMcSupportedOAuthScopeForOAuthClient = {
  __typename?: 'SupportedOAuthScopeForOAuthClient';
  name: TMcScalars['String']['output'];
};

export type TMcSupportedResource = {
  __typename?: 'SupportedResource';
  name: TMcScalars['String']['output'];
};

export type TMcSupportedStoreScope = {
  __typename?: 'SupportedStoreScope';
  group: TMcScalars['String']['output'];
  name: TMcScalars['String']['output'];
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
  businessRole?: TMcMaybe<TMcScalars['String']['output']>;
  createdAt: TMcScalars['String']['output'];
  defaultProjectKey?: TMcMaybe<TMcScalars['String']['output']>;
  email: TMcScalars['String']['output'];
  firstName: TMcScalars['String']['output'];
  gravatarHash: TMcScalars['String']['output'];
  id: TMcScalars['ID']['output'];
  idTokenUserInfo?: TMcMaybe<TMcIdTokenUserInfo>;
  language: TMcScalars['String']['output'];
  lastModifiedAt: TMcScalars['String']['output'];
  lastName: TMcScalars['String']['output'];
  launchdarklyTrackingCloudEnvironment: TMcScalars['String']['output'];
  launchdarklyTrackingGroup: TMcScalars['String']['output'];
  launchdarklyTrackingId: TMcScalars['String']['output'];
  launchdarklyTrackingSubgroup?: TMcMaybe<TMcScalars['String']['output']>;
  launchdarklyTrackingTeam?: TMcMaybe<Array<TMcScalars['String']['output']>>;
  /** @deprecated This field is replaced by launchdarklyTrackingCloudEnvironment. */
  launchdarklyTrackingTenant: TMcScalars['String']['output'];
  numberFormat: TMcScalars['String']['output'];
  projects: TMcProjectQueryResult;
  timeZone?: TMcMaybe<TMcScalars['String']['output']>;
  /** @deprecated This field is not used anymore. */
  verificationStatus: TMcVerificationStatus;
  version?: TMcMaybe<TMcScalars['Int']['output']>;
};

export type TMcUserDraft = {
  businessRole?: TMcInputMaybe<TMcScalars['String']['input']>;
  firstName: TMcScalars['String']['input'];
  lastName: TMcScalars['String']['input'];
  password: TMcScalars['String']['input'];
};

export type TMcUserUpdateAction = {
  changeBusinessRole?: TMcInputMaybe<TMcChangeUserBusinessRole>;
  changeLanguage?: TMcInputMaybe<TMcChangeUserLanguage>;
  changeName?: TMcInputMaybe<TMcChangeUserName>;
  changeNumberFormat?: TMcInputMaybe<TMcChangeUserNumberFormat>;
  changePassword?: TMcInputMaybe<TMcChangeUserPassword>;
  setTimeZone?: TMcInputMaybe<TMcSetUserTimeZone>;
};

export enum TMcVerificationStatus {
  Unverified = 'Unverified',
  Verified = 'Verified',
}
