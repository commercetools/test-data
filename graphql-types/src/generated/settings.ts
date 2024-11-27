export type TMcSettingsMaybe<T> = T | null;
export type TMcSettingsInputMaybe<T> = TMcSettingsMaybe<T>;
export type TMcSettingsExact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type TMcSettingsMakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: TMcSettingsMaybe<T[SubKey]>;
};
export type TMcSettingsMakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: TMcSettingsMaybe<T[SubKey]>;
};
export type TMcSettingsMakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type TMcSettingsIncremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type TMcSettingsScalars = {
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
    organizationId?: TMcSettingsInputMaybe<
      TMcSettingsScalars['String']['input']
    >;
  };

export type TMcSettingsApplicationExtension = {
  __typename?: 'ApplicationExtension';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  name: TMcSettingsScalars['String']['output'];
  navbarMenu?: TMcSettingsMaybe<TMcSettingsNavbarMenu>;
  oAuthScopes: Array<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
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
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  showPreviousTimeframe: TMcSettingsScalars['Boolean']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsAverageOrderValueConfigurationInput = {
  showPreviousTimeframe: TMcSettingsScalars['Boolean']['input'];
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
  createdAt: TMcSettingsScalars['DateTime']['output'];
  filters?: TMcSettingsMaybe<Array<TMcSettingsFilterValues>>;
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsBusinessUnitsListMyViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  sort: TMcSettingsSortCreateInput;
  table?: TMcSettingsInputMaybe<TMcSettingsBusinessUnitsListMyViewTableInput>;
};

export type TMcSettingsBusinessUnitsListMyViewTableInput = {
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};

export enum TMcSettingsCategoryRecommendationSearchProperty {
  Attribute = 'Attribute',
  /** @deprecated The machine learning APIs are not available anymore. */
  MachineLearning = 'MachineLearning',
  ProductType = 'ProductType',
}

export type TMcSettingsCategoryRecommendationSettings = {
  __typename?: 'CategoryRecommendationSettings';
  attributeName?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  searchProperty: TMcSettingsCategoryRecommendationSearchProperty;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCategoryRecommendationSettingsDataInput = {
  attributeName?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  searchProperty: TMcSettingsCategoryRecommendationSearchProperty;
};

export type TMcSettingsContactInformation = {
  __typename?: 'ContactInformation';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  email: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  verifiedEmail?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
};

export type TMcSettingsContactInformationDataInput = {
  email: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsCustomApplication = {
  __typename?: 'CustomApplication';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  deployments: Array<TMcSettingsCustomApplicationDeploymentPreview>;
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  entryPointUriPath: TMcSettingsScalars['String']['output'];
  icon: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  installedBy: Array<TMcSettingsCustomApplicationInstallation>;
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: TMcSettingsScalars['String']['output'];
  owner: TMcSettingsOrganizationExtension;
  ownerId: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsCustomApplication_DeploymentsArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsCustomApplicationDeploymentPreviewsQueryInput>;
};

export type TMcSettingsCustomApplicationDeploymentPreview = {
  __typename?: 'CustomApplicationDeploymentPreview';
  alias?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsCustomApplicationDeploymentPreviewCreateInput = {
  alias?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  url: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsCustomApplicationDeploymentPreviewUpdateInput = {
  url: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsCustomApplicationDeploymentPreviewsQueryInput = {
  sort?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsCustomApplicationDraftDataInput = {
  description?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  entryPointUriPath: TMcSettingsScalars['String']['input'];
  icon: TMcSettingsScalars['String']['input'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLinkDraftDataInput;
  name: TMcSettingsScalars['String']['input'];
  permissions: Array<TMcSettingsCustomApplicationPermissionDataInput>;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLinkDraftDataInput>;
  url: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsCustomApplicationInstallation = {
  __typename?: 'CustomApplicationInstallation';
  acceptedPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  installInAllProjects: TMcSettingsScalars['Boolean']['output'];
  owner: TMcSettingsOrganizationExtension;
  ownerId: TMcSettingsScalars['String']['output'];
  projects: Array<TMcSettingsProjectExtension>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationInstallationPermission = {
  __typename?: 'CustomApplicationInstallationPermission';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  name: TMcSettingsScalars['String']['output'];
  oAuthScopes: Array<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationMenuLink = {
  __typename?: 'CustomApplicationMenuLink';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  defaultLabel: TMcSettingsScalars['String']['output'];
  /** @deprecated This field has been moved outside of the menu link. */
  icon: TMcSettingsScalars['String']['output'];
  /** @deprecated This field has been renamed to icon. */
  iconName?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<TMcSettingsScalars['String']['output']>;
  /** @deprecated This field has been moved outside of the menu link and is now a top level field. */
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationMenuLinkDraftDataInput = {
  defaultLabel: TMcSettingsScalars['String']['input'];
  labelAllLocales: Array<TMcSettingsLocalizedFieldDataInput>;
  permissions: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsCustomApplicationPermission = {
  __typename?: 'CustomApplicationPermission';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  name: TMcSettingsScalars['String']['output'];
  oAuthScopes: Array<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomApplicationPermissionDataInput = {
  name: TMcSettingsScalars['String']['input'];
  oAuthScopes: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsCustomApplicationQueryInput = {
  limit?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  offset?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  sort?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  where?: TMcSettingsInputMaybe<TMcSettingsCustomApplicationQueryWhereInput>;
};

export type TMcSettingsCustomApplicationQueryWhereInput = {
  entryPointUriPath?: TMcSettingsInputMaybe<
    TMcSettingsScalars['String']['input']
  >;
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  name?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  organizationId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export enum TMcSettingsCustomApplicationStatus {
  Draft = 'DRAFT',
  PrivateUsage = 'PRIVATE_USAGE',
}

export type TMcSettingsCustomApplicationSubmenuLink = {
  __typename?: 'CustomApplicationSubmenuLink';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  defaultLabel: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  uriPath: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsCustomApplicationSubmenuLinkDraftDataInput = {
  defaultLabel: TMcSettingsScalars['String']['input'];
  labelAllLocales: Array<TMcSettingsLocalizedFieldDataInput>;
  permissions: Array<TMcSettingsScalars['String']['input']>;
  uriPath: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsCustomApplicationsMaintainerContactEmailVerificationConfirmation =
  {
    __typename?: 'CustomApplicationsMaintainerContactEmailVerificationConfirmation';
    organizationId: TMcSettingsScalars['ID']['output'];
  };

export type TMcSettingsCustomApplicationsMaintainerContactEmailVerificationRequest =
  {
    __typename?: 'CustomApplicationsMaintainerContactEmailVerificationRequest';
    token?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  };

export type TMcSettingsCustomApplicationsPagedQueryResult = {
  __typename?: 'CustomApplicationsPagedQueryResult';
  count: TMcSettingsScalars['Int']['output'];
  limit: TMcSettingsScalars['Int']['output'];
  offset: TMcSettingsScalars['Int']['output'];
  results: Array<TMcSettingsCustomApplication>;
  total: TMcSettingsScalars['Int']['output'];
};

export type TMcSettingsCustomView = {
  __typename?: 'CustomView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  defaultLabel: TMcSettingsScalars['String']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  installedBy: Array<TMcSettingsCustomViewInstallation>;
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<TMcSettingsScalars['String']['output']>;
  owner: TMcSettingsOrganizationExtension;
  ownerId: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: TMcSettingsMaybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsCustomViewDraftDataInput = {
  defaultLabel: TMcSettingsScalars['String']['input'];
  description?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  labelAllLocales: Array<TMcSettingsLocalizedFieldDataInput>;
  locators: Array<TMcSettingsScalars['String']['input']>;
  permissions: Array<TMcSettingsCustomViewPermissionDataInput>;
  type: TMcSettingsCustomViewType;
  /**
   * The value of this property depends on the value of the 'type' property value.
   * In case the `type` value is `CustomPanel`, you are supposed to provide it's size.
   */
  typeSettings?: TMcSettingsInputMaybe<TMcSettingsCustomViewTypeSettingsInput>;
  url: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsCustomViewInstallation = {
  __typename?: 'CustomViewInstallation';
  acceptedPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  installInAllProjects: TMcSettingsScalars['Boolean']['output'];
  owner: TMcSettingsOrganizationExtension;
  ownerId: TMcSettingsScalars['String']['output'];
  projects: Array<TMcSettingsProjectExtension>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomViewInstallationPermission = {
  __typename?: 'CustomViewInstallationPermission';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  name: TMcSettingsScalars['String']['output'];
  oAuthScopes: Array<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomViewLocator = {
  __typename?: 'CustomViewLocator';
  key: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsCustomViewLocatorGroup = {
  __typename?: 'CustomViewLocatorGroup';
  key: TMcSettingsScalars['String']['output'];
  locators: Array<TMcSettingsCustomViewLocator>;
};

export type TMcSettingsCustomViewPermission = {
  __typename?: 'CustomViewPermission';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  name: TMcSettingsScalars['String']['output'];
  oAuthScopes: Array<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsCustomViewPermissionDataInput = {
  name: TMcSettingsScalars['String']['input'];
  oAuthScopes: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsCustomViewQueryInput = {
  limit?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  offset?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  sort?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  where?: TMcSettingsInputMaybe<TMcSettingsCustomViewQueryWhereInput>;
};

export type TMcSettingsCustomViewQueryWhereInput = {
  defaultLabel?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  locators?: TMcSettingsInputMaybe<
    Array<TMcSettingsScalars['String']['input']>
  >;
  organizationId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  type?: TMcSettingsInputMaybe<TMcSettingsCustomViewType>;
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
  size?: TMcSettingsMaybe<TMcSettingsCustomViewSize>;
};

export type TMcSettingsCustomViewTypeSettingsInput = {
  size?: TMcSettingsInputMaybe<TMcSettingsCustomViewSize>;
};

export type TMcSettingsCustomViewsPagedQueryResult = {
  __typename?: 'CustomViewsPagedQueryResult';
  count: TMcSettingsScalars['Int']['output'];
  limit: TMcSettingsScalars['Int']['output'];
  offset: TMcSettingsScalars['Int']['output'];
  results: Array<TMcSettingsCustomView>;
  total: TMcSettingsScalars['Int']['output'];
};

export type TMcSettingsCustomerEmailValidationSettingsInput = {
  isCustomerEmailValidationDisabled: TMcSettingsScalars['Boolean']['input'];
};

export type TMcSettingsCustomersSearchListMyView = {
  __typename?: 'CustomersSearchListMyView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  filters?: TMcSettingsMaybe<Array<TMcSettingsFilterValues>>;
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsCustomersSearchListMyViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  sort: TMcSettingsSortCreateInput;
  table?: TMcSettingsInputMaybe<TMcSettingsCustomersSearchListMyViewTableInput>;
};

export type TMcSettingsCustomersSearchListMyViewTableInput = {
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsDashboardView = {
  __typename?: 'DashboardView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  currencyCode?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  isActive: TMcSettingsScalars['Boolean']['output'];
  layout?: TMcSettingsMaybe<Array<TMcSettingsLayoutCard>>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  timeZone?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsDashboardViewInput = {
  currencyCode?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  layout: Array<TMcSettingsLayoutCardInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  timeZone?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
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
  createdAt: TMcSettingsScalars['DateTime']['output'];
  filters?: TMcSettingsMaybe<Array<TMcSettingsFilterValues>>;
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  search?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  type: TMcSettingsDiscountType;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsDiscountsCustomViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  sort: TMcSettingsSortCreateInput;
  table?: TMcSettingsInputMaybe<TMcSettingsOrdersListViewTableInput>;
};

export enum TMcSettingsExistence {
  All = 'All',
  Empty = 'Empty',
  Filled = 'Filled',
}

export type TMcSettingsFeature = {
  __typename?: 'Feature';
  name: TMcSettingsScalars['String']['output'];
  reason?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  value: TMcSettingsScalars['Boolean']['output'];
};

export type TMcSettingsFeatureQueryInput = {
  organizationId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  projectKey?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
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
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  json: TMcSettingsScalars['Json']['output'];
  target: TMcSettingsScalars['String']['output'];
  type: TMcSettingsFilterType;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsFilterValuesCreateInput = {
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  json: TMcSettingsScalars['Json']['input'];
  target: TMcSettingsScalars['String']['input'];
  type: TMcSettingsFilterType;
};

export type TMcSettingsImageRegex = {
  __typename?: 'ImageRegex';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  small?: TMcSettingsMaybe<TMcSettingsImageRegexOptions>;
  thumb?: TMcSettingsMaybe<TMcSettingsImageRegexOptions>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsImageRegexDataInput = {
  small?: TMcSettingsInputMaybe<TMcSettingsImageRegexOptionsInput>;
  thumb?: TMcSettingsInputMaybe<TMcSettingsImageRegexOptionsInput>;
};

export type TMcSettingsImageRegexOptions = {
  __typename?: 'ImageRegexOptions';
  flag?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  replace: TMcSettingsScalars['String']['output'];
  search: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsImageRegexOptionsInput = {
  flag?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  replace: TMcSettingsScalars['String']['input'];
  search: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsLayoutCard = {
  __typename?: 'LayoutCard';
  averageOrderValueConfiguration?: TMcSettingsMaybe<TMcSettingsAverageOrderValueConfiguration>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  height: TMcSettingsScalars['Int']['output'];
  id: TMcSettingsScalars['ID']['output'];
  key: TMcSettingsMetricCardType;
  maxHeight?: TMcSettingsMaybe<TMcSettingsScalars['Int']['output']>;
  maxWidth?: TMcSettingsMaybe<TMcSettingsScalars['Int']['output']>;
  minHeight?: TMcSettingsMaybe<TMcSettingsScalars['Int']['output']>;
  minWidth?: TMcSettingsMaybe<TMcSettingsScalars['Int']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  orderStatusConfiguration?: TMcSettingsMaybe<TMcSettingsOrderStatusConfiguration>;
  resizeHandles: Array<TMcSettingsScalars['String']['output']>;
  resourcesNumbersConfiguration?: TMcSettingsMaybe<TMcSettingsResourcesNumbersConfiguration>;
  salesPerformanceConfiguration?: TMcSettingsMaybe<TMcSettingsSalesPerformanceConfiguration>;
  topProductsConfiguration?: TMcSettingsMaybe<TMcSettingsTopProductsConfiguration>;
  totalOrdersConfiguration?: TMcSettingsMaybe<TMcSettingsTotalOrdersConfiguration>;
  totalSalesConfiguration?: TMcSettingsMaybe<TMcSettingsTotalSalesConfiguration>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  width: TMcSettingsScalars['Int']['output'];
  xPosition: TMcSettingsScalars['Int']['output'];
  yPosition: TMcSettingsScalars['Int']['output'];
};

export type TMcSettingsLayoutCardInput = {
  averageOrderValueConfiguration?: TMcSettingsInputMaybe<TMcSettingsAverageOrderValueConfigurationInput>;
  height: TMcSettingsScalars['Int']['input'];
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  key: TMcSettingsMetricCardType;
  maxHeight?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  maxWidth?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  minHeight?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  minWidth?: TMcSettingsInputMaybe<TMcSettingsScalars['Int']['input']>;
  nameAllLocales?: TMcSettingsInputMaybe<
    Array<TMcSettingsLocalizedFieldCreateInput>
  >;
  orderStatusConfiguration?: TMcSettingsInputMaybe<TMcSettingsOrderStatusConfigurationInput>;
  resizeHandles?: TMcSettingsInputMaybe<
    Array<TMcSettingsScalars['String']['input']>
  >;
  resourcesNumbersConfiguration?: TMcSettingsInputMaybe<TMcSettingsResourcesNumbersConfigurationInput>;
  salesPerformanceConfiguration?: TMcSettingsInputMaybe<TMcSettingsSalesPerformanceConfigurationInput>;
  topProductsConfiguration?: TMcSettingsInputMaybe<TMcSettingsTopProductsConfigurationInput>;
  totalOrdersConfiguration?: TMcSettingsInputMaybe<TMcSettingsTotalOrdersConfigurationInput>;
  totalSalesConfiguration?: TMcSettingsInputMaybe<TMcSettingsTotalSalesConfigurationInput>;
  width: TMcSettingsScalars['Int']['input'];
  xPosition: TMcSettingsScalars['Int']['input'];
  yPosition: TMcSettingsScalars['Int']['input'];
};

export type TMcSettingsLocalizedField = {
  __typename?: 'LocalizedField';
  locale: TMcSettingsScalars['String']['output'];
  value: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsLocalizedFieldCreateInput = {
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  locale: TMcSettingsScalars['String']['input'];
  value: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsLocalizedFieldDataInput = {
  locale: TMcSettingsScalars['String']['input'];
  value: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMessage = {
  __typename?: 'Message';
  ackId: TMcSettingsScalars['String']['output'];
  data: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
};

export type TMcSettingsMessageInput = {
  ackId: TMcSettingsScalars['String']['input'];
  data: TMcSettingsScalars['String']['input'];
  id: TMcSettingsScalars['ID']['input'];
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
  matchFrom: TMcSettingsScalars['String']['output'];
  matchTo: TMcSettingsScalars['String']['output'];
  score: TMcSettingsScalars['Float']['output'];
};

export type TMcSettingsMutation = {
  __typename?: 'Mutation';
  activateBusinessUnitsListMyView?: TMcSettingsMaybe<TMcSettingsBusinessUnitsListMyView>;
  activateCartDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  activateCustomersSearchListMyView?: TMcSettingsMaybe<TMcSettingsCustomersSearchListMyView>;
  activateDashboardView?: TMcSettingsMaybe<TMcSettingsDashboardView>;
  activateDiscountCodesCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  activateOrderDetailView?: TMcSettingsMaybe<TMcSettingsOrderDetailView>;
  activateOrdersListView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  activateOrganizationExtensionOidcSsoConfig?: TMcSettingsMaybe<TMcSettingsOrganizationExtension>;
  activatePimSearchListView?: TMcSettingsMaybe<TMcSettingsPimSearchListView>;
  activateProductDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  activateProductTypeAttributesView?: TMcSettingsMaybe<TMcSettingsProductTypeAttributesView>;
  activateProjectSettingsStoresView?: TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>;
  activateQuotesListView?: TMcSettingsMaybe<TMcSettingsQuotesListView>;
  changeCustomApplicationStatus?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  changeCustomViewStatus?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewForOrganization>;
  createBusinessUnitsListMyView: TMcSettingsBusinessUnitsListMyView;
  createCartDiscountsCustomView: TMcSettingsDiscountsCustomView;
  createCustomApplication?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  createCustomApplicationDeploymentPreview: TMcSettingsCustomApplicationDeploymentPreview;
  createCustomView?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewForOrganization>;
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
  createVariantPricesListView?: TMcSettingsMaybe<TMcSettingsVariantPricesListView>;
  deactivateBusinessUnitsListMyView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  deactivateCartDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  deactivateCustomersSearchListMyView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  deactivateDashboardView?: TMcSettingsMaybe<TMcSettingsDashboardView>;
  deactivateDiscountCodesCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  deactivateOrderDetailView?: TMcSettingsMaybe<TMcSettingsOrderDetailView>;
  deactivateOrdersListView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  deactivateOrganizationExtensionOidcSsoConfig?: TMcSettingsMaybe<TMcSettingsOrganizationExtension>;
  deactivatePimSearchListView?: TMcSettingsMaybe<TMcSettingsPimSearchListView>;
  deactivateProductDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  deactivateProductTypeAttributesView?: TMcSettingsMaybe<TMcSettingsProductTypeAttributesView>;
  deactivateProjectSettingsStoresView?: TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>;
  deactivateQuotesListView?: TMcSettingsMaybe<TMcSettingsQuotesListView>;
  deleteAllDashboardViews: Array<TMcSettingsDashboardView>;
  deleteAllOrderDetailViews: Array<TMcSettingsOrderDetailView>;
  deleteAllOrdersListViews: Array<TMcSettingsOrdersListView>;
  deleteAllQuotesListViews: Array<TMcSettingsQuotesListView>;
  deleteBusinessUnitsListMyView?: TMcSettingsMaybe<TMcSettingsBusinessUnitsListMyView>;
  deleteCartDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  deleteCustomApplication?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  deleteCustomApplicationDeploymentPreview: TMcSettingsCustomApplicationDeploymentPreview;
  deleteCustomView?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewForOrganization>;
  deleteCustomersSearchListMyView?: TMcSettingsMaybe<TMcSettingsCustomersSearchListMyView>;
  deleteDashboardView?: TMcSettingsMaybe<TMcSettingsDashboardView>;
  deleteDiscountCodesCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  deleteOrderDetailView?: TMcSettingsMaybe<TMcSettingsOrderDetailView>;
  deleteOrdersListView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  deletePimSearchListView?: TMcSettingsMaybe<TMcSettingsPimSearchListView>;
  deleteProductDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  deleteProductTypeAttributesView?: TMcSettingsMaybe<TMcSettingsProductTypeAttributesView>;
  deleteProjectSettingsStoresView?: TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>;
  deleteQuotesListView?: TMcSettingsMaybe<TMcSettingsQuotesListView>;
  installCustomApplication?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  installCustomView?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  /** @deprecated Experimental feature - For internal usage only */
  moveMessagesFromDeadLetterQueueToMainQueue?: TMcSettingsMaybe<TMcSettingsBatchProcessResult>;
  random: TMcSettingsScalars['String']['output'];
  /** @deprecated Experimental feature - For internal usage only */
  removeMessagesFromDeadLetterQueue?: TMcSettingsMaybe<TMcSettingsBatchProcessResult>;
  sendLinkToVerifyCustomApplicationsMaintainerContactEmail?: TMcSettingsMaybe<TMcSettingsCustomApplicationsMaintainerContactEmailVerificationRequest>;
  setCustomApplicationsMaintainerContactInformation?: TMcSettingsMaybe<TMcSettingsOrganizationExtension>;
  setOrganizationExtensionOidcSsoConfig?: TMcSettingsMaybe<TMcSettingsOrganizationExtension>;
  setProjectExtensionCategoryRecommendation?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  setProjectExtensionCustomerEmailValidationSettings?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  setProjectExtensionImageRegex?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  setProjectExtensionImportSampleDataset?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  setProjectExtensionOrderStatesVisibility?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  setProjectExtensionRichTextEditorSettings?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  uninstallCustomApplication?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  uninstallCustomView?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  updateBusinessUnitsListMyView?: TMcSettingsMaybe<TMcSettingsBusinessUnitsListMyView>;
  updateCartDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  updateCustomApplication?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationForOrganization>;
  updateCustomApplicationDeploymentPreview: TMcSettingsCustomApplicationDeploymentPreview;
  updateCustomApplicationProjectsInstallation?: TMcSettingsMaybe<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  updateCustomView?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewForOrganization>;
  updateCustomViewProjectsInstallation?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  updateCustomersSearchListMyView?: TMcSettingsMaybe<TMcSettingsCustomersSearchListMyView>;
  updateDashboardView?: TMcSettingsMaybe<TMcSettingsDashboardView>;
  updateDiscountCodesCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  updateOrderDetailView?: TMcSettingsMaybe<TMcSettingsOrderDetailView>;
  updateOrdersListView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  updatePimSearchListView?: TMcSettingsMaybe<TMcSettingsPimSearchListView>;
  updateProductDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  updateProductTypeAttributesView: TMcSettingsProductTypeAttributesView;
  updateProjectSettingsStoresView?: TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>;
  updateQuotesListView?: TMcSettingsMaybe<TMcSettingsQuotesListView>;
  updateRuleBuilderQuickSelectionValues?: TMcSettingsMaybe<TMcSettingsRuleBuilderQuickSelectionValues>;
  updateVariantPricesListView?: TMcSettingsMaybe<TMcSettingsVariantPricesListView>;
  verifyCustomApplicationsMaintainerContactEmail?: TMcSettingsMaybe<TMcSettingsCustomApplicationsMaintainerContactEmailVerificationConfirmation>;
};

export type TMcSettingsMutation_ActivateBusinessUnitsListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateCartDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateCustomersSearchListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateDashboardViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateDiscountCodesCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateOrderDetailViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateOrdersListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateOrganizationExtensionOidcSsoConfigArgs =
  {
    organizationId: TMcSettingsScalars['String']['input'];
  };

export type TMcSettingsMutation_ActivatePimSearchListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateProductDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateProductTypeAttributesViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
  isVariant: TMcSettingsScalars['Boolean']['input'];
  productTypeId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_ActivateProjectSettingsStoresViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ActivateQuotesListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_ChangeCustomApplicationStatusArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
  status: TMcSettingsCustomApplicationStatus;
};

export type TMcSettingsMutation_ChangeCustomViewStatusArgs = {
  customViewId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
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
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_CreateCustomApplicationDeploymentPreviewArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
  data: TMcSettingsCustomApplicationDeploymentPreviewCreateInput;
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_CreateCustomViewArgs = {
  data: TMcSettingsCustomViewDraftDataInput;
  organizationId: TMcSettingsScalars['String']['input'];
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
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateCartDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateCustomersSearchListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateDashboardViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateDiscountCodesCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateOrderDetailViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateOrdersListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateOrganizationExtensionOidcSsoConfigArgs =
  {
    organizationId: TMcSettingsScalars['String']['input'];
  };

export type TMcSettingsMutation_DeactivatePimSearchListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateProductDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateProductTypeAttributesViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateProjectSettingsStoresViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeactivateQuotesListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteBusinessUnitsListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteCartDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteCustomApplicationArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_DeleteCustomApplicationDeploymentPreviewArgs = {
  deploymentId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_DeleteCustomViewArgs = {
  customViewId: TMcSettingsScalars['String']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_DeleteCustomersSearchListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteDashboardViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteDiscountCodesCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteOrderDetailViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteOrdersListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeletePimSearchListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteProductDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteProductTypeAttributesViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteProjectSettingsStoresViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_DeleteQuotesListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_InstallCustomApplicationArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
  projectKeys?: TMcSettingsInputMaybe<
    Array<TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>>
  >;
};

export type TMcSettingsMutation_InstallCustomViewArgs = {
  customViewId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
  projectKeys?: TMcSettingsInputMaybe<
    Array<TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>>
  >;
};

export type TMcSettingsMutation_MoveMessagesFromDeadLetterQueueToMainQueueArgs =
  {
    messages: Array<TMcSettingsMessageInput>;
  };

export type TMcSettingsMutation_RandomArgs = {
  byteLength: TMcSettingsScalars['Int']['input'];
};

export type TMcSettingsMutation_RemoveMessagesFromDeadLetterQueueArgs = {
  messages: Array<TMcSettingsMessageInput>;
};

export type TMcSettingsMutation_SendLinkToVerifyCustomApplicationsMaintainerContactEmailArgs =
  {
    organizationId: TMcSettingsScalars['String']['input'];
  };

export type TMcSettingsMutation_SetCustomApplicationsMaintainerContactInformationArgs =
  {
    data?: TMcSettingsInputMaybe<TMcSettingsContactInformationDataInput>;
    organizationId: TMcSettingsScalars['String']['input'];
  };

export type TMcSettingsMutation_SetOrganizationExtensionOidcSsoConfigArgs = {
  data: TMcSettingsOidcSsoConfigDataInput;
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_SetProjectExtensionCategoryRecommendationArgs =
  {
    data?: TMcSettingsInputMaybe<TMcSettingsCategoryRecommendationSettingsDataInput>;
  };

export type TMcSettingsMutation_SetProjectExtensionCustomerEmailValidationSettingsArgs =
  {
    data?: TMcSettingsInputMaybe<TMcSettingsCustomerEmailValidationSettingsInput>;
  };

export type TMcSettingsMutation_SetProjectExtensionImageRegexArgs = {
  data?: TMcSettingsInputMaybe<TMcSettingsImageRegexDataInput>;
};

export type TMcSettingsMutation_SetProjectExtensionImportSampleDatasetArgs = {
  data?: TMcSettingsInputMaybe<TMcSettingsSampleDatasets>;
};

export type TMcSettingsMutation_SetProjectExtensionOrderStatesVisibilityArgs = {
  data?: TMcSettingsInputMaybe<
    Array<TMcSettingsInputMaybe<TMcSettingsOrderStatesVisibility>>
  >;
};

export type TMcSettingsMutation_SetProjectExtensionRichTextEditorSettingsArgs =
  {
    data?: TMcSettingsInputMaybe<TMcSettingsRichTextEditorSettingsInput>;
  };

export type TMcSettingsMutation_UninstallCustomApplicationArgs = {
  installedApplicationId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_UninstallCustomViewArgs = {
  installedCustomViewId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_UpdateBusinessUnitsListMyViewArgs = {
  data: TMcSettingsBusinessUnitsListMyViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateCartDiscountsCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateCustomApplicationArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
  data: TMcSettingsCustomApplicationDraftDataInput;
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_UpdateCustomApplicationDeploymentPreviewArgs = {
  data: TMcSettingsCustomApplicationDeploymentPreviewUpdateInput;
  deploymentId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_UpdateCustomApplicationProjectsInstallationArgs =
  {
    installedApplicationId: TMcSettingsScalars['ID']['input'];
    organizationId: TMcSettingsScalars['String']['input'];
    projectKeys?: TMcSettingsInputMaybe<
      Array<TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>>
    >;
  };

export type TMcSettingsMutation_UpdateCustomViewArgs = {
  customViewId: TMcSettingsScalars['String']['input'];
  data: TMcSettingsCustomViewDraftDataInput;
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsMutation_UpdateCustomViewProjectsInstallationArgs = {
  installedCustomViewId: TMcSettingsScalars['ID']['input'];
  organizationId: TMcSettingsScalars['String']['input'];
  projectKeys?: TMcSettingsInputMaybe<
    Array<TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>>
  >;
};

export type TMcSettingsMutation_UpdateCustomersSearchListMyViewArgs = {
  data: TMcSettingsCustomersSearchListMyViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateDashboardViewArgs = {
  data: TMcSettingsDashboardViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateDiscountCodesCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateOrderDetailViewArgs = {
  data: TMcSettingsOrderDetailViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateOrdersListViewArgs = {
  data: TMcSettingsOrdersListViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdatePimSearchListViewArgs = {
  data: TMcSettingsPimSearchListViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateProductDiscountsCustomViewArgs = {
  data: TMcSettingsDiscountsCustomViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateProductTypeAttributesViewArgs = {
  data: TMcSettingsProductTypeAttributesViewUpdateInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateProjectSettingsStoresViewArgs = {
  data: TMcSettingsProjectSettingsStoresViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateQuotesListViewArgs = {
  data: TMcSettingsQuotesListViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_UpdateRuleBuilderQuickSelectionValuesArgs = {
  data: TMcSettingsRuleBuilderQuickSelectionInput;
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
};

export type TMcSettingsMutation_UpdateVariantPricesListViewArgs = {
  data: TMcSettingsVariantPricesListViewInput;
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsMutation_VerifyCustomApplicationsMaintainerContactEmailArgs =
  {
    token: TMcSettingsScalars['String']['input'];
  };

export type TMcSettingsMyCustomApplication = {
  __typename?: 'MyCustomApplication';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  entryPointUriPath: TMcSettingsScalars['String']['output'];
  icon: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: TMcSettingsScalars['String']['output'];
  organizationId: TMcSettingsScalars['String']['output'];
  organizationName: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsMyCustomApplicationQueryInput = {
  where?: TMcSettingsInputMaybe<TMcSettingsMyCustomApplicationQueryWhereInput>;
};

export type TMcSettingsMyCustomApplicationQueryWhereInput = {
  status?: TMcSettingsInputMaybe<TMcSettingsCustomApplicationStatus>;
};

export type TMcSettingsMyCustomView = {
  __typename?: 'MyCustomView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  defaultLabel: TMcSettingsScalars['String']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<TMcSettingsScalars['String']['output']>;
  organizationId: TMcSettingsScalars['String']['output'];
  organizationName: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: TMcSettingsMaybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsMyCustomViewsQueryInput = {
  where?: TMcSettingsInputMaybe<TMcSettingsMyCustomViewsQueryWhereInput>;
};

export type TMcSettingsMyCustomViewsQueryWhereInput = {
  status?: TMcSettingsInputMaybe<TMcSettingsCustomViewStatus>;
};

export type TMcSettingsNavbarMenu = {
  __typename?: 'NavbarMenu';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  featureToggle?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  icon: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  key: TMcSettingsScalars['String']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<TMcSettingsOAuthScope>;
  submenu: Array<TMcSettingsNavbarSubmenu>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  uriPath: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsNavbarSubmenu = {
  __typename?: 'NavbarSubmenu';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  featureToggle?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  key: TMcSettingsScalars['String']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  permissions: Array<TMcSettingsOAuthScope>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  uriPath: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsNestedTable = {
  __typename?: 'NestedTable';
  visibleColumns?: TMcSettingsMaybe<
    Array<TMcSettingsMaybe<TMcSettingsScalars['String']['output']>>
  >;
};

export type TMcSettingsNestedTableInput = {
  visibleColumns?: TMcSettingsInputMaybe<
    Array<TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>>
  >;
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
  authorityUrl: TMcSettingsScalars['String']['output'];
  clientId: TMcSettingsScalars['String']['output'];
  clientSecret?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  logoutUrl?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  sessionTokenExpTimeSeconds?: TMcSettingsMaybe<
    TMcSettingsScalars['Int']['output']
  >;
  teamIdForNewUsers: TMcSettingsScalars['String']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsOidcSsoConfigDataInput = {
  authorityUrl: TMcSettingsScalars['String']['input'];
  clientId: TMcSettingsScalars['String']['input'];
  clientSecret?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  logoutUrl?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  sessionTokenExpTimeSeconds?: TMcSettingsInputMaybe<
    TMcSettingsScalars['Int']['input']
  >;
  teamIdForNewUsers: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsOrderDetailView = {
  __typename?: 'OrderDetailView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsOrderDetailViewInput = {
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  table?: TMcSettingsInputMaybe<TMcSettingsOrderDetailViewTableInput>;
};

export type TMcSettingsOrderDetailViewTableInput = {
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};

export enum TMcSettingsOrderStatesVisibility {
  HideOrderState = 'HideOrderState',
  HidePaymentState = 'HidePaymentState',
  HideShipmentState = 'HideShipmentState',
}

export type TMcSettingsOrderStatusConfiguration = {
  __typename?: 'OrderStatusConfiguration';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: TMcSettingsMaybe<TMcSettingsScalars['DateTime']['output']>;
  dateTo?: TMcSettingsMaybe<TMcSettingsScalars['DateTime']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  productId?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsOrderStatusConfigurationInput = {
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: TMcSettingsInputMaybe<TMcSettingsScalars['DateTime']['input']>;
  dateTo?: TMcSettingsInputMaybe<TMcSettingsScalars['DateTime']['input']>;
  productId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsOrdersListView = {
  __typename?: 'OrdersListView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  filters?: TMcSettingsMaybe<Array<TMcSettingsFilterValues>>;
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  search?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  searchParams?: TMcSettingsMaybe<TMcSettingsScalars['Json']['output']>;
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsOrdersListViewInput = {
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  searchParams?: TMcSettingsInputMaybe<TMcSettingsScalars['Json']['input']>;
  sort: TMcSettingsSortCreateInput;
  table?: TMcSettingsInputMaybe<TMcSettingsOrdersListViewTableInput>;
};

export type TMcSettingsOrdersListViewTableInput = {
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsOrganizationExtension = {
  __typename?: 'OrganizationExtension';
  applicationsMaintainerContactInformation?: TMcSettingsMaybe<TMcSettingsContactInformation>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  installedApplications: Array<TMcSettingsRestrictedCustomApplicationInstallationForOrganization>;
  installedCustomViews: Array<TMcSettingsRestrictedCustomViewInstallationForOrganization>;
  oidcSsoConfig?: TMcSettingsMaybe<TMcSettingsOidcSsoConfig>;
  organizationId: TMcSettingsScalars['String']['output'];
  registeredApplications: Array<TMcSettingsRestrictedCustomApplicationForOrganization>;
  registeredCustomViews: Array<TMcSettingsRestrictedCustomViewForOrganization>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsOrganizationExtensionForCustomApplication = {
  __typename?: 'OrganizationExtensionForCustomApplication';
  application: TMcSettingsRestrictedCustomApplicationForOrganization;
  id: TMcSettingsScalars['ID']['output'];
  organizationId: TMcSettingsScalars['String']['output'];
  organizationName?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
};

export type TMcSettingsOrganizationExtensionForCustomView = {
  __typename?: 'OrganizationExtensionForCustomView';
  customView?: TMcSettingsMaybe<TMcSettingsRestrictedCustomViewForOrganization>;
  id: TMcSettingsScalars['ID']['output'];
  organizationId: TMcSettingsScalars['String']['output'];
  organizationName?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
};

export type TMcSettingsPimSearchListView = {
  __typename?: 'PimSearchListView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  expandedRows: Array<TMcSettingsScalars['String']['output']>;
  filters?: TMcSettingsMaybe<Array<TMcSettingsFilterValues>>;
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  search?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsPimSearchListViewInput = {
  expandedRows?: TMcSettingsInputMaybe<
    Array<TMcSettingsScalars['String']['input']>
  >;
  filters: Array<TMcSettingsFilterValuesCreateInput>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  sort: TMcSettingsSortCreateInput;
  table?: TMcSettingsInputMaybe<TMcSettingsPimSearchListViewTableInput>;
};

export type TMcSettingsPimSearchListViewTableInput = {
  nestedTable?: TMcSettingsInputMaybe<TMcSettingsNestedTableInput>;
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsProductTypeAttributesView = {
  __typename?: 'ProductTypeAttributesView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  existence?: TMcSettingsMaybe<TMcSettingsExistence>;
  id: TMcSettingsScalars['ID']['output'];
  isActive: TMcSettingsScalars['Boolean']['output'];
  isVariant?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  pinnedAttributes: Array<TMcSettingsScalars['String']['output']>;
  productTypeId: TMcSettingsScalars['String']['output'];
  projectKey: TMcSettingsScalars['String']['output'];
  searchTerm?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsProductTypeAttributesViewInput = {
  existence?: TMcSettingsInputMaybe<TMcSettingsExistence>;
  isVariant?: TMcSettingsInputMaybe<TMcSettingsScalars['Boolean']['input']>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  pinnedAttributes: Array<TMcSettingsScalars['String']['input']>;
  productTypeId: TMcSettingsScalars['String']['input'];
  searchTerm?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsProductTypeAttributesViewUpdateInput = {
  existence?: TMcSettingsInputMaybe<TMcSettingsExistence>;
  isVariant?: TMcSettingsInputMaybe<TMcSettingsScalars['Boolean']['input']>;
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  pinnedAttributes: Array<TMcSettingsScalars['String']['input']>;
  searchTerm?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsProjectExtension = {
  __typename?: 'ProjectExtension';
  /** @deprecated Feature not available anymore */
  applications: Array<TMcSettingsApplicationExtension>;
  categoryRecommendationSettings?: TMcSettingsMaybe<TMcSettingsCategoryRecommendationSettings>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  imageRegex?: TMcSettingsMaybe<TMcSettingsImageRegex>;
  installedApplications: Array<TMcSettingsRestrictedCustomApplicationInstallationForProject>;
  installedCustomViews: Array<TMcSettingsRestrictedCustomViewInstallationForProject>;
  isCustomerEmailValidationDisabled: TMcSettingsScalars['Boolean']['output'];
  isRichTextEditorEnabled: TMcSettingsScalars['Boolean']['output'];
  orderStatesVisibility: Array<TMcSettingsOrderStatesVisibility>;
  projectKey: TMcSettingsScalars['String']['output'];
  sampleDataImport?: TMcSettingsMaybe<TMcSettingsSampleDataImportMetadata>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsProjectExtension_ApplicationsArgs = {
  where?: TMcSettingsInputMaybe<TMcSettingsRestrictedApplicationExtensionWhereInput>;
};

export type TMcSettingsProjectExtension_InstalledApplicationsArgs = {
  where?: TMcSettingsInputMaybe<TMcSettingsRestrictedCustomApplicationInstallationForProjectWhereInput>;
};

export type TMcSettingsProjectExtension_InstalledCustomViewsArgs = {
  where?: TMcSettingsInputMaybe<TMcSettingsRestrictedCustomViewInstallationForProjectWhereInput>;
};

export type TMcSettingsProjectSettingsStoresView = {
  __typename?: 'ProjectSettingsStoresView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  table?: TMcSettingsMaybe<TMcSettingsTable>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsProjectSettingsStoresViewInput = {
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  sort: TMcSettingsSortCreateInput;
  table?: TMcSettingsInputMaybe<TMcSettingsProjectSettingsStoresViewTableInput>;
};

export type TMcSettingsProjectSettingsStoresViewTableInput = {
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsPublicCustomApplicationDevelopedByCommercetools = {
  __typename?: 'PublicCustomApplicationDevelopedByCommercetools';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  entryPointUriPath: TMcSettingsScalars['String']['output'];
  icon: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsQuery = {
  __typename?: 'Query';
  activeBusinessUnitsListMyView?: TMcSettingsMaybe<TMcSettingsBusinessUnitsListMyView>;
  activeCartDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  activeCustomersSearchListMyView?: TMcSettingsMaybe<TMcSettingsCustomersSearchListMyView>;
  activeDashboardView?: TMcSettingsMaybe<TMcSettingsDashboardView>;
  activeDiscountCodesCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  activeOrderDetailView?: TMcSettingsMaybe<TMcSettingsOrderDetailView>;
  activeOrdersListView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  activePimSearchListView?: TMcSettingsMaybe<TMcSettingsPimSearchListView>;
  activeProductDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  activeProductTypeAttributesView?: TMcSettingsMaybe<TMcSettingsProductTypeAttributesView>;
  activeProjectSettingsStoresView?: TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>;
  activeQuotesListView?: TMcSettingsMaybe<TMcSettingsQuotesListView>;
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
  businessUnitsListMyView?: TMcSettingsMaybe<TMcSettingsBusinessUnitsListMyView>;
  businessUnitsListMyViews: Array<
    TMcSettingsMaybe<TMcSettingsBusinessUnitsListMyView>
  >;
  cartDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  cartDiscountsCustomViews: Array<
    TMcSettingsMaybe<TMcSettingsDiscountsCustomView>
  >;
  /** @deprecated Experimental feature - For internal usage only */
  customApplication?: TMcSettingsMaybe<TMcSettingsCustomApplication>;
  /** @deprecated Experimental feature - For internal usage only */
  customView?: TMcSettingsMaybe<TMcSettingsCustomView>;
  customersSearchListMyView?: TMcSettingsMaybe<TMcSettingsCustomersSearchListMyView>;
  customersSearchListMyViews: Array<
    TMcSettingsMaybe<TMcSettingsCustomersSearchListMyView>
  >;
  dashboardView?: TMcSettingsMaybe<TMcSettingsDashboardView>;
  dashboardViews: Array<TMcSettingsMaybe<TMcSettingsDashboardView>>;
  discountCodesCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  discountCodesCustomViews: Array<
    TMcSettingsMaybe<TMcSettingsDiscountsCustomView>
  >;
  /** @deprecated Experimental feature - For internal usage only */
  globalOrganizationExtension?: TMcSettingsMaybe<TMcSettingsOrganizationExtension>;
  myCustomApplications: Array<TMcSettingsMyCustomApplication>;
  myCustomViews: Array<TMcSettingsMyCustomView>;
  orderDetailView?: TMcSettingsMaybe<TMcSettingsOrderDetailView>;
  orderDetailViews: Array<TMcSettingsMaybe<TMcSettingsOrderDetailView>>;
  ordersListView?: TMcSettingsMaybe<TMcSettingsOrdersListView>;
  ordersListViews: Array<TMcSettingsMaybe<TMcSettingsOrdersListView>>;
  organizationExtension?: TMcSettingsMaybe<TMcSettingsOrganizationExtension>;
  organizationExtensionForCustomApplication?: TMcSettingsMaybe<TMcSettingsOrganizationExtensionForCustomApplication>;
  organizationExtensionForCustomView?: TMcSettingsMaybe<TMcSettingsOrganizationExtensionForCustomView>;
  pimSearchListView?: TMcSettingsMaybe<TMcSettingsPimSearchListView>;
  pimSearchListViews: Array<TMcSettingsMaybe<TMcSettingsPimSearchListView>>;
  productDiscountsCustomView?: TMcSettingsMaybe<TMcSettingsDiscountsCustomView>;
  productDiscountsCustomViews: Array<
    TMcSettingsMaybe<TMcSettingsDiscountsCustomView>
  >;
  productTypeAttributesView?: TMcSettingsMaybe<TMcSettingsProductTypeAttributesView>;
  productTypeAttributesViews?: TMcSettingsMaybe<
    Array<TMcSettingsMaybe<TMcSettingsProductTypeAttributesView>>
  >;
  projectExtension?: TMcSettingsMaybe<TMcSettingsProjectExtension>;
  projectSettingsStoresView?: TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>;
  projectSettingsStoresViews: Array<
    TMcSettingsMaybe<TMcSettingsProjectSettingsStoresView>
  >;
  quotesListView?: TMcSettingsMaybe<TMcSettingsQuotesListView>;
  quotesListViews: Array<TMcSettingsMaybe<TMcSettingsQuotesListView>>;
  /** @deprecated Experimental feature - For internal usage only */
  readMessagesFromDeadLetterQueue: Array<TMcSettingsMessage>;
  release?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  ruleBuilderQuickSelectionValues?: TMcSettingsMaybe<
    Array<TMcSettingsMaybe<TMcSettingsRuleBuilderQuickSelectionValues>>
  >;
  variantPricesListViews: Array<
    TMcSettingsMaybe<TMcSettingsVariantPricesListView>
  >;
};

export type TMcSettingsQuery_ActiveProductTypeAttributesViewArgs = {
  isVariant: TMcSettingsScalars['Boolean']['input'];
  productTypeId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_AllAppliedCustomApplicationPermissionsArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
  entryPointUriPath: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_AllAppliedCustomViewPermissionsArgs = {
  customViewId: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_AllCustomApplicationsArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsCustomApplicationQueryInput>;
};

export type TMcSettingsQuery_AllCustomViewsArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsCustomViewQueryInput>;
};

export type TMcSettingsQuery_AllCustomViewsInstallationsByLocatorArgs = {
  locator: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_AllFeaturesArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsFeatureQueryInput>;
};

export type TMcSettingsQuery_AllOrganizationExtensionsArgs = {
  organizationIds?: TMcSettingsInputMaybe<
    Array<TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>>
  >;
};

export type TMcSettingsQuery_AllPublicCustomApplicationsDevelopedByCommercetoolsArgs =
  {
    params?: TMcSettingsInputMaybe<TMcSettingsAllPublicCustomApplicationsDevelopedByCommercetoolsQueryInput>;
  };

export type TMcSettingsQuery_BusinessUnitsListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_CartDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_CustomApplicationArgs = {
  applicationId: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_CustomViewArgs = {
  customViewId: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_CustomersSearchListMyViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_DashboardViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_DiscountCodesCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_GlobalOrganizationExtensionArgs = {
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_MyCustomApplicationsArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsMyCustomApplicationQueryInput>;
};

export type TMcSettingsQuery_MyCustomViewsArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsMyCustomViewsQueryInput>;
};

export type TMcSettingsQuery_OrderDetailViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_OrdersListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_OrganizationExtensionArgs = {
  organizationId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_OrganizationExtensionForCustomApplicationArgs = {
  entryPointUriPath: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_OrganizationExtensionForCustomViewArgs = {
  customViewId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_PimSearchListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_ProductDiscountsCustomViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_ProductTypeAttributesViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_ProductTypeAttributesViewsArgs = {
  isVariant: TMcSettingsScalars['Boolean']['input'];
  productTypeId: TMcSettingsScalars['String']['input'];
};

export type TMcSettingsQuery_ProjectSettingsStoresViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_QuotesListViewArgs = {
  id: TMcSettingsScalars['ID']['input'];
};

export type TMcSettingsQuery_RuleBuilderQuickSelectionValuesArgs = {
  ruleBuilderType: TMcSettingsRuleBuilderType;
};

export type TMcSettingsQuotesListView = {
  __typename?: 'QuotesListView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  isActive?: TMcSettingsMaybe<TMcSettingsScalars['Boolean']['output']>;
  nameAllLocales?: TMcSettingsMaybe<Array<TMcSettingsLocalizedField>>;
  projectKey: TMcSettingsScalars['String']['output'];
  search?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  sort?: TMcSettingsMaybe<TMcSettingsSort>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsQuotesListViewInput = {
  nameAllLocales: Array<TMcSettingsLocalizedFieldCreateInput>;
  search?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
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
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  resourceOptions: Array<TMcSettingsResourceType>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsResourcesNumbersConfigurationInput = {
  resourceOptions: Array<TMcSettingsResourceType>;
};

export type TMcSettingsRestrictedApplicationExtensionWhereInput = {
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  isActive?: TMcSettingsInputMaybe<TMcSettingsScalars['Boolean']['input']>;
  url?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsRestrictedCustomApplicationForOrganization = {
  __typename?: 'RestrictedCustomApplicationForOrganization';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  deployments: Array<TMcSettingsCustomApplicationDeploymentPreview>;
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  entryPointUriPath: TMcSettingsScalars['String']['output'];
  icon: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  name: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status: TMcSettingsCustomApplicationStatus;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsRestrictedCustomApplicationForOrganization_DeploymentsArgs =
  {
    params?: TMcSettingsInputMaybe<TMcSettingsCustomApplicationDeploymentPreviewsQueryInput>;
  };

export type TMcSettingsRestrictedCustomApplicationForProject = {
  __typename?: 'RestrictedCustomApplicationForProject';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  deployments: Array<TMcSettingsCustomApplicationDeploymentPreview>;
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  entryPointUriPath: TMcSettingsScalars['String']['output'];
  icon: TMcSettingsScalars['String']['output'];
  id: TMcSettingsScalars['ID']['output'];
  mainMenuLink: TMcSettingsCustomApplicationMenuLink;
  /** @deprecated This field has been renamed to mainMenuLink field. The nested submenuLinks is also now a top level field. */
  menuLinks?: TMcSettingsMaybe<TMcSettingsCustomApplicationMenuLink>;
  name: TMcSettingsScalars['String']['output'];
  permissions: Array<TMcSettingsCustomApplicationPermission>;
  status?: TMcSettingsMaybe<TMcSettingsCustomApplicationStatus>;
  submenuLinks: Array<TMcSettingsCustomApplicationSubmenuLink>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsRestrictedCustomApplicationForProject_DeploymentsArgs = {
  params?: TMcSettingsInputMaybe<TMcSettingsCustomApplicationDeploymentPreviewsQueryInput>;
};

export type TMcSettingsRestrictedCustomApplicationInstallationForOrganization =
  {
    __typename?: 'RestrictedCustomApplicationInstallationForOrganization';
    acceptedPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
    application: TMcSettingsRestrictedCustomApplicationForProject;
    createdAt: TMcSettingsScalars['DateTime']['output'];
    id: TMcSettingsScalars['ID']['output'];
    installInAllProjects: TMcSettingsScalars['Boolean']['output'];
    projects: Array<TMcSettingsProjectExtension>;
    updatedAt: TMcSettingsScalars['DateTime']['output'];
  };

export type TMcSettingsRestrictedCustomApplicationInstallationForProject = {
  __typename?: 'RestrictedCustomApplicationInstallationForProject';
  acceptedPermissions: Array<TMcSettingsCustomApplicationInstallationPermission>;
  application: TMcSettingsRestrictedCustomApplicationForProject;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  installInAllProjects: TMcSettingsScalars['Boolean']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsRestrictedCustomApplicationInstallationForProjectWhereInput =
  {
    entryPointUriPath?: TMcSettingsInputMaybe<
      TMcSettingsScalars['String']['input']
    >;
  };

export type TMcSettingsRestrictedCustomViewForOrganization = {
  __typename?: 'RestrictedCustomViewForOrganization';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  defaultLabel: TMcSettingsScalars['String']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<TMcSettingsScalars['String']['output']>;
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: TMcSettingsMaybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsRestrictedCustomViewForProject = {
  __typename?: 'RestrictedCustomViewForProject';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  defaultLabel: TMcSettingsScalars['String']['output'];
  description?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  labelAllLocales: Array<TMcSettingsLocalizedField>;
  locators: Array<TMcSettingsScalars['String']['output']>;
  permissions: Array<TMcSettingsCustomViewPermission>;
  status: TMcSettingsCustomViewStatus;
  type: TMcSettingsCustomViewType;
  typeSettings?: TMcSettingsMaybe<TMcSettingsCustomViewTypeSettings>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  url: TMcSettingsScalars['String']['output'];
};

export type TMcSettingsRestrictedCustomViewInstallationForOrganization = {
  __typename?: 'RestrictedCustomViewInstallationForOrganization';
  acceptedPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  customView: TMcSettingsRestrictedCustomViewForProject;
  id: TMcSettingsScalars['ID']['output'];
  installInAllProjects: TMcSettingsScalars['Boolean']['output'];
  projects: Array<TMcSettingsProjectExtension>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsRestrictedCustomViewInstallationForProject = {
  __typename?: 'RestrictedCustomViewInstallationForProject';
  acceptedPermissions: Array<TMcSettingsCustomViewInstallationPermission>;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  customView: TMcSettingsRestrictedCustomViewForProject;
  id: TMcSettingsScalars['ID']['output'];
  installInAllProjects: TMcSettingsScalars['Boolean']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsRestrictedCustomViewInstallationForProjectWhereInput = {
  customViewId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsRichTextEditorSettingsInput = {
  isRichTextEditorEnabled: TMcSettingsScalars['Boolean']['input'];
};

export type TMcSettingsRuleBuilderQuickSelectCreatefunctionsInput = {
  set?: TMcSettingsInputMaybe<Array<TMcSettingsScalars['String']['input']>>;
};

export type TMcSettingsRuleBuilderQuickSelectCreatepredicatesInput = {
  set?: TMcSettingsInputMaybe<Array<TMcSettingsScalars['String']['input']>>;
};

export type TMcSettingsRuleBuilderQuickSelectionInput = {
  functions?: TMcSettingsInputMaybe<TMcSettingsRuleBuilderQuickSelectCreatepredicatesInput>;
  predicates?: TMcSettingsInputMaybe<TMcSettingsRuleBuilderQuickSelectCreatefunctionsInput>;
  ruleBuilderType: TMcSettingsRuleBuilderType;
};

export type TMcSettingsRuleBuilderQuickSelectionValues = {
  __typename?: 'RuleBuilderQuickSelectionValues';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  functions: Array<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  predicates: Array<TMcSettingsScalars['String']['output']>;
  projectKey: TMcSettingsScalars['String']['output'];
  ruleBuilderType: TMcSettingsRuleBuilderType;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
};

export enum TMcSettingsRuleBuilderType {
  CartDiscount = 'CartDiscount',
  CartTargetDiscount = 'CartTargetDiscount',
  ProductDiscount = 'ProductDiscount',
  ShippingMethod = 'ShippingMethod',
}

export type TMcSettingsSalesPerformanceConfiguration = {
  __typename?: 'SalesPerformanceConfiguration';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: TMcSettingsMaybe<TMcSettingsScalars['DateTime']['output']>;
  dateTo?: TMcSettingsMaybe<TMcSettingsScalars['DateTime']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  showPreviousTimeframe: TMcSettingsScalars['Boolean']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsSalesPerformanceConfigurationInput = {
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: TMcSettingsInputMaybe<TMcSettingsScalars['DateTime']['input']>;
  dateTo?: TMcSettingsInputMaybe<TMcSettingsScalars['DateTime']['input']>;
  showPreviousTimeframe: TMcSettingsScalars['Boolean']['input'];
};

export type TMcSettingsSampleDataImportMetadata = {
  __typename?: 'SampleDataImportMetadata';
  completed: TMcSettingsScalars['Boolean']['output'];
  dataset?: TMcSettingsMaybe<TMcSettingsSampleDatasets>;
};

export enum TMcSettingsSampleDatasets {
  B2B = 'B2B',
  B2Clifestyle = 'B2CLIFESTYLE',
  Fashion = 'FASHION',
  Goodstore = 'GOODSTORE',
}

export type TMcSettingsSort = {
  __typename?: 'Sort';
  key: TMcSettingsScalars['String']['output'];
  order: TMcSettingsSortOrder;
};

export type TMcSettingsSortCreateInput = {
  id?: TMcSettingsInputMaybe<TMcSettingsScalars['ID']['input']>;
  key: TMcSettingsScalars['String']['input'];
  order: TMcSettingsSortOrder;
};

export enum TMcSettingsSortOrder {
  Asc = 'Asc',
  Desc = 'Desc',
}

export type TMcSettingsTdlqMessageResult = {
  __typename?: 'TDLQMessageResult';
  ackId: TMcSettingsScalars['String']['output'];
  data: TMcSettingsScalars['String']['output'];
  error?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  id: TMcSettingsScalars['ID']['output'];
};

export type TMcSettingsTable = {
  __typename?: 'Table';
  nestedTable?: TMcSettingsMaybe<TMcSettingsNestedTable>;
  visibleColumns: Array<TMcSettingsScalars['String']['output']>;
};

export type TMcSettingsTopProductsConfiguration = {
  __typename?: 'TopProductsConfiguration';
  bestSellingLimit: TMcSettingsBestSellingLimit;
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsTopProductsConfigurationInput = {
  bestSellingLimit?: TMcSettingsInputMaybe<TMcSettingsBestSellingLimit>;
};

export type TMcSettingsTotalOrdersConfiguration = {
  __typename?: 'TotalOrdersConfiguration';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: TMcSettingsMaybe<TMcSettingsScalars['DateTime']['output']>;
  dateTo?: TMcSettingsMaybe<TMcSettingsScalars['DateTime']['output']>;
  id: TMcSettingsScalars['ID']['output'];
  productId?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  showPreviousTimeframe: TMcSettingsScalars['Boolean']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsTotalOrdersConfigurationInput = {
  dateFilterType: TMcSettingsDateFilterType;
  dateFrom?: TMcSettingsInputMaybe<TMcSettingsScalars['DateTime']['input']>;
  dateTo?: TMcSettingsInputMaybe<TMcSettingsScalars['DateTime']['input']>;
  productId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
  showPreviousTimeframe: TMcSettingsScalars['Boolean']['input'];
};

export type TMcSettingsTotalSalesConfiguration = {
  __typename?: 'TotalSalesConfiguration';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  productId?: TMcSettingsMaybe<TMcSettingsScalars['String']['output']>;
  updatedAt: TMcSettingsScalars['DateTime']['output'];
};

export type TMcSettingsTotalSalesConfigurationInput = {
  productId?: TMcSettingsInputMaybe<TMcSettingsScalars['String']['input']>;
};

export type TMcSettingsVariantPricesListView = {
  __typename?: 'VariantPricesListView';
  createdAt: TMcSettingsScalars['DateTime']['output'];
  id: TMcSettingsScalars['ID']['output'];
  projectKey: TMcSettingsScalars['String']['output'];
  updatedAt: TMcSettingsScalars['DateTime']['output'];
  userId: TMcSettingsScalars['String']['output'];
  visibleColumns: Array<TMcSettingsScalars['String']['output']>;
};

export type TMcSettingsVariantPricesListViewInput = {
  visibleColumns: Array<TMcSettingsScalars['String']['input']>;
};
