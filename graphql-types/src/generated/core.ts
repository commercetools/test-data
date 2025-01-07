type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Country: { input: unknown; output: unknown };
  Currency: { input: unknown; output: unknown };
  DateTime: { input: unknown; output: unknown };
  DateTimeZone: { input: unknown; output: unknown };
  Locale: { input: unknown; output: unknown };
  Long: { input: unknown; output: unknown };
};

export type TCoreAddTeam = {
  members?: InputMaybe<Array<TCoreReferenceInput>>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreAddTeamMembership = {
  teamId: Scalars['String']['input'];
  user: TCoreReferenceInput;
};

export type TCoreAttributeGroupLimits = {
  __typename?: 'AttributeGroupLimits';
  maxTotalAttributeGroups?: Maybe<Scalars['Int']['output']>;
};

export type TCoreAttribution = {
  __typename?: 'Attribution';
  clientId?: Maybe<Scalars['String']['output']>;
  source: TCoreAttributionSource;
  userRef?: Maybe<TCoreReference>;
};

export enum TCoreAttributionSource {
  Export = 'Export',
  Import = 'Import',
}

/** AWS S3 container config */
export type TCoreAwsContainer = {
  __typename?: 'AwsContainer';
  /** Public bucket url, without the project part */
  bucketUrl: Scalars['String']['output'];
  /** Project part of the object path on s3 */
  projectPrefix: Scalars['String']['output'];
};

/** Azure Blob Storage container config */
export type TCoreAzureBlobStorageContainer = {
  __typename?: 'AzureBlobStorageContainer';
  /** Project part of the object path on s3 */
  baseUrl: Scalars['String']['output'];
  /** Public bucket url, without the project part */
  name: Scalars['String']['output'];
};

export enum TCoreBusinessRole {
  /** Architect role. */
  Architect = 'Architect',
  /** Customer Service role. */
  CustomerService = 'CustomerService',
  /** Engineer role. */
  Engineer = 'Engineer',
  /** Executive Management role. */
  ExecutiveManagement = 'ExecutiveManagement',
  /** Marketing role. */
  Marketing = 'Marketing',
  /** Other role. */
  Other = 'Other',
  /** ProductProjectManagerOrOwner role. */
  ProductProjectManagerOrOwner = 'ProductProjectManagerOrOwner',
  /** SalesAndECommerceManager role. */
  SalesAndECommerceManager = 'SalesAndECommerceManager',
}

export type TCoreBusinessUnitLimits = {
  __typename?: 'BusinessUnitLimits';
  maxAssociateRoles?: Maybe<Scalars['Int']['output']>;
  maxAssociates?: Maybe<Scalars['Int']['output']>;
  maxDepthLimit?: Maybe<Scalars['Int']['output']>;
  maxDivisions?: Maybe<Scalars['Int']['output']>;
};

export type TCoreCartClassificationType = TCoreShippingRateInputType & {
  __typename?: 'CartClassificationType';
  type: Scalars['String']['output'];
  values: Array<TCoreShippingRateInputLocalizedEnumValue>;
};

export type TCoreCartDiscountLimits = {
  __typename?: 'CartDiscountLimits';
  withoutDiscountCodeLimit?: Maybe<Scalars['Long']['output']>;
};

export type TCoreCartLimits = {
  __typename?: 'CartLimits';
  maxCarts?: Maybe<Scalars['Long']['output']>;
};

export type TCoreCartScoreType = TCoreShippingRateInputType & {
  __typename?: 'CartScoreType';
  type: Scalars['String']['output'];
};

export type TCoreCartValueType = TCoreShippingRateInputType & {
  __typename?: 'CartValueType';
  type: Scalars['String']['output'];
};

export type TCoreCategoryLimits = {
  __typename?: 'CategoryLimits';
  maxTotalCategories?: Maybe<Scalars['Int']['output']>;
};

export type TCoreCdnContainerConfiguration = {
  __typename?: 'CdnContainerConfiguration';
  enabled: Scalars['Boolean']['output'];
};

export type TCoreChangeName = {
  name: Scalars['String']['input'];
};

export type TCoreChangeTeamName = {
  name: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};

export type TCoreClustersConfig = {
  __typename?: 'ClustersConfig';
  db?: Maybe<TCoreDbClustersConfig>;
  elasticsearch?: Maybe<TCoreEsCluster>;
};

export type TCoreClustersConfigInput = {
  db?: InputMaybe<TCoreDbClustersConfigInput>;
  elasticsearch?: InputMaybe<TCoreEsClusterInput>;
};

export type TCoreCreateOrganizationCommand = {
  defaultClusters?: InputMaybe<TCoreClustersConfigInput>;
  name: Scalars['String']['input'];
  owner: TCoreReferenceInput;
};

export type TCoreCreatePermissionCommand = {
  actionRightPermissions?: InputMaybe<Array<Scalars['String']['input']>>;
  dataFences?: InputMaybe<Array<TCoreDataFenceDraft>>;
  group: Scalars['String']['input'];
  hiddenMenuItems?: InputMaybe<Array<Scalars['String']['input']>>;
  owner: TCoreReferenceInput;
  resourceAccessPermissions?: InputMaybe<Array<Scalars['String']['input']>>;
  team: TCoreReferenceInput;
};

export type TCoreCustomObjectLimits = {
  __typename?: 'CustomObjectLimits';
  maxCustomObjects?: Maybe<Scalars['Long']['output']>;
};

export type TCoreCustomerGroupLimits = {
  __typename?: 'CustomerGroupLimits';
  maxCustomerGroups?: Maybe<Scalars['Long']['output']>;
};

export type TCoreCustomerLimits = {
  __typename?: 'CustomerLimits';
  maxCustomers?: Maybe<Scalars['Long']['output']>;
};

export type TCoreCustomersDomainLimits = {
  __typename?: 'CustomersDomainLimits';
  businessUnits?: Maybe<TCoreBusinessUnitLimits>;
  customerGroups?: Maybe<TCoreCustomerGroupLimits>;
  customers?: Maybe<TCoreCustomerLimits>;
};

export type TCoreDbClusterConfig = {
  __typename?: 'DBClusterConfig';
  dbClusterKey: TCoreDbClusterKey;
  sharded: Scalars['Boolean']['output'];
};

export type TCoreDbClusterConfigInput = {
  dbClusterKey: TCoreDbClusterKeyInput;
  sharded: Scalars['Boolean']['input'];
};

export type TCoreDbClusterKey = {
  __typename?: 'DBClusterKey';
  name: Scalars['String']['output'];
};

export type TCoreDbClusterKeyInput = {
  name: Scalars['String']['input'];
};

export type TCoreDbClustersConfig = {
  __typename?: 'DBClustersConfig';
  carts?: Maybe<TCoreDbClusterConfig>;
  commits?: Maybe<TCoreDbClusterConfig>;
  default: TCoreDbClusterKey;
  orders?: Maybe<TCoreDbClusterConfig>;
  products?: Maybe<TCoreDbClusterConfig>;
};

export type TCoreDbClustersConfigInput = {
  carts?: InputMaybe<TCoreDbClusterConfigInput>;
  commits?: InputMaybe<TCoreDbClusterConfigInput>;
  default: TCoreDbClusterKeyInput;
  orders?: InputMaybe<TCoreDbClusterConfigInput>;
  products?: InputMaybe<TCoreDbClusterConfigInput>;
};

export type TCoreDataFence = {
  type: Scalars['String']['output'];
};

export type TCoreDataFenceDraft = {
  store: TCoreDataFenceStoreDraftType;
};

export type TCoreDataFenceStoreDraftType = {
  storeKeys: Array<Scalars['String']['input']>;
};

export type TCoreEsAlternativeComparisonConfig = {
  __typename?: 'ESAlternativeComparisonConfig';
  comparisonProbability: Scalars['Float']['output'];
  logComparisonResults: Scalars['Boolean']['output'];
  versioning?: Maybe<Scalars['Boolean']['output']>;
};

export type TCoreEsAlternativeComparisonConfigInput = {
  comparisonProbability: Scalars['Float']['input'];
  logComparisonResults: Scalars['Boolean']['input'];
  versioning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCoreEsCluster = {
  __typename?: 'ESCluster';
  categoriesShardConfig?: Maybe<TCoreEsClusterShardConfig>;
  categoryComparison?: Maybe<TCoreEsAlternativeComparisonConfig>;
  clusterKey: Scalars['String']['output'];
  platformProducts?: Maybe<TCorePlatformProductsClusterConfig>;
  productComparison?: Maybe<TCoreEsAlternativeComparisonConfig>;
  products?: Maybe<TCoreProductsClusterConfig>;
  productsShardConfig?: Maybe<TCoreEsClusterShardConfig>;
  replicateToClusterKey?: Maybe<Scalars['String']['output']>;
};

export type TCoreEsClusterInput = {
  categoriesShardConfig?: InputMaybe<TCoreEsClusterShardConfigInput>;
  categoryComparison?: InputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  clusterKey: Scalars['String']['input'];
  platformProducts?: InputMaybe<TCorePlatformProductsClusterConfigInput>;
  productComparison?: InputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  products?: InputMaybe<TCoreProductsClusterConfigInput>;
  productsShardConfig?: InputMaybe<TCoreEsClusterShardConfigInput>;
  replicateToClusterKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreEsClusterShardConfig = {
  __typename?: 'ESClusterShardConfig';
  numberOfReplicas?: Maybe<Scalars['Int']['output']>;
  numberOfShards?: Maybe<Scalars['Int']['output']>;
  refreshIntervalSeconds?: Maybe<Scalars['Int']['output']>;
  versioning?: Maybe<Scalars['Boolean']['output']>;
};

export type TCoreEsClusterShardConfigInput = {
  numberOfReplicas?: InputMaybe<Scalars['Int']['input']>;
  numberOfShards?: InputMaybe<Scalars['Int']['input']>;
  refreshIntervalSeconds?: InputMaybe<Scalars['Int']['input']>;
  versioning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCoreExtensionLimits = {
  __typename?: 'ExtensionLimits';
  maxTimeoutInMs?: Maybe<Scalars['Int']['output']>;
};

export type TCoreExternalOAuthInput = {
  authorizationHeader: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type TCoreInitiator = {
  __typename?: 'Initiator';
  anonymousId?: Maybe<Scalars['String']['output']>;
  associateRef?: Maybe<TCoreReference>;
  attributedTo?: Maybe<TCoreAttribution>;
  clientId?: Maybe<Scalars['String']['output']>;
  customerRef?: Maybe<TCoreReference>;
  externalUserId?: Maybe<Scalars['String']['output']>;
  isPlatformClient?: Maybe<Scalars['Boolean']['output']>;
  userRef?: Maybe<TCoreReference>;
};

export type TCoreLocalizedString = {
  __typename?: 'LocalizedString';
  locale: Scalars['Locale']['output'];
  value: Scalars['String']['output'];
};

export type TCoreMediaContainer =
  | TCoreAwsContainer
  | TCoreAzureBlobStorageContainer
  | TCorePublicContainer;

export type TCoreMessagesConfiguration = {
  __typename?: 'MessagesConfiguration';
  deleteDaysAfterCreation?: Maybe<Scalars['Int']['output']>;
  enabled: Scalars['Boolean']['output'];
};

export type TCoreMutation = {
  __typename?: 'Mutation';
  createMyOrganization?: Maybe<TCoreOrganization>;
  createMyPermission?: Maybe<TCorePermission>;
  createMyProject?: Maybe<TCoreProject>;
  createPermission?: Maybe<TCorePermission>;
  deleteMyOrganization?: Maybe<TCoreOrganization>;
  deleteMyPermission?: Maybe<TCorePermission>;
  deleteMyProject?: Maybe<TCoreProject>;
  deletePermission?: Maybe<TCorePermission>;
  revokeAccessTokensByGroup?: Maybe<TCoreRevokedTokens>;
  revokeAccessTokensByTeam?: Maybe<TCoreRevokedTokens>;
  updateMyOrganization?: Maybe<TCoreOrganization>;
  updateMyPermission?: Maybe<TCorePermission>;
  updatePermission?: Maybe<TCorePermission>;
};

export type TCoreMutation_CreateMyOrganizationArgs = {
  draft: TCoreCreateOrganizationCommand;
};

export type TCoreMutation_CreateMyPermissionArgs = {
  draft: TCoreCreatePermissionCommand;
};

export type TCoreMutation_CreateMyProjectArgs = {
  draft: TCoreProjectDraftType;
};

export type TCoreMutation_CreatePermissionArgs = {
  draft: TCoreCreatePermissionCommand;
};

export type TCoreMutation_DeleteMyOrganizationArgs = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreMutation_DeleteMyPermissionArgs = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreMutation_DeleteMyProjectArgs = {
  key: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreMutation_DeletePermissionArgs = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreMutation_RevokeAccessTokensByGroupArgs = {
  owner: TCoreReferenceInput;
  permissionGroup: Scalars['String']['input'];
};

export type TCoreMutation_RevokeAccessTokensByTeamArgs = {
  owner: TCoreReferenceInput;
  teamId: Scalars['String']['input'];
};

export type TCoreMutation_UpdateMyOrganizationArgs = {
  actions: Array<TCoreOrganizationUpdateAction>;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreMutation_UpdateMyPermissionArgs = {
  actions: Array<TCorePermissionUpdateAction>;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreMutation_UpdatePermissionArgs = {
  actions: Array<TCorePermissionUpdateAction>;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCoreOrderEditLimits = {
  __typename?: 'OrderEditLimits';
  maxOrderEdits?: Maybe<Scalars['Long']['output']>;
};

export type TCoreOrganization = TCoreVersioned & {
  __typename?: 'Organization';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCoreInitiator>;
  defaultClusters?: Maybe<TCoreClustersConfig>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCoreInitiator>;
  name: Scalars['String']['output'];
  teams: Array<TCoreTeam>;
  version: Scalars['Long']['output'];
};

export type TCoreOrganizationQueryResult = {
  __typename?: 'OrganizationQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCoreOrganization>;
  total: Scalars['Long']['output'];
};

export type TCoreOrganizationUpdateAction = {
  addTeam?: InputMaybe<TCoreAddTeam>;
  addTeamMembership?: InputMaybe<TCoreAddTeamMembership>;
  changeName?: InputMaybe<TCoreChangeName>;
  changeTeamName?: InputMaybe<TCoreChangeTeamName>;
  removeTeam?: InputMaybe<TCoreRemoveTeam>;
  removeTeamMembership?: InputMaybe<TCoreRemoveTeamMembership>;
};

export type TCorePermission = TCoreVersioned & {
  __typename?: 'Permission';
  actionRightPermissions: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCoreInitiator>;
  dataFences: Array<TCoreStoreDataFence>;
  group: Scalars['String']['output'];
  hiddenMenuItems: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCoreInitiator>;
  ownerRef: TCoreReference;
  resourceAccessPermissions: Array<Scalars['String']['output']>;
  teamRef: TCoreReference;
  version: Scalars['Long']['output'];
};

export type TCorePermissionQueryResult = {
  __typename?: 'PermissionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCorePermission>;
  total: Scalars['Long']['output'];
};

export type TCorePermissionUpdateAction = {
  setActionRightPermissions?: InputMaybe<TCoreSetPermissionActionRightPermissions>;
  setDataFences?: InputMaybe<TCoreSetPermissionDataFences>;
  setHiddenMenuItems?: InputMaybe<TCoreSetPermissionHiddenMenuItems>;
  setResourceAccessPermissions?: InputMaybe<TCoreSetPermissionResourceAccessPermissions>;
};

export type TCorePlatformProductsClusterConfig = {
  __typename?: 'PlatformProductsClusterConfig';
  categoriesShardConfig?: Maybe<TCoreEsClusterShardConfig>;
  categoryComparison?: Maybe<TCoreEsAlternativeComparisonConfig>;
  clusterKey: Scalars['String']['output'];
  productComparison?: Maybe<TCoreEsAlternativeComparisonConfig>;
  productsShardConfig?: Maybe<TCoreEsClusterShardConfig>;
  replicateToClusterKey?: Maybe<Scalars['String']['output']>;
};

export type TCorePlatformProductsClusterConfigInput = {
  categoriesShardConfig?: InputMaybe<TCoreEsClusterShardConfigInput>;
  categoryComparison?: InputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  clusterKey: Scalars['String']['input'];
  productComparison?: InputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  productsShardConfig?: InputMaybe<TCoreEsClusterShardConfigInput>;
  replicateToClusterKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreProductDiscountLimits = {
  __typename?: 'ProductDiscountLimits';
  activeLimit?: Maybe<Scalars['Long']['output']>;
};

export type TCoreProductLimits = {
  __typename?: 'ProductLimits';
  pricesLimitPerVariant?: Maybe<Scalars['Int']['output']>;
  productTailoringLimit?: Maybe<Scalars['Int']['output']>;
  variantLimit?: Maybe<Scalars['Int']['output']>;
};

export type TCoreProductTypeLimits = {
  __typename?: 'ProductTypeLimits';
  maxTotalProductTypes?: Maybe<Scalars['Int']['output']>;
};

export type TCoreProductsClusterConfig = {
  __typename?: 'ProductsClusterConfig';
  clusterKey: Scalars['String']['output'];
};

export type TCoreProductsClusterConfigInput = {
  clusterKey: Scalars['String']['input'];
};

export type TCoreProject = TCoreVersioned & {
  __typename?: 'Project';
  billingInfo?: Maybe<TCoreProjectBillingInfo>;
  cdnContainer?: Maybe<TCoreMediaContainer>;
  cdnContainerConfiguration: TCoreCdnContainerConfiguration;
  countries: Array<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCoreInitiator>;
  currencies: Array<Scalars['Currency']['output']>;
  customLimits?: Maybe<TCoreProjectCustomLimits>;
  id: Scalars['String']['output'];
  initialized: Scalars['Boolean']['output'];
  isProductionProject?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  languages: Array<Scalars['Locale']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCoreInitiator>;
  messages: TCoreMessagesConfiguration;
  name: Scalars['String']['output'];
  owner?: Maybe<TCoreOrganization>;
  ownerRef?: Maybe<TCoreReference>;
  participations: Array<TCoreOrganization>;
  participationsRef: Array<TCoreReference>;
  plan: Scalars['String']['output'];
  shippingRateInputType?: Maybe<
    TCoreCartClassificationType | TCoreCartScoreType | TCoreCartValueType
  >;
  suspended?: Maybe<TCoreProjectSuspendData>;
  trialUntil?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Long']['output'];
};

export type TCoreProjectBillingInfo = {
  __typename?: 'ProjectBillingInfo';
  accountId?: Maybe<Scalars['String']['output']>;
  accountName?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  contractNumber?: Maybe<Scalars['String']['output']>;
};

export type TCoreProjectCustomLimits = {
  __typename?: 'ProjectCustomLimits';
  attributeGroupLimits?: Maybe<TCoreAttributeGroupLimits>;
  cartDiscounts?: Maybe<TCoreCartDiscountLimits>;
  carts?: Maybe<TCoreCartLimits>;
  categoryLimits?: Maybe<TCoreCategoryLimits>;
  customObjects?: Maybe<TCoreCustomObjectLimits>;
  customersDomainLimits: TCoreCustomersDomainLimits;
  extensions?: Maybe<TCoreExtensionLimits>;
  orderEdits?: Maybe<TCoreOrderEditLimits>;
  productDiscounts?: Maybe<TCoreProductDiscountLimits>;
  productTypeLimits?: Maybe<TCoreProductTypeLimits>;
  products?: Maybe<TCoreProductLimits>;
  queryLimits?: Maybe<TCoreQueryLimits>;
  refreshTokens?: Maybe<TCoreRefreshTokenLimits>;
  searchLimits?: Maybe<TCoreSearchLimits>;
  shippingMethods?: Maybe<TCoreShippingMethodLimit>;
  shoppingLists?: Maybe<TCoreShoppingListLimits>;
  stores?: Maybe<TCoreStoreLimits>;
  subscriptions?: Maybe<TCoreSubscriptionsLimits>;
  taxCategories?: Maybe<TCoreTaxCategoryLimit>;
  termFacetSize?: Maybe<Scalars['Int']['output']>;
  zones?: Maybe<TCoreZoneLimits>;
};

export type TCoreProjectDraftType = {
  asyncInitialization?: InputMaybe<Scalars['Boolean']['input']>;
  cdnContainerEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  countries?: Array<Scalars['Country']['input']>;
  currencies: Array<Scalars['Currency']['input']>;
  dbClustersConfig?: InputMaybe<TCoreDbClustersConfigInput>;
  deleteDaysAfterCreation?: InputMaybe<Scalars['Int']['input']>;
  esCluster?: InputMaybe<TCoreEsClusterInput>;
  externalOAuth?: InputMaybe<TCoreExternalOAuthInput>;
  key: Scalars['String']['input'];
  languages: Array<Scalars['Locale']['input']>;
  messagesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  owner: TCoreReferenceInput;
  plan: TCoreProjectPlan;
  searchIndexing?: InputMaybe<TCoreSearchIndexingConfigurationInput>;
  trialUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum TCoreProjectPlan {
  Standard = 'Standard',
  Unlimited = 'Unlimited',
}

export type TCoreProjectQueryResult = {
  __typename?: 'ProjectQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCoreProject>;
  total: Scalars['Long']['output'];
};

export type TCoreProjectSuspendData = {
  __typename?: 'ProjectSuspendData';
  description?: Maybe<Scalars['String']['output']>;
  reason: TCoreProjectSuspensionReason;
};

export enum TCoreProjectSuspensionReason {
  /** A database migration is running. */
  DbMigration = 'DbMigration',
  /** Other reasons like copy project. */
  Other = 'Other',
  /** The usage of the project is not paid. */
  Payment = 'Payment',
}

/** Rackspace Cloud Files container config */
export type TCorePublicContainer = {
  __typename?: 'PublicContainer';
  httpUri: Scalars['String']['output'];
  httpsUri: Scalars['String']['output'];
  iosUri: Scalars['String']['output'];
  name: Scalars['String']['output'];
  streamingUri: Scalars['String']['output'];
};

export type TCoreQuery = {
  __typename?: 'Query';
  /**
   * Fetch projects that `me` can access (but maybe not be able to manage).
   * @deprecated beta feature
   */
  myAccessibleProjects: TCoreProjectQueryResult;
  /** Fetch organizations that `me` can manage. */
  myOrganizations: TCoreOrganizationQueryResult;
  /**
   * Fetch permissions `me` is allowed to see:
   *  - if `owner` = `organization`: filter on organizations `me` can manage
   *  - if `owner` = `project`: filter on projects belonging to organizations `me` can manage
   * Currently in beta.
   *
   */
  myPermissions: TCorePermissionQueryResult;
  /** Fetch projects that `me` can manage. */
  myProjects: TCoreProjectQueryResult;
  permissions: TCorePermissionQueryResult;
  /** All permissions for a given user and a given owner (organization or project). Currently in beta. */
  permissionsForUser: TCorePermissionQueryResult;
  projects: TCoreProjectQueryResult;
};

export type TCoreQuery_MyAccessibleProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQuery_MyOrganizationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQuery_MyPermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  owner: TCoreReferenceInput;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQuery_MyProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQuery_PermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQuery_PermissionsForUserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  owner: TCoreReferenceInput;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQuery_ProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreQueryLimits = {
  __typename?: 'QueryLimits';
  maxOffset: Scalars['Int']['output'];
};

export type TCoreReference = {
  __typename?: 'Reference';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TCoreReferenceInput = {
  id: Scalars['String']['input'];
  typeId: Scalars['String']['input'];
};

export type TCoreRefreshTokenLimits = {
  __typename?: 'RefreshTokenLimits';
  maxRefreshTokens?: Maybe<Scalars['Long']['output']>;
};

export type TCoreRemoveTeam = {
  teamId: Scalars['String']['input'];
};

export type TCoreRemoveTeamMembership = {
  teamId: Scalars['String']['input'];
  user: TCoreReferenceInput;
};

export type TCoreRevokedTokens = {
  __typename?: 'RevokedTokens';
  owner: TCoreReference;
  revoked: Scalars['Long']['output'];
  teams: Array<Scalars['String']['output']>;
};

export type TCoreSearchIndexingConfigurationInput = {
  products?: InputMaybe<TCoreSearchIndexingConfigurationValuesInput>;
};

export type TCoreSearchIndexingConfigurationValuesInput = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type TCoreSearchLimits = {
  __typename?: 'SearchLimits';
  maxTextSize?: Maybe<Scalars['Int']['output']>;
};

export type TCoreSetPermissionActionRightPermissions = {
  actionRightPermissions: Array<Scalars['String']['input']>;
};

export type TCoreSetPermissionDataFences = {
  dataFences: Array<TCoreDataFenceDraft>;
};

export type TCoreSetPermissionHiddenMenuItems = {
  hiddenMenuItems: Array<Scalars['String']['input']>;
};

export type TCoreSetPermissionResourceAccessPermissions = {
  resourceAccessPermissions: Array<Scalars['String']['input']>;
};

export type TCoreShippingMethodLimit = {
  __typename?: 'ShippingMethodLimit';
  maxShippingMethods?: Maybe<Scalars['Long']['output']>;
};

export type TCoreShippingRateInputLocalizedEnumValue = {
  __typename?: 'ShippingRateInputLocalizedEnumValue';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCoreLocalizedString>;
};

export type TCoreShippingRateInputLocalizedEnumValue_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCoreShippingRateInputType = {
  type: Scalars['String']['output'];
};

export type TCoreShoppingListLimits = {
  __typename?: 'ShoppingListLimits';
  maxLineItems?: Maybe<Scalars['Int']['output']>;
  maxShoppingLists?: Maybe<Scalars['Long']['output']>;
  maxTextLineItems?: Maybe<Scalars['Int']['output']>;
};

export type TCoreStoreDataFence = TCoreDataFence & {
  __typename?: 'StoreDataFence';
  storeKeys: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCoreStoreLimits = {
  __typename?: 'StoreLimits';
  maxInventorySupplyChannelsPerStore?: Maybe<Scalars['Long']['output']>;
  maxProductDistributionChannelsPerStore?: Maybe<Scalars['Long']['output']>;
  maxProductSelectionsPerStore?: Maybe<Scalars['Long']['output']>;
  maxStores?: Maybe<Scalars['Long']['output']>;
};

export type TCoreSubscriptionsLimits = {
  __typename?: 'SubscriptionsLimits';
  maxSubscriptions?: Maybe<Scalars['Int']['output']>;
};

export type TCoreTaxCategoryLimit = {
  __typename?: 'TaxCategoryLimit';
  maxTaxCategories?: Maybe<Scalars['Long']['output']>;
};

export type TCoreTeam = {
  __typename?: 'Team';
  id: Scalars['String']['output'];
  members: Array<TCoreUser>;
  membersRef: Array<TCoreReference>;
  name: Scalars['String']['output'];
};

export type TCoreUser = TCoreVersioned & {
  __typename?: 'User';
  businessRole?: Maybe<TCoreBusinessRole>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCoreInitiator>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  language: Scalars['Locale']['output'];
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCoreInitiator>;
  lastName: Scalars['String']['output'];
  locked: Scalars['Boolean']['output'];
  lowercaseEmail: Scalars['String']['output'];
  numberFormat: Scalars['Locale']['output'];
  timeZone?: Maybe<Scalars['DateTimeZone']['output']>;
  version: Scalars['Long']['output'];
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type TCoreVersioned = {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCoreInitiator>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCoreInitiator>;
  version: Scalars['Long']['output'];
};

export type TCoreZoneLimits = {
  __typename?: 'ZoneLimits';
  maxZones?: Maybe<Scalars['Long']['output']>;
};
