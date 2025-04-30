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
  BigDecimal: { input: string; output: string };
  Country: { input: string; output: string };
  Currency: { input: string; output: string };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
  Json: {
    input: { [key: string]: unknown };
    output: { [key: string]: unknown };
  };
  KeyReferenceInput: { input: string; output: string };
  Locale: { input: string; output: string };
  Long: { input: number; output: number };
  SearchFilter: { input: string; output: string };
  SearchSort: { input: string; output: string };
  Set: { input: unknown[]; output: unknown[] };
  Time: { input: string; output: string };
  YearMonth: { input: string; output: string };
};

/** API Clients can be used to obtain OAuth 2 access tokens. The secret is only shown once in the response of creating the API Client. */
export type TCtpApiClientWithSecret = {
  __typename?: 'APIClientWithSecret';
  accessTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleteAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastUsedAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  refreshTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  scope: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

/** API Clients can be used to obtain OAuth 2 access tokens */
export type TCtpApiClientWithoutSecret = {
  __typename?: 'APIClientWithoutSecret';
  accessTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleteAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastUsedAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  refreshTokenValiditySeconds?: Maybe<Scalars['Int']['output']>;
  scope: Scalars['String']['output'];
};

export type TCtpApiClientWithoutSecretQueryResult = {
  __typename?: 'APIClientWithoutSecretQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpApiClientWithoutSecret>;
  total: Scalars['Long']['output'];
};

export type TCtpAwsLambdaDestination = TCtpExtensionDestination & {
  __typename?: 'AWSLambdaDestination';
  accessKey: Scalars['String']['output'];
  accessSecret: Scalars['String']['output'];
  arn: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpAwsLambdaDestinationInput = {
  accessKey: Scalars['String']['input'];
  accessSecret: Scalars['String']['input'];
  arn: Scalars['String']['input'];
};

export type TCtpAbsoluteCartDiscountValue = TCtpCartDiscountValue & {
  __typename?: 'AbsoluteCartDiscountValue';
  applicationMode: TCtpDiscountApplicationMode;
  money: Array<TCtpMoney>;
  type: Scalars['String']['output'];
};

export type TCtpAbsoluteCartDiscountValueInput = {
  applicationMode: TCtpDiscountApplicationMode;
  money: Array<TCtpMoneyInput>;
};

export type TCtpAbsoluteDiscountValue = TCtpCartDiscountValue &
  TCtpProductDiscountValue & {
    __typename?: 'AbsoluteDiscountValue';
    money: Array<TCtpMoney>;
    type: Scalars['String']['output'];
  };

export type TCtpAbsoluteDiscountValueInput = {
  money: Array<TCtpMoneyInput>;
};

export enum TCtpActionType {
  Create = 'Create',
  Update = 'Update',
}

/** A field to access the active cart. */
export type TCtpActiveCartInterface = {
  activeCart?: Maybe<TCtpCart>;
};

export type TCtpAddAssociateRolePermission = {
  permission: TCtpPermission;
};

export type TCtpAddAttributeGroupAttribute = {
  attribute: TCtpAttributeReferenceInput;
};

export type TCtpAddBusinessUnitAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddBusinessUnitAssociate = {
  associate: TCtpAssociateDraft;
};

export type TCtpAddBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddBusinessUnitStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpAddCartCustomLineItem = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: InputMaybe<TCtpCustomLineItemPriceMode>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpCustomLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  slug: Scalars['String']['input'];
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddCartCustomShippingMethod = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: InputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingAddress: TCtpAddressInput;
  shippingKey: Scalars['String']['input'];
  shippingMethodName: Scalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddCartDiscountCode = {
  code: Scalars['String']['input'];
  validateDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpAddCartDiscountStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpAddCartItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddCartLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  key?: InputMaybe<Scalars['String']['input']>;
  perMethodExternalTaxRate?: InputMaybe<Array<TCtpMethodExternalTaxRateDraft>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddCartPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpAddCartShippingMethod = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: InputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingAddress: TCtpAddressInput;
  shippingKey: Scalars['String']['input'];
  shippingMethod: TCtpResourceIdentifierInput;
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpAddCartShoppingList = {
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  shoppingList: TCtpResourceIdentifierInput;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddCategoryAsset = {
  asset: TCtpAssetDraftInput;
  position?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddChannelRoles = {
  roles: Array<TCtpChannelRole>;
};

export type TCtpAddCustomerAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddCustomerBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpAddCustomerGroupAssignment = {
  customerGroupAssignment: TCtpCustomerGroupAssignmentDraft;
};

export type TCtpAddCustomerShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddCustomerStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpAddInventoryEntryQuantity = {
  quantity: Scalars['Long']['input'];
};

export type TCtpAddMyBusinessUnitAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddMyBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddMyBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddMyCartLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddMyPaymentTransaction = {
  transaction: TCtpMyTransactionDraft;
};

export type TCtpAddOrderDelivery = {
  address?: InputMaybe<TCtpAddressInput>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<TCtpDeliveryItemDraftType>>;
  parcels?: InputMaybe<Array<TCtpParcelDataDraftType>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddOrderEditStagedAction = {
  stagedAction: TCtpStagedOrderUpdateAction;
};

export type TCtpAddOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddOrderParcelToDelivery = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<TCtpDeliveryItemDraftType>>;
  measurements?: InputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpAddOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpAddOrderReturnInfo = {
  items: Array<TCtpReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']['input']>;
  returnTrackingId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddPaymentInterfaceInteraction = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddPaymentTransaction = {
  transaction: TCtpTransactionDraft;
};

export type TCtpAddProductAsset = {
  asset: TCtpAssetDraftInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddProductExternalImage = {
  image: TCtpImageInput;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddProductPrice = {
  price: TCtpProductPriceDataInput;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddProductSelectionProduct = {
  product: TCtpResourceIdentifierInput;
  variantSelection?: InputMaybe<TCtpProductVariantSelectionDraft>;
};

export type TCtpAddProductTailoringAsset = {
  asset: TCtpAssetDraftInput;
  position?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddProductTailoringExternalImage = {
  image: TCtpImageInput;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddProductToCategory = {
  category: TCtpResourceIdentifierInput;
  orderHint?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpAddProductVariant = {
  assets?: InputMaybe<Array<TCtpAssetDraftInput>>;
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  images?: InputMaybe<Array<TCtpImageInput>>;
  key?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<TCtpProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpAddProductVariantTailoring = {
  assets?: InputMaybe<Array<TCtpAssetDraftInput>>;
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<TCtpImageInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpAddShippingMethodShippingRate = {
  shippingRate: TCtpShippingRateDraft;
  zone: TCtpResourceIdentifierInput;
};

export type TCtpAddShippingMethodZone = {
  zone: TCtpResourceIdentifierInput;
};

export type TCtpAddShoppingListLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddShoppingListTextLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddStagedOrderCustomLineItem = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: InputMaybe<TCtpCustomLineItemPriceMode>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpCustomLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraftType>;
  slug: Scalars['String']['input'];
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddStagedOrderCustomLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderCustomLineItemOutput';
    draft: TCtpCustomLineItemDraftOutput;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderDelivery = {
  address?: InputMaybe<TCtpAddressInput>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<TCtpDeliveryItemDraftType>>;
  parcels?: InputMaybe<Array<TCtpParcelDataDraftType>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddStagedOrderDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderDeliveryOutput';
    address?: Maybe<TCtpAddressDraft>;
    custom?: Maybe<TCtpCustomFieldsCommand>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    items: Array<TCtpDeliveryItem>;
    parcels: Array<TCtpParcelData>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderDiscountCode = {
  code: Scalars['String']['input'];
  validateDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpAddStagedOrderDiscountCodeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderDiscountCodeOutput';
    code: Scalars['String']['output'];
    type: Scalars['String']['output'];
    validateDuplicates: Scalars['Boolean']['output'];
  };

export type TCtpAddStagedOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddStagedOrderItemShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderItemShippingAddressOutput';
    address: TCtpAddressDraft;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderLineItem = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  key?: InputMaybe<Scalars['String']['input']>;
  perMethodExternalTaxRate?: InputMaybe<Array<TCtpMethodExternalTaxRateDraft>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraftType>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpAddStagedOrderLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderLineItemOutput';
    draft: TCtpLineItemDraftOutput;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderParcelToDelivery = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<TCtpDeliveryItemDraftType>>;
  measurements?: InputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpAddStagedOrderParcelToDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderParcelToDeliveryOutput';
    custom?: Maybe<TCtpCustomFieldsCommand>;
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    items: Array<TCtpDeliveryItem>;
    measurements?: Maybe<TCtpParcelMeasurements>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    trackingData?: Maybe<TCtpTrackingData>;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpAddStagedOrderPaymentOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderPaymentOutput';
    paymentResId: TCtpResourceIdentifier;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderReturnInfo = {
  items: Array<TCtpReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']['input']>;
  returnTrackingId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAddStagedOrderReturnInfoOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderReturnInfoOutput';
    items: Array<TCtpReturnItemDraftTypeOutput>;
    returnDate?: Maybe<Scalars['DateTime']['output']>;
    returnTrackingId?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpAddStagedOrderShoppingList = {
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  shoppingList: TCtpResourceIdentifierInput;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddStagedOrderShoppingListOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderShoppingListOutput';
    distributionChannelResId?: Maybe<TCtpChannelReferenceIdentifier>;
    shoppingListResId: TCtpResourceIdentifier;
    supplyChannelResId?: Maybe<TCtpChannelReferenceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpAddStandalonePriceTier = {
  tier: TCtpProductPriceTierInput;
};

export type TCtpAddStateRoles = {
  roles: Array<TCtpStateRole>;
};

export type TCtpAddStoreCountry = {
  country: TCtpStoreCountryInput;
};

export type TCtpAddStoreDistributionChannel = {
  distributionChannel: TCtpResourceIdentifierInput;
};

export type TCtpAddStoreProductSelection = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpAddStoreSupplyChannel = {
  supplyChannel: TCtpResourceIdentifierInput;
};

export type TCtpAddTypeEnumValue = {
  fieldName: Scalars['String']['input'];
  value: TCtpEnumValueInput;
};

export type TCtpAddTypeFieldDefinition = {
  fieldDefinition: TCtpFieldDefinitionInput;
};

export type TCtpAddTypeLocalizedEnumValue = {
  fieldName: Scalars['String']['input'];
  value: TCtpLocalizedEnumValueInput;
};

export type TCtpAddZoneLocation = {
  location: TCtpZoneLocation;
};

/** An address represents a postal address. */
export type TCtpAddress = {
  __typename?: 'Address';
  additionalAddressInfo?: Maybe<Scalars['String']['output']>;
  additionalStreetInfo?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['Country']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TCtpAddressDraft = {
  __typename?: 'AddressDraft';
  additionalAddressInfo?: Maybe<Scalars['String']['output']>;
  additionalStreetInfo?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['Country']['output'];
  custom?: Maybe<TCtpCustomFieldsCommand>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TCtpAddressInput = {
  additionalAddressInfo?: InputMaybe<Scalars['String']['input']>;
  additionalStreetInfo?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['Country']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  pOBox?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetName?: InputMaybe<Scalars['String']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum TCtpAnonymousCartSignInMode {
  /**
   * `LineItem`s of the anonymous cart will be copied to the customer’s active cart that has been modified most recently.
   *
   * The `CartState` of the anonymous cart gets changed to `Merged` while the `CartState` of the customer’s cart remains `Active`.
   *
   * `CustomLineItems` and `CustomFields` of the anonymous cart will not be copied to the customers cart.
   *
   * If a `LineItem` in the anonymous cart matches an existing line item in the customer’s cart (same product ID and variant ID), the maximum quantity of both LineItems is used as the new quantity. In that case `CustomFields` on the `LineItem` of the anonymous cart will not be in the resulting `LineItem`.
   */
  MergeWithExistingCustomerCart = 'MergeWithExistingCustomerCart',
  /** The anonymous cart is used as new active customer cart. No `LineItem`s get merged. */
  UseAsNewActiveCustomerCart = 'UseAsNewActiveCustomerCart',
}

export type TCtpApplied = TCtpOrderEditResult & {
  __typename?: 'Applied';
  appliedAt: Scalars['DateTime']['output'];
  excerptAfterEdit: TCtpOrderExcerpt;
  excerptBeforeEdit: TCtpOrderExcerpt;
  type: Scalars['String']['output'];
};

export type TCtpApplyCartDeltaToCustomLineItemShippingDetailsTargets = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  targetsDelta?: InputMaybe<Array<TCtpShippingTargetDraft>>;
  targetsDeltaDraft?: InputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpApplyCartDeltaToLineItemShippingDetailsTargets = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  targetsDelta?: InputMaybe<Array<TCtpShippingTargetDraft>>;
  targetsDeltaDraft?: InputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpApplyStagedChanges = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpApprovalFlow = TCtpVersioned & {
  __typename?: 'ApprovalFlow';
  approvals: Array<TCtpApprovalFlowApproval>;
  businessUnit: TCtpBusinessUnit;
  businessUnitRef: TCtpKeyReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  currentTierPendingApprovers: Array<TCtpRuleApprover>;
  custom?: Maybe<TCtpCustomFieldsType>;
  eligibleApprovers: Array<TCtpRuleApprover>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  order?: Maybe<TCtpOrder>;
  orderRef: TCtpReference;
  pendingApprovers: Array<TCtpRuleApprover>;
  rejection?: Maybe<TCtpApprovalFlowRejection>;
  rules: Array<TCtpApprovalRule>;
  status: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type TCtpApprovalFlowApproval = {
  __typename?: 'ApprovalFlowApproval';
  approvedAt: Scalars['DateTime']['output'];
  approver: TCtpAssociate;
};

export type TCtpApprovalFlowApproved = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowApproved';
  associate?: Maybe<TCtpCustomer>;
  associateRef?: Maybe<TCtpReference>;
  order?: Maybe<TCtpOrder>;
  orderRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpApprovalFlowCompleted = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowCompleted';
  order?: Maybe<TCtpOrder>;
  orderRef?: Maybe<TCtpReference>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpApprovalFlowCreated = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowCreated';
  approvalFlow: TCtpApprovalFlow;
  type: Scalars['String']['output'];
};

export type TCtpApprovalFlowQueryResult = {
  __typename?: 'ApprovalFlowQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpApprovalFlow>;
  total: Scalars['Long']['output'];
};

export type TCtpApprovalFlowRejected = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowRejected';
  associate?: Maybe<TCtpCustomer>;
  associateRef?: Maybe<TCtpReference>;
  order?: Maybe<TCtpOrder>;
  orderRef?: Maybe<TCtpReference>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpApprovalFlowRejection = {
  __typename?: 'ApprovalFlowRejection';
  reason?: Maybe<Scalars['String']['output']>;
  rejectedAt: Scalars['DateTime']['output'];
  rejecter: TCtpAssociate;
};

export type TCtpApprovalFlowUpdateAction = {
  approve?: InputMaybe<TCtpApproveApprovalFlow>;
  reject?: InputMaybe<TCtpRejectApprovalFlow>;
  setCustomField?: InputMaybe<TCtpSetApprovalFlowCustomField>;
  setCustomType?: InputMaybe<TCtpSetApprovalFlowCustomType>;
};

export type TCtpApprovalRule = TCtpVersioned & {
  __typename?: 'ApprovalRule';
  approvers: TCtpApproverHierarchy;
  businessUnit: TCtpBusinessUnit;
  businessUnitRef: TCtpKeyReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  name: Scalars['String']['output'];
  predicate: Scalars['String']['output'];
  requesters: Array<TCtpRuleRequester>;
  status: TCtpApprovalRuleStatus;
  version: Scalars['Long']['output'];
};

export type TCtpApprovalRuleApproversSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleApproversSet';
  approvers: TCtpApproverHierarchy;
  oldApprovers: TCtpApproverHierarchy;
  type: Scalars['String']['output'];
};

export type TCtpApprovalRuleCreated = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleCreated';
  approvalRule: TCtpApprovalRule;
  type: Scalars['String']['output'];
};

export type TCtpApprovalRuleDescriptionSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleDescriptionSet';
  description?: Maybe<Scalars['String']['output']>;
  oldDescription?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpApprovalRuleDraft = {
  approvers: TCtpApproverHierarchyDraft;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  predicate: Scalars['String']['input'];
  requesters: Array<TCtpRuleRequesterDraft>;
  status: TCtpApprovalRuleStatus;
};

export type TCtpApprovalRuleKeySet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpApprovalRuleNameSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleNameSet';
  name: Scalars['String']['output'];
  oldName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpApprovalRulePredicateSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRulePredicateSet';
  oldPredicate: Scalars['String']['output'];
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpApprovalRuleQueryResult = {
  __typename?: 'ApprovalRuleQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpApprovalRule>;
  total: Scalars['Long']['output'];
};

export type TCtpApprovalRuleRequestersSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleRequestersSet';
  oldRequesters: Array<TCtpRuleRequester>;
  requesters: Array<TCtpRuleRequester>;
  type: Scalars['String']['output'];
};

export enum TCtpApprovalRuleStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TCtpApprovalRuleStatusSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleStatusSet';
  oldStatus: TCtpApprovalRuleStatus;
  status: TCtpApprovalRuleStatus;
  type: Scalars['String']['output'];
};

export type TCtpApprovalRuleUpdateAction = {
  setApprovers?: InputMaybe<TCtpSetApprovalRuleApprovers>;
  setCustomField?: InputMaybe<TCtpSetApprovalRuleCustomField>;
  setCustomType?: InputMaybe<TCtpSetApprovalRuleCustomType>;
  setDescription?: InputMaybe<TCtpSetApprovalRuleDescription>;
  setKey?: InputMaybe<TCtpSetApprovalRuleKey>;
  setName?: InputMaybe<TCtpSetApprovalRuleName>;
  setPredicate?: InputMaybe<TCtpSetApprovalRulePredicate>;
  setRequesters?: InputMaybe<TCtpSetApprovalRuleRequesters>;
  setStatus?: InputMaybe<TCtpSetApprovalRuleStatus>;
};

export type TCtpApproveApprovalFlow = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpApproverConjunction = {
  __typename?: 'ApproverConjunction';
  and: Array<TCtpApproverDisjunction>;
};

export type TCtpApproverConjunctionDraft = {
  and: Array<TCtpApproverDisjunctionDraft>;
};

export type TCtpApproverDisjunction = {
  __typename?: 'ApproverDisjunction';
  or: Array<TCtpRuleApprover>;
};

export type TCtpApproverDisjunctionDraft = {
  or: Array<TCtpRuleApproverDraft>;
};

export type TCtpApproverHierarchy = {
  __typename?: 'ApproverHierarchy';
  tiers: Array<TCtpApproverConjunction>;
};

export type TCtpApproverHierarchyDraft = {
  tiers: Array<TCtpApproverConjunctionDraft>;
};

export type TCtpAsAssociate = TCtpCartQueryInterface &
  TCtpOrderQueryInterface &
  TCtpQuoteQueryInterface &
  TCtpQuoteRequestQueryInterface &
  TCtpShoppingListQueryInterface & {
    __typename?: 'AsAssociate';
    approvalFlow?: Maybe<TCtpApprovalFlow>;
    approvalFlows: TCtpApprovalFlowQueryResult;
    approvalRule?: Maybe<TCtpApprovalRule>;
    approvalRules: TCtpApprovalRuleQueryResult;
    businessUnit?: Maybe<TCtpBusinessUnit>;
    businessUnits: TCtpBusinessUnitQueryResult;
    cart?: Maybe<TCtpCart>;
    carts: TCtpCartQueryResult;
    order?: Maybe<TCtpOrder>;
    orders: TCtpOrderQueryResult;
    quote?: Maybe<TCtpQuote>;
    quoteRequest?: Maybe<TCtpQuoteRequest>;
    quoteRequests: TCtpQuoteRequestQueryResult;
    quotes: TCtpQuoteQueryResult;
    shoppingList?: Maybe<TCtpShoppingList>;
    shoppingLists: TCtpShoppingListQueryResult;
  };

export type TCtpAsAssociate_ApprovalFlowArgs = {
  id: Scalars['String']['input'];
};

export type TCtpAsAssociate_ApprovalFlowsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_ApprovalRuleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_ApprovalRulesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_BusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_BusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_CartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpAsAssociate_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_QuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_QuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_QuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_QuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociate_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpAsAssociateArgument = {
  associateId: Scalars['String']['input'];
  businessUnitKey: Scalars['KeyReferenceInput']['input'];
};

export type TCtpAsset = {
  __typename?: 'Asset';
  custom?: Maybe<TCtpCustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  sources: Array<TCtpAssetSource>;
  tags: Array<Scalars['String']['output']>;
};

export type TCtpAsset_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpAsset_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpAssetDimensions = {
  __typename?: 'AssetDimensions';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type TCtpAssetDimensionsInput = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type TCtpAssetDraftInput = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  sources?: InputMaybe<Array<TCtpAssetSourceInput>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAssetSource = {
  __typename?: 'AssetSource';
  contentType?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<TCtpAssetDimensions>;
  key?: Maybe<Scalars['String']['output']>;
  uri: Scalars['String']['output'];
};

export type TCtpAssetSourceInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<TCtpAssetDimensionsInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  uri: Scalars['String']['input'];
};

export type TCtpAssociate = {
  __typename?: 'Associate';
  associateRoleAssignments: Array<TCtpAssociateRoleAssignment>;
  customer?: Maybe<TCtpCustomer>;
  customerRef?: Maybe<TCtpReference>;
};

export type TCtpAssociateDraft = {
  associateRoleAssignments?: InputMaybe<
    Array<TCtpAssociateRoleAssignmentDraft>
  >;
  customer: TCtpResourceIdentifierInput;
};

export enum TCtpAssociateInheritanceMode {
  Disabled = 'Disabled',
  Enabled = 'Enabled',
}

export type TCtpAssociateRole = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'AssociateRole';
    buyerAssignable: Scalars['Boolean']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    id: Scalars['String']['output'];
    key: Scalars['String']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    permissions: Array<TCtpPermission>;
    version: Scalars['Long']['output'];
  };

export type TCtpAssociateRoleAssignment = {
  __typename?: 'AssociateRoleAssignment';
  associateRole: TCtpAssociateRole;
  associateRoleRef?: Maybe<TCtpKeyReference>;
  inheritance: TCtpAssociateInheritanceMode;
};

export type TCtpAssociateRoleAssignmentDraft = {
  associateRole: TCtpResourceIdentifierInput;
  inheritance?: InputMaybe<TCtpAssociateInheritanceMode>;
};

export type TCtpAssociateRoleBuyerAssignableChanged = TCtpMessagePayload & {
  __typename?: 'AssociateRoleBuyerAssignableChanged';
  buyerAssignable: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TCtpAssociateRoleCreated = TCtpMessagePayload & {
  __typename?: 'AssociateRoleCreated';
  associateRole: TCtpAssociateRole;
  type: Scalars['String']['output'];
};

export type TCtpAssociateRoleDeleted = TCtpMessagePayload & {
  __typename?: 'AssociateRoleDeleted';
  type: Scalars['String']['output'];
};

export type TCtpAssociateRoleDraft = {
  buyerAssignable: Scalars['Boolean']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<TCtpPermission>>;
};

export type TCtpAssociateRoleNameSet = TCtpMessagePayload & {
  __typename?: 'AssociateRoleNameSet';
  name?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpAssociateRolePermissionAdded = TCtpMessagePayload & {
  __typename?: 'AssociateRolePermissionAdded';
  permission: TCtpPermission;
  type: Scalars['String']['output'];
};

export type TCtpAssociateRolePermissionRemoved = TCtpMessagePayload & {
  __typename?: 'AssociateRolePermissionRemoved';
  permission: TCtpPermission;
  type: Scalars['String']['output'];
};

export type TCtpAssociateRolePermissionsSet = TCtpMessagePayload & {
  __typename?: 'AssociateRolePermissionsSet';
  permissions?: Maybe<Array<TCtpPermission>>;
  type: Scalars['String']['output'];
};

export type TCtpAssociateRoleQueryResult = {
  __typename?: 'AssociateRoleQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpAssociateRole>;
  total: Scalars['Long']['output'];
};

export type TCtpAssociateRoleUpdateAction = {
  addPermission?: InputMaybe<TCtpAddAssociateRolePermission>;
  changeBuyerAssignable?: InputMaybe<TCtpChangeAssociateRoleBuyerAssignable>;
  removePermission?: InputMaybe<TCtpRemoveAssociateRolePermission>;
  setCustomField?: InputMaybe<TCtpSetAssociateRoleCustomField>;
  setCustomType?: InputMaybe<TCtpSetAssociateRoleCustomType>;
  setName?: InputMaybe<TCtpSetAssociateRoleName>;
  setPermissions?: InputMaybe<TCtpSetAssociateRolePermissions>;
};

export type TCtpAttribute = {
  name: Scalars['String']['output'];
};

export enum TCtpAttributeConstraint {
  /** A set of attributes, that have this constraint, should have different combinations in each variant */
  CombinationUnique = 'CombinationUnique',
  /** No constraints are applied to the attribute */
  None = 'None',
  /** Attribute value should be the same in all variants */
  SameForAll = 'SameForAll',
  /** Attribute value should be different in each variant */
  Unique = 'Unique',
}

export type TCtpAttributeDefinition = {
  __typename?: 'AttributeDefinition';
  attributeConstraint: TCtpAttributeConstraint;
  inputHint: TCtpTextInputHint;
  inputTip?: Maybe<Scalars['String']['output']>;
  inputTipAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  isRequired: Scalars['Boolean']['output'];
  isSearchable: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  level: TCtpLevel;
  name: Scalars['String']['output'];
  type:
    | TCtpBooleanAttributeDefinitionType
    | TCtpDateAttributeDefinitionType
    | TCtpDateTimeAttributeDefinitionType
    | TCtpEnumAttributeDefinitionType
    | TCtpLocalizableEnumAttributeDefinitionType
    | TCtpLocalizableTextAttributeDefinitionType
    | TCtpMoneyAttributeDefinitionType
    | TCtpNestedAttributeDefinitionType
    | TCtpNumberAttributeDefinitionType
    | TCtpReferenceAttributeDefinitionType
    | TCtpSetAttributeDefinitionType
    | TCtpTextAttributeDefinitionType
    | TCtpTimeAttributeDefinitionType;
};

export type TCtpAttributeDefinition_InputTipArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpAttributeDefinition_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpAttributeDefinitionDraft = {
  attributeConstraint?: InputMaybe<TCtpAttributeConstraint>;
  inputHint?: InputMaybe<TCtpTextInputHint>;
  inputTip?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  isRequired: Scalars['Boolean']['input'];
  isSearchable: Scalars['Boolean']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  level?: InputMaybe<TCtpLevel>;
  name: Scalars['String']['input'];
  type: TCtpAttributeTypeDraft;
};

export type TCtpAttributeDefinitionResult = {
  __typename?: 'AttributeDefinitionResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpAttributeDefinition>;
  total: Scalars['Int']['output'];
};

/** (https://docs.commercetools.com/api/projects/productTypes#attributetype)[https://docs.commercetools.com/api/projects/productTypes#attributetype] */
export type TCtpAttributeDefinitionType = {
  name: Scalars['String']['output'];
};

export type TCtpAttributeGroup = TCtpVersioned & {
  __typename?: 'AttributeGroup';
  attributes: Array<TCtpAttributeReference>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  version: Scalars['Long']['output'];
};

export type TCtpAttributeGroup_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpAttributeGroup_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpAttributeGroupDraft = {
  attributes: Array<TCtpAttributeReferenceInput>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpAttributeGroupLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'AttributeGroupLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpAttributeGroupLimitsProjection = {
  __typename?: 'AttributeGroupLimitsProjection';
  total: TCtpAttributeGroupLimitWithCurrent;
};

export type TCtpAttributeGroupQueryResult = {
  __typename?: 'AttributeGroupQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpAttributeGroup>;
  total: Scalars['Long']['output'];
};

export type TCtpAttributeGroupUpdateAction = {
  addAttribute?: InputMaybe<TCtpAddAttributeGroupAttribute>;
  changeName?: InputMaybe<TCtpChangeAttributeGroupName>;
  removeAttribute?: InputMaybe<TCtpRemoveAttributeGroupAttribute>;
  setAttributes?: InputMaybe<TCtpSetAttributeGroupAttributes>;
  setDescription?: InputMaybe<TCtpSetAttributeGroupDescription>;
  setKey?: InputMaybe<TCtpSetAttributeGroupKey>;
};

export type TCtpAttributeReference = {
  __typename?: 'AttributeReference';
  key: Scalars['String']['output'];
};

export type TCtpAttributeReferenceInput = {
  key: Scalars['String']['input'];
};

export type TCtpAttributeSetElementTypeDraft = {
  boolean?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  date?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  datetime?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  enum?: InputMaybe<TCtpEnumTypeDraft>;
  lenum?: InputMaybe<TCtpLocalizableEnumTypeDraft>;
  ltext?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  money?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  number?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  reference?: InputMaybe<TCtpReferenceTypeDefinitionDraft>;
  text?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  time?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
};

export type TCtpAttributeSetTypeDraft = {
  elementType: TCtpAttributeSetElementTypeDraft;
};

export type TCtpAttributeTypeDraft = {
  boolean?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  date?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  datetime?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  enum?: InputMaybe<TCtpEnumTypeDraft>;
  lenum?: InputMaybe<TCtpLocalizableEnumTypeDraft>;
  ltext?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  money?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  number?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  reference?: InputMaybe<TCtpReferenceTypeDefinitionDraft>;
  set?: InputMaybe<TCtpAttributeSetTypeDraft>;
  text?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
  time?: InputMaybe<TCtpSimpleAttributeTypeDraft>;
};

export type TCtpAttribution = {
  __typename?: 'Attribution';
  clientId?: Maybe<Scalars['String']['output']>;
  source: TCtpAttributionSource;
  userRef?: Maybe<TCtpReference>;
};

export enum TCtpAttributionSource {
  Export = 'Export',
  Import = 'Import',
}

/** AuthenticationMode values. */
export enum TCtpAuthenticationMode {
  ExternalAuth = 'ExternalAuth',
  Password = 'Password',
}

export type TCtpAuthorizationHeader = TCtpHttpDestinationAuthentication & {
  __typename?: 'AuthorizationHeader';
  headerValue: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpAuthorizationHeaderInput = {
  headerValue: Scalars['String']['input'];
};

export enum TCtpAwsAuthenticationMode {
  Credentials = 'Credentials',
  Iam = 'IAM',
}

export type TCtpAzureFunctionsAuthentication =
  TCtpHttpDestinationAuthentication & {
    __typename?: 'AzureFunctionsAuthentication';
    key: Scalars['String']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpAzureFunctionsAuthenticationInput = {
  key: Scalars['String']['input'];
};

export type TCtpAzureServiceBusDestination = TCtpDestination & {
  __typename?: 'AzureServiceBusDestination';
  connectionString: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpAzureServiceBusDestinationInput = {
  connectionString: Scalars['String']['input'];
};

export type TCtpBaseMoney = {
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  fractionDigits: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpBaseMoneyInput = {
  centPrecision?: InputMaybe<TCtpMoneyInput>;
  highPrecision?: InputMaybe<TCtpHighPrecisionMoneyInput>;
};

export type TCtpBaseSearchKeywordInput = {
  custom?: InputMaybe<TCtpCustomSuggestTokenizerInput>;
  whitespace?: InputMaybe<TCtpWhitespaceSuggestTokenizerInput>;
};

export type TCtpBestDeal = TCtpDiscountTypeCombination & {
  __typename?: 'BestDeal';
  chosenDiscountType?: Maybe<TCtpChosenDiscountType>;
  type: Scalars['String']['output'];
};

export type TCtpBooleanAttribute = TCtpAttribute & {
  __typename?: 'BooleanAttribute';
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type TCtpBooleanAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'BooleanAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type TCtpBooleanField = TCtpCustomField & {
  __typename?: 'BooleanField';
  name: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type TCtpBooleanType = TCtpFieldType & {
  __typename?: 'BooleanType';
  name: Scalars['String']['output'];
};

export type TCtpBusinessUnit = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'BusinessUnit';
    addresses: Array<TCtpAddress>;
    /** This field contains the BusinessUnits KeyReferences from the Company to the parent Division of this BusinessUnit in that order. */
    ancestors: Array<TCtpBusinessUnit>;
    approvalRuleMode: TCtpBusinessUnitApprovalRuleMode;
    associateMode: TCtpBusinessUnitAssociateMode;
    associates: Array<TCtpAssociate>;
    billingAddressIds: Array<Scalars['String']['output']>;
    billingAddresses: Array<TCtpAddress>;
    contactEmail?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    defaultBillingAddress?: Maybe<TCtpAddress>;
    defaultBillingAddressId?: Maybe<Scalars['String']['output']>;
    defaultShippingAddress?: Maybe<TCtpAddress>;
    defaultShippingAddressId?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    inheritedAssociates?: Maybe<Array<TCtpInheritedAssociate>>;
    /** This field contains the inherited stores from its parentUnit if storeMode is set to FromParent. */
    inheritedStores?: Maybe<Array<TCtpInheritedStore>>;
    key: Scalars['String']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name: Scalars['String']['output'];
    parentUnit?: Maybe<TCtpBusinessUnit>;
    parentUnitRef?: Maybe<TCtpKeyReference>;
    shippingAddressIds: Array<Scalars['String']['output']>;
    shippingAddresses: Array<TCtpAddress>;
    status: TCtpBusinessUnitStatus;
    storeMode?: Maybe<Scalars['String']['output']>;
    stores?: Maybe<Array<TCtpStore>>;
    storesRef?: Maybe<Array<TCtpKeyReference>>;
    topLevelUnit: TCtpBusinessUnit;
    topLevelUnitRef?: Maybe<TCtpKeyReference>;
    unitType: TCtpBusinessUnitType;
    version: Scalars['Long']['output'];
  };

export type TCtpBusinessUnitAddressAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressAdded';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAddressChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressChanged';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAddressCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomFieldAdded';
  addressId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpBusinessUnitAddressCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomFieldChanged';
  addressId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpBusinessUnitAddressCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomFieldRemoved';
  addressId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAddressCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomTypeRemoved';
  addressId: Scalars['String']['output'];
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAddressCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomTypeSet';
  addressId: Scalars['String']['output'];
  customFields: TCtpCustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAddressRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressRemoved';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export enum TCtpBusinessUnitApprovalRuleMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent',
}

export type TCtpBusinessUnitApprovalRuleModeChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitApprovalRuleModeChanged';
  approvalRuleMode: TCtpBusinessUnitApprovalRuleMode;
  oldApprovalRuleMode?: Maybe<TCtpBusinessUnitApprovalRuleMode>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAssociateAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateAdded';
  associate: TCtpAssociate;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAssociateChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateChanged';
  associate: TCtpAssociate;
  type: Scalars['String']['output'];
};

export enum TCtpBusinessUnitAssociateMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent',
}

export type TCtpBusinessUnitAssociateModeChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateModeChanged';
  associateMode: TCtpBusinessUnitAssociateMode;
  oldAssociateMode?: Maybe<TCtpBusinessUnitAssociateMode>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAssociateProjection = {
  __typename?: 'BusinessUnitAssociateProjection';
  associateRoles: Array<TCtpAssociateRole>;
  customer?: Maybe<TCtpCustomer>;
  customerRef?: Maybe<TCtpReference>;
  inheritedAssociateRoles: Array<TCtpAssociateRole>;
  permissions: Array<TCtpPermission>;
};

export type TCtpBusinessUnitAssociateRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateRemoved';
  associate: TCtpAssociate;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitAssociatesSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociatesSet';
  associates: Array<TCtpAssociate>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitBillingAddressAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitBillingAddressAdded';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitBillingAddressRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitBillingAddressRemoved';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitConfiguration = {
  __typename?: 'BusinessUnitConfiguration';
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  myBusinessUnitAssociateRoleOnCreation?: Maybe<TCtpAssociateRole>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  myBusinessUnitAssociateRoleOnCreationRef?: Maybe<TCtpKeyReference>;
  myBusinessUnitStatusOnCreation: TCtpBusinessUnitConfigurationStatus;
};

export enum TCtpBusinessUnitConfigurationStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TCtpBusinessUnitContactEmailSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitContactEmailSet';
  contactEmail?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitCreated = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCreated';
  businessUnit: TCtpBusinessUnit;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpBusinessUnitCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomFieldChanged';
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpBusinessUnitCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomTypeRemoved';
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitDefaultBillingAddressSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitDefaultBillingAddressSet';
  address?: Maybe<TCtpAddress>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitDefaultShippingAddressSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitDefaultShippingAddressSet';
  address?: Maybe<TCtpAddress>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitDeleted = TCtpMessagePayload & {
  __typename?: 'BusinessUnitDeleted';
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitDraft = {
  addresses?: InputMaybe<Array<TCtpAddressInput>>;
  approvalRuleMode?: InputMaybe<TCtpBusinessUnitApprovalRuleMode>;
  associateMode?: InputMaybe<TCtpBusinessUnitAssociateMode>;
  associates?: InputMaybe<Array<TCtpAssociateDraft>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentUnit?: InputMaybe<TCtpResourceIdentifierInput>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  storeMode?: InputMaybe<Scalars['String']['input']>;
  stores?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
  unitType: TCtpBusinessUnitType;
};

export type TCtpBusinessUnitLimitsProjection = {
  __typename?: 'BusinessUnitLimitsProjection';
  maxAssociateRoles: TCtpLimit;
  maxAssociates: TCtpLimit;
  maxDepthLimit: TCtpLimit;
  maxDivisions: TCtpLimit;
};

export type TCtpBusinessUnitNameChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitNameChanged';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitParentChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitParentChanged';
  newParentUnit?: Maybe<TCtpBusinessUnit>;
  newParentUnitRef?: Maybe<TCtpKeyReference>;
  oldParentUnit?: Maybe<TCtpBusinessUnit>;
  oldParentUnitRef?: Maybe<TCtpKeyReference>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitQueryResult = {
  __typename?: 'BusinessUnitQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpBusinessUnit>;
  total: Scalars['Long']['output'];
};

export type TCtpBusinessUnitSearchConfiguration = {
  __typename?: 'BusinessUnitSearchConfiguration';
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status: TCtpBusinessUnitSearchStatus;
};

export enum TCtpBusinessUnitSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpBusinessUnitShippingAddressAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitShippingAddressAdded';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitShippingAddressRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitShippingAddressRemoved';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export enum TCtpBusinessUnitStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TCtpBusinessUnitStatusChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStatusChanged';
  status: TCtpBusinessUnitStatus;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitStoreAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoreAdded';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitStoreModeChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoreModeChanged';
  inheritedStores?: Maybe<Array<TCtpStore>>;
  inheritedStoresRef?: Maybe<Array<TCtpKeyReference>>;
  oldInheritedStores?: Maybe<Array<TCtpStore>>;
  oldInheritedStoresRef?: Maybe<Array<TCtpKeyReference>>;
  oldStoreMode: Scalars['String']['output'];
  oldStores?: Maybe<Array<TCtpStore>>;
  oldStoresRef?: Maybe<Array<TCtpKeyReference>>;
  storeMode: Scalars['String']['output'];
  stores?: Maybe<Array<TCtpStore>>;
  storesRef?: Maybe<Array<TCtpKeyReference>>;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitStoreRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoreRemoved';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpBusinessUnitStoresSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoresSet';
  stores: Array<TCtpStore>;
  storesRef: Array<TCtpKeyReference>;
  type: Scalars['String']['output'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpBusinessUnitTopLevelUnitSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitTopLevelUnitSet';
  oldTopLevelUnit: TCtpBusinessUnit;
  oldTopLevelUnitRef?: Maybe<TCtpKeyReference>;
  topLevelUnit: TCtpBusinessUnit;
  topLevelUnitRef?: Maybe<TCtpKeyReference>;
  type: Scalars['String']['output'];
};

export enum TCtpBusinessUnitType {
  Company = 'Company',
  Division = 'Division',
}

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpBusinessUnitTypeSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitTypeSet';
  oldParentUnit?: Maybe<TCtpBusinessUnit>;
  oldParentUnitRef?: Maybe<TCtpKeyReference>;
  oldUnitType: TCtpBusinessUnitType;
  parentUnit?: Maybe<TCtpBusinessUnit>;
  parentUnitRef?: Maybe<TCtpKeyReference>;
  type: Scalars['String']['output'];
  unitType: TCtpBusinessUnitType;
};

export type TCtpBusinessUnitUpdateAction = {
  addAddress?: InputMaybe<TCtpAddBusinessUnitAddress>;
  addAssociate?: InputMaybe<TCtpAddBusinessUnitAssociate>;
  addBillingAddressId?: InputMaybe<TCtpAddBusinessUnitBillingAddressId>;
  addShippingAddressId?: InputMaybe<TCtpAddBusinessUnitShippingAddressId>;
  addStore?: InputMaybe<TCtpAddBusinessUnitStore>;
  changeAddress?: InputMaybe<TCtpChangeBusinessUnitAddress>;
  changeApprovalRuleMode?: InputMaybe<TCtpChangeBusinessUnitApprovalRuleMode>;
  changeAssociate?: InputMaybe<TCtpChangeBusinessUnitAssociate>;
  changeAssociateMode?: InputMaybe<TCtpChangeBusinessUnitAssociateMode>;
  changeName?: InputMaybe<TCtpChangeBusinessUnitName>;
  changeParentUnit?: InputMaybe<TCtpChangeBusinessUnitParentUnit>;
  changeStatus?: InputMaybe<TCtpChangeBusinessUnitStatus>;
  removeAddress?: InputMaybe<TCtpRemoveBusinessUnitAddress>;
  removeAssociate?: InputMaybe<TCtpRemoveBusinessUnitAssociate>;
  removeBillingAddressId?: InputMaybe<TCtpRemoveBusinessUnitBillingAddressId>;
  removeShippingAddressId?: InputMaybe<TCtpRemoveBusinessUnitShippingAddressId>;
  removeStore?: InputMaybe<TCtpRemoveBusinessUnitStore>;
  setAddressCustomField?: InputMaybe<TCtpSetBusinessUnitAddressCustomField>;
  setAddressCustomType?: InputMaybe<TCtpSetBusinessUnitAddressCustomType>;
  setAssociates?: InputMaybe<TCtpSetBusinessUnitAssociates>;
  setContactEmail?: InputMaybe<TCtpSetBusinessUnitContactEmail>;
  setCustomField?: InputMaybe<TCtpSetBusinessUnitCustomField>;
  setCustomType?: InputMaybe<TCtpSetBusinessUnitCustomType>;
  setDefaultBillingAddress?: InputMaybe<TCtpSetBusinessUnitDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<TCtpSetBusinessUnitDefaultShippingAddress>;
  setStoreMode?: InputMaybe<TCtpSetBusinessUnitStoreMode>;
  setStores?: InputMaybe<TCtpSetBusinessUnitStores>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  setUnitType?: InputMaybe<TCtpSetBusinessUnitUnitType>;
};

export type TCtpCancelQuoteRequest = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type TCtpCart = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Cart';
    anonymousId?: Maybe<Scalars['String']['output']>;
    billingAddress?: Maybe<TCtpAddress>;
    businessUnit?: Maybe<TCtpBusinessUnit>;
    businessUnitRef?: Maybe<TCtpKeyReference>;
    cartState: TCtpCartState;
    country?: Maybe<Scalars['Country']['output']>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    customLineItems: Array<TCtpCustomLineItem>;
    customer?: Maybe<TCtpCustomer>;
    customerEmail?: Maybe<Scalars['String']['output']>;
    customerGroup?: Maybe<TCtpCustomerGroup>;
    customerGroupRef?: Maybe<TCtpReference>;
    customerId?: Maybe<Scalars['String']['output']>;
    deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
    directDiscounts: Array<TCtpDirectDiscount>;
    discountCodes: Array<TCtpDiscountCodeInfo>;
    discountOnTotalPrice?: Maybe<TCtpDiscountOnTotalPrice>;
    discountTypeCombination?: Maybe<TCtpBestDeal | TCtpStacking>;
    id: Scalars['String']['output'];
    inventoryMode: TCtpInventoryMode;
    itemShippingAddresses: Array<TCtpAddress>;
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    lineItems: Array<TCtpLineItem>;
    locale?: Maybe<Scalars['Locale']['output']>;
    origin: TCtpCartOrigin;
    paymentInfo?: Maybe<TCtpPaymentInfo>;
    placement?: Maybe<TCtpPlacement>;
    refusedGifts: Array<TCtpCartDiscount>;
    refusedGiftsRefs: Array<TCtpReference>;
    shipping: Array<TCtpShipping>;
    shippingAddress?: Maybe<TCtpAddress>;
    shippingCustomFields?: Maybe<TCtpCustomFieldsType>;
    shippingInfo?: Maybe<TCtpShippingInfo>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    shippingMode: TCtpShippingMode;
    shippingRateInput?: Maybe<
      TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
    >;
    store?: Maybe<TCtpStore>;
    storeRef?: Maybe<TCtpKeyReference>;
    taxCalculationMode: TCtpTaxCalculationMode;
    taxMode: TCtpTaxMode;
    taxRoundingMode: TCtpRoundingMode;
    taxedPrice?: Maybe<TCtpTaxedPrice>;
    taxedShippingPrice?: Maybe<TCtpTaxedPrice>;
    totalLineItemQuantity?: Maybe<Scalars['Long']['output']>;
    totalPrice: TCtpMoney;
    version: Scalars['Long']['output'];
  };

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type TCtpCart_LineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCartClassificationInput = {
  values: Array<TCtpLocalizedEnumValueInput>;
};

export type TCtpCartClassificationType = TCtpShippingRateInputType & {
  __typename?: 'CartClassificationType';
  type: Scalars['String']['output'];
  values: Array<TCtpShippingRateInputLocalizedEnumValue>;
};

export type TCtpCartCreated = TCtpMessagePayload & {
  __typename?: 'CartCreated';
  discountCodesRefs: Array<TCtpReference>;
  lineItemCount: Scalars['Int']['output'];
  totalPrice: TCtpMoney;
  type: Scalars['String']['output'];
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type TCtpCartDiscount = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'CartDiscount';
    cartPredicate: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    id: Scalars['String']['output'];
    isActive: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    referenceRefs: Array<TCtpReference>;
    requiresDiscountCode: Scalars['Boolean']['output'];
    sortOrder: Scalars['String']['output'];
    stackingMode: TCtpStackingMode;
    stores: Array<TCtpStore>;
    storesRef: Array<TCtpKeyReference>;
    target?: Maybe<
      | TCtpCartDiscountPatternTarget
      | TCtpCartDiscountTotalPriceTarget
      | TCtpCustomLineItemsTarget
      | TCtpLineItemsTarget
      | TCtpMultiBuyCustomLineItemsTarget
      | TCtpMultiBuyLineItemsTarget
      | TCtpShippingTarget
    >;
    validFrom?: Maybe<Scalars['DateTime']['output']>;
    validUntil?: Maybe<Scalars['DateTime']['output']>;
    value:
      | TCtpAbsoluteCartDiscountValue
      | TCtpAbsoluteDiscountValue
      | TCtpFixedPriceCartDiscountValue
      | TCtpFixedPriceDiscountValue
      | TCtpGiftLineItemValue
      | TCtpRelativeDiscountValue;
    version: Scalars['Long']['output'];
  };

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type TCtpCartDiscount_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type TCtpCartDiscount_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCartDiscountCreated = TCtpMessagePayload & {
  __typename?: 'CartDiscountCreated';
  cartDiscount: TCtpCartDiscount;
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountDeleted = TCtpMessagePayload & {
  __typename?: 'CartDiscountDeleted';
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountDraft = {
  cartPredicate: Scalars['String']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  requiresDiscountCode?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder: Scalars['String']['input'];
  stackingMode?: InputMaybe<TCtpStackingMode>;
  stores?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
  target?: InputMaybe<TCtpCartDiscountTargetInput>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  value: TCtpCartDiscountValueInput;
};

export type TCtpCartDiscountLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CartDiscountLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpCartDiscountLimitsProjection = {
  __typename?: 'CartDiscountLimitsProjection';
  totalActiveWithoutDiscountCodes: TCtpCartDiscountLimitWithCurrent;
};

export type TCtpCartDiscountPatternTarget = TCtpCartDiscountTarget & {
  __typename?: 'CartDiscountPatternTarget';
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  selectionMode: TCtpSelectionMode;
  targetPattern: Array<
    TCtpCountOnCustomLineItemUnits | TCtpCountOnLineItemUnits
  >;
  triggerPattern: Array<
    TCtpCountOnCustomLineItemUnits | TCtpCountOnLineItemUnits
  >;
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountPatternTargetInput = {
  maxOccurrence?: InputMaybe<Scalars['Int']['input']>;
  selectionMode?: InputMaybe<TCtpSelectionMode>;
  targetPattern: Array<TCtpPatternComponentInput>;
  triggerPattern: Array<TCtpPatternComponentInput>;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type TCtpCartDiscountQueryInterface = {
  cartDiscount?: Maybe<TCtpCartDiscount>;
  cartDiscounts: TCtpCartDiscountQueryResult;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type TCtpCartDiscountQueryInterface_CartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type TCtpCartDiscountQueryInterface_CartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCartDiscountQueryResult = {
  __typename?: 'CartDiscountQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCartDiscount>;
  total: Scalars['Long']['output'];
};

export type TCtpCartDiscountStoreAdded = TCtpMessagePayload & {
  __typename?: 'CartDiscountStoreAdded';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountStoreRemoved = TCtpMessagePayload & {
  __typename?: 'CartDiscountStoreRemoved';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountStoresSet = TCtpMessagePayload & {
  __typename?: 'CartDiscountStoresSet';
  stores: Array<TCtpStore>;
  storesRef: Array<TCtpKeyReference>;
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountTarget = {
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountTargetInput = {
  customLineItems?: InputMaybe<TCtpCustomLineItemsTargetInput>;
  lineItems?: InputMaybe<TCtpLineItemsTargetInput>;
  multiBuyCustomLineItems?: InputMaybe<TCtpMultiBuyCustomLineItemsTargetInput>;
  multiBuyLineItems?: InputMaybe<TCtpMultiBuyLineItemsTargetInput>;
  pattern?: InputMaybe<TCtpCartDiscountPatternTargetInput>;
  shipping?: InputMaybe<TCtpShippingTargetInput>;
  totalPrice?: InputMaybe<TCtpCartDiscountTotalPriceTargetInput>;
};

export type TCtpCartDiscountTotalPriceTarget = TCtpCartDiscountTarget & {
  __typename?: 'CartDiscountTotalPriceTarget';
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountTotalPriceTargetInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCartDiscountUpdateAction = {
  addStore?: InputMaybe<TCtpAddCartDiscountStore>;
  changeCartPredicate?: InputMaybe<TCtpChangeCartDiscountCartPredicate>;
  changeIsActive?: InputMaybe<TCtpChangeCartDiscountIsActive>;
  changeName?: InputMaybe<TCtpChangeCartDiscountName>;
  changeRequiresDiscountCode?: InputMaybe<TCtpChangeCartDiscountRequiresDiscountCode>;
  changeSortOrder?: InputMaybe<TCtpChangeCartDiscountSortOrder>;
  changeStackingMode?: InputMaybe<TCtpChangeCartDiscountStackingMode>;
  changeTarget?: InputMaybe<TCtpChangeCartDiscountTarget>;
  changeValue?: InputMaybe<TCtpChangeCartDiscountValue>;
  removeStore?: InputMaybe<TCtpRemoveCartDiscountStore>;
  setCustomField?: InputMaybe<TCtpSetCartDiscountCustomField>;
  setCustomType?: InputMaybe<TCtpSetCartDiscountCustomType>;
  setDescription?: InputMaybe<TCtpSetCartDiscountDescription>;
  setKey?: InputMaybe<TCtpSetCartDiscountKey>;
  setStores?: InputMaybe<TCtpSetCartDiscountStores>;
  setValidFrom?: InputMaybe<TCtpSetCartDiscountValidFrom>;
  setValidFromAndUntil?: InputMaybe<TCtpSetCartDiscountValidFromAndUntil>;
  setValidUntil?: InputMaybe<TCtpSetCartDiscountValidUntil>;
};

export type TCtpCartDiscountValue = {
  type: Scalars['String']['output'];
};

export type TCtpCartDiscountValueBaseMoneyInput = {
  /** CurrencyCode and centAmount are deprecated. Please use `Money`(centPrecision) or `HighPrecisionMoney`(highPrecision). */
  centAmount?: InputMaybe<Scalars['Long']['input']>;
  centPrecision?: InputMaybe<TCtpMoneyInput>;
  /** CurrencyCode and centAmount are deprecated. Please use `Money`(centPrecision) or `HighPrecisionMoney`(highPrecision). */
  currencyCode?: InputMaybe<Scalars['Currency']['input']>;
  highPrecision?: InputMaybe<TCtpHighPrecisionMoneyInput>;
};

export type TCtpCartDiscountValueInput = {
  absolute?: InputMaybe<TCtpAbsoluteDiscountValueInput>;
  absoluteCart?: InputMaybe<TCtpAbsoluteCartDiscountValueInput>;
  fixed?: InputMaybe<TCtpFixedPriceDiscountValueInput>;
  fixedCart?: InputMaybe<TCtpFixedPriceCartDiscountValueInput>;
  giftLineItem?: InputMaybe<TCtpGiftLineItemValueInput>;
  relative?: InputMaybe<TCtpRelativeDiscountValueInput>;
};

export type TCtpCartDraft = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<TCtpAddressInput>;
  businessUnit?: InputMaybe<TCtpResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customLineItems?: InputMaybe<Array<TCtpCustomLineItemDraft>>;
  customShipping?: InputMaybe<Array<TCtpCustomShippingDraft>>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerGroup?: InputMaybe<TCtpResourceIdentifierInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  externalTaxRateForShippingMethod?: InputMaybe<TCtpExternalTaxRateDraft>;
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<TCtpAddressInput>>;
  key?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<Array<TCtpLineItemDraft>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  origin?: InputMaybe<TCtpCartOrigin>;
  shipping?: InputMaybe<Array<TCtpShippingDraft>>;
  shippingAddress?: InputMaybe<TCtpAddressInput>;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
  shippingMode?: InputMaybe<TCtpShippingMode>;
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
  store?: InputMaybe<TCtpResourceIdentifierInput>;
  taxCalculationMode?: InputMaybe<TCtpTaxCalculationMode>;
  taxMode?: InputMaybe<TCtpTaxMode>;
  taxRoundingMode?: InputMaybe<TCtpRoundingMode>;
};

export type TCtpCartLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CartLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpCartLimitsProjection = {
  __typename?: 'CartLimitsProjection';
  total: TCtpCartLimitWithCurrent;
};

export enum TCtpCartOrigin {
  /** The cart was created by the customer. This is the default value */
  Customer = 'Customer',
  /** The cart was created by the merchant on behalf of the customer */
  Merchant = 'Merchant',
  /** The cart was created by our platform and belongs to a Quote. */
  Quote = 'Quote',
  /** The cart was created by the merchant as a recurring order. */
  RecurringOrder = 'RecurringOrder',
}

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type TCtpCartQueryInterface = {
  cart?: Maybe<TCtpCart>;
  carts: TCtpCartQueryResult;
};

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type TCtpCartQueryInterface_CartArgs = {
  id: Scalars['String']['input'];
};

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type TCtpCartQueryInterface_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCartQueryResult = {
  __typename?: 'CartQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCart>;
  total: Scalars['Long']['output'];
};

export type TCtpCartScoreInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCartScoreType = TCtpShippingRateInputType & {
  __typename?: 'CartScoreType';
  type: Scalars['String']['output'];
};

export enum TCtpCartState {
  /** The cart can be updated and ordered. It is the default state. */
  Active = 'Active',
  /** The cart is frozen. The cart is ready for checkout and a few update actions are not allowed. */
  Frozen = 'Frozen',
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */
  Merged = 'Merged',
  /** The cart was ordered. No further operations on the cart are allowed. */
  Ordered = 'Ordered',
}

export type TCtpCartUpdateAction = {
  addCustomLineItem?: InputMaybe<TCtpAddCartCustomLineItem>;
  addCustomShippingMethod?: InputMaybe<TCtpAddCartCustomShippingMethod>;
  addDiscountCode?: InputMaybe<TCtpAddCartDiscountCode>;
  addItemShippingAddress?: InputMaybe<TCtpAddCartItemShippingAddress>;
  addLineItem?: InputMaybe<TCtpAddCartLineItem>;
  addPayment?: InputMaybe<TCtpAddCartPayment>;
  addShippingMethod?: InputMaybe<TCtpAddCartShippingMethod>;
  addShoppingList?: InputMaybe<TCtpAddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: InputMaybe<TCtpApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: InputMaybe<TCtpApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeCustomLineItemMoney?: InputMaybe<TCtpChangeCartCustomLineItemMoney>;
  changeCustomLineItemPriceMode?: InputMaybe<TCtpChangeCartCustomLineItemPriceMode>;
  changeCustomLineItemQuantity?: InputMaybe<TCtpChangeCartCustomLineItemQuantity>;
  changeLineItemQuantity?: InputMaybe<TCtpChangeCartLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<TCtpChangeCartLineItemsOrder>;
  changeTaxCalculationMode?: InputMaybe<TCtpChangeCartTaxCalculationMode>;
  changeTaxMode?: InputMaybe<TCtpChangeCartTaxMode>;
  changeTaxRoundingMode?: InputMaybe<TCtpChangeCartTaxRoundingMode>;
  freezeCart?: InputMaybe<TCtpFreezeCart>;
  recalculate?: InputMaybe<TCtpRecalculateCart>;
  removeCustomLineItem?: InputMaybe<TCtpRemoveCartCustomLineItem>;
  removeDiscountCode?: InputMaybe<TCtpRemoveCartDiscountCode>;
  removeItemShippingAddress?: InputMaybe<TCtpRemoveCartItemShippingAddress>;
  removeLineItem?: InputMaybe<TCtpRemoveCartLineItem>;
  removePayment?: InputMaybe<TCtpRemoveCartPayment>;
  removeShippingMethod?: InputMaybe<TCtpRemoveCartShippingMethod>;
  setAnonymousId?: InputMaybe<TCtpSetCartAnonymousId>;
  setBillingAddress?: InputMaybe<TCtpSetCartBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<TCtpSetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<TCtpSetCartBillingAddressCustomType>;
  setBusinessUnit?: InputMaybe<TCtpSetCartBusinessUnit>;
  setCartTotalTax?: InputMaybe<TCtpSetCartTotalTax>;
  setCountry?: InputMaybe<TCtpSetCartCountry>;
  setCustomField?: InputMaybe<TCtpSetCartCustomField>;
  setCustomLineItemCustomField?: InputMaybe<TCtpSetCartCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<TCtpSetCartCustomLineItemCustomType>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setCustomLineItemRecurrenceInfo?: InputMaybe<TCtpSetCustomLineItemRecurrenceInfo>;
  setCustomLineItemShippingDetails?: InputMaybe<TCtpSetCartCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: InputMaybe<TCtpSetCartCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: InputMaybe<TCtpSetCartCustomLineItemTaxRate>;
  setCustomShippingMethod?: InputMaybe<TCtpSetCartCustomShippingMethod>;
  setCustomType?: InputMaybe<TCtpSetCartCustomType>;
  setCustomerEmail?: InputMaybe<TCtpSetCartCustomerEmail>;
  setCustomerGroup?: InputMaybe<TCtpSetCartCustomerGroup>;
  setCustomerId?: InputMaybe<TCtpSetCartCustomerId>;
  setDeleteDaysAfterLastModification?: InputMaybe<TCtpSetCartDeleteDaysAfterLastModification>;
  setDirectDiscounts?: InputMaybe<TCtpSetCartDirectDiscounts>;
  setItemShippingAddressCustomField?: InputMaybe<TCtpSetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<TCtpSetCartItemShippingAddressCustomType>;
  setKey?: InputMaybe<TCtpSetCartKey>;
  setLineItemCustomField?: InputMaybe<TCtpSetCartLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<TCtpSetCartLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<TCtpSetCartLineItemDistributionChannel>;
  setLineItemInventoryMode?: InputMaybe<TCtpSetCartLineItemInventoryMode>;
  setLineItemPrice?: InputMaybe<TCtpSetCartLineItemPrice>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setLineItemRecurrenceInfo?: InputMaybe<TCtpSetLineItemRecurrenceInfo>;
  setLineItemShippingDetails?: InputMaybe<TCtpSetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: InputMaybe<TCtpSetCartLineItemSupplyChannel>;
  setLineItemTaxAmount?: InputMaybe<TCtpSetCartLineItemTaxAmount>;
  setLineItemTaxRate?: InputMaybe<TCtpSetCartLineItemTaxRate>;
  setLineItemTotalPrice?: InputMaybe<TCtpSetCartLineItemTotalPrice>;
  setLocale?: InputMaybe<TCtpSetCartLocale>;
  setShippingAddress?: InputMaybe<TCtpSetCartShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<TCtpSetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<TCtpSetCartShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<TCtpSetCartShippingCustomField>;
  setShippingCustomType?: InputMaybe<TCtpSetCartShippingCustomType>;
  setShippingMethod?: InputMaybe<TCtpSetCartShippingMethod>;
  setShippingMethodTaxAmount?: InputMaybe<TCtpSetCartShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: InputMaybe<TCtpSetCartShippingMethodTaxRate>;
  setShippingRateInput?: InputMaybe<TCtpSetCartShippingRateInput>;
  unfreezeCart?: InputMaybe<TCtpUnfreezeCart>;
  updateItemShippingAddress?: InputMaybe<TCtpUpdateCartItemShippingAddress>;
};

export type TCtpCartValueInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCartValueType = TCtpShippingRateInputType & {
  __typename?: 'CartValueType';
  type: Scalars['String']['output'];
};

export type TCtpCartsConfiguration = {
  __typename?: 'CartsConfiguration';
  allowAddingUnpublishedProducts: Scalars['Boolean']['output'];
  countryTaxRateFallbackEnabled: Scalars['Boolean']['output'];
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
  totalPriceDiscountDoesNotReduceExternalTax: Scalars['Boolean']['output'];
};

export type TCtpCartsConfigurationInput = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpCategory = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Category';
    ancestors: Array<TCtpCategory>;
    ancestorsRef: Array<TCtpReference>;
    assets: Array<TCtpAsset>;
    /** Number of direct child categories. */
    childCount: Scalars['Int']['output'];
    /** Direct child categories. */
    children?: Maybe<Array<TCtpCategory>>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    externalId?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    metaTitle?: Maybe<Scalars['String']['output']>;
    metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    orderHint: Scalars['String']['output'];
    parent?: Maybe<TCtpCategory>;
    parentRef?: Maybe<TCtpReference>;
    slug?: Maybe<Scalars['String']['output']>;
    slugAllLocales: Array<TCtpLocalizedString>;
    /** Number of staged products in the category subtree. */
    stagedProductCount: Scalars['Int']['output'];
    version: Scalars['Long']['output'];
  };

export type TCtpCategory_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategory_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategory_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategory_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategory_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategory_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategoryCreated = TCtpMessagePayload & {
  __typename?: 'CategoryCreated';
  category: TCtpCategory;
  type: Scalars['String']['output'];
};

export type TCtpCategoryDraft = {
  assets?: InputMaybe<Array<TCtpAssetDraftInput>>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  orderHint?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<TCtpResourceIdentifierInput>;
  slug: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpCategoryLimitsProjection = {
  __typename?: 'CategoryLimitsProjection';
  maxCategories: TCtpLimit;
};

export type TCtpCategoryOrderHint = {
  __typename?: 'CategoryOrderHint';
  categoryId: Scalars['String']['output'];
  orderHint: Scalars['String']['output'];
};

export type TCtpCategoryOrderHintInput = {
  orderHint: Scalars['String']['input'];
  uuid: Scalars['String']['input'];
};

export type TCtpCategoryOrderHintProductSearch = {
  __typename?: 'CategoryOrderHintProductSearch';
  categoryId: Scalars['String']['output'];
  orderHint: Scalars['String']['output'];
};

export type TCtpCategoryQueryResult = {
  __typename?: 'CategoryQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCategory>;
  total: Scalars['Long']['output'];
};

export type TCtpCategorySearch = {
  __typename?: 'CategorySearch';
  ancestors: Array<TCtpCategorySearch>;
  ancestorsRef: Array<TCtpReference>;
  assets: Array<TCtpAsset>;
  childCount: Scalars['Int']['output'];
  /** Direct child categories. */
  children: Array<TCtpCategorySearch>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  orderHint: Scalars['String']['output'];
  parent?: Maybe<TCtpCategorySearch>;
  parentRef?: Maybe<TCtpReference>;
  productTypeNames: Array<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  stagedProductCount: Scalars['Int']['output'];
  version: Scalars['Long']['output'];
};

export type TCtpCategorySearch_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategorySearch_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategorySearch_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategorySearchResult = {
  __typename?: 'CategorySearchResult';
  count: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCategorySearch>;
  total: Scalars['Int']['output'];
};

export type TCtpCategorySlugChanged = TCtpMessagePayload & {
  __typename?: 'CategorySlugChanged';
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  type: Scalars['String']['output'];
};

export type TCtpCategorySlugChanged_OldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategorySlugChanged_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCategoryUpdateAction = {
  addAsset?: InputMaybe<TCtpAddCategoryAsset>;
  changeAssetName?: InputMaybe<TCtpChangeCategoryAssetName>;
  changeAssetOrder?: InputMaybe<TCtpChangeCategoryAssetOrder>;
  changeName?: InputMaybe<TCtpChangeCategoryName>;
  changeOrderHint?: InputMaybe<TCtpChangeCategoryOrderHint>;
  changeParent?: InputMaybe<TCtpChangeCategoryParent>;
  changeSlug?: InputMaybe<TCtpChangeCategorySlug>;
  removeAsset?: InputMaybe<TCtpRemoveCategoryAsset>;
  setAssetCustomField?: InputMaybe<TCtpSetCategoryAssetCustomField>;
  setAssetCustomType?: InputMaybe<TCtpSetCategoryAssetCustomType>;
  setAssetDescription?: InputMaybe<TCtpSetCategoryAssetDescription>;
  setAssetKey?: InputMaybe<TCtpSetCategoryAssetKey>;
  setAssetSources?: InputMaybe<TCtpSetCategoryAssetSources>;
  setAssetTags?: InputMaybe<TCtpSetCategoryAssetTags>;
  setCustomField?: InputMaybe<TCtpSetCategoryCustomField>;
  setCustomType?: InputMaybe<TCtpSetCategoryCustomType>;
  setDescription?: InputMaybe<TCtpSetCategoryDescription>;
  setExternalId?: InputMaybe<TCtpSetCategoryExternalId>;
  setKey?: InputMaybe<TCtpSetCategoryKey>;
  setMetaDescription?: InputMaybe<TCtpSetCategoryMetaDescription>;
  setMetaKeywords?: InputMaybe<TCtpSetCategoryMetaKeywords>;
  setMetaTitle?: InputMaybe<TCtpSetCategoryMetaTitle>;
};

export type TCtpChangeAssociateRoleBuyerAssignable = {
  buyerAssignable: Scalars['Boolean']['input'];
};

export type TCtpChangeAttributeGroupName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeBusinessUnitAddress = {
  address: TCtpAddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpChangeBusinessUnitApprovalRuleMode = {
  approvalRuleMode: TCtpBusinessUnitApprovalRuleMode;
};

export type TCtpChangeBusinessUnitAssociate = {
  associate: TCtpAssociateDraft;
};

export type TCtpChangeBusinessUnitAssociateMode = {
  associateMode: TCtpBusinessUnitAssociateMode;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  makeInheritedAssociatesExplicit?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpChangeBusinessUnitName = {
  name: Scalars['String']['input'];
};

export type TCtpChangeBusinessUnitParentUnit = {
  parentUnit: TCtpResourceIdentifierInput;
};

export type TCtpChangeBusinessUnitStatus = {
  status: TCtpBusinessUnitStatus;
};

export type TCtpChangeCartCustomLineItemMoney = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  money: TCtpBaseMoneyInput;
};

export type TCtpChangeCartCustomLineItemPriceMode = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  mode: TCtpCustomLineItemPriceMode;
};

export type TCtpChangeCartCustomLineItemQuantity = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type TCtpChangeCartDiscountCartPredicate = {
  cartPredicate: Scalars['String']['input'];
};

export type TCtpChangeCartDiscountIsActive = {
  isActive: Scalars['Boolean']['input'];
};

export type TCtpChangeCartDiscountName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeCartDiscountRequiresDiscountCode = {
  requiresDiscountCode: Scalars['Boolean']['input'];
};

export type TCtpChangeCartDiscountSortOrder = {
  sortOrder: Scalars['String']['input'];
};

export type TCtpChangeCartDiscountStackingMode = {
  stackingMode: TCtpStackingMode;
};

export type TCtpChangeCartDiscountTarget = {
  target: TCtpCartDiscountTargetInput;
};

export type TCtpChangeCartDiscountValue = {
  value: TCtpCartDiscountValueInput;
};

export type TCtpChangeCartLineItemQuantity = {
  /** Only valid for the general Carts API. Ignored for the My Carts API. */
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  /** Only valid for the general Carts API. Ignored for the My Carts API. */
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type TCtpChangeCartLineItemsOrder = {
  lineItemOrder: Array<Scalars['String']['input']>;
};

export type TCtpChangeCartTaxCalculationMode = {
  taxCalculationMode: TCtpTaxCalculationMode;
};

export type TCtpChangeCartTaxMode = {
  taxMode: TCtpTaxMode;
};

export type TCtpChangeCartTaxRoundingMode = {
  taxRoundingMode: TCtpRoundingMode;
};

export type TCtpChangeCategoryAssetName = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeCategoryAssetOrder = {
  assetOrder: Array<Scalars['String']['input']>;
};

export type TCtpChangeCategoryName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeCategoryOrderHint = {
  orderHint: Scalars['String']['input'];
};

export type TCtpChangeCategoryParent = {
  parent: TCtpResourceIdentifierInput;
};

export type TCtpChangeCategorySlug = {
  slug: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeChannelDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpChangeChannelKey = {
  key: Scalars['String']['input'];
};

export type TCtpChangeChannelName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpChangeCustomerAddress = {
  address: TCtpAddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpChangeCustomerEmail = {
  email: Scalars['String']['input'];
};

export type TCtpChangeCustomerGroupName = {
  name: Scalars['String']['input'];
};

export type TCtpChangeDiscountCodeCartDiscounts = {
  cartDiscounts: Array<TCtpResourceIdentifierInput>;
};

export type TCtpChangeDiscountCodeGroups = {
  groups: Array<Scalars['String']['input']>;
};

export type TCtpChangeDiscountCodeIsActive = {
  isActive: Scalars['Boolean']['input'];
};

export type TCtpChangeExtensionDestination = {
  destination: TCtpExtensionDestinationInput;
};

export type TCtpChangeExtensionTriggers = {
  triggers: Array<TCtpTriggerInput>;
};

export type TCtpChangeInventoryEntryQuantity = {
  quantity: Scalars['Long']['input'];
};

export type TCtpChangeMyBusinessUnitAddress = {
  address: TCtpAddressInput;
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpChangeMyBusinessUnitAssociate = {
  associate: TCtpAssociateDraft;
};

export type TCtpChangeMyBusinessUnitName = {
  name: Scalars['String']['input'];
};

export type TCtpChangeMyBusinessUnitParentUnit = {
  parentUnit: TCtpResourceIdentifierInput;
};

export type TCtpChangeMyCartTaxMode = {
  taxMode: TCtpTaxMode;
};

export type TCtpChangeMyQuoteMyQuoteState = {
  quoteState: TCtpMyQuoteState;
};

export type TCtpChangeOrderPaymentState = {
  paymentState: TCtpPaymentState;
};

export type TCtpChangeOrderShipmentState = {
  shipmentState: TCtpShipmentState;
};

export type TCtpChangeOrderState = {
  orderState: TCtpOrderState;
};

export type TCtpChangePaymentAmountPlanned = {
  amount: TCtpMoneyInput;
};

export type TCtpChangePaymentTransactionInteractionId = {
  interactionId: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type TCtpChangePaymentTransactionState = {
  state: TCtpTransactionState;
  transactionId: Scalars['String']['input'];
};

export type TCtpChangePaymentTransactionTimestamp = {
  timestamp: Scalars['DateTime']['input'];
  transactionId: Scalars['String']['input'];
};

export type TCtpChangeProductAssetName = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProductAssetOrder = {
  assetOrder: Array<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProductDiscountIsActive = {
  isActive: Scalars['Boolean']['input'];
};

export type TCtpChangeProductDiscountName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeProductDiscountPredicate = {
  predicate: Scalars['String']['input'];
};

export type TCtpChangeProductDiscountSortOrder = {
  sortOrder: Scalars['String']['input'];
};

export type TCtpChangeProductDiscountValue = {
  value: TCtpProductDiscountValueInput;
};

export type TCtpChangeProductImageLabel = {
  imageUrl: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProductMasterVariant = {
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProductName = {
  name: Array<TCtpLocalizedStringItemInputType>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpChangeProductPrice = {
  price: TCtpProductPriceDataInput;
  priceId?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProductSelectionName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeProductSlug = {
  slug: Array<TCtpLocalizedStringItemInputType>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpChangeProductTailoringAssetName = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProductTailoringAssetOrder = {
  assetOrder: Array<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpChangeProjectSettingsBusinessUnitSearchStatus = {
  status: TCtpBusinessUnitSearchStatus;
};

export type TCtpChangeProjectSettingsCartsConfiguration = {
  cartsConfiguration: TCtpCartsConfigurationInput;
};

export type TCtpChangeProjectSettingsCountries = {
  countries: Array<Scalars['Country']['input']>;
};

export type TCtpChangeProjectSettingsCountryTaxRateFallbackEnabled = {
  countryTaxRateFallbackEnabled: Scalars['Boolean']['input'];
};

export type TCtpChangeProjectSettingsCurrencies = {
  currencies: Array<Scalars['Currency']['input']>;
};

export type TCtpChangeProjectSettingsCustomerSearchStatus = {
  status: TCtpCustomerSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpChangeProjectSettingsDiscountCodeSearchStatus = {
  status: TCtpDiscountCodeSearchStatus;
};

export type TCtpChangeProjectSettingsLanguages = {
  languages: Array<Scalars['Locale']['input']>;
};

export type TCtpChangeProjectSettingsMessagesConfiguration = {
  messagesConfiguration: TCtpMessagesConfigurationDraft;
};

export type TCtpChangeProjectSettingsMessagesEnabled = {
  messagesEnabled: Scalars['Boolean']['input'];
};

export type TCtpChangeProjectSettingsMyBusinessUnitStatusOnCreation = {
  status: TCtpBusinessUnitConfigurationStatus;
};

export type TCtpChangeProjectSettingsName = {
  name: Scalars['String']['input'];
};

export type TCtpChangeProjectSettingsOrderSearchStatus = {
  status: TCtpOrderSearchStatus;
};

export type TCtpChangeProjectSettingsProductSearchIndexingEnabled = {
  enabled: Scalars['Boolean']['input'];
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  mode?: InputMaybe<TCtpProductSearchIndexingMode>;
};

export type TCtpChangeProjectSettingsShoppingListsConfiguration = {
  shoppingListsConfiguration: TCtpShoppingListsConfigurationInput;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpChangeProjectSettingsStandalonePriceSearchStatus = {
  status: TCtpStandalonePriceSearchStatus;
};

export type TCtpChangeProjectSettingsTotalPriceDiscountDoesNotReduceExternalTax =
  {
    value: Scalars['Boolean']['input'];
  };

export type TCtpChangeQuoteCustomer = {
  customer: TCtpResourceIdentifierInput;
};

export type TCtpChangeQuoteRequestCustomer = {
  customer: TCtpResourceIdentifierInput;
};

export type TCtpChangeQuoteRequestState = {
  quoteRequestState: TCtpQuoteRequestState;
};

export type TCtpChangeQuoteState = {
  quoteState: TCtpQuoteState;
};

export type TCtpChangeShippingMethodActive = {
  active: Scalars['Boolean']['input'];
};

export type TCtpChangeShippingMethodIsDefault = {
  isDefault: Scalars['Boolean']['input'];
};

export type TCtpChangeShippingMethodName = {
  name: Scalars['String']['input'];
};

export type TCtpChangeShippingMethodTaxCategory = {
  taxCategory: TCtpResourceIdentifierInput;
};

export type TCtpChangeShoppingListLineItemQuantity = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
};

export type TCtpChangeShoppingListLineItemsOrder = {
  lineItemOrder: Array<Scalars['String']['input']>;
};

export type TCtpChangeShoppingListName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeShoppingListTextLineItemName = {
  name: Array<TCtpLocalizedStringItemInputType>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpChangeShoppingListTextLineItemQuantity = {
  quantity: Scalars['Int']['input'];
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpChangeShoppingListTextLineItemsOrder = {
  textLineItemOrder: Array<Scalars['String']['input']>;
};

export type TCtpChangeStagedOrderCustomLineItemMoney = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  money: TCtpBaseMoneyInput;
};

export type TCtpChangeStagedOrderCustomLineItemMoneyOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderCustomLineItemMoneyOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    money: TCtpHighPrecisionMoney | TCtpMoney;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderCustomLineItemQuantity = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type TCtpChangeStagedOrderCustomLineItemQuantityOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderCustomLineItemQuantityOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    quantity: Scalars['Long']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderLineItemQuantity = {
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
};

export type TCtpChangeStagedOrderLineItemQuantityOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderLineItemQuantityOutput';
    externalPrice?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
    externalTotalPrice?: Maybe<TCtpExternalLineItemTotalPrice>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    quantity: Scalars['Long']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderOrderState = {
  orderState: TCtpOrderState;
};

export type TCtpChangeStagedOrderOrderStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderOrderStateOutput';
    orderState: TCtpOrderState;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderPaymentState = {
  paymentState: TCtpPaymentState;
};

export type TCtpChangeStagedOrderPaymentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderPaymentStateOutput';
    paymentState: TCtpPaymentState;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderShipmentState = {
  shipmentState: TCtpShipmentState;
};

export type TCtpChangeStagedOrderShipmentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderShipmentStateOutput';
    shipmentState: TCtpShipmentState;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderTaxCalculationMode = {
  taxCalculationMode: TCtpTaxCalculationMode;
};

export type TCtpChangeStagedOrderTaxCalculationModeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderTaxCalculationModeOutput';
    taxCalculationMode: TCtpTaxCalculationMode;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderTaxMode = {
  taxMode: TCtpTaxMode;
};

export type TCtpChangeStagedOrderTaxModeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderTaxModeOutput';
    taxMode: TCtpTaxMode;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedOrderTaxRoundingMode = {
  taxRoundingMode: TCtpRoundingMode;
};

export type TCtpChangeStagedOrderTaxRoundingModeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderTaxRoundingModeOutput';
    taxRoundingMode: TCtpRoundingMode;
    type: Scalars['String']['output'];
  };

export type TCtpChangeStagedQuoteState = {
  stagedQuoteState: TCtpStagedQuoteState;
};

export type TCtpChangeStandalonePriceActive = {
  active: Scalars['Boolean']['input'];
};

export type TCtpChangeStandalonePriceValue = {
  /** default is `false` */
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value: TCtpBaseMoneyInput;
};

export type TCtpChangeStateInitial = {
  initial: Scalars['Boolean']['input'];
};

export type TCtpChangeStateKey = {
  key: Scalars['String']['input'];
};

export type TCtpChangeStateType = {
  type: TCtpStateType;
};

export type TCtpChangeStoreProductSelectionActive = {
  active: Scalars['Boolean']['input'];
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpChangeSubscription = {
  __typename?: 'ChangeSubscription';
  resourceTypeId: Scalars['String']['output'];
};

export type TCtpChangeSubscriptionDestination = {
  destination: TCtpDestinationInput;
};

export type TCtpChangeSubscriptionInput = {
  resourceTypeId: Scalars['String']['input'];
};

export type TCtpChangeTypeEnumValueLabel = {
  fieldName: Scalars['String']['input'];
  value: TCtpEnumValueInput;
};

export type TCtpChangeTypeEnumValueOrder = {
  fieldName: Scalars['String']['input'];
  keys: Array<Scalars['String']['input']>;
};

export type TCtpChangeTypeFieldDefinitionOrder = {
  fieldNames: Array<Scalars['String']['input']>;
};

export type TCtpChangeTypeInputHint = {
  fieldName: Scalars['String']['input'];
  inputHint: TCtpTextInputHint;
};

export type TCtpChangeTypeKey = {
  key: Scalars['String']['input'];
};

export type TCtpChangeTypeLabel = {
  fieldName: Scalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeTypeLocalizedEnumValueLabel = {
  fieldName: Scalars['String']['input'];
  value: TCtpLocalizedEnumValueInput;
};

export type TCtpChangeTypeLocalizedEnumValueOrder = {
  fieldName: Scalars['String']['input'];
  keys: Array<Scalars['String']['input']>;
};

export type TCtpChangeTypeName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeZoneName = {
  name: Scalars['String']['input'];
};

export type TCtpChannel = TCtpReferenceExpandable &
  TCtpReviewTarget &
  TCtpVersioned & {
    __typename?: 'Channel';
    address?: Maybe<TCtpAddress>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    geoLocation?: Maybe<TCtpPoint>;
    id: Scalars['String']['output'];
    key: Scalars['String']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    reviewRatingStatistics?: Maybe<TCtpReviewRatingStatistics>;
    roles: Array<TCtpChannelRole>;
    version: Scalars['Long']['output'];
  };

export type TCtpChannel_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpChannel_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpChannelDraft = {
  address?: InputMaybe<TCtpAddressInput>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  geoLocation?: InputMaybe<TCtpGeometryInput>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  roles: Array<TCtpChannelRole>;
};

export type TCtpChannelQueryResult = {
  __typename?: 'ChannelQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpChannel>;
  total: Scalars['Long']['output'];
};

export type TCtpChannelReferenceIdentifier = {
  __typename?: 'ChannelReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export enum TCtpChannelRole {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  InventorySupply = 'InventorySupply',
  /** Role tells that this channel can be used to track order export activities. */
  OrderExport = 'OrderExport',
  /** Role tells that this channel can be used to track order import activities. */
  OrderImport = 'OrderImport',
  /** This role can be combined with some other roles (e.g. with `InventorySupply`) to represent the fact that this particular channel is the primary/master channel among the channels of the same type. */
  Primary = 'Primary',
  /** Role tells that this channel can be used to expose products to a specific distribution channel. It can be used by the cart to select a product price. */
  ProductDistribution = 'ProductDistribution',
}

export type TCtpChannelUpdateAction = {
  addRoles?: InputMaybe<TCtpAddChannelRoles>;
  changeDescription?: InputMaybe<TCtpChangeChannelDescription>;
  changeKey?: InputMaybe<TCtpChangeChannelKey>;
  changeName?: InputMaybe<TCtpChangeChannelName>;
  removeRoles?: InputMaybe<TCtpRemoveChannelRoles>;
  setAddress?: InputMaybe<TCtpSetChannelAddress>;
  setAddressCustomField?: InputMaybe<TCtpSetChannelAddressCustomField>;
  setAddressCustomType?: InputMaybe<TCtpSetChannelAddressCustomType>;
  setCustomField?: InputMaybe<TCtpSetChannelCustomField>;
  setCustomType?: InputMaybe<TCtpSetChannelCustomType>;
  setGeoLocation?: InputMaybe<TCtpSetChannelGeoLocation>;
  setRoles?: InputMaybe<TCtpSetChannelRoles>;
};

/** Chosen discount type for the cart as part of best deal */
export enum TCtpChosenDiscountType {
  CartDiscount = 'CartDiscount',
  ProductDiscount = 'ProductDiscount',
}

export type TCtpClassificationShippingRateInput = TCtpShippingRateInput & {
  __typename?: 'ClassificationShippingRateInput';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
  type: Scalars['String']['output'];
};

export type TCtpClassificationShippingRateInput_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpClassificationShippingRateInputDraft = {
  key: Scalars['String']['input'];
};

export type TCtpClassificationShippingRateInputDraftOutput =
  TCtpShippingRateInputDraftOutput & {
    __typename?: 'ClassificationShippingRateInputDraftOutput';
    key: Scalars['String']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpCloudEventsSubscriptionsFormat = TCtpNotificationFormat & {
  __typename?: 'CloudEventsSubscriptionsFormat';
  cloudEventsVersion: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCloudEventsSubscriptionsFormatInput = {
  cloudEventsVersion: Scalars['String']['input'];
};

export type TCtpCommercetoolsSubscription = TCtpVersioned & {
  __typename?: 'CommercetoolsSubscription';
  changes: Array<TCtpChangeSubscription>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  destination:
    | TCtpAzureServiceBusDestination
    | TCtpConfluentCloudDestination
    | TCtpEventBridgeDestination
    | TCtpEventGridDestination
    | TCtpGoogleCloudPubSubDestination
    | TCtpSnsDestination
    | TCtpSqsDestination;
  events?: Maybe<Array<TCtpEventSubscription>>;
  format: TCtpCloudEventsSubscriptionsFormat | TCtpPlatformFormat;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  messages: Array<TCtpMessageSubscription>;
  status: TCtpSubscriptionHealthStatus;
  version: Scalars['Long']['output'];
};

export type TCtpCommercetoolsSubscriptionQueryResult = {
  __typename?: 'CommercetoolsSubscriptionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCommercetoolsSubscription>;
  total: Scalars['Long']['output'];
};

export type TCtpConfluentCloudDestination = TCtpDestination & {
  __typename?: 'ConfluentCloudDestination';
  acks: Scalars['String']['output'];
  apiKey: Scalars['String']['output'];
  apiSecret: Scalars['String']['output'];
  bootstrapServer: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  topic: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpConfluentCloudDestinationInput = {
  acks: Scalars['String']['input'];
  apiKey: Scalars['String']['input'];
  apiSecret: Scalars['String']['input'];
  bootstrapServer: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  topic: Scalars['String']['input'];
};

export type TCtpCountOnCustomLineItemUnits = TCtpPatternComponent & {
  __typename?: 'CountOnCustomLineItemUnits';
  excludeCount?: Maybe<Scalars['Int']['output']>;
  maxCount?: Maybe<Scalars['Int']['output']>;
  minCount?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCountOnCustomLineItemUnitsInput = {
  excludeCount?: InputMaybe<Scalars['Int']['input']>;
  maxCount?: InputMaybe<Scalars['Int']['input']>;
  minCount?: InputMaybe<Scalars['Int']['input']>;
  predicate: Scalars['String']['input'];
};

export type TCtpCountOnLineItemUnits = TCtpPatternComponent & {
  __typename?: 'CountOnLineItemUnits';
  excludeCount?: Maybe<Scalars['Int']['output']>;
  maxCount?: Maybe<Scalars['Int']['output']>;
  minCount?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCountOnLineItemUnitsInput = {
  excludeCount?: InputMaybe<Scalars['Int']['input']>;
  maxCount?: InputMaybe<Scalars['Int']['input']>;
  minCount?: InputMaybe<Scalars['Int']['input']>;
  predicate: Scalars['String']['input'];
};

export type TCtpCounter = TCtpSkipConfiguration & {
  __typename?: 'Counter';
  lastSkippedAt?: Maybe<Scalars['DateTime']['output']>;
  skipped: Scalars['Int']['output'];
  totalToSkip: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCounterInputDraft = {
  totalToSkip: Scalars['Int']['input'];
};

export type TCtpCreateApiClient = {
  accessTokenValiditySeconds?: InputMaybe<Scalars['Int']['input']>;
  deleteDaysAfterCreation?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  refreshTokenValiditySeconds?: InputMaybe<Scalars['Int']['input']>;
  scope: Scalars['String']['input'];
};

export type TCtpCreateProductSelectionDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<TCtpProductSelectionMode>;
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpCreateStandalonePrice = {
  active?: Scalars['Boolean']['input'];
  channel?: InputMaybe<TCtpResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customerGroup?: InputMaybe<TCtpResourceIdentifierInput>;
  discounted?: InputMaybe<TCtpDiscountedProductPriceValueInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  recurrencePolicy?: InputMaybe<TCtpResourceIdentifierInput>;
  sku: Scalars['String']['input'];
  staged?: InputMaybe<TCtpStagedPriceDraft>;
  tiers?: InputMaybe<Array<TCtpProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  value: TCtpBaseMoneyInput;
};

export type TCtpCreateStore = {
  countries?: InputMaybe<Array<TCtpStoreCountryInput>>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannels?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
  key: Scalars['String']['input'];
  languages?: InputMaybe<Array<Scalars['Locale']['input']>>;
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  productSelections?: InputMaybe<Array<TCtpProductSelectionSettingDraft>>;
  supplyChannels?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpCreateZone = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<TCtpZoneLocation>>;
  name: Scalars['String']['input'];
};

export type TCtpCustomField = {
  name: Scalars['String']['output'];
};

/**
 * A key-value pair representing the field name and value of one single custom field.
 *
 * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
 *
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
 */
export type TCtpCustomFieldInput = {
  name: Scalars['String']['input'];
  /**
   * The value of this custom field consists of escaped JSON based on the FieldDefinition of the Type.
   *
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
   */
  value: Scalars['String']['input'];
};

export type TCtpCustomFieldsCommand = {
  __typename?: 'CustomFieldsCommand';
  fields: Scalars['Json']['output'];
  typeId?: Maybe<Scalars['String']['output']>;
  typeKey?: Maybe<Scalars['String']['output']>;
  typeResId?: Maybe<TCtpResourceIdentifier>;
};

export type TCtpCustomFieldsDraft = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCustomFieldsType = {
  __typename?: 'CustomFieldsType';
  /** This field contains non-typed data. */
  customFieldsRaw?: Maybe<Array<TCtpRawCustomField>>;
  type?: Maybe<TCtpTypeDefinition>;
  typeRef: TCtpReference;
};

export type TCtpCustomFieldsType_CustomFieldsRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type TCtpCustomLineItem = {
  __typename?: 'CustomLineItem';
  custom?: Maybe<TCtpCustomFieldsType>;
  discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  money: TCtpHighPrecisionMoney | TCtpMoney;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  perMethodTaxRate: Array<TCtpMethodTaxRate>;
  priceMode: TCtpCustomLineItemPriceMode;
  quantity: Scalars['Long']['output'];
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: Maybe<TCtpCustomLineItemRecurrenceInfo>;
  shippingDetails?: Maybe<TCtpItemShippingDetails>;
  slug: Scalars['String']['output'];
  state: Array<TCtpItemState>;
  taxCategory?: Maybe<TCtpTaxCategory>;
  taxCategoryRef?: Maybe<TCtpReference>;
  taxRate?: Maybe<TCtpTaxRate>;
  taxedPrice?: Maybe<TCtpTaxedItemPrice>;
  taxedPricePortions: Array<TCtpMethodTaxedPrice>;
  totalPrice: TCtpMoney;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type TCtpCustomLineItem_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCustomLineItemDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: InputMaybe<TCtpCustomLineItemPriceMode>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpCustomLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  slug: Scalars['String']['input'];
  taxCategory?: InputMaybe<TCtpReferenceInput>;
};

export type TCtpCustomLineItemDraftOutput = {
  __typename?: 'CustomLineItemDraftOutput';
  custom?: Maybe<TCtpCustomFieldsCommand>;
  externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
  key?: Maybe<Scalars['String']['output']>;
  money: TCtpHighPrecisionMoney | TCtpMoney;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  priceMode: TCtpCustomLineItemPriceMode;
  quantity?: Maybe<Scalars['Long']['output']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: Maybe<TCtpCustomLineItemRecurrenceInfoDraft>;
  shippingDetails?: Maybe<TCtpItemShippingDetailsDraftOutput>;
  slug: Scalars['String']['output'];
  taxCategoryResId?: Maybe<TCtpResourceIdentifier>;
};

export type TCtpCustomLineItemDraftOutput_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpCustomLineItemImportDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: InputMaybe<TCtpCustomLineItemPriceMode>;
  quantity: Scalars['Long']['input'];
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  slug: Scalars['String']['input'];
  state?: InputMaybe<Array<TCtpItemStateDraftType>>;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
  taxRate?: InputMaybe<TCtpTaxRateInput>;
};

export enum TCtpCustomLineItemPriceMode {
  /** Cart discounts are deactivated for the custom line items with this price mode. */
  External = 'External',
  /** This is the default mode. */
  Standard = 'Standard',
}

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomLineItemRecurrenceInfo = {
  __typename?: 'CustomLineItemRecurrenceInfo';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  recurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
  recurrencePolicyRef: TCtpRecurrencePolicyRef;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomLineItemRecurrenceInfoDraft = {
  __typename?: 'CustomLineItemRecurrenceInfoDraft';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  recurrencePolicyRef?: Maybe<TCtpRecurrencePolicyReferenceIdentifier>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomLineItemRecurrenceInfoInputDraft = {
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  recurrencePolicy: TCtpResourceIdentifierInput;
};

export type TCtpCustomLineItemReturnItem = TCtpReturnItem & {
  __typename?: 'CustomLineItemReturnItem';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  customLineItemId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  paymentState: TCtpReturnPaymentState;
  quantity: Scalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
  type: Scalars['String']['output'];
};

export type TCtpCustomLineItemStateTransition = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'CustomLineItemStateTransition';
    customLineItemId: Scalars['String']['output'];
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    fromState?: Maybe<TCtpState>;
    fromStateRef: TCtpReference;
    quantity: Scalars['Long']['output'];
    toState?: Maybe<TCtpState>;
    toStateRef: TCtpReference;
    transitionDate: Scalars['DateTime']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpCustomLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'CustomLineItemsTarget';
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomLineItemsTargetInput = {
  predicate: Scalars['String']['input'];
};

export type TCtpCustomObject = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'CustomObject';
    container: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    id: Scalars['String']['output'];
    key: Scalars['String']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    value: Scalars['Json']['output'];
    version: Scalars['Long']['output'];
  };

/**
 * An input object used to create a new, or update an existing Custom Object.
 *
 * The value should be passed in a form of escaped JSON.
 *
 * Example for `value` field:
 *
 * ```
 * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
 * ```
 */
export type TCtpCustomObjectDraft = {
  container: Scalars['String']['input'];
  key: Scalars['String']['input'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   * Example for `value` field:
   *
   * ```
   * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
   * ```
   */
  value: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpCustomObjectLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CustomObjectLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpCustomObjectLimitsProjection = {
  __typename?: 'CustomObjectLimitsProjection';
  total: TCtpCustomObjectLimitWithCurrent;
};

export type TCtpCustomObjectQueryResult = {
  __typename?: 'CustomObjectQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCustomObject>;
  total: Scalars['Long']['output'];
};

export type TCtpCustomShippingDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: InputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  key: Scalars['String']['input'];
  shippingAddress: TCtpAddressInput;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
  taxCategory?: InputMaybe<TCtpReferenceInput>;
};

export type TCtpCustomSuggestTokenizer = TCtpSuggestTokenizer & {
  __typename?: 'CustomSuggestTokenizer';
  inputs: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomSuggestTokenizerInput = {
  inputs: Array<Scalars['String']['input']>;
};

export type TCtpCustomSuggestTokenizerProductSearch =
  TCtpSuggestTokenizerProductSearch & {
    __typename?: 'CustomSuggestTokenizerProductSearch';
    inputs: Array<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type TCtpCustomer = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Customer';
    addresses: Array<TCtpAddress>;
    authenticationMode?: Maybe<TCtpAuthenticationMode>;
    billingAddressIds: Array<Scalars['String']['output']>;
    billingAddresses: Array<TCtpAddress>;
    companyName?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    customerGroup?: Maybe<TCtpCustomerGroup>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customerGroupAssignments?: Maybe<Array<TCtpCustomerGroupAssignment>>;
    customerGroupRef?: Maybe<TCtpReference>;
    customerNumber?: Maybe<Scalars['String']['output']>;
    dateOfBirth?: Maybe<Scalars['Date']['output']>;
    defaultBillingAddress?: Maybe<TCtpAddress>;
    defaultBillingAddressId?: Maybe<Scalars['String']['output']>;
    defaultShippingAddress?: Maybe<TCtpAddress>;
    defaultShippingAddressId?: Maybe<Scalars['String']['output']>;
    email: Scalars['String']['output'];
    externalId?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    isEmailVerified: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    lastName?: Maybe<Scalars['String']['output']>;
    locale?: Maybe<Scalars['Locale']['output']>;
    middleName?: Maybe<Scalars['String']['output']>;
    password?: Maybe<Scalars['String']['output']>;
    salutation?: Maybe<Scalars['String']['output']>;
    shippingAddressIds: Array<Scalars['String']['output']>;
    shippingAddresses: Array<TCtpAddress>;
    stores: Array<TCtpStore>;
    storesRef: Array<TCtpKeyReference>;
    title?: Maybe<Scalars['String']['output']>;
    vatId?: Maybe<Scalars['String']['output']>;
    version: Scalars['Long']['output'];
  };

/** A field to access a customer's active cart. */
export type TCtpCustomerActiveCartInterface = {
  customerActiveCart?: Maybe<TCtpCart>;
};

/** A field to access a customer's active cart. */
export type TCtpCustomerActiveCartInterface_CustomerActiveCartArgs = {
  customerId: Scalars['String']['input'];
};

export type TCtpCustomerAddressAdded = TCtpMessagePayload & {
  __typename?: 'CustomerAddressAdded';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpCustomerAddressChanged = TCtpMessagePayload & {
  __typename?: 'CustomerAddressChanged';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpCustomerAddressCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomFieldAdded';
  addressId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpCustomerAddressCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomFieldChanged';
  addressId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpCustomerAddressCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomFieldRemoved';
  addressId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomerAddressCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomTypeRemoved';
  addressId: Scalars['String']['output'];
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerAddressCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomTypeSet';
  addressId: Scalars['String']['output'];
  customFields: TCtpCustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerAddressRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerAddressRemoved';
  address: TCtpAddress;
  type: Scalars['String']['output'];
};

export type TCtpCustomerCompanyNameSet = TCtpMessagePayload & {
  __typename?: 'CustomerCompanyNameSet';
  companyName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerCreated = TCtpMessagePayload & {
  __typename?: 'CustomerCreated';
  customer: TCtpCustomer;
  type: Scalars['String']['output'];
};

export type TCtpCustomerCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'CustomerCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpCustomerCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'CustomerCustomFieldChanged';
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpCustomerCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomerCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerCustomTypeRemoved';
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'CustomerCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerDateOfBirthSet = TCtpMessagePayload & {
  __typename?: 'CustomerDateOfBirthSet';
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerDeleted = TCtpMessagePayload & {
  __typename?: 'CustomerDeleted';
  type: Scalars['String']['output'];
};

export type TCtpCustomerEmailChanged = TCtpMessagePayload & {
  __typename?: 'CustomerEmailChanged';
  email: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomerEmailToken = TCtpVersioned & {
  __typename?: 'CustomerEmailToken';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  value: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type TCtpCustomerEmailTokenCreated = TCtpMessagePayload & {
  __typename?: 'CustomerEmailTokenCreated';
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomerEmailVerified = TCtpMessagePayload & {
  __typename?: 'CustomerEmailVerified';
  type: Scalars['String']['output'];
};

export type TCtpCustomerFirstNameSet = TCtpMessagePayload & {
  __typename?: 'CustomerFirstNameSet';
  firstName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** A customer can be a member in a customer group (e.g. reseller, gold member). A customer group can be used in price calculations with special prices being assigned to certain customer groups. */
export type TCtpCustomerGroup = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'CustomerGroup';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name: Scalars['String']['output'];
    version: Scalars['Long']['output'];
  };

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpCustomerGroupAssignment = {
  __typename?: 'CustomerGroupAssignment';
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpCustomerGroupAssignmentAdded = TCtpMessagePayload & {
  __typename?: 'CustomerGroupAssignmentAdded';
  customerGroupAssignment: TCtpCustomerGroupAssignment;
  type: Scalars['String']['output'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpCustomerGroupAssignmentDraft = {
  customerGroup: TCtpResourceIdentifierInput;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpCustomerGroupAssignmentRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerGroupAssignmentRemoved';
  customerGroupAssignment: TCtpCustomerGroupAssignment;
  type: Scalars['String']['output'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpCustomerGroupAssignmentsSet = TCtpMessagePayload & {
  __typename?: 'CustomerGroupAssignmentsSet';
  customerGroupAssignments: Array<TCtpCustomerGroupAssignment>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerGroupCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpCustomerGroupCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomFieldChanged';
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpCustomerGroupCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomerGroupCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomTypeRemoved';
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerGroupCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerGroupDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  groupName: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCustomerGroupLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CustomerGroupLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpCustomerGroupLimitsProjection = {
  __typename?: 'CustomerGroupLimitsProjection';
  total: TCtpCustomerGroupLimitWithCurrent;
};

export type TCtpCustomerGroupQueryResult = {
  __typename?: 'CustomerGroupQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCustomerGroup>;
  total: Scalars['Long']['output'];
};

export type TCtpCustomerGroupReferenceIdentifier = {
  __typename?: 'CustomerGroupReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type TCtpCustomerGroupSet = TCtpMessagePayload & {
  __typename?: 'CustomerGroupSet';
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerGroupUpdateAction = {
  changeName?: InputMaybe<TCtpChangeCustomerGroupName>;
  setCustomField?: InputMaybe<TCtpSetCustomerGroupCustomField>;
  setCustomType?: InputMaybe<TCtpSetCustomerGroupCustomType>;
  setKey?: InputMaybe<TCtpSetCustomerGroupKey>;
};

export type TCtpCustomerLastNameSet = TCtpMessagePayload & {
  __typename?: 'CustomerLastNameSet';
  lastName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CustomerLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpCustomerLimitsProjection = {
  __typename?: 'CustomerLimitsProjection';
  total: TCtpCustomerLimitWithCurrent;
};

export type TCtpCustomerPasswordToken = TCtpVersioned & {
  __typename?: 'CustomerPasswordToken';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  value: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

export type TCtpCustomerPasswordTokenCreated = TCtpMessagePayload & {
  __typename?: 'CustomerPasswordTokenCreated';
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type TCtpCustomerPasswordUpdated = TCtpMessagePayload & {
  __typename?: 'CustomerPasswordUpdated';
  reset: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type TCtpCustomerQueryInterface = {
  customer?: Maybe<TCtpCustomer>;
  customers: TCtpCustomerQueryResult;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type TCtpCustomerQueryInterface_CustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  passwordToken?: InputMaybe<Scalars['String']['input']>;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type TCtpCustomerQueryInterface_CustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCustomerQueryResult = {
  __typename?: 'CustomerQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpCustomer>;
  total: Scalars['Long']['output'];
};

export type TCtpCustomerSearchConfiguration = {
  __typename?: 'CustomerSearchConfiguration';
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status: TCtpCustomerSearchStatus;
};

export enum TCtpCustomerSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpCustomerSignInDraft = {
  anonymousCart?: InputMaybe<TCtpResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: InputMaybe<Scalars['String']['input']>;
  anonymousCartSignInMode?: InputMaybe<TCtpAnonymousCartSignInMode>;
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  updateProductData?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpCustomerSignInResult = {
  __typename?: 'CustomerSignInResult';
  cart?: Maybe<TCtpCart>;
  customer: TCtpCustomer;
};

export type TCtpCustomerSignMeInDraft = {
  activeCartSignInMode?: InputMaybe<TCtpAnonymousCartSignInMode>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  updateProductData?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpCustomerSignMeUpDraft = {
  addresses?: InputMaybe<Array<TCtpAddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  stores?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
  vatId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCustomerSignUpDraft = {
  addresses?: InputMaybe<Array<TCtpAddressInput>>;
  anonymousCart?: InputMaybe<TCtpResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: InputMaybe<Scalars['String']['input']>;
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  authenticationMode?: InputMaybe<TCtpAuthenticationMode>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customerGroup?: InputMaybe<TCtpResourceIdentifierInput>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerGroupAssignments?: InputMaybe<
    Array<TCtpCustomerGroupAssignmentDraft>
  >;
  customerNumber?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  stores?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
  vatId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpCustomerTitleSet = TCtpMessagePayload & {
  __typename?: 'CustomerTitleSet';
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpCustomerUpdateAction = {
  addAddress?: InputMaybe<TCtpAddCustomerAddress>;
  addBillingAddressId?: InputMaybe<TCtpAddCustomerBillingAddressId>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  addCustomerGroupAssignment?: InputMaybe<TCtpAddCustomerGroupAssignment>;
  addShippingAddressId?: InputMaybe<TCtpAddCustomerShippingAddressId>;
  addStore?: InputMaybe<TCtpAddCustomerStore>;
  changeAddress?: InputMaybe<TCtpChangeCustomerAddress>;
  changeEmail?: InputMaybe<TCtpChangeCustomerEmail>;
  removeAddress?: InputMaybe<TCtpRemoveCustomerAddress>;
  removeBillingAddressId?: InputMaybe<TCtpRemoveCustomerBillingAddressId>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  removeCustomerGroupAssignment?: InputMaybe<TCtpRemoveCustomerGroupAssignment>;
  removeShippingAddressId?: InputMaybe<TCtpRemoveCustomerShippingAddressId>;
  removeStore?: InputMaybe<TCtpRemoveCustomerStore>;
  setAddressCustomField?: InputMaybe<TCtpSetCustomerAddressCustomField>;
  setAddressCustomType?: InputMaybe<TCtpSetCustomerAddressCustomType>;
  setAuthenticationMode?: InputMaybe<TCtpSetCustomerAuthenticationMode>;
  setCompanyName?: InputMaybe<TCtpSetCustomerCompanyName>;
  setCustomField?: InputMaybe<TCtpSetCustomerCustomField>;
  setCustomType?: InputMaybe<TCtpSetCustomerCustomType>;
  setCustomerGroup?: InputMaybe<TCtpSetCustomerGroup>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  setCustomerGroupAssignments?: InputMaybe<TCtpSetCustomerGroupAssignments>;
  setCustomerNumber?: InputMaybe<TCtpSetCustomerNumber>;
  setDateOfBirth?: InputMaybe<TCtpSetCustomerDateOfBirth>;
  setDefaultBillingAddress?: InputMaybe<TCtpSetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<TCtpSetCustomerDefaultShippingAddress>;
  setExternalId?: InputMaybe<TCtpSetCustomerExternalId>;
  setFirstName?: InputMaybe<TCtpSetCustomerFirstName>;
  setKey?: InputMaybe<TCtpSetCustomerKey>;
  setLastName?: InputMaybe<TCtpSetCustomerLastName>;
  setLocale?: InputMaybe<TCtpSetCustomerLocale>;
  setMiddleName?: InputMaybe<TCtpSetCustomerMiddleName>;
  setSalutation?: InputMaybe<TCtpSetCustomerSalutation>;
  setStores?: InputMaybe<TCtpSetCustomerStores>;
  setTitle?: InputMaybe<TCtpSetCustomerTitle>;
  setVatId?: InputMaybe<TCtpSetCustomerVatId>;
};

export type TCtpDateAttribute = TCtpAttribute & {
  __typename?: 'DateAttribute';
  name: Scalars['String']['output'];
  value: Scalars['Date']['output'];
};

export type TCtpDateAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'DateAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type TCtpDateField = TCtpCustomField & {
  __typename?: 'DateField';
  name: Scalars['String']['output'];
  value: Scalars['Date']['output'];
};

export type TCtpDateTimeAttribute = TCtpAttribute & {
  __typename?: 'DateTimeAttribute';
  name: Scalars['String']['output'];
  value: Scalars['DateTime']['output'];
};

export type TCtpDateTimeAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'DateTimeAttributeDefinitionType';
    name: Scalars['String']['output'];
  };

export type TCtpDateTimeField = TCtpCustomField & {
  __typename?: 'DateTimeField';
  name: Scalars['String']['output'];
  value: Scalars['DateTime']['output'];
};

export type TCtpDateTimeType = TCtpFieldType & {
  __typename?: 'DateTimeType';
  name: Scalars['String']['output'];
};

export type TCtpDateType = TCtpFieldType & {
  __typename?: 'DateType';
  name: Scalars['String']['output'];
};

export type TCtpDelivery = {
  __typename?: 'Delivery';
  address?: Maybe<TCtpAddress>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  items: Array<TCtpDeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  parcels: Array<TCtpParcel>;
};

export type TCtpDeliveryAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryAdded';
    delivery: TCtpDelivery;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpDeliveryAddressSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryAddressSet';
    address?: Maybe<TCtpAddress>;
    deliveryId: Scalars['String']['output'];
    oldAddress?: Maybe<TCtpAddress>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpDeliveryCustomFieldAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomFieldAdded';
    deliveryId: Scalars['String']['output'];
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value: Scalars['Json']['output'];
  };

export type TCtpDeliveryCustomFieldChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomFieldChanged';
    deliveryId: Scalars['String']['output'];
    name: Scalars['String']['output'];
    previousValue?: Maybe<Scalars['Json']['output']>;
    type: Scalars['String']['output'];
    value: Scalars['Json']['output'];
  };

export type TCtpDeliveryCustomFieldRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomFieldRemoved';
    deliveryId: Scalars['String']['output'];
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpDeliveryCustomTypeRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomTypeRemoved';
    deliveryId: Scalars['String']['output'];
    previousTypeId?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpDeliveryCustomTypeSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomTypeSet';
    customFields: TCtpCustomFieldsType;
    deliveryId: Scalars['String']['output'];
    previousTypeId?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpDeliveryDraft = {
  address?: InputMaybe<TCtpAddressInput>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  items: Array<TCtpDeliveryItemDraftType>;
  key?: InputMaybe<Scalars['String']['input']>;
  parcels: Array<TCtpParcelDraft>;
};

export type TCtpDeliveryItem = {
  __typename?: 'DeliveryItem';
  id: Scalars['String']['output'];
  quantity: Scalars['Long']['output'];
};

export type TCtpDeliveryItemDraftType = {
  id: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
};

export type TCtpDeliveryItemsUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryItemsUpdated';
    deliveryId: Scalars['String']['output'];
    items: Array<TCtpDeliveryItem>;
    oldItems: Array<TCtpDeliveryItem>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpDeliveryRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryRemoved';
    delivery: TCtpDelivery;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpDestination = {
  type: Scalars['String']['output'];
};

export type TCtpDestinationInput = {
  AzureServiceBus?: InputMaybe<TCtpAzureServiceBusDestinationInput>;
  ConfluentCloud?: InputMaybe<TCtpConfluentCloudDestinationInput>;
  EventBridge?: InputMaybe<TCtpEventBridgeDestinationInput>;
  EventGrid?: InputMaybe<TCtpEventGridDestinationInput>;
  GoogleCloudPubSub?: InputMaybe<TCtpGoogleCloudPubSubDestinationInput>;
  SNS?: InputMaybe<TCtpSnsDestinationInput>;
  SQS?: InputMaybe<TCtpSqsDestinationInput>;
};

export type TCtpDimensions = {
  __typename?: 'Dimensions';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type TCtpDimensionsInput = {
  height: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type TCtpDimensionsProductSearch = {
  __typename?: 'DimensionsProductSearch';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type TCtpDirectDiscount = {
  __typename?: 'DirectDiscount';
  id: Scalars['String']['output'];
  target?: Maybe<
    | TCtpCartDiscountPatternTarget
    | TCtpCartDiscountTotalPriceTarget
    | TCtpCustomLineItemsTarget
    | TCtpLineItemsTarget
    | TCtpMultiBuyCustomLineItemsTarget
    | TCtpMultiBuyLineItemsTarget
    | TCtpShippingTarget
  >;
  value:
    | TCtpAbsoluteCartDiscountValue
    | TCtpAbsoluteDiscountValue
    | TCtpFixedPriceCartDiscountValue
    | TCtpFixedPriceDiscountValue
    | TCtpGiftLineItemValue
    | TCtpRelativeDiscountValue;
};

export type TCtpDirectDiscountDraft = {
  target?: InputMaybe<TCtpCartDiscountTargetInput>;
  value: TCtpCartDiscountValueInput;
};

export type TCtpDirectDiscountDraftOutput = {
  __typename?: 'DirectDiscountDraftOutput';
  target?: Maybe<
    | TCtpCartDiscountPatternTarget
    | TCtpCartDiscountTotalPriceTarget
    | TCtpCustomLineItemsTarget
    | TCtpLineItemsTarget
    | TCtpMultiBuyCustomLineItemsTarget
    | TCtpMultiBuyLineItemsTarget
    | TCtpShippingTarget
  >;
  value:
    | TCtpAbsoluteCartDiscountValue
    | TCtpAbsoluteDiscountValue
    | TCtpFixedPriceCartDiscountValue
    | TCtpFixedPriceDiscountValue
    | TCtpGiftLineItemValue
    | TCtpRelativeDiscountValue;
};

export enum TCtpDiscountApplicationMode {
  EvenDistribution = 'EvenDistribution',
  IndividualApplication = 'IndividualApplication',
  ProportionateDistribution = 'ProportionateDistribution',
}

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type TCtpDiscountCode = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'DiscountCode';
    /** How many times this discount code was applied (only applications that were part of a successful checkout are considered) */
    applicationCount: Scalars['Long']['output'];
    applicationVersion?: Maybe<Scalars['Long']['output']>;
    cartDiscountRefs: Array<TCtpReference>;
    cartDiscounts: Array<TCtpCartDiscount>;
    cartPredicate?: Maybe<Scalars['String']['output']>;
    code: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    groups: Array<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    isActive: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    maxApplications?: Maybe<Scalars['Long']['output']>;
    maxApplicationsPerCustomer?: Maybe<Scalars['Long']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    referenceRefs: Array<TCtpReference>;
    validFrom?: Maybe<Scalars['DateTime']['output']>;
    validUntil?: Maybe<Scalars['DateTime']['output']>;
    version: Scalars['Long']['output'];
  };

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type TCtpDiscountCode_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type TCtpDiscountCode_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpDiscountCodeCreated = TCtpMessagePayload & {
  __typename?: 'DiscountCodeCreated';
  discountCode: TCtpDiscountCode;
  type: Scalars['String']['output'];
};

export type TCtpDiscountCodeDeleted = TCtpMessagePayload & {
  __typename?: 'DiscountCodeDeleted';
  type: Scalars['String']['output'];
};

export type TCtpDiscountCodeDraft = {
  /** Specify what CartDiscounts the API applies when you add the DiscountCode to the Cart. */
  cartDiscounts: Array<TCtpResourceIdentifierInput>;
  /** DiscountCode can only be applied to Carts that match this predicate. */
  cartPredicate?: InputMaybe<Scalars['String']['input']>;
  /**
   * User-defined unique identifier for the DiscountCode that can be added to the Cart to apply the related CartDiscounts.
   * It cannot be modified after the DiscountCode is created.
   */
  code: Scalars['String']['input'];
  /** Custom Fields for the DiscountCode. */
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  /** The description of the DiscountCode. */
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  /** Groups to which the DiscountCode will belong to. */
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Only active DiscountCodes can be applied to the Cart. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User-defined unique identifier for the DiscountCode. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Number of times the DiscountCode can be applied. If not set, the DiscountCode can be applied any number of times. */
  maxApplications?: InputMaybe<Scalars['Long']['input']>;
  /** Number of times the DiscountCode can be applied per Customer. If not set, the DiscountCode can be applied any number of times. */
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Long']['input']>;
  /** Name of the DiscountCode. */
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  /** Date and time (UTC) from which the DiscountCode is effective. Must be earlier than `validUntil`. */
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date and time (UTC) until which the DiscountCode is effective. Must be later than `validFrom`. */
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpDiscountCodeInfo = {
  __typename?: 'DiscountCodeInfo';
  discountCode?: Maybe<TCtpDiscountCode>;
  discountCodeRef: TCtpReference;
  state?: Maybe<TCtpDiscountCodeState>;
};

export type TCtpDiscountCodeKeySet = TCtpMessagePayload & {
  __typename?: 'DiscountCodeKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpDiscountCodeQueryResult = {
  __typename?: 'DiscountCodeQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpDiscountCode>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpDiscountCodeSearchConfiguration = {
  __typename?: 'DiscountCodeSearchConfiguration';
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status: TCtpDiscountCodeSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpDiscountCodeSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export enum TCtpDiscountCodeState {
  /** The discount code is active and none of the discounts were applied because the discount application was stopped by one discount that has the StackingMode of StopAfterThisDiscount defined */
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',
  /** The discount code is active and it contains at least one active and valid CartDiscount. But its cart predicate does not match the cart or none of the contained active discount’s cart predicates match the cart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** The discount code is active and it contains at least one active and valid CartDiscount. The discount code cartPredicate matches the cart and at least one of the contained active discount’s cart predicates matches the cart. */
  MatchesCart = 'MatchesCart',
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */
  MaxApplicationReached = 'MaxApplicationReached',
  /** The discount code is not active or it does not contain any active cart discounts. */
  NotActive = 'NotActive',
  /** The discount code is not valid or it does not contain any valid cart discounts. Validity is determined based on the validFrom and validUntil dates */
  NotValid = 'NotValid',
}

export type TCtpDiscountCodeUpdateAction = {
  changeCartDiscounts?: InputMaybe<TCtpChangeDiscountCodeCartDiscounts>;
  changeGroups?: InputMaybe<TCtpChangeDiscountCodeGroups>;
  changeIsActive?: InputMaybe<TCtpChangeDiscountCodeIsActive>;
  setCartPredicate?: InputMaybe<TCtpSetDiscountCodeCartPredicate>;
  setCustomField?: InputMaybe<TCtpSetDiscountCodeCustomField>;
  setCustomType?: InputMaybe<TCtpSetDiscountCodeCustomType>;
  setDescription?: InputMaybe<TCtpSetDiscountCodeDescription>;
  setKey?: InputMaybe<TCtpSetDiscountCodeKey>;
  setMaxApplications?: InputMaybe<TCtpSetDiscountCodeMaxApplications>;
  setMaxApplicationsPerCustomer?: InputMaybe<TCtpSetDiscountCodeMaxApplicationsPerCustomer>;
  setName?: InputMaybe<TCtpSetDiscountCodeName>;
  setValidFrom?: InputMaybe<TCtpSetDiscountCodeValidFrom>;
  setValidFromAndUntil?: InputMaybe<TCtpSetDiscountCodeValidFromAndUntil>;
  setValidUntil?: InputMaybe<TCtpSetDiscountCodeValidUntil>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpDiscountGroup = TCtpVersioned & {
  __typename?: 'DiscountGroup';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  sortOrder: Scalars['String']['output'];
  version: Scalars['Long']['output'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpDiscountGroup_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpDiscountGroup_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpDiscountGroupDraft = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  sortOrder: Scalars['String']['input'];
};

export type TCtpDiscountGroupLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'DiscountGroupLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpDiscountGroupLimitsProjection = {
  __typename?: 'DiscountGroupLimitsProjection';
  totalActive: TCtpDiscountGroupLimitWithCurrent;
};

export type TCtpDiscountGroupQueryResult = {
  __typename?: 'DiscountGroupQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpDiscountGroup>;
  total: Scalars['Long']['output'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpDiscountGroupUpdateAction = {
  setDescription?: InputMaybe<TCtpSetDiscountGroupDescription>;
  setKey?: InputMaybe<TCtpSetDiscountGroupKey>;
  setName?: InputMaybe<TCtpSetDiscountGroupName>;
  setSortOrder?: InputMaybe<TCtpSetDiscountGroupSortOrder>;
};

export type TCtpDiscountOnTotalPrice = {
  __typename?: 'DiscountOnTotalPrice';
  discountedAmount: TCtpHighPrecisionMoney | TCtpMoney;
  discountedGrossAmount?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
  discountedNetAmount?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
  includedDiscounts: Array<TCtpDiscountedTotalPricePortion>;
};

export type TCtpDiscountTypeCombination = {
  type: Scalars['String']['output'];
};

export type TCtpDiscountedLineItemPortion = {
  __typename?: 'DiscountedLineItemPortion';
  discount?: Maybe<TCtpCartDiscount>;
  discountRef: TCtpReference;
  discountedAmount: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpDiscountedLineItemPortionDraft = {
  discount: TCtpReferenceInput;
  discountedAmount: TCtpBaseMoneyInput;
};

export type TCtpDiscountedLineItemPrice = {
  __typename?: 'DiscountedLineItemPrice';
  includedDiscounts: Array<TCtpDiscountedLineItemPortion>;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpDiscountedLineItemPriceDraft = {
  includedDiscounts?: InputMaybe<Array<TCtpDiscountedLineItemPortionDraft>>;
  value: TCtpBaseMoneyInput;
};

export type TCtpDiscountedLineItemPriceForQuantity = {
  __typename?: 'DiscountedLineItemPriceForQuantity';
  discountedPrice: TCtpDiscountedLineItemPrice;
  quantity: Scalars['Long']['output'];
};

export type TCtpDiscountedProductPriceValue = {
  __typename?: 'DiscountedProductPriceValue';
  discount?: Maybe<TCtpProductDiscount>;
  discountRef: TCtpReference;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpDiscountedProductPriceValueInput = {
  discount: TCtpResourceIdentifierInput;
  value: TCtpBaseMoneyInput;
};

export type TCtpDiscountedProductSearchPriceValue = {
  __typename?: 'DiscountedProductSearchPriceValue';
  discount?: Maybe<TCtpProductDiscount>;
  discountRef: TCtpReference;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpDiscountedTotalPricePortion = {
  __typename?: 'DiscountedTotalPricePortion';
  discount?: Maybe<TCtpCartDiscount>;
  discountRef: TCtpReference;
  discountedAmount: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpDiscountsConfiguration = {
  __typename?: 'DiscountsConfiguration';
  productVsCartDiscountCombination?: Maybe<TCtpProductVsCartDiscountCombination>;
};

export type TCtpEnumAttribute = TCtpAttribute & {
  __typename?: 'EnumAttribute';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TCtpEnumAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'EnumAttributeDefinitionType';
  name: Scalars['String']['output'];
  values: TCtpPlainEnumValueResult;
};

export type TCtpEnumAttributeDefinitionType_ValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpEnumField = TCtpCustomField & {
  __typename?: 'EnumField';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TCtpEnumType = TCtpFieldType & {
  __typename?: 'EnumType';
  name: Scalars['String']['output'];
  values: Array<TCtpEnumValue>;
};

export type TCtpEnumTypeDraft = {
  values: Array<TCtpPlainEnumValueDraft>;
};

export type TCtpEnumValue = {
  __typename?: 'EnumValue';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type TCtpEnumValueInput = {
  key: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type TCtpEventBridgeDestination = TCtpDestination & {
  __typename?: 'EventBridgeDestination';
  accountId: Scalars['String']['output'];
  region: Scalars['String']['output'];
  source: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpEventBridgeDestinationInput = {
  accountId: Scalars['String']['input'];
  region: Scalars['String']['input'];
};

export type TCtpEventGridDestination = TCtpDestination & {
  __typename?: 'EventGridDestination';
  accessKey: Scalars['String']['output'];
  type: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type TCtpEventGridDestinationInput = {
  accessKey: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type TCtpEventSubscription = {
  __typename?: 'EventSubscription';
  resourceTypeId: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type TCtpEventSubscriptionInput = {
  resourceTypeId: Scalars['String']['input'];
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpExcludeProductSelectionProduct = {
  product: TCtpResourceIdentifierInput;
  variantExclusion?: InputMaybe<TCtpProductVariantExclusionDraft>;
};

export type TCtpExistsFilterInput = {
  path: Scalars['String']['input'];
};

export type TCtpExtension = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Extension';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    destination:
      | TCtpAwsLambdaDestination
      | TCtpGoogleCloudFunctionDestination
      | TCtpHttpDestination;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    timeoutInMs?: Maybe<Scalars['Int']['output']>;
    triggers: Array<TCtpTrigger>;
    version: Scalars['Long']['output'];
  };

export type TCtpExtensionDestination = {
  type: Scalars['String']['output'];
};

export type TCtpExtensionDestinationInput = {
  AWSLambda?: InputMaybe<TCtpAwsLambdaDestinationInput>;
  GoogleCloudFunction?: InputMaybe<TCtpGoogleCloudFunctionDestinationInput>;
  HTTP?: InputMaybe<TCtpHttpDestinationInput>;
};

export type TCtpExtensionDraft = {
  destination: TCtpExtensionDestinationInput;
  key?: InputMaybe<Scalars['String']['input']>;
  timeoutInMs?: InputMaybe<Scalars['Int']['input']>;
  triggers: Array<TCtpTriggerInput>;
};

export type TCtpExtensionLimitsProjection = {
  __typename?: 'ExtensionLimitsProjection';
  timeoutInMs: TCtpLimit;
};

export type TCtpExtensionQueryResult = {
  __typename?: 'ExtensionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpExtension>;
  total: Scalars['Long']['output'];
};

export type TCtpExtensionUpdateAction = {
  changeDestination?: InputMaybe<TCtpChangeExtensionDestination>;
  changeTriggers?: InputMaybe<TCtpChangeExtensionTriggers>;
  setKey?: InputMaybe<TCtpSetExtensionKey>;
  setTimeoutInMs?: InputMaybe<TCtpSetExtensionTimeoutInMs>;
};

export type TCtpExternalDiscountValue = TCtpProductDiscountValue & {
  __typename?: 'ExternalDiscountValue';
  type: Scalars['String']['output'];
};

export type TCtpExternalDiscountValueInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpExternalLineItemTotalPrice = {
  __typename?: 'ExternalLineItemTotalPrice';
  price: TCtpHighPrecisionMoney | TCtpMoney;
  totalPrice: TCtpMoney;
};

export type TCtpExternalLineItemTotalPriceDraft = {
  price: TCtpBaseMoneyInput;
  totalPrice: TCtpMoneyInput;
};

export type TCtpExternalOAuth = {
  __typename?: 'ExternalOAuth';
  authorizationHeader: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type TCtpExternalOAuthDraft = {
  authorizationHeader: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type TCtpExternalTaxAmountDraft = {
  taxRate: TCtpExternalTaxRateDraft;
  totalGross: TCtpMoneyInput;
};

export type TCtpExternalTaxAmountDraftOutput = {
  __typename?: 'ExternalTaxAmountDraftOutput';
  taxRate: TCtpExternalTaxRateDraftOutput;
  totalGross: TCtpMoney;
};

export type TCtpExternalTaxRateDraft = {
  amount: Scalars['Float']['input'];
  country: Scalars['Country']['input'];
  includedInPrice?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subRates?: InputMaybe<Array<TCtpSubRateDraft>>;
};

export type TCtpExternalTaxRateDraftOutput = {
  __typename?: 'ExternalTaxRateDraftOutput';
  amount?: Maybe<Scalars['Float']['output']>;
  country: Scalars['Country']['output'];
  includedInPrice: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subRates: Array<TCtpSubRate>;
};

export type TCtpFacetResult = {
  type: Scalars['String']['output'];
};

export type TCtpFacetResultValue = {
  __typename?: 'FacetResultValue';
  facet: Scalars['String']['output'];
  value: TCtpRangeFacetResult | TCtpTermsFacetResult | TCtpValueFacetResult;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type TCtpFieldDefinition = {
  __typename?: 'FieldDefinition';
  inputHint: TCtpTextInputHint;
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type:
    | TCtpBooleanType
    | TCtpDateTimeType
    | TCtpDateType
    | TCtpEnumType
    | TCtpLocalizedEnumType
    | TCtpLocalizedStringType
    | TCtpMoneyType
    | TCtpNumberType
    | TCtpReferenceType
    | TCtpSetType
    | TCtpStringType
    | TCtpTimeType;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type TCtpFieldDefinition_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpFieldDefinitionInput = {
  inputHint: TCtpTextInputHint;
  label: Array<TCtpLocalizedStringItemInputType>;
  name: Scalars['String']['input'];
  required: Scalars['Boolean']['input'];
  type: TCtpFieldTypeInput;
};

export type TCtpFieldType = {
  name: Scalars['String']['output'];
};

export type TCtpFieldTypeEnumTypeDraft = {
  values: Array<TCtpEnumValueInput>;
};

export type TCtpFieldTypeInput = {
  Boolean?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Date?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  DateTime?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Enum?: InputMaybe<TCtpFieldTypeEnumTypeDraft>;
  LocalizedEnum?: InputMaybe<TCtpFieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Money?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Number?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Reference?: InputMaybe<TCtpFieldTypeReferenceTypeDraft>;
  Set?: InputMaybe<TCtpFieldTypeSetTypeDraft>;
  String?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Time?: InputMaybe<TCtpSimpleFieldTypeDraft>;
};

export type TCtpFieldTypeLocalizedEnumTypeDraft = {
  values: Array<TCtpLocalizedEnumValueInput>;
};

export type TCtpFieldTypeReferenceTypeDraft = {
  referenceTypeId: Scalars['String']['input'];
};

export type TCtpFieldTypeSetElementTypeDraft = {
  Boolean?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Date?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  DateTime?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Enum?: InputMaybe<TCtpFieldTypeEnumTypeDraft>;
  LocalizedEnum?: InputMaybe<TCtpFieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Money?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Number?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Reference?: InputMaybe<TCtpFieldTypeReferenceTypeDraft>;
  String?: InputMaybe<TCtpSimpleFieldTypeDraft>;
  Time?: InputMaybe<TCtpSimpleFieldTypeDraft>;
};

export type TCtpFieldTypeSetTypeDraft = {
  elementType: TCtpFieldTypeSetElementTypeDraft;
};

export type TCtpFixedPriceCartDiscountValue = TCtpCartDiscountValue & {
  __typename?: 'FixedPriceCartDiscountValue';
  applicationMode: TCtpDiscountApplicationMode;
  money: Array<TCtpHighPrecisionMoney | TCtpMoney>;
  type: Scalars['String']['output'];
};

export type TCtpFixedPriceCartDiscountValueInput = {
  applicationMode: TCtpDiscountApplicationMode;
  money: Array<TCtpCartDiscountValueBaseMoneyInput>;
};

export type TCtpFixedPriceDiscountValue = TCtpCartDiscountValue & {
  __typename?: 'FixedPriceDiscountValue';
  money: Array<TCtpHighPrecisionMoney | TCtpMoney>;
  type: Scalars['String']['output'];
};

export type TCtpFixedPriceDiscountValueInput = {
  money: Array<TCtpCartDiscountValueBaseMoneyInput>;
};

export type TCtpFreezeCart = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpGeometry = {
  type: Scalars['String']['output'];
};

export type TCtpGeometryInput = {
  coordinates?: InputMaybe<Array<Scalars['Float']['input']>>;
  type: Scalars['String']['input'];
};

export type TCtpGiftLineItemValue = TCtpCartDiscountValue & {
  __typename?: 'GiftLineItemValue';
  distributionChannelRef?: Maybe<TCtpChannelReferenceIdentifier>;
  productRef: TCtpProductReferenceIdentifier;
  supplyChannelRef?: Maybe<TCtpChannelReferenceIdentifier>;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpGiftLineItemValueInput = {
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  product: TCtpResourceIdentifierInput;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  variantId: Scalars['Int']['input'];
};

export type TCtpGoogleCloudFunctionDestination = TCtpExtensionDestination & {
  __typename?: 'GoogleCloudFunctionDestination';
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type TCtpGoogleCloudFunctionDestinationInput = {
  url: Scalars['String']['input'];
};

export type TCtpGoogleCloudPubSubDestination = TCtpDestination & {
  __typename?: 'GoogleCloudPubSubDestination';
  projectId: Scalars['String']['output'];
  topic: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpGoogleCloudPubSubDestinationInput = {
  projectId: Scalars['String']['input'];
  topic: Scalars['String']['input'];
};

export type TCtpHasProductTailoringData = {
  attributesRaw: Array<TCtpRawProductAttribute>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  variants: Array<TCtpProductVariantTailoring>;
};

export type TCtpHasProductTailoringData_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpHighPrecisionMoney = TCtpBaseMoney & {
  __typename?: 'HighPrecisionMoney';
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  fractionDigits: Scalars['Int']['output'];
  preciseAmount: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type TCtpHighPrecisionMoneyInput = {
  centAmount?: InputMaybe<Scalars['Long']['input']>;
  currencyCode: Scalars['Currency']['input'];
  fractionDigits: Scalars['Int']['input'];
  preciseAmount: Scalars['Long']['input'];
};

export type TCtpHttpDestination = TCtpExtensionDestination & {
  __typename?: 'HttpDestination';
  authentication?: Maybe<
    TCtpAuthorizationHeader | TCtpAzureFunctionsAuthentication
  >;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type TCtpHttpDestinationAuthentication = {
  type: Scalars['String']['output'];
};

export type TCtpHttpDestinationAuthenticationInput = {
  AuthorizationHeader?: InputMaybe<TCtpAuthorizationHeaderInput>;
  AzureFunctions?: InputMaybe<TCtpAzureFunctionsAuthenticationInput>;
};

export type TCtpHttpDestinationInput = {
  authentication?: InputMaybe<TCtpHttpDestinationAuthenticationInput>;
  url: Scalars['String']['input'];
};

export type TCtpImage = {
  __typename?: 'Image';
  dimensions: TCtpDimensions;
  label?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type TCtpImageInput = {
  dimensions: TCtpDimensionsInput;
  label?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type TCtpImageProductSearch = {
  __typename?: 'ImageProductSearch';
  dimensions: TCtpDimensionsProductSearch;
  label?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type TCtpImportOrderCustomLineItemState = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportOrderDraft = {
  billingAddress?: InputMaybe<TCtpAddressInput>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customLineItems?: Array<TCtpCustomLineItemImportDraft>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerGroup?: InputMaybe<TCtpReferenceInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<TCtpAddressInput>>;
  lineItems?: Array<TCtpLineItemImportDraft>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderState?: InputMaybe<TCtpOrderState>;
  origin?: InputMaybe<TCtpCartOrigin>;
  paymentInfo?: InputMaybe<TCtpReferenceInput>;
  paymentState?: InputMaybe<TCtpPaymentState>;
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  shipmentState?: InputMaybe<TCtpShipmentState>;
  shippingAddress?: InputMaybe<TCtpAddressInput>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  shippingInfo?: InputMaybe<TCtpShippingInfoImportDraft>;
  state?: InputMaybe<TCtpReferenceInput>;
  store?: InputMaybe<TCtpReferenceInput>;
  taxCalculationMode?: InputMaybe<TCtpTaxCalculationMode>;
  taxedPrice?: InputMaybe<TCtpTaxedPriceDraft>;
  totalPrice: TCtpMoneyInput;
};

export type TCtpImportOrderLineItemState = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportStagedOrderCustomLineItemState = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportStagedOrderCustomLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ImportStagedOrderCustomLineItemStateOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    state: Scalars['Set']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpImportStagedOrderLineItemState = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportStagedOrderLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ImportStagedOrderLineItemStateOutput';
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    state: Scalars['Set']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpInStore = TCtpCartDiscountQueryInterface &
  TCtpCartQueryInterface &
  TCtpCustomerActiveCartInterface &
  TCtpCustomerQueryInterface &
  TCtpMeFieldInterface &
  TCtpOrderQueryInterface &
  TCtpShippingMethodsByCartInterface & {
    __typename?: 'InStore';
    businessUnit?: Maybe<TCtpBusinessUnit>;
    businessUnits: TCtpBusinessUnitQueryResult;
    cart?: Maybe<TCtpCart>;
    cartDiscount?: Maybe<TCtpCartDiscount>;
    cartDiscounts: TCtpCartDiscountQueryResult;
    carts: TCtpCartQueryResult;
    customer?: Maybe<TCtpCustomer>;
    customerActiveCart?: Maybe<TCtpCart>;
    customers: TCtpCustomerQueryResult;
    /**
     * This field can only be used with an access token created with the password flow or with an anonymous session.
     *
     * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
     */
    me: TCtpInStoreMe;
    order?: Maybe<TCtpOrder>;
    orders: TCtpOrderQueryResult;
    product?: Maybe<TCtpProduct>;
    productSelectionAssignments: TCtpProductAssignmentQueryResult;
    productTailoring?: Maybe<TCtpProductTailoring>;
    productTailoringList: TCtpProductTailoringQueryResult;
    quote?: Maybe<TCtpQuote>;
    quoteRequest?: Maybe<TCtpQuoteRequest>;
    quoteRequests: TCtpQuoteRequestQueryResult;
    quotes: TCtpQuoteQueryResult;
    shippingMethodsByCart: Array<TCtpShippingMethod>;
    shoppingList?: Maybe<TCtpShoppingList>;
    shoppingLists: TCtpShoppingListQueryResult;
    stagedQuote?: Maybe<TCtpStagedQuote>;
    stagedQuotes: TCtpStagedQuoteQueryResult;
  };

export type TCtpInStore_BusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_BusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_CartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpInStore_CartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_CartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_CustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  passwordToken?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_CustomerActiveCartArgs = {
  customerId: Scalars['String']['input'];
};

export type TCtpInStore_CustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_ProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_ProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_ProductTailoringArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_ProductTailoringListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_QuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_QuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_QuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_QuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_ShippingMethodsByCartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpInStore_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_StagedQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStore_StagedQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStoreMe = TCtpActiveCartInterface &
  TCtpCartQueryInterface &
  TCtpMeQueryInterface &
  TCtpOrderQueryInterface &
  TCtpShoppingListQueryInterface & {
    __typename?: 'InStoreMe';
    activeCart?: Maybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    cart?: Maybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    carts: TCtpCartQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customer?: Maybe<TCtpCustomer>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    order?: Maybe<TCtpOrder>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    orders: TCtpOrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingList?: Maybe<TCtpShoppingList>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingLists: TCtpShoppingListQueryResult;
  };

export type TCtpInStoreMe_CartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpInStoreMe_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStoreMe_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStoreMe_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStoreMe_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInStoreMe_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpInheritedAssociate = {
  __typename?: 'InheritedAssociate';
  associateRoleAssignments: Array<TCtpInheritedAssociateRoleAssignment>;
  customer?: Maybe<TCtpCustomer>;
  customerRef?: Maybe<TCtpReference>;
};

export type TCtpInheritedAssociateRoleAssignment = {
  __typename?: 'InheritedAssociateRoleAssignment';
  associateRole: TCtpAssociateRole;
  associateRoleRef: TCtpKeyReference;
  source: TCtpBusinessUnit;
  sourceRef: TCtpKeyReference;
};

export type TCtpInheritedStore = {
  __typename?: 'InheritedStore';
  store?: Maybe<TCtpStore>;
  storeRef: TCtpKeyReference;
};

export type TCtpInitiator = {
  __typename?: 'Initiator';
  anonymousId?: Maybe<Scalars['String']['output']>;
  associateRef?: Maybe<TCtpReference>;
  attributedTo?: Maybe<TCtpAttribution>;
  clientId?: Maybe<Scalars['String']['output']>;
  customerRef?: Maybe<TCtpReference>;
  externalUserId?: Maybe<Scalars['String']['output']>;
  isPlatformClient?: Maybe<Scalars['Boolean']['output']>;
  userRef?: Maybe<TCtpReference>;
};

export type TCtpInterfaceInteractionsRaw = {
  __typename?: 'InterfaceInteractionsRaw';
  fields: Array<TCtpRawCustomField>;
  type?: Maybe<TCtpTypeDefinition>;
  typeRef: TCtpReference;
};

export type TCtpInterfaceInteractionsRaw_FieldsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpInterfaceInteractionsRawResult = {
  __typename?: 'InterfaceInteractionsRawResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpInterfaceInteractionsRaw>;
  total: Scalars['Int']['output'];
};

export enum TCtpIntervalUnit {
  Days = 'Days',
  Months = 'Months',
  Weeks = 'Weeks',
}

/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type TCtpInventoryEntry = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'InventoryEntry';
    availableQuantity: Scalars['Long']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    expectedDelivery?: Maybe<Scalars['DateTime']['output']>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    quantityOnStock: Scalars['Long']['output'];
    restockableInDays?: Maybe<Scalars['Int']['output']>;
    sku: Scalars['String']['output'];
    supplyChannel?: Maybe<TCtpChannel>;
    supplyChannelRef?: Maybe<TCtpReference>;
    version: Scalars['Long']['output'];
  };

export type TCtpInventoryEntryCreated = TCtpMessagePayload & {
  __typename?: 'InventoryEntryCreated';
  inventoryEntry: TCtpInventoryEntry;
  type: Scalars['String']['output'];
};

export type TCtpInventoryEntryDeleted = TCtpMessagePayload & {
  __typename?: 'InventoryEntryDeleted';
  sku: Scalars['String']['output'];
  supplyChannel?: Maybe<TCtpChannel>;
  supplyChannelRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpInventoryEntryDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  expectedDelivery?: InputMaybe<Scalars['DateTime']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  quantityOnStock: Scalars['Long']['input'];
  restockableInDays?: InputMaybe<Scalars['Int']['input']>;
  sku: Scalars['String']['input'];
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpInventoryEntryQuantitySet = TCtpMessagePayload & {
  __typename?: 'InventoryEntryQuantitySet';
  newAvailableQuantity: Scalars['Long']['output'];
  newQuantityOnStock: Scalars['Long']['output'];
  oldAvailableQuantity: Scalars['Long']['output'];
  oldQuantityOnStock: Scalars['Long']['output'];
  supplyChannel?: Maybe<TCtpChannel>;
  supplyChannelRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpInventoryEntryQueryResult = {
  __typename?: 'InventoryEntryQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpInventoryEntry>;
  total: Scalars['Long']['output'];
};

export type TCtpInventoryEntryUpdateAction = {
  addQuantity?: InputMaybe<TCtpAddInventoryEntryQuantity>;
  changeQuantity?: InputMaybe<TCtpChangeInventoryEntryQuantity>;
  removeQuantity?: InputMaybe<TCtpRemoveInventoryEntryQuantity>;
  setCustomField?: InputMaybe<TCtpSetInventoryEntryCustomField>;
  setCustomType?: InputMaybe<TCtpSetInventoryEntryCustomType>;
  setExpectedDelivery?: InputMaybe<TCtpSetInventoryEntryExpectedDelivery>;
  setKey?: InputMaybe<TCtpSetInventoryKey>;
  setRestockableInDays?: InputMaybe<TCtpSetInventoryEntryRestockableInDays>;
  setSupplyChannel?: InputMaybe<TCtpSetInventoryEntrySupplyChannel>;
};

export enum TCtpInventoryMode {
  /**
   * Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  None = 'None',
  /**
   * Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */
  ReserveOnOrder = 'ReserveOnOrder',
  /**
   * Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */
  TrackOnly = 'TrackOnly',
}

export type TCtpItemShippingAddressTargetDraft = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
};

export type TCtpItemShippingAddressTargetDraftOutput = {
  __typename?: 'ItemShippingAddressTargetDraftOutput';
  addressKey: Scalars['String']['output'];
  quantity: Scalars['Long']['output'];
};

export type TCtpItemShippingAddressTargetDraftType = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
};

export type TCtpItemShippingDetails = {
  __typename?: 'ItemShippingDetails';
  targets: Array<TCtpItemShippingTarget>;
  valid: Scalars['Boolean']['output'];
};

export type TCtpItemShippingDetailsDraft = {
  itemShippingAddressTargets?: InputMaybe<
    Array<TCtpItemShippingAddressTargetDraft>
  >;
  shippingTargets?: InputMaybe<Array<TCtpShippingMethodTargetDraft>>;
  targets?: Array<TCtpShippingTargetDraft>;
};

export type TCtpItemShippingDetailsDraftOutput = {
  __typename?: 'ItemShippingDetailsDraftOutput';
  itemShippingAddressTargets: Array<TCtpItemShippingAddressTargetDraftOutput>;
  shippingTargets: Array<TCtpShippingMethodTargetDraftOutput>;
  targets: Array<TCtpItemShippingTarget>;
};

export type TCtpItemShippingDetailsDraftType = {
  itemShippingAddressTargets?: InputMaybe<
    Array<TCtpItemShippingAddressTargetDraftType>
  >;
  shippingTargets?: InputMaybe<Array<TCtpShippingMethodTargetDraftType>>;
  targets?: InputMaybe<Array<TCtpShippingTargetDraftType>>;
};

export type TCtpItemShippingTarget = {
  __typename?: 'ItemShippingTarget';
  addressKey: Scalars['String']['output'];
  quantity: Scalars['Long']['output'];
  shippingMethodKey?: Maybe<Scalars['String']['output']>;
};

export type TCtpItemState = {
  __typename?: 'ItemState';
  quantity: Scalars['Long']['output'];
  state?: Maybe<TCtpState>;
  stateRef: TCtpReference;
};

export type TCtpItemStateDraftType = {
  quantity: Scalars['Long']['input'];
  state: TCtpReferenceInput;
};

export type TCtpKeyReference = {
  __typename?: 'KeyReference';
  key: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpLevel {
  /** The attribute can be used on the product level */
  Product = 'Product',
  /** The attribute can be used on the variant level */
  Variant = 'Variant',
}

export type TCtpLimit = {
  __typename?: 'Limit';
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpLimitWithCurrent = {
  current?: Maybe<Scalars['Long']['output']>;
  limit?: Maybe<Scalars['Long']['output']>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type TCtpLineItem = {
  __typename?: 'LineItem';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  custom?: Maybe<TCtpCustomFieldsType>;
  discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
  distributionChannel?: Maybe<TCtpChannel>;
  distributionChannelRef?: Maybe<TCtpReference>;
  id: Scalars['String']['output'];
  inventoryMode?: Maybe<TCtpInventoryMode>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lineItemMode: TCtpLineItemMode;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  perMethodTaxRate: Array<TCtpMethodTaxRate>;
  price: TCtpProductPrice;
  priceMode: TCtpLineItemPriceMode;
  productId: Scalars['String']['output'];
  productKey?: Maybe<Scalars['String']['output']>;
  productSlug?: Maybe<Scalars['String']['output']>;
  productSlugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  productType?: Maybe<TCtpProductTypeDefinition>;
  productTypeRef?: Maybe<TCtpReference>;
  quantity: Scalars['Long']['output'];
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: Maybe<TCtpLineItemRecurrenceInfo>;
  shippingDetails?: Maybe<TCtpItemShippingDetails>;
  state: Array<TCtpItemState>;
  supplyChannel?: Maybe<TCtpChannel>;
  supplyChannelRef?: Maybe<TCtpReference>;
  taxRate?: Maybe<TCtpTaxRate>;
  taxedPrice?: Maybe<TCtpTaxedItemPrice>;
  taxedPricePortions: Array<TCtpMethodTaxedPrice>;
  totalPrice?: Maybe<TCtpMoney>;
  variant?: Maybe<TCtpProductVariant>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type TCtpLineItem_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type TCtpLineItem_ProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  key?: InputMaybe<Scalars['String']['input']>;
  perMethodExternalTaxRate?: InputMaybe<Array<TCtpMethodExternalTaxRateDraft>>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpLineItemDraftOutput = {
  __typename?: 'LineItemDraftOutput';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  custom?: Maybe<TCtpCustomFieldsCommand>;
  distributionChannelResId?: Maybe<TCtpResourceIdentifier>;
  externalPrice?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
  externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
  externalTotalPrice?: Maybe<TCtpExternalLineItemTotalPrice>;
  inventoryMode?: Maybe<TCtpInventoryMode>;
  key?: Maybe<Scalars['String']['output']>;
  perMethodExternalTaxRate: Array<TCtpMethodExternalTaxRateDraftOutput>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Long']['output']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: Maybe<TCtpLineItemRecurrenceInfoDraft>;
  shippingDetails?: Maybe<TCtpItemShippingDetailsDraftOutput>;
  sku?: Maybe<Scalars['String']['output']>;
  supplyChannelResId?: Maybe<TCtpResourceIdentifier>;
  variantId?: Maybe<Scalars['Int']['output']>;
};

export type TCtpLineItemImportDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  price: TCtpProductPriceDataInput;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  state?: InputMaybe<Array<TCtpItemStateDraftType>>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  taxRate?: InputMaybe<TCtpTaxRateInput>;
  variant: TCtpProductVariantImportDraft;
};

export enum TCtpLineItemMode {
  /**
   * The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  GiftLineItem = 'GiftLineItem',
  /**
   * The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */
  Standard = 'Standard',
}

export enum TCtpLineItemPriceMode {
  /** The line item price was set externally. Cart discounts can apply to line items with this price mode. All update actions that change the quantity of a line item with this price mode require the externalPrice field to be given. */
  ExternalPrice = 'ExternalPrice',
  /** The line item price with the total was set externally. */
  ExternalTotal = 'ExternalTotal',
  /** The price is selected form the product variant. This is the default mode. */
  Platform = 'Platform',
}

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpLineItemRecurrenceInfo = {
  __typename?: 'LineItemRecurrenceInfo';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  priceSelectionMode: TCtpPriceSelectionMode;
  recurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
  recurrencePolicyRef: TCtpRecurrencePolicyRef;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpLineItemRecurrenceInfoDraft = {
  __typename?: 'LineItemRecurrenceInfoDraft';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  priceSelectionMode: TCtpPriceSelectionMode;
  recurrencePolicyRef?: Maybe<TCtpRecurrencePolicyReferenceIdentifier>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpLineItemRecurrenceInfoInputDraft = {
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  priceSelectionMode: TCtpPriceSelectionMode;
  recurrencePolicy: TCtpResourceIdentifierInput;
};

export type TCtpLineItemReturnItem = TCtpReturnItem & {
  __typename?: 'LineItemReturnItem';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lineItemId: Scalars['String']['output'];
  paymentState: TCtpReturnPaymentState;
  quantity: Scalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
  type: Scalars['String']['output'];
};

export type TCtpLineItemStateTransition = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'LineItemStateTransition';
    fromState?: Maybe<TCtpState>;
    fromStateRef: TCtpReference;
    lineItemId: Scalars['String']['output'];
    lineItemKey?: Maybe<Scalars['String']['output']>;
    quantity: Scalars['Long']['output'];
    toState?: Maybe<TCtpState>;
    toStateRef: TCtpReference;
    transitionDate: Scalars['DateTime']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'LineItemsTarget';
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpLineItemsTargetInput = {
  predicate: Scalars['String']['input'];
};

export type TCtpLocalizableEnumAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'LocalizableEnumAttributeDefinitionType';
    name: Scalars['String']['output'];
    values: TCtpLocalizableEnumValueTypeResult;
  };

export type TCtpLocalizableEnumAttributeDefinitionType_ValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpLocalizableEnumTypeDraft = {
  values: Array<TCtpLocalizedEnumValueDraft>;
};

export type TCtpLocalizableEnumValueType = {
  __typename?: 'LocalizableEnumValueType';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
};

export type TCtpLocalizableEnumValueType_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpLocalizableEnumValueTypeResult = {
  __typename?: 'LocalizableEnumValueTypeResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpLocalizableEnumValueType>;
  total: Scalars['Int']['output'];
};

export type TCtpLocalizableTextAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'LocalizableTextAttributeDefinitionType';
    name: Scalars['String']['output'];
  };

export type TCtpLocalizedEnumAttribute = TCtpAttribute & {
  __typename?: 'LocalizedEnumAttribute';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type TCtpLocalizedEnumAttribute_LabelArgs = {
  locale: Scalars['Locale']['input'];
};

export type TCtpLocalizedEnumField = TCtpCustomField & {
  __typename?: 'LocalizedEnumField';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type TCtpLocalizedEnumField_LabelArgs = {
  locale: Scalars['Locale']['input'];
};

export type TCtpLocalizedEnumType = TCtpFieldType & {
  __typename?: 'LocalizedEnumType';
  name: Scalars['String']['output'];
  values: Array<TCtpLocalizedEnumValue>;
};

export type TCtpLocalizedEnumValue = {
  __typename?: 'LocalizedEnumValue';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
};

export type TCtpLocalizedEnumValue_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpLocalizedEnumValueDraft = {
  key: Scalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpLocalizedEnumValueInput = {
  key: Scalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpLocalizedString = {
  __typename?: 'LocalizedString';
  locale: Scalars['Locale']['output'];
  value: Scalars['String']['output'];
};

export type TCtpLocalizedStringAttribute = TCtpAttribute & {
  __typename?: 'LocalizedStringAttribute';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type TCtpLocalizedStringAttribute_ValueArgs = {
  locale: Scalars['Locale']['input'];
};

export type TCtpLocalizedStringField = TCtpCustomField & {
  __typename?: 'LocalizedStringField';
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type TCtpLocalizedStringField_ValueArgs = {
  locale: Scalars['Locale']['input'];
};

export type TCtpLocalizedStringItemInputType = {
  locale: Scalars['Locale']['input'];
  value: Scalars['String']['input'];
};

export type TCtpLocalizedStringType = TCtpFieldType & {
  __typename?: 'LocalizedStringType';
  name: Scalars['String']['output'];
};

export type TCtpLocalizedText = {
  locale: Scalars['Locale']['input'];
  text: Scalars['String']['input'];
};

export type TCtpLocation = {
  __typename?: 'Location';
  country: Scalars['Country']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type TCtpMe = TCtpActiveCartInterface &
  TCtpCartQueryInterface &
  TCtpMeQueryInterface &
  TCtpOrderQueryInterface &
  TCtpShoppingListQueryInterface & {
    __typename?: 'Me';
    activeCart?: Maybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    businessUnit?: Maybe<TCtpBusinessUnit>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    businessUnits: TCtpBusinessUnitQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    cart?: Maybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    carts: TCtpCartQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customer?: Maybe<TCtpCustomer>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    order?: Maybe<TCtpOrder>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    orders: TCtpOrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    payment?: Maybe<TCtpMyPayment>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    payments: TCtpMyPaymentQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quote?: Maybe<TCtpQuote>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quoteRequest?: Maybe<TCtpQuoteRequest>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quoteRequests: TCtpQuoteRequestQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quotes: TCtpQuoteQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingList?: Maybe<TCtpShoppingList>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingLists: TCtpShoppingListQueryResult;
  };

export type TCtpMe_BusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_BusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_CartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpMe_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_PaymentArgs = {
  id: Scalars['String']['input'];
};

export type TCtpMe_PaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_QuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_QuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_QuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_QuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMe_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

/** The me field gives access to the data that is specific to the customer or anonymous session linked to the access token. */
export type TCtpMeFieldInterface = {
  me: TCtpInStoreMe | TCtpMe;
};

export type TCtpMeQueryInterface = {
  activeCart?: Maybe<TCtpCart>;
  cart?: Maybe<TCtpCart>;
  carts: TCtpCartQueryResult;
  order?: Maybe<TCtpOrder>;
  orders: TCtpOrderQueryResult;
  shoppingList?: Maybe<TCtpShoppingList>;
  shoppingLists: TCtpShoppingListQueryResult;
};

export type TCtpMeQueryInterface_CartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpMeQueryInterface_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMeQueryInterface_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMeQueryInterface_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMeQueryInterface_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMeQueryInterface_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMessage = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Message';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    id: Scalars['String']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    payload:
      | TCtpApprovalFlowApproved
      | TCtpApprovalFlowCompleted
      | TCtpApprovalFlowCreated
      | TCtpApprovalFlowRejected
      | TCtpApprovalRuleApproversSet
      | TCtpApprovalRuleCreated
      | TCtpApprovalRuleDescriptionSet
      | TCtpApprovalRuleKeySet
      | TCtpApprovalRuleNameSet
      | TCtpApprovalRulePredicateSet
      | TCtpApprovalRuleRequestersSet
      | TCtpApprovalRuleStatusSet
      | TCtpAssociateRoleBuyerAssignableChanged
      | TCtpAssociateRoleCreated
      | TCtpAssociateRoleDeleted
      | TCtpAssociateRoleNameSet
      | TCtpAssociateRolePermissionAdded
      | TCtpAssociateRolePermissionRemoved
      | TCtpAssociateRolePermissionsSet
      | TCtpBusinessUnitAddressAdded
      | TCtpBusinessUnitAddressChanged
      | TCtpBusinessUnitAddressCustomFieldAdded
      | TCtpBusinessUnitAddressCustomFieldChanged
      | TCtpBusinessUnitAddressCustomFieldRemoved
      | TCtpBusinessUnitAddressCustomTypeRemoved
      | TCtpBusinessUnitAddressCustomTypeSet
      | TCtpBusinessUnitAddressRemoved
      | TCtpBusinessUnitApprovalRuleModeChanged
      | TCtpBusinessUnitAssociateAdded
      | TCtpBusinessUnitAssociateChanged
      | TCtpBusinessUnitAssociateModeChanged
      | TCtpBusinessUnitAssociateRemoved
      | TCtpBusinessUnitAssociatesSet
      | TCtpBusinessUnitBillingAddressAdded
      | TCtpBusinessUnitBillingAddressRemoved
      | TCtpBusinessUnitContactEmailSet
      | TCtpBusinessUnitCreated
      | TCtpBusinessUnitCustomFieldAdded
      | TCtpBusinessUnitCustomFieldChanged
      | TCtpBusinessUnitCustomFieldRemoved
      | TCtpBusinessUnitCustomTypeRemoved
      | TCtpBusinessUnitCustomTypeSet
      | TCtpBusinessUnitDefaultBillingAddressSet
      | TCtpBusinessUnitDefaultShippingAddressSet
      | TCtpBusinessUnitDeleted
      | TCtpBusinessUnitNameChanged
      | TCtpBusinessUnitParentChanged
      | TCtpBusinessUnitShippingAddressAdded
      | TCtpBusinessUnitShippingAddressRemoved
      | TCtpBusinessUnitStatusChanged
      | TCtpBusinessUnitStoreAdded
      | TCtpBusinessUnitStoreModeChanged
      | TCtpBusinessUnitStoreRemoved
      | TCtpBusinessUnitStoresSet
      | TCtpBusinessUnitTopLevelUnitSet
      | TCtpBusinessUnitTypeSet
      | TCtpCartCreated
      | TCtpCartDiscountCreated
      | TCtpCartDiscountDeleted
      | TCtpCartDiscountStoreAdded
      | TCtpCartDiscountStoreRemoved
      | TCtpCartDiscountStoresSet
      | TCtpCategoryCreated
      | TCtpCategorySlugChanged
      | TCtpCustomLineItemStateTransition
      | TCtpCustomerAddressAdded
      | TCtpCustomerAddressChanged
      | TCtpCustomerAddressCustomFieldAdded
      | TCtpCustomerAddressCustomFieldChanged
      | TCtpCustomerAddressCustomFieldRemoved
      | TCtpCustomerAddressCustomTypeRemoved
      | TCtpCustomerAddressCustomTypeSet
      | TCtpCustomerAddressRemoved
      | TCtpCustomerCompanyNameSet
      | TCtpCustomerCreated
      | TCtpCustomerCustomFieldAdded
      | TCtpCustomerCustomFieldChanged
      | TCtpCustomerCustomFieldRemoved
      | TCtpCustomerCustomTypeRemoved
      | TCtpCustomerCustomTypeSet
      | TCtpCustomerDateOfBirthSet
      | TCtpCustomerDeleted
      | TCtpCustomerEmailChanged
      | TCtpCustomerEmailTokenCreated
      | TCtpCustomerEmailVerified
      | TCtpCustomerFirstNameSet
      | TCtpCustomerGroupAssignmentAdded
      | TCtpCustomerGroupAssignmentRemoved
      | TCtpCustomerGroupAssignmentsSet
      | TCtpCustomerGroupCustomFieldAdded
      | TCtpCustomerGroupCustomFieldChanged
      | TCtpCustomerGroupCustomFieldRemoved
      | TCtpCustomerGroupCustomTypeRemoved
      | TCtpCustomerGroupCustomTypeSet
      | TCtpCustomerGroupSet
      | TCtpCustomerLastNameSet
      | TCtpCustomerPasswordTokenCreated
      | TCtpCustomerPasswordUpdated
      | TCtpCustomerTitleSet
      | TCtpDeliveryAdded
      | TCtpDeliveryAddressSet
      | TCtpDeliveryCustomFieldAdded
      | TCtpDeliveryCustomFieldChanged
      | TCtpDeliveryCustomFieldRemoved
      | TCtpDeliveryCustomTypeRemoved
      | TCtpDeliveryCustomTypeSet
      | TCtpDeliveryItemsUpdated
      | TCtpDeliveryRemoved
      | TCtpDiscountCodeCreated
      | TCtpDiscountCodeDeleted
      | TCtpDiscountCodeKeySet
      | TCtpInventoryEntryCreated
      | TCtpInventoryEntryDeleted
      | TCtpInventoryEntryQuantitySet
      | TCtpLineItemStateTransition
      | TCtpOrderBillingAddressSet
      | TCtpOrderBusinessUnitSet
      | TCtpOrderCreated
      | TCtpOrderCreatedFromRecurringOrder
      | TCtpOrderCustomFieldAdded
      | TCtpOrderCustomFieldChanged
      | TCtpOrderCustomFieldRemoved
      | TCtpOrderCustomLineItemAdded
      | TCtpOrderCustomLineItemDiscountSet
      | TCtpOrderCustomLineItemQuantityChanged
      | TCtpOrderCustomLineItemRemoved
      | TCtpOrderCustomTypeRemoved
      | TCtpOrderCustomTypeSet
      | TCtpOrderCustomerEmailSet
      | TCtpOrderCustomerGroupSet
      | TCtpOrderCustomerSet
      | TCtpOrderDeleted
      | TCtpOrderDiscountCodeAdded
      | TCtpOrderDiscountCodeRemoved
      | TCtpOrderDiscountCodeStateSet
      | TCtpOrderEditApplied
      | TCtpOrderImported
      | TCtpOrderLineItemAdded
      | TCtpOrderLineItemDiscountSet
      | TCtpOrderLineItemDistributionChannelSet
      | TCtpOrderLineItemRemoved
      | TCtpOrderPaymentAdded
      | TCtpOrderPaymentRemoved
      | TCtpOrderPaymentStateChanged
      | TCtpOrderReturnShipmentStateChanged
      | TCtpOrderShipmentStateChanged
      | TCtpOrderShippingAddressSet
      | TCtpOrderShippingContainerSet
      | TCtpOrderShippingInfoSet
      | TCtpOrderShippingRateInputSet
      | TCtpOrderShippingUpdated
      | TCtpOrderStateChanged
      | TCtpOrderStateTransition
      | TCtpOrderStoreSet
      | TCtpParcelAddedToDelivery
      | TCtpParcelItemsUpdated
      | TCtpParcelMeasurementsUpdated
      | TCtpParcelRemovedFromDelivery
      | TCtpParcelTrackingDataUpdated
      | TCtpPaymentCreated
      | TCtpPaymentInteractionAdded
      | TCtpPaymentStatusInterfaceCodeSet
      | TCtpPaymentStatusStateTransition
      | TCtpPaymentTransactionAdded
      | TCtpPaymentTransactionStateChanged
      | TCtpProductAddedToCategory
      | TCtpProductCreated
      | TCtpProductDeleted
      | TCtpProductImageAdded
      | TCtpProductPriceAdded
      | TCtpProductPriceChanged
      | TCtpProductPriceCustomFieldAdded
      | TCtpProductPriceCustomFieldChanged
      | TCtpProductPriceCustomFieldRemoved
      | TCtpProductPriceCustomFieldsRemoved
      | TCtpProductPriceCustomFieldsSet
      | TCtpProductPriceDiscountsSet
      | TCtpProductPriceExternalDiscountSet
      | TCtpProductPriceKeySet
      | TCtpProductPriceModeSet
      | TCtpProductPriceRemoved
      | TCtpProductPricesSet
      | TCtpProductPublished
      | TCtpProductRemovedFromCategory
      | TCtpProductRevertedStagedChanges
      | TCtpProductSelectionCreated
      | TCtpProductSelectionDeleted
      | TCtpProductSelectionProductAdded
      | TCtpProductSelectionProductExcluded
      | TCtpProductSelectionProductRemoved
      | TCtpProductSelectionVariantExclusionChanged
      | TCtpProductSelectionVariantSelectionChanged
      | TCtpProductSlugChanged
      | TCtpProductStateTransition
      | TCtpProductTailoringCreated
      | TCtpProductTailoringDeleted
      | TCtpProductTailoringDescriptionSet
      | TCtpProductTailoringImageAdded
      | TCtpProductTailoringImagesSet
      | TCtpProductTailoringNameSet
      | TCtpProductTailoringPublished
      | TCtpProductTailoringSlugSet
      | TCtpProductTailoringUnpublished
      | TCtpProductUnpublished
      | TCtpProductVariantAdded
      | TCtpProductVariantDeleted
      | TCtpProductVariantTailoringAdded
      | TCtpProductVariantTailoringRemoved
      | TCtpPurchaseOrderNumberSet
      | TCtpQuoteCreated
      | TCtpQuoteCustomerChanged
      | TCtpQuoteDeleted
      | TCtpQuoteRenegotiationRequested
      | TCtpQuoteRequestCreated
      | TCtpQuoteRequestCustomerChanged
      | TCtpQuoteRequestDeleted
      | TCtpQuoteRequestStateChanged
      | TCtpQuoteRequestStateTransition
      | TCtpQuoteStateChanged
      | TCtpQuoteStateTransition
      | TCtpRecurringOrderCreated
      | TCtpRecurringOrderCustomFieldAdded
      | TCtpRecurringOrderCustomFieldChanged
      | TCtpRecurringOrderCustomFieldRemoved
      | TCtpRecurringOrderCustomTypeRemoved
      | TCtpRecurringOrderCustomTypeSet
      | TCtpRecurringOrderDeleted
      | TCtpRecurringOrderKeySet
      | TCtpRecurringOrderStateChanged
      | TCtpRecurringOrderStateTransition
      | TCtpReturnInfoAdded
      | TCtpReturnInfoSet
      | TCtpReviewCreated
      | TCtpReviewRatingSet
      | TCtpReviewStateTransition
      | TCtpShoppingListLineItemAdded
      | TCtpShoppingListLineItemRemoved
      | TCtpStagedQuoteCreated
      | TCtpStagedQuoteDeleted
      | TCtpStagedQuoteSellerCommentSet
      | TCtpStagedQuoteStateChanged
      | TCtpStagedQuoteStateTransition
      | TCtpStagedQuoteValidToSet
      | TCtpStandalonePriceActiveChanged
      | TCtpStandalonePriceCreated
      | TCtpStandalonePriceDeleted
      | TCtpStandalonePriceDiscountSet
      | TCtpStandalonePriceExpiresAtSet
      | TCtpStandalonePriceExternalDiscountSet
      | TCtpStandalonePriceKeySet
      | TCtpStandalonePriceStagedChangesApplied
      | TCtpStandalonePriceStagedChangesRemoved
      | TCtpStandalonePriceTierAdded
      | TCtpStandalonePriceTierRemoved
      | TCtpStandalonePriceTiersSet
      | TCtpStandalonePriceValidFromAndUntilSet
      | TCtpStandalonePriceValidFromSet
      | TCtpStandalonePriceValidUntilSet
      | TCtpStandalonePriceValueChanged
      | TCtpStoreCountriesChanged
      | TCtpStoreCreated
      | TCtpStoreDeleted
      | TCtpStoreDistributionChannelsChanged
      | TCtpStoreLanguagesChanged
      | TCtpStoreNameSet
      | TCtpStoreProductSelectionsChanged
      | TCtpStoreSupplyChannelsChanged;
    resourceRef: TCtpReference;
    resourceVersion: Scalars['Long']['output'];
    sequenceNumber: Scalars['Long']['output'];
    type: Scalars['String']['output'];
    userProvidedIdentifiers?: Maybe<TCtpUserProvidedIdentifiers>;
    version: Scalars['Long']['output'];
  };

export type TCtpMessagePayload = {
  type: Scalars['String']['output'];
};

export type TCtpMessageQueryResult = {
  __typename?: 'MessageQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpMessage>;
  total: Scalars['Long']['output'];
};

export type TCtpMessageSubscription = {
  __typename?: 'MessageSubscription';
  resourceTypeId: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type TCtpMessageSubscriptionInput = {
  resourceTypeId: Scalars['String']['input'];
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpMessagesConfiguration = {
  __typename?: 'MessagesConfiguration';
  deleteDaysAfterCreation?: Maybe<Scalars['Int']['output']>;
  enabled: Scalars['Boolean']['output'];
};

export type TCtpMessagesConfigurationDraft = {
  deleteDaysAfterCreation: Scalars['Int']['input'];
  enabled: Scalars['Boolean']['input'];
};

export type TCtpMethodExternalTaxRateDraft = {
  shippingMethodKey: Scalars['String']['input'];
  taxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
};

export type TCtpMethodExternalTaxRateDraftOutput = {
  __typename?: 'MethodExternalTaxRateDraftOutput';
  shippingMethodKey: Scalars['String']['output'];
  taxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
};

export type TCtpMethodTaxRate = {
  __typename?: 'MethodTaxRate';
  shippingMethodKey: Scalars['String']['output'];
  taxRate?: Maybe<TCtpTaxRate>;
};

export type TCtpMethodTaxedPrice = {
  __typename?: 'MethodTaxedPrice';
  shippingMethodKey: Scalars['String']['output'];
  taxedPrice?: Maybe<TCtpTaxedItemPrice>;
};

export type TCtpMissingFilterInput = {
  path: Scalars['String']['input'];
};

export type TCtpMoney = TCtpBaseMoney & {
  __typename?: 'Money';
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpMoneyAttribute = TCtpAttribute & {
  __typename?: 'MoneyAttribute';
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  name: Scalars['String']['output'];
};

export type TCtpMoneyAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'MoneyAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type TCtpMoneyDraft = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['Currency']['input'];
};

export type TCtpMoneyField = TCtpCustomField & {
  __typename?: 'MoneyField';
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['Currency']['output'];
  name: Scalars['String']['output'];
};

export type TCtpMoneyInput = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['Currency']['input'];
};

export type TCtpMoneyType = TCtpFieldType & {
  __typename?: 'MoneyType';
  name: Scalars['String']['output'];
};

export type TCtpMoveProductImageToPosition = {
  imageUrl: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpMoveProductTailoringImageToPosition = {
  imageUrl: Scalars['String']['input'];
  position: Scalars['Int']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpMultiBuyCustomLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'MultiBuyCustomLineItemsTarget';
  discountedQuantity: Scalars['Long']['output'];
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  selectionMode: TCtpSelectionMode;
  triggerQuantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type TCtpMultiBuyCustomLineItemsTargetInput = {
  discountedQuantity: Scalars['Long']['input'];
  maxOccurrence?: InputMaybe<Scalars['Int']['input']>;
  predicate: Scalars['String']['input'];
  selectionMode?: InputMaybe<TCtpSelectionMode>;
  triggerQuantity: Scalars['Long']['input'];
};

export type TCtpMultiBuyLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'MultiBuyLineItemsTarget';
  discountedQuantity: Scalars['Long']['output'];
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  selectionMode: TCtpSelectionMode;
  triggerQuantity: Scalars['Long']['output'];
  type: Scalars['String']['output'];
};

export type TCtpMultiBuyLineItemsTargetInput = {
  discountedQuantity: Scalars['Long']['input'];
  maxOccurrence?: InputMaybe<Scalars['Int']['input']>;
  predicate: Scalars['String']['input'];
  selectionMode?: InputMaybe<TCtpSelectionMode>;
  triggerQuantity: Scalars['Long']['input'];
};

export type TCtpMutation = {
  __typename?: 'Mutation';
  createApiClient?: Maybe<TCtpApiClientWithSecret>;
  createApprovalRule?: Maybe<TCtpApprovalRule>;
  createAssociateRole?: Maybe<TCtpAssociateRole>;
  createAttributeGroup?: Maybe<TCtpAttributeGroup>;
  createBusinessUnit?: Maybe<TCtpBusinessUnit>;
  createCart?: Maybe<TCtpCart>;
  createCartDiscount?: Maybe<TCtpCartDiscount>;
  createCategory?: Maybe<TCtpCategory>;
  createChannel?: Maybe<TCtpChannel>;
  createCustomerGroup?: Maybe<TCtpCustomerGroup>;
  createDiscountCode?: Maybe<TCtpDiscountCode>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createDiscountGroup?: Maybe<TCtpDiscountGroup>;
  createExtension?: Maybe<TCtpExtension>;
  createInventoryEntry?: Maybe<TCtpInventoryEntry>;
  createMyBusinessUnit?: Maybe<TCtpBusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyCart?: Maybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromCart?: Maybe<TCtpOrder>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromQuote?: Maybe<TCtpOrder>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyPayment?: Maybe<TCtpMyPayment>;
  createMyQuoteRequest?: Maybe<TCtpQuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyShoppingList?: Maybe<TCtpShoppingList>;
  createOrUpdateCustomObject?: Maybe<TCtpCustomObject>;
  createOrderEdit?: Maybe<TCtpOrderEdit>;
  createOrderFromCart?: Maybe<TCtpOrder>;
  createOrderFromQuote?: Maybe<TCtpOrder>;
  createPayment?: Maybe<TCtpPayment>;
  createProduct?: Maybe<TCtpProduct>;
  createProductDiscount?: Maybe<TCtpProductDiscount>;
  createProductSelection?: Maybe<TCtpProductSelection>;
  createProductTailoring?: Maybe<TCtpProductTailoring>;
  createProductType?: Maybe<TCtpProductTypeDefinition>;
  createQuote?: Maybe<TCtpQuote>;
  createQuoteRequest?: Maybe<TCtpQuoteRequest>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  createRecurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  createRecurringOrder?: Maybe<TCtpRecurringOrder>;
  createReview?: Maybe<TCtpReview>;
  createShippingMethod?: Maybe<TCtpShippingMethod>;
  createShoppingList?: Maybe<TCtpShoppingList>;
  createStagedQuote?: Maybe<TCtpStagedQuote>;
  createStandalonePrice?: Maybe<TCtpStandalonePrice>;
  createState?: Maybe<TCtpState>;
  createStore?: Maybe<TCtpStore>;
  createSubscription?: Maybe<TCtpCommercetoolsSubscription>;
  createTaxCategory?: Maybe<TCtpTaxCategory>;
  createTypeDefinition?: Maybe<TCtpTypeDefinition>;
  createZone?: Maybe<TCtpZone>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerChangeMyPassword?: Maybe<TCtpCustomer>;
  customerChangePassword?: Maybe<TCtpCustomer>;
  /** Verifies customer's email using a token. */
  customerConfirmEmail?: Maybe<TCtpCustomer>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerConfirmMyEmail?: Maybe<TCtpCustomer>;
  customerCreateEmailVerificationToken: TCtpCustomerEmailToken;
  /** The token value is used to reset the password of the customer with the given email. The token is valid only for 10 minutes. */
  customerCreatePasswordResetToken?: Maybe<TCtpCustomerPasswordToken>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerResetMyPassword?: Maybe<TCtpCustomer>;
  /**
   * The following workflow can be used to reset the customer’s password:
   *
   * 1. Create a password reset token and send it embedded in a link to the customer.
   * 2. When the customer clicks on the link, you may optionally retrieve customer by password token.
   * 3. When the customer entered new password, use reset customer’s password to reset the password.
   */
  customerResetPassword?: Maybe<TCtpCustomer>;
  /**
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * There may be carts and orders created before the sign in that should be assigned to the customer account. With the `anonymousCartId`, a single anonymous cart can be assigned. With the `anonymousId`, all orders and carts that have this `anonymousId` set will be assigned to the customer.
   * If both `anonymousCartId` and `anonymousId` are given, the anonymous cart must have the `anonymousId`.
   *
   * Additionally, there might also exist one or more active customer carts from an earlier session. On customer sign in there are several ways how to proceed with this cart and the cart referenced by the `anonymousCartId`.
   *
   * * If the customer does not have a cart yet, the anonymous cart becomes the customer's cart.
   * * If the customer already has one or more carts, the content of the anonymous cart will be copied to the customer's active cart that has been modified most recently.
   *
   *   In this case the `CartState` of the anonymous cart gets changed to `Merged` while the customer's cart remains the `Active` cart.
   *
   *   If a `LineItem` in the anonymous cart matches an existing line item, or a `CustomLineItem` matches an existing custom line item in the customer's cart, the maximum quantity of both line items is used as the new quantity.
   *
   *   `ItemShippingDetails` are copied from the item with the highest quantity.
   *
   *   If `itemShippingAddresses` are different in the two carts, the resulting cart contains the addresses of both the customer cart and the anonymous cart.
   *
   *   Note, that it is not possible to merge carts that differ in their currency (set during creation of the cart).
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignIn: TCtpCustomerSignInResult;
  /**
   * BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta
   *
   * Retrieves the authenticated customer (a customer that matches the given email/password pair).
   *
   * If used with an access token for Anonymous Sessions, all orders and carts belonging to the `anonymousId` will be assigned to the newly created customer.
   *
   * * If the customer does not have a cart yet, the anonymous cart that was modified most recently becomes the customer's cart.
   * * If the customer already has a cart, the most recently modified anonymous cart will be handled according to the `AnonymousCartSignInMode`.
   *
   * If a cart is is returned as part of the `CustomerSignInResult`, it has been recalculated (it will have up-to-date prices, taxes and discounts, and invalid line items have been removed).
   */
  customerSignMeIn: TCtpCustomerSignInResult;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta If used with an access token for Anonymous Sessions, all orders and carts belonging to the anonymousId will be assigned to the newly created customer. */
  customerSignMeUp: TCtpCustomerSignInResult;
  /** Creates a customer. If an anonymous cart is given then the cart is assigned to the created customer and the version number of the Cart will increase. If the id of an anonymous session is given, all carts and orders will be assigned to the created customer. */
  customerSignUp: TCtpCustomerSignInResult;
  deleteApiClient?: Maybe<TCtpApiClientWithoutSecret>;
  deleteAssociateRole?: Maybe<TCtpAssociateRole>;
  deleteAttributeGroup?: Maybe<TCtpAttributeGroup>;
  deleteBusinessUnit?: Maybe<TCtpBusinessUnit>;
  deleteCart?: Maybe<TCtpCart>;
  deleteCartDiscount?: Maybe<TCtpCartDiscount>;
  deleteCategory?: Maybe<TCtpCategory>;
  deleteChannel?: Maybe<TCtpChannel>;
  deleteCustomObject?: Maybe<TCtpCustomObject>;
  deleteCustomer?: Maybe<TCtpCustomer>;
  deleteCustomerGroup?: Maybe<TCtpCustomerGroup>;
  deleteDiscountCode?: Maybe<TCtpDiscountCode>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteDiscountGroup?: Maybe<TCtpDiscountGroup>;
  deleteExtension?: Maybe<TCtpExtension>;
  deleteInventoryEntry?: Maybe<TCtpInventoryEntry>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCart?: Maybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCustomer?: Maybe<TCtpCustomer>;
  deleteMyPayment?: Maybe<TCtpMyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyShoppingList?: Maybe<TCtpShoppingList>;
  deleteOrder?: Maybe<TCtpOrder>;
  deleteOrderEdit?: Maybe<TCtpOrderEdit>;
  deletePayment?: Maybe<TCtpPayment>;
  deleteProduct?: Maybe<TCtpProduct>;
  deleteProductDiscount?: Maybe<TCtpProductDiscount>;
  deleteProductSelection?: Maybe<TCtpProductSelection>;
  deleteProductTailoring?: Maybe<TCtpProductTailoring>;
  deleteProductType?: Maybe<TCtpProductTypeDefinition>;
  deleteQuote?: Maybe<TCtpQuote>;
  deleteQuoteRequest?: Maybe<TCtpQuoteRequest>;
  deleteReview?: Maybe<TCtpReview>;
  deleteShippingMethod?: Maybe<TCtpShippingMethod>;
  deleteShoppingList?: Maybe<TCtpShoppingList>;
  deleteStagedQuote?: Maybe<TCtpStagedQuote>;
  deleteStandalonePrice?: Maybe<TCtpStandalonePrice>;
  deleteState?: Maybe<TCtpState>;
  deleteStore?: Maybe<TCtpStore>;
  deleteSubscription?: Maybe<TCtpCommercetoolsSubscription>;
  deleteTaxCategory?: Maybe<TCtpTaxCategory>;
  deleteTypeDefinition?: Maybe<TCtpTypeDefinition>;
  deleteZone?: Maybe<TCtpZone>;
  importOrder?: Maybe<TCtpOrder>;
  replicateCart?: Maybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  replicateMyCart?: Maybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta Signs up a new customer and associates it with the business unit. */
  signUpInMyBusinessUnit: TCtpCustomerSignInResult;
  updateApprovalFlow?: Maybe<TCtpApprovalFlow>;
  updateApprovalRule?: Maybe<TCtpApprovalRule>;
  updateAssociateRole?: Maybe<TCtpAssociateRole>;
  updateAttributeGroup?: Maybe<TCtpAttributeGroup>;
  updateBusinessUnit?: Maybe<TCtpBusinessUnit>;
  updateCart?: Maybe<TCtpCart>;
  updateCartDiscount?: Maybe<TCtpCartDiscount>;
  updateCategory?: Maybe<TCtpCategory>;
  updateChannel?: Maybe<TCtpChannel>;
  updateCustomer?: Maybe<TCtpCustomer>;
  updateCustomerGroup?: Maybe<TCtpCustomerGroup>;
  updateDiscountCode?: Maybe<TCtpDiscountCode>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateDiscountGroup?: Maybe<TCtpDiscountGroup>;
  updateExtension?: Maybe<TCtpExtension>;
  updateInventoryEntry?: Maybe<TCtpInventoryEntry>;
  updateMyBusinessUnit?: Maybe<TCtpBusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCart?: Maybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCustomer?: Maybe<TCtpCustomer>;
  updateMyPayment?: Maybe<TCtpMyPayment>;
  updateMyQuote?: Maybe<TCtpQuote>;
  updateMyQuoteRequest?: Maybe<TCtpQuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyShoppingList?: Maybe<TCtpShoppingList>;
  updateOrder?: Maybe<TCtpOrder>;
  updateOrderEdit?: Maybe<TCtpOrderEdit>;
  updatePayment?: Maybe<TCtpPayment>;
  updateProduct?: Maybe<TCtpProduct>;
  updateProductDiscount?: Maybe<TCtpProductDiscount>;
  updateProductSelection?: Maybe<TCtpProductSelection>;
  updateProductTailoring?: Maybe<TCtpProductTailoring>;
  updateProductType?: Maybe<TCtpProductTypeDefinition>;
  updateProject?: Maybe<TCtpProjectProjection>;
  updateQuote?: Maybe<TCtpQuote>;
  updateQuoteRequest?: Maybe<TCtpQuoteRequest>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  updateRecurringOrder?: Maybe<TCtpRecurringOrder>;
  updateReview?: Maybe<TCtpReview>;
  updateShippingMethod?: Maybe<TCtpShippingMethod>;
  updateShoppingList?: Maybe<TCtpShoppingList>;
  updateStagedQuote?: Maybe<TCtpStagedQuote>;
  updateStandalonePrice?: Maybe<TCtpStandalonePrice>;
  updateState?: Maybe<TCtpState>;
  updateStore?: Maybe<TCtpStore>;
  updateSubscription?: Maybe<TCtpCommercetoolsSubscription>;
  updateTaxCategory?: Maybe<TCtpTaxCategory>;
  updateTypeDefinition?: Maybe<TCtpTypeDefinition>;
  updateZone?: Maybe<TCtpZone>;
};

export type TCtpMutation_CreateApiClientArgs = {
  draft: TCtpCreateApiClient;
};

export type TCtpMutation_CreateApprovalRuleArgs = {
  asAssociate: TCtpAsAssociateArgument;
  draft: TCtpApprovalRuleDraft;
};

export type TCtpMutation_CreateAssociateRoleArgs = {
  draft: TCtpAssociateRoleDraft;
};

export type TCtpMutation_CreateAttributeGroupArgs = {
  draft: TCtpAttributeGroupDraft;
};

export type TCtpMutation_CreateBusinessUnitArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpBusinessUnitDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateCartArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpCartDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateCartDiscountArgs = {
  draft: TCtpCartDiscountDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateCategoryArgs = {
  draft: TCtpCategoryDraft;
};

export type TCtpMutation_CreateChannelArgs = {
  draft: TCtpChannelDraft;
};

export type TCtpMutation_CreateCustomerGroupArgs = {
  draft: TCtpCustomerGroupDraft;
};

export type TCtpMutation_CreateDiscountCodeArgs = {
  draft: TCtpDiscountCodeDraft;
};

export type TCtpMutation_CreateDiscountGroupArgs = {
  draft: TCtpDiscountGroupDraft;
};

export type TCtpMutation_CreateExtensionArgs = {
  draft: TCtpExtensionDraft;
};

export type TCtpMutation_CreateInventoryEntryArgs = {
  draft: TCtpInventoryEntryDraft;
};

export type TCtpMutation_CreateMyBusinessUnitArgs = {
  draft: TCtpMyBusinessUnitDraft;
};

export type TCtpMutation_CreateMyCartArgs = {
  draft: TCtpMyCartDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateMyOrderFromCartArgs = {
  draft: TCtpOrderMyCartCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateMyOrderFromQuoteArgs = {
  draft: TCtpOrderMyQuoteCommand;
};

export type TCtpMutation_CreateMyPaymentArgs = {
  draft: TCtpMyPaymentDraft;
};

export type TCtpMutation_CreateMyQuoteRequestArgs = {
  draft: TCtpMyQuoteRequestDraft;
};

export type TCtpMutation_CreateMyShoppingListArgs = {
  draft: TCtpMyShoppingListDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateOrUpdateCustomObjectArgs = {
  draft: TCtpCustomObjectDraft;
};

export type TCtpMutation_CreateOrderEditArgs = {
  draft: TCtpOrderEditDraft;
};

export type TCtpMutation_CreateOrderFromCartArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpOrderCartCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateOrderFromQuoteArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpOrderQuoteCommand;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreatePaymentArgs = {
  draft: TCtpPaymentDraft;
};

export type TCtpMutation_CreateProductArgs = {
  draft: TCtpProductDraft;
};

export type TCtpMutation_CreateProductDiscountArgs = {
  draft: TCtpProductDiscountDraft;
};

export type TCtpMutation_CreateProductSelectionArgs = {
  draft: TCtpCreateProductSelectionDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateProductTailoringArgs = {
  draft: TCtpProductTailoringDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateProductTypeArgs = {
  draft: TCtpProductTypeDraft;
};

export type TCtpMutation_CreateQuoteArgs = {
  draft: TCtpQuoteDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateQuoteRequestArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpQuoteRequestDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateRecurrencePolicyArgs = {
  draft: TCtpRecurrencePolicyDraft;
};

export type TCtpMutation_CreateRecurringOrderArgs = {
  draft: TCtpRecurringOrderDraft;
};

export type TCtpMutation_CreateReviewArgs = {
  draft: TCtpReviewDraft;
};

export type TCtpMutation_CreateShippingMethodArgs = {
  draft: TCtpShippingMethodDraft;
};

export type TCtpMutation_CreateShoppingListArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpShoppingListDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateStagedQuoteArgs = {
  draft: TCtpStagedQuoteDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateStandalonePriceArgs = {
  draft: TCtpCreateStandalonePrice;
};

export type TCtpMutation_CreateStateArgs = {
  draft: TCtpStateDraft;
};

export type TCtpMutation_CreateStoreArgs = {
  draft: TCtpCreateStore;
};

export type TCtpMutation_CreateSubscriptionArgs = {
  draft: TCtpSubscriptionDraft;
};

export type TCtpMutation_CreateTaxCategoryArgs = {
  draft: TCtpTaxCategoryDraft;
};

export type TCtpMutation_CreateTypeDefinitionArgs = {
  draft: TCtpTypeDefinitionDraft;
};

export type TCtpMutation_CreateZoneArgs = {
  draft: TCtpCreateZone;
};

export type TCtpMutation_CustomerChangeMyPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_CustomerChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_CustomerConfirmEmailArgs = {
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpMutation_CustomerConfirmMyEmailArgs = {
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
};

export type TCtpMutation_CustomerCreateEmailVerificationTokenArgs = {
  id: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  ttlMinutes: Scalars['Int']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpMutation_CustomerCreatePasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  ttlMinutes?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpMutation_CustomerResetMyPasswordArgs = {
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
};

export type TCtpMutation_CustomerResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  tokenValue: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpMutation_CustomerSignInArgs = {
  draft: TCtpCustomerSignInDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CustomerSignMeInArgs = {
  draft: TCtpCustomerSignMeInDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CustomerSignMeUpArgs = {
  draft: TCtpCustomerSignMeUpDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CustomerSignUpArgs = {
  draft: TCtpCustomerSignUpDraft;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_DeleteApiClientArgs = {
  id: Scalars['String']['input'];
};

export type TCtpMutation_DeleteAssociateRoleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteAttributeGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteBusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteCartArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteCartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteChannelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteCustomObjectArgs = {
  container?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpMutation_DeleteCustomerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteCustomerGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteDiscountCodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteDiscountGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteExtensionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteInventoryEntryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteMyCartArgs = {
  id: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteMyCustomerArgs = {
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteMyPaymentArgs = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteMyShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteOrderEditArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeletePaymentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteProductDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteProductSelectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteProductTailoringArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteProductTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteQuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteReviewArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteShippingMethodArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteShoppingListArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteStagedQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  personalDataErasure?: InputMaybe<Scalars['Boolean']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteStandalonePriceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteStateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteStoreArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteTaxCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteTypeDefinitionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_DeleteZoneArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_ImportOrderArgs = {
  draft: TCtpImportOrderDraft;
};

export type TCtpMutation_ReplicateCartArgs = {
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  key?: InputMaybe<Scalars['String']['input']>;
  reference: TCtpReferenceInput;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_ReplicateMyCartArgs = {
  reference: TCtpReferenceInput;
};

export type TCtpMutation_SignUpInMyBusinessUnitArgs = {
  draft: TCtpSignUpInMyBusinessUnitDraft;
};

export type TCtpMutation_UpdateApprovalFlowArgs = {
  actions: Array<TCtpApprovalFlowUpdateAction>;
  asAssociate: TCtpAsAssociateArgument;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateApprovalRuleArgs = {
  actions: Array<TCtpApprovalRuleUpdateAction>;
  asAssociate: TCtpAsAssociateArgument;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateAssociateRoleArgs = {
  actions: Array<TCtpAssociateRoleUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateAttributeGroupArgs = {
  actions: Array<TCtpAttributeGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateBusinessUnitArgs = {
  actions: Array<TCtpBusinessUnitUpdateAction>;
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateCartArgs = {
  actions: Array<TCtpCartUpdateAction>;
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateCartDiscountArgs = {
  actions: Array<TCtpCartDiscountUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateCategoryArgs = {
  actions: Array<TCtpCategoryUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateChannelArgs = {
  actions: Array<TCtpChannelUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateCustomerArgs = {
  actions: Array<TCtpCustomerUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateCustomerGroupArgs = {
  actions: Array<TCtpCustomerGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateDiscountCodeArgs = {
  actions: Array<TCtpDiscountCodeUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateDiscountGroupArgs = {
  actions: Array<TCtpDiscountGroupUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateExtensionArgs = {
  actions: Array<TCtpExtensionUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateInventoryEntryArgs = {
  actions: Array<TCtpInventoryEntryUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyBusinessUnitArgs = {
  actions: Array<TCtpMyBusinessUnitUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyCartArgs = {
  actions: Array<TCtpMyCartUpdateAction>;
  id: Scalars['String']['input'];
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyCustomerArgs = {
  actions: Array<TCtpMyCustomerUpdateAction>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyPaymentArgs = {
  actions: Array<TCtpMyPaymentUpdateAction>;
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyQuoteArgs = {
  actions: Array<TCtpMyQuoteUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyQuoteRequestArgs = {
  actions: Array<TCtpMyQuoteRequestUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateMyShoppingListArgs = {
  actions: Array<TCtpMyShoppingListUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateOrderArgs = {
  actions: Array<TCtpOrderUpdateAction>;
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateOrderEditArgs = {
  actions: Array<TCtpOrderEditUpdateAction>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdatePaymentArgs = {
  actions: Array<TCtpPaymentUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateProductArgs = {
  actions: Array<TCtpProductUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateProductDiscountArgs = {
  actions: Array<TCtpProductDiscountUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateProductSelectionArgs = {
  actions: Array<TCtpProductSelectionUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateProductTailoringArgs = {
  actions: Array<TCtpProductTailoringUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateProductTypeArgs = {
  actions: Array<TCtpProductTypeUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateProjectArgs = {
  actions: Array<TCtpProjectSettingsUpdateAction>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateQuoteArgs = {
  actions: Array<TCtpQuoteUpdateAction>;
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateQuoteRequestArgs = {
  actions: Array<TCtpQuoteRequestUpdateAction>;
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateRecurringOrderArgs = {
  actions: Array<TCtpRecurringOrderUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateReviewArgs = {
  actions: Array<TCtpReviewUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateShippingMethodArgs = {
  actions: Array<TCtpShippingMethodUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateShoppingListArgs = {
  actions: Array<TCtpShoppingListUpdateAction>;
  asAssociate?: InputMaybe<TCtpAsAssociateArgument>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateStagedQuoteArgs = {
  actions: Array<TCtpStagedQuoteUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateStandalonePriceArgs = {
  actions: Array<TCtpStandalonePriceUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateStateArgs = {
  actions: Array<TCtpStateUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateStoreArgs = {
  actions: Array<TCtpStoreUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateSubscriptionArgs = {
  actions: Array<TCtpSubscriptionUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateTaxCategoryArgs = {
  actions: Array<TCtpTaxCategoryUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateTypeDefinitionArgs = {
  actions: Array<TCtpTypeUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpMutation_UpdateZoneArgs = {
  actions: Array<TCtpZoneUpdateAction>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['Long']['input'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpMyBusinessUnitDraft = {
  addresses?: InputMaybe<Array<TCtpAddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: InputMaybe<Scalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: InputMaybe<Scalars['Int']['input']>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentUnit?: InputMaybe<TCtpResourceIdentifierInput>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: InputMaybe<Array<Scalars['Int']['input']>>;
  storeMode?: InputMaybe<Scalars['String']['input']>;
  unitType: TCtpBusinessUnitType;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpMyBusinessUnitUpdateAction = {
  addAddress?: InputMaybe<TCtpAddMyBusinessUnitAddress>;
  addBillingAddressId?: InputMaybe<TCtpAddMyBusinessUnitBillingAddressId>;
  addShippingAddressId?: InputMaybe<TCtpAddMyBusinessUnitShippingAddressId>;
  changeAddress?: InputMaybe<TCtpChangeMyBusinessUnitAddress>;
  changeAssociate?: InputMaybe<TCtpChangeMyBusinessUnitAssociate>;
  changeName?: InputMaybe<TCtpChangeMyBusinessUnitName>;
  changeParentUnit?: InputMaybe<TCtpChangeMyBusinessUnitParentUnit>;
  removeAddress?: InputMaybe<TCtpRemoveMyBusinessUnitAddress>;
  removeAssociate?: InputMaybe<TCtpRemoveMyBusinessUnitAssociate>;
  removeBillingAddressId?: InputMaybe<TCtpRemoveMyBusinessUnitBillingAddressId>;
  removeShippingAddressId?: InputMaybe<TCtpRemoveMyBusinessUnitShippingAddressId>;
  setAddressCustomField?: InputMaybe<TCtpSetMyBusinessUnitAddressCustomField>;
  setAddressCustomType?: InputMaybe<TCtpSetMyBusinessUnitAddressCustomType>;
  setContactEmail?: InputMaybe<TCtpSetMyBusinessUnitContactEmail>;
  setCustomField?: InputMaybe<TCtpSetMyBusinessUnitCustomField>;
  setCustomType?: InputMaybe<TCtpSetMyBusinessUnitCustomType>;
  setDefaultBillingAddress?: InputMaybe<TCtpSetMyBusinessUnitDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<TCtpSetMyBusinessUnitDefaultShippingAddress>;
};

export type TCtpMyCartDraft = {
  billingAddress?: InputMaybe<TCtpAddressInput>;
  businessUnit?: InputMaybe<TCtpResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customShipping?: InputMaybe<Array<TCtpCustomShippingDraft>>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  discountCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  itemShippingAddresses?: InputMaybe<Array<TCtpAddressInput>>;
  lineItems?: InputMaybe<Array<TCtpMyLineItemDraft>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  shipping?: InputMaybe<Array<TCtpShippingDraft>>;
  shippingAddress?: InputMaybe<TCtpAddressInput>;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
  shippingMode?: InputMaybe<TCtpShippingMode>;
  store?: InputMaybe<TCtpResourceIdentifierInput>;
  taxMode?: InputMaybe<TCtpTaxMode>;
};

export type TCtpMyCartUpdateAction = {
  addDiscountCode?: InputMaybe<TCtpAddCartDiscountCode>;
  addItemShippingAddress?: InputMaybe<TCtpAddCartItemShippingAddress>;
  addLineItem?: InputMaybe<TCtpAddMyCartLineItem>;
  addPayment?: InputMaybe<TCtpAddCartPayment>;
  addShoppingList?: InputMaybe<TCtpAddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: InputMaybe<TCtpApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: InputMaybe<TCtpApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeLineItemQuantity?: InputMaybe<TCtpChangeCartLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<TCtpChangeCartLineItemsOrder>;
  changeTaxMode?: InputMaybe<TCtpChangeMyCartTaxMode>;
  recalculate?: InputMaybe<TCtpRecalculateCart>;
  removeDiscountCode?: InputMaybe<TCtpRemoveCartDiscountCode>;
  removeItemShippingAddress?: InputMaybe<TCtpRemoveCartItemShippingAddress>;
  removeLineItem?: InputMaybe<TCtpRemoveCartLineItem>;
  removePayment?: InputMaybe<TCtpRemoveCartPayment>;
  setBillingAddress?: InputMaybe<TCtpSetCartBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<TCtpSetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<TCtpSetCartBillingAddressCustomType>;
  setBusinessUnit?: InputMaybe<TCtpSetCartBusinessUnit>;
  setCountry?: InputMaybe<TCtpSetCartCountry>;
  setCustomField?: InputMaybe<TCtpSetCartCustomField>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setCustomLineItemRecurrenceInfo?: InputMaybe<TCtpSetCustomLineItemRecurrenceInfo>;
  setCustomType?: InputMaybe<TCtpSetCartCustomType>;
  setCustomerEmail?: InputMaybe<TCtpSetCartCustomerEmail>;
  setDeleteDaysAfterLastModification?: InputMaybe<TCtpSetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: InputMaybe<TCtpSetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<TCtpSetCartItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<TCtpSetCartLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<TCtpSetCartLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<TCtpSetCartLineItemDistributionChannel>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setLineItemRecurrenceInfo?: InputMaybe<TCtpSetLineItemRecurrenceInfo>;
  setLineItemShippingDetails?: InputMaybe<TCtpSetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: InputMaybe<TCtpSetCartLineItemSupplyChannel>;
  setLocale?: InputMaybe<TCtpSetCartLocale>;
  setShippingAddress?: InputMaybe<TCtpSetCartShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<TCtpSetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<TCtpSetCartShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<TCtpSetCartShippingCustomField>;
  setShippingCustomType?: InputMaybe<TCtpSetCartShippingCustomType>;
  setShippingMethod?: InputMaybe<TCtpSetMyCartShippingMethod>;
  updateItemShippingAddress?: InputMaybe<TCtpUpdateCartItemShippingAddress>;
};

export type TCtpMyCustomerUpdateAction = {
  addAddress?: InputMaybe<TCtpAddCustomerAddress>;
  addBillingAddressId?: InputMaybe<TCtpAddCustomerBillingAddressId>;
  addShippingAddressId?: InputMaybe<TCtpAddCustomerShippingAddressId>;
  changeAddress?: InputMaybe<TCtpChangeCustomerAddress>;
  changeEmail?: InputMaybe<TCtpChangeCustomerEmail>;
  removeAddress?: InputMaybe<TCtpRemoveCustomerAddress>;
  removeBillingAddressId?: InputMaybe<TCtpRemoveCustomerBillingAddressId>;
  removeShippingAddressId?: InputMaybe<TCtpRemoveCustomerShippingAddressId>;
  setAddressCustomField?: InputMaybe<TCtpSetCustomerAddressCustomField>;
  setAddressCustomType?: InputMaybe<TCtpSetCustomerAddressCustomType>;
  setCompanyName?: InputMaybe<TCtpSetCustomerCompanyName>;
  setCustomField?: InputMaybe<TCtpSetCustomerCustomField>;
  setCustomType?: InputMaybe<TCtpSetCustomerCustomType>;
  setDateOfBirth?: InputMaybe<TCtpSetCustomerDateOfBirth>;
  setDefaultBillingAddress?: InputMaybe<TCtpSetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: InputMaybe<TCtpSetCustomerDefaultShippingAddress>;
  setFirstName?: InputMaybe<TCtpSetCustomerFirstName>;
  setLastName?: InputMaybe<TCtpSetCustomerLastName>;
  setLocale?: InputMaybe<TCtpSetCustomerLocale>;
  setMiddleName?: InputMaybe<TCtpSetCustomerMiddleName>;
  setSalutation?: InputMaybe<TCtpSetCustomerSalutation>;
  setTitle?: InputMaybe<TCtpSetCustomerTitle>;
  setVatId?: InputMaybe<TCtpSetCustomerVatId>;
};

export type TCtpMyLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpLineItemRecurrenceInfoInputDraft>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * My Payments endpoint provides access to payments scoped to a specific user.
 * [documentation](https://docs.commercetools.com/api/projects/me-payments#mypayment)
 */
export type TCtpMyPayment = {
  __typename?: 'MyPayment';
  amountPlanned: TCtpMoney;
  anonymousId?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customer?: Maybe<TCtpCustomer>;
  customerRef?: Maybe<TCtpReference>;
  id: Scalars['String']['output'];
  paymentMethodInfo: TCtpPaymentMethodInfo;
  transactions: Array<TCtpTransaction>;
  version: Scalars['Long']['output'];
};

export type TCtpMyPaymentDraft = {
  amountPlanned: TCtpMoneyInput;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  paymentMethodInfo?: InputMaybe<TCtpPaymentMethodInfoInput>;
  transaction?: InputMaybe<TCtpMyTransactionDraft>;
};

export type TCtpMyPaymentQueryResult = {
  __typename?: 'MyPaymentQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpMyPayment>;
  total: Scalars['Long']['output'];
};

export type TCtpMyPaymentUpdateAction = {
  addTransaction?: InputMaybe<TCtpAddMyPaymentTransaction>;
  changeAmountPlanned?: InputMaybe<TCtpChangePaymentAmountPlanned>;
  setCustomField?: InputMaybe<TCtpSetPaymentCustomField>;
  setMethodInfoInterface?: InputMaybe<TCtpSetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: InputMaybe<TCtpSetPaymentMethodInfoMethod>;
  setMethodInfoName?: InputMaybe<TCtpSetPaymentMethodInfoName>;
};

export type TCtpMyQuoteRequestDraft = {
  cartId: Scalars['String']['input'];
  cartVersion: Scalars['Long']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpMyQuoteRequestUpdateAction = {
  cancelQuoteRequest?: InputMaybe<TCtpCancelQuoteRequest>;
  setCustomField?: InputMaybe<TCtpSetMyQuoteRequestCustomField>;
  setCustomType?: InputMaybe<TCtpSetMyQuoteRequestCustomType>;
};

export enum TCtpMyQuoteState {
  Accepted = 'Accepted',
  Declined = 'Declined',
}

export type TCtpMyQuoteUpdateAction = {
  changeMyQuoteState?: InputMaybe<TCtpChangeMyQuoteMyQuoteState>;
  requestQuoteRenegotiation?: InputMaybe<TCtpRequestQuoteRenegotiation>;
  setCustomField?: InputMaybe<TCtpSetQuoteCustomField>;
  setCustomType?: InputMaybe<TCtpSetQuoteCustomType>;
};

export type TCtpMyShoppingListDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  lineItems?: InputMaybe<Array<TCtpShoppingListLineItemDraft>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  textLineItems?: InputMaybe<Array<TCtpTextLineItemDraft>>;
};

export type TCtpMyShoppingListUpdateAction = {
  addLineItem?: InputMaybe<TCtpAddShoppingListLineItem>;
  addTextLineItem?: InputMaybe<TCtpAddShoppingListTextLineItem>;
  changeLineItemQuantity?: InputMaybe<TCtpChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<TCtpChangeShoppingListLineItemsOrder>;
  changeName?: InputMaybe<TCtpChangeShoppingListName>;
  changeTextLineItemName?: InputMaybe<TCtpChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: InputMaybe<TCtpChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: InputMaybe<TCtpChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: InputMaybe<TCtpRemoveShoppingListLineItem>;
  removeTextLineItem?: InputMaybe<TCtpRemoveShoppingListTextLineItem>;
  setCustomField?: InputMaybe<TCtpSetShoppingListCustomField>;
  setCustomType?: InputMaybe<TCtpSetShoppingListCustomType>;
  setDeleteDaysAfterLastModification?: InputMaybe<TCtpSetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: InputMaybe<TCtpSetShoppingListDescription>;
  setLineItemCustomField?: InputMaybe<TCtpSetShoppingListLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<TCtpSetShoppingListLineItemCustomType>;
  setStore?: InputMaybe<TCtpSetShoppingListStore>;
  setTextLineItemCustomField?: InputMaybe<TCtpSetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: InputMaybe<TCtpSetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: InputMaybe<TCtpSetShoppingListTextLineItemDescription>;
};

export type TCtpMyTransactionDraft = {
  amount: TCtpMoneyInput;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  interactionId?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: TCtpTransactionType;
};

export type TCtpNestedAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'NestedAttributeDefinitionType';
  name: Scalars['String']['output'];
  typeRef: TCtpReference;
};

export type TCtpNotProcessed = TCtpOrderEditResult & {
  __typename?: 'NotProcessed';
  type: Scalars['String']['output'];
};

export type TCtpNotificationFormat = {
  type: Scalars['String']['output'];
};

export type TCtpNumberAttribute = TCtpAttribute & {
  __typename?: 'NumberAttribute';
  name: Scalars['String']['output'];
  value: Scalars['BigDecimal']['output'];
};

export type TCtpNumberAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'NumberAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type TCtpNumberField = TCtpCustomField & {
  __typename?: 'NumberField';
  name: Scalars['String']['output'];
  value: Scalars['BigDecimal']['output'];
};

export type TCtpNumberType = TCtpFieldType & {
  __typename?: 'NumberType';
  name: Scalars['String']['output'];
};

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type TCtpOrder = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Order';
    anonymousId?: Maybe<Scalars['String']['output']>;
    billingAddress?: Maybe<TCtpAddress>;
    businessUnit?: Maybe<TCtpBusinessUnit>;
    businessUnitRef?: Maybe<TCtpKeyReference>;
    cart?: Maybe<TCtpCart>;
    cartRef?: Maybe<TCtpReference>;
    completedAt?: Maybe<Scalars['DateTime']['output']>;
    country?: Maybe<Scalars['Country']['output']>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    customLineItems: Array<TCtpCustomLineItem>;
    customer?: Maybe<TCtpCustomer>;
    customerEmail?: Maybe<Scalars['String']['output']>;
    customerGroup?: Maybe<TCtpCustomerGroup>;
    customerGroupRef?: Maybe<TCtpReference>;
    customerId?: Maybe<Scalars['String']['output']>;
    directDiscounts: Array<TCtpDirectDiscount>;
    discountCodes: Array<TCtpDiscountCodeInfo>;
    discountOnTotalPrice?: Maybe<TCtpDiscountOnTotalPrice>;
    discountTypeCombination?: Maybe<TCtpBestDeal | TCtpStacking>;
    id: Scalars['String']['output'];
    inventoryMode: TCtpInventoryMode;
    itemShippingAddresses: Array<TCtpAddress>;
    /** @deprecated An internal field that should not be used in customer logic */
    lastMessageSequenceNumber: Scalars['Long']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    lineItems: Array<TCtpLineItem>;
    locale?: Maybe<Scalars['Locale']['output']>;
    orderNumber?: Maybe<Scalars['String']['output']>;
    orderState: TCtpOrderState;
    origin: TCtpCartOrigin;
    paymentInfo?: Maybe<TCtpPaymentInfo>;
    paymentState?: Maybe<TCtpPaymentState>;
    placement?: Maybe<TCtpPlacement>;
    purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
    quote?: Maybe<TCtpQuote>;
    quoteRef?: Maybe<TCtpReference>;
    /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
    recurringOrder?: Maybe<TCtpRecurringOrder>;
    /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
    recurringOrderRef?: Maybe<TCtpReference>;
    refusedGifts: Array<TCtpCartDiscount>;
    refusedGiftsRefs: Array<TCtpReference>;
    returnInfo: Array<TCtpReturnInfo>;
    shipmentState?: Maybe<TCtpShipmentState>;
    shipping: Array<TCtpShipping>;
    shippingAddress?: Maybe<TCtpAddress>;
    shippingCustomFields?: Maybe<TCtpCustomFieldsType>;
    shippingInfo?: Maybe<TCtpShippingInfo>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    shippingMode: TCtpShippingMode;
    shippingRateInput?: Maybe<
      TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
    >;
    state?: Maybe<TCtpState>;
    stateRef?: Maybe<TCtpReference>;
    store?: Maybe<TCtpStore>;
    storeRef?: Maybe<TCtpKeyReference>;
    syncInfo: Array<TCtpSyncInfo>;
    taxCalculationMode: TCtpTaxCalculationMode;
    taxMode: TCtpTaxMode;
    taxRoundingMode: TCtpRoundingMode;
    taxedPrice?: Maybe<TCtpTaxedPrice>;
    taxedShippingPrice?: Maybe<TCtpTaxedPrice>;
    totalPrice: TCtpMoney;
    version: Scalars['Long']['output'];
  };

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type TCtpOrder_LineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpOrderBillingAddressSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderBillingAddressSet';
    address?: Maybe<TCtpAddress>;
    oldAddress?: Maybe<TCtpAddress>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderBusinessUnitSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderBusinessUnitSet';
    businessUnit?: Maybe<Scalars['KeyReferenceInput']['output']>;
    oldBusinessUnit?: Maybe<Scalars['KeyReferenceInput']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCartCommand = {
  cart?: InputMaybe<TCtpResourceIdentifierInput>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderState?: InputMaybe<TCtpOrderState>;
  paymentState?: InputMaybe<TCtpPaymentState>;
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  shipmentState?: InputMaybe<TCtpShipmentState>;
  state?: InputMaybe<TCtpResourceIdentifierInput>;
  version: Scalars['Long']['input'];
};

export type TCtpOrderCreated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCreated';
    order: TCtpOrder;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCreatedFromRecurringOrder = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCreatedFromRecurringOrder';
    orderRef: TCtpReference;
    recurringOrderRef: TCtpReference;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomFieldAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomFieldAdded';
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value: Scalars['Json']['output'];
  };

export type TCtpOrderCustomFieldChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomFieldChanged';
    name: Scalars['String']['output'];
    previousValue?: Maybe<Scalars['Json']['output']>;
    type: Scalars['String']['output'];
    value: Scalars['Json']['output'];
  };

export type TCtpOrderCustomFieldRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomFieldRemoved';
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomLineItemAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemAdded';
    customLineItem: TCtpCustomLineItem;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomLineItemDiscountSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemDiscountSet';
    customLineItemId: Scalars['String']['output'];
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
    taxedPrice?: Maybe<TCtpTaxedItemPrice>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomLineItemQuantityChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemQuantityChanged';
    customLineItemId: Scalars['String']['output'];
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    oldQuantity?: Maybe<Scalars['Long']['output']>;
    quantity: Scalars['Long']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomLineItemRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemRemoved';
    customLineItem?: Maybe<TCtpCustomLineItem>;
    customLineItemId: Scalars['String']['output'];
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomTypeRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomTypeRemoved';
    previousTypeId?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomTypeSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomTypeSet';
    customFields: TCtpCustomFieldsType;
    previousTypeId?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomerEmailSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomerEmailSet';
    email?: Maybe<Scalars['String']['output']>;
    oldEmail?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomerGroupSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomerGroupSet';
    customerGroup?: Maybe<TCtpCustomerGroup>;
    customerGroupRef?: Maybe<TCtpReference>;
    oldCustomerGroup?: Maybe<TCtpCustomerGroup>;
    oldCustomerGroupRef?: Maybe<TCtpReference>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderCustomerSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomerSet';
    customer?: Maybe<TCtpCustomer>;
    customerGroup?: Maybe<TCtpCustomerGroup>;
    customerGroupRef?: Maybe<TCtpReference>;
    customerRef?: Maybe<TCtpReference>;
    oldCustomer?: Maybe<TCtpCustomer>;
    oldCustomerGroup?: Maybe<TCtpCustomerGroup>;
    oldCustomerGroupRef?: Maybe<TCtpReference>;
    oldCustomerRef?: Maybe<TCtpReference>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderDeleted = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDeleted';
    order?: Maybe<TCtpOrder>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderDiscountCodeAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDiscountCodeAdded';
    discountCode?: Maybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    type: Scalars['String']['output'];
  };

export type TCtpOrderDiscountCodeRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDiscountCodeRemoved';
    discountCode?: Maybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    type: Scalars['String']['output'];
  };

export type TCtpOrderDiscountCodeStateSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDiscountCodeStateSet';
    discountCode?: Maybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    oldState?: Maybe<TCtpDiscountCodeState>;
    state: TCtpDiscountCodeState;
    type: Scalars['String']['output'];
  };

export type TCtpOrderEdit = TCtpVersioned & {
  __typename?: 'OrderEdit';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  resource?: Maybe<TCtpOrder>;
  resourceRef: TCtpReference;
  result:
    | TCtpApplied
    | TCtpNotProcessed
    | TCtpPreviewFailure
    | TCtpPreviewSuccess;
  stagedActions: Array<
    | TCtpAddStagedOrderCustomLineItemOutput
    | TCtpAddStagedOrderDeliveryOutput
    | TCtpAddStagedOrderDiscountCodeOutput
    | TCtpAddStagedOrderItemShippingAddressOutput
    | TCtpAddStagedOrderLineItemOutput
    | TCtpAddStagedOrderParcelToDeliveryOutput
    | TCtpAddStagedOrderPaymentOutput
    | TCtpAddStagedOrderReturnInfoOutput
    | TCtpAddStagedOrderShoppingListOutput
    | TCtpChangeStagedOrderCustomLineItemMoneyOutput
    | TCtpChangeStagedOrderCustomLineItemQuantityOutput
    | TCtpChangeStagedOrderLineItemQuantityOutput
    | TCtpChangeStagedOrderOrderStateOutput
    | TCtpChangeStagedOrderPaymentStateOutput
    | TCtpChangeStagedOrderShipmentStateOutput
    | TCtpChangeStagedOrderTaxCalculationModeOutput
    | TCtpChangeStagedOrderTaxModeOutput
    | TCtpChangeStagedOrderTaxRoundingModeOutput
    | TCtpImportStagedOrderCustomLineItemStateOutput
    | TCtpImportStagedOrderLineItemStateOutput
    | TCtpRemoveStagedOrderCustomLineItemOutput
    | TCtpRemoveStagedOrderDeliveryOutput
    | TCtpRemoveStagedOrderDiscountCodeOutput
    | TCtpRemoveStagedOrderItemShippingAddressOutput
    | TCtpRemoveStagedOrderLineItemOutput
    | TCtpRemoveStagedOrderParcelFromDeliveryOutput
    | TCtpRemoveStagedOrderPaymentOutput
    | TCtpSetStagedOrderBillingAddressCustomFieldOutput
    | TCtpSetStagedOrderBillingAddressCustomTypeOutput
    | TCtpSetStagedOrderBillingAddressOutput
    | TCtpSetStagedOrderBusinessUnitOutput
    | TCtpSetStagedOrderCountryOutput
    | TCtpSetStagedOrderCustomFieldOutput
    | TCtpSetStagedOrderCustomLineItemCustomFieldOutput
    | TCtpSetStagedOrderCustomLineItemCustomTypeOutput
    | TCtpSetStagedOrderCustomLineItemShippingDetailsOutput
    | TCtpSetStagedOrderCustomLineItemTaxAmountOutput
    | TCtpSetStagedOrderCustomLineItemTaxRateOutput
    | TCtpSetStagedOrderCustomShippingMethodOutput
    | TCtpSetStagedOrderCustomTypeOutput
    | TCtpSetStagedOrderCustomerEmailOutput
    | TCtpSetStagedOrderCustomerGroupOutput
    | TCtpSetStagedOrderCustomerIdOutput
    | TCtpSetStagedOrderDeliveryAddressCustomFieldOutput
    | TCtpSetStagedOrderDeliveryAddressCustomTypeOutput
    | TCtpSetStagedOrderDeliveryAddressOutput
    | TCtpSetStagedOrderDeliveryCustomFieldOutput
    | TCtpSetStagedOrderDeliveryCustomTypeOutput
    | TCtpSetStagedOrderDeliveryItemsOutput
    | TCtpSetStagedOrderDirectDiscountsOutput
    | TCtpSetStagedOrderItemShippingAddressCustomFieldOutput
    | TCtpSetStagedOrderItemShippingAddressCustomTypeOutput
    | TCtpSetStagedOrderLineItemCustomFieldOutput
    | TCtpSetStagedOrderLineItemCustomTypeOutput
    | TCtpSetStagedOrderLineItemDistributionChannelOutput
    | TCtpSetStagedOrderLineItemPriceOutput
    | TCtpSetStagedOrderLineItemShippingDetailsOutput
    | TCtpSetStagedOrderLineItemTaxAmountOutput
    | TCtpSetStagedOrderLineItemTaxRateOutput
    | TCtpSetStagedOrderLineItemTotalPriceOutput
    | TCtpSetStagedOrderLocaleOutput
    | TCtpSetStagedOrderOrderNumberOutput
    | TCtpSetStagedOrderOrderTotalTaxOutput
    | TCtpSetStagedOrderParcelCustomFieldOutput
    | TCtpSetStagedOrderParcelCustomTypeOutput
    | TCtpSetStagedOrderParcelItemsOutput
    | TCtpSetStagedOrderParcelMeasurementsOutput
    | TCtpSetStagedOrderParcelTrackingDataOutput
    | TCtpSetStagedOrderPurchaseOrderNumberOutput
    | TCtpSetStagedOrderReturnInfoOutput
    | TCtpSetStagedOrderReturnItemCustomFieldOutput
    | TCtpSetStagedOrderReturnItemCustomTypeOutput
    | TCtpSetStagedOrderReturnPaymentStateOutput
    | TCtpSetStagedOrderReturnShipmentStateOutput
    | TCtpSetStagedOrderShippingAddressAndCustomShippingMethodOutput
    | TCtpSetStagedOrderShippingAddressAndShippingMethodOutput
    | TCtpSetStagedOrderShippingAddressCustomFieldOutput
    | TCtpSetStagedOrderShippingAddressCustomTypeOutput
    | TCtpSetStagedOrderShippingAddressOutput
    | TCtpSetStagedOrderShippingCustomFieldOutput
    | TCtpSetStagedOrderShippingCustomTypeOutput
    | TCtpSetStagedOrderShippingMethodOutput
    | TCtpSetStagedOrderShippingMethodTaxAmountOutput
    | TCtpSetStagedOrderShippingMethodTaxRateOutput
    | TCtpSetStagedOrderShippingRateInputOutput
    | TCtpSetStagedOrderStoreOutput
    | TCtpTransitionStagedOrderCustomLineItemStateOutput
    | TCtpTransitionStagedOrderLineItemStateOutput
    | TCtpTransitionStagedOrderStateOutput
    | TCtpUpdateStagedOrderItemShippingAddressOutput
    | TCtpUpdateStagedOrderSyncInfoOutput
  >;
  version: Scalars['Long']['output'];
};

export type TCtpOrderEditApplied = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderEditApplied';
    edit?: Maybe<TCtpOrderEdit>;
    editRef: TCtpReference;
    result: TCtpApplied;
    type: Scalars['String']['output'];
  };

export type TCtpOrderEditDraft = {
  comment?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  resource: TCtpReferenceInput;
  stagedActions: Array<TCtpStagedOrderUpdateAction>;
};

export type TCtpOrderEditLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'OrderEditLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpOrderEditLimitsProjection = {
  __typename?: 'OrderEditLimitsProjection';
  total: TCtpOrderEditLimitWithCurrent;
};

export type TCtpOrderEditQueryResult = {
  __typename?: 'OrderEditQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpOrderEdit>;
  total: Scalars['Long']['output'];
};

export type TCtpOrderEditResult = {
  type: Scalars['String']['output'];
};

export type TCtpOrderEditUpdateAction = {
  addStagedAction?: InputMaybe<TCtpAddOrderEditStagedAction>;
  setComment?: InputMaybe<TCtpSetOrderEditComment>;
  setCustomField?: InputMaybe<TCtpSetOrderEditCustomField>;
  setCustomType?: InputMaybe<TCtpSetOrderEditCustomType>;
  setKey?: InputMaybe<TCtpSetOrderEditKey>;
  setStagedActions?: InputMaybe<TCtpSetOrderEditStagedActions>;
};

export type TCtpOrderExcerpt = {
  __typename?: 'OrderExcerpt';
  taxedPrice?: Maybe<TCtpTaxedPrice>;
  totalPrice: TCtpMoney;
  version?: Maybe<Scalars['Long']['output']>;
};

export type TCtpOrderImported = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderImported';
    order: TCtpOrder;
    type: Scalars['String']['output'];
  };

export type TCtpOrderLineItemAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemAdded';
    addedQuantity: Scalars['Long']['output'];
    lineItem: TCtpLineItem;
    type: Scalars['String']['output'];
  };

export type TCtpOrderLineItemDiscountSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemDiscountSet';
    discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
    lineItemId: Scalars['String']['output'];
    lineItemKey?: Maybe<Scalars['String']['output']>;
    taxedPrice?: Maybe<TCtpTaxedItemPrice>;
    taxedPricePortions: Array<TCtpMethodTaxedPrice>;
    totalPrice: TCtpMoney;
    type: Scalars['String']['output'];
  };

export type TCtpOrderLineItemDistributionChannelSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemDistributionChannelSet';
    distributionChannel?: Maybe<TCtpChannel>;
    distributionChannelRef?: Maybe<TCtpReference>;
    lineItemId: Scalars['String']['output'];
    lineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderLineItemRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemRemoved';
    lineItemId: Scalars['String']['output'];
    lineItemKey?: Maybe<Scalars['String']['output']>;
    newPrice?: Maybe<TCtpProductPrice>;
    newQuantity: Scalars['Long']['output'];
    newShippingDetails?: Maybe<TCtpItemShippingDetails>;
    newState: Scalars['Set']['output'];
    newTaxedPrice?: Maybe<TCtpTaxedItemPrice>;
    newTotalPrice: TCtpMoney;
    removedQuantity: Scalars['Long']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpOrderMessagePayload = {
  type: Scalars['String']['output'];
};

export type TCtpOrderMyCartCommand = {
  id: Scalars['String']['input'];
  version: Scalars['Long']['input'];
};

export type TCtpOrderMyQuoteCommand = {
  id: Scalars['String']['input'];
  quoteStateToAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['Long']['input'];
};

export type TCtpOrderPaymentAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderPaymentAdded';
    paymentRef: TCtpReference;
    type: Scalars['String']['output'];
  };

export type TCtpOrderPaymentRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderPaymentRemoved';
    paymentRef: TCtpReference;
    removedPaymentInfo: Scalars['Boolean']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpOrderPaymentStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderPaymentStateChanged';
    oldPaymentState?: Maybe<TCtpPaymentState>;
    paymentState: TCtpPaymentState;
    type: Scalars['String']['output'];
  };

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type TCtpOrderQueryInterface = {
  order?: Maybe<TCtpOrder>;
  orders: TCtpOrderQueryResult;
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type TCtpOrderQueryInterface_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type TCtpOrderQueryInterface_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpOrderQueryResult = {
  __typename?: 'OrderQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpOrder>;
  total: Scalars['Long']['output'];
};

export type TCtpOrderQuoteCommand = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  orderState?: InputMaybe<TCtpOrderState>;
  paymentState?: InputMaybe<TCtpPaymentState>;
  quote?: InputMaybe<TCtpResourceIdentifierInput>;
  quoteStateToAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  shipmentState?: InputMaybe<TCtpShipmentState>;
  state?: InputMaybe<TCtpResourceIdentifierInput>;
  version: Scalars['Long']['input'];
};

export type TCtpOrderReturnShipmentStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderReturnShipmentStateChanged';
    returnItemId: Scalars['String']['output'];
    returnShipmentState: TCtpReturnShipmentState;
    type: Scalars['String']['output'];
  };

export type TCtpOrderSearchConfiguration = {
  __typename?: 'OrderSearchConfiguration';
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status: TCtpOrderSearchStatus;
};

export enum TCtpOrderSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpOrderShipmentStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShipmentStateChanged';
    oldShipmentState?: Maybe<TCtpShipmentState>;
    shipmentState: TCtpShipmentState;
    type: Scalars['String']['output'];
  };

export type TCtpOrderShippingAddressSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingAddressSet';
    address?: Maybe<TCtpAddress>;
    oldAddress?: Maybe<TCtpAddress>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderShippingContainerSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingContainerSet';
    shippingContainer?: Maybe<TCtpShippingContainer>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderShippingInfoSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingInfoSet';
    oldShippingInfo?: Maybe<TCtpShippingInfo>;
    shippingInfo?: Maybe<TCtpShippingInfo>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderShippingRateInputSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingRateInputSet';
    oldShippingRateInput?: Maybe<
      TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
    >;
    shippingRateInput?: Maybe<
      TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
    >;
    type: Scalars['String']['output'];
  };

export type TCtpOrderShippingUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingUpdated';
    current: TCtpShipping;
    type: Scalars['String']['output'];
    updated: TCtpShipping;
  };

export enum TCtpOrderState {
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Confirmed = 'Confirmed',
  Open = 'Open',
}

export type TCtpOrderStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderStateChanged';
    oldOrderState?: Maybe<TCtpOrderState>;
    orderId: Scalars['String']['output'];
    orderState: TCtpOrderState;
    type: Scalars['String']['output'];
  };

export type TCtpOrderStateTransition = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderStateTransition';
    force: Scalars['Boolean']['output'];
    oldState?: Maybe<TCtpState>;
    oldStateRef?: Maybe<TCtpReference>;
    state?: Maybe<TCtpState>;
    stateRef: TCtpReference;
    type: Scalars['String']['output'];
  };

export type TCtpOrderStoreSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderStoreSet';
    oldStore?: Maybe<TCtpStore>;
    oldStoreRef?: Maybe<TCtpKeyReference>;
    store?: Maybe<TCtpStore>;
    storeRef?: Maybe<TCtpKeyReference>;
    type: Scalars['String']['output'];
  };

export type TCtpOrderUpdateAction = {
  addDelivery?: InputMaybe<TCtpAddOrderDelivery>;
  addItemShippingAddress?: InputMaybe<TCtpAddOrderItemShippingAddress>;
  addParcelToDelivery?: InputMaybe<TCtpAddOrderParcelToDelivery>;
  addPayment?: InputMaybe<TCtpAddOrderPayment>;
  addReturnInfo?: InputMaybe<TCtpAddOrderReturnInfo>;
  changeOrderState?: InputMaybe<TCtpChangeOrderState>;
  changePaymentState?: InputMaybe<TCtpChangeOrderPaymentState>;
  changeShipmentState?: InputMaybe<TCtpChangeOrderShipmentState>;
  importCustomLineItemState?: InputMaybe<TCtpImportOrderCustomLineItemState>;
  importLineItemState?: InputMaybe<TCtpImportOrderLineItemState>;
  removeDelivery?: InputMaybe<TCtpRemoveOrderDelivery>;
  removeItemShippingAddress?: InputMaybe<TCtpRemoveOrderItemShippingAddress>;
  removeParcelFromDelivery?: InputMaybe<TCtpRemoveOrderParcelFromDelivery>;
  removePayment?: InputMaybe<TCtpRemoveOrderPayment>;
  setBillingAddress?: InputMaybe<TCtpSetOrderBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<TCtpSetOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<TCtpSetOrderBillingAddressCustomType>;
  setBusinessUnit?: InputMaybe<TCtpSetOrderBusinessUnit>;
  setCustomField?: InputMaybe<TCtpSetOrderCustomField>;
  setCustomLineItemCustomField?: InputMaybe<TCtpSetOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<TCtpSetOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<TCtpSetOrderCustomLineItemShippingDetails>;
  setCustomType?: InputMaybe<TCtpSetOrderCustomType>;
  setCustomerEmail?: InputMaybe<TCtpSetOrderCustomerEmail>;
  setCustomerId?: InputMaybe<TCtpSetOrderCustomerId>;
  setDeliveryAddress?: InputMaybe<TCtpSetOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: InputMaybe<TCtpSetOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: InputMaybe<TCtpSetOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: InputMaybe<TCtpSetOrderDeliveryCustomField>;
  setDeliveryCustomType?: InputMaybe<TCtpSetOrderDeliveryCustomType>;
  setDeliveryItems?: InputMaybe<TCtpSetOrderDeliveryItems>;
  setItemShippingAddressCustomField?: InputMaybe<TCtpSetOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<TCtpSetOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<TCtpSetOrderLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<TCtpSetOrderLineItemCustomType>;
  setLineItemShippingDetails?: InputMaybe<TCtpSetOrderLineItemShippingDetails>;
  setLocale?: InputMaybe<TCtpSetOrderLocale>;
  setOrderNumber?: InputMaybe<TCtpSetOrderNumber>;
  setParcelCustomField?: InputMaybe<TCtpSetOrderParcelCustomField>;
  setParcelCustomType?: InputMaybe<TCtpSetOrderParcelCustomType>;
  setParcelItems?: InputMaybe<TCtpSetOrderParcelItems>;
  setParcelMeasurements?: InputMaybe<TCtpSetOrderParcelMeasurements>;
  setParcelTrackingData?: InputMaybe<TCtpSetOrderParcelTrackingData>;
  setPurchaseOrderNumber?: InputMaybe<TCtpSetOrderPurchaseOrderNumber>;
  setReturnInfo?: InputMaybe<TCtpSetOrderReturnInfo>;
  setReturnItemCustomField?: InputMaybe<TCtpSetOrderReturnItemCustomField>;
  setReturnItemCustomType?: InputMaybe<TCtpSetOrderReturnItemCustomType>;
  setReturnPaymentState?: InputMaybe<TCtpSetOrderReturnPaymentState>;
  setReturnShipmentState?: InputMaybe<TCtpSetOrderReturnShipmentState>;
  setShippingAddress?: InputMaybe<TCtpSetOrderShippingAddress>;
  setShippingAddressCustomField?: InputMaybe<TCtpSetOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<TCtpSetOrderShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<TCtpSetOrderShippingCustomField>;
  setShippingCustomType?: InputMaybe<TCtpSetOrderShippingCustomType>;
  setStore?: InputMaybe<TCtpSetOrderStore>;
  transitionCustomLineItemState?: InputMaybe<TCtpTransitionOrderCustomLineItemState>;
  transitionLineItemState?: InputMaybe<TCtpTransitionOrderLineItemState>;
  transitionState?: InputMaybe<TCtpTransitionOrderState>;
  updateItemShippingAddress?: InputMaybe<TCtpUpdateOrderItemShippingAddress>;
  updateSyncInfo?: InputMaybe<TCtpUpdateOrderSyncInfo>;
};

export type TCtpParcel = {
  __typename?: 'Parcel';
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  items: Array<TCtpDeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<TCtpParcelMeasurements>;
  trackingData?: Maybe<TCtpTrackingData>;
};

export type TCtpParcelAddedToDelivery = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelAddedToDelivery';
    delivery: TCtpDelivery;
    parcel: TCtpParcel;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpParcelData = {
  __typename?: 'ParcelData';
  custom?: Maybe<TCtpCustomFieldsCommand>;
  items: Array<TCtpDeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<TCtpParcelMeasurements>;
  trackingData?: Maybe<TCtpTrackingData>;
};

export type TCtpParcelDataDraftType = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  items?: InputMaybe<Array<TCtpDeliveryItemDraftType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<TCtpParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpParcelDraft = {
  createdAt: Scalars['DateTime']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  id: Scalars['String']['input'];
  items?: InputMaybe<Array<TCtpDeliveryItemDraftType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<TCtpParcelMeasurementsDraftType>;
  trackingData?: InputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpParcelItemsUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelItemsUpdated';
    deliveryId: Scalars['String']['output'];
    items: Array<TCtpDeliveryItem>;
    oldItems: Array<TCtpDeliveryItem>;
    parcelId: Scalars['String']['output'];
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpParcelMeasurements = {
  __typename?: 'ParcelMeasurements';
  heightInMillimeter?: Maybe<Scalars['Int']['output']>;
  lengthInMillimeter?: Maybe<Scalars['Int']['output']>;
  weightInGram?: Maybe<Scalars['Int']['output']>;
  widthInMillimeter?: Maybe<Scalars['Int']['output']>;
};

export type TCtpParcelMeasurementsDraftType = {
  heightInMillimeter?: InputMaybe<Scalars['Int']['input']>;
  lengthInMillimeter?: InputMaybe<Scalars['Int']['input']>;
  weightInGram?: InputMaybe<Scalars['Int']['input']>;
  widthInMillimeter?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpParcelMeasurementsUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelMeasurementsUpdated';
    deliveryId: Scalars['String']['output'];
    measurements?: Maybe<TCtpParcelMeasurements>;
    parcelId: Scalars['String']['output'];
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpParcelRemovedFromDelivery = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelRemovedFromDelivery';
    deliveryId: Scalars['String']['output'];
    parcel: TCtpParcel;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpParcelTrackingDataUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelTrackingDataUpdated';
    deliveryId: Scalars['String']['output'];
    parcelId: Scalars['String']['output'];
    shippingKey?: Maybe<Scalars['String']['output']>;
    trackingData?: Maybe<TCtpTrackingData>;
    type: Scalars['String']['output'];
  };

export type TCtpPatternComponent = {
  type: Scalars['String']['output'];
};

export type TCtpPatternComponentInput = {
  CountOnCustomLineItemUnits?: InputMaybe<TCtpCountOnCustomLineItemUnitsInput>;
  CountOnLineItemUnits?: InputMaybe<TCtpCountOnLineItemUnitsInput>;
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type TCtpPayment = TCtpVersioned & {
  __typename?: 'Payment';
  amountPlanned: TCtpMoney;
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customer?: Maybe<TCtpCustomer>;
  customerRef?: Maybe<TCtpReference>;
  id: Scalars['String']['output'];
  interfaceId?: Maybe<Scalars['String']['output']>;
  interfaceInteractionsRaw: TCtpInterfaceInteractionsRawResult;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  paymentMethodInfo: TCtpPaymentMethodInfo;
  paymentStatus: TCtpPaymentStatus;
  transactions: Array<TCtpTransaction>;
  version: Scalars['Long']['output'];
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type TCtpPayment_InterfaceInteractionsRawArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpPaymentCreated = TCtpMessagePayload & {
  __typename?: 'PaymentCreated';
  payment: TCtpPayment;
  type: Scalars['String']['output'];
};

export type TCtpPaymentDraft = {
  amountPlanned: TCtpMoneyInput;
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customer?: InputMaybe<TCtpResourceIdentifierInput>;
  interfaceId?: InputMaybe<Scalars['String']['input']>;
  interfaceInteractions?: InputMaybe<Array<TCtpCustomFieldsDraft>>;
  key?: InputMaybe<Scalars['String']['input']>;
  paymentMethodInfo?: InputMaybe<TCtpPaymentMethodInfoInput>;
  paymentStatus?: InputMaybe<TCtpPaymentStatusInput>;
  transactions?: InputMaybe<Array<TCtpTransactionDraft>>;
};

export type TCtpPaymentInfo = {
  __typename?: 'PaymentInfo';
  paymentRefs: Array<TCtpReference>;
  payments: Array<TCtpPayment>;
};

export type TCtpPaymentInteractionAdded = TCtpMessagePayload & {
  __typename?: 'PaymentInteractionAdded';
  interaction: TCtpCustomFieldsType;
  type: Scalars['String']['output'];
};

export type TCtpPaymentMethodInfo = {
  __typename?: 'PaymentMethodInfo';
  method?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  paymentInterface?: Maybe<Scalars['String']['output']>;
};

export type TCtpPaymentMethodInfo_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpPaymentMethodInfoInput = {
  method?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  paymentInterface?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpPaymentQueryResult = {
  __typename?: 'PaymentQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpPayment>;
  total: Scalars['Long']['output'];
};

export enum TCtpPaymentState {
  BalanceDue = 'BalanceDue',
  CreditOwed = 'CreditOwed',
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending',
}

export type TCtpPaymentStatus = {
  __typename?: 'PaymentStatus';
  interfaceCode?: Maybe<Scalars['String']['output']>;
  interfaceText?: Maybe<Scalars['String']['output']>;
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
};

export type TCtpPaymentStatusInput = {
  interfaceCode?: InputMaybe<Scalars['String']['input']>;
  interfaceText?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpPaymentStatusInterfaceCodeSet = TCtpMessagePayload & {
  __typename?: 'PaymentStatusInterfaceCodeSet';
  interfaceCode?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpPaymentStatusStateTransition = TCtpMessagePayload & {
  __typename?: 'PaymentStatusStateTransition';
  force: Scalars['Boolean']['output'];
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpPaymentTransactionAdded = TCtpMessagePayload & {
  __typename?: 'PaymentTransactionAdded';
  transaction: TCtpTransaction;
  type: Scalars['String']['output'];
};

export type TCtpPaymentTransactionStateChanged = TCtpMessagePayload & {
  __typename?: 'PaymentTransactionStateChanged';
  state: TCtpTransactionState;
  transactionId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpPaymentUpdateAction = {
  addInterfaceInteraction?: InputMaybe<TCtpAddPaymentInterfaceInteraction>;
  addTransaction?: InputMaybe<TCtpAddPaymentTransaction>;
  changeAmountPlanned?: InputMaybe<TCtpChangePaymentAmountPlanned>;
  changeTransactionInteractionId?: InputMaybe<TCtpChangePaymentTransactionInteractionId>;
  changeTransactionState?: InputMaybe<TCtpChangePaymentTransactionState>;
  changeTransactionTimestamp?: InputMaybe<TCtpChangePaymentTransactionTimestamp>;
  setAmountPaid?: InputMaybe<TCtpSetPaymentAmountPaid>;
  setAmountRefunded?: InputMaybe<TCtpSetPaymentAmountRefunded>;
  setAnonymousId?: InputMaybe<TCtpSetPaymentAnonymousId>;
  setAuthorization?: InputMaybe<TCtpSetPaymentAuthorization>;
  setCustomField?: InputMaybe<TCtpSetPaymentCustomField>;
  setCustomType?: InputMaybe<TCtpSetPaymentCustomType>;
  setCustomer?: InputMaybe<TCtpSetPaymentCustomer>;
  setExternalId?: InputMaybe<TCtpSetPaymentExternalId>;
  setInterfaceId?: InputMaybe<TCtpSetPaymentInterfaceId>;
  setKey?: InputMaybe<TCtpSetPaymentKey>;
  setMethodInfoInterface?: InputMaybe<TCtpSetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: InputMaybe<TCtpSetPaymentMethodInfoMethod>;
  setMethodInfoName?: InputMaybe<TCtpSetPaymentMethodInfoName>;
  setStatusInterfaceCode?: InputMaybe<TCtpSetPaymentStatusInterfaceCode>;
  setStatusInterfaceText?: InputMaybe<TCtpSetPaymentStatusInterfaceText>;
  setTransactionCustomField?: InputMaybe<TCtpSetPaymentTransactionCustomField>;
  setTransactionCustomType?: InputMaybe<TCtpSetPaymentTransactionCustomType>;
  transitionState?: InputMaybe<TCtpTransitionPaymentState>;
};

export enum TCtpPermission {
  AcceptMyQuotes = 'AcceptMyQuotes',
  AcceptOthersQuotes = 'AcceptOthersQuotes',
  AddChildUnits = 'AddChildUnits',
  CreateApprovalRules = 'CreateApprovalRules',
  CreateMyCarts = 'CreateMyCarts',
  CreateMyOrdersFromMyCarts = 'CreateMyOrdersFromMyCarts',
  CreateMyOrdersFromMyQuotes = 'CreateMyOrdersFromMyQuotes',
  CreateMyQuoteRequestsFromMyCarts = 'CreateMyQuoteRequestsFromMyCarts',
  CreateMyShoppingLists = 'CreateMyShoppingLists',
  CreateOrdersFromOthersCarts = 'CreateOrdersFromOthersCarts',
  CreateOrdersFromOthersQuotes = 'CreateOrdersFromOthersQuotes',
  CreateOthersCarts = 'CreateOthersCarts',
  CreateOthersShoppingLists = 'CreateOthersShoppingLists',
  CreateQuoteRequestsFromOthersCarts = 'CreateQuoteRequestsFromOthersCarts',
  DeclineMyQuotes = 'DeclineMyQuotes',
  DeclineOthersQuotes = 'DeclineOthersQuotes',
  DeleteMyCarts = 'DeleteMyCarts',
  DeleteMyShoppingLists = 'DeleteMyShoppingLists',
  DeleteOthersCarts = 'DeleteOthersCarts',
  DeleteOthersShoppingLists = 'DeleteOthersShoppingLists',
  ReassignMyQuotes = 'ReassignMyQuotes',
  ReassignOthersQuotes = 'ReassignOthersQuotes',
  RenegotiateMyQuotes = 'RenegotiateMyQuotes',
  RenegotiateOthersQuotes = 'RenegotiateOthersQuotes',
  UpdateApprovalFlows = 'UpdateApprovalFlows',
  UpdateApprovalRules = 'UpdateApprovalRules',
  UpdateAssociates = 'UpdateAssociates',
  UpdateBusinessUnitDetails = 'UpdateBusinessUnitDetails',
  UpdateMyCarts = 'UpdateMyCarts',
  UpdateMyOrders = 'UpdateMyOrders',
  UpdateMyQuoteRequests = 'UpdateMyQuoteRequests',
  UpdateMyShoppingLists = 'UpdateMyShoppingLists',
  UpdateOthersCarts = 'UpdateOthersCarts',
  UpdateOthersOrders = 'UpdateOthersOrders',
  UpdateOthersQuoteRequests = 'UpdateOthersQuoteRequests',
  UpdateOthersShoppingLists = 'UpdateOthersShoppingLists',
  UpdateParentUnit = 'UpdateParentUnit',
  ViewMyCarts = 'ViewMyCarts',
  ViewMyOrders = 'ViewMyOrders',
  ViewMyQuoteRequests = 'ViewMyQuoteRequests',
  ViewMyQuotes = 'ViewMyQuotes',
  ViewMyShoppingLists = 'ViewMyShoppingLists',
  ViewOthersCarts = 'ViewOthersCarts',
  ViewOthersOrders = 'ViewOthersOrders',
  ViewOthersQuoteRequests = 'ViewOthersQuoteRequests',
  ViewOthersQuotes = 'ViewOthersQuotes',
  ViewOthersShoppingLists = 'ViewOthersShoppingLists',
}

export enum TCtpPlacement {
  /** The Order or Cart is placed in-store. */
  InStore = 'InStore',
  /** The Order or Cart is placed online. */
  Online = 'Online',
}

export type TCtpPlainEnumValue = {
  __typename?: 'PlainEnumValue';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type TCtpPlainEnumValueDraft = {
  key: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type TCtpPlainEnumValueResult = {
  __typename?: 'PlainEnumValueResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpPlainEnumValue>;
  total: Scalars['Int']['output'];
};

export type TCtpPlatformFormat = TCtpNotificationFormat & {
  __typename?: 'PlatformFormat';
  type: Scalars['String']['output'];
};

export type TCtpPlatformFormatInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpPoint = TCtpGeometry & {
  __typename?: 'Point';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpPreviewFailure = TCtpOrderEditResult & {
  __typename?: 'PreviewFailure';
  errors: Array<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpPreviewSuccess = TCtpOrderEditResult & {
  __typename?: 'PreviewSuccess';
  messagePayloads: Array<
    | TCtpCustomLineItemStateTransition
    | TCtpDeliveryAdded
    | TCtpDeliveryAddressSet
    | TCtpDeliveryCustomFieldAdded
    | TCtpDeliveryCustomFieldChanged
    | TCtpDeliveryCustomFieldRemoved
    | TCtpDeliveryCustomTypeRemoved
    | TCtpDeliveryCustomTypeSet
    | TCtpDeliveryItemsUpdated
    | TCtpDeliveryRemoved
    | TCtpLineItemStateTransition
    | TCtpOrderBillingAddressSet
    | TCtpOrderBusinessUnitSet
    | TCtpOrderCreated
    | TCtpOrderCreatedFromRecurringOrder
    | TCtpOrderCustomFieldAdded
    | TCtpOrderCustomFieldChanged
    | TCtpOrderCustomFieldRemoved
    | TCtpOrderCustomLineItemAdded
    | TCtpOrderCustomLineItemDiscountSet
    | TCtpOrderCustomLineItemQuantityChanged
    | TCtpOrderCustomLineItemRemoved
    | TCtpOrderCustomTypeRemoved
    | TCtpOrderCustomTypeSet
    | TCtpOrderCustomerEmailSet
    | TCtpOrderCustomerGroupSet
    | TCtpOrderCustomerSet
    | TCtpOrderDeleted
    | TCtpOrderDiscountCodeAdded
    | TCtpOrderDiscountCodeRemoved
    | TCtpOrderDiscountCodeStateSet
    | TCtpOrderEditApplied
    | TCtpOrderImported
    | TCtpOrderLineItemAdded
    | TCtpOrderLineItemDiscountSet
    | TCtpOrderLineItemDistributionChannelSet
    | TCtpOrderLineItemRemoved
    | TCtpOrderPaymentAdded
    | TCtpOrderPaymentRemoved
    | TCtpOrderPaymentStateChanged
    | TCtpOrderReturnShipmentStateChanged
    | TCtpOrderShipmentStateChanged
    | TCtpOrderShippingAddressSet
    | TCtpOrderShippingContainerSet
    | TCtpOrderShippingInfoSet
    | TCtpOrderShippingRateInputSet
    | TCtpOrderShippingUpdated
    | TCtpOrderStateChanged
    | TCtpOrderStateTransition
    | TCtpOrderStoreSet
    | TCtpParcelAddedToDelivery
    | TCtpParcelItemsUpdated
    | TCtpParcelMeasurementsUpdated
    | TCtpParcelRemovedFromDelivery
    | TCtpParcelTrackingDataUpdated
    | TCtpPurchaseOrderNumberSet
    | TCtpReturnInfoAdded
    | TCtpReturnInfoSet
  >;
  preview: TCtpOrder;
  type: Scalars['String']['output'];
};

export type TCtpPriceFunction = {
  __typename?: 'PriceFunction';
  currencyCode: Scalars['Currency']['output'];
  function: Scalars['String']['output'];
};

export type TCtpPriceFunctionDraft = {
  currencyCode: Scalars['Currency']['input'];
  function: Scalars['String']['input'];
};

/**
 * This mode determines which type of Prices the system uses for
 * Product Price Selection as well as for LineItem Price selection
 */
export enum TCtpPriceMode {
  /** The system looks up prices from the `prices` field of the ProductVariant inside a Product. */
  Embedded = 'Embedded',
  /** The system looks up prices from Standalone Prices, stored separately from Products. */
  Standalone = 'Standalone',
}

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpPriceSelectionMode {
  /** Every time a new order is created from this recurring order, we will update to the latest price available */
  Dynamic = 'Dynamic',
  /** The price will stay the same until the recurring order expires or is cancelled */
  Fixed = 'Fixed',
}

export type TCtpPriceSelectorInput = {
  channel?: InputMaybe<TCtpReferenceInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroup?: InputMaybe<TCtpReferenceInput>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpProduct = TCtpReferenceExpandable &
  TCtpReviewTarget &
  TCtpVersioned & {
    __typename?: 'Product';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    masterData: TCtpProductCatalogData;
    priceMode?: Maybe<TCtpPriceMode>;
    productSelectionRefs: TCtpSelectionOfProductQueryResult;
    productType?: Maybe<TCtpProductTypeDefinition>;
    productTypeRef: TCtpReference;
    reviewRatingStatistics?: Maybe<TCtpReviewRatingStatistics>;
    skus: Array<Scalars['String']['output']>;
    state?: Maybe<TCtpState>;
    stateRef?: Maybe<TCtpReference>;
    taxCategory?: Maybe<TCtpTaxCategory>;
    taxCategoryRef?: Maybe<TCtpReference>;
    version: Scalars['Long']['output'];
  };

export type TCtpProduct_ProductSelectionRefsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpProductAddedToCategory = TCtpMessagePayload & {
  __typename?: 'ProductAddedToCategory';
  category: TCtpReferenceId;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TCtpProductAssignment = {
  __typename?: 'ProductAssignment';
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  productSelection?: Maybe<TCtpProductSelection>;
  productSelectionRef: TCtpReference;
  variantExclusion?: Maybe<TCtpProductVariantExclusion>;
  variantSelection?: Maybe<
    | TCtpProductVariantSelectionIncludeAllExcept
    | TCtpProductVariantSelectionIncludeOnly
  >;
};

export type TCtpProductAssignmentQueryResult = {
  __typename?: 'ProductAssignmentQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductAssignment>;
  total: Scalars['Long']['output'];
};

/**
 * An input object used to define a ProductAttribute.
 *
 * The value should be passed in a form of escaped JSON.
 *
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
 */
export type TCtpProductAttributeInput = {
  name: Scalars['String']['input'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
   */
  value: Scalars['String']['input'];
};

export type TCtpProductCatalogData = {
  __typename?: 'ProductCatalogData';
  current?: Maybe<TCtpProductData>;
  hasStagedChanges: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  staged?: Maybe<TCtpProductData>;
};

export type TCtpProductCreated = TCtpMessagePayload & {
  __typename?: 'ProductCreated';
  productProjection: TCtpProductProjectionMessagePayload;
  type: Scalars['String']['output'];
};

export type TCtpProductData = {
  __typename?: 'ProductData';
  /** Fetch all variants, including the master variant in first position. */
  allVariants: Array<TCtpProductVariant>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  attributesRaw: Array<TCtpRawProductAttribute>;
  categories: Array<TCtpCategory>;
  categoriesRef: Array<TCtpReference>;
  categoryOrderHint?: Maybe<Scalars['String']['output']>;
  categoryOrderHints: Array<TCtpCategoryOrderHint>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  masterVariant: TCtpProductVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  searchKeyword?: Maybe<Array<TCtpSearchKeyword>>;
  searchKeywords: Array<TCtpSearchKeywords>;
  skus: Array<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  variant?: Maybe<TCtpProductVariant>;
  variants: Array<TCtpProductVariant>;
};

export type TCtpProductData_AllVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  isOnStock?: InputMaybe<Scalars['Boolean']['input']>;
  onlyMatching?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductData_CategoryOrderHintArgs = {
  categoryId: Scalars['String']['input'];
};

export type TCtpProductData_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductData_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductData_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductData_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductData_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductData_SearchKeywordArgs = {
  locale: Scalars['Locale']['input'];
};

export type TCtpProductData_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductData_VariantArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpProductData_VariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  isOnStock?: InputMaybe<Scalars['Boolean']['input']>;
  onlyMatching?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductDeleted = TCtpMessagePayload & {
  __typename?: 'ProductDeleted';
  currentProjection?: Maybe<TCtpProductProjectionMessagePayload>;
  removedImageUrls: Scalars['Set']['output'];
  type: Scalars['String']['output'];
};

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type TCtpProductDiscount = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ProductDiscount';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    id: Scalars['String']['output'];
    isActive: Scalars['Boolean']['output'];
    isValid: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    predicate: Scalars['String']['output'];
    referenceRefs: Array<TCtpReference>;
    sortOrder: Scalars['String']['output'];
    validFrom?: Maybe<Scalars['DateTime']['output']>;
    validUntil?: Maybe<Scalars['DateTime']['output']>;
    value:
      | TCtpAbsoluteDiscountValue
      | TCtpExternalDiscountValue
      | TCtpRelativeDiscountValue;
    version: Scalars['Long']['output'];
  };

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type TCtpProductDiscount_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type TCtpProductDiscount_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductDiscountDraft = {
  /** Description of the ProductDiscount. */
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  /** Set to `true` to activate the ProductDiscount, set to `false` to deactivate it (even though the `predicate` matches). */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** User-defined unique identifier for the ProductDiscount. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Name of the ProductDiscount. */
  name: Array<TCtpLocalizedStringItemInputType>;
  /** A valid ProductDiscount Predicate. */
  predicate: Scalars['String']['input'];
  /**
   * Decimal value between 0 and 1 (passed as String literal) that defines the order of ProductDiscounts to apply in case more than one is applicable and active. A ProductDiscount with a higher `sortOrder` is prioritized.
   * The value must be **unique** among all ProductDiscounts in the Project.
   */
  sortOrder: Scalars['String']['input'];
  /** Date and time (UTC) from which the Discount is effective. */
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** Date and time (UTC) until which the Discount is effective. */
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  /** Type of Discount and its corresponding value. */
  value: TCtpProductDiscountValueInput;
};

export type TCtpProductDiscountLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ProductDiscountLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpProductDiscountLimitsProjection = {
  __typename?: 'ProductDiscountLimitsProjection';
  totalActive: TCtpProductDiscountLimitWithCurrent;
};

export type TCtpProductDiscountQueryResult = {
  __typename?: 'ProductDiscountQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductDiscount>;
  total: Scalars['Long']['output'];
};

export type TCtpProductDiscountUpdateAction = {
  changeIsActive?: InputMaybe<TCtpChangeProductDiscountIsActive>;
  changeName?: InputMaybe<TCtpChangeProductDiscountName>;
  changePredicate?: InputMaybe<TCtpChangeProductDiscountPredicate>;
  changeSortOrder?: InputMaybe<TCtpChangeProductDiscountSortOrder>;
  changeValue?: InputMaybe<TCtpChangeProductDiscountValue>;
  setDescription?: InputMaybe<TCtpSetProductDiscountDescription>;
  setKey?: InputMaybe<TCtpSetProductDiscountKey>;
  setValidFrom?: InputMaybe<TCtpSetProductDiscountValidFrom>;
  setValidFromAndUntil?: InputMaybe<TCtpSetProductDiscountValidFromAndUntil>;
  setValidUntil?: InputMaybe<TCtpSetProductDiscountValidUntil>;
};

export type TCtpProductDiscountValue = {
  type: Scalars['String']['output'];
};

export type TCtpProductDiscountValueInput = {
  absolute?: InputMaybe<TCtpAbsoluteDiscountValueInput>;
  external?: InputMaybe<TCtpExternalDiscountValueInput>;
  relative?: InputMaybe<TCtpRelativeDiscountValueInput>;
};

export type TCtpProductDraft = {
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  categories?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
  categoryOrderHints?: InputMaybe<Array<TCtpCategoryOrderHintInput>>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  masterVariant?: InputMaybe<TCtpProductVariantInput>;
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: InputMaybe<TCtpPriceMode>;
  productType: TCtpResourceIdentifierInput;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  searchKeywords?: InputMaybe<Array<TCtpSearchKeywordInput>>;
  slug: Array<TCtpLocalizedStringItemInputType>;
  state?: InputMaybe<TCtpResourceIdentifierInput>;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
  variants?: InputMaybe<Array<TCtpProductVariantInput>>;
};

export type TCtpProductImageAdded = TCtpMessagePayload & {
  __typename?: 'ProductImageAdded';
  image: TCtpImage;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

/**
 * An input object used to define a ProductAttribute.
 *
 * The value should be passed in a form of escaped JSON.
 *
 *
 * Examples for `value`:
 *
 * * FieldType `String`: `"\"This is a string\""`
 * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
 * * FieldType `Number`: `"4"`
 * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
 * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
 */
export type TCtpProductLevelAttributeInput = {
  name: Scalars['String']['input'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   *
   * Examples for `value`:
   *
   * * FieldType `String`: `"\"This is a string\""`
   * * FieldType `DateTimeType`: `"\"2018-10-12T14:00:00.000Z\""`
   * * FieldType `Number`: `"4"`
   * * FieldType `Set` with an elementType of `String`: `"[\"This is a string\", \"This is another string\"]"`
   * * FieldType `Reference`: `"{\"id\": \"b911b62d-353a-4388-93ee-8d488d9af962\", \"typeId\": \"product\"}"`
   */
  value: Scalars['String']['input'];
};

export type TCtpProductLimitsProjection = {
  __typename?: 'ProductLimitsProjection';
  pricesPerVariant: TCtpLimit;
  productTailoring: TCtpLimit;
  variants: TCtpLimit;
};

export type TCtpProductOfSelection = {
  __typename?: 'ProductOfSelection';
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  variantExclusion?: Maybe<TCtpProductVariantExclusion>;
  variantSelection?: Maybe<
    | TCtpProductVariantSelectionIncludeAllExcept
    | TCtpProductVariantSelectionIncludeOnly
  >;
};

export type TCtpProductOfSelectionQueryResult = {
  __typename?: 'ProductOfSelectionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductOfSelection>;
  total: Scalars['Long']['output'];
};

export type TCtpProductPrice = {
  __typename?: 'ProductPrice';
  channel?: Maybe<TCtpChannel>;
  channelRef?: Maybe<TCtpReference>;
  country?: Maybe<Scalars['Country']['output']>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrencePolicyRef?: Maybe<TCtpReference>;
  tiers?: Maybe<Array<TCtpProductPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpProductPriceAdded = TCtpMessagePayload & {
  __typename?: 'ProductPriceAdded';
  price: TCtpProductPrice;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceChanged = TCtpMessagePayload & {
  __typename?: 'ProductPriceChanged';
  newPrice: TCtpProductPrice;
  oldPrice: TCtpProductPrice;
  oldStagedPrice?: Maybe<TCtpProductPrice>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldAdded';
  name: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldChanged';
  name: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldRemoved';
  name: Scalars['String']['output'];
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldsRemoved = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldsRemoved';
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldsSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldsSet';
  customField: TCtpCustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  priceId: Scalars['String']['output'];
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceDataInput = {
  channel?: InputMaybe<TCtpResourceIdentifierInput>;
  country?: InputMaybe<Scalars['Country']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customerGroup?: InputMaybe<TCtpReferenceInput>;
  discounted?: InputMaybe<TCtpDiscountedProductPriceValueInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  recurrencePolicy?: InputMaybe<TCtpReferenceInput>;
  tiers?: InputMaybe<Array<TCtpProductPriceTierInput>>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
  value: TCtpBaseMoneyInput;
};

export type TCtpProductPriceDiscountUpdateMessagePayload = {
  __typename?: 'ProductPriceDiscountUpdateMessagePayload';
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  priceId: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  variantId: Scalars['Int']['output'];
  variantKey?: Maybe<Scalars['String']['output']>;
};

export type TCtpProductPriceDiscountsSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceDiscountsSet';
  type: Scalars['String']['output'];
  updatedPrices: Array<TCtpProductPriceDiscountUpdateMessagePayload>;
};

export type TCtpProductPriceExternalDiscountSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceExternalDiscountSet';
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  priceId: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
  variantKey?: Maybe<Scalars['String']['output']>;
};

export type TCtpProductPriceKeySet = TCtpMessagePayload & {
  __typename?: 'ProductPriceKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  priceId?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceModeSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceModeSet';
  to?: Maybe<TCtpPriceMode>;
  type: Scalars['String']['output'];
};

export type TCtpProductPriceRemoved = TCtpMessagePayload & {
  __typename?: 'ProductPriceRemoved';
  price: TCtpProductPrice;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductPriceSearch = {
  __typename?: 'ProductPriceSearch';
  channel?: Maybe<TCtpChannel>;
  channelRef?: Maybe<TCtpReference>;
  country?: Maybe<Scalars['Country']['output']>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
  discounted?: Maybe<TCtpDiscountedProductSearchPriceValue>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  tiers?: Maybe<Array<TCtpProductSearchPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpProductPriceTier = {
  __typename?: 'ProductPriceTier';
  minimumQuantity: Scalars['Int']['output'];
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpProductPriceTierInput = {
  minimumQuantity: Scalars['Int']['input'];
  value: TCtpBaseMoneyInput;
};

export type TCtpProductPricesSet = TCtpMessagePayload & {
  __typename?: 'ProductPricesSet';
  prices: Array<TCtpProductPrice>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductProjection = {
  __typename?: 'ProductProjection';
  /** Fetch all variants, including the master variant in first position. If `onlyMatching` is used, filter this list based on the the search query. */
  allVariants: Array<TCtpProductSearchVariant>;
  categories: Array<TCtpCategory>;
  categoriesRef: Array<TCtpReference>;
  categoryOrderHints: Array<TCtpCategoryOrderHintProductSearch>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  masterVariant: TCtpProductSearchVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productType?: Maybe<TCtpProductTypeDefinition>;
  productTypeRef: TCtpReference;
  published: Scalars['Boolean']['output'];
  reviewRatingStatistics?: Maybe<TCtpReviewRatingStatistics>;
  searchKeywords: Array<TCtpSearchKeywordsProductSearch>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  taxCategory?: Maybe<TCtpTaxCategory>;
  taxCategoryRef?: Maybe<TCtpReference>;
  /** Fetch all variants, excluding the master variant. If `onlyMatching` is used, filter this list based on the the search query. */
  variants: Array<TCtpProductSearchVariant>;
  version: Scalars['Long']['output'];
};

export type TCtpProductProjection_AllVariantsArgs = {
  onlyMatching?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpProductProjection_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjection_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjection_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjection_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjection_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjection_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjection_VariantsArgs = {
  onlyMatching?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpProductProjectionMessagePayload = {
  __typename?: 'ProductProjectionMessagePayload';
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  attributes: Array<TCtpRawProductAttribute>;
  categories: Array<TCtpCategory>;
  categoriesRef: Array<TCtpReference>;
  categoryOrderHints: Array<TCtpCategoryOrderHint>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  masterVariant: TCtpProductVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productType?: Maybe<TCtpProductTypeDefinition>;
  productTypeRef: TCtpReference;
  published: Scalars['Boolean']['output'];
  reviewRatingStatistics?: Maybe<TCtpReviewRatingStatistics>;
  searchKeywords: Array<TCtpSearchKeywords>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  taxCategory?: Maybe<TCtpTaxCategory>;
  taxCategoryRef?: Maybe<TCtpReference>;
  variants: Array<TCtpProductVariant>;
  version: Scalars['Long']['output'];
};

export type TCtpProductProjectionMessagePayload_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductProjectionSearchResult = {
  __typename?: 'ProductProjectionSearchResult';
  count: Scalars['Int']['output'];
  facets: Array<TCtpFacetResultValue>;
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductProjection>;
  total: Scalars['Int']['output'];
};

export type TCtpProductPublished = TCtpMessagePayload & {
  __typename?: 'ProductPublished';
  productProjection: TCtpProductProjectionMessagePayload;
  removedImageUrls: Array<Scalars['String']['output']>;
  scope: TCtpPublishScope;
  type: Scalars['String']['output'];
};

export type TCtpProductQueryResult = {
  __typename?: 'ProductQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProduct>;
  total: Scalars['Long']['output'];
};

export type TCtpProductReferenceIdentifier = {
  __typename?: 'ProductReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type TCtpProductRemovedFromCategory = TCtpMessagePayload & {
  __typename?: 'ProductRemovedFromCategory';
  category: TCtpReferenceId;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TCtpProductRevertedStagedChanges = TCtpMessagePayload & {
  __typename?: 'ProductRevertedStagedChanges';
  removedImageUrls: Scalars['Set']['output'];
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpProductSearchIndexingMode {
  ProductProjectionsSearch = 'ProductProjectionsSearch',
  ProductsSearch = 'ProductsSearch',
}

export type TCtpProductSearchPriceTier = {
  __typename?: 'ProductSearchPriceTier';
  minimumQuantity: Scalars['Int']['output'];
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpProductSearchVariant = {
  __typename?: 'ProductSearchVariant';
  /** Returns all recurrence prices based on the price selection rules. */
  allRecurrencePrices?: Maybe<Array<TCtpProductPriceSearch>>;
  assets: Array<TCtpAsset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<TCtpRawProductSearchAttribute>;
  availability?: Maybe<TCtpProductSearchVariantAvailabilityWithChannels>;
  id: Scalars['Int']['output'];
  images: Array<TCtpImageProductSearch>;
  isMatchingVariant?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<TCtpProductPriceSearch>;
  prices?: Maybe<Array<TCtpProductPriceSearch>>;
  scopedPrice?: Maybe<TCtpScopedPrice>;
  scopedPriceDiscounted?: Maybe<Scalars['Boolean']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type TCtpProductSearchVariant_AllRecurrencePricesArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  recurrencePolicyId?: InputMaybe<Scalars['String']['input']>;
  returnAllPricesByRecurrencePolicy?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpProductSearchVariant_AttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductSearchVariant_PriceArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  recurrencePolicyId?: InputMaybe<Scalars['String']['input']>;
  returnAllPricesByRecurrencePolicy?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Product variant availabilities */
export type TCtpProductSearchVariantAvailabilitiesResult = {
  __typename?: 'ProductSearchVariantAvailabilitiesResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpProductSearchVariantAvailabilityWithChannel>;
  total: Scalars['Int']['output'];
};

/** Product variant availability */
export type TCtpProductSearchVariantAvailability = {
  __typename?: 'ProductSearchVariantAvailability';
  availableQuantity?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOnStock: Scalars['Boolean']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Long']['output']>;
};

export type TCtpProductSearchVariantAvailabilityWithChannel = {
  __typename?: 'ProductSearchVariantAvailabilityWithChannel';
  availability: TCtpProductSearchVariantAvailability;
  channel?: Maybe<TCtpChannel>;
  channelRef: TCtpReference;
};

export type TCtpProductSearchVariantAvailabilityWithChannels = {
  __typename?: 'ProductSearchVariantAvailabilityWithChannels';
  channels: TCtpProductSearchVariantAvailabilitiesResult;
  noChannel?: Maybe<TCtpProductSearchVariantAvailability>;
};

export type TCtpProductSearchVariantAvailabilityWithChannels_ChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpProductSelection = TCtpVersioned & {
  __typename?: 'ProductSelection';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  mode: TCtpProductSelectionMode;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productCount: Scalars['Int']['output'];
  productRefs: TCtpProductOfSelectionQueryResult;
  version: Scalars['Long']['output'];
};

export type TCtpProductSelection_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductSelection_ProductRefsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpProductSelectionCreated = TCtpMessagePayload & {
  __typename?: 'ProductSelectionCreated';
  productSelection: TCtpProductSelection;
  type: Scalars['String']['output'];
};

export type TCtpProductSelectionDeleted = TCtpMessagePayload & {
  __typename?: 'ProductSelectionDeleted';
  type: Scalars['String']['output'];
};

export enum TCtpProductSelectionMode {
  /** Mode of Product Selection used to include a specific list of individual Products */
  Individual = 'Individual',
  /** Mode of Product Selection used to exclude a specific list of individual Products */
  IndividualExclusion = 'IndividualExclusion',
}

export type TCtpProductSelectionProductAdded = TCtpMessagePayload & {
  __typename?: 'ProductSelectionProductAdded';
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  type: Scalars['String']['output'];
  variantSelection?: Maybe<
    | TCtpProductVariantSelectionIncludeAllExcept
    | TCtpProductVariantSelectionIncludeOnly
  >;
};

export type TCtpProductSelectionProductExcluded = TCtpMessagePayload & {
  __typename?: 'ProductSelectionProductExcluded';
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  type: Scalars['String']['output'];
  variantExclusion?: Maybe<TCtpProductVariantExclusion>;
};

export type TCtpProductSelectionProductRemoved = TCtpMessagePayload & {
  __typename?: 'ProductSelectionProductRemoved';
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  type: Scalars['String']['output'];
};

/** Fields to access product selection assignments. */
export type TCtpProductSelectionQueryInterface = {
  productSelectionAssignments: TCtpProductAssignmentQueryResult;
};

/** Fields to access product selection assignments. */
export type TCtpProductSelectionQueryInterface_ProductSelectionAssignmentsArgs =
  {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Array<Scalars['String']['input']>>;
    where?: InputMaybe<Scalars['String']['input']>;
  };

export type TCtpProductSelectionQueryResult = {
  __typename?: 'ProductSelectionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductSelection>;
  total: Scalars['Long']['output'];
};

export type TCtpProductSelectionSetting = {
  __typename?: 'ProductSelectionSetting';
  active: Scalars['Boolean']['output'];
  productSelection?: Maybe<TCtpProductSelection>;
  productSelectionRef: TCtpReference;
};

export type TCtpProductSelectionSettingDraft = {
  active: Scalars['Boolean']['input'];
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpProductSelectionSettingInActionInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpProductSelectionUpdateAction = {
  addProduct?: InputMaybe<TCtpAddProductSelectionProduct>;
  changeName?: InputMaybe<TCtpChangeProductSelectionName>;
  excludeProduct?: InputMaybe<TCtpExcludeProductSelectionProduct>;
  removeProduct?: InputMaybe<TCtpRemoveProductSelectionProduct>;
  setCustomField?: InputMaybe<TCtpSetProductSelectionCustomField>;
  setCustomType?: InputMaybe<TCtpSetProductSelectionCustomType>;
  setKey?: InputMaybe<TCtpSetProductSelectionKey>;
  setVariantExclusion?: InputMaybe<TCtpSetProductSelectionVariantExclusion>;
  setVariantSelection?: InputMaybe<TCtpSetProductSelectionVariantSelection>;
};

export type TCtpProductSelectionVariantExclusionChanged = TCtpMessagePayload & {
  __typename?: 'ProductSelectionVariantExclusionChanged';
  newVariantExclusion?: Maybe<TCtpProductVariantExclusion>;
  oldVariantExclusion?: Maybe<TCtpProductVariantExclusion>;
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpProductSelectionVariantSelectionChanged = TCtpMessagePayload & {
  __typename?: 'ProductSelectionVariantSelectionChanged';
  newVariantSelection?: Maybe<
    | TCtpProductVariantSelectionIncludeAllExcept
    | TCtpProductVariantSelectionIncludeOnly
  >;
  oldVariantSelection?: Maybe<
    | TCtpProductVariantSelectionIncludeAllExcept
    | TCtpProductVariantSelectionIncludeOnly
  >;
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpProductSlugChanged = TCtpMessagePayload & {
  __typename?: 'ProductSlugChanged';
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  type: Scalars['String']['output'];
};

export type TCtpProductSlugChanged_OldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductSlugChanged_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductStateTransition = TCtpMessagePayload & {
  __typename?: 'ProductStateTransition';
  force: Scalars['Boolean']['output'];
  state?: Maybe<TCtpState>;
  stateRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoring = TCtpVersioned & {
  __typename?: 'ProductTailoring';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  current?: Maybe<TCtpProductTailoringData>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  product?: Maybe<TCtpProduct>;
  productRef: TCtpReference;
  published: Scalars['Boolean']['output'];
  staged?: Maybe<TCtpProductTailoringData>;
  store?: Maybe<TCtpStore>;
  storeRef: TCtpKeyReference;
  version: Scalars['Long']['output'];
};

export type TCtpProductTailoringCreated = TCtpHasProductTailoringData &
  TCtpMessagePayload & {
    __typename?: 'ProductTailoringCreated';
    attributesRaw: Array<TCtpRawProductAttribute>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    key?: Maybe<Scalars['String']['output']>;
    metaDescription?: Maybe<Scalars['String']['output']>;
    metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    metaKeywords?: Maybe<Scalars['String']['output']>;
    metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    metaTitle?: Maybe<Scalars['String']['output']>;
    metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    productKey?: Maybe<Scalars['String']['output']>;
    productRef: TCtpReference;
    publish: Scalars['Boolean']['output'];
    slug?: Maybe<Scalars['String']['output']>;
    slugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    storeRef: TCtpKeyReference;
    type: Scalars['String']['output'];
    variants: Array<TCtpProductVariantTailoring>;
  };

export type TCtpProductTailoringCreated_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringData = TCtpHasProductTailoringData & {
  __typename?: 'ProductTailoringData';
  attributesRaw: Array<TCtpRawProductAttribute>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  variants: Array<TCtpProductVariantTailoring>;
};

export type TCtpProductTailoringData_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringData_MetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringData_MetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringData_MetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringData_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringData_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringDeleted = TCtpMessagePayload & {
  __typename?: 'ProductTailoringDeleted';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoringDescriptionSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringDescriptionSet';
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  oldDescription?: Maybe<Scalars['String']['output']>;
  oldDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoringDescriptionSet_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringDescriptionSet_OldDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringDraft = {
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  product: TCtpResourceIdentifierInput;
  publish?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  variants?: InputMaybe<Array<TCtpProductVariantTailoringInput>>;
};

export type TCtpProductTailoringImageAdded = TCtpMessagePayload & {
  __typename?: 'ProductTailoringImageAdded';
  image: TCtpImage;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductTailoringImagesSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringImagesSet';
  images?: Maybe<Array<TCtpImage>>;
  oldImages?: Maybe<Array<TCtpImage>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type TCtpProductTailoringNameSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringNameSet';
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  oldName?: Maybe<Scalars['String']['output']>;
  oldNameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoringNameSet_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringNameSet_OldNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringPublished = TCtpMessagePayload & {
  __typename?: 'ProductTailoringPublished';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoringQueryResult = {
  __typename?: 'ProductTailoringQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductTailoring>;
  total: Scalars['Long']['output'];
};

export type TCtpProductTailoringSlugSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringSlugSet';
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoringSlugSet_OldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringSlugSet_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpProductTailoringUnpublished = TCtpMessagePayload & {
  __typename?: 'ProductTailoringUnpublished';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
};

export type TCtpProductTailoringUpdateAction = {
  addAsset?: InputMaybe<TCtpAddProductTailoringAsset>;
  addExternalImage?: InputMaybe<TCtpAddProductTailoringExternalImage>;
  addVariant?: InputMaybe<TCtpAddProductVariantTailoring>;
  changeAssetName?: InputMaybe<TCtpChangeProductTailoringAssetName>;
  changeAssetOrder?: InputMaybe<TCtpChangeProductTailoringAssetOrder>;
  moveImageToPosition?: InputMaybe<TCtpMoveProductTailoringImageToPosition>;
  publish?: InputMaybe<TCtpPublishTailoring>;
  removeAsset?: InputMaybe<TCtpRemoveProductTailoringAsset>;
  removeImage?: InputMaybe<TCtpRemoveProductTailoringImage>;
  removeVariant?: InputMaybe<TCtpRemoveProductVariantTailoring>;
  setAssetCustomField?: InputMaybe<TCtpSetProductTailoringAssetCustomField>;
  setAssetCustomType?: InputMaybe<TCtpSetProductTailoringAssetCustomType>;
  setAssetDescription?: InputMaybe<TCtpSetProductTailoringAssetDescription>;
  setAssetKey?: InputMaybe<TCtpSetProductTailoringAssetKey>;
  setAssetSources?: InputMaybe<TCtpSetProductTailoringAssetSources>;
  setAssetTags?: InputMaybe<TCtpSetProductTailoringAssetTags>;
  setAttribute?: InputMaybe<TCtpSetProductTailoringAttribute>;
  setAttributeInAllVariants?: InputMaybe<TCtpSetProductTailoringAttributeInAllVariants>;
  setDescription?: InputMaybe<TCtpSetProductTailoringDescription>;
  setImageLabel?: InputMaybe<TCtpSetProductTailoringImageLabel>;
  setImages?: InputMaybe<TCtpSetProductTailoringImages>;
  setMetaAttributes?: InputMaybe<TCtpSetProductTailoringMetaAttributes>;
  setMetaDescription?: InputMaybe<TCtpSetProductTailoringMetaDescription>;
  setMetaKeywords?: InputMaybe<TCtpSetProductTailoringMetaKeywords>;
  setMetaTitle?: InputMaybe<TCtpSetProductTailoringMetaTitle>;
  setName?: InputMaybe<TCtpSetProductTailoringName>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setProductLevelAttribute?: InputMaybe<TCtpSetProductLevelAttribute>;
  setSlug?: InputMaybe<TCtpSetProductTailoringSlug>;
  unpublish?: InputMaybe<TCtpUnpublishTailoring>;
};

export type TCtpProductTypeDefinition = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ProductTypeDefinition';
    attributeDefinitions: TCtpAttributeDefinitionResult;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    description: Scalars['String']['output'];
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name: Scalars['String']['output'];
    version: Scalars['Long']['output'];
  };

export type TCtpProductTypeDefinition_AttributeDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductTypeDefinitionQueryResult = {
  __typename?: 'ProductTypeDefinitionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpProductTypeDefinition>;
  total: Scalars['Long']['output'];
};

export type TCtpProductTypeDraft = {
  attributeDefinitions?: InputMaybe<Array<TCtpAttributeDefinitionDraft>>;
  description: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TCtpProductTypeLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ProductTypeLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpProductTypeLimitsProjection = {
  __typename?: 'ProductTypeLimitsProjection';
  total: TCtpProductTypeLimitWithCurrent;
};

export type TCtpProductTypeUpdateAction = {
  addAttributeDefinition?: InputMaybe<TCtpAddAttributeDefinition>;
  addLocalizedEnumValue?: InputMaybe<TCtpAddLocalizedEnumValue>;
  addPlainEnumValue?: InputMaybe<TCtpAddPlainEnumValue>;
  changeAttributeName?: InputMaybe<TCtpChangeAttributeName>;
  changeAttributeOrder?: InputMaybe<TCtpChangeAttributeOrder>;
  changeAttributeOrderByName?: InputMaybe<TCtpChangeAttributeOrderByName>;
  changeDescription?: InputMaybe<TCtpChangeDescription>;
  changeEnumKey?: InputMaybe<TCtpChangeEnumKey>;
  changeInputHint?: InputMaybe<TCtpChangeInputHint>;
  changeIsSearchable?: InputMaybe<TCtpChangeIsSearchable>;
  changeLabel?: InputMaybe<TCtpChangeLabel>;
  changeLocalizedEnumValueLabel?: InputMaybe<TCtpChangeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: InputMaybe<TCtpChangeLocalizedEnumValueOrder>;
  changeName?: InputMaybe<TCtpChangeName>;
  changePlainEnumValueLabel?: InputMaybe<TCtpChangePlainEnumValueLabel>;
  changePlainEnumValueOrder?: InputMaybe<TCtpChangePlainEnumValueOrder>;
  removeAttributeDefinition?: InputMaybe<TCtpRemoveAttributeDefinition>;
  removeEnumValues?: InputMaybe<TCtpRemoveEnumValues>;
  setInputTip?: InputMaybe<TCtpSetInputTip>;
  setKey?: InputMaybe<TCtpSetKey>;
};

export type TCtpProductUnpublished = TCtpMessagePayload & {
  __typename?: 'ProductUnpublished';
  type: Scalars['String']['output'];
};

export type TCtpProductUpdateAction = {
  addAsset?: InputMaybe<TCtpAddProductAsset>;
  addExternalImage?: InputMaybe<TCtpAddProductExternalImage>;
  addPrice?: InputMaybe<TCtpAddProductPrice>;
  addToCategory?: InputMaybe<TCtpAddProductToCategory>;
  addVariant?: InputMaybe<TCtpAddProductVariant>;
  changeAssetName?: InputMaybe<TCtpChangeProductAssetName>;
  changeAssetOrder?: InputMaybe<TCtpChangeProductAssetOrder>;
  changeImageLabel?: InputMaybe<TCtpChangeProductImageLabel>;
  changeMasterVariant?: InputMaybe<TCtpChangeProductMasterVariant>;
  changeName?: InputMaybe<TCtpChangeProductName>;
  changePrice?: InputMaybe<TCtpChangeProductPrice>;
  changeSlug?: InputMaybe<TCtpChangeProductSlug>;
  moveImageToPosition?: InputMaybe<TCtpMoveProductImageToPosition>;
  publish?: InputMaybe<TCtpPublishProduct>;
  removeAsset?: InputMaybe<TCtpRemoveProductAsset>;
  removeFromCategory?: InputMaybe<TCtpRemoveProductFromCategory>;
  removeImage?: InputMaybe<TCtpRemoveProductImage>;
  removePrice?: InputMaybe<TCtpRemoveProductPrice>;
  removeVariant?: InputMaybe<TCtpRemoveProductVariant>;
  revertStagedChanges?: InputMaybe<TCtpRevertStagedChanges>;
  revertStagedVariantChanges?: InputMaybe<TCtpRevertStagedVariantChanges>;
  setAssetCustomField?: InputMaybe<TCtpSetProductAssetCustomField>;
  setAssetCustomType?: InputMaybe<TCtpSetProductAssetCustomType>;
  setAssetDescription?: InputMaybe<TCtpSetProductAssetDescription>;
  setAssetKey?: InputMaybe<TCtpSetProductAssetKey>;
  setAssetSources?: InputMaybe<TCtpSetProductAssetSources>;
  setAssetTags?: InputMaybe<TCtpSetProductAssetTags>;
  setAttribute?: InputMaybe<TCtpSetProductAttribute>;
  setAttributeInAllVariants?: InputMaybe<TCtpSetProductAttributeInAllVariants>;
  setCategoryOrderHint?: InputMaybe<TCtpSetProductCategoryOrderHint>;
  setDescription?: InputMaybe<TCtpSetProductDescription>;
  setDiscountedPrice?: InputMaybe<TCtpSetProductDiscountedPrice>;
  setImageLabel?: InputMaybe<TCtpSetProductImageLabel>;
  setKey?: InputMaybe<TCtpSetProductKey>;
  setMetaAttributes?: InputMaybe<TCtpSetProductMetaAttributes>;
  setMetaDescription?: InputMaybe<TCtpSetProductMetaDescription>;
  setMetaKeywords?: InputMaybe<TCtpSetProductMetaKeywords>;
  setMetaTitle?: InputMaybe<TCtpSetProductMetaTitle>;
  setPriceKey?: InputMaybe<TCtpSetProductPriceKey>;
  setPriceMode?: InputMaybe<TCtpSetProductPriceMode>;
  setPrices?: InputMaybe<TCtpSetProductPrices>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setProductAttribute?: InputMaybe<TCtpProductLevelAttributeInput>;
  setProductPriceCustomField?: InputMaybe<TCtpSetProductPriceCustomField>;
  setProductPriceCustomType?: InputMaybe<TCtpSetProductPriceCustomType>;
  setProductVariantKey?: InputMaybe<TCtpSetProductVariantKey>;
  setSearchKeywords?: InputMaybe<TCtpSetSearchKeywords>;
  setSku?: InputMaybe<TCtpSetProductSku>;
  setTaxCategory?: InputMaybe<TCtpSetProductTaxCategory>;
  transitionState?: InputMaybe<TCtpTransitionProductState>;
  unpublish?: InputMaybe<TCtpUnpublishProduct>;
};

export type TCtpProductVariant = {
  __typename?: 'ProductVariant';
  /** Returns all recurrence prices based on the price selection rules. */
  allRecurrencePrices?: Maybe<Array<TCtpProductPrice>>;
  assets: Array<TCtpAsset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<TCtpRawProductAttribute>;
  availability?: Maybe<TCtpProductVariantAvailabilityWithChannels>;
  id: Scalars['Int']['output'];
  images: Array<TCtpImage>;
  key?: Maybe<Scalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<TCtpProductPrice>;
  prices?: Maybe<Array<TCtpProductPrice>>;
  sku?: Maybe<Scalars['String']['output']>;
};

export type TCtpProductVariant_AllRecurrencePricesArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  recurrencePolicyId?: InputMaybe<Scalars['String']['input']>;
  returnAllPricesByRecurrencePolicy?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpProductVariant_AttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductVariant_PriceArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Country']['input']>;
  currency: Scalars['Currency']['input'];
  customerGroupAssignmentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  recurrencePolicyId?: InputMaybe<Scalars['String']['input']>;
  returnAllPricesByRecurrencePolicy?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpProductVariantAdded = TCtpMessagePayload & {
  __typename?: 'ProductVariantAdded';
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variant: TCtpProductVariant;
};

/** Product variant availabilities */
export type TCtpProductVariantAvailabilitiesResult = {
  __typename?: 'ProductVariantAvailabilitiesResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<TCtpProductVariantAvailabilityWithChannel>;
  total: Scalars['Int']['output'];
};

/** Product variant availability */
export type TCtpProductVariantAvailability = {
  __typename?: 'ProductVariantAvailability';
  availableQuantity?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOnStock: Scalars['Boolean']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Long']['output']>;
};

export type TCtpProductVariantAvailabilityWithChannel = {
  __typename?: 'ProductVariantAvailabilityWithChannel';
  availability: TCtpProductVariantAvailability;
  channel?: Maybe<TCtpChannel>;
  channelRef: TCtpReference;
};

export type TCtpProductVariantAvailabilityWithChannels = {
  __typename?: 'ProductVariantAvailabilityWithChannels';
  channels: TCtpProductVariantAvailabilitiesResult;
  noChannel?: Maybe<TCtpProductVariantAvailability>;
};

export type TCtpProductVariantAvailabilityWithChannels_ChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpProductVariantDeleted = TCtpMessagePayload & {
  __typename?: 'ProductVariantDeleted';
  removedImageUrls: Scalars['Set']['output'];
  staged?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  variant?: Maybe<TCtpProductVariant>;
};

export type TCtpProductVariantExclusion = {
  __typename?: 'ProductVariantExclusion';
  skus: Array<Scalars['String']['output']>;
};

export type TCtpProductVariantExclusionDraft = {
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductVariantImportDraft = {
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<TCtpImageInput>>;
  prices?: InputMaybe<Array<TCtpProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpProductVariantInput = {
  assets?: InputMaybe<Array<TCtpAssetDraftInput>>;
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  images?: InputMaybe<Array<TCtpImageInput>>;
  key?: InputMaybe<Scalars['String']['input']>;
  prices?: InputMaybe<Array<TCtpProductPriceDataInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpProductVariantSelection = {
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpProductVariantSelectionDraft = {
  includeAllExcept?: InputMaybe<Array<Scalars['String']['input']>>;
  includeOnly?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpProductVariantSelectionIncludeAllExcept =
  TCtpProductVariantSelection & {
    __typename?: 'ProductVariantSelectionIncludeAllExcept';
    skus: Array<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpProductVariantSelectionIncludeOnly =
  TCtpProductVariantSelection & {
    __typename?: 'ProductVariantSelectionIncludeOnly';
    skus: Array<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpProductVariantTailoring = {
  __typename?: 'ProductVariantTailoring';
  assets?: Maybe<Array<TCtpAsset>>;
  attributesRaw: Array<TCtpRawProductAttribute>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<TCtpImage>>;
};

export type TCtpProductVariantTailoringAdded = TCtpMessagePayload & {
  __typename?: 'ProductVariantTailoringAdded';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
  variant: TCtpVariantTailoring;
  variantId: Scalars['Int']['output'];
};

export type TCtpProductVariantTailoringInput = {
  assets?: InputMaybe<Array<TCtpAssetDraftInput>>;
  attributes?: InputMaybe<Array<TCtpProductAttributeInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<TCtpImageInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpProductVariantTailoringRemoved = TCtpMessagePayload & {
  __typename?: 'ProductVariantTailoringRemoved';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: Scalars['String']['output'];
  variant: TCtpVariantTailoring;
  variantId: Scalars['Int']['output'];
};

export enum TCtpProductVsCartDiscountCombination {
  BestDeal = 'BestDeal',
  Stacking = 'Stacking',
}

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpProductsSearchConfiguration = {
  __typename?: 'ProductsSearchConfiguration';
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status: TCtpProductsSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpProductsSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

/** Contains information about the limits of your project. */
export type TCtpProjectCustomLimitsProjection = {
  __typename?: 'ProjectCustomLimitsProjection';
  attributeGroups: TCtpAttributeGroupLimitsProjection;
  businessUnits: TCtpBusinessUnitLimitsProjection;
  cartDiscounts: TCtpCartDiscountLimitsProjection;
  carts: TCtpCartLimitsProjection;
  category: TCtpCategoryLimitsProjection;
  customObjects: TCtpCustomObjectLimitsProjection;
  customerGroups: TCtpCustomerGroupLimitsProjection;
  customers: TCtpCustomerLimitsProjection;
  discountGroups: TCtpDiscountGroupLimitsProjection;
  extensions: TCtpExtensionLimitsProjection;
  orderEdits: TCtpOrderEditLimitsProjection;
  productDiscounts: TCtpProductDiscountLimitsProjection;
  productType: TCtpProductTypeLimitsProjection;
  products: TCtpProductLimitsProjection;
  query: TCtpQueryLimitsProjection;
  refreshTokens: TCtpRefreshTokenLimitsProjection;
  search: TCtpSearchLimitsProjection;
  shippingMethods: TCtpShippingMethodLimitsProjection;
  shoppingLists: TCtpShoppingListLimitsProjection;
  stores: TCtpStoreLimitsProjection;
  subscriptions: TCtpSubscriptionsLimitsProjection;
  taxCategories: TCtpTaxCategoryLimitsProjection;
  zones: TCtpZoneLimitsProjection;
};

/** Project contains information about project. */
export type TCtpProjectProjection = {
  __typename?: 'ProjectProjection';
  businessUnits?: Maybe<TCtpBusinessUnitConfiguration>;
  carts: TCtpCartsConfiguration;
  countries: Array<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  currencies: Array<Scalars['Currency']['output']>;
  discounts?: Maybe<TCtpDiscountsConfiguration>;
  externalOAuth?: Maybe<TCtpExternalOAuth>;
  key: Scalars['String']['output'];
  languages: Array<Scalars['Locale']['output']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<TCtpInitiator>;
  messages: TCtpMessagesConfiguration;
  name: Scalars['String']['output'];
  searchIndexing?: Maybe<TCtpSearchIndexingConfiguration>;
  shippingRateInputType?: Maybe<
    TCtpCartClassificationType | TCtpCartScoreType | TCtpCartValueType
  >;
  shoppingLists: TCtpShoppingListsConfiguration;
  trialUntil?: Maybe<Scalars['YearMonth']['output']>;
  version: Scalars['Long']['output'];
};

export type TCtpProjectSettingsUpdateAction = {
  changeBusinessUnitSearchStatus?: InputMaybe<TCtpChangeProjectSettingsBusinessUnitSearchStatus>;
  changeCartsConfiguration?: InputMaybe<TCtpChangeProjectSettingsCartsConfiguration>;
  changeCountries?: InputMaybe<TCtpChangeProjectSettingsCountries>;
  changeCountryTaxRateFallbackEnabled?: InputMaybe<TCtpChangeProjectSettingsCountryTaxRateFallbackEnabled>;
  changeCurrencies?: InputMaybe<TCtpChangeProjectSettingsCurrencies>;
  changeCustomerSearchStatus?: InputMaybe<TCtpChangeProjectSettingsCustomerSearchStatus>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeDiscountCodeSearchStatus?: InputMaybe<TCtpChangeProjectSettingsDiscountCodeSearchStatus>;
  changeLanguages?: InputMaybe<TCtpChangeProjectSettingsLanguages>;
  changeMessagesConfiguration?: InputMaybe<TCtpChangeProjectSettingsMessagesConfiguration>;
  changeMessagesEnabled?: InputMaybe<TCtpChangeProjectSettingsMessagesEnabled>;
  changeMyBusinessUnitStatusOnCreation?: InputMaybe<TCtpChangeProjectSettingsMyBusinessUnitStatusOnCreation>;
  changeName?: InputMaybe<TCtpChangeProjectSettingsName>;
  changeOrderSearchStatus?: InputMaybe<TCtpChangeProjectSettingsOrderSearchStatus>;
  changeProductSearchIndexingEnabled?: InputMaybe<TCtpChangeProjectSettingsProductSearchIndexingEnabled>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeProjectSettingsProductSearchIndexingEnabled?: InputMaybe<TCtpChangeProjectSettingsProductSearchIndexingEnabled>;
  changeShoppingListsConfiguration?: InputMaybe<TCtpChangeProjectSettingsShoppingListsConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeStandalonePriceSearchStatus?: InputMaybe<TCtpChangeProjectSettingsStandalonePriceSearchStatus>;
  changeTotalPriceDiscountDoesNotReduceExternalTax?: InputMaybe<TCtpChangeProjectSettingsTotalPriceDiscountDoesNotReduceExternalTax>;
  setExternalOAuth?: InputMaybe<TCtpSetProjectSettingsExternalOAuth>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  setMyBusinessUnitAssociateRoleOnCreation?: InputMaybe<TCtpSetProjectSettingsMyBusinessUnitAssociateRoleOnCreation>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  setProductVsCartDiscountCombination?: InputMaybe<TCtpSetProjectSettingsProductVsCartDiscountCombination>;
  setShippingRateInputType?: InputMaybe<TCtpSetProjectSettingsShippingRateInputType>;
};

export type TCtpPublishProduct = {
  scope?: InputMaybe<TCtpPublishScope>;
};

export enum TCtpPublishScope {
  /** Publishes the complete staged projection */
  All = 'All',
  /** Publishes only prices on the staged projection */
  Prices = 'Prices',
}

export type TCtpPublishTailoring = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpPurchaseOrderNumberSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'PurchaseOrderNumberSet';
    oldPurchaseOrderNumber?: Maybe<Scalars['String']['output']>;
    purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpQuery = TCtpCartQueryInterface &
  TCtpCustomerActiveCartInterface &
  TCtpCustomerQueryInterface &
  TCtpMeFieldInterface &
  TCtpOrderQueryInterface &
  TCtpProductSelectionQueryInterface &
  TCtpShippingMethodsByCartInterface &
  TCtpShoppingListQueryInterface & {
    __typename?: 'Query';
    apiClient?: Maybe<TCtpApiClientWithoutSecret>;
    apiClients: TCtpApiClientWithoutSecretQueryResult;
    /** This field gives access to the resources (such as carts) as an associate of a given business unit. */
    asAssociate: TCtpAsAssociate;
    associate?: Maybe<TCtpBusinessUnitAssociateProjection>;
    associateRole?: Maybe<TCtpAssociateRole>;
    associateRoles: TCtpAssociateRoleQueryResult;
    attributeGroup?: Maybe<TCtpAttributeGroup>;
    attributeGroups: TCtpAttributeGroupQueryResult;
    businessUnit?: Maybe<TCtpBusinessUnit>;
    businessUnits: TCtpBusinessUnitQueryResult;
    cart?: Maybe<TCtpCart>;
    cartDiscount?: Maybe<TCtpCartDiscount>;
    cartDiscounts: TCtpCartDiscountQueryResult;
    carts: TCtpCartQueryResult;
    categories: TCtpCategoryQueryResult;
    category?: Maybe<TCtpCategory>;
    /** Autocomplete the categories based on category fields like name, description, etc. */
    categoryAutocomplete: TCtpCategorySearchResult;
    /** Search the categories using full-text search, filtering and sorting */
    categorySearch: TCtpCategorySearchResult;
    channel?: Maybe<TCtpChannel>;
    channels: TCtpChannelQueryResult;
    customObject?: Maybe<TCtpCustomObject>;
    customObjects: TCtpCustomObjectQueryResult;
    customer?: Maybe<TCtpCustomer>;
    customerActiveCart?: Maybe<TCtpCart>;
    customerGroup?: Maybe<TCtpCustomerGroup>;
    customerGroups: TCtpCustomerGroupQueryResult;
    customers: TCtpCustomerQueryResult;
    discountCode?: Maybe<TCtpDiscountCode>;
    discountCodes: TCtpDiscountCodeQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    discountGroup?: Maybe<TCtpDiscountGroup>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    discountGroups: TCtpDiscountGroupQueryResult;
    extension?: Maybe<TCtpExtension>;
    extensions: TCtpExtensionQueryResult;
    /** This field gives access to the resources (such as carts) that are inside the given store. */
    inStore: TCtpInStore;
    /** This field gives access to the resources (such as carts) that are inside one of the given stores. */
    inStores: TCtpInStore;
    inventoryEntries: TCtpInventoryEntryQueryResult;
    inventoryEntry?: Maybe<TCtpInventoryEntry>;
    limits: TCtpProjectCustomLimitsProjection;
    /**
     * This field can only be used with an access token created with the password flow or with an anonymous session.
     *
     * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
     */
    me: TCtpMe;
    message?: Maybe<TCtpMessage>;
    messages: TCtpMessageQueryResult;
    order?: Maybe<TCtpOrder>;
    orderEdit?: Maybe<TCtpOrderEdit>;
    orderEdits: TCtpOrderEditQueryResult;
    orders: TCtpOrderQueryResult;
    payment?: Maybe<TCtpPayment>;
    payments: TCtpPaymentQueryResult;
    product?: Maybe<TCtpProduct>;
    productDiscount?: Maybe<TCtpProductDiscount>;
    productDiscounts: TCtpProductDiscountQueryResult;
    productProjectionSearch: TCtpProductProjectionSearchResult;
    productProjectionsSuggest: TCtpSuggestResult;
    productSelection?: Maybe<TCtpProductSelection>;
    productSelectionAssignments: TCtpProductAssignmentQueryResult;
    productSelections: TCtpProductSelectionQueryResult;
    productTailoring?: Maybe<TCtpProductTailoring>;
    productTailoringList: TCtpProductTailoringQueryResult;
    productType?: Maybe<TCtpProductTypeDefinition>;
    productTypes: TCtpProductTypeDefinitionQueryResult;
    products: TCtpProductQueryResult;
    project: TCtpProjectProjection;
    quote?: Maybe<TCtpQuote>;
    quoteRequest?: Maybe<TCtpQuoteRequest>;
    quoteRequests: TCtpQuoteRequestQueryResult;
    quotes: TCtpQuoteQueryResult;
    /**
     * Recurrence policies are managed and queried through the Recurrence Policy API
     * and associated to a Price
     */
    recurrencePolicies: TCtpRecurrencePolicyQueryResult;
    /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
    recurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
    recurringOrder?: Maybe<TCtpRecurringOrder>;
    recurringOrders: TCtpRecurringOrderQueryResult;
    review?: Maybe<TCtpReview>;
    reviews: TCtpReviewQueryResult;
    shippingMethod?: Maybe<TCtpShippingMethod>;
    shippingMethods: TCtpShippingMethodQueryResult;
    shippingMethodsByCart: Array<TCtpShippingMethod>;
    shippingMethodsByLocation: Array<TCtpShippingMethod>;
    shoppingList?: Maybe<TCtpShoppingList>;
    shoppingLists: TCtpShoppingListQueryResult;
    stagedQuote?: Maybe<TCtpStagedQuote>;
    stagedQuotes: TCtpStagedQuoteQueryResult;
    /**
     * StandalonePrices are managed and queried through the StandalonePrices API
     * and associated to a ProductVariant through the sku field.
     */
    standalonePrice?: Maybe<TCtpStandalonePrice>;
    /**
     * StandalonePrices are managed and queried through the StandalonePrices API
     * and associated to a ProductVariant through the sku field.
     */
    standalonePrices: TCtpStandalonePriceQueryResult;
    state?: Maybe<TCtpState>;
    states: TCtpStateQueryResult;
    store?: Maybe<TCtpStore>;
    stores: TCtpStoreQueryResult;
    subscription?: Maybe<TCtpCommercetoolsSubscription>;
    subscriptions: TCtpCommercetoolsSubscriptionQueryResult;
    taxCategories: TCtpTaxCategoryQueryResult;
    taxCategory?: Maybe<TCtpTaxCategory>;
    typeDefinition?: Maybe<TCtpTypeDefinition>;
    typeDefinitions: TCtpTypeDefinitionQueryResult;
    zone?: Maybe<TCtpZone>;
    zones: TCtpZoneQueryResult;
  };

export type TCtpQuery_ApiClientArgs = {
  id: Scalars['String']['input'];
};

export type TCtpQuery_ApiClientsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_AsAssociateArgs = {
  associateId: Scalars['String']['input'];
  businessUnitKey: Scalars['KeyReferenceInput']['input'];
};

export type TCtpQuery_AssociateArgs = {
  associateId: Scalars['String']['input'];
  businessUnitId?: InputMaybe<Scalars['String']['input']>;
  businessUnitKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_AssociateRoleArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_AssociateRolesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_AttributeGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_AttributeGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_BusinessUnitArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_BusinessUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpQuery_CartDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CartDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CartsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CategoryAutocompleteArgs = {
  filters?: InputMaybe<Array<Scalars['SearchFilter']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale: Scalars['Locale']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
};

export type TCtpQuery_CategorySearchArgs = {
  filters?: InputMaybe<Array<Scalars['SearchFilter']['input']>>;
  fulltext?: InputMaybe<TCtpLocalizedText>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  queryFilters?: InputMaybe<Array<Scalars['SearchFilter']['input']>>;
  sorts?: InputMaybe<Array<Scalars['SearchSort']['input']>>;
};

export type TCtpQuery_ChannelArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CustomObjectArgs = {
  container?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CustomObjectsArgs = {
  container: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CustomerArgs = {
  emailToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  passwordToken?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CustomerActiveCartArgs = {
  customerId: Scalars['String']['input'];
};

export type TCtpQuery_CustomerGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CustomerGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_CustomersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_DiscountCodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_DiscountCodesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_DiscountGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_DiscountGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ExtensionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ExtensionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_InStoreArgs = {
  key: Scalars['KeyReferenceInput']['input'];
};

export type TCtpQuery_InStoresArgs = {
  keys: Array<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpQuery_InventoryEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_InventoryEntryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_MessageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_MessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_OrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_OrderEditArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_OrderEditsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_PaymentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_PaymentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductDiscountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductDiscountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductProjectionSearchArgs = {
  facetFilters?: InputMaybe<Array<TCtpSearchFilterInput>>;
  facets?: InputMaybe<Array<TCtpSearchFacetInput>>;
  filters?: InputMaybe<Array<TCtpSearchFilterInput>>;
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  fuzzyLevel?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  markMatchingVariant?: InputMaybe<Scalars['Boolean']['input']>;
  markMatchingVariants?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  priceSelector?: InputMaybe<TCtpPriceSelectorInput>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  queryFilters?: InputMaybe<Array<TCtpSearchFilterInput>>;
  sorts?: InputMaybe<Array<Scalars['String']['input']>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  storeProjection?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductProjectionsSuggestArgs = {
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  searchKeywords: Array<TCtpSearchKeywordArgument>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpQuery_ProductSelectionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductSelectionAssignmentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductSelectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductTailoringArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  productKey?: InputMaybe<Scalars['String']['input']>;
  storeKey?: InputMaybe<Scalars['KeyReferenceInput']['input']>;
};

export type TCtpQuery_ProductTailoringListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductTypeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductTypesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  localeProjection?: InputMaybe<Array<Scalars['Locale']['input']>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  projectExpandedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_QuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_QuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_QuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_QuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_RecurrencePoliciesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_RecurrencePolicyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_RecurringOrderArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_RecurringOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ReviewArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ShippingMethodArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ShippingMethodsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ShippingMethodsByCartArgs = {
  id: Scalars['String']['input'];
};

export type TCtpQuery_ShippingMethodsByLocationArgs = {
  country: Scalars['Country']['input'];
  currency?: InputMaybe<Scalars['Currency']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StagedQuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StagedQuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StandalonePriceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StandalonePricesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StoreArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_StoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_SubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_SubscriptionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_TaxCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_TaxCategoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_TypeDefinitionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_TypeDefinitionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ZoneArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuery_ZonesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQueryLimitsProjection = {
  __typename?: 'QueryLimitsProjection';
  offset: TCtpLimit;
};

export type TCtpQuote = TCtpVersioned & {
  __typename?: 'Quote';
  billingAddress?: Maybe<TCtpAddress>;
  businessUnit?: Maybe<TCtpBusinessUnit>;
  businessUnitRef?: Maybe<TCtpKeyReference>;
  buyerComment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customLineItems: Array<TCtpCustomLineItem>;
  customer?: Maybe<TCtpCustomer>;
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
  customerRef?: Maybe<TCtpReference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<TCtpDirectDiscount>;
  id: Scalars['String']['output'];
  inventoryMode: TCtpInventoryMode;
  itemShippingAddresses: Array<TCtpAddress>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  lineItems: Array<TCtpLineItem>;
  paymentInfo?: Maybe<TCtpPaymentInfo>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quoteRequest?: Maybe<TCtpQuoteRequest>;
  quoteRequestRef: TCtpReference;
  quoteState: TCtpQuoteState;
  sellerComment?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<TCtpAddress>;
  shippingInfo?: Maybe<TCtpShippingInfo>;
  shippingRateInput?: Maybe<
    TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
  >;
  stagedQuote?: Maybe<TCtpStagedQuote>;
  stagedQuoteRef: TCtpReference;
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  store?: Maybe<TCtpStore>;
  storeRef?: Maybe<TCtpKeyReference>;
  taxCalculationMode: TCtpTaxCalculationMode;
  taxMode: TCtpTaxMode;
  taxRoundingMode: TCtpRoundingMode;
  taxedPrice?: Maybe<TCtpTaxedPrice>;
  totalPrice: TCtpMoney;
  validTo?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Long']['output'];
};

export type TCtpQuote_LineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuoteCreated = TCtpMessagePayload & {
  __typename?: 'QuoteCreated';
  quote: TCtpQuote;
  type: Scalars['String']['output'];
};

export type TCtpQuoteCustomerChanged = TCtpMessagePayload & {
  __typename?: 'QuoteCustomerChanged';
  customer?: Maybe<TCtpCustomer>;
  customerRef: TCtpReference;
  previousCustomer?: Maybe<TCtpCustomer>;
  previousCustomerRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpQuoteDeleted = TCtpMessagePayload & {
  __typename?: 'QuoteDeleted';
  type: Scalars['String']['output'];
};

export type TCtpQuoteDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  stagedQuote?: InputMaybe<TCtpResourceIdentifierInput>;
  stagedQuoteStateToSent?: InputMaybe<Scalars['Boolean']['input']>;
  stagedQuoteVersion?: InputMaybe<Scalars['Long']['input']>;
  state?: InputMaybe<TCtpReferenceInput>;
};

/** Fields to access Quotes. */
export type TCtpQuoteQueryInterface = {
  quote?: Maybe<TCtpQuote>;
  quotes: TCtpQuoteQueryResult;
};

/** Fields to access Quotes. */
export type TCtpQuoteQueryInterface_QuoteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

/** Fields to access Quotes. */
export type TCtpQuoteQueryInterface_QuotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuoteQueryResult = {
  __typename?: 'QuoteQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpQuote>;
  total: Scalars['Long']['output'];
};

export type TCtpQuoteRenegotiationRequested = TCtpMessagePayload & {
  __typename?: 'QuoteRenegotiationRequested';
  buyerComment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpQuoteRequest = TCtpVersioned & {
  __typename?: 'QuoteRequest';
  billingAddress?: Maybe<TCtpAddress>;
  businessUnit?: Maybe<TCtpBusinessUnit>;
  businessUnitRef?: Maybe<TCtpKeyReference>;
  cartRef?: Maybe<TCtpReference>;
  comment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customLineItems: Array<TCtpCustomLineItem>;
  customer?: Maybe<TCtpCustomer>;
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
  customerRef?: Maybe<TCtpReference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<TCtpDirectDiscount>;
  id: Scalars['String']['output'];
  inventoryMode: TCtpInventoryMode;
  itemShippingAddresses: Array<TCtpAddress>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  lineItems: Array<TCtpLineItem>;
  paymentInfo?: Maybe<TCtpPaymentInfo>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quoteRequestState: TCtpQuoteRequestState;
  shippingAddress?: Maybe<TCtpAddress>;
  shippingInfo?: Maybe<TCtpShippingInfo>;
  shippingRateInput?: Maybe<
    TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
  >;
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  store?: Maybe<TCtpStore>;
  storeRef?: Maybe<TCtpKeyReference>;
  taxCalculationMode: TCtpTaxCalculationMode;
  taxMode: TCtpTaxMode;
  taxRoundingMode: TCtpRoundingMode;
  taxedPrice?: Maybe<TCtpTaxedPrice>;
  totalPrice: TCtpMoney;
  version: Scalars['Long']['output'];
};

export type TCtpQuoteRequest_LineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuoteRequestCreated = TCtpMessagePayload & {
  __typename?: 'QuoteRequestCreated';
  quoteRequest: TCtpQuoteRequest;
  type: Scalars['String']['output'];
};

export type TCtpQuoteRequestCustomerChanged = TCtpMessagePayload & {
  __typename?: 'QuoteRequestCustomerChanged';
  customer?: Maybe<TCtpCustomer>;
  customerRef: TCtpReference;
  previousCustomer?: Maybe<TCtpCustomer>;
  previousCustomerRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpQuoteRequestDeleted = TCtpMessagePayload & {
  __typename?: 'QuoteRequestDeleted';
  type: Scalars['String']['output'];
};

export type TCtpQuoteRequestDraft = {
  cart?: InputMaybe<TCtpResourceIdentifierInput>;
  cartVersion?: InputMaybe<Scalars['Long']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<TCtpReferenceInput>;
};

/** Fields to access QuoteRequests. */
export type TCtpQuoteRequestQueryInterface = {
  quoteRequest?: Maybe<TCtpQuoteRequest>;
  quoteRequests: TCtpQuoteRequestQueryResult;
};

/** Fields to access QuoteRequests. */
export type TCtpQuoteRequestQueryInterface_QuoteRequestArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

/** Fields to access QuoteRequests. */
export type TCtpQuoteRequestQueryInterface_QuoteRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpQuoteRequestQueryResult = {
  __typename?: 'QuoteRequestQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpQuoteRequest>;
  total: Scalars['Long']['output'];
};

export enum TCtpQuoteRequestState {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Closed = 'Closed',
  Rejected = 'Rejected',
  Submitted = 'Submitted',
  UnderReview = 'UnderReview',
}

export type TCtpQuoteRequestStateChanged = TCtpMessagePayload & {
  __typename?: 'QuoteRequestStateChanged';
  oldQuoteRequestState: TCtpQuoteRequestState;
  quoteRequestState: TCtpQuoteRequestState;
  type: Scalars['String']['output'];
};

export type TCtpQuoteRequestStateTransition = TCtpMessagePayload & {
  __typename?: 'QuoteRequestStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<TCtpState>;
  oldStateRef?: Maybe<TCtpReference>;
  state?: Maybe<TCtpState>;
  stateRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpQuoteRequestUpdateAction = {
  changeCustomer?: InputMaybe<TCtpChangeQuoteRequestCustomer>;
  changeQuoteRequestState?: InputMaybe<TCtpChangeQuoteRequestState>;
  setCustomField?: InputMaybe<TCtpSetQuoteRequestCustomField>;
  setCustomType?: InputMaybe<TCtpSetQuoteRequestCustomType>;
  transitionState?: InputMaybe<TCtpTransitionQuoteRequestState>;
};

export enum TCtpQuoteState {
  Accepted = 'Accepted',
  Declined = 'Declined',
  DeclinedForRenegotiation = 'DeclinedForRenegotiation',
  Pending = 'Pending',
  RenegotiationAddressed = 'RenegotiationAddressed',
  Withdrawn = 'Withdrawn',
}

export type TCtpQuoteStateChanged = TCtpMessagePayload & {
  __typename?: 'QuoteStateChanged';
  oldQuoteState: TCtpQuoteState;
  quoteState: TCtpQuoteState;
  type: Scalars['String']['output'];
};

export type TCtpQuoteStateTransition = TCtpMessagePayload & {
  __typename?: 'QuoteStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<TCtpState>;
  oldStateRef?: Maybe<TCtpReference>;
  state?: Maybe<TCtpState>;
  stateRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpQuoteUpdateAction = {
  changeCustomer?: InputMaybe<TCtpChangeQuoteCustomer>;
  changeQuoteState?: InputMaybe<TCtpChangeQuoteState>;
  requestQuoteRenegotiation?: InputMaybe<TCtpRequestQuoteRenegotiation>;
  setCustomField?: InputMaybe<TCtpSetQuoteCustomField>;
  setCustomType?: InputMaybe<TCtpSetQuoteCustomType>;
  transitionState?: InputMaybe<TCtpTransitionQuoteState>;
};

export type TCtpRangeCount = {
  type: Scalars['String']['output'];
};

export type TCtpRangeCountDouble = TCtpRangeCount & {
  __typename?: 'RangeCountDouble';
  count: Scalars['Int']['output'];
  from: Scalars['Float']['output'];
  fromStr: Scalars['String']['output'];
  max: Scalars['Float']['output'];
  mean: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  to: Scalars['Float']['output'];
  toStr: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  totalCount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpRangeCountLong = TCtpRangeCount & {
  __typename?: 'RangeCountLong';
  count: Scalars['Int']['output'];
  from: Scalars['Long']['output'];
  fromStr: Scalars['String']['output'];
  max: Scalars['Long']['output'];
  mean: Scalars['Float']['output'];
  min: Scalars['Long']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  to: Scalars['Long']['output'];
  toStr: Scalars['String']['output'];
  total: Scalars['Long']['output'];
  totalCount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpRangeElementInput = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type TCtpRangeFacetInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  countProducts?: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
  ranges: Array<TCtpRangeElementInput>;
};

export type TCtpRangeFacetResult = TCtpFacetResult & {
  __typename?: 'RangeFacetResult';
  dataType: Scalars['String']['output'];
  ranges: Array<TCtpRangeCountDouble | TCtpRangeCountLong>;
  type: Scalars['String']['output'];
};

export type TCtpRangeFilterInput = {
  path: Scalars['String']['input'];
  ranges: Array<TCtpRangeElementInput>;
};

export type TCtpRawCustomField = {
  __typename?: 'RawCustomField';
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<
    | TCtpAssociateRole
    | TCtpBusinessUnit
    | TCtpCart
    | TCtpCartDiscount
    | TCtpCategory
    | TCtpChannel
    | TCtpCustomObject
    | TCtpCustomer
    | TCtpCustomerGroup
    | TCtpDiscountCode
    | TCtpExtension
    | TCtpInventoryEntry
    | TCtpMessage
    | TCtpOrder
    | TCtpProduct
    | TCtpProductDiscount
    | TCtpProductTypeDefinition
    | TCtpReview
    | TCtpShippingMethod
    | TCtpShoppingList
    | TCtpState
    | TCtpStore
    | TCtpTaxCategory
    | TCtpTypeDefinition
    | TCtpZone
  >;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<
    | TCtpAssociateRole
    | TCtpBusinessUnit
    | TCtpCart
    | TCtpCartDiscount
    | TCtpCategory
    | TCtpChannel
    | TCtpCustomObject
    | TCtpCustomer
    | TCtpCustomerGroup
    | TCtpDiscountCode
    | TCtpExtension
    | TCtpInventoryEntry
    | TCtpMessage
    | TCtpOrder
    | TCtpProduct
    | TCtpProductDiscount
    | TCtpProductTypeDefinition
    | TCtpReview
    | TCtpShippingMethod
    | TCtpShoppingList
    | TCtpState
    | TCtpStore
    | TCtpTaxCategory
    | TCtpTypeDefinition
    | TCtpZone
  >;
  value: Scalars['Json']['output'];
};

export type TCtpRawProductAttribute = {
  __typename?: 'RawProductAttribute';
  attributeDefinition?: Maybe<TCtpAttributeDefinition>;
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<
    | TCtpAssociateRole
    | TCtpBusinessUnit
    | TCtpCart
    | TCtpCartDiscount
    | TCtpCategory
    | TCtpChannel
    | TCtpCustomObject
    | TCtpCustomer
    | TCtpCustomerGroup
    | TCtpDiscountCode
    | TCtpExtension
    | TCtpInventoryEntry
    | TCtpMessage
    | TCtpOrder
    | TCtpProduct
    | TCtpProductDiscount
    | TCtpProductTypeDefinition
    | TCtpReview
    | TCtpShippingMethod
    | TCtpShoppingList
    | TCtpState
    | TCtpStore
    | TCtpTaxCategory
    | TCtpTypeDefinition
    | TCtpZone
  >;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<
    | TCtpAssociateRole
    | TCtpBusinessUnit
    | TCtpCart
    | TCtpCartDiscount
    | TCtpCategory
    | TCtpChannel
    | TCtpCustomObject
    | TCtpCustomer
    | TCtpCustomerGroup
    | TCtpDiscountCode
    | TCtpExtension
    | TCtpInventoryEntry
    | TCtpMessage
    | TCtpOrder
    | TCtpProduct
    | TCtpProductDiscount
    | TCtpProductTypeDefinition
    | TCtpReview
    | TCtpShippingMethod
    | TCtpShoppingList
    | TCtpState
    | TCtpStore
    | TCtpTaxCategory
    | TCtpTypeDefinition
    | TCtpZone
  >;
  value: Scalars['Json']['output'];
};

export type TCtpRawProductSearchAttribute = {
  __typename?: 'RawProductSearchAttribute';
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<
    | TCtpAssociateRole
    | TCtpBusinessUnit
    | TCtpCart
    | TCtpCartDiscount
    | TCtpCategory
    | TCtpChannel
    | TCtpCustomObject
    | TCtpCustomer
    | TCtpCustomerGroup
    | TCtpDiscountCode
    | TCtpExtension
    | TCtpInventoryEntry
    | TCtpMessage
    | TCtpOrder
    | TCtpProduct
    | TCtpProductDiscount
    | TCtpProductTypeDefinition
    | TCtpReview
    | TCtpShippingMethod
    | TCtpShoppingList
    | TCtpState
    | TCtpStore
    | TCtpTaxCategory
    | TCtpTypeDefinition
    | TCtpZone
  >;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<
    | TCtpAssociateRole
    | TCtpBusinessUnit
    | TCtpCart
    | TCtpCartDiscount
    | TCtpCategory
    | TCtpChannel
    | TCtpCustomObject
    | TCtpCustomer
    | TCtpCustomerGroup
    | TCtpDiscountCode
    | TCtpExtension
    | TCtpInventoryEntry
    | TCtpMessage
    | TCtpOrder
    | TCtpProduct
    | TCtpProductDiscount
    | TCtpProductTypeDefinition
    | TCtpReview
    | TCtpShippingMethod
    | TCtpShoppingList
    | TCtpState
    | TCtpStore
    | TCtpTaxCategory
    | TCtpTypeDefinition
    | TCtpZone
  >;
  value: Scalars['Json']['output'];
};

export type TCtpRecalculateCart = {
  updateProductData?: InputMaybe<Scalars['Boolean']['input']>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurrencePolicy = TCtpVersioned & {
  __typename?: 'RecurrencePolicy';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  schedule?: Maybe<TCtpStandardSchedule>;
  version: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurrencePolicy_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurrencePolicy_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpRecurrencePolicyDraft = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  schedule?: InputMaybe<TCtpRecurrencePolicyScheduleInput>;
};

export type TCtpRecurrencePolicyQueryResult = {
  __typename?: 'RecurrencePolicyQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpRecurrencePolicy>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurrencePolicyRef = {
  __typename?: 'RecurrencePolicyRef';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TCtpRecurrencePolicyReferenceIdentifier = {
  __typename?: 'RecurrencePolicyReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type TCtpRecurrencePolicySchedule = {
  type: Scalars['String']['output'];
};

export type TCtpRecurrencePolicyScheduleInput = {
  standard?: InputMaybe<TCtpStandardScheduleInput>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurringOrder = TCtpVersioned & {
  __typename?: 'RecurringOrder';
  businessUnit?: Maybe<TCtpBusinessUnit>;
  businessUnitRef?: Maybe<TCtpKeyReference>;
  cart?: Maybe<TCtpCart>;
  cartRef: TCtpReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customer?: Maybe<TCtpCustomer>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerRef?: Maybe<TCtpReference>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  lastOrderAt?: Maybe<Scalars['DateTime']['output']>;
  originOrder?: Maybe<TCtpOrder>;
  originOrderRef?: Maybe<TCtpReference>;
  recurringOrderState: TCtpRecurringOrderState;
  schedule: TCtpStandardSchedule;
  skipConfiguration?: Maybe<TCtpCounter>;
  startsAt: Scalars['DateTime']['output'];
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  version: Scalars['Long']['output'];
};

export type TCtpRecurringOrderCreated = TCtpMessagePayload & {
  __typename?: 'RecurringOrderCreated';
  recurringOrder: TCtpRecurringOrder;
  type: Scalars['String']['output'];
};

export type TCtpRecurringOrderCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'RecurringOrderCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpRecurringOrderCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'RecurringOrderCustomFieldChanged';
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type TCtpRecurringOrderCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'RecurringOrderCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpRecurringOrderCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'RecurringOrderCustomTypeRemoved';
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpRecurringOrderCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'RecurringOrderCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpRecurringOrderDeleted = TCtpMessagePayload & {
  __typename?: 'RecurringOrderDeleted';
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurringOrderDraft = {
  cart: TCtpResourceIdentifierInput;
  cartVersion: Scalars['Long']['input'];
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  recurringOrderState?: InputMaybe<TCtpRecurringOrderState>;
  startsAt: Scalars['DateTime']['input'];
  state?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpRecurringOrderKeySet = TCtpMessagePayload & {
  __typename?: 'RecurringOrderKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpRecurringOrderQueryResult = {
  __typename?: 'RecurringOrderQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpRecurringOrder>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpRecurringOrderState {
  Active = 'Active',
  Canceled = 'Canceled',
  Expired = 'Expired',
  Failed = 'Failed',
  Paused = 'Paused',
}

export type TCtpRecurringOrderStateChanged = TCtpMessagePayload & {
  __typename?: 'RecurringOrderStateChanged';
  oldRecurringOrderState: TCtpRecurringOrderState;
  recurringOrderState: TCtpRecurringOrderState;
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpRecurringOrderStateTransition = TCtpMessagePayload & {
  __typename?: 'RecurringOrderStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<TCtpState>;
  oldStateRef?: Maybe<TCtpReference>;
  state?: Maybe<TCtpState>;
  stateRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpRecurringOrderUpdateAction = {
  setCustomField?: InputMaybe<TCtpSetRecurringOrderCustomField>;
  setCustomType?: InputMaybe<TCtpSetRecurringOrderCustomType>;
  setKey?: InputMaybe<TCtpSetRecurringOrderKey>;
  setOrderSkipConfiguration?: InputMaybe<TCtpSetRecurringOrderOrderSkipConfiguration>;
  setPauseRecurringOrder?: InputMaybe<TCtpSetPauseRecurringOrder>;
  setRecurringOrderState?: InputMaybe<TCtpSetRecurringOrderState>;
  setResumeRecurringOrder?: InputMaybe<TCtpSetRecurringOrderResumeRecurringOrder>;
  transitionState?: InputMaybe<TCtpTransitionRecurringOrderState>;
};

export type TCtpReference = {
  __typename?: 'Reference';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TCtpReferenceAttribute = TCtpAttribute & {
  __typename?: 'ReferenceAttribute';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TCtpReferenceAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'ReferenceAttributeDefinitionType';
    name: Scalars['String']['output'];
    referenceTypeId: Scalars['String']['output'];
  };

export type TCtpReferenceExpandable = {
  id: Scalars['String']['output'];
};

export type TCtpReferenceField = TCtpCustomField & {
  __typename?: 'ReferenceField';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TCtpReferenceId = {
  __typename?: 'ReferenceId';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type TCtpReferenceInput = {
  id: Scalars['String']['input'];
  typeId: Scalars['String']['input'];
};

export type TCtpReferenceType = TCtpFieldType & {
  __typename?: 'ReferenceType';
  name: Scalars['String']['output'];
  referenceTypeId: Scalars['String']['output'];
};

export type TCtpReferenceTypeDefinitionDraft = {
  referenceTypeId: Scalars['String']['input'];
};

export type TCtpRefreshTokenLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'RefreshTokenLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpRefreshTokenLimitsProjection = {
  __typename?: 'RefreshTokenLimitsProjection';
  total: TCtpRefreshTokenLimitWithCurrent;
};

export type TCtpRejectApprovalFlow = {
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRelativeDiscountValue = TCtpCartDiscountValue &
  TCtpProductDiscountValue & {
    __typename?: 'RelativeDiscountValue';
    permyriad: Scalars['Int']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpRelativeDiscountValueInput = {
  permyriad: Scalars['Int']['input'];
};

export type TCtpRemoveAssociateRolePermission = {
  permission: TCtpPermission;
};

export type TCtpRemoveAttributeGroupAttribute = {
  attribute: TCtpAttributeReferenceInput;
};

export type TCtpRemoveBusinessUnitAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveBusinessUnitAssociate = {
  customer: TCtpResourceIdentifierInput;
};

export type TCtpRemoveBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveBusinessUnitStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCartCustomLineItem = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveCartDiscountCode = {
  discountCode: TCtpReferenceInput;
};

export type TCtpRemoveCartDiscountStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCartItemShippingAddress = {
  addressKey: Scalars['String']['input'];
};

export type TCtpRemoveCartLineItem = {
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetailsToRemove?: InputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpRemoveCartPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCartShippingMethod = {
  shippingKey: Scalars['String']['input'];
};

export type TCtpRemoveCategoryAsset = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveChannelRoles = {
  roles: Array<TCtpChannelRole>;
};

export type TCtpRemoveCustomerAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveCustomerBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpRemoveCustomerGroupAssignment = {
  customerGroup: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCustomerShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveCustomerStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpRemoveInventoryEntryQuantity = {
  quantity: Scalars['Long']['input'];
};

export type TCtpRemoveMyBusinessUnitAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveMyBusinessUnitAssociate = {
  customer: TCtpResourceIdentifierInput;
};

export type TCtpRemoveMyBusinessUnitBillingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveMyBusinessUnitShippingAddressId = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveOrderDelivery = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveOrderItemShippingAddress = {
  addressKey: Scalars['String']['input'];
};

export type TCtpRemoveOrderParcelFromDelivery = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpRemoveProductAsset = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpRemoveProductFromCategory = {
  category: TCtpResourceIdentifierInput;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpRemoveProductImage = {
  imageUrl: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpRemoveProductPrice = {
  priceId?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpRemoveProductSelectionProduct = {
  product: TCtpResourceIdentifierInput;
};

export type TCtpRemoveProductTailoringAsset = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpRemoveProductTailoringImage = {
  imageUrl: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpRemoveProductVariant = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpRemoveProductVariantTailoring = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpRemoveShippingMethodShippingRate = {
  shippingRate: TCtpShippingRateDraft;
  zone: TCtpResourceIdentifierInput;
};

export type TCtpRemoveShippingMethodZone = {
  zone: TCtpResourceIdentifierInput;
};

export type TCtpRemoveShoppingListLineItem = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpRemoveShoppingListTextLineItem = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveStagedChanges = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveStagedOrderCustomLineItem = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveStagedOrderCustomLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderCustomLineItemOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStagedOrderDelivery = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveStagedOrderDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderDeliveryOutput';
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStagedOrderDiscountCode = {
  discountCode: TCtpReferenceInput;
};

export type TCtpRemoveStagedOrderDiscountCodeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderDiscountCodeOutput';
    discountCode?: Maybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStagedOrderItemShippingAddress = {
  addressKey: Scalars['String']['input'];
};

export type TCtpRemoveStagedOrderItemShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderItemShippingAddressOutput';
    addressKey: Scalars['String']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStagedOrderLineItem = {
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Long']['input']>;
  shippingDetailsToRemove?: InputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpRemoveStagedOrderLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderLineItemOutput';
    externalPrice?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
    externalTotalPrice?: Maybe<TCtpExternalLineItemTotalPrice>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    quantity?: Maybe<Scalars['Long']['output']>;
    shippingDetailsToRemove?: Maybe<TCtpItemShippingDetailsDraftOutput>;
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStagedOrderParcelFromDelivery = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRemoveStagedOrderParcelFromDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderParcelFromDeliveryOutput';
    parcelId?: Maybe<Scalars['String']['output']>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStagedOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpRemoveStagedOrderPaymentOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderPaymentOutput';
    paymentResId: TCtpResourceIdentifier;
    type: Scalars['String']['output'];
  };

export type TCtpRemoveStandalonePriceTier = {
  minimumQuantity: Scalars['Int']['input'];
};

export type TCtpRemoveStateRoles = {
  roles: Array<TCtpStateRole>;
};

export type TCtpRemoveStoreCountry = {
  country: TCtpStoreCountryInput;
};

export type TCtpRemoveStoreDistributionChannel = {
  distributionChannel: TCtpResourceIdentifierInput;
};

export type TCtpRemoveStoreProductSelection = {
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpRemoveStoreSupplyChannel = {
  supplyChannel: TCtpResourceIdentifierInput;
};

export type TCtpRemoveTypeFieldDefinition = {
  fieldName: Scalars['String']['input'];
};

export type TCtpRemoveZoneLocation = {
  location: TCtpZoneLocation;
};

export type TCtpRequestQuoteRenegotiation = {
  buyerComment?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpResourceIdentifier = {
  __typename?: 'ResourceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type TCtpResourceIdentifierInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
};

/** Stores information about returns connected to this order. */
export type TCtpReturnInfo = {
  __typename?: 'ReturnInfo';
  items: Array<TCtpCustomLineItemReturnItem | TCtpLineItemReturnItem>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
};

export type TCtpReturnInfoAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ReturnInfoAdded';
    returnInfo: TCtpReturnInfo;
    type: Scalars['String']['output'];
  };

export type TCtpReturnInfoDraftType = {
  items: Array<TCtpReturnItemDraftType>;
  returnDate?: InputMaybe<Scalars['DateTime']['input']>;
  returnTrackingId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpReturnInfoDraftTypeOutput = {
  __typename?: 'ReturnInfoDraftTypeOutput';
  items: Array<TCtpReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
};

export type TCtpReturnInfoSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ReturnInfoSet';
    returnInfo?: Maybe<Array<TCtpReturnInfo>>;
    type: Scalars['String']['output'];
  };

export type TCtpReturnItem = {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  paymentState: TCtpReturnPaymentState;
  quantity: Scalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
  type: Scalars['String']['output'];
};

export type TCtpReturnItemDraftType = {
  comment?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  shipmentState: TCtpReturnShipmentState;
};

export type TCtpReturnItemDraftTypeOutput = {
  __typename?: 'ReturnItemDraftTypeOutput';
  comment?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<TCtpCustomFieldsCommand>;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
};

export enum TCtpReturnPaymentState {
  Initial = 'Initial',
  NonRefundable = 'NonRefundable',
  NotRefunded = 'NotRefunded',
  Refunded = 'Refunded',
}

export enum TCtpReturnShipmentState {
  Advised = 'Advised',
  BackInStock = 'BackInStock',
  Returned = 'Returned',
  Unusable = 'Unusable',
}

export type TCtpRevertStagedChanges = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpRevertStagedVariantChanges = {
  variantId: Scalars['Int']['input'];
};

export type TCtpReview = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Review';
    authorName?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    customer?: Maybe<TCtpCustomer>;
    customerRef?: Maybe<TCtpReference>;
    id: Scalars['String']['output'];
    includedInStatistics: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    locale?: Maybe<Scalars['Locale']['output']>;
    rating?: Maybe<Scalars['Int']['output']>;
    state?: Maybe<TCtpState>;
    stateRef?: Maybe<TCtpReference>;
    target?: Maybe<TCtpChannel | TCtpProduct>;
    targetRef?: Maybe<TCtpReference>;
    text?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    uniquenessValue?: Maybe<Scalars['String']['output']>;
    version: Scalars['Long']['output'];
  };

export type TCtpReviewCreated = TCtpMessagePayload & {
  __typename?: 'ReviewCreated';
  review: TCtpReview;
  type: Scalars['String']['output'];
};

export type TCtpReviewDraft = {
  authorName?: InputMaybe<Scalars['String']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customer?: InputMaybe<TCtpResourceIdentifierInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<TCtpResourceIdentifierInput>;
  target?: InputMaybe<TCtpTargetReferenceInput>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uniquenessValue?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpReviewQueryResult = {
  __typename?: 'ReviewQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpReview>;
  total: Scalars['Long']['output'];
};

export type TCtpReviewRatingSet = TCtpMessagePayload & {
  __typename?: 'ReviewRatingSet';
  includedInStatistics: Scalars['Boolean']['output'];
  newRating?: Maybe<Scalars['Int']['output']>;
  oldRating?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<TCtpChannel | TCtpProduct>;
  targetRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpReviewRatingStatistics = {
  __typename?: 'ReviewRatingStatistics';
  averageRating: Scalars['Float']['output'];
  count: Scalars['Long']['output'];
  highestRating: Scalars['Int']['output'];
  lowestRating: Scalars['Int']['output'];
  ratingsDistribution: Scalars['Json']['output'];
};

export type TCtpReviewStateTransition = TCtpMessagePayload & {
  __typename?: 'ReviewStateTransition';
  force: Scalars['Boolean']['output'];
  newIncludedInStatistics: Scalars['Boolean']['output'];
  newState?: Maybe<TCtpState>;
  newStateRef: TCtpReference;
  oldIncludedInStatistics: Scalars['Boolean']['output'];
  oldState?: Maybe<TCtpState>;
  oldStateRef?: Maybe<TCtpReference>;
  target?: Maybe<TCtpChannel | TCtpProduct>;
  targetRef?: Maybe<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpReviewTarget = {
  id: Scalars['String']['output'];
};

export type TCtpReviewUpdateAction = {
  setAuthorName?: InputMaybe<TCtpSetReviewAuthorName>;
  setCustomField?: InputMaybe<TCtpSetReviewCustomField>;
  setCustomType?: InputMaybe<TCtpSetReviewCustomType>;
  setCustomer?: InputMaybe<TCtpSetReviewCustomer>;
  setKey?: InputMaybe<TCtpSetReviewKey>;
  setLocale?: InputMaybe<TCtpSetReviewLocale>;
  setRating?: InputMaybe<TCtpSetReviewRating>;
  setTarget?: InputMaybe<TCtpSetReviewTarget>;
  setText?: InputMaybe<TCtpSetReviewText>;
  setTitle?: InputMaybe<TCtpSetReviewTitle>;
  transitionState?: InputMaybe<TCtpTransitionReviewState>;
};

export enum TCtpRoundingMode {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down) */
  HalfDown = 'HalfDown',
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). Default rounding mode as used in IEEE 754 computing functions and operators. */
  HalfEven = 'HalfEven',
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */
  HalfUp = 'HalfUp',
}

export type TCtpRuleApprover = {
  __typename?: 'RuleApprover';
  associateRole: TCtpAssociateRole;
  associateRoleRef: TCtpKeyReference;
};

export type TCtpRuleApproverDraft = {
  associateRole: TCtpResourceIdentifierInput;
};

export type TCtpRuleRequester = {
  __typename?: 'RuleRequester';
  associateRole: TCtpAssociateRole;
  associateRoleRef: TCtpKeyReference;
};

export type TCtpRuleRequesterDraft = {
  associateRole: TCtpResourceIdentifierInput;
};

export type TCtpSnsDestination = TCtpDestination & {
  __typename?: 'SNSDestination';
  accessKey?: Maybe<Scalars['String']['output']>;
  accessSecret?: Maybe<Scalars['String']['output']>;
  authenticationMode: TCtpAwsAuthenticationMode;
  topicArn: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpSnsDestinationInput = {
  accessKey?: InputMaybe<Scalars['String']['input']>;
  accessSecret?: InputMaybe<Scalars['String']['input']>;
  authenticationMode?: InputMaybe<TCtpAwsAuthenticationMode>;
  topicArn: Scalars['String']['input'];
};

export type TCtpSqsDestination = TCtpDestination & {
  __typename?: 'SQSDestination';
  accessKey?: Maybe<Scalars['String']['output']>;
  accessSecret?: Maybe<Scalars['String']['output']>;
  authenticationMode: TCtpAwsAuthenticationMode;
  queueUrl: Scalars['String']['output'];
  region: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TCtpSqsDestinationInput = {
  accessKey?: InputMaybe<Scalars['String']['input']>;
  accessSecret?: InputMaybe<Scalars['String']['input']>;
  authenticationMode?: InputMaybe<TCtpAwsAuthenticationMode>;
  queueUrl: Scalars['String']['input'];
  region: Scalars['String']['input'];
};

export type TCtpScopedPrice = {
  __typename?: 'ScopedPrice';
  channel?: Maybe<TCtpChannel>;
  channelRef?: Maybe<TCtpReference>;
  country?: Maybe<Scalars['String']['output']>;
  currentValue: TCtpHighPrecisionMoney | TCtpMoney;
  custom?: Maybe<TCtpCustomFieldsType>;
  customerGroup?: Maybe<TCtpCustomerGroup>;
  customerGroupRef?: Maybe<TCtpReference>;
  discounted?: Maybe<TCtpDiscountedProductSearchPriceValue>;
  id: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpScoreShippingRateInput = TCtpShippingRateInput & {
  __typename?: 'ScoreShippingRateInput';
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpScoreShippingRateInputDraft = {
  score: Scalars['Int']['input'];
};

export type TCtpScoreShippingRateInputDraftOutput =
  TCtpShippingRateInputDraftOutput & {
    __typename?: 'ScoreShippingRateInputDraftOutput';
    score: Scalars['Int']['output'];
    type: Scalars['String']['output'];
  };

export type TCtpSearchFacetInput = {
  model?: InputMaybe<TCtpSearchFacetModelInput>;
  string?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSearchFacetModelInput = {
  range?: InputMaybe<TCtpRangeFacetInput>;
  terms?: InputMaybe<TCtpTermsFacetInput>;
};

export type TCtpSearchFilterInput = {
  model?: InputMaybe<TCtpSearchFilterModelInput>;
  string?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSearchFilterModelInput = {
  exists?: InputMaybe<TCtpExistsFilterInput>;
  missing?: InputMaybe<TCtpMissingFilterInput>;
  range?: InputMaybe<TCtpRangeFilterInput>;
  tree?: InputMaybe<TCtpTreeFilterInput>;
  value?: InputMaybe<TCtpValueFilterInput>;
};

export type TCtpSearchIndexingConfiguration = {
  __typename?: 'SearchIndexingConfiguration';
  businessUnits?: Maybe<TCtpBusinessUnitSearchConfiguration>;
  customers?: Maybe<TCtpCustomerSearchConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  discountCodes?: Maybe<TCtpDiscountCodeSearchConfiguration>;
  orders?: Maybe<TCtpOrderSearchConfiguration>;
  products?: Maybe<TCtpSearchIndexingConfigurationValues>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  productsSearch?: Maybe<TCtpProductsSearchConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  standalonePrices?: Maybe<TCtpStandalonePriceSearchConfiguration>;
};

export type TCtpSearchIndexingConfigurationValues = {
  __typename?: 'SearchIndexingConfigurationValues';
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status?: Maybe<TCtpSearchIndexingStatus>;
};

export enum TCtpSearchIndexingStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
  Indexing = 'Indexing',
}

export type TCtpSearchKeyword = {
  __typename?: 'SearchKeyword';
  suggestTokenizer?: Maybe<
    TCtpCustomSuggestTokenizer | TCtpWhitespaceSuggestTokenizer
  >;
  text: Scalars['String']['output'];
};

export type TCtpSearchKeywordArgument = {
  locale: Scalars['Locale']['input'];
  searchKeyword: Scalars['String']['input'];
};

export type TCtpSearchKeywordInput = {
  keywords: Array<TCtpSearchKeywordItemInput>;
  locale: Scalars['Locale']['input'];
};

export type TCtpSearchKeywordItemInput = {
  suggestTokenizer?: InputMaybe<TCtpBaseSearchKeywordInput>;
  text: Scalars['String']['input'];
};

export type TCtpSearchKeywordProductSearch = {
  __typename?: 'SearchKeywordProductSearch';
  suggestTokenizer?: Maybe<
    | TCtpCustomSuggestTokenizerProductSearch
    | TCtpWhitespaceSuggestTokenizerProductSearch
  >;
  text: Scalars['String']['output'];
};

export type TCtpSearchKeywords = {
  __typename?: 'SearchKeywords';
  locale: Scalars['Locale']['output'];
  searchKeywords: Array<TCtpSearchKeyword>;
};

export type TCtpSearchKeywordsProductSearch = {
  __typename?: 'SearchKeywordsProductSearch';
  locale: Scalars['Locale']['output'];
  searchKeywords: Array<TCtpSearchKeywordProductSearch>;
};

export type TCtpSearchLimitsProjection = {
  __typename?: 'SearchLimitsProjection';
  maxTextSize: TCtpLimit;
};

/** In order to decide which of the matching items will actually be discounted */
export enum TCtpSelectionMode {
  Cheapest = 'Cheapest',
  MostExpensive = 'MostExpensive',
}

export type TCtpSelectionOfProduct = {
  __typename?: 'SelectionOfProduct';
  createdAt: Scalars['DateTime']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  productSelection?: Maybe<TCtpProductSelection>;
  productSelectionRef: TCtpReference;
  variantExclusion?: Maybe<TCtpProductVariantExclusion>;
  variantSelection?: Maybe<
    | TCtpProductVariantSelectionIncludeAllExcept
    | TCtpProductVariantSelectionIncludeOnly
  >;
};

export type TCtpSelectionOfProductQueryResult = {
  __typename?: 'SelectionOfProductQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpSelectionOfProduct>;
  total: Scalars['Long']['output'];
};

export type TCtpSetApprovalFlowCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetApprovalFlowCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetApprovalRuleApprovers = {
  approvers: TCtpApproverHierarchyDraft;
};

export type TCtpSetApprovalRuleCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetApprovalRuleCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetApprovalRuleDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetApprovalRuleKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetApprovalRuleName = {
  name: Scalars['String']['input'];
};

export type TCtpSetApprovalRulePredicate = {
  predicate: Scalars['String']['input'];
};

export type TCtpSetApprovalRuleRequesters = {
  requesters: Array<TCtpRuleRequesterDraft>;
};

export type TCtpSetApprovalRuleStatus = {
  status: TCtpApprovalRuleStatus;
};

export type TCtpSetAssociateRoleCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetAssociateRoleCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetAssociateRoleName = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetAssociateRolePermissions = {
  permissions?: InputMaybe<Array<TCtpPermission>>;
};

export type TCtpSetAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'SetAttributeDefinitionType';
  elementType:
    | TCtpBooleanAttributeDefinitionType
    | TCtpDateAttributeDefinitionType
    | TCtpDateTimeAttributeDefinitionType
    | TCtpEnumAttributeDefinitionType
    | TCtpLocalizableEnumAttributeDefinitionType
    | TCtpLocalizableTextAttributeDefinitionType
    | TCtpMoneyAttributeDefinitionType
    | TCtpNestedAttributeDefinitionType
    | TCtpNumberAttributeDefinitionType
    | TCtpReferenceAttributeDefinitionType
    | TCtpSetAttributeDefinitionType
    | TCtpTextAttributeDefinitionType
    | TCtpTimeAttributeDefinitionType;
  name: Scalars['String']['output'];
};

export type TCtpSetAttributeGroupAttributes = {
  attributes: Array<TCtpAttributeReferenceInput>;
};

export type TCtpSetAttributeGroupDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetAttributeGroupKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitAddressCustomField = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitAddressCustomType = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitAssociates = {
  associates?: InputMaybe<Array<TCtpAssociateDraft>>;
};

export type TCtpSetBusinessUnitContactEmail = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetBusinessUnitStoreMode = {
  storeMode?: InputMaybe<Scalars['String']['input']>;
  stores?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetBusinessUnitStores = {
  stores: Array<TCtpResourceIdentifierInput>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetBusinessUnitUnitType = {
  parentUnit?: InputMaybe<TCtpResourceIdentifierInput>;
  unitType: TCtpBusinessUnitType;
};

export type TCtpSetCartAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartBillingAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetCartBillingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartBillingAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartBusinessUnit = {
  businessUnit: TCtpResourceIdentifierInput;
};

export type TCtpSetCartCountry = {
  country?: InputMaybe<Scalars['Country']['input']>;
};

export type TCtpSetCartCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemCustomField = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemCustomType = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemShippingDetails = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpSetCartCustomLineItemTaxAmount = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxAmount?: InputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemTaxRate = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomShippingMethod = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomerEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartCustomerGroup = {
  customerGroup?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartCustomerId = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetCartDirectDiscounts = {
  discounts: Array<TCtpDirectDiscountDraft>;
};

export type TCtpSetCartDiscountCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartDiscountCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartDiscountDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCartDiscountKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartDiscountStores = {
  stores?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetCartDiscountValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetCartDiscountValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetCartDiscountValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetCartItemShippingAddressCustomField = {
  addressKey: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartItemShippingAddressCustomType = {
  addressKey: Scalars['String']['input'];
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemDistributionChannel = {
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemInventoryMode = {
  inventoryMode?: InputMaybe<TCtpInventoryMode>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemPrice = {
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemShippingDetails = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpSetCartLineItemSupplyChannel = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartLineItemTaxAmount = {
  externalTaxAmount?: InputMaybe<TCtpExternalTaxAmountDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemTaxRate = {
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLineItemTotalPrice = {
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpSetCartShippingAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetCartShippingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartShippingAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartShippingCustomField = {
  name: Scalars['String']['input'];
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartShippingCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartShippingMethod = {
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartShippingMethodTaxAmount = {
  externalTaxAmount?: InputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartShippingMethodTaxRate = {
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCartShippingRateInput = {
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpSetCartTotalTax = {
  externalTaxPortions?: InputMaybe<Array<TCtpTaxPortionDraft>>;
  externalTotalGross?: InputMaybe<TCtpMoneyInput>;
};

export type TCtpSetCategoryAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryAssetDescription = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryAssetKey = {
  assetId: Scalars['String']['input'];
  assetKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryAssetSources = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<TCtpAssetSourceInput>>;
};

export type TCtpSetCategoryAssetTags = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TCtpSetCategoryCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryExternalId = {
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCategoryMetaDescription = {
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryMetaKeywords = {
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryMetaTitle = {
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetChannelAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetChannelAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetChannelAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetChannelCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetChannelCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetChannelGeoLocation = {
  geoLocation?: InputMaybe<TCtpGeometryInput>;
};

export type TCtpSetChannelRoles = {
  roles: Array<TCtpChannelRole>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpSetCustomLineItemRecurrenceInfo = {
  customLineItemId: Scalars['String']['input'];
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpCustomLineItemRecurrenceInfoInputDraft>;
};

export type TCtpSetCustomerAddressCustomField = {
  addressId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerAddressCustomType = {
  addressId: Scalars['String']['input'];
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerAuthenticationMode = {
  authMode: TCtpAuthenticationMode;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerCompanyName = {
  companyName?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerDateOfBirth = {
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
};

export type TCtpSetCustomerDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerExternalId = {
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerFirstName = {
  firstName?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerGroup = {
  customerGroup?: InputMaybe<TCtpResourceIdentifierInput>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetCustomerGroupAssignments = {
  customerGroupAssignments: Array<TCtpCustomerGroupAssignmentDraft>;
};

export type TCtpSetCustomerGroupCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerGroupCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerGroupKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerLastName = {
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpSetCustomerMiddleName = {
  middleName?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerNumber = {
  customerNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerSalutation = {
  salutation?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerStores = {
  stores: Array<TCtpResourceIdentifierInput>;
};

export type TCtpSetCustomerTitle = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetCustomerVatId = {
  vatId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetDiscountCodeCartPredicate = {
  cartPredicate?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetDiscountCodeCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetDiscountCodeCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetDiscountCodeDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetDiscountCodeKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetDiscountCodeMaxApplications = {
  maxApplications?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpSetDiscountCodeMaxApplicationsPerCustomer = {
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Long']['input']>;
};

export type TCtpSetDiscountCodeName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetDiscountCodeValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetDiscountCodeValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetDiscountCodeValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetDiscountGroupDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetDiscountGroupKey = {
  key: Scalars['String']['input'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetDiscountGroupName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetDiscountGroupSortOrder = {
  sortOrder: Scalars['String']['input'];
};

export type TCtpSetExtensionKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetExtensionTimeoutInMs = {
  timeoutInMs?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetInventoryEntryCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetInventoryEntryCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetInventoryEntryExpectedDelivery = {
  expectedDelivery?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetInventoryEntryRestockableInDays = {
  restockableInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetInventoryEntrySupplyChannel = {
  supplyChannel?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetInventoryKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpSetLineItemRecurrenceInfo = {
  lineItemId: Scalars['String']['input'];
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrenceInfo?: InputMaybe<TCtpLineItemRecurrenceInfoInputDraft>;
};

export type TCtpSetMyBusinessUnitAddressCustomField = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitAddressCustomType = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitContactEmail = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitDefaultBillingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitDefaultShippingAddress = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  addressKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyCartShippingMethod = {
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetMyQuoteRequestCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetMyQuoteRequestCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderBillingAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetOrderBillingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderBillingAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderBusinessUnit = {
  businessUnit?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetOrderCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderCustomLineItemCustomField = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderCustomLineItemCustomType = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderCustomLineItemShippingDetails = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetOrderCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderCustomerEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderCustomerId = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderDeliveryAddress = {
  address?: InputMaybe<TCtpAddressInput>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderDeliveryAddressCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderDeliveryAddressCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderDeliveryCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderDeliveryCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderDeliveryItems = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items: Array<TCtpDeliveryItemDraftType>;
};

export type TCtpSetOrderEditComment = {
  comment?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderEditCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderEditCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderEditKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderEditStagedActions = {
  stagedActions: Array<TCtpStagedOrderUpdateAction>;
};

export type TCtpSetOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String']['input'];
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderLineItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderLineItemShippingDetails = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetOrderLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpSetOrderNumber = {
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderParcelCustomField = {
  name: Scalars['String']['input'];
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderParcelCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderParcelItems = {
  items: Array<TCtpDeliveryItemDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderParcelMeasurements = {
  measurements?: InputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderParcelTrackingData = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpSetOrderPurchaseOrderNumber = {
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderReturnInfo = {
  items?: InputMaybe<Array<TCtpReturnInfoDraftType>>;
};

export type TCtpSetOrderReturnItemCustomField = {
  name: Scalars['String']['input'];
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderReturnItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderReturnPaymentState = {
  paymentState: TCtpReturnPaymentState;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderReturnShipmentState = {
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  shipmentState: TCtpReturnShipmentState;
};

export type TCtpSetOrderShippingAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetOrderShippingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderShippingAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderShippingCustomField = {
  name: Scalars['String']['input'];
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderShippingCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetOrderStore = {
  store?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetPauseRecurringOrder = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentAmountPaid = {
  amount?: InputMaybe<TCtpMoneyInput>;
};

export type TCtpSetPaymentAmountRefunded = {
  amount?: InputMaybe<TCtpMoneyInput>;
};

export type TCtpSetPaymentAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentAuthorization = {
  amount?: InputMaybe<TCtpMoneyInput>;
  until?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetPaymentCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentCustomer = {
  customer?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetPaymentExternalId = {
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentInterfaceId = {
  interfaceId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentMethodInfoInterface = {
  interface: Scalars['String']['input'];
};

export type TCtpSetPaymentMethodInfoMethod = {
  method?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentMethodInfoName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetPaymentStatusInterfaceCode = {
  interfaceCode?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentStatusInterfaceText = {
  interfaceText?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentTransactionCustomField = {
  name: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetPaymentTransactionCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  transactionId: Scalars['String']['input'];
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAssetDescription = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAssetKey = {
  assetId: Scalars['String']['input'];
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAssetSources = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<TCtpAssetSourceInput>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAssetTags = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAttribute = {
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductAttributeInAllVariants = {
  name: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductCategoryOrderHint = {
  categoryId: Scalars['String']['input'];
  orderHint?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductDiscountDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetProductDiscountKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductDiscountValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetProductDiscountValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetProductDiscountValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetProductDiscountedPrice = {
  discounted?: InputMaybe<TCtpDiscountedProductPriceValueInput>;
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductImageLabel = {
  imageUrl: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductLevelAttribute = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TCtpSetProductMetaAttributes = {
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductMetaDescription = {
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductMetaKeywords = {
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductMetaTitle = {
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductPriceCustomField = {
  name: Scalars['String']['input'];
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductPriceCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductPriceKey = {
  key?: InputMaybe<Scalars['String']['input']>;
  priceId: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductPriceMode = {
  priceMode?: InputMaybe<TCtpPriceMode>;
};

export type TCtpSetProductPrices = {
  prices: Array<TCtpProductPriceDataInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductSelectionCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductSelectionCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductSelectionKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductSelectionVariantExclusion = {
  product: TCtpResourceIdentifierInput;
  variantExclusion?: InputMaybe<TCtpProductVariantExclusionDraft>;
};

export type TCtpSetProductSelectionVariantSelection = {
  product: TCtpResourceIdentifierInput;
  variantSelection?: InputMaybe<TCtpProductVariantSelectionDraft>;
};

export type TCtpSetProductSku = {
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId: Scalars['Int']['input'];
};

export type TCtpSetProductTailoringAssetCustomField = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetCustomType = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetDescription = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetKey = {
  assetId: Scalars['String']['input'];
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetSources = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<TCtpAssetSourceInput>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetTags = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetKey?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAttribute = {
  name: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringAttributeInAllVariants = {
  name: Scalars['String']['input'];
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetProductTailoringDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringImageLabel = {
  imageUrl: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringImages = {
  images?: InputMaybe<Array<TCtpImageInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProductTailoringMetaAttributes = {
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringMetaDescription = {
  metaDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringMetaKeywords = {
  metaKeywords?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringMetaTitle = {
  metaTitle?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringSlug = {
  slug?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetProductTaxCategory = {
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetProductVariantKey = {
  key?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetProjectSettingsExternalOAuth = {
  externalOAuth?: InputMaybe<TCtpExternalOAuthDraft>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetProjectSettingsMyBusinessUnitAssociateRoleOnCreation = {
  associateRole?: InputMaybe<TCtpResourceIdentifierInput>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetProjectSettingsProductVsCartDiscountCombination = {
  productVsCartDiscountCombination?: InputMaybe<TCtpProductVsCartDiscountCombination>;
};

export type TCtpSetProjectSettingsShippingRateInputType = {
  shippingRateInputType?: InputMaybe<TCtpShippingRateInputTypeInput>;
};

export type TCtpSetQuoteCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetQuoteCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetQuoteRequestCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetQuoteRequestCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetRecurringOrderCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetRecurringOrderCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetRecurringOrderKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetRecurringOrderOrderSkipConfiguration = {
  skipConfigurationInputDraft?: InputMaybe<TCtpSkipConfigurationInputDraft>;
  updatedExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetRecurringOrderResumeRecurringOrder = {
  resumesAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetRecurringOrderState = {
  recurringOrderState: TCtpRecurringOrderState;
};

export type TCtpSetReviewAuthorName = {
  authorName?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetReviewCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetReviewCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetReviewCustomer = {
  customer?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetReviewKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetReviewLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpSetReviewRating = {
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetReviewTarget = {
  target?: InputMaybe<TCtpTargetReferenceInput>;
};

export type TCtpSetReviewText = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetReviewTitle = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetSearchKeywords = {
  searchKeywords: Array<TCtpSearchKeywordInput>;
  staged?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TCtpSetShippingMethodCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShippingMethodCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShippingMethodDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShippingMethodKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShippingMethodLocalizedDescription = {
  localizedDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShippingMethodLocalizedName = {
  localizedName?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShippingMethodPredicate = {
  predicate?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListAnonymousId = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListBusinessUnit = {
  businessUnit: TCtpResourceIdentifierInput;
};

export type TCtpSetShoppingListCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListCustomer = {
  customer?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetShoppingListDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSetShoppingListDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShoppingListKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListLineItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListSlug = {
  slug?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShoppingListStore = {
  store?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetShoppingListTextLineItemCustomField = {
  name: Scalars['String']['input'];
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListTextLineItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetShoppingListTextLineItemDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  textLineItemId?: InputMaybe<Scalars['String']['input']>;
  textLineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderBillingAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetStagedOrderBillingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderBillingAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBillingAddressCustomFieldOutput';
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderBillingAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderBillingAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBillingAddressCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderBillingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBillingAddressOutput';
    address?: Maybe<TCtpAddressDraft>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderBusinessUnit = {
  businessUnit?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderBusinessUnitOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBusinessUnitOutput';
    businessUnitResId?: Maybe<TCtpResourceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCountry = {
  country?: InputMaybe<Scalars['Country']['input']>;
};

export type TCtpSetStagedOrderCountryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCountryOutput';
    country?: Maybe<Scalars['Country']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomFieldOutput';
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderCustomLineItemCustomField = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemCustomFieldOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderCustomLineItemCustomType = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomLineItemShippingDetails = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetStagedOrderCustomLineItemShippingDetailsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemShippingDetailsOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    shippingDetails?: Maybe<TCtpItemShippingDetailsDraftOutput>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomLineItemTaxAmount = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxAmount?: InputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemTaxAmountOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemTaxAmountOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    externalTaxAmount?: Maybe<TCtpExternalTaxAmountDraftOutput>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomLineItemTaxRate = {
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemTaxRateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemTaxRateOutput';
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomShippingMethod = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderCustomShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomShippingMethodOutput';
    custom?: Maybe<TCtpCustomFieldsCommand>;
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodName: Scalars['String']['output'];
    shippingRate: TCtpShippingRate;
    taxCategoryResId?: Maybe<TCtpResourceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomerEmail = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomerEmailOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomerEmailOutput';
    email?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomerGroup = {
  customerGroup?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderCustomerGroupOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomerGroupOutput';
    customerGroupResId?: Maybe<TCtpCustomerGroupReferenceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomerId = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomerIdOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomerIdOutput';
    customerId?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryAddress = {
  address?: InputMaybe<TCtpAddressInput>;
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryAddressCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryAddressCustomFieldOutput';
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderDeliveryAddressCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryAddressCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryAddressOutput';
    address?: Maybe<TCtpAddressDraft>;
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryCustomField = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryCustomFieldOutput';
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderDeliveryCustomType = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryItems = {
  deliveryId?: InputMaybe<Scalars['String']['input']>;
  deliveryKey?: InputMaybe<Scalars['String']['input']>;
  items: Array<TCtpDeliveryItemDraftType>;
};

export type TCtpSetStagedOrderDeliveryItemsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryItemsOutput';
    deliveryId?: Maybe<Scalars['String']['output']>;
    deliveryKey?: Maybe<Scalars['String']['output']>;
    items: Array<TCtpDeliveryItem>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderDirectDiscounts = {
  discounts: Array<TCtpDirectDiscountDraft>;
};

export type TCtpSetStagedOrderDirectDiscountsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDirectDiscountsOutput';
    discounts: Array<TCtpDirectDiscountDraftOutput>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderItemShippingAddressCustomField = {
  addressKey: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderItemShippingAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderItemShippingAddressCustomFieldOutput';
    addressKey: Scalars['String']['output'];
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderItemShippingAddressCustomType = {
  addressKey: Scalars['String']['input'];
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderItemShippingAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderItemShippingAddressCustomTypeOutput';
    addressKey: Scalars['String']['output'];
    custom: TCtpCustomFieldsCommand;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemCustomField = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemCustomFieldOutput';
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderLineItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemDistributionChannel = {
  distributionChannel?: InputMaybe<TCtpResourceIdentifierInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemDistributionChannelOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemDistributionChannelOutput';
    distributionChannelResId?: Maybe<TCtpChannelReferenceIdentifier>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemPrice = {
  externalPrice?: InputMaybe<TCtpBaseMoneyInput>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemPriceOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemPriceOutput';
    externalPrice?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemShippingDetails = {
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingDetails?: InputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetStagedOrderLineItemShippingDetailsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemShippingDetailsOutput';
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    shippingDetails?: Maybe<TCtpItemShippingDetailsDraftOutput>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemTaxAmount = {
  externalTaxAmount?: InputMaybe<TCtpExternalTaxAmountDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemTaxAmountOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemTaxAmountOutput';
    externalTaxAmount?: Maybe<TCtpExternalTaxAmountDraftOutput>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemTaxRate = {
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemTaxRateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemTaxRateOutput';
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemTotalPrice = {
  externalTotalPrice?: InputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemTotalPriceOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemTotalPriceOutput';
    externalTotalPrice?: Maybe<TCtpExternalLineItemTotalPrice>;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderLocale = {
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpSetStagedOrderLocaleOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLocaleOutput';
    locale?: Maybe<Scalars['Locale']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderOrderNumber = {
  orderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderOrderNumberOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderOrderNumberOutput';
    orderNumber?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderOrderTotalTax = {
  externalTaxPortions?: InputMaybe<Array<TCtpTaxPortionDraft>>;
  externalTotalGross?: InputMaybe<TCtpMoneyInput>;
};

export type TCtpSetStagedOrderOrderTotalTaxOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderOrderTotalTaxOutput';
    externalTaxPortions: Array<TCtpTaxPortion>;
    externalTotalGross?: Maybe<TCtpMoney>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelCustomField = {
  name: Scalars['String']['input'];
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelCustomFieldOutput';
    name: Scalars['String']['output'];
    parcelId?: Maybe<Scalars['String']['output']>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderParcelCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    parcelId?: Maybe<Scalars['String']['output']>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelItems = {
  items: Array<TCtpDeliveryItemDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelItemsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelItemsOutput';
    items: Array<TCtpDeliveryItem>;
    parcelId?: Maybe<Scalars['String']['output']>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelMeasurements = {
  measurements?: InputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelMeasurementsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelMeasurementsOutput';
    measurements?: Maybe<TCtpParcelMeasurements>;
    parcelId?: Maybe<Scalars['String']['output']>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelTrackingData = {
  parcelId?: InputMaybe<Scalars['String']['input']>;
  parcelKey?: InputMaybe<Scalars['String']['input']>;
  trackingData?: InputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpSetStagedOrderParcelTrackingDataOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelTrackingDataOutput';
    parcelId?: Maybe<Scalars['String']['output']>;
    parcelKey?: Maybe<Scalars['String']['output']>;
    trackingData?: Maybe<TCtpTrackingData>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderPurchaseOrderNumber = {
  purchaseOrderNumber?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderPurchaseOrderNumberOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderPurchaseOrderNumberOutput';
    purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnInfo = {
  items?: InputMaybe<Array<TCtpReturnInfoDraftType>>;
};

export type TCtpSetStagedOrderReturnInfoOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnInfoOutput';
    items: Array<TCtpReturnInfoDraftTypeOutput>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnItemCustomField = {
  name: Scalars['String']['input'];
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderReturnItemCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnItemCustomFieldOutput';
    name: Scalars['String']['output'];
    returnItemId?: Maybe<Scalars['String']['output']>;
    returnItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderReturnItemCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderReturnItemCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnItemCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    returnItemId?: Maybe<Scalars['String']['output']>;
    returnItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnPaymentState = {
  paymentState: TCtpReturnPaymentState;
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderReturnPaymentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnPaymentStateOutput';
    paymentState: TCtpReturnPaymentState;
    returnItemId?: Maybe<Scalars['String']['output']>;
    returnItemKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnShipmentState = {
  returnItemId?: InputMaybe<Scalars['String']['input']>;
  returnItemKey?: InputMaybe<Scalars['String']['input']>;
  shipmentState: TCtpReturnShipmentState;
};

export type TCtpSetStagedOrderReturnShipmentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnShipmentStateOutput';
    returnItemId?: Maybe<Scalars['String']['output']>;
    returnItemKey?: Maybe<Scalars['String']['output']>;
    shipmentState: TCtpReturnShipmentState;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddress = {
  address?: InputMaybe<TCtpAddressInput>;
};

export type TCtpSetStagedOrderShippingAddressAndCustomShippingMethod = {
  address: TCtpAddressInput;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethodName: Scalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderShippingAddressAndCustomShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressAndCustomShippingMethodOutput';
    address: TCtpAddressDraft;
    custom?: Maybe<TCtpCustomFieldsCommand>;
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodName: Scalars['String']['output'];
    shippingRate: TCtpShippingRate;
    taxCategoryResId?: Maybe<TCtpResourceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddressAndShippingMethod = {
  address: TCtpAddressInput;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderShippingAddressAndShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressAndShippingMethodOutput';
    address: TCtpAddressDraft;
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodResId?: Maybe<TCtpResourceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddressCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressCustomFieldOutput';
    name: Scalars['String']['output'];
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderShippingAddressCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressOutput';
    address?: Maybe<TCtpAddressDraft>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingCustomField = {
  name: Scalars['String']['input'];
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingCustomFieldOutput';
    name: Scalars['String']['output'];
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
    value?: Maybe<Scalars['Json']['output']>;
  };

export type TCtpSetStagedOrderShippingCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingMethod = {
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingMethodOutput';
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodResId?: Maybe<TCtpResourceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingMethodTaxAmount = {
  externalTaxAmount?: InputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingMethodTaxAmountOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingMethodTaxAmountOutput';
    externalTaxAmount?: Maybe<TCtpExternalTaxAmountDraftOutput>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingMethodTaxRate = {
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingMethodTaxRateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingMethodTaxRateOutput';
    externalTaxRate?: Maybe<TCtpExternalTaxRateDraftOutput>;
    shippingKey?: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingRateInput = {
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpSetStagedOrderShippingRateInputOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingRateInputOutput';
    shippingRateInput?: Maybe<
      | TCtpClassificationShippingRateInputDraftOutput
      | TCtpScoreShippingRateInputDraftOutput
    >;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedOrderStore = {
  store?: InputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderStoreOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderStoreOutput';
    storeResId?: Maybe<TCtpResourceIdentifier>;
    type: Scalars['String']['output'];
  };

export type TCtpSetStagedQuoteCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedQuoteCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedQuoteSellerComment = {
  sellerComment?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStagedQuoteValidTo = {
  validTo?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetStandalonePriceCustomFields = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStandalonePriceDiscountedPrice = {
  discounted?: InputMaybe<TCtpDiscountedProductPriceValueInput>;
};

export type TCtpSetStandalonePriceKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStandalonePriceTiers = {
  tiers: Array<TCtpProductPriceTierInput>;
};

export type TCtpSetStandalonePriceValidFrom = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetStandalonePriceValidFromAndUntil = {
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetStandalonePriceValidUntil = {
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpSetStateDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetStateName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetStateRoles = {
  roles: Array<TCtpStateRole>;
};

export type TCtpSetStateTransitions = {
  transitions?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetStoreCountries = {
  countries?: InputMaybe<Array<TCtpStoreCountryInput>>;
};

export type TCtpSetStoreCustomField = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStoreCustomType = {
  fields?: InputMaybe<Array<TCtpCustomFieldInput>>;
  type?: InputMaybe<TCtpResourceIdentifierInput>;
  typeId?: InputMaybe<Scalars['String']['input']>;
  typeKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetStoreDistributionChannels = {
  distributionChannels?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetStoreLanguages = {
  languages?: InputMaybe<Array<Scalars['Locale']['input']>>;
};

export type TCtpSetStoreName = {
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetStoreProductSelections = {
  productSelections?: InputMaybe<
    Array<TCtpProductSelectionSettingInActionInput>
  >;
};

export type TCtpSetStoreSupplyChannels = {
  supplyChannels?: InputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetSubscriptionChanges = {
  changes: Array<TCtpChangeSubscriptionInput>;
};

export type TCtpSetSubscriptionEvents = {
  events: Array<TCtpEventSubscriptionInput>;
};

export type TCtpSetSubscriptionKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetSubscriptionMessages = {
  messages: Array<TCtpMessageSubscriptionInput>;
};

export type TCtpSetTaxCategoryKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetType = TCtpFieldType & {
  __typename?: 'SetType';
  elementType:
    | TCtpBooleanType
    | TCtpDateTimeType
    | TCtpDateType
    | TCtpEnumType
    | TCtpLocalizedEnumType
    | TCtpLocalizedStringType
    | TCtpMoneyType
    | TCtpNumberType
    | TCtpReferenceType
    | TCtpSetType
    | TCtpStringType
    | TCtpTimeType;
  name: Scalars['String']['output'];
};

export type TCtpSetTypeDescription = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetZoneDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSetZoneKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export enum TCtpShipmentState {
  Backorder = 'Backorder',
  Canceled = 'Canceled',
  Delayed = 'Delayed',
  Delivered = 'Delivered',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped',
}

export type TCtpShipping = {
  __typename?: 'Shipping';
  shippingAddress?: Maybe<TCtpAddress>;
  shippingCustomFields?: Maybe<TCtpCustomFieldsType>;
  shippingInfo?: Maybe<TCtpShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingRateInput?: Maybe<
    TCtpClassificationShippingRateInput | TCtpScoreShippingRateInput
  >;
};

export type TCtpShippingContainer = {
  __typename?: 'ShippingContainer';
  multiShipping: Array<TCtpShipping>;
  shippingMode: TCtpShippingMode;
  singleShipping: TCtpShipping;
};

export type TCtpShippingDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: InputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: InputMaybe<TCtpExternalTaxRateDraft>;
  key: Scalars['String']['input'];
  shippingAddress: TCtpAddressInput;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
  shippingRateInput?: InputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpShippingInfo = {
  __typename?: 'ShippingInfo';
  deliveries: Array<TCtpDelivery>;
  discountedPrice?: Maybe<TCtpDiscountedLineItemPrice>;
  price: TCtpMoney;
  shippingMethod?: Maybe<TCtpShippingMethod>;
  shippingMethodName: Scalars['String']['output'];
  shippingMethodRef?: Maybe<TCtpReference>;
  shippingMethodState: TCtpShippingMethodState;
  shippingRate: TCtpShippingRate;
  taxCategory?: Maybe<TCtpTaxCategory>;
  taxCategoryRef?: Maybe<TCtpReference>;
  taxRate?: Maybe<TCtpTaxRate>;
  taxedPrice?: Maybe<TCtpTaxedItemPrice>;
};

export type TCtpShippingInfoImportDraft = {
  deliveries?: Array<TCtpDeliveryDraft>;
  discountedPrice?: InputMaybe<TCtpDiscountedLineItemPriceDraft>;
  price: TCtpMoneyInput;
  shippingMethod?: InputMaybe<TCtpResourceIdentifierInput>;
  shippingMethodName: Scalars['String']['input'];
  shippingMethodState?: TCtpShippingMethodState;
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: InputMaybe<TCtpResourceIdentifierInput>;
  taxRate?: InputMaybe<TCtpTaxRateInput>;
};

export type TCtpShippingMethod = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ShippingMethod';
    active: Scalars['Boolean']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    id: Scalars['String']['output'];
    isDefault: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    localizedDescription?: Maybe<Scalars['String']['output']>;
    localizedDescriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    localizedName?: Maybe<Scalars['String']['output']>;
    localizedNameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    name: Scalars['String']['output'];
    predicate?: Maybe<Scalars['String']['output']>;
    taxCategory?: Maybe<TCtpTaxCategory>;
    taxCategoryRef?: Maybe<TCtpReference>;
    version: Scalars['Long']['output'];
    zoneRates: Array<TCtpZoneRate>;
  };

export type TCtpShippingMethod_LocalizedDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShippingMethod_LocalizedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShippingMethodDraft = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  /** The usage of parameter 'description' is deprecated in favor of using 'localizedDescription' */
  description?: InputMaybe<Scalars['String']['input']>;
  isDefault: Scalars['Boolean']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  localizedDescription?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  localizedName?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name: Scalars['String']['input'];
  predicate?: InputMaybe<Scalars['String']['input']>;
  taxCategory: TCtpResourceIdentifierInput;
  zoneRates?: InputMaybe<Array<TCtpZoneRateDraft>>;
};

export type TCtpShippingMethodLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ShippingMethodLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpShippingMethodLimitsProjection = {
  __typename?: 'ShippingMethodLimitsProjection';
  total: TCtpShippingMethodLimitWithCurrent;
};

export type TCtpShippingMethodQueryResult = {
  __typename?: 'ShippingMethodQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpShippingMethod>;
  total: Scalars['Long']['output'];
};

export enum TCtpShippingMethodState {
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will fail with error ShippingMethodDoesNotMatchCart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  MatchesCart = 'MatchesCart',
}

export type TCtpShippingMethodTargetDraft = {
  quantity: Scalars['Long']['input'];
  shippingMethodKey: Scalars['String']['input'];
};

export type TCtpShippingMethodTargetDraftOutput = {
  __typename?: 'ShippingMethodTargetDraftOutput';
  quantity: Scalars['Long']['output'];
  shippingMethodKey: Scalars['String']['output'];
};

export type TCtpShippingMethodTargetDraftType = {
  quantity: Scalars['Long']['input'];
  shippingMethodKey: Scalars['String']['input'];
};

export type TCtpShippingMethodUpdateAction = {
  addShippingRate?: InputMaybe<TCtpAddShippingMethodShippingRate>;
  addZone?: InputMaybe<TCtpAddShippingMethodZone>;
  changeActive?: InputMaybe<TCtpChangeShippingMethodActive>;
  changeIsDefault?: InputMaybe<TCtpChangeShippingMethodIsDefault>;
  changeName?: InputMaybe<TCtpChangeShippingMethodName>;
  changeTaxCategory?: InputMaybe<TCtpChangeShippingMethodTaxCategory>;
  removeShippingRate?: InputMaybe<TCtpRemoveShippingMethodShippingRate>;
  removeZone?: InputMaybe<TCtpRemoveShippingMethodZone>;
  setCustomField?: InputMaybe<TCtpSetShippingMethodCustomField>;
  setCustomType?: InputMaybe<TCtpSetShippingMethodCustomType>;
  /** This action is deprecated in favor of using 'setLocalizedDescription' */
  setDescription?: InputMaybe<TCtpSetShippingMethodDescription>;
  setKey?: InputMaybe<TCtpSetShippingMethodKey>;
  setLocalizedDescription?: InputMaybe<TCtpSetShippingMethodLocalizedDescription>;
  setLocalizedName?: InputMaybe<TCtpSetShippingMethodLocalizedName>;
  setPredicate?: InputMaybe<TCtpSetShippingMethodPredicate>;
};

/** A field to retrieve available shipping methods for a cart. */
export type TCtpShippingMethodsByCartInterface = {
  shippingMethodsByCart: Array<TCtpShippingMethod>;
};

/** A field to retrieve available shipping methods for a cart. */
export type TCtpShippingMethodsByCartInterface_ShippingMethodsByCartArgs = {
  id: Scalars['String']['input'];
};

export enum TCtpShippingMode {
  /** Allows multiple shipping methods for the cart with their respective shipping addresses */
  Multiple = 'Multiple',
  /** Allows only one shipping method and shipping address for the cart */
  Single = 'Single',
}

/** Shipping Rate */
export type TCtpShippingRate = {
  __typename?: 'ShippingRate';
  freeAbove?: Maybe<TCtpMoney>;
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price: TCtpMoney;
  tiers: Array<
    | TCtpShippingRateCartClassificationPriceTier
    | TCtpShippingRateCartScorePriceTier
    | TCtpShippingRateCartValuePriceTier
  >;
};

export type TCtpShippingRateCartClassificationPriceTier =
  TCtpShippingRatePriceTier & {
    __typename?: 'ShippingRateCartClassificationPriceTier';
    isMatching?: Maybe<Scalars['Boolean']['output']>;
    price: TCtpMoney;
    type: Scalars['String']['output'];
    value: Scalars['String']['output'];
  };

export type TCtpShippingRateCartScorePriceTier = TCtpShippingRatePriceTier & {
  __typename?: 'ShippingRateCartScorePriceTier';
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<TCtpMoney>;
  priceFunction?: Maybe<TCtpPriceFunction>;
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpShippingRateCartValuePriceTier = TCtpShippingRatePriceTier & {
  __typename?: 'ShippingRateCartValuePriceTier';
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  minimumCentAmount: Scalars['Int']['output'];
  price: TCtpMoney;
  type: Scalars['String']['output'];
};

export type TCtpShippingRateDraft = {
  freeAbove?: InputMaybe<TCtpMoneyDraft>;
  price: TCtpMoneyDraft;
  tiers?: InputMaybe<Array<TCtpShippingRatePriceTierDraft>>;
};

export type TCtpShippingRateInput = {
  type: Scalars['String']['output'];
};

export type TCtpShippingRateInputDraft = {
  Classification?: InputMaybe<TCtpClassificationShippingRateInputDraft>;
  Score?: InputMaybe<TCtpScoreShippingRateInputDraft>;
};

export type TCtpShippingRateInputDraftOutput = {
  type: Scalars['String']['output'];
};

export type TCtpShippingRateInputLocalizedEnumValue = {
  __typename?: 'ShippingRateInputLocalizedEnumValue';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
};

export type TCtpShippingRateInputLocalizedEnumValue_LabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShippingRateInputType = {
  type: Scalars['String']['output'];
};

export type TCtpShippingRateInputTypeInput = {
  CartClassification?: InputMaybe<TCtpCartClassificationInput>;
  CartScore?: InputMaybe<TCtpCartScoreInput>;
  CartValue?: InputMaybe<TCtpCartValueInput>;
};

export type TCtpShippingRatePriceTier = {
  type: Scalars['String']['output'];
};

export type TCtpShippingRatePriceTierCartClassificationDraft = {
  price: TCtpMoneyDraft;
  value: Scalars['String']['input'];
};

export type TCtpShippingRatePriceTierCartScoreDraft = {
  price?: InputMaybe<TCtpMoneyDraft>;
  priceFunction?: InputMaybe<TCtpPriceFunctionDraft>;
  score: Scalars['Int']['input'];
};

export type TCtpShippingRatePriceTierCartValueDraft = {
  minimumCentAmount: Scalars['Int']['input'];
  price: TCtpMoneyDraft;
};

export type TCtpShippingRatePriceTierDraft = {
  CartClassification?: InputMaybe<TCtpShippingRatePriceTierCartClassificationDraft>;
  CartScore?: InputMaybe<TCtpShippingRatePriceTierCartScoreDraft>;
  CartValue?: InputMaybe<TCtpShippingRatePriceTierCartValueDraft>;
};

export type TCtpShippingTarget = TCtpCartDiscountTarget & {
  __typename?: 'ShippingTarget';
  type: Scalars['String']['output'];
};

export type TCtpShippingTargetDraft = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
  shippingMethodKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpShippingTargetDraftType = {
  addressKey: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
  shippingMethodKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpShippingTargetInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpShoppingList = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ShoppingList';
    anonymousId?: Maybe<Scalars['String']['output']>;
    businessUnit?: Maybe<TCtpBusinessUnit>;
    businessUnitRef?: Maybe<TCtpKeyReference>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    customer?: Maybe<TCtpCustomer>;
    customerRef?: Maybe<TCtpReference>;
    deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    lineItems: Array<TCtpShoppingListLineItem>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    slug?: Maybe<Scalars['String']['output']>;
    slugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    store?: Maybe<TCtpStore>;
    storeRef?: Maybe<TCtpKeyReference>;
    textLineItems: Array<TCtpTextLineItem>;
    version: Scalars['Long']['output'];
  };

export type TCtpShoppingList_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShoppingList_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShoppingList_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShoppingListDraft = {
  anonymousId?: InputMaybe<Scalars['String']['input']>;
  businessUnit?: InputMaybe<TCtpResourceIdentifierInput>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  customer?: InputMaybe<TCtpResourceIdentifierInput>;
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  lineItems?: InputMaybe<Array<TCtpShoppingListLineItemDraft>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  slug?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  textLineItems?: InputMaybe<Array<TCtpTextLineItemDraft>>;
};

export type TCtpShoppingListLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ShoppingListLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpShoppingListLimitsProjection = {
  __typename?: 'ShoppingListLimitsProjection';
  lineItems: TCtpLimit;
  textLineItems: TCtpLimit;
  total: TCtpShoppingListLimitWithCurrent;
};

export type TCtpShoppingListLineItem = {
  __typename?: 'ShoppingListLineItem';
  addedAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productId: Scalars['String']['output'];
  productSlug?: Maybe<Scalars['String']['output']>;
  productSlugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  productType: TCtpProductTypeDefinition;
  productTypeRef: TCtpReference;
  quantity: Scalars['Int']['output'];
  variant?: Maybe<TCtpProductVariant>;
  variantId?: Maybe<Scalars['Int']['output']>;
};

export type TCtpShoppingListLineItem_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShoppingListLineItem_ProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpShoppingListLineItemAdded = TCtpMessagePayload & {
  __typename?: 'ShoppingListLineItemAdded';
  lineItem: TCtpShoppingListLineItem;
  type: Scalars['String']['output'];
};

export type TCtpShoppingListLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpShoppingListLineItemRemoved = TCtpMessagePayload & {
  __typename?: 'ShoppingListLineItemRemoved';
  lineItem: TCtpShoppingListLineItem;
  type: Scalars['String']['output'];
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type TCtpShoppingListQueryInterface = {
  shoppingList?: Maybe<TCtpShoppingList>;
  shoppingLists: TCtpShoppingListQueryResult;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type TCtpShoppingListQueryInterface_ShoppingListArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type TCtpShoppingListQueryInterface_ShoppingListsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpShoppingListQueryResult = {
  __typename?: 'ShoppingListQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpShoppingList>;
  total: Scalars['Long']['output'];
};

export type TCtpShoppingListUpdateAction = {
  addLineItem?: InputMaybe<TCtpAddShoppingListLineItem>;
  addTextLineItem?: InputMaybe<TCtpAddShoppingListTextLineItem>;
  changeLineItemQuantity?: InputMaybe<TCtpChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: InputMaybe<TCtpChangeShoppingListLineItemsOrder>;
  changeName?: InputMaybe<TCtpChangeShoppingListName>;
  changeTextLineItemName?: InputMaybe<TCtpChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: InputMaybe<TCtpChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: InputMaybe<TCtpChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: InputMaybe<TCtpRemoveShoppingListLineItem>;
  removeTextLineItem?: InputMaybe<TCtpRemoveShoppingListTextLineItem>;
  setAnonymousId?: InputMaybe<TCtpSetShoppingListAnonymousId>;
  setBusinessUnit?: InputMaybe<TCtpSetShoppingListBusinessUnit>;
  setCustomField?: InputMaybe<TCtpSetShoppingListCustomField>;
  setCustomType?: InputMaybe<TCtpSetShoppingListCustomType>;
  setCustomer?: InputMaybe<TCtpSetShoppingListCustomer>;
  setDeleteDaysAfterLastModification?: InputMaybe<TCtpSetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: InputMaybe<TCtpSetShoppingListDescription>;
  setKey?: InputMaybe<TCtpSetShoppingListKey>;
  setLineItemCustomField?: InputMaybe<TCtpSetShoppingListLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<TCtpSetShoppingListLineItemCustomType>;
  setSlug?: InputMaybe<TCtpSetShoppingListSlug>;
  setStore?: InputMaybe<TCtpSetShoppingListStore>;
  setTextLineItemCustomField?: InputMaybe<TCtpSetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: InputMaybe<TCtpSetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: InputMaybe<TCtpSetShoppingListTextLineItemDescription>;
};

export type TCtpShoppingListsConfiguration = {
  __typename?: 'ShoppingListsConfiguration';
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
};

export type TCtpShoppingListsConfigurationInput = {
  deleteDaysAfterLastModification?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpSignUpInMyBusinessUnitDraft = {
  associateRoleAssignments: Array<TCtpAssociateRoleAssignmentDraft>;
  businessUnit: TCtpResourceIdentifierInput;
  customer: TCtpCustomerSignUpDraft;
  version: Scalars['Long']['input'];
};

export type TCtpSimpleAttributeTypeDraft = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSimpleFieldTypeDraft = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpSkipConfiguration = {
  type: Scalars['String']['output'];
};

export type TCtpSkipConfigurationInputDraft = {
  Counter?: InputMaybe<TCtpCounterInputDraft>;
};

export type TCtpStacking = TCtpDiscountTypeCombination & {
  __typename?: 'Stacking';
  type: Scalars['String']['output'];
};

/** Describes how this discount interacts with other discounts */
export enum TCtpStackingMode {
  /** Default. Continue applying other matching discounts after applying this one. */
  Stacking = 'Stacking',
  /** Don’t apply any more matching discounts after this one. */
  StopAfterThisDiscount = 'StopAfterThisDiscount',
}

export type TCtpStagedOrderUpdateAction = {
  addCustomLineItem?: InputMaybe<TCtpAddStagedOrderCustomLineItem>;
  addDelivery?: InputMaybe<TCtpAddStagedOrderDelivery>;
  addDiscountCode?: InputMaybe<TCtpAddStagedOrderDiscountCode>;
  addItemShippingAddress?: InputMaybe<TCtpAddStagedOrderItemShippingAddress>;
  addLineItem?: InputMaybe<TCtpAddStagedOrderLineItem>;
  addParcelToDelivery?: InputMaybe<TCtpAddStagedOrderParcelToDelivery>;
  addPayment?: InputMaybe<TCtpAddStagedOrderPayment>;
  addReturnInfo?: InputMaybe<TCtpAddStagedOrderReturnInfo>;
  addShoppingList?: InputMaybe<TCtpAddStagedOrderShoppingList>;
  changeCustomLineItemMoney?: InputMaybe<TCtpChangeStagedOrderCustomLineItemMoney>;
  changeCustomLineItemQuantity?: InputMaybe<TCtpChangeStagedOrderCustomLineItemQuantity>;
  changeLineItemQuantity?: InputMaybe<TCtpChangeStagedOrderLineItemQuantity>;
  changeOrderState?: InputMaybe<TCtpChangeStagedOrderOrderState>;
  changePaymentState?: InputMaybe<TCtpChangeStagedOrderPaymentState>;
  changeShipmentState?: InputMaybe<TCtpChangeStagedOrderShipmentState>;
  changeTaxCalculationMode?: InputMaybe<TCtpChangeStagedOrderTaxCalculationMode>;
  changeTaxMode?: InputMaybe<TCtpChangeStagedOrderTaxMode>;
  changeTaxRoundingMode?: InputMaybe<TCtpChangeStagedOrderTaxRoundingMode>;
  importCustomLineItemState?: InputMaybe<TCtpImportStagedOrderCustomLineItemState>;
  importLineItemState?: InputMaybe<TCtpImportStagedOrderLineItemState>;
  removeCustomLineItem?: InputMaybe<TCtpRemoveStagedOrderCustomLineItem>;
  removeDelivery?: InputMaybe<TCtpRemoveStagedOrderDelivery>;
  removeDiscountCode?: InputMaybe<TCtpRemoveStagedOrderDiscountCode>;
  removeItemShippingAddress?: InputMaybe<TCtpRemoveStagedOrderItemShippingAddress>;
  removeLineItem?: InputMaybe<TCtpRemoveStagedOrderLineItem>;
  removeParcelFromDelivery?: InputMaybe<TCtpRemoveStagedOrderParcelFromDelivery>;
  removePayment?: InputMaybe<TCtpRemoveStagedOrderPayment>;
  setBillingAddress?: InputMaybe<TCtpSetStagedOrderBillingAddress>;
  setBillingAddressCustomField?: InputMaybe<TCtpSetStagedOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: InputMaybe<TCtpSetStagedOrderBillingAddressCustomType>;
  setBusinessUnit?: InputMaybe<TCtpSetStagedOrderBusinessUnit>;
  setCountry?: InputMaybe<TCtpSetStagedOrderCountry>;
  setCustomField?: InputMaybe<TCtpSetStagedOrderCustomField>;
  setCustomLineItemCustomField?: InputMaybe<TCtpSetStagedOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: InputMaybe<TCtpSetStagedOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: InputMaybe<TCtpSetStagedOrderCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: InputMaybe<TCtpSetStagedOrderCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: InputMaybe<TCtpSetStagedOrderCustomLineItemTaxRate>;
  setCustomShippingMethod?: InputMaybe<TCtpSetStagedOrderCustomShippingMethod>;
  setCustomType?: InputMaybe<TCtpSetStagedOrderCustomType>;
  setCustomerEmail?: InputMaybe<TCtpSetStagedOrderCustomerEmail>;
  setCustomerGroup?: InputMaybe<TCtpSetStagedOrderCustomerGroup>;
  setCustomerId?: InputMaybe<TCtpSetStagedOrderCustomerId>;
  setDeliveryAddress?: InputMaybe<TCtpSetStagedOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: InputMaybe<TCtpSetStagedOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: InputMaybe<TCtpSetStagedOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: InputMaybe<TCtpSetStagedOrderDeliveryCustomField>;
  setDeliveryCustomType?: InputMaybe<TCtpSetStagedOrderDeliveryCustomType>;
  setDeliveryItems?: InputMaybe<TCtpSetStagedOrderDeliveryItems>;
  setDirectDiscounts?: InputMaybe<TCtpSetStagedOrderDirectDiscounts>;
  setItemShippingAddressCustomField?: InputMaybe<TCtpSetStagedOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: InputMaybe<TCtpSetStagedOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: InputMaybe<TCtpSetStagedOrderLineItemCustomField>;
  setLineItemCustomType?: InputMaybe<TCtpSetStagedOrderLineItemCustomType>;
  setLineItemDistributionChannel?: InputMaybe<TCtpSetStagedOrderLineItemDistributionChannel>;
  setLineItemPrice?: InputMaybe<TCtpSetStagedOrderLineItemPrice>;
  setLineItemShippingDetails?: InputMaybe<TCtpSetStagedOrderLineItemShippingDetails>;
  setLineItemTaxAmount?: InputMaybe<TCtpSetStagedOrderLineItemTaxAmount>;
  setLineItemTaxRate?: InputMaybe<TCtpSetStagedOrderLineItemTaxRate>;
  setLineItemTotalPrice?: InputMaybe<TCtpSetStagedOrderLineItemTotalPrice>;
  setLocale?: InputMaybe<TCtpSetStagedOrderLocale>;
  setOrderNumber?: InputMaybe<TCtpSetStagedOrderOrderNumber>;
  setOrderTotalTax?: InputMaybe<TCtpSetStagedOrderOrderTotalTax>;
  setParcelCustomField?: InputMaybe<TCtpSetStagedOrderParcelCustomField>;
  setParcelCustomType?: InputMaybe<TCtpSetStagedOrderParcelCustomType>;
  setParcelItems?: InputMaybe<TCtpSetStagedOrderParcelItems>;
  setParcelMeasurements?: InputMaybe<TCtpSetStagedOrderParcelMeasurements>;
  setParcelTrackingData?: InputMaybe<TCtpSetStagedOrderParcelTrackingData>;
  setPurchaseOrderNumber?: InputMaybe<TCtpSetStagedOrderPurchaseOrderNumber>;
  setReturnInfo?: InputMaybe<TCtpSetStagedOrderReturnInfo>;
  setReturnItemCustomField?: InputMaybe<TCtpSetStagedOrderReturnItemCustomField>;
  setReturnItemCustomType?: InputMaybe<TCtpSetStagedOrderReturnItemCustomType>;
  setReturnPaymentState?: InputMaybe<TCtpSetStagedOrderReturnPaymentState>;
  setReturnShipmentState?: InputMaybe<TCtpSetStagedOrderReturnShipmentState>;
  setShippingAddress?: InputMaybe<TCtpSetStagedOrderShippingAddress>;
  setShippingAddressAndCustomShippingMethod?: InputMaybe<TCtpSetStagedOrderShippingAddressAndCustomShippingMethod>;
  setShippingAddressAndShippingMethod?: InputMaybe<TCtpSetStagedOrderShippingAddressAndShippingMethod>;
  setShippingAddressCustomField?: InputMaybe<TCtpSetStagedOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: InputMaybe<TCtpSetStagedOrderShippingAddressCustomType>;
  setShippingCustomField?: InputMaybe<TCtpSetStagedOrderShippingCustomField>;
  setShippingCustomType?: InputMaybe<TCtpSetStagedOrderShippingCustomType>;
  setShippingMethod?: InputMaybe<TCtpSetStagedOrderShippingMethod>;
  setShippingMethodTaxAmount?: InputMaybe<TCtpSetStagedOrderShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: InputMaybe<TCtpSetStagedOrderShippingMethodTaxRate>;
  setShippingRateInput?: InputMaybe<TCtpSetStagedOrderShippingRateInput>;
  setStore?: InputMaybe<TCtpSetStagedOrderStore>;
  transitionCustomLineItemState?: InputMaybe<TCtpTransitionStagedOrderCustomLineItemState>;
  transitionLineItemState?: InputMaybe<TCtpTransitionStagedOrderLineItemState>;
  transitionState?: InputMaybe<TCtpTransitionStagedOrderState>;
  updateItemShippingAddress?: InputMaybe<TCtpUpdateStagedOrderItemShippingAddress>;
  updateSyncInfo?: InputMaybe<TCtpUpdateStagedOrderSyncInfo>;
};

export type TCtpStagedOrderUpdateActionOutput = {
  type: Scalars['String']['output'];
};

export type TCtpStagedPriceDraft = {
  value: TCtpBaseMoneyInput;
};

export type TCtpStagedQuote = TCtpVersioned & {
  __typename?: 'StagedQuote';
  businessUnit?: Maybe<TCtpBusinessUnit>;
  businessUnitRef?: Maybe<TCtpKeyReference>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  custom?: Maybe<TCtpCustomFieldsType>;
  customer?: Maybe<TCtpCustomer>;
  customerRef?: Maybe<TCtpReference>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quotationCart?: Maybe<TCtpCart>;
  quotationCartRef: TCtpReference;
  quoteRequest?: Maybe<TCtpQuoteRequest>;
  quoteRequestRef: TCtpReference;
  sellerComment?: Maybe<Scalars['String']['output']>;
  stagedQuoteState: TCtpStagedQuoteState;
  state?: Maybe<TCtpState>;
  stateRef?: Maybe<TCtpReference>;
  store?: Maybe<TCtpStore>;
  storeRef?: Maybe<TCtpKeyReference>;
  validTo?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Long']['output'];
};

export type TCtpStagedQuoteCreated = TCtpMessagePayload & {
  __typename?: 'StagedQuoteCreated';
  stagedQuote: TCtpStagedQuote;
  type: Scalars['String']['output'];
};

export type TCtpStagedQuoteDeleted = TCtpMessagePayload & {
  __typename?: 'StagedQuoteDeleted';
  type: Scalars['String']['output'];
};

export type TCtpStagedQuoteDraft = {
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  key?: InputMaybe<Scalars['String']['input']>;
  quoteRequest?: InputMaybe<TCtpResourceIdentifierInput>;
  quoteRequestStateToAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  quoteRequestVersion?: InputMaybe<Scalars['Long']['input']>;
  state?: InputMaybe<TCtpReferenceInput>;
};

export type TCtpStagedQuoteQueryResult = {
  __typename?: 'StagedQuoteQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpStagedQuote>;
  total: Scalars['Long']['output'];
};

export type TCtpStagedQuoteSellerCommentSet = TCtpMessagePayload & {
  __typename?: 'StagedQuoteSellerCommentSet';
  sellerComment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export enum TCtpStagedQuoteState {
  Closed = 'Closed',
  InProgress = 'InProgress',
  Sent = 'Sent',
}

export type TCtpStagedQuoteStateChanged = TCtpMessagePayload & {
  __typename?: 'StagedQuoteStateChanged';
  oldStagedQuoteState: TCtpStagedQuoteState;
  stagedQuoteState: TCtpStagedQuoteState;
  type: Scalars['String']['output'];
};

export type TCtpStagedQuoteStateTransition = TCtpMessagePayload & {
  __typename?: 'StagedQuoteStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<TCtpState>;
  oldStateRef?: Maybe<TCtpReference>;
  state?: Maybe<TCtpState>;
  stateRef: TCtpReference;
  type: Scalars['String']['output'];
};

export type TCtpStagedQuoteUpdateAction = {
  changeStagedQuoteState?: InputMaybe<TCtpChangeStagedQuoteState>;
  setCustomField?: InputMaybe<TCtpSetStagedQuoteCustomField>;
  setCustomType?: InputMaybe<TCtpSetStagedQuoteCustomType>;
  setSellerComment?: InputMaybe<TCtpSetStagedQuoteSellerComment>;
  setValidTo?: InputMaybe<TCtpSetStagedQuoteValidTo>;
  transitionState?: InputMaybe<TCtpTransitionStagedQuoteState>;
};

export type TCtpStagedQuoteValidToSet = TCtpMessagePayload & {
  __typename?: 'StagedQuoteValidToSet';
  type: Scalars['String']['output'];
  validTo?: Maybe<Scalars['DateTime']['output']>;
};

export type TCtpStagedStandalonePrice = {
  __typename?: 'StagedStandalonePrice';
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

/**
 * StandalonePrices are managed and queried through the StandalonePrices API
 * and associated to a ProductVariant through the sku field.
 */
export type TCtpStandalonePrice = TCtpVersioned & {
  __typename?: 'StandalonePrice';
  /**
   * If set to `true`, the StandalonePrice is considered during Product price selection.
   * If set to `false`, the StandalonePrice is not considered during Product price selection and any associated Line Items in a Cart cannot be ordered.
   */
  active: Scalars['Boolean']['output'];
  channel?: Maybe<TCtpChannel>;
  /** Product distribution Channel for which this Price is valid. */
  channelRef?: Maybe<TCtpReference>;
  /** Country for which this Price is valid. */
  country?: Maybe<Scalars['Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  /** Custom Fields for the StandalonePrice. */
  custom?: Maybe<TCtpCustomFieldsType>;
  customerGroup?: Maybe<TCtpCustomerGroup>;
  /** CustomerGroup Reference for which this Price is valid. */
  customerGroupRef?: Maybe<TCtpReference>;
  /** Set if a matching ProductDiscount exists. */
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Unique identifier of the StandalonePrice. */
  id: Scalars['String']['output'];
  /** User-defined unique identifier of the StandalonePrice. */
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrencePolicy?: Maybe<TCtpRecurrencePolicy>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  recurrencePolicyRef?: Maybe<TCtpReference>;
  /** SKU of the ProductVariant to which this Price is associated. */
  sku: Scalars['String']['output'];
  /** Staged changes of the StandalonePrice. Only present if the StandalonePrice has some changes staged. */
  staged?: Maybe<TCtpStagedStandalonePrice>;
  /**
   * Price tiers if any are defined.
   * If `discounted` is present, the tiered Price is ignored for a Product Variant.
   */
  tiers?: Maybe<Array<TCtpProductPriceTier>>;
  /** Date from which the Price is valid. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** Date until the Price is valid. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Money value of this Price. */
  value: TCtpHighPrecisionMoney | TCtpMoney;
  /** Current version of the StandalonePrice. */
  version: Scalars['Long']['output'];
};

export type TCtpStandalonePriceActiveChanged = TCtpMessagePayload & {
  __typename?: 'StandalonePriceActiveChanged';
  active: Scalars['Boolean']['output'];
  oldActive: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceCreated = TCtpMessagePayload & {
  __typename?: 'StandalonePriceCreated';
  standalonePrice: TCtpStandalonePrice;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceDeleted = TCtpMessagePayload & {
  __typename?: 'StandalonePriceDeleted';
  sku?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceDiscountSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceDiscountSet';
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceExpiresAtSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceExpiresAtSet';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceExternalDiscountSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceExternalDiscountSet';
  discounted?: Maybe<TCtpDiscountedProductPriceValue>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceKeySet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceQueryResult = {
  __typename?: 'StandalonePriceQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpStandalonePrice>;
  total: Scalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpStandalonePriceSearchConfiguration = {
  __typename?: 'StandalonePriceSearchConfiguration';
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  status: TCtpStandalonePriceSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpStandalonePriceSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpStandalonePriceStagedChangesApplied = TCtpMessagePayload & {
  __typename?: 'StandalonePriceStagedChangesApplied';
  stagedChanges: TCtpStagedStandalonePrice;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceStagedChangesRemoved = TCtpMessagePayload & {
  __typename?: 'StandalonePriceStagedChangesRemoved';
  stagedChanges?: Maybe<TCtpStagedStandalonePrice>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceTierAdded = TCtpMessagePayload & {
  __typename?: 'StandalonePriceTierAdded';
  tier: TCtpProductPriceTier;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceTierRemoved = TCtpMessagePayload & {
  __typename?: 'StandalonePriceTierRemoved';
  tier: TCtpProductPriceTier;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceTiersSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceTiersSet';
  previousTiers: Array<TCtpProductPriceTier>;
  tiers: Array<TCtpProductPriceTier>;
  type: Scalars['String']['output'];
};

export type TCtpStandalonePriceUpdateAction = {
  addPriceTier?: InputMaybe<TCtpAddStandalonePriceTier>;
  applyStagedChanges?: InputMaybe<TCtpApplyStagedChanges>;
  changeActive?: InputMaybe<TCtpChangeStandalonePriceActive>;
  changeValue?: InputMaybe<TCtpChangeStandalonePriceValue>;
  removePriceTier?: InputMaybe<TCtpRemoveStandalonePriceTier>;
  removeStagedChanges?: InputMaybe<TCtpRemoveStagedChanges>;
  setCustomField?: InputMaybe<TCtpSetStandalonePriceCustomFields>;
  setCustomType?: InputMaybe<TCtpCustomFieldsDraft>;
  setDiscountedPrice?: InputMaybe<TCtpSetStandalonePriceDiscountedPrice>;
  setKey?: InputMaybe<TCtpSetStandalonePriceKey>;
  setPriceTiers?: InputMaybe<TCtpSetStandalonePriceTiers>;
  setValidFrom?: InputMaybe<TCtpSetStandalonePriceValidFrom>;
  setValidFromAndUntil?: InputMaybe<TCtpSetStandalonePriceValidFromAndUntil>;
  setValidUntil?: InputMaybe<TCtpSetStandalonePriceValidUntil>;
};

export type TCtpStandalonePriceValidFromAndUntilSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValidFromAndUntilSet';
  previousValidFrom?: Maybe<Scalars['DateTime']['output']>;
  previousValidUntil?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type TCtpStandalonePriceValidFromSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValidFromSet';
  previousValidFrom?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
};

export type TCtpStandalonePriceValidUntilSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValidUntilSet';
  previousValidUntil?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type TCtpStandalonePriceValueChanged = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValueChanged';
  oldValue?: Maybe<TCtpHighPrecisionMoney | TCtpMoney>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: TCtpHighPrecisionMoney | TCtpMoney;
};

export type TCtpStandardSchedule = TCtpRecurrencePolicySchedule & {
  __typename?: 'StandardSchedule';
  intervalUnit: TCtpIntervalUnit;
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TCtpStandardScheduleInput = {
  intervalUnit: TCtpIntervalUnit;
  value: Scalars['Int']['input'];
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type TCtpState = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'State';
    builtIn: Scalars['Boolean']['output'];
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    id: Scalars['String']['output'];
    initial: Scalars['Boolean']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    roles: Array<TCtpStateRole>;
    transitions?: Maybe<Array<TCtpState>>;
    transitionsRef?: Maybe<Array<TCtpReference>>;
    type: TCtpStateType;
    version: Scalars['Long']['output'];
  };

/** [State](https://docs.commercetools.com/api/projects/states) */
export type TCtpState_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type TCtpState_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpStateDraft = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  initial?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  roles?: InputMaybe<Array<TCtpStateRole>>;
  transitions?: InputMaybe<Array<TCtpReferenceInput>>;
  type: TCtpStateType;
};

export type TCtpStateQueryResult = {
  __typename?: 'StateQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpState>;
  total: Scalars['Long']['output'];
};

export enum TCtpStateRole {
  Return = 'Return',
  ReviewIncludedInStatistics = 'ReviewIncludedInStatistics',
}

export enum TCtpStateType {
  LineItemState = 'LineItemState',
  OrderState = 'OrderState',
  PaymentState = 'PaymentState',
  ProductState = 'ProductState',
  QuoteRequestState = 'QuoteRequestState',
  QuoteState = 'QuoteState',
  RecurringOrderState = 'RecurringOrderState',
  ReviewState = 'ReviewState',
  StagedQuoteState = 'StagedQuoteState',
}

export type TCtpStateUpdateAction = {
  addRoles?: InputMaybe<TCtpAddStateRoles>;
  changeInitial?: InputMaybe<TCtpChangeStateInitial>;
  changeKey?: InputMaybe<TCtpChangeStateKey>;
  changeType?: InputMaybe<TCtpChangeStateType>;
  removeRoles?: InputMaybe<TCtpRemoveStateRoles>;
  setDescription?: InputMaybe<TCtpSetStateDescription>;
  setName?: InputMaybe<TCtpSetStateName>;
  setRoles?: InputMaybe<TCtpSetStateRoles>;
  setTransitions?: InputMaybe<TCtpSetStateTransitions>;
};

/** Stores allow defining different contexts for a project. */
export type TCtpStore = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Store';
    countries?: Maybe<Array<TCtpStoreCountry>>;
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    custom?: Maybe<TCtpCustomFieldsType>;
    distributionChannels: Array<TCtpChannel>;
    distributionChannelsRef: Array<TCtpReference>;
    id: Scalars['String']['output'];
    key: Scalars['String']['output'];
    languages?: Maybe<Array<Scalars['Locale']['output']>>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    productSelections: Array<TCtpProductSelectionSetting>;
    supplyChannels: Array<TCtpChannel>;
    supplyChannelsRef: Array<TCtpReference>;
    version: Scalars['Long']['output'];
  };

/** Stores allow defining different contexts for a project. */
export type TCtpStore_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpStoreCountriesChanged = TCtpMessagePayload & {
  __typename?: 'StoreCountriesChanged';
  addedCountries?: Maybe<Array<TCtpStoreCountry>>;
  removedCountries?: Maybe<Array<TCtpStoreCountry>>;
  type: Scalars['String']['output'];
};

export type TCtpStoreCountry = {
  __typename?: 'StoreCountry';
  code: Scalars['Country']['output'];
};

export type TCtpStoreCountryInput = {
  code: Scalars['Country']['input'];
};

export type TCtpStoreCreated = TCtpMessagePayload & {
  __typename?: 'StoreCreated';
  countries?: Maybe<Array<TCtpStoreCountry>>;
  custom?: Maybe<TCtpCustomFieldsType>;
  distributionChannels: Array<TCtpChannel>;
  distributionChannelsRef: Array<TCtpReference>;
  languages: Array<Scalars['Locale']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  productSelections: Array<TCtpProductSelectionSetting>;
  productSelectionsRef: Array<TCtpReference>;
  supplyChannels: Array<TCtpChannel>;
  supplyChannelsRef: Array<TCtpReference>;
  type: Scalars['String']['output'];
};

export type TCtpStoreCreated_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpStoreDeleted = TCtpMessagePayload & {
  __typename?: 'StoreDeleted';
  type: Scalars['String']['output'];
};

export type TCtpStoreDistributionChannelsChanged = TCtpMessagePayload & {
  __typename?: 'StoreDistributionChannelsChanged';
  addedDistributionChannels?: Maybe<Array<TCtpChannel>>;
  addedDistributionChannelsRef?: Maybe<Array<TCtpReference>>;
  removedDistributionChannels?: Maybe<Array<TCtpChannel>>;
  removedDistributionChannelsRef?: Maybe<Array<TCtpReference>>;
  type: Scalars['String']['output'];
};

export type TCtpStoreLanguagesChanged = TCtpMessagePayload & {
  __typename?: 'StoreLanguagesChanged';
  addedLanguages?: Maybe<Array<Scalars['Locale']['output']>>;
  removedLanguages?: Maybe<Array<Scalars['Locale']['output']>>;
  type: Scalars['String']['output'];
};

export type TCtpStoreLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'StoreLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpStoreLimitsProjection = {
  __typename?: 'StoreLimitsProjection';
  cartDiscounts: TCtpLimit;
  inventorySupplyChannels: TCtpLimit;
  productDistributionChannels: TCtpLimit;
  productSelections: TCtpLimit;
  total: TCtpStoreLimitWithCurrent;
};

export type TCtpStoreNameSet = TCtpMessagePayload & {
  __typename?: 'StoreNameSet';
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  type: Scalars['String']['output'];
};

export type TCtpStoreNameSet_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpStoreProductSelectionsChanged = TCtpMessagePayload & {
  __typename?: 'StoreProductSelectionsChanged';
  addedProductSelections?: Maybe<Array<TCtpProductSelectionSetting>>;
  removedProductSelections?: Maybe<Array<TCtpProductSelectionSetting>>;
  type: Scalars['String']['output'];
  updatedProductSelections?: Maybe<Array<TCtpProductSelectionSetting>>;
};

export type TCtpStoreQueryResult = {
  __typename?: 'StoreQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpStore>;
  total: Scalars['Long']['output'];
};

export type TCtpStoreSupplyChannelsChanged = TCtpMessagePayload & {
  __typename?: 'StoreSupplyChannelsChanged';
  addedSupplyChannels?: Maybe<Array<TCtpChannel>>;
  addedSupplyChannelsRef?: Maybe<Array<TCtpReference>>;
  removedSupplyChannels?: Maybe<Array<TCtpChannel>>;
  removedSupplyChannelsRef?: Maybe<Array<TCtpReference>>;
  type: Scalars['String']['output'];
};

export type TCtpStoreUpdateAction = {
  addCountry?: InputMaybe<TCtpAddStoreCountry>;
  addDistributionChannel?: InputMaybe<TCtpAddStoreDistributionChannel>;
  addProductSelection?: InputMaybe<TCtpAddStoreProductSelection>;
  addSupplyChannel?: InputMaybe<TCtpAddStoreSupplyChannel>;
  changeProductSelectionActive?: InputMaybe<TCtpChangeStoreProductSelectionActive>;
  removeCountry?: InputMaybe<TCtpRemoveStoreCountry>;
  removeDistributionChannel?: InputMaybe<TCtpRemoveStoreDistributionChannel>;
  removeProductSelection?: InputMaybe<TCtpRemoveStoreProductSelection>;
  removeSupplyChannel?: InputMaybe<TCtpRemoveStoreSupplyChannel>;
  setCountries?: InputMaybe<TCtpSetStoreCountries>;
  setCustomField?: InputMaybe<TCtpSetStoreCustomField>;
  setCustomType?: InputMaybe<TCtpSetStoreCustomType>;
  setDistributionChannels?: InputMaybe<TCtpSetStoreDistributionChannels>;
  setLanguages?: InputMaybe<TCtpSetStoreLanguages>;
  setName?: InputMaybe<TCtpSetStoreName>;
  setProductSelections?: InputMaybe<TCtpSetStoreProductSelections>;
  setSupplyChannels?: InputMaybe<TCtpSetStoreSupplyChannels>;
};

export type TCtpStringAttribute = TCtpAttribute & {
  __typename?: 'StringAttribute';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TCtpStringField = TCtpCustomField & {
  __typename?: 'StringField';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TCtpStringType = TCtpFieldType & {
  __typename?: 'StringType';
  name: Scalars['String']['output'];
};

export type TCtpSubRate = {
  __typename?: 'SubRate';
  amount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type TCtpSubRateDraft = {
  amount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type TCtpSubscriptionDraft = {
  changes?: InputMaybe<Array<TCtpChangeSubscriptionInput>>;
  destination: TCtpDestinationInput;
  events?: InputMaybe<Array<TCtpEventSubscriptionInput>>;
  format?: InputMaybe<TCtpSubscriptionFormatInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<Array<TCtpMessageSubscriptionInput>>;
};

export type TCtpSubscriptionFormatInput = {
  CloudEvents?: InputMaybe<TCtpCloudEventsSubscriptionsFormatInput>;
  Platform?: InputMaybe<TCtpPlatformFormatInput>;
};

export enum TCtpSubscriptionHealthStatus {
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  Healthy = 'Healthy',
  ManuallySuspended = 'ManuallySuspended',
  TemporaryError = 'TemporaryError',
}

export type TCtpSubscriptionUpdateAction = {
  changeDestination?: InputMaybe<TCtpChangeSubscriptionDestination>;
  setChanges?: InputMaybe<TCtpSetSubscriptionChanges>;
  setEvents?: InputMaybe<TCtpSetSubscriptionEvents>;
  setKey?: InputMaybe<TCtpSetSubscriptionKey>;
  setMessages?: InputMaybe<TCtpSetSubscriptionMessages>;
};

export type TCtpSubscriptionsLimitsProjection = {
  __typename?: 'SubscriptionsLimitsProjection';
  maxSubscriptions: TCtpLimit;
};

export type TCtpSuggestResult = {
  __typename?: 'SuggestResult';
  searchKeywords: Array<TCtpSuggestResultEntry>;
};

export type TCtpSuggestResultEntry = {
  __typename?: 'SuggestResultEntry';
  locale: Scalars['Locale']['output'];
  suggestions: Array<TCtpSuggestion>;
};

export type TCtpSuggestTokenizer = {
  type: Scalars['String']['output'];
};

export type TCtpSuggestTokenizerProductSearch = {
  type: Scalars['String']['output'];
};

export type TCtpSuggestion = {
  __typename?: 'Suggestion';
  text: Scalars['String']['output'];
};

/** Stores information about order synchronization activities (like export or import). */
export type TCtpSyncInfo = {
  __typename?: 'SyncInfo';
  channel?: Maybe<TCtpChannel>;
  channelRef: TCtpReference;
  externalId?: Maybe<Scalars['String']['output']>;
  syncedAt: Scalars['DateTime']['output'];
};

export type TCtpTargetReferenceInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  typeId: Scalars['String']['input'];
};

export enum TCtpTaxCalculationMode {
  /**
   * Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */
  LineItemLevel = 'LineItemLevel',
  /**
   * This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  UnitPriceLevel = 'UnitPriceLevel',
}

/** Tax Categories define how products are to be taxed in different countries. */
export type TCtpTaxCategory = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'TaxCategory';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name: Scalars['String']['output'];
    rates: Array<TCtpTaxRate>;
    version: Scalars['Long']['output'];
  };

export type TCtpTaxCategoryAddTaxRate = {
  taxRate: TCtpTaxRateDraft;
};

export type TCtpTaxCategoryChangeName = {
  name: Scalars['String']['input'];
};

export type TCtpTaxCategoryDraft = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rates?: InputMaybe<Array<TCtpTaxRateDraft>>;
};

export type TCtpTaxCategoryLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'TaxCategoryLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpTaxCategoryLimitsProjection = {
  __typename?: 'TaxCategoryLimitsProjection';
  total: TCtpTaxCategoryLimitWithCurrent;
};

export type TCtpTaxCategoryQueryResult = {
  __typename?: 'TaxCategoryQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpTaxCategory>;
  total: Scalars['Long']['output'];
};

export type TCtpTaxCategoryRemoveTaxRate = {
  taxRateId?: InputMaybe<Scalars['String']['input']>;
  taxRateKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpTaxCategoryReplaceTaxRate = {
  taxRate: TCtpTaxRateDraft;
  taxRateId?: InputMaybe<Scalars['String']['input']>;
  taxRateKey?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpTaxCategorySetDescription = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpTaxCategoryUpdateAction = {
  addTaxRate?: InputMaybe<TCtpTaxCategoryAddTaxRate>;
  changeName?: InputMaybe<TCtpTaxCategoryChangeName>;
  removeTaxRate?: InputMaybe<TCtpTaxCategoryRemoveTaxRate>;
  replaceTaxRate?: InputMaybe<TCtpTaxCategoryReplaceTaxRate>;
  setDescription?: InputMaybe<TCtpTaxCategorySetDescription>;
  setKey?: InputMaybe<TCtpSetTaxCategoryKey>;
};

export enum TCtpTaxMode {
  /** No taxes are added to the cart. */
  Disabled = 'Disabled',
  /**
   * The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated according to the taxRoundingMode.
   */
  External = 'External',
  /**
   * The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */
  ExternalAmount = 'ExternalAmount',
  /**
   * The tax rates are selected from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated according to the
   * taxRoundingMode.
   */
  Platform = 'Platform',
}

/**
 * Represents the portions that sum up to the totalGross field of a TaxedPrice. The portions are calculated
 * from the TaxRates. If a tax rate has SubRates, they are used and can be identified by name. Tax portions
 * from line items that have the same rate and name will be accumulated to the same tax portion.
 */
export type TCtpTaxPortion = {
  __typename?: 'TaxPortion';
  amount: TCtpMoney;
  name?: Maybe<Scalars['String']['output']>;
  rate: Scalars['Float']['output'];
};

export type TCtpTaxPortionDraft = {
  amount: TCtpMoneyInput;
  name?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
};

export type TCtpTaxRate = {
  __typename?: 'TaxRate';
  amount: Scalars['Float']['output'];
  country: Scalars['Country']['output'];
  id?: Maybe<Scalars['String']['output']>;
  includedInPrice: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subRates: Array<TCtpSubRate>;
};

export type TCtpTaxRateDraft = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  country: Scalars['Country']['input'];
  includedInPrice: Scalars['Boolean']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subRates?: InputMaybe<Array<TCtpSubRateDraft>>;
};

export type TCtpTaxRateInput = {
  amount: Scalars['Float']['input'];
  country: Scalars['Country']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  includedInPrice: Scalars['Boolean']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
  subRates?: InputMaybe<Array<TCtpSubRateDraft>>;
};

export type TCtpTaxedItemPrice = {
  __typename?: 'TaxedItemPrice';
  taxPortions: Array<TCtpTaxPortion>;
  totalGross: TCtpMoney;
  totalNet: TCtpMoney;
  totalTax?: Maybe<TCtpMoney>;
};

export type TCtpTaxedPrice = {
  __typename?: 'TaxedPrice';
  taxPortions: Array<TCtpTaxPortion>;
  totalGross: TCtpMoney;
  totalNet: TCtpMoney;
  totalTax?: Maybe<TCtpMoney>;
};

export type TCtpTaxedPriceDraft = {
  taxPortions: Array<TCtpTaxPortionDraft>;
  totalGross: TCtpBaseMoneyInput;
  totalNet: TCtpBaseMoneyInput;
  totalTax?: InputMaybe<TCtpBaseMoneyInput>;
};

export type TCtpTermCount = {
  __typename?: 'TermCount';
  count: Scalars['Int']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  term: Scalars['String']['output'];
};

export type TCtpTermsFacetInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  countProducts?: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
};

export type TCtpTermsFacetResult = TCtpFacetResult & {
  __typename?: 'TermsFacetResult';
  dataType: Scalars['String']['output'];
  missing: Scalars['Int']['output'];
  other: Scalars['Int']['output'];
  terms: Array<TCtpTermCount>;
  total: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TCtpTextAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'TextAttributeDefinitionType';
  name: Scalars['String']['output'];
};

/** UI hint telling what kind of edit control should be displayed for a text attribute. */
export enum TCtpTextInputHint {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine',
}

export type TCtpTextLineItem = {
  __typename?: 'TextLineItem';
  addedAt: Scalars['DateTime']['output'];
  custom?: Maybe<TCtpCustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  quantity: Scalars['Int']['output'];
};

export type TCtpTextLineItem_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpTextLineItem_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpTextLineItemDraft = {
  addedAt?: InputMaybe<Scalars['DateTime']['input']>;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type TCtpTimeAttribute = TCtpAttribute & {
  __typename?: 'TimeAttribute';
  name: Scalars['String']['output'];
  value: Scalars['Time']['output'];
};

export type TCtpTimeAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'TimeAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type TCtpTimeField = TCtpCustomField & {
  __typename?: 'TimeField';
  name: Scalars['String']['output'];
  value: Scalars['Time']['output'];
};

export type TCtpTimeType = TCtpFieldType & {
  __typename?: 'TimeType';
  name: Scalars['String']['output'];
};

export type TCtpTrackingData = {
  __typename?: 'TrackingData';
  carrier?: Maybe<Scalars['String']['output']>;
  isReturn: Scalars['Boolean']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  providerTransaction?: Maybe<Scalars['String']['output']>;
  trackingId?: Maybe<Scalars['String']['output']>;
};

export type TCtpTrackingDataDraftType = {
  carrier?: InputMaybe<Scalars['String']['input']>;
  isReturn?: InputMaybe<Scalars['Boolean']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerTransaction?: InputMaybe<Scalars['String']['input']>;
  trackingId?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpTransaction = {
  __typename?: 'Transaction';
  amount: TCtpMoney;
  custom?: Maybe<TCtpCustomFieldsType>;
  id: Scalars['String']['output'];
  interactionId?: Maybe<Scalars['String']['output']>;
  state: TCtpTransactionState;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<TCtpTransactionType>;
};

export type TCtpTransactionDraft = {
  amount: TCtpMoneyInput;
  custom?: InputMaybe<TCtpCustomFieldsDraft>;
  interactionId?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<TCtpTransactionState>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: TCtpTransactionType;
};

export enum TCtpTransactionState {
  Failure = 'Failure',
  Initial = 'Initial',
  Pending = 'Pending',
  Success = 'Success',
}

export enum TCtpTransactionType {
  Authorization = 'Authorization',
  CancelAuthorization = 'CancelAuthorization',
  Charge = 'Charge',
  Chargeback = 'Chargeback',
  Refund = 'Refund',
}

export type TCtpTransitionOrderCustomLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fromState: TCtpResourceIdentifierInput;
  quantity: Scalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionOrderLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  fromState: TCtpResourceIdentifierInput;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionOrderState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionPaymentState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionProductState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpReferenceInput;
};

export type TCtpTransitionQuoteRequestState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionQuoteState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionRecurringOrderState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionReviewState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderCustomLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  customLineItemId?: InputMaybe<Scalars['String']['input']>;
  customLineItemKey?: InputMaybe<Scalars['String']['input']>;
  fromState: TCtpResourceIdentifierInput;
  quantity: Scalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderCustomLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'TransitionStagedOrderCustomLineItemStateOutput';
    actualTransitionDate?: Maybe<Scalars['DateTime']['output']>;
    customLineItemId?: Maybe<Scalars['String']['output']>;
    customLineItemKey?: Maybe<Scalars['String']['output']>;
    fromStateResId: TCtpResourceIdentifier;
    quantity: Scalars['Long']['output'];
    toStateResId: TCtpResourceIdentifier;
    type: Scalars['String']['output'];
  };

export type TCtpTransitionStagedOrderLineItemState = {
  actualTransitionDate?: InputMaybe<Scalars['DateTime']['input']>;
  fromState: TCtpResourceIdentifierInput;
  lineItemId?: InputMaybe<Scalars['String']['input']>;
  lineItemKey?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'TransitionStagedOrderLineItemStateOutput';
    actualTransitionDate?: Maybe<Scalars['DateTime']['output']>;
    fromStateResId: TCtpResourceIdentifier;
    lineItemId?: Maybe<Scalars['String']['output']>;
    lineItemKey?: Maybe<Scalars['String']['output']>;
    quantity: Scalars['Long']['output'];
    toStateResId: TCtpResourceIdentifier;
    type: Scalars['String']['output'];
  };

export type TCtpTransitionStagedOrderState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'TransitionStagedOrderStateOutput';
    force: Scalars['Boolean']['output'];
    stateResId: TCtpResourceIdentifier;
    type: Scalars['String']['output'];
  };

export type TCtpTransitionStagedQuoteState = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTreeFilterInput = {
  path: Scalars['String']['input'];
  rootValues: Array<Scalars['String']['input']>;
  subTreeValues: Array<Scalars['String']['input']>;
};

export type TCtpTrigger = {
  __typename?: 'Trigger';
  actions: Array<TCtpActionType>;
  condition?: Maybe<Scalars['String']['output']>;
  resourceTypeId: Scalars['String']['output'];
};

export type TCtpTriggerInput = {
  actions?: InputMaybe<Array<TCtpActionType>>;
  condition?: InputMaybe<Scalars['String']['input']>;
  resourceTypeId: Scalars['String']['input'];
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'TypeDefinition';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    description?: Maybe<Scalars['String']['output']>;
    descriptionAllLocales?: Maybe<Array<TCtpLocalizedString>>;
    fieldDefinitions: Array<TCtpFieldDefinition>;
    id: Scalars['String']['output'];
    key: Scalars['String']['output'];
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    name?: Maybe<Scalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    resourceTypeIds: Array<Scalars['String']['output']>;
    version: Scalars['Long']['output'];
  };

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition_DescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition_FieldDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition_NameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpTypeDefinitionDraft = {
  description?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  fieldDefinitions?: InputMaybe<Array<TCtpFieldDefinitionInput>>;
  key: Scalars['String']['input'];
  name: Array<TCtpLocalizedStringItemInputType>;
  resourceTypeIds: Array<Scalars['String']['input']>;
};

export type TCtpTypeDefinitionQueryResult = {
  __typename?: 'TypeDefinitionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpTypeDefinition>;
  total: Scalars['Long']['output'];
};

export type TCtpTypeUpdateAction = {
  addEnumValue?: InputMaybe<TCtpAddTypeEnumValue>;
  addFieldDefinition?: InputMaybe<TCtpAddTypeFieldDefinition>;
  addLocalizedEnumValue?: InputMaybe<TCtpAddTypeLocalizedEnumValue>;
  changeEnumValueLabel?: InputMaybe<TCtpChangeTypeEnumValueLabel>;
  changeEnumValueOrder?: InputMaybe<TCtpChangeTypeEnumValueOrder>;
  changeFieldDefinitionOrder?: InputMaybe<TCtpChangeTypeFieldDefinitionOrder>;
  changeInputHint?: InputMaybe<TCtpChangeTypeInputHint>;
  changeKey?: InputMaybe<TCtpChangeTypeKey>;
  changeLabel?: InputMaybe<TCtpChangeTypeLabel>;
  changeLocalizedEnumValueLabel?: InputMaybe<TCtpChangeTypeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: InputMaybe<TCtpChangeTypeLocalizedEnumValueOrder>;
  changeName?: InputMaybe<TCtpChangeTypeName>;
  removeFieldDefinition?: InputMaybe<TCtpRemoveTypeFieldDefinition>;
  setDescription?: InputMaybe<TCtpSetTypeDescription>;
};

export type TCtpUnfreezeCart = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpUnpublishProduct = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpUnpublishTailoring = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpUpdateCartItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpUpdateOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpUpdateOrderSyncInfo = {
  channel: TCtpResourceIdentifierInput;
  externalId?: InputMaybe<Scalars['String']['input']>;
  syncedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpUpdateStagedOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpUpdateStagedOrderItemShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'UpdateStagedOrderItemShippingAddressOutput';
    address: TCtpAddressDraft;
    type: Scalars['String']['output'];
  };

export type TCtpUpdateStagedOrderSyncInfo = {
  channel: TCtpResourceIdentifierInput;
  externalId?: InputMaybe<Scalars['String']['input']>;
  syncedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TCtpUpdateStagedOrderSyncInfoOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'UpdateStagedOrderSyncInfoOutput';
    channelResId: TCtpChannelReferenceIdentifier;
    externalId?: Maybe<Scalars['String']['output']>;
    syncedAt?: Maybe<Scalars['DateTime']['output']>;
    type: Scalars['String']['output'];
  };

export type TCtpUserProvidedIdentifiers = {
  __typename?: 'UserProvidedIdentifiers';
  customerNumber?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<TCtpLocalizedString>>;
};

export type TCtpUserProvidedIdentifiers_SlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Locale']['input']>>;
  locale?: InputMaybe<Scalars['Locale']['input']>;
};

export type TCtpValueFacetResult = TCtpFacetResult & {
  __typename?: 'ValueFacetResult';
  count: Scalars['Int']['output'];
  productCount?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
};

export type TCtpValueFilterInput = {
  path: Scalars['String']['input'];
  values: Array<Scalars['String']['input']>;
};

export type TCtpVariantTailoring = {
  __typename?: 'VariantTailoring';
  assets?: Maybe<Array<TCtpAsset>>;
  images?: Maybe<Array<TCtpImage>>;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type TCtpVersioned = {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<TCtpInitiator>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<TCtpInitiator>;
  version: Scalars['Long']['output'];
};

export type TCtpWhitespaceSuggestTokenizer = TCtpSuggestTokenizer & {
  __typename?: 'WhitespaceSuggestTokenizer';
  type: Scalars['String']['output'];
};

export type TCtpWhitespaceSuggestTokenizerInput = {
  dummy?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpWhitespaceSuggestTokenizerProductSearch =
  TCtpSuggestTokenizerProductSearch & {
    __typename?: 'WhitespaceSuggestTokenizerProductSearch';
    type: Scalars['String']['output'];
  };

/** Zones allow defining ShippingRates for specific Locations. */
export type TCtpZone = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Zone';
    createdAt: Scalars['DateTime']['output'];
    createdBy?: Maybe<TCtpInitiator>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['String']['output'];
    key?: Maybe<Scalars['String']['output']>;
    lastModifiedAt: Scalars['DateTime']['output'];
    lastModifiedBy?: Maybe<TCtpInitiator>;
    locations: Array<TCtpLocation>;
    name: Scalars['String']['output'];
    version: Scalars['Long']['output'];
  };

export type TCtpZoneLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ZoneLimitWithCurrent';
  current: Scalars['Long']['output'];
  limit?: Maybe<Scalars['Long']['output']>;
};

export type TCtpZoneLimitsProjection = {
  __typename?: 'ZoneLimitsProjection';
  total: TCtpZoneLimitWithCurrent;
};

export type TCtpZoneLocation = {
  country: Scalars['Country']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type TCtpZoneQueryResult = {
  __typename?: 'ZoneQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<TCtpZone>;
  total: Scalars['Long']['output'];
};

export type TCtpZoneRate = {
  __typename?: 'ZoneRate';
  shippingRates: Array<TCtpShippingRate>;
  zone?: Maybe<TCtpZone>;
  zoneRef?: Maybe<TCtpReference>;
};

export type TCtpZoneRateDraft = {
  shippingRates?: InputMaybe<Array<TCtpShippingRateDraft>>;
  zone: TCtpResourceIdentifierInput;
};

export type TCtpZoneUpdateAction = {
  addLocation?: InputMaybe<TCtpAddZoneLocation>;
  changeName?: InputMaybe<TCtpChangeZoneName>;
  removeLocation?: InputMaybe<TCtpRemoveZoneLocation>;
  setDescription?: InputMaybe<TCtpSetZoneDescription>;
  setKey?: InputMaybe<TCtpSetZoneKey>;
};

export type TCtpAddAttributeDefinition = {
  attributeDefinition: TCtpAttributeDefinitionDraft;
};

export type TCtpAddLocalizedEnumValue = {
  attributeName: Scalars['String']['input'];
  value: TCtpLocalizedEnumValueDraft;
};

export type TCtpAddPlainEnumValue = {
  attributeName: Scalars['String']['input'];
  value: TCtpPlainEnumValueDraft;
};

export type TCtpChangeAttributeName = {
  attributeName: Scalars['String']['input'];
  newAttributeName: Scalars['String']['input'];
};

export type TCtpChangeAttributeOrder = {
  attributeDefinitions: Array<TCtpAttributeDefinitionDraft>;
};

export type TCtpChangeAttributeOrderByName = {
  attributeNames: Array<Scalars['String']['input']>;
};

export type TCtpChangeDescription = {
  description: Scalars['String']['input'];
};

export type TCtpChangeEnumKey = {
  attributeName: Scalars['String']['input'];
  key: Scalars['String']['input'];
  newKey: Scalars['String']['input'];
};

export type TCtpChangeInputHint = {
  attributeName: Scalars['String']['input'];
  newValue: TCtpTextInputHint;
};

export type TCtpChangeIsSearchable = {
  attributeName: Scalars['String']['input'];
  isSearchable: Scalars['Boolean']['input'];
};

export type TCtpChangeLabel = {
  attributeName: Scalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeLocalizedEnumValueLabel = {
  attributeName: Scalars['String']['input'];
  newValue: TCtpLocalizedEnumValueDraft;
};

export type TCtpChangeLocalizedEnumValueOrder = {
  attributeName: Scalars['String']['input'];
  values: Array<TCtpLocalizedEnumValueDraft>;
};

export type TCtpChangeName = {
  name: Scalars['String']['input'];
};

export type TCtpChangePlainEnumValueLabel = {
  attributeName: Scalars['String']['input'];
  newValue: TCtpPlainEnumValueDraft;
};

export type TCtpChangePlainEnumValueOrder = {
  attributeName: Scalars['String']['input'];
  values: Array<TCtpPlainEnumValueDraft>;
};

export type TCtpRemoveAttributeDefinition = {
  name: Scalars['String']['input'];
};

export type TCtpRemoveEnumValues = {
  attributeName: Scalars['String']['input'];
  keys: Array<Scalars['String']['input']>;
};

export type TCtpSetInputTip = {
  attributeName: Scalars['String']['input'];
  inputTip?: InputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetKey = {
  key?: InputMaybe<Scalars['String']['input']>;
};
