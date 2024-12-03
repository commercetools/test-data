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
type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
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
  DateTime: { input: string; output: string };
  Json: {
    input: { [key: string]: unknown };
    output: { [key: string]: unknown };
  };
};

export type TMcSettingsAllPublicCustomApplicationsDevelopedByCommercetoolsQueryInput =
  {
    organizationId?: InputMaybe<Scalars['String']['input']>;
  };

export type TMcSettingsApplicationExtension = {
  __typename?: 'ApplicationExtension';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  navbarMenu?: Maybe<TMcSettingsNavbarMenu>;
  oAuthScopes: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum TMcSettingsAuthPermission {
  AccessToProject = 'accessToProject',
  LoggedInUser = 'loggedInUser',
  ManageMyOrganizations = 'manageMyOrganizations',
  ManageProjectSettings = 'manageProjectSettings',
  PerformDataCleanups = 'performDataCleanups',
  ViewBusinessUnits = 'viewBusinessUnits',
  ViewCartDiscounts = 'viewCartDiscounts',
  ViewCustomers = 'viewCustomers',
  ViewDiscountCodes = 'viewDiscountCodes',
  ViewOrders = 'viewOrders',
  ViewProductDiscounts = 'viewProductDiscounts',
  ViewProducts = 'viewProducts',
  ViewProjectSettings = 'viewProjectSettings',
  ViewQuotes = 'viewQuotes',
  ViewSomeDiscounts = 'viewSomeDiscounts',
  ViewUsersAndOrganizations = 'viewUsersAndOrganizations',
}

export type TMcSettingsAverageOrderValueConfiguration = {
  __typename?: 'AverageOrderValueConfiguration';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  showPreviousTimeframe: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsAverageOrderValueConfigurationInput = {
  showPreviousTimeframe: Scalars['Boolean']['input'];
};

export type TMcSettingsBatchProcessResult = {
  __typename?: 'BatchProcessResult';
  failed: Array<TMcSettingsTdlqMessageResult>;
  successful: Array<TMcSettingsTdlqMessageResult>;
};

export enum TMcSettingsBestSellingLimit {
  Fifteen = 'FIFTEEN',
  Five = 'FIVE',
  Ten = 'TEN',
}

export type TMcSettingsBusinessUnitsListMyView = {
  __typename?: 'BusinessUnitsListMyView';
  createdAt: Scalars['DateTime']['output'];
  filters?: Maybe<Array<TMcSettingsFilterValues>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  sort?: Maybe<TMcSettingsSort>;
  table?: Maybe<TMcSettingsTable>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsBusinessUnitsListMyViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  sort: TMcSettingsSortCreateInput;
  table?: InputMaybe<TMcSettingsBusinessUnitsListMyViewTableInput>;
};

export type TMcSettingsBusinessUnitsListMyViewTableInput = {
  visibleColumns: Array<Scalars['String']['input']>;
};

export enum TMcSettingsCategoryRecommendationSearchProperty {
  Attribute = 'Attribute',
  /** @deprecated The machine learning APIs are not available anymore. */
  MachineLearning = 'MachineLearning',
  ProductType = 'ProductType',
}

export type TMcSettingsCategoryRecommendationSettings = {
  __typename?: 'CategoryRecommendationSettings';
  attributeName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  searchProperty: TMcSettingsCategoryRecommendationSearchProperty;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCategoryRecommendationSettingsDataInput = {
  attributeName?: InputMaybe<Scalars['String']['input']>;
  searchProperty: TMcSettingsCategoryRecommendationSearchProperty;
};

export type TMcSettingsContactInformation = {
  __typename?: 'ContactInformation';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verifiedEmail?: Maybe<Scalars['String']['output']>;
};

export type TMcSettingsContactInformationDataInput = {
  email: Scalars['String']['input'];
};

export type TMcSettingsCustomApplication = {
  __typename?: 'CustomApplication';
  createdAt: Scalars['DateTime']['output'];
  deployments: Array<TMcSettingsCustomApplicationDeploymentPreview>;
  description?: Maybe<Scalars['String']['output']>;
  entryPointUriPath: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  installedBy: Array<TMcSettingsCustomApplicationInstallation>;
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: Scalars['String']['output'];
  owner: TMcSettingsOrganizationExtension;
  ownerId: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsCustomApplication_DeploymentsArgs = {
  params?: InputMaybe<TMcSettingsCustomApplicationDeploymentPreviewsQueryInput>;
};

export type TMcSettingsCustomApplicationDeploymentPreview = {
  __typename?: 'CustomApplicationDeploymentPreview';
  alias?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsCustomApplicationDeploymentPreviewCreateInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type TMcSettingsCustomApplicationDeploymentPreviewUpdateInput = {
  url: Scalars['String']['input'];
};

export type TMcSettingsCustomApplicationDeploymentPreviewsQueryInput = {
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsCustomApplicationDraftDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  entryPointUriPath: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLinkDraftDataInput;
  name: Scalars['String']['input'];
  permissions: Array<TMcSettingsCustomApplicationPermissionDataInput>;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLinkDraftDataInput>;
  url: Scalars['String']['input'];
};

export type TMcSettingsCustomApplicationInstallation = {
  __typename?: 'CustomApplicationInstallation';
  acceptedPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  installInAllProjects: Scalars['Boolean']['output'];
  owner: TMcSettingsOrganizationExtension;
  ownerId: Scalars['String']['output'];
  projects: Array<TMcSettingsProjectExtension>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationInstallationPermission = {
  __typename?: 'CustomApplicationInstallationPermission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  oAuthScopes: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationMenuLink = {
  __typename?: 'CustomApplicationMenuLink';
  createdAt: Scalars['DateTime']['output'];
  defaultLabel: Scalars['String']['output'];
  /** @deprecated This field has been moved outside of the menu link. */
  icon: Scalars['String']['output'];
  /** @deprecated This field has been renamed to icon. */
  iconName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<Scalars['String']['output']>;
  /** @deprecated This field has been moved outside of the menu link and is now a top level field. */
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationMenuLinkDraftDataInput = {
  defaultLabel: Scalars['String']['input'];
  labelAllLocales: Array<TMcSettingsLocalizedFieldDataInput>;
  permissions: Array<Scalars['String']['input']>;
};

export type TMcSettingsCustomApplicationPermission = {
  __typename?: 'CustomApplicationPermission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  oAuthScopes: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationPermissionDataInput = {
  name: Scalars['String']['input'];
  oAuthScopes: Array<Scalars['String']['input']>;
};

export type TMcSettingsCustomApplicationQueryInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TMcSettingsCustomApplicationQueryWhereInput>;
};

export type TMcSettingsCustomApplicationQueryWhereInput = {
  entryPointUriPath?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export enum TMcSettingsCustomApplicationStatus {
  Draft = 'DRAFT',
  PrivateUsage = 'PRIVATE_USAGE',
}

export type TMcSettingsCustomApplicationSubmenuLink = {
  __typename?: 'CustomApplicationSubmenuLink';
  createdAt: Scalars['DateTime']['output'];
  defaultLabel: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  uriPath: Scalars['String']['output'];
};

export type TMcSettingsCustomApplicationSubmenuLinkDraftDataInput = {
  defaultLabel: Scalars['String']['input'];
  labelAllLocales: Array<TMcSettingsLocalizedFieldDataInput>;
  permissions: Array<Scalars['String']['input']>;
  uriPath: Scalars['String']['input'];
};

export type TMcSettingsCustomApplicationsMaintainerContactEmailVerificationConfirmation =
  {
    __typename?: 'CustomApplicationsMaintainerContactEmailVerificationConfirmation';
    organizationId: Scalars['ID']['output'];
  };

export type TMcSettingsCustomApplicationsMaintainerContactEmailVerificationRequest =
  {
    __typename?: 'CustomApplicationsMaintainerContactEmailVerificationRequest';
    token?: Maybe<Scalars['String']['output']>;
  };

export type TMcSettingsCustomApplicationsPagedQueryResult = {
  __typename?: 'CustomApplicationsPagedQueryResult';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TMcSettingsCustomApplication>;
  total: Scalars['Int']['output'];
};

export type TMcSettingsCustomView = {
  __typename?: 'CustomView';
  createdAt: Scalars['DateTime']['output'];
  defaultLabel: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  installedBy: Array<TMcSettingsCustomViewInstallation>;
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<Scalars['String']['output']>;
  owner: TMcSettingsOrganizationExtension;
  ownerId: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: Maybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsCustomViewDraftDataInput = {
  defaultLabel: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  labelAllLocales: Array<TMcSettingsLocalizedFieldDataInput>;
  locators: Array<Scalars['String']['input']>;
  permissions: Array<TMcSettingsCustomViewPermissionDataInput>;
  type: TMcSettingsCustomViewType;
  /**
   * The value of this property depends on the value of the 'type' property value.
   * In case the `type` value is `CustomPanel`, you are supposed to provide it's size.
   */
  typeSettings?: InputMaybe<TMcSettingsCustomViewTypeSettingsInput>;
  url: Scalars['String']['input'];
};

export type TMcSettingsCustomViewInstallation = {
  __typename?: 'CustomViewInstallation';
  acceptedPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  installInAllProjects: Scalars['Boolean']['output'];
  owner: TMcSettingsOrganizationExtension;
  ownerId: Scalars['String']['output'];
  projects: Array<TMcSettingsProjectExtension>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomViewInstallationPermission = {
  __typename?: 'CustomViewInstallationPermission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  oAuthScopes: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomViewLocator = {
  __typename?: 'CustomViewLocator';
  key: Scalars['String']['output'];
};

export type TMcSettingsCustomViewLocatorGroup = {
  __typename?: 'CustomViewLocatorGroup';
  key: Scalars['String']['output'];
  locators: Array<TMcSettingsCustomViewLocator>;
};

export type TMcSettingsCustomViewPermission = {
  __typename?: 'CustomViewPermission';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  oAuthScopes: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsCustomViewPermissionDataInput = {
  name: Scalars['String']['input'];
  oAuthScopes: Array<Scalars['String']['input']>;
};

export type TMcSettingsCustomViewQueryInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TMcSettingsCustomViewQueryWhereInput>;
};

export type TMcSettingsCustomViewQueryWhereInput = {
  defaultLabel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locators?: InputMaybe<Array<Scalars['String']['input']>>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TMcSettingsCustomViewType>;
};

export enum TMcSettingsCustomViewSize {
  Large = 'LARGE',
  Small = 'SMALL',
}

export enum TMcSettingsCustomViewStatus {
  Draft = 'DRAFT',
  PrivateUsage = 'PRIVATE_USAGE',
}

export enum TMcSettingsCustomViewType {
  CustomPanel = 'CustomPanel',
}

export type TMcSettingsCustomViewTypeSettings = {
  __typename?: 'CustomViewTypeSettings';
  size?: Maybe<TMcSettingsCustomViewSize>;
};

export type TMcSettingsCustomViewTypeSettingsInput = {
  size?: InputMaybe<TMcSettingsCustomViewSize>;
};

export type TMcSettingsCustomViewsPagedQueryResult = {
  __typename?: 'CustomViewsPagedQueryResult';
  count: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TMcSettingsCustomView>;
  total: Scalars['Int']['output'];
};

export type TMcSettingsCustomerEmailValidationSettingsInput = {
  isCustomerEmailValidationDisabled: Scalars['Boolean']['input'];
};

export type TMcSettingsCustomersSearchListMyView = {
  __typename?: 'CustomersSearchListMyView';
  createdAt: Scalars['DateTime']['output'];
  filters?: Maybe<Array<TMcSettingsFilterValues>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  sort?: Maybe<TMcSettingsSort>;
  table?: Maybe<TMcSettingsTable>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsCustomersSearchListMyViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  sort: TMcSettingsSortCreateInput;
  table?: InputMaybe<TMcSettingsCustomersSearchListMyViewTableInput>;
};

export type TMcSettingsCustomersSearchListMyViewTableInput = {
  visibleColumns: Array<Scalars['String']['input']>;
};

export type TMcSettingsDashboardView = {
  __typename?: 'DashboardView';
  createdAt: Scalars['DateTime']['output'];
  currencyCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  layout?: Maybe<Array<TMcSettingsLayoutCard>>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  timeZone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsDashboardViewInput = {
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  layout: Array<TMcSettingsLayoutCardInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export enum TMcSettingsDateFilterType {
  Custom = 'CUSTOM',
  Day = 'DAY',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Week = 'WEEK',
  Year = 'YEAR',
}

export enum TMcSettingsDiscountType {
  CartDiscount = 'CartDiscount',
  DiscountCode = 'DiscountCode',
  ProductDiscount = 'ProductDiscount',
}

export type TMcSettingsDiscountsCustomView = {
  __typename?: 'DiscountsCustomView';
  createdAt: Scalars['DateTime']['output'];
  filters?: Maybe<Array<TMcSettingsFilterValues>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  search?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<TMcSettingsSort>;
  table?: Maybe<TMcSettingsTable>;
  type: TMcSettingsDiscountType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsDiscountsCustomViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort: TMcSettingsSortCreateInput;
  table?: InputMaybe<TMcSettingsOrdersListViewTableInput>;
};

export enum TMcSettingsExistence {
  All = 'All',
  Empty = 'Empty',
  Filled = 'Filled',
}

export type TMcSettingsFeature = {
  __typename?: 'Feature';
  name: Scalars['String']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  value: Scalars['Boolean']['output'];
};

export type TMcSettingsFeatureQueryInput = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
  projectKey?: InputMaybe<Scalars['String']['input']>;
};

export enum TMcSettingsFilterType {
  CustomField = 'CustomField',
  EqualTo = 'EqualTo',
  In = 'In',
  LessThan = 'LessThan',
  Missing = 'Missing',
  MissingIn = 'MissingIn',
  MoreThan = 'MoreThan',
  Range = 'Range',
}

export type TMcSettingsFilterValues = {
  __typename?: 'FilterValues';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  json: Scalars['Json']['output'];
  target: Scalars['String']['output'];
  type: TMcSettingsFilterType;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsFilterValuesCreateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  json: Scalars['Json']['input'];
  target: Scalars['String']['input'];
  type: TMcSettingsFilterType;
};

export type TMcSettingsImageRegex = {
  __typename?: 'ImageRegex';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  small?: Maybe<TMcSettingsImageRegexOptions>;
  thumb?: Maybe<TMcSettingsImageRegexOptions>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsImageRegexDataInput = {
  small?: InputMaybe<TMcSettingsImageRegexOptionsInput>;
  thumb?: InputMaybe<TMcSettingsImageRegexOptionsInput>;
};

export type TMcSettingsImageRegexOptions = {
  __typename?: 'ImageRegexOptions';
  flag?: Maybe<Scalars['String']['output']>;
  replace: Scalars['String']['output'];
  search: Scalars['String']['output'];
};

export type TMcSettingsImageRegexOptionsInput = {
  flag?: InputMaybe<Scalars['String']['input']>;
  replace: Scalars['String']['input'];
  search: Scalars['String']['input'];
};

export type TMcSettingsLayoutCard = {
  __typename?: 'LayoutCard';
  averageOrderValueConfiguration?: Maybe<TMcSettingsAverageOrderValueConfiguration>;
  createdAt: Scalars['DateTime']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  key: TMcSettingsMetricCardType;
  maxHeight?: Maybe<Scalars['Int']['output']>;
  maxWidth?: Maybe<Scalars['Int']['output']>;
  minHeight?: Maybe<Scalars['Int']['output']>;
  minWidth?: Maybe<Scalars['Int']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  orderStatusConfiguration?: Maybe<TMcSettingsOrderStatusConfiguration>;
  resizeHandles: Array<Scalars['String']['output']>;
  resourcesNumbersConfiguration?: Maybe<TMcSettingsResourcesNumbersConfiguration>;
  salesPerformanceConfiguration?: Maybe<TMcSettingsSalesPerformanceConfiguration>;
  topProductsConfiguration?: Maybe<TMcSettingsTopProductsConfiguration>;
  totalOrdersConfiguration?: Maybe<TMcSettingsTotalOrdersConfiguration>;
  totalSalesConfiguration?: Maybe<TMcSettingsTotalSalesConfiguration>;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['Int']['output'];
  xPosition: Scalars['Int']['output'];
  yPosition: Scalars['Int']['output'];
};

export type TMcSettingsLayoutCardInput = {
  averageOrderValueConfiguration?: InputMaybe<TMcSettingsAverageOrderValueConfigurationInput>;
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  key: TMcSettingsMetricCardType;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  minWidth?: InputMaybe<Scalars['Int']['input']>;
  nameAllLocales?: InputMaybe<Array<TMcSettingsLocalizedFieldCreateInput>>;
  orderStatusConfiguration?: InputMaybe<TMcSettingsOrderStatusConfigurationInput>;
  resizeHandles?: InputMaybe<Array<Scalars['String']['input']>>;
  resourcesNumbersConfiguration?: InputMaybe<TMcSettingsResourcesNumbersConfigurationInput>;
  salesPerformanceConfiguration?: InputMaybe<TMcSettingsSalesPerformanceConfigurationInput>;
  topProductsConfiguration?: InputMaybe<TMcSettingsTopProductsConfigurationInput>;
  totalOrdersConfiguration?: InputMaybe<TMcSettingsTotalOrdersConfigurationInput>;
  totalSalesConfiguration?: InputMaybe<TMcSettingsTotalSalesConfigurationInput>;
  width: Scalars['Int']['input'];
  xPosition: Scalars['Int']['input'];
  yPosition: Scalars['Int']['input'];
};

export type TMcSettingsLocalizedField = {
  __typename?: 'LocalizedField';
  locale: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TMcSettingsLocalizedFieldCreateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TMcSettingsLocalizedFieldDataInput = {
  locale: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TMcSettingsMessage = {
  __typename?: 'Message';
  ackId: Scalars['String']['output'];
  data: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type TMcSettingsMessageInput = {
  ackId: Scalars['String']['input'];
  data: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export enum TMcSettingsMetricCardType {
  AverageOrderValue = 'AVERAGE_ORDER_VALUE',
  OrderStatus = 'ORDER_STATUS',
  ProductTopVariants = 'PRODUCT_TOP_VARIANTS',
  ResourcesNumbers = 'RESOURCES_NUMBERS',
  SalesPerformance = 'SALES_PERFORMANCE',
  TotalOrders = 'TOTAL_ORDERS',
  TotalSales = 'TOTAL_SALES',
}

export type TMcSettingsMigrationMatchingScore = {
  __typename?: 'MigrationMatchingScore';
  matchFrom: Scalars['String']['output'];
  matchTo: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type TMcSettingsMutation = {
  __typename?: 'Mutation';
  activateBusinessUnitsListMyView?: Maybe<TMcSettingsBusinessUnitsListMyView>;
  activateCartDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  activateCustomersSearchListMyView?: Maybe<TMcSettingsCustomersSearchListMyView>;
  activateDashboardView?: Maybe<TMcSettingsDashboardView>;
  activateDiscountCodesCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  activateOrderDetailView?: Maybe<TMcSettingsOrderDetailView>;
  activateOrdersListView?: Maybe<TMcSettingsOrdersListView>;
  activateOrganizationExtensionOidcSsoConfig?: Maybe<TMcSettingsOrganizationExtension>;
  activatePimSearchListView?: Maybe<TMcSettingsPimSearchListView>;
  activateProductDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  activateProductTypeAttributesView?: Maybe<TMcSettingsProductTypeAttributesView>;
  activateProjectSettingsStoresView?: Maybe<TMcSettingsProjectSettingsStoresView>;
  activateQuotesListView?: Maybe<TMcSettingsQuotesListView>;
  changeCustomApplicationStatus?: Maybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  changeCustomViewStatus?: Maybe<TMcSettingsRestrictedCustomViewForOrganization>;
  createBusinessUnitsListMyView: TMcSettingsBusinessUnitsListMyView;
  createCartDiscountsCustomView: TMcSettingsDiscountsCustomView;
  createCustomApplication?: Maybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  createCustomApplicationDeploymentPreview: TMcSettingsCustomApplicationDeploymentPreview;
  createCustomView?: Maybe<TMcSettingsRestrictedCustomViewForOrganization>;
  createCustomersSearchListMyView: TMcSettingsCustomersSearchListMyView;
  createDashboardView: TMcSettingsDashboardView;
  createDiscountCodesCustomView: TMcSettingsDiscountsCustomView;
  createOrderDetailView: TMcSettingsOrderDetailView;
  createOrdersListView: TMcSettingsOrdersListView;
  createPimSearchListView: TMcSettingsPimSearchListView;
  createProductDiscountsCustomView: TMcSettingsDiscountsCustomView;
  createProductTypeAttributesView: TMcSettingsProductTypeAttributesView;
  createProjectSettingsStoresView: TMcSettingsProjectSettingsStoresView;
  createQuotesListView: TMcSettingsQuotesListView;
  createVariantPricesListView?: Maybe<TMcSettingsVariantPricesListView>;
  deactivateBusinessUnitsListMyView?: Maybe<TMcSettingsOrdersListView>;
  deactivateCartDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  deactivateCustomersSearchListMyView?: Maybe<TMcSettingsOrdersListView>;
  deactivateDashboardView?: Maybe<TMcSettingsDashboardView>;
  deactivateDiscountCodesCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  deactivateOrderDetailView?: Maybe<TMcSettingsOrderDetailView>;
  deactivateOrdersListView?: Maybe<TMcSettingsOrdersListView>;
  deactivateOrganizationExtensionOidcSsoConfig?: Maybe<TMcSettingsOrganizationExtension>;
  deactivatePimSearchListView?: Maybe<TMcSettingsPimSearchListView>;
  deactivateProductDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  deactivateProductTypeAttributesView?: Maybe<TMcSettingsProductTypeAttributesView>;
  deactivateProjectSettingsStoresView?: Maybe<TMcSettingsProjectSettingsStoresView>;
  deactivateQuotesListView?: Maybe<TMcSettingsQuotesListView>;
  deleteAllDashboardViews: Array<TMcSettingsDashboardView>;
  deleteAllOrderDetailViews: Array<TMcSettingsOrderDetailView>;
  deleteAllOrdersListViews: Array<TMcSettingsOrdersListView>;
  deleteAllQuotesListViews: Array<TMcSettingsQuotesListView>;
  deleteBusinessUnitsListMyView?: Maybe<TMcSettingsBusinessUnitsListMyView>;
  deleteCartDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  deleteCustomApplication?: Maybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  deleteCustomApplicationDeploymentPreview: TMcSettingsCustomApplicationDeploymentPreview;
  deleteCustomView?: Maybe<TMcSettingsRestrictedCustomViewForOrganization>;
  deleteCustomersSearchListMyView?: Maybe<TMcSettingsCustomersSearchListMyView>;
  deleteDashboardView?: Maybe<TMcSettingsDashboardView>;
  deleteDiscountCodesCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  deleteOrderDetailView?: Maybe<TMcSettingsOrderDetailView>;
  deleteOrdersListView?: Maybe<TMcSettingsOrdersListView>;
  deletePimSearchListView?: Maybe<TMcSettingsPimSearchListView>;
  deleteProductDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  deleteProductTypeAttributesView?: Maybe<TMcSettingsProductTypeAttributesView>;
  deleteProjectSettingsStoresView?: Maybe<TMcSettingsProjectSettingsStoresView>;
  deleteQuotesListView?: Maybe<TMcSettingsQuotesListView>;
  installCustomApplication?: Maybe<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  installCustomView?: Maybe<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  /** @deprecated Experimental feature - For internal usage only */
  moveMessagesFromDeadLetterQueueToMainQueue?: Maybe<TMcSettingsBatchProcessResult>;
  random: Scalars['String']['output'];
  /** @deprecated Experimental feature - For internal usage only */
  removeMessagesFromDeadLetterQueue?: Maybe<TMcSettingsBatchProcessResult>;
  sendLinkToVerifyCustomApplicationsMaintainerContactEmail?: Maybe<TMcSettingsCustomApplicationsMaintainerContactEmailVerificationRequest>;
  setCustomApplicationsMaintainerContactInformation?: Maybe<TMcSettingsOrganizationExtension>;
  setOrganizationExtensionOidcSsoConfig?: Maybe<TMcSettingsOrganizationExtension>;
  setProjectExtensionCategoryRecommendation?: Maybe<TMcSettingsProjectExtension>;
  setProjectExtensionCustomerEmailValidationSettings?: Maybe<TMcSettingsProjectExtension>;
  setProjectExtensionImageRegex?: Maybe<TMcSettingsProjectExtension>;
  setProjectExtensionImportSampleDataset?: Maybe<TMcSettingsProjectExtension>;
  setProjectExtensionOrderStatesVisibility?: Maybe<TMcSettingsProjectExtension>;
  setProjectExtensionRichTextEditorSettings?: Maybe<TMcSettingsProjectExtension>;
  uninstallCustomApplication?: Maybe<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  uninstallCustomView?: Maybe<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  updateBusinessUnitsListMyView?: Maybe<TMcSettingsBusinessUnitsListMyView>;
  updateCartDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  updateCustomApplication?: Maybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  updateCustomApplicationDeploymentPreview: TMcSettingsCustomApplicationDeploymentPreview;
  updateCustomApplicationProjectsInstallation?: Maybe<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  updateCustomView?: Maybe<TMcSettingsRestrictedCustomViewForOrganization>;
  updateCustomViewProjectsInstallation?: Maybe<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  updateCustomersSearchListMyView?: Maybe<TMcSettingsCustomersSearchListMyView>;
  updateDashboardView?: Maybe<TMcSettingsDashboardView>;
  updateDiscountCodesCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  updateOrderDetailView?: Maybe<TMcSettingsOrderDetailView>;
  updateOrdersListView?: Maybe<TMcSettingsOrdersListView>;
  updatePimSearchListView?: Maybe<TMcSettingsPimSearchListView>;
  updateProductDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  updateProductTypeAttributesView: TMcSettingsProductTypeAttributesView;
  updateProjectSettingsStoresView?: Maybe<TMcSettingsProjectSettingsStoresView>;
  updateQuotesListView?: Maybe<TMcSettingsQuotesListView>;
  updateRuleBuilderQuickSelectionValues?: Maybe<TMcSettingsRuleBuilderQuickSelectionValues>;
  updateVariantPricesListView?: Maybe<TMcSettingsVariantPricesListView>;
  verifyCustomApplicationsMaintainerContactEmail?: Maybe<TMcSettingsCustomApplicationsMaintainerContactEmailVerificationConfirmation>;
};

export type TMcSettingsMutation_ActivateBusinessUnitsListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateCartDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateCustomersSearchListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateDashboardViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateDiscountCodesCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateOrderDetailViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateOrdersListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateOrganizationExtensionOidcSsoConfigArgs =
  {
    organizationId: Scalars['String']['input'];
  };

export type TMcSettingsMutation_ActivatePimSearchListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateProductDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateProductTypeAttributesViewArgs = {
  id: Scalars['ID']['input'];
  isVariant: Scalars['Boolean']['input'];
  productTypeId: Scalars['String']['input'];
};

export type TMcSettingsMutation_ActivateProjectSettingsStoresViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateQuotesListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_ChangeCustomApplicationStatusArgs = {
  applicationId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  status: TMcSettingsCustomApplicationStatus;
};

export type TMcSettingsMutation_ChangeCustomViewStatusArgs = {
  customViewId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  status: TMcSettingsCustomViewStatus;
};

export type TMcSettingsMutation_CreateBusinessUnitsListMyViewArgs = {
  data: TMcSettingsBusinessUnitsListMyViewInput;
};

export type TMcSettingsMutation_CreateCartDiscountsCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
};

export type TMcSettingsMutation_CreateCustomApplicationArgs = {
  data: TMcSettingsCustomApplicationDraftDataInput;
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_CreateCustomApplicationDeploymentPreviewArgs = {
  applicationId: Scalars['ID']['input'];
  data: TMcSettingsCustomApplicationDeploymentPreviewCreateInput;
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_CreateCustomViewArgs = {
  data: TMcSettingsCustomViewDraftDataInput;
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_CreateCustomersSearchListMyViewArgs = {
  data: TMcSettingsCustomersSearchListMyViewInput;
};

export type TMcSettingsMutation_CreateDashboardViewArgs = {
  data: TMcSettingsDashboardViewInput;
};

export type TMcSettingsMutation_CreateDiscountCodesCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
};

export type TMcSettingsMutation_CreateOrderDetailViewArgs = {
  data: TMcSettingsOrderDetailViewInput;
};

export type TMcSettingsMutation_CreateOrdersListViewArgs = {
  data: TMcSettingsOrdersListViewInput;
};

export type TMcSettingsMutation_CreatePimSearchListViewArgs = {
  data: TMcSettingsPimSearchListViewInput;
};

export type TMcSettingsMutation_CreateProductDiscountsCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
};

export type TMcSettingsMutation_CreateProductTypeAttributesViewArgs = {
  data: TMcSettingsProductTypeAttributesViewInput;
};

export type TMcSettingsMutation_CreateProjectSettingsStoresViewArgs = {
  data: TMcSettingsProjectSettingsStoresViewInput;
};

export type TMcSettingsMutation_CreateQuotesListViewArgs = {
  data: TMcSettingsQuotesListViewInput;
};

export type TMcSettingsMutation_CreateVariantPricesListViewArgs = {
  data: TMcSettingsVariantPricesListViewInput;
};

export type TMcSettingsMutation_DeactivateBusinessUnitsListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateCartDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateCustomersSearchListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateDashboardViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateDiscountCodesCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateOrderDetailViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateOrdersListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateOrganizationExtensionOidcSsoConfigArgs =
  {
    organizationId: Scalars['String']['input'];
  };

export type TMcSettingsMutation_DeactivatePimSearchListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateProductDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateProductTypeAttributesViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateProjectSettingsStoresViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateQuotesListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteBusinessUnitsListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteCartDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteCustomApplicationArgs = {
  applicationId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_DeleteCustomApplicationDeploymentPreviewArgs = {
  deploymentId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_DeleteCustomViewArgs = {
  customViewId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_DeleteCustomersSearchListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteDashboardViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteDiscountCodesCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteOrderDetailViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteOrdersListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeletePimSearchListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteProductDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteProductTypeAttributesViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteProjectSettingsStoresViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteQuotesListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_InstallCustomApplicationArgs = {
  applicationId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  projectKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TMcSettingsMutation_InstallCustomViewArgs = {
  customViewId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  projectKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TMcSettingsMutation_MoveMessagesFromDeadLetterQueueToMainQueueArgs =
  {
    messages: Array<TMcSettingsMessageInput>;
  };

export type TMcSettingsMutation_RandomArgs = {
  byteLength: Scalars['Int']['input'];
};

export type TMcSettingsMutation_RemoveMessagesFromDeadLetterQueueArgs = {
  messages: Array<TMcSettingsMessageInput>;
};

export type TMcSettingsMutation_SendLinkToVerifyCustomApplicationsMaintainerContactEmailArgs =
  {
    organizationId: Scalars['String']['input'];
  };

export type TMcSettingsMutation_SetCustomApplicationsMaintainerContactInformationArgs =
  {
    data?: InputMaybe<TMcSettingsContactInformationDataInput>;
    organizationId: Scalars['String']['input'];
  };

export type TMcSettingsMutation_SetOrganizationExtensionOidcSsoConfigArgs = {
  data: TMcSettingsOidcSsoConfigDataInput;
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_SetProjectExtensionCategoryRecommendationArgs =
  {
    data?: InputMaybe<TMcSettingsCategoryRecommendationSettingsDataInput>;
  };

export type TMcSettingsMutation_SetProjectExtensionCustomerEmailValidationSettingsArgs =
  {
    data?: InputMaybe<TMcSettingsCustomerEmailValidationSettingsInput>;
  };

export type TMcSettingsMutation_SetProjectExtensionImageRegexArgs = {
  data?: InputMaybe<TMcSettingsImageRegexDataInput>;
};

export type TMcSettingsMutation_SetProjectExtensionImportSampleDatasetArgs = {
  data?: InputMaybe<TMcSettingsSampleDatasets>;
};

export type TMcSettingsMutation_SetProjectExtensionOrderStatesVisibilityArgs = {
  data?: InputMaybe<Array<InputMaybe<TMcSettingsOrderStatesVisibility>>>;
};

export type TMcSettingsMutation_SetProjectExtensionRichTextEditorSettingsArgs =
  {
    data?: InputMaybe<TMcSettingsRichTextEditorSettingsInput>;
  };

export type TMcSettingsMutation_UninstallCustomApplicationArgs = {
  installedApplicationId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_UninstallCustomViewArgs = {
  installedCustomViewId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_UpdateBusinessUnitsListMyViewArgs = {
  data: TMcSettingsBusinessUnitsListMyViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateCartDiscountsCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateCustomApplicationArgs = {
  applicationId: Scalars['ID']['input'];
  data: TMcSettingsCustomApplicationDraftDataInput;
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_UpdateCustomApplicationDeploymentPreviewArgs = {
  data: TMcSettingsCustomApplicationDeploymentPreviewUpdateInput;
  deploymentId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_UpdateCustomApplicationProjectsInstallationArgs =
  {
    installedApplicationId: Scalars['ID']['input'];
    organizationId: Scalars['String']['input'];
    projectKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type TMcSettingsMutation_UpdateCustomViewArgs = {
  customViewId: Scalars['String']['input'];
  data: TMcSettingsCustomViewDraftDataInput;
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsMutation_UpdateCustomViewProjectsInstallationArgs = {
  installedCustomViewId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  projectKeys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TMcSettingsMutation_UpdateCustomersSearchListMyViewArgs = {
  data: TMcSettingsCustomersSearchListMyViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateDashboardViewArgs = {
  data: TMcSettingsDashboardViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateDiscountCodesCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateOrderDetailViewArgs = {
  data: TMcSettingsOrderDetailViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateOrdersListViewArgs = {
  data: TMcSettingsOrdersListViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdatePimSearchListViewArgs = {
  data: TMcSettingsPimSearchListViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateProductDiscountsCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateProductTypeAttributesViewArgs = {
  data: TMcSettingsProductTypeAttributesViewUpdateInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateProjectSettingsStoresViewArgs = {
  data: TMcSettingsProjectSettingsStoresViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateQuotesListViewArgs = {
  data: TMcSettingsQuotesListViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateRuleBuilderQuickSelectionValuesArgs = {
  data: TMcSettingsRuleBuilderQuickSelectionInput;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TMcSettingsMutation_UpdateVariantPricesListViewArgs = {
  data: TMcSettingsVariantPricesListViewInput;
  id: Scalars['ID']['input'];
};

export type TMcSettingsMutation_VerifyCustomApplicationsMaintainerContactEmailArgs =
  {
    token: Scalars['String']['input'];
  };

export type TMcSettingsMyCustomApplication = {
  __typename?: 'MyCustomApplication';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entryPointUriPath: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  organizationName: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsMyCustomApplicationQueryInput = {
  where?: InputMaybe<TMcSettingsMyCustomApplicationQueryWhereInput>;
};

export type TMcSettingsMyCustomApplicationQueryWhereInput = {
  status?: InputMaybe<TMcSettingsCustomApplicationStatus>;
};

export type TMcSettingsMyCustomView = {
  __typename?: 'MyCustomView';
  createdAt: Scalars['DateTime']['output'];
  defaultLabel: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<Scalars['String']['output']>;
  organizationId: Scalars['String']['output'];
  organizationName: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: Maybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsMyCustomViewsQueryInput = {
  where?: InputMaybe<TMcSettingsMyCustomViewsQueryWhereInput>;
};

export type TMcSettingsMyCustomViewsQueryWhereInput = {
  status?: InputMaybe<TMcSettingsCustomViewStatus>;
};

export type TMcSettingsNavbarMenu = {
  __typename?: 'NavbarMenu';
  createdAt: Scalars['DateTime']['output'];
  featureToggle?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<TMcSettingsOAuthScope>;
  submenu: Array<TMcSettingsNavbarSubmenu>;
  updatedAt: Scalars['DateTime']['output'];
  uriPath: Scalars['String']['output'];
};

export type TMcSettingsNavbarSubmenu = {
  __typename?: 'NavbarSubmenu';
  createdAt: Scalars['DateTime']['output'];
  featureToggle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<TMcSettingsOAuthScope>;
  updatedAt: Scalars['DateTime']['output'];
  uriPath: Scalars['String']['output'];
};

export type TMcSettingsNestedTable = {
  __typename?: 'NestedTable';
  visibleColumns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type TMcSettingsNestedTableInput = {
  visibleColumns?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum TMcSettingsOAuthScope {
  ManageBusinessUnits = 'ManageBusinessUnits',
  ManageCartDiscounts = 'ManageCartDiscounts',
  ManageCategories = 'ManageCategories',
  ManageCustomerGroups = 'ManageCustomerGroups',
  ManageCustomers = 'ManageCustomers',
  ManageDeveloperSettings = 'ManageDeveloperSettings',
  ManageDiscountCodes = 'ManageDiscountCodes',
  ManageImportSinks = 'ManageImportSinks',
  ManageOrders = 'ManageOrders',
  ManageProductDiscounts = 'ManageProductDiscounts',
  ManageProductTypes = 'ManageProductTypes',
  ManageProducts = 'ManageProducts',
  ManageProject = 'ManageProject',
  ManageProjectSettings = 'ManageProjectSettings',
  ViewBusinessUnits = 'ViewBusinessUnits',
  ViewCartDiscounts = 'ViewCartDiscounts',
  ViewCategories = 'ViewCategories',
  ViewCustomerGroups = 'ViewCustomerGroups',
  ViewCustomers = 'ViewCustomers',
  ViewDeveloperSettings = 'ViewDeveloperSettings',
  ViewDiscountCodes = 'ViewDiscountCodes',
  ViewImportSinks = 'ViewImportSinks',
  ViewOrders = 'ViewOrders',
  ViewProductDiscounts = 'ViewProductDiscounts',
  ViewProductTypes = 'ViewProductTypes',
  ViewProducts = 'ViewProducts',
  ViewProjectSettings = 'ViewProjectSettings',
}

export type TMcSettingsOidcSsoConfig = {
  __typename?: 'OidcSsoConfig';
  authorityUrl: Scalars['String']['output'];
  clientId: Scalars['String']['output'];
  clientSecret?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  logoutUrl?: Maybe<Scalars['String']['output']>;
  sessionTokenExpTimeSeconds?: Maybe<Scalars['Int']['output']>;
  teamIdForNewUsers: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsOidcSsoConfigDataInput = {
  authorityUrl: Scalars['String']['input'];
  clientId: Scalars['String']['input'];
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  logoutUrl?: InputMaybe<Scalars['String']['input']>;
  sessionTokenExpTimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  teamIdForNewUsers: Scalars['String']['input'];
};

export type TMcSettingsOrderDetailView = {
  __typename?: 'OrderDetailView';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  table?: Maybe<TMcSettingsTable>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsOrderDetailViewInput = {
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  table?: InputMaybe<TMcSettingsOrderDetailViewTableInput>;
};

export type TMcSettingsOrderDetailViewTableInput = {
  visibleColumns: Array<Scalars['String']['input']>;
};

export enum TMcSettingsOrderStatesVisibility {
  HideOrderState = 'HideOrderState',
  HidePaymentState = 'HidePaymentState',
  HideShipmentState = 'HideShipmentState',
}

export type TMcSettingsOrderStatusConfiguration = {
  __typename?: 'OrderStatusConfiguration';
  createdAt: Scalars['DateTime']['output'];
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: Maybe<Scalars['DateTime']['output']>;
  dateTo?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsOrderStatusConfigurationInput = {
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: InputMaybe<Scalars['DateTime']['input']>;
  dateTo?: InputMaybe<Scalars['DateTime']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsOrdersListView = {
  __typename?: 'OrdersListView';
  createdAt: Scalars['DateTime']['output'];
  filters?: Maybe<Array<TMcSettingsFilterValues>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  search?: Maybe<Scalars['String']['output']>;
  searchParams?: Maybe<Scalars['Json']['output']>;
  sort?: Maybe<TMcSettingsSort>;
  table?: Maybe<TMcSettingsTable>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsOrdersListViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchParams?: InputMaybe<Scalars['Json']['input']>;
  sort: TMcSettingsSortCreateInput;
  table?: InputMaybe<TMcSettingsOrdersListViewTableInput>;
};

export type TMcSettingsOrdersListViewTableInput = {
  visibleColumns: Array<Scalars['String']['input']>;
};

export type TMcSettingsOrganizationExtension = {
  __typename?: 'OrganizationExtension';
  applicationsMaintainerContactInformation?: Maybe<TMcSettingsContactInformation>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  installedApplications: Array<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  installedCustomViews: Array<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  oidcSsoConfig?: Maybe<TMcSettingsOidcSsoConfig>;
  organizationId: Scalars['String']['output'];
  registeredApplications: Array<TMcSettingsRestrictedCustomApplicationForOrganization>;
  registeredCustomViews: Array<TMcSettingsRestrictedCustomViewForOrganization>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsOrganizationExtensionForCustomApplication = {
  __typename?: 'OrganizationExtensionForCustomApplication';
  application: TMcSettingsRestrictedCustomApplicationForOrganization;
  id: Scalars['ID']['output'];
  organizationId: Scalars['String']['output'];
  organizationName?: Maybe<Scalars['String']['output']>;
};

export type TMcSettingsOrganizationExtensionForCustomView = {
  __typename?: 'OrganizationExtensionForCustomView';
  customView?: Maybe<TMcSettingsRestrictedCustomViewForOrganization>;
  id: Scalars['ID']['output'];
  organizationId: Scalars['String']['output'];
  organizationName?: Maybe<Scalars['String']['output']>;
};

export type TMcSettingsPimSearchListView = {
  __typename?: 'PimSearchListView';
  createdAt: Scalars['DateTime']['output'];
  expandedRows: Array<Scalars['String']['output']>;
  filters?: Maybe<Array<TMcSettingsFilterValues>>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  search?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<TMcSettingsSort>;
  table?: Maybe<TMcSettingsTable>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsPimSearchListViewInput = {
  expandedRows?: InputMaybe<Array<Scalars['String']['input']>>;
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort: TMcSettingsSortCreateInput;
  table?: InputMaybe<TMcSettingsPimSearchListViewTableInput>;
};

export type TMcSettingsPimSearchListViewTableInput = {
  nestedTable?: InputMaybe<TMcSettingsNestedTableInput>;
  visibleColumns: Array<Scalars['String']['input']>;
};

export type TMcSettingsProductTypeAttributesView = {
  __typename?: 'ProductTypeAttributesView';
  createdAt: Scalars['DateTime']['output'];
  existence?: Maybe<TMcSettingsExistence>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isVariant?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  pinnedAttributes: Array<Scalars['String']['output']>;
  productTypeId: Scalars['String']['output'];
  projectKey: Scalars['String']['output'];
  searchTerm?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsProductTypeAttributesViewInput = {
  existence?: InputMaybe<TMcSettingsExistence>;
  isVariant?: InputMaybe<Scalars['Boolean']['input']>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  pinnedAttributes: Array<Scalars['String']['input']>;
  productTypeId: Scalars['String']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsProductTypeAttributesViewUpdateInput = {
  existence?: InputMaybe<TMcSettingsExistence>;
  isVariant?: InputMaybe<Scalars['Boolean']['input']>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  pinnedAttributes: Array<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsProjectExtension = {
  __typename?: 'ProjectExtension';
  /** @deprecated Feature not available anymore */
  applications: Array<TMcSettingsApplicationExtension>;
  categoryRecommendationSettings?: Maybe<TMcSettingsCategoryRecommendationSettings>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imageRegex?: Maybe<TMcSettingsImageRegex>;
  installedApplications: Array<TMcSettingsRestrictedCustomApplicationInstallationForProject>;
  installedCustomViews: Array<TMcSettingsRestrictedCustomViewInstallationForProject>;
  isCustomerEmailValidationDisabled: Scalars['Boolean']['output'];
  isRichTextEditorEnabled: Scalars['Boolean']['output'];
  orderStatesVisibility: Array<TMcSettingsOrderStatesVisibility>;
  projectKey: Scalars['String']['output'];
  sampleDataImport?: Maybe<TMcSettingsSampleDataImportMetadata>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsProjectExtension_ApplicationsArgs = {
  where?: InputMaybe<TMcSettingsRestrictedApplicationExtensionWhereInput>;
};

export type TMcSettingsProjectExtension_InstalledApplicationsArgs = {
  where?: InputMaybe<TMcSettingsRestrictedCustomApplicationInstallationForProjectWhereInput>;
};

export type TMcSettingsProjectExtension_InstalledCustomViewsArgs = {
  where?: InputMaybe<TMcSettingsRestrictedCustomViewInstallationForProjectWhereInput>;
};

export type TMcSettingsProjectSettingsStoresView = {
  __typename?: 'ProjectSettingsStoresView';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  sort?: Maybe<TMcSettingsSort>;
  table?: Maybe<TMcSettingsTable>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsProjectSettingsStoresViewInput = {
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  sort: TMcSettingsSortCreateInput;
  table?: InputMaybe<TMcSettingsProjectSettingsStoresViewTableInput>;
};

export type TMcSettingsProjectSettingsStoresViewTableInput = {
  visibleColumns: Array<Scalars['String']['input']>;
};

export type TMcSettingsPublicCustomApplicationDevelopedByCommercetools = {
  __typename?: 'PublicCustomApplicationDevelopedByCommercetools';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  entryPointUriPath: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsQuery = {
  __typename?: 'Query';
  activeBusinessUnitsListMyView?: Maybe<TMcSettingsBusinessUnitsListMyView>;
  activeCartDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  activeCustomersSearchListMyView?: Maybe<TMcSettingsCustomersSearchListMyView>;
  activeDashboardView?: Maybe<TMcSettingsDashboardView>;
  activeDiscountCodesCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  activeOrderDetailView?: Maybe<TMcSettingsOrderDetailView>;
  activeOrdersListView?: Maybe<TMcSettingsOrdersListView>;
  activePimSearchListView?: Maybe<TMcSettingsPimSearchListView>;
  activeProductDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  activeProductTypeAttributesView?: Maybe<TMcSettingsProductTypeAttributesView>;
  activeProjectSettingsStoresView?: Maybe<TMcSettingsProjectSettingsStoresView>;
  activeQuotesListView?: Maybe<TMcSettingsQuotesListView>;
  /** @deprecated Experimental feature - For internal usage only */
  allAppliedCustomApplicationPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
  /** @deprecated Experimental feature - For internal usage only */
  allAppliedCustomViewPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  /** @deprecated Experimental feature - For internal usage only */
  allCustomApplications: TMcSettingsCustomApplicationsPagedQueryResult;
  /** @deprecated Experimental feature - For internal usage only */
  allCustomViews: TMcSettingsCustomViewsPagedQueryResult;
  allCustomViewsInstallationsByLocator: Array<TMcSettingsRestrictedCustomViewInstallationForProject>;
  allCustomViewsLocatorGroups: Array<TMcSettingsCustomViewLocatorGroup>;
  allFeatures: Array<TMcSettingsFeature>;
  /** @deprecated Experimental feature - For internal usage only */
  allOrganizationExtensions: Array<TMcSettingsOrganizationExtension>;
  allProjectExtensions: Array<TMcSettingsProjectExtension>;
  allPublicCustomApplicationsDevelopedByCommercetools: Array<TMcSettingsPublicCustomApplicationDevelopedByCommercetools>;
  businessUnitsListMyView?: Maybe<TMcSettingsBusinessUnitsListMyView>;
  businessUnitsListMyViews: Array<Maybe<TMcSettingsBusinessUnitsListMyView>>;
  cartDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  cartDiscountsCustomViews: Array<Maybe<TMcSettingsDiscountsCustomView>>;
  /** @deprecated Experimental feature - For internal usage only */
  customApplication?: Maybe<TMcSettingsCustomApplication>;
  /** @deprecated Experimental feature - For internal usage only */
  customView?: Maybe<TMcSettingsCustomView>;
  customersSearchListMyView?: Maybe<TMcSettingsCustomersSearchListMyView>;
  customersSearchListMyViews: Array<
    Maybe<TMcSettingsCustomersSearchListMyView>
  >;
  dashboardView?: Maybe<TMcSettingsDashboardView>;
  dashboardViews: Array<Maybe<TMcSettingsDashboardView>>;
  discountCodesCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  discountCodesCustomViews: Array<Maybe<TMcSettingsDiscountsCustomView>>;
  /** @deprecated Experimental feature - For internal usage only */
  globalOrganizationExtension?: Maybe<TMcSettingsOrganizationExtension>;
  myCustomApplications: Array<TMcSettingsMyCustomApplication>;
  myCustomViews: Array<TMcSettingsMyCustomView>;
  orderDetailView?: Maybe<TMcSettingsOrderDetailView>;
  orderDetailViews: Array<Maybe<TMcSettingsOrderDetailView>>;
  ordersListView?: Maybe<TMcSettingsOrdersListView>;
  ordersListViews: Array<Maybe<TMcSettingsOrdersListView>>;
  organizationExtension?: Maybe<TMcSettingsOrganizationExtension>;
  organizationExtensionForCustomApplication?: Maybe<TMcSettingsOrganizationExtensionForCustomApplication>;
  organizationExtensionForCustomView?: Maybe<TMcSettingsOrganizationExtensionForCustomView>;
  pimSearchListView?: Maybe<TMcSettingsPimSearchListView>;
  pimSearchListViews: Array<Maybe<TMcSettingsPimSearchListView>>;
  productDiscountsCustomView?: Maybe<TMcSettingsDiscountsCustomView>;
  productDiscountsCustomViews: Array<Maybe<TMcSettingsDiscountsCustomView>>;
  productTypeAttributesView?: Maybe<TMcSettingsProductTypeAttributesView>;
  productTypeAttributesViews?: Maybe<
    Array<Maybe<TMcSettingsProductTypeAttributesView>>
  >;
  projectExtension?: Maybe<TMcSettingsProjectExtension>;
  projectSettingsStoresView?: Maybe<TMcSettingsProjectSettingsStoresView>;
  projectSettingsStoresViews: Array<
    Maybe<TMcSettingsProjectSettingsStoresView>
  >;
  quotesListView?: Maybe<TMcSettingsQuotesListView>;
  quotesListViews: Array<Maybe<TMcSettingsQuotesListView>>;
  /** @deprecated Experimental feature - For internal usage only */
  readMessagesFromDeadLetterQueue: Array<TMcSettingsMessage>;
  release?: Maybe<Scalars['String']['output']>;
  ruleBuilderQuickSelectionValues?: Maybe<
    Array<Maybe<TMcSettingsRuleBuilderQuickSelectionValues>>
  >;
  variantPricesListViews: Array<Maybe<TMcSettingsVariantPricesListView>>;
};

export type TMcSettingsQuery_ActiveProductTypeAttributesViewArgs = {
  isVariant: Scalars['Boolean']['input'];
  productTypeId: Scalars['String']['input'];
};

export type TMcSettingsQuery_AllAppliedCustomApplicationPermissionsArgs = {
  applicationId: Scalars['ID']['input'];
  entryPointUriPath: Scalars['String']['input'];
};

export type TMcSettingsQuery_AllAppliedCustomViewPermissionsArgs = {
  customViewId: Scalars['ID']['input'];
};

export type TMcSettingsQuery_AllCustomApplicationsArgs = {
  params?: InputMaybe<TMcSettingsCustomApplicationQueryInput>;
};

export type TMcSettingsQuery_AllCustomViewsArgs = {
  params?: InputMaybe<TMcSettingsCustomViewQueryInput>;
};

export type TMcSettingsQuery_AllCustomViewsInstallationsByLocatorArgs = {
  locator: Scalars['String']['input'];
};

export type TMcSettingsQuery_AllFeaturesArgs = {
  params?: InputMaybe<TMcSettingsFeatureQueryInput>;
};

export type TMcSettingsQuery_AllOrganizationExtensionsArgs = {
  organizationIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TMcSettingsQuery_AllPublicCustomApplicationsDevelopedByCommercetoolsArgs =
  {
    params?: InputMaybe<TMcSettingsAllPublicCustomApplicationsDevelopedByCommercetoolsQueryInput>;
  };

export type TMcSettingsQuery_BusinessUnitsListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_CartDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_CustomApplicationArgs = {
  applicationId: Scalars['ID']['input'];
};

export type TMcSettingsQuery_CustomViewArgs = {
  customViewId: Scalars['ID']['input'];
};

export type TMcSettingsQuery_CustomersSearchListMyViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_DashboardViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_DiscountCodesCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_GlobalOrganizationExtensionArgs = {
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsQuery_MyCustomApplicationsArgs = {
  params?: InputMaybe<TMcSettingsMyCustomApplicationQueryInput>;
};

export type TMcSettingsQuery_MyCustomViewsArgs = {
  params?: InputMaybe<TMcSettingsMyCustomViewsQueryInput>;
};

export type TMcSettingsQuery_OrderDetailViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_OrdersListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_OrganizationExtensionArgs = {
  organizationId: Scalars['String']['input'];
};

export type TMcSettingsQuery_OrganizationExtensionForCustomApplicationArgs = {
  entryPointUriPath: Scalars['String']['input'];
};

export type TMcSettingsQuery_OrganizationExtensionForCustomViewArgs = {
  customViewId: Scalars['String']['input'];
};

export type TMcSettingsQuery_PimSearchListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_ProductDiscountsCustomViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_ProductTypeAttributesViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_ProductTypeAttributesViewsArgs = {
  isVariant: Scalars['Boolean']['input'];
  productTypeId: Scalars['String']['input'];
};

export type TMcSettingsQuery_ProjectSettingsStoresViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_QuotesListViewArgs = {
  id: Scalars['ID']['input'];
};

export type TMcSettingsQuery_RuleBuilderQuickSelectionValuesArgs = {
  ruleBuilderType: TMcSettingsRuleBuilderType;
};

export type TMcSettingsQuotesListView = {
  __typename?: 'QuotesListView';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  nameAllLocales?: Maybe<Array<TMcSettingsLocalizedField>>;
  projectKey: Scalars['String']['output'];
  search?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<TMcSettingsSort>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type TMcSettingsQuotesListViewInput = {
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort: TMcSettingsSortCreateInput;
};

export enum TMcSettingsResourceType {
  Categories = 'CATEGORIES',
  PublishedProducts = 'PUBLISHED_PRODUCTS',
  TotalProducts = 'TOTAL_PRODUCTS',
  UnpublishedProducts = 'UNPUBLISHED_PRODUCTS',
}

export type TMcSettingsResourcesNumbersConfiguration = {
  __typename?: 'ResourcesNumbersConfiguration';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  resourceOptions: Array<TMcSettingsResourceType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsResourcesNumbersConfigurationInput = {
  resourceOptions: Array<TMcSettingsResourceType>;
};

export type TMcSettingsRestrictedApplicationExtensionWhereInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsRestrictedCustomApplicationForOrganization = {
  __typename?: 'RestrictedCustomApplicationForOrganization';
  createdAt: Scalars['DateTime']['output'];
  deployments: Array<TMcSettingsCustomApplicationDeploymentPreview>;
  description?: Maybe<Scalars['String']['output']>;
  entryPointUriPath: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsRestrictedCustomApplicationForOrganization_DeploymentsArgs =
  {
    params?: InputMaybe<TMcSettingsCustomApplicationDeploymentPreviewsQueryInput>;
  };

export type TMcSettingsRestrictedCustomApplicationForProject = {
  __typename?: 'RestrictedCustomApplicationForProject';
  createdAt: Scalars['DateTime']['output'];
  deployments: Array<TMcSettingsCustomApplicationDeploymentPreview>;
  description?: Maybe<Scalars['String']['output']>;
  entryPointUriPath: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  /** @deprecated This field has been renamed to mainMenuLink field. The nested submenuLinks is also now a top level field. */
  menuLinks?: Maybe<TMcSettingsCustomApplicationMenuLink>;
  name: Scalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status?: Maybe<TMcSettingsCustomApplicationStatus>;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsRestrictedCustomApplicationForProject_DeploymentsArgs = {
  params?: InputMaybe<TMcSettingsCustomApplicationDeploymentPreviewsQueryInput>;
};

export type TMcSettingsRestrictedCustomApplicationInstallationForOrganization =
  {
    __typename?: 'RestrictedCustomApplicationInstallationForOrganization';
    acceptedPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
    application: TMcSettingsRestrictedCustomApplicationForProject;
    createdAt: Scalars['DateTime']['output'];
    id: Scalars['ID']['output'];
    installInAllProjects: Scalars['Boolean']['output'];
    projects: Array<TMcSettingsProjectExtension>;
    updatedAt: Scalars['DateTime']['output'];
  };

export type TMcSettingsRestrictedCustomApplicationInstallationForProject = {
  __typename?: 'RestrictedCustomApplicationInstallationForProject';
  acceptedPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
  application: TMcSettingsRestrictedCustomApplicationForProject;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  installInAllProjects: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsRestrictedCustomApplicationInstallationForProjectWhereInput =
  {
    entryPointUriPath?: InputMaybe<Scalars['String']['input']>;
  };

export type TMcSettingsRestrictedCustomViewForOrganization = {
  __typename?: 'RestrictedCustomViewForOrganization';
  createdAt: Scalars['DateTime']['output'];
  defaultLabel: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<Scalars['String']['output']>;
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: Maybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsRestrictedCustomViewForProject = {
  __typename?: 'RestrictedCustomViewForProject';
  createdAt: Scalars['DateTime']['output'];
  defaultLabel: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<Scalars['String']['output']>;
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: Maybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TMcSettingsRestrictedCustomViewInstallationForOrganization = {
  __typename?: 'RestrictedCustomViewInstallationForOrganization';
  acceptedPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  createdAt: Scalars['DateTime']['output'];
  customView: TMcSettingsRestrictedCustomViewForProject;
  id: Scalars['ID']['output'];
  installInAllProjects: Scalars['Boolean']['output'];
  projects: Array<TMcSettingsProjectExtension>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsRestrictedCustomViewInstallationForProject = {
  __typename?: 'RestrictedCustomViewInstallationForProject';
  acceptedPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  createdAt: Scalars['DateTime']['output'];
  customView: TMcSettingsRestrictedCustomViewForProject;
  id: Scalars['ID']['output'];
  installInAllProjects: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsRestrictedCustomViewInstallationForProjectWhereInput = {
  customViewId?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsRichTextEditorSettingsInput = {
  isRichTextEditorEnabled: Scalars['Boolean']['input'];
};

export type TMcSettingsRuleBuilderQuickSelectCreatefunctionsInput = {
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TMcSettingsRuleBuilderQuickSelectCreatepredicatesInput = {
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TMcSettingsRuleBuilderQuickSelectionInput = {
  functions?: InputMaybe<TMcSettingsRuleBuilderQuickSelectCreatepredicatesInput>;
  predicates?: InputMaybe<TMcSettingsRuleBuilderQuickSelectCreatefunctionsInput>;
  ruleBuilderType: TMcSettingsRuleBuilderType;
};

export type TMcSettingsRuleBuilderQuickSelectionValues = {
  __typename?: 'RuleBuilderQuickSelectionValues';
  createdAt: Scalars['DateTime']['output'];
  functions: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  predicates: Array<Scalars['String']['output']>;
  projectKey: Scalars['String']['output'];
  ruleBuilderType: TMcSettingsRuleBuilderType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export enum TMcSettingsRuleBuilderType {
  CartDiscount = 'CartDiscount',
  CartTargetDiscount = 'CartTargetDiscount',
  ProductDiscount = 'ProductDiscount',
  ShippingMethod = 'ShippingMethod',
}

export type TMcSettingsSalesPerformanceConfiguration = {
  __typename?: 'SalesPerformanceConfiguration';
  createdAt: Scalars['DateTime']['output'];
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: Maybe<Scalars['DateTime']['output']>;
  dateTo?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  showPreviousTimeframe: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsSalesPerformanceConfigurationInput = {
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: InputMaybe<Scalars['DateTime']['input']>;
  dateTo?: InputMaybe<Scalars['DateTime']['input']>;
  showPreviousTimeframe: Scalars['Boolean']['input'];
};

export type TMcSettingsSampleDataImportMetadata = {
  __typename?: 'SampleDataImportMetadata';
  completed: Scalars['Boolean']['output'];
  dataset?: Maybe<TMcSettingsSampleDatasets>;
};

export enum TMcSettingsSampleDatasets {
  B2B = 'B2B',
  B2Clifestyle = 'B2CLIFESTYLE',
  Fashion = 'FASHION',
  Goodstore = 'GOODSTORE',
}

export type TMcSettingsSort = {
  __typename?: 'Sort';
  key: Scalars['String']['output'];
  order: TMcSettingsSortOrder;
};

export type TMcSettingsSortCreateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  key: Scalars['String']['input'];
  order: TMcSettingsSortOrder;
};

export enum TMcSettingsSortOrder {
  Asc = 'Asc',
  Desc = 'Desc',
}

export type TMcSettingsTdlqMessageResult = {
  __typename?: 'TDLQMessageResult';
  ackId: Scalars['String']['output'];
  data: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type TMcSettingsTable = {
  __typename?: 'Table';
  nestedTable?: Maybe<TMcSettingsNestedTable>;
  visibleColumns: Array<Scalars['String']['output']>;
};

export type TMcSettingsTopProductsConfiguration = {
  __typename?: 'TopProductsConfiguration';
  bestSellingLimit: TMcSettingsBestSellingLimit;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsTopProductsConfigurationInput = {
  bestSellingLimit?: InputMaybe<TMcSettingsBestSellingLimit>;
};

export type TMcSettingsTotalOrdersConfiguration = {
  __typename?: 'TotalOrdersConfiguration';
  createdAt: Scalars['DateTime']['output'];
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: Maybe<Scalars['DateTime']['output']>;
  dateTo?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  productId?: Maybe<Scalars['String']['output']>;
  showPreviousTimeframe: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsTotalOrdersConfigurationInput = {
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: InputMaybe<Scalars['DateTime']['input']>;
  dateTo?: InputMaybe<Scalars['DateTime']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  showPreviousTimeframe: Scalars['Boolean']['input'];
};

export type TMcSettingsTotalSalesConfiguration = {
  __typename?: 'TotalSalesConfiguration';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TMcSettingsTotalSalesConfigurationInput = {
  productId?: InputMaybe<Scalars['String']['input']>;
};

export type TMcSettingsVariantPricesListView = {
  __typename?: 'VariantPricesListView';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  projectKey: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  visibleColumns: Array<Scalars['String']['output']>;
};

export type TMcSettingsVariantPricesListViewInput = {
  visibleColumns: Array<Scalars['String']['input']>;
};
