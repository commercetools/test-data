export type TCoreMaybe<T> = T | null;
export type TCoreInputMaybe<T> = TCoreMaybe<T>;
export type TCoreExact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type TCoreMakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: TCoreMaybe<T[SubKey]>;
};
export type TCoreMakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: TCoreMaybe<T[SubKey]>;
};
export type TCoreMakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type TCoreIncremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type TCoreScalars = {
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
  members?: TCoreInputMaybe<Array<TCoreReferenceInput>>;
  name: TCoreScalars['String']['input'];
  permissions?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreAddTeamMembership = {
  teamId: TCoreScalars['String']['input'];
  user: TCoreReferenceInput;
};

export type TCoreAttributeGroupLimits = {
  __typename?: 'AttributeGroupLimits';
  maxTotalAttributeGroups?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreAttribution = {
  __typename?: 'Attribution';
  clientId?: TCoreMaybe<TCoreScalars['String']['output']>;
  source: TCoreAttributionSource;
  userRef?: TCoreMaybe<TCoreReference>;
};

export enum TCoreAttributionSource {
  Export = 'Export',
  Import = 'Import',
}

/** AWS S3 container config */
export type TCoreAwsContainer = {
  __typename?: 'AwsContainer';
  /** Public bucket url, without the project part */
  bucketUrl: TCoreScalars['String']['output'];
  /** Project part of the object path on s3 */
  projectPrefix: TCoreScalars['String']['output'];
};

/** Azure Blob Storage container config */
export type TCoreAzureBlobStorageContainer = {
  __typename?: 'AzureBlobStorageContainer';
  /** Project part of the object path on s3 */
  baseUrl: TCoreScalars['String']['output'];
  /** Public bucket url, without the project part */
  name: TCoreScalars['String']['output'];
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
  maxAssociateRoles?: TCoreMaybe<TCoreScalars['Int']['output']>;
  maxAssociates?: TCoreMaybe<TCoreScalars['Int']['output']>;
  maxDepthLimit?: TCoreMaybe<TCoreScalars['Int']['output']>;
  maxDivisions?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreCartClassificationType = TCoreShippingRateInputType & {
  __typename?: 'CartClassificationType';
  type: TCoreScalars['String']['output'];
  values: Array<TCoreShippingRateInputLocalizedEnumValue>;
};

export type TCoreCartDiscountLimits = {
  __typename?: 'CartDiscountLimits';
  withoutDiscountCodeLimit?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreCartLimits = {
  __typename?: 'CartLimits';
  maxCarts?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreCartScoreType = TCoreShippingRateInputType & {
  __typename?: 'CartScoreType';
  type: TCoreScalars['String']['output'];
};

export type TCoreCartValueType = TCoreShippingRateInputType & {
  __typename?: 'CartValueType';
  type: TCoreScalars['String']['output'];
};

export type TCoreCategoryLimits = {
  __typename?: 'CategoryLimits';
  maxTotalCategories?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreCdnContainerConfiguration = {
  __typename?: 'CdnContainerConfiguration';
  enabled: TCoreScalars['Boolean']['output'];
};

export type TCoreChangeName = {
  name: TCoreScalars['String']['input'];
};

export type TCoreChangeTeamName = {
  name: TCoreScalars['String']['input'];
  teamId: TCoreScalars['String']['input'];
};

export type TCoreClustersConfig = {
  __typename?: 'ClustersConfig';
  db?: TCoreMaybe<TCoreDbClustersConfig>;
  elasticsearch?: TCoreMaybe<TCoreEsCluster>;
};

export type TCoreClustersConfigInput = {
  db?: TCoreInputMaybe<TCoreDbClustersConfigInput>;
  elasticsearch?: TCoreInputMaybe<TCoreEsClusterInput>;
};

export type TCoreCreateOrganizationCommand = {
  defaultClusters?: TCoreInputMaybe<TCoreClustersConfigInput>;
  name: TCoreScalars['String']['input'];
  owner: TCoreReferenceInput;
};

export type TCoreCreatePermissionCommand = {
  actionRightPermissions?: TCoreInputMaybe<
    Array<TCoreScalars['String']['input']>
  >;
  dataFences?: TCoreInputMaybe<Array<TCoreDataFenceDraft>>;
  group: TCoreScalars['String']['input'];
  hiddenMenuItems?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  owner: TCoreReferenceInput;
  resourceAccessPermissions?: TCoreInputMaybe<
    Array<TCoreScalars['String']['input']>
  >;
  team: TCoreReferenceInput;
};

export type TCoreCustomObjectLimits = {
  __typename?: 'CustomObjectLimits';
  maxCustomObjects?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreCustomerGroupLimits = {
  __typename?: 'CustomerGroupLimits';
  maxCustomerGroups?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreCustomerLimits = {
  __typename?: 'CustomerLimits';
  maxCustomers?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreCustomersDomainLimits = {
  __typename?: 'CustomersDomainLimits';
  businessUnits?: TCoreMaybe<TCoreBusinessUnitLimits>;
  customerGroups?: TCoreMaybe<TCoreCustomerGroupLimits>;
  customers?: TCoreMaybe<TCoreCustomerLimits>;
};

export type TCoreDbClusterConfig = {
  __typename?: 'DBClusterConfig';
  dbClusterKey: TCoreDbClusterKey;
  sharded: TCoreScalars['Boolean']['output'];
};

export type TCoreDbClusterConfigInput = {
  dbClusterKey: TCoreDbClusterKeyInput;
  sharded: TCoreScalars['Boolean']['input'];
};

export type TCoreDbClusterKey = {
  __typename?: 'DBClusterKey';
  name: TCoreScalars['String']['output'];
};

export type TCoreDbClusterKeyInput = {
  name: TCoreScalars['String']['input'];
};

export type TCoreDbClustersConfig = {
  __typename?: 'DBClustersConfig';
  carts?: TCoreMaybe<TCoreDbClusterConfig>;
  commits?: TCoreMaybe<TCoreDbClusterConfig>;
  default: TCoreDbClusterKey;
  orders?: TCoreMaybe<TCoreDbClusterConfig>;
  products?: TCoreMaybe<TCoreDbClusterConfig>;
};

export type TCoreDbClustersConfigInput = {
  carts?: TCoreInputMaybe<TCoreDbClusterConfigInput>;
  commits?: TCoreInputMaybe<TCoreDbClusterConfigInput>;
  default: TCoreDbClusterKeyInput;
  orders?: TCoreInputMaybe<TCoreDbClusterConfigInput>;
  products?: TCoreInputMaybe<TCoreDbClusterConfigInput>;
};

export type TCoreDataFence = {
  type: TCoreScalars['String']['output'];
};

export type TCoreDataFenceDraft = {
  store: TCoreDataFenceStoreDraftType;
};

export type TCoreDataFenceStoreDraftType = {
  storeKeys: Array<TCoreScalars['String']['input']>;
};

export type TCoreEsAlternativeComparisonConfig = {
  __typename?: 'ESAlternativeComparisonConfig';
  comparisonProbability: TCoreScalars['Float']['output'];
  logComparisonResults: TCoreScalars['Boolean']['output'];
  versioning?: TCoreMaybe<TCoreScalars['Boolean']['output']>;
};

export type TCoreEsAlternativeComparisonConfigInput = {
  comparisonProbability: TCoreScalars['Float']['input'];
  logComparisonResults: TCoreScalars['Boolean']['input'];
  versioning?: TCoreInputMaybe<TCoreScalars['Boolean']['input']>;
};

export type TCoreEsCluster = {
  __typename?: 'ESCluster';
  categoriesShardConfig?: TCoreMaybe<TCoreEsClusterShardConfig>;
  categoryComparison?: TCoreMaybe<TCoreEsAlternativeComparisonConfig>;
  clusterKey: TCoreScalars['String']['output'];
  platformProducts?: TCoreMaybe<TCorePlatformProductsClusterConfig>;
  productComparison?: TCoreMaybe<TCoreEsAlternativeComparisonConfig>;
  products?: TCoreMaybe<TCoreProductsClusterConfig>;
  productsShardConfig?: TCoreMaybe<TCoreEsClusterShardConfig>;
  replicateToClusterKey?: TCoreMaybe<TCoreScalars['String']['output']>;
};

export type TCoreEsClusterInput = {
  categoriesShardConfig?: TCoreInputMaybe<TCoreEsClusterShardConfigInput>;
  categoryComparison?: TCoreInputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  clusterKey: TCoreScalars['String']['input'];
  platformProducts?: TCoreInputMaybe<TCorePlatformProductsClusterConfigInput>;
  productComparison?: TCoreInputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  products?: TCoreInputMaybe<TCoreProductsClusterConfigInput>;
  productsShardConfig?: TCoreInputMaybe<TCoreEsClusterShardConfigInput>;
  replicateToClusterKey?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreEsClusterShardConfig = {
  __typename?: 'ESClusterShardConfig';
  numberOfReplicas?: TCoreMaybe<TCoreScalars['Int']['output']>;
  numberOfShards?: TCoreMaybe<TCoreScalars['Int']['output']>;
  refreshIntervalSeconds?: TCoreMaybe<TCoreScalars['Int']['output']>;
  versioning?: TCoreMaybe<TCoreScalars['Boolean']['output']>;
};

export type TCoreEsClusterShardConfigInput = {
  numberOfReplicas?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  numberOfShards?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  refreshIntervalSeconds?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  versioning?: TCoreInputMaybe<TCoreScalars['Boolean']['input']>;
};

export type TCoreExtensionLimits = {
  __typename?: 'ExtensionLimits';
  maxTimeoutInMs?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreExternalOAuthInput = {
  authorizationHeader: TCoreScalars['String']['input'];
  url: TCoreScalars['String']['input'];
};

export type TCoreInitiator = {
  __typename?: 'Initiator';
  anonymousId?: TCoreMaybe<TCoreScalars['String']['output']>;
  associateRef?: TCoreMaybe<TCoreReference>;
  attributedTo?: TCoreMaybe<TCoreAttribution>;
  clientId?: TCoreMaybe<TCoreScalars['String']['output']>;
  customerRef?: TCoreMaybe<TCoreReference>;
  externalUserId?: TCoreMaybe<TCoreScalars['String']['output']>;
  isPlatformClient?: TCoreMaybe<TCoreScalars['Boolean']['output']>;
  userRef?: TCoreMaybe<TCoreReference>;
};

export type TCoreLocalizedString = {
  __typename?: 'LocalizedString';
  locale: TCoreScalars['Locale']['output'];
  value: TCoreScalars['String']['output'];
};

export type TCoreMediaContainer =
  | TCoreAwsContainer
  | TCoreAzureBlobStorageContainer
  | TCorePublicContainer;

export type TCoreMessagesConfiguration = {
  __typename?: 'MessagesConfiguration';
  deleteDaysAfterCreation?: TCoreMaybe<TCoreScalars['Int']['output']>;
  enabled: TCoreScalars['Boolean']['output'];
};

export type TCoreMutation = {
  __typename?: 'Mutation';
  createMyOrganization?: TCoreMaybe<TCoreOrganization>;
  createMyPermission?: TCoreMaybe<TCorePermission>;
  createMyProject?: TCoreMaybe<TCoreProject>;
  createPermission?: TCoreMaybe<TCorePermission>;
  deleteMyOrganization?: TCoreMaybe<TCoreOrganization>;
  deleteMyPermission?: TCoreMaybe<TCorePermission>;
  deleteMyProject?: TCoreMaybe<TCoreProject>;
  deletePermission?: TCoreMaybe<TCorePermission>;
  revokeAccessTokensByGroup?: TCoreMaybe<TCoreRevokedTokens>;
  revokeAccessTokensByTeam?: TCoreMaybe<TCoreRevokedTokens>;
  updateMyOrganization?: TCoreMaybe<TCoreOrganization>;
  updateMyPermission?: TCoreMaybe<TCorePermission>;
  updatePermission?: TCoreMaybe<TCorePermission>;
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
  id: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreMutation_DeleteMyPermissionArgs = {
  id: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreMutation_DeleteMyProjectArgs = {
  key: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreMutation_DeletePermissionArgs = {
  id: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreMutation_RevokeAccessTokensByGroupArgs = {
  owner: TCoreReferenceInput;
  permissionGroup: TCoreScalars['String']['input'];
};

export type TCoreMutation_RevokeAccessTokensByTeamArgs = {
  owner: TCoreReferenceInput;
  teamId: TCoreScalars['String']['input'];
};

export type TCoreMutation_UpdateMyOrganizationArgs = {
  actions: Array<TCoreOrganizationUpdateAction>;
  id: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreMutation_UpdateMyPermissionArgs = {
  actions: Array<TCorePermissionUpdateAction>;
  id: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreMutation_UpdatePermissionArgs = {
  actions: Array<TCorePermissionUpdateAction>;
  id: TCoreScalars['String']['input'];
  version: TCoreScalars['Long']['input'];
};

export type TCoreOrderEditLimits = {
  __typename?: 'OrderEditLimits';
  maxOrderEdits?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreOrganization = TCoreVersioned & {
  __typename?: 'Organization';
  createdAt: TCoreScalars['DateTime']['output'];
  createdBy?: TCoreMaybe<TCoreInitiator>;
  defaultClusters?: TCoreMaybe<TCoreClustersConfig>;
  id: TCoreScalars['String']['output'];
  lastModifiedAt: TCoreScalars['DateTime']['output'];
  lastModifiedBy?: TCoreMaybe<TCoreInitiator>;
  name: TCoreScalars['String']['output'];
  teams: Array<TCoreTeam>;
  version: TCoreScalars['Long']['output'];
};

export type TCoreOrganizationQueryResult = {
  __typename?: 'OrganizationQueryResult';
  count: TCoreScalars['Int']['output'];
  exists: TCoreScalars['Boolean']['output'];
  offset: TCoreScalars['Int']['output'];
  results: Array<TCoreOrganization>;
  total: TCoreScalars['Long']['output'];
};

export type TCoreOrganizationUpdateAction = {
  addTeam?: TCoreInputMaybe<TCoreAddTeam>;
  addTeamMembership?: TCoreInputMaybe<TCoreAddTeamMembership>;
  changeName?: TCoreInputMaybe<TCoreChangeName>;
  changeTeamName?: TCoreInputMaybe<TCoreChangeTeamName>;
  removeTeam?: TCoreInputMaybe<TCoreRemoveTeam>;
  removeTeamMembership?: TCoreInputMaybe<TCoreRemoveTeamMembership>;
};

export type TCorePermission = TCoreVersioned & {
  __typename?: 'Permission';
  actionRightPermissions: Array<TCoreScalars['String']['output']>;
  createdAt: TCoreScalars['DateTime']['output'];
  createdBy?: TCoreMaybe<TCoreInitiator>;
  dataFences: Array<TCoreDataFence>;
  group: TCoreScalars['String']['output'];
  hiddenMenuItems: Array<TCoreScalars['String']['output']>;
  id: TCoreScalars['String']['output'];
  lastModifiedAt: TCoreScalars['DateTime']['output'];
  lastModifiedBy?: TCoreMaybe<TCoreInitiator>;
  ownerRef: TCoreReference;
  resourceAccessPermissions: Array<TCoreScalars['String']['output']>;
  teamRef: TCoreReference;
  version: TCoreScalars['Long']['output'];
};

export type TCorePermissionQueryResult = {
  __typename?: 'PermissionQueryResult';
  count: TCoreScalars['Int']['output'];
  exists: TCoreScalars['Boolean']['output'];
  offset: TCoreScalars['Int']['output'];
  results: Array<TCorePermission>;
  total: TCoreScalars['Long']['output'];
};

export type TCorePermissionUpdateAction = {
  setActionRightPermissions?: TCoreInputMaybe<TCoreSetPermissionActionRightPermissions>;
  setDataFences?: TCoreInputMaybe<TCoreSetPermissionDataFences>;
  setHiddenMenuItems?: TCoreInputMaybe<TCoreSetPermissionHiddenMenuItems>;
  setResourceAccessPermissions?: TCoreInputMaybe<TCoreSetPermissionResourceAccessPermissions>;
};

export type TCorePlatformProductsClusterConfig = {
  __typename?: 'PlatformProductsClusterConfig';
  categoriesShardConfig?: TCoreMaybe<TCoreEsClusterShardConfig>;
  categoryComparison?: TCoreMaybe<TCoreEsAlternativeComparisonConfig>;
  clusterKey: TCoreScalars['String']['output'];
  productComparison?: TCoreMaybe<TCoreEsAlternativeComparisonConfig>;
  productsShardConfig?: TCoreMaybe<TCoreEsClusterShardConfig>;
  replicateToClusterKey?: TCoreMaybe<TCoreScalars['String']['output']>;
};

export type TCorePlatformProductsClusterConfigInput = {
  categoriesShardConfig?: TCoreInputMaybe<TCoreEsClusterShardConfigInput>;
  categoryComparison?: TCoreInputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  clusterKey: TCoreScalars['String']['input'];
  productComparison?: TCoreInputMaybe<TCoreEsAlternativeComparisonConfigInput>;
  productsShardConfig?: TCoreInputMaybe<TCoreEsClusterShardConfigInput>;
  replicateToClusterKey?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreProductDiscountLimits = {
  __typename?: 'ProductDiscountLimits';
  activeLimit?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreProductLimits = {
  __typename?: 'ProductLimits';
  pricesLimitPerVariant?: TCoreMaybe<TCoreScalars['Int']['output']>;
  productTailoringLimit?: TCoreMaybe<TCoreScalars['Int']['output']>;
  variantLimit?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreProductTypeLimits = {
  __typename?: 'ProductTypeLimits';
  maxTotalProductTypes?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreProductsClusterConfig = {
  __typename?: 'ProductsClusterConfig';
  clusterKey: TCoreScalars['String']['output'];
};

export type TCoreProductsClusterConfigInput = {
  clusterKey: TCoreScalars['String']['input'];
};

export type TCoreProject = TCoreVersioned & {
  __typename?: 'Project';
  billingInfo?: TCoreMaybe<TCoreProjectBillingInfo>;
  cdnContainer?: TCoreMaybe<TCoreMediaContainer>;
  cdnContainerConfiguration: TCoreCdnContainerConfiguration;
  countries: Array<TCoreScalars['Country']['output']>;
  createdAt: TCoreScalars['DateTime']['output'];
  createdBy?: TCoreMaybe<TCoreInitiator>;
  currencies: Array<TCoreScalars['Currency']['output']>;
  customLimits?: TCoreMaybe<TCoreProjectCustomLimits>;
  id: TCoreScalars['String']['output'];
  initialized: TCoreScalars['Boolean']['output'];
  isProductionProject?: TCoreMaybe<TCoreScalars['Boolean']['output']>;
  key: TCoreScalars['String']['output'];
  languages: Array<TCoreScalars['Locale']['output']>;
  lastModifiedAt: TCoreScalars['DateTime']['output'];
  lastModifiedBy?: TCoreMaybe<TCoreInitiator>;
  messages: TCoreMessagesConfiguration;
  name: TCoreScalars['String']['output'];
  owner?: TCoreMaybe<TCoreOrganization>;
  ownerRef?: TCoreMaybe<TCoreReference>;
  participations: Array<TCoreOrganization>;
  participationsRef: Array<TCoreReference>;
  plan: TCoreScalars['String']['output'];
  shippingRateInputType?: TCoreMaybe<TCoreShippingRateInputType>;
  suspended?: TCoreMaybe<TCoreProjectSuspendData>;
  trialUntil?: TCoreMaybe<TCoreScalars['DateTime']['output']>;
  version: TCoreScalars['Long']['output'];
};

export type TCoreProjectBillingInfo = {
  __typename?: 'ProjectBillingInfo';
  accountId?: TCoreMaybe<TCoreScalars['String']['output']>;
  accountName?: TCoreMaybe<TCoreScalars['String']['output']>;
  accountNumber?: TCoreMaybe<TCoreScalars['String']['output']>;
  comment?: TCoreMaybe<TCoreScalars['String']['output']>;
  contractNumber?: TCoreMaybe<TCoreScalars['String']['output']>;
};

export type TCoreProjectCustomLimits = {
  __typename?: 'ProjectCustomLimits';
  attributeGroupLimits?: TCoreMaybe<TCoreAttributeGroupLimits>;
  cartDiscounts?: TCoreMaybe<TCoreCartDiscountLimits>;
  carts?: TCoreMaybe<TCoreCartLimits>;
  categoryLimits?: TCoreMaybe<TCoreCategoryLimits>;
  customObjects?: TCoreMaybe<TCoreCustomObjectLimits>;
  customersDomainLimits: TCoreCustomersDomainLimits;
  extensions?: TCoreMaybe<TCoreExtensionLimits>;
  orderEdits?: TCoreMaybe<TCoreOrderEditLimits>;
  productDiscounts?: TCoreMaybe<TCoreProductDiscountLimits>;
  productTypeLimits?: TCoreMaybe<TCoreProductTypeLimits>;
  products?: TCoreMaybe<TCoreProductLimits>;
  queryLimits?: TCoreMaybe<TCoreQueryLimits>;
  refreshTokens?: TCoreMaybe<TCoreRefreshTokenLimits>;
  searchLimits?: TCoreMaybe<TCoreSearchLimits>;
  shippingMethods?: TCoreMaybe<TCoreShippingMethodLimit>;
  shoppingLists?: TCoreMaybe<TCoreShoppingListLimits>;
  stores?: TCoreMaybe<TCoreStoreLimits>;
  subscriptions?: TCoreMaybe<TCoreSubscriptionsLimits>;
  taxCategories?: TCoreMaybe<TCoreTaxCategoryLimit>;
  termFacetSize?: TCoreMaybe<TCoreScalars['Int']['output']>;
  zones?: TCoreMaybe<TCoreZoneLimits>;
};

export type TCoreProjectDraftType = {
  asyncInitialization?: TCoreInputMaybe<TCoreScalars['Boolean']['input']>;
  cdnContainerEnabled?: TCoreInputMaybe<TCoreScalars['Boolean']['input']>;
  countries?: Array<TCoreScalars['Country']['input']>;
  currencies: Array<TCoreScalars['Currency']['input']>;
  dbClustersConfig?: TCoreInputMaybe<TCoreDbClustersConfigInput>;
  deleteDaysAfterCreation?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  esCluster?: TCoreInputMaybe<TCoreEsClusterInput>;
  externalOAuth?: TCoreInputMaybe<TCoreExternalOAuthInput>;
  key: TCoreScalars['String']['input'];
  languages: Array<TCoreScalars['Locale']['input']>;
  messagesEnabled?: TCoreInputMaybe<TCoreScalars['Boolean']['input']>;
  name: TCoreScalars['String']['input'];
  owner: TCoreReferenceInput;
  plan: TCoreProjectPlan;
  searchIndexing?: TCoreInputMaybe<TCoreSearchIndexingConfigurationInput>;
  trialUntil?: TCoreInputMaybe<TCoreScalars['DateTime']['input']>;
};

export enum TCoreProjectPlan {
  Standard = 'Standard',
  Unlimited = 'Unlimited',
}

export type TCoreProjectQueryResult = {
  __typename?: 'ProjectQueryResult';
  count: TCoreScalars['Int']['output'];
  exists: TCoreScalars['Boolean']['output'];
  offset: TCoreScalars['Int']['output'];
  results: Array<TCoreProject>;
  total: TCoreScalars['Long']['output'];
};

export type TCoreProjectSuspendData = {
  __typename?: 'ProjectSuspendData';
  description?: TCoreMaybe<TCoreScalars['String']['output']>;
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
  httpUri: TCoreScalars['String']['output'];
  httpsUri: TCoreScalars['String']['output'];
  iosUri: TCoreScalars['String']['output'];
  name: TCoreScalars['String']['output'];
  streamingUri: TCoreScalars['String']['output'];
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
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQuery_MyOrganizationsArgs = {
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQuery_MyPermissionsArgs = {
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  owner: TCoreReferenceInput;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQuery_MyProjectsArgs = {
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQuery_PermissionsArgs = {
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQuery_PermissionsForUserArgs = {
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  owner: TCoreReferenceInput;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  userId: TCoreScalars['String']['input'];
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQuery_ProjectsArgs = {
  limit?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  offset?: TCoreInputMaybe<TCoreScalars['Int']['input']>;
  sort?: TCoreInputMaybe<Array<TCoreScalars['String']['input']>>;
  where?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreQueryLimits = {
  __typename?: 'QueryLimits';
  maxOffset: TCoreScalars['Int']['output'];
};

export type TCoreReference = {
  __typename?: 'Reference';
  id: TCoreScalars['String']['output'];
  typeId: TCoreScalars['String']['output'];
};

export type TCoreReferenceInput = {
  id: TCoreScalars['String']['input'];
  typeId: TCoreScalars['String']['input'];
};

export type TCoreRefreshTokenLimits = {
  __typename?: 'RefreshTokenLimits';
  maxRefreshTokens?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreRemoveTeam = {
  teamId: TCoreScalars['String']['input'];
};

export type TCoreRemoveTeamMembership = {
  teamId: TCoreScalars['String']['input'];
  user: TCoreReferenceInput;
};

export type TCoreRevokedTokens = {
  __typename?: 'RevokedTokens';
  owner: TCoreReference;
  revoked: TCoreScalars['Long']['output'];
  teams: Array<TCoreScalars['String']['output']>;
};

export type TCoreSearchIndexingConfigurationInput = {
  products?: TCoreInputMaybe<TCoreSearchIndexingConfigurationValuesInput>;
};

export type TCoreSearchIndexingConfigurationValuesInput = {
  status?: TCoreInputMaybe<TCoreScalars['String']['input']>;
};

export type TCoreSearchLimits = {
  __typename?: 'SearchLimits';
  maxTextSize?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreSetPermissionActionRightPermissions = {
  actionRightPermissions: Array<TCoreScalars['String']['input']>;
};

export type TCoreSetPermissionDataFences = {
  dataFences: Array<TCoreDataFenceDraft>;
};

export type TCoreSetPermissionHiddenMenuItems = {
  hiddenMenuItems: Array<TCoreScalars['String']['input']>;
};

export type TCoreSetPermissionResourceAccessPermissions = {
  resourceAccessPermissions: Array<TCoreScalars['String']['input']>;
};

export type TCoreShippingMethodLimit = {
  __typename?: 'ShippingMethodLimit';
  maxShippingMethods?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreShippingRateInputLocalizedEnumValue = {
  __typename?: 'ShippingRateInputLocalizedEnumValue';
  key: TCoreScalars['String']['output'];
  label?: TCoreMaybe<TCoreScalars['String']['output']>;
  labelAllLocales: Array<TCoreLocalizedString>;
};

export type TCoreShippingRateInputLocalizedEnumValue_LabelArgs = {
  acceptLanguage?: TCoreInputMaybe<Array<TCoreScalars['Locale']['input']>>;
  locale?: TCoreInputMaybe<TCoreScalars['Locale']['input']>;
};

export type TCoreShippingRateInputType = {
  type: TCoreScalars['String']['output'];
};

export type TCoreShoppingListLimits = {
  __typename?: 'ShoppingListLimits';
  maxLineItems?: TCoreMaybe<TCoreScalars['Int']['output']>;
  maxShoppingLists?: TCoreMaybe<TCoreScalars['Long']['output']>;
  maxTextLineItems?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreStoreDataFence = TCoreDataFence & {
  __typename?: 'StoreDataFence';
  storeKeys: Array<TCoreScalars['String']['output']>;
  type: TCoreScalars['String']['output'];
};

export type TCoreStoreLimits = {
  __typename?: 'StoreLimits';
  maxInventorySupplyChannelsPerStore?: TCoreMaybe<
    TCoreScalars['Long']['output']
  >;
  maxProductDistributionChannelsPerStore?: TCoreMaybe<
    TCoreScalars['Long']['output']
  >;
  maxProductSelectionsPerStore?: TCoreMaybe<TCoreScalars['Long']['output']>;
  maxStores?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreSubscriptionsLimits = {
  __typename?: 'SubscriptionsLimits';
  maxSubscriptions?: TCoreMaybe<TCoreScalars['Int']['output']>;
};

export type TCoreTaxCategoryLimit = {
  __typename?: 'TaxCategoryLimit';
  maxTaxCategories?: TCoreMaybe<TCoreScalars['Long']['output']>;
};

export type TCoreTeam = {
  __typename?: 'Team';
  id: TCoreScalars['String']['output'];
  members: Array<TCoreUser>;
  membersRef: Array<TCoreReference>;
  name: TCoreScalars['String']['output'];
};

export type TCoreUser = TCoreVersioned & {
  __typename?: 'User';
  businessRole?: TCoreMaybe<TCoreBusinessRole>;
  createdAt: TCoreScalars['DateTime']['output'];
  createdBy?: TCoreMaybe<TCoreInitiator>;
  email: TCoreScalars['String']['output'];
  firstName: TCoreScalars['String']['output'];
  id: TCoreScalars['String']['output'];
  language: TCoreScalars['Locale']['output'];
  lastLoginAt?: TCoreMaybe<TCoreScalars['DateTime']['output']>;
  lastModifiedAt: TCoreScalars['DateTime']['output'];
  lastModifiedBy?: TCoreMaybe<TCoreInitiator>;
  lastName: TCoreScalars['String']['output'];
  locked: TCoreScalars['Boolean']['output'];
  lowercaseEmail: TCoreScalars['String']['output'];
  numberFormat: TCoreScalars['Locale']['output'];
  timeZone?: TCoreMaybe<TCoreScalars['DateTimeZone']['output']>;
  version: TCoreScalars['Long']['output'];
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type TCoreVersioned = {
  createdAt: TCoreScalars['DateTime']['output'];
  createdBy?: TCoreMaybe<TCoreInitiator>;
  id: TCoreScalars['String']['output'];
  lastModifiedAt: TCoreScalars['DateTime']['output'];
  lastModifiedBy?: TCoreMaybe<TCoreInitiator>;
  version: TCoreScalars['Long']['output'];
};

export type TCoreZoneLimits = {
  __typename?: 'ZoneLimits';
  maxZones?: TCoreMaybe<TCoreScalars['Long']['output']>;
};
