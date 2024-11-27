export type TCtpMaybe<T> = T | null;
export type TCtpInputMaybe<T> = TCtpMaybe<T>;
export type TCtpExact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type TCtpMakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: TCtpMaybe<T[SubKey]>;
};
export type TCtpMakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: TCtpMaybe<T[SubKey]>;
};
export type TCtpMakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type TCtpIncremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type TCtpScalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: unknown; output: unknown };
  Country: { input: unknown; output: unknown };
  Currency: { input: unknown; output: unknown };
  Date: { input: unknown; output: unknown };
  DateTime: { input: unknown; output: unknown };
  Json: { input: unknown; output: unknown };
  KeyReferenceInput: { input: unknown; output: unknown };
  Locale: { input: unknown; output: unknown };
  Long: { input: unknown; output: unknown };
  SearchFilter: { input: unknown; output: unknown };
  SearchSort: { input: unknown; output: unknown };
  Set: { input: unknown; output: unknown };
  Time: { input: unknown; output: unknown };
  YearMonth: { input: unknown; output: unknown };
};

/** API Clients can be used to obtain OAuth 2 access tokens. The secret is only shown once in the response of creating the API Client. */
export type TCtpApiClientWithSecret = {
  __typename?: 'APIClientWithSecret';
  accessTokenValiditySeconds?: TCtpMaybe<TCtpScalars['Int']['output']>;
  createdAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  deleteAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  id: TCtpScalars['String']['output'];
  lastUsedAt?: TCtpMaybe<TCtpScalars['Date']['output']>;
  name: TCtpScalars['String']['output'];
  refreshTokenValiditySeconds?: TCtpMaybe<TCtpScalars['Int']['output']>;
  scope: TCtpScalars['String']['output'];
  secret: TCtpScalars['String']['output'];
};

/** API Clients can be used to obtain OAuth 2 access tokens */
export type TCtpApiClientWithoutSecret = {
  __typename?: 'APIClientWithoutSecret';
  accessTokenValiditySeconds?: TCtpMaybe<TCtpScalars['Int']['output']>;
  createdAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  deleteAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  id: TCtpScalars['String']['output'];
  lastUsedAt?: TCtpMaybe<TCtpScalars['Date']['output']>;
  name: TCtpScalars['String']['output'];
  refreshTokenValiditySeconds?: TCtpMaybe<TCtpScalars['Int']['output']>;
  scope: TCtpScalars['String']['output'];
};

export type TCtpApiClientWithoutSecretQueryResult = {
  __typename?: 'APIClientWithoutSecretQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpApiClientWithoutSecret>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpAwsLambdaDestination = TCtpExtensionDestination & {
  __typename?: 'AWSLambdaDestination';
  accessKey: TCtpScalars['String']['output'];
  accessSecret: TCtpScalars['String']['output'];
  arn: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpAwsLambdaDestinationInput = {
  accessKey: TCtpScalars['String']['input'];
  accessSecret: TCtpScalars['String']['input'];
  arn: TCtpScalars['String']['input'];
};

export type TCtpAbsoluteCartDiscountValue = TCtpCartDiscountValue & {
  __typename?: 'AbsoluteCartDiscountValue';
  applicationMode: TCtpDiscountApplicationMode;
  money: Array<TCtpMoney>;
  type: TCtpScalars['String']['output'];
};

export type TCtpAbsoluteCartDiscountValueInput = {
  applicationMode: TCtpDiscountApplicationMode;
  money: Array<TCtpMoneyInput>;
};

export type TCtpAbsoluteDiscountValue = TCtpCartDiscountValue &
  TCtpProductDiscountValue & {
    __typename?: 'AbsoluteDiscountValue';
    money: Array<TCtpMoney>;
    type: TCtpScalars['String']['output'];
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
  activeCart?: TCtpMaybe<TCtpCart>;
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
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddBusinessUnitShippingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddBusinessUnitStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpAddCartCustomLineItem = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: TCtpInputMaybe<TCtpCustomLineItemPriceMode>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  slug: TCtpScalars['String']['input'];
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddCartCustomShippingMethod = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: TCtpInputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingAddress: TCtpAddressInput;
  shippingKey: TCtpScalars['String']['input'];
  shippingMethodName: TCtpScalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddCartDiscountCode = {
  code: TCtpScalars['String']['input'];
  validateDuplicates?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpAddCartDiscountStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpAddCartItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddCartLineItem = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  perMethodExternalTaxRate?: TCtpInputMaybe<
    Array<TCtpMethodExternalTaxRateDraft>
  >;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddCartPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpAddCartShippingMethod = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: TCtpInputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingAddress: TCtpAddressInput;
  shippingKey: TCtpScalars['String']['input'];
  shippingMethod: TCtpResourceIdentifierInput;
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpAddCartShoppingList = {
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  shoppingList: TCtpResourceIdentifierInput;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddCategoryAsset = {
  asset: TCtpAssetDraftInput;
  position?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddChannelRoles = {
  roles: Array<TCtpChannelRole>;
};

export type TCtpAddCustomerAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddCustomerBillingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddCustomerGroupAssignment = {
  customerGroupAssignment: TCtpCustomerGroupAssignmentDraft;
};

export type TCtpAddCustomerShippingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddCustomerStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpAddInventoryEntryQuantity = {
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpAddMyBusinessUnitAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddMyBusinessUnitBillingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddMyBusinessUnitShippingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddMyCartLineItem = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddMyPaymentTransaction = {
  transaction: TCtpMyTransactionDraft;
};

export type TCtpAddOrderDelivery = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  items?: TCtpInputMaybe<Array<TCtpDeliveryItemDraftType>>;
  parcels?: TCtpInputMaybe<Array<TCtpParcelDataDraftType>>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddOrderEditStagedAction = {
  stagedAction: TCtpStagedOrderUpdateAction;
};

export type TCtpAddOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddOrderParcelToDelivery = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  items?: TCtpInputMaybe<Array<TCtpDeliveryItemDraftType>>;
  measurements?: TCtpInputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  trackingData?: TCtpInputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpAddOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpAddOrderReturnInfo = {
  items: Array<TCtpReturnItemDraftType>;
  returnDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  returnTrackingId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddPaymentInterfaceInteraction = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddPaymentTransaction = {
  transaction: TCtpTransactionDraft;
};

export type TCtpAddProductAsset = {
  asset: TCtpAssetDraftInput;
  position?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddProductExternalImage = {
  image: TCtpImageInput;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddProductPrice = {
  price: TCtpProductPriceDataInput;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddProductSelectionProduct = {
  product: TCtpResourceIdentifierInput;
  variantSelection?: TCtpInputMaybe<TCtpProductVariantSelectionDraft>;
};

export type TCtpAddProductTailoringAsset = {
  asset: TCtpAssetDraftInput;
  position?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddProductTailoringExternalImage = {
  image: TCtpImageInput;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddProductToCategory = {
  category: TCtpResourceIdentifierInput;
  orderHint?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpAddProductVariant = {
  assets?: TCtpInputMaybe<Array<TCtpAssetDraftInput>>;
  attributes?: TCtpInputMaybe<Array<TCtpProductAttributeInput>>;
  images?: TCtpInputMaybe<Array<TCtpImageInput>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  prices?: TCtpInputMaybe<Array<TCtpProductPriceDataInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpAddProductVariantTailoring = {
  assets?: TCtpInputMaybe<Array<TCtpAssetDraftInput>>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  attributes?: TCtpInputMaybe<Array<TCtpProductAttributeInput>>;
  id?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  images?: TCtpInputMaybe<Array<TCtpImageInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpAddShippingMethodShippingRate = {
  shippingRate: TCtpShippingRateDraft;
  zone: TCtpResourceIdentifierInput;
};

export type TCtpAddShippingMethodZone = {
  zone: TCtpResourceIdentifierInput;
};

export type TCtpAddShoppingListLineItem = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddShoppingListTextLineItem = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  quantity?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddStagedOrderCustomLineItem = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: TCtpInputMaybe<TCtpCustomLineItemPriceMode>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
  slug: TCtpScalars['String']['input'];
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddStagedOrderCustomLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderCustomLineItemOutput';
    draft: TCtpCustomLineItemDraftOutput;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderDelivery = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  items?: TCtpInputMaybe<Array<TCtpDeliveryItemDraftType>>;
  parcels?: TCtpInputMaybe<Array<TCtpParcelDataDraftType>>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddStagedOrderDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderDeliveryOutput';
    address?: TCtpMaybe<TCtpAddressDraft>;
    custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    items: Array<TCtpDeliveryItem>;
    parcels: Array<TCtpParcelData>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderDiscountCode = {
  code: TCtpScalars['String']['input'];
  validateDuplicates?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpAddStagedOrderDiscountCodeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderDiscountCodeOutput';
    code: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    validateDuplicates: TCtpScalars['Boolean']['output'];
  };

export type TCtpAddStagedOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpAddStagedOrderItemShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderItemShippingAddressOutput';
    address: TCtpAddressDraft;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderLineItem = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  perMethodExternalTaxRate?: TCtpInputMaybe<
    Array<TCtpMethodExternalTaxRateDraft>
  >;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpAddStagedOrderLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderLineItemOutput';
    draft: TCtpLineItemDraftOutput;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderParcelToDelivery = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  items?: TCtpInputMaybe<Array<TCtpDeliveryItemDraftType>>;
  measurements?: TCtpInputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  trackingData?: TCtpInputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpAddStagedOrderParcelToDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderParcelToDeliveryOutput';
    custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    items: Array<TCtpDeliveryItem>;
    measurements?: TCtpMaybe<TCtpParcelMeasurements>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    trackingData?: TCtpMaybe<TCtpTrackingData>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpAddStagedOrderPaymentOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderPaymentOutput';
    paymentResId: TCtpResourceIdentifier;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderReturnInfo = {
  items: Array<TCtpReturnItemDraftType>;
  returnDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  returnTrackingId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAddStagedOrderReturnInfoOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderReturnInfoOutput';
    items: Array<TCtpReturnItemDraftTypeOutput>;
    returnDate?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    returnTrackingId?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpAddStagedOrderShoppingList = {
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  shoppingList: TCtpResourceIdentifierInput;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAddStagedOrderShoppingListOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'AddStagedOrderShoppingListOutput';
    distributionChannelResId?: TCtpMaybe<TCtpChannelReferenceIdentifier>;
    shoppingListResId: TCtpResourceIdentifier;
    supplyChannelResId?: TCtpMaybe<TCtpChannelReferenceIdentifier>;
    type: TCtpScalars['String']['output'];
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
  active?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpAddStoreSupplyChannel = {
  supplyChannel: TCtpResourceIdentifierInput;
};

export type TCtpAddTypeEnumValue = {
  fieldName: TCtpScalars['String']['input'];
  value: TCtpEnumValueInput;
};

export type TCtpAddTypeFieldDefinition = {
  fieldDefinition: TCtpFieldDefinitionInput;
};

export type TCtpAddTypeLocalizedEnumValue = {
  fieldName: TCtpScalars['String']['input'];
  value: TCtpLocalizedEnumValueInput;
};

export type TCtpAddZoneLocation = {
  location: TCtpZoneLocation;
};

/** An address represents a postal address. */
export type TCtpAddress = {
  __typename?: 'Address';
  additionalAddressInfo?: TCtpMaybe<TCtpScalars['String']['output']>;
  additionalStreetInfo?: TCtpMaybe<TCtpScalars['String']['output']>;
  apartment?: TCtpMaybe<TCtpScalars['String']['output']>;
  building?: TCtpMaybe<TCtpScalars['String']['output']>;
  city?: TCtpMaybe<TCtpScalars['String']['output']>;
  company?: TCtpMaybe<TCtpScalars['String']['output']>;
  country: TCtpScalars['Country']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  department?: TCtpMaybe<TCtpScalars['String']['output']>;
  email?: TCtpMaybe<TCtpScalars['String']['output']>;
  externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
  fax?: TCtpMaybe<TCtpScalars['String']['output']>;
  firstName?: TCtpMaybe<TCtpScalars['String']['output']>;
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastName?: TCtpMaybe<TCtpScalars['String']['output']>;
  mobile?: TCtpMaybe<TCtpScalars['String']['output']>;
  pOBox?: TCtpMaybe<TCtpScalars['String']['output']>;
  phone?: TCtpMaybe<TCtpScalars['String']['output']>;
  postalCode?: TCtpMaybe<TCtpScalars['String']['output']>;
  region?: TCtpMaybe<TCtpScalars['String']['output']>;
  salutation?: TCtpMaybe<TCtpScalars['String']['output']>;
  state?: TCtpMaybe<TCtpScalars['String']['output']>;
  streetName?: TCtpMaybe<TCtpScalars['String']['output']>;
  streetNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  title?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpAddressDraft = {
  __typename?: 'AddressDraft';
  additionalAddressInfo?: TCtpMaybe<TCtpScalars['String']['output']>;
  additionalStreetInfo?: TCtpMaybe<TCtpScalars['String']['output']>;
  apartment?: TCtpMaybe<TCtpScalars['String']['output']>;
  building?: TCtpMaybe<TCtpScalars['String']['output']>;
  city?: TCtpMaybe<TCtpScalars['String']['output']>;
  company?: TCtpMaybe<TCtpScalars['String']['output']>;
  country: TCtpScalars['Country']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
  department?: TCtpMaybe<TCtpScalars['String']['output']>;
  email?: TCtpMaybe<TCtpScalars['String']['output']>;
  externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
  fax?: TCtpMaybe<TCtpScalars['String']['output']>;
  firstName?: TCtpMaybe<TCtpScalars['String']['output']>;
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastName?: TCtpMaybe<TCtpScalars['String']['output']>;
  mobile?: TCtpMaybe<TCtpScalars['String']['output']>;
  pOBox?: TCtpMaybe<TCtpScalars['String']['output']>;
  phone?: TCtpMaybe<TCtpScalars['String']['output']>;
  postalCode?: TCtpMaybe<TCtpScalars['String']['output']>;
  region?: TCtpMaybe<TCtpScalars['String']['output']>;
  salutation?: TCtpMaybe<TCtpScalars['String']['output']>;
  state?: TCtpMaybe<TCtpScalars['String']['output']>;
  streetName?: TCtpMaybe<TCtpScalars['String']['output']>;
  streetNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  title?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpAddressInput = {
  additionalAddressInfo?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  additionalStreetInfo?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  apartment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  building?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  city?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  company?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  country: TCtpScalars['Country']['input'];
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  department?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  email?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fax?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  firstName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lastName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  mobile?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  pOBox?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  phone?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  postalCode?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  region?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  salutation?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  streetName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  streetNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  title?: TCtpInputMaybe<TCtpScalars['String']['input']>;
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
  appliedAt: TCtpScalars['DateTime']['output'];
  excerptAfterEdit: TCtpOrderExcerpt;
  excerptBeforeEdit: TCtpOrderExcerpt;
  type: TCtpScalars['String']['output'];
};

export type TCtpApplyCartDeltaToCustomLineItemShippingDetailsTargets = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  targetsDelta?: TCtpInputMaybe<Array<TCtpShippingTargetDraft>>;
  targetsDeltaDraft?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpApplyCartDeltaToLineItemShippingDetailsTargets = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  targetsDelta?: TCtpInputMaybe<Array<TCtpShippingTargetDraft>>;
  targetsDeltaDraft?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpApplyStagedChanges = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpApprovalFlow = TCtpVersioned & {
  __typename?: 'ApprovalFlow';
  approvals: Array<TCtpApprovalFlowApproval>;
  businessUnit: TCtpBusinessUnit;
  businessUnitRef: TCtpKeyReference;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  currentTierPendingApprovers: Array<TCtpRuleApprover>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  eligibleApprovers: Array<TCtpRuleApprover>;
  id: TCtpScalars['String']['output'];
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  order?: TCtpMaybe<TCtpOrder>;
  orderRef: TCtpReference;
  pendingApprovers: Array<TCtpRuleApprover>;
  rejection?: TCtpMaybe<TCtpApprovalFlowRejection>;
  rules: Array<TCtpApprovalRule>;
  status: TCtpScalars['String']['output'];
  version: TCtpScalars['Long']['output'];
};

export type TCtpApprovalFlowApproval = {
  __typename?: 'ApprovalFlowApproval';
  approvedAt: TCtpScalars['DateTime']['output'];
  approver: TCtpAssociate;
};

export type TCtpApprovalFlowApproved = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowApproved';
  associate?: TCtpMaybe<TCtpCustomer>;
  associateRef?: TCtpMaybe<TCtpReference>;
  order?: TCtpMaybe<TCtpOrder>;
  orderRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalFlowCompleted = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowCompleted';
  order?: TCtpMaybe<TCtpOrder>;
  orderRef?: TCtpMaybe<TCtpReference>;
  status: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalFlowCreated = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowCreated';
  approvalFlow: TCtpApprovalFlow;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalFlowQueryResult = {
  __typename?: 'ApprovalFlowQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpApprovalFlow>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpApprovalFlowRejected = TCtpMessagePayload & {
  __typename?: 'ApprovalFlowRejected';
  associate?: TCtpMaybe<TCtpCustomer>;
  associateRef?: TCtpMaybe<TCtpReference>;
  order?: TCtpMaybe<TCtpOrder>;
  orderRef?: TCtpMaybe<TCtpReference>;
  rejectionReason?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalFlowRejection = {
  __typename?: 'ApprovalFlowRejection';
  reason?: TCtpMaybe<TCtpScalars['String']['output']>;
  rejectedAt: TCtpScalars['DateTime']['output'];
  rejecter: TCtpAssociate;
};

export type TCtpApprovalFlowUpdateAction = {
  approve?: TCtpInputMaybe<TCtpApproveApprovalFlow>;
  reject?: TCtpInputMaybe<TCtpRejectApprovalFlow>;
  setCustomField?: TCtpInputMaybe<TCtpSetApprovalFlowCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetApprovalFlowCustomType>;
};

export type TCtpApprovalRule = TCtpVersioned & {
  __typename?: 'ApprovalRule';
  approvers: TCtpApproverHierarchy;
  businessUnit: TCtpBusinessUnit;
  businessUnitRef: TCtpKeyReference;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  name: TCtpScalars['String']['output'];
  predicate: TCtpScalars['String']['output'];
  requesters: Array<TCtpRuleRequester>;
  status: TCtpApprovalRuleStatus;
  version: TCtpScalars['Long']['output'];
};

export type TCtpApprovalRuleApproversSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleApproversSet';
  approvers: TCtpApproverHierarchy;
  oldApprovers: TCtpApproverHierarchy;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRuleCreated = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleCreated';
  approvalRule: TCtpApprovalRule;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRuleDescriptionSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleDescriptionSet';
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRuleDraft = {
  approvers: TCtpApproverHierarchyDraft;
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  predicate: TCtpScalars['String']['input'];
  requesters: Array<TCtpRuleRequesterDraft>;
  status: TCtpApprovalRuleStatus;
};

export type TCtpApprovalRuleKeySet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleKeySet';
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRuleNameSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleNameSet';
  name: TCtpScalars['String']['output'];
  oldName: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRulePredicateSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRulePredicateSet';
  oldPredicate: TCtpScalars['String']['output'];
  predicate: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRuleQueryResult = {
  __typename?: 'ApprovalRuleQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpApprovalRule>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpApprovalRuleRequestersSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleRequestersSet';
  oldRequesters: Array<TCtpRuleRequester>;
  requesters: Array<TCtpRuleRequester>;
  type: TCtpScalars['String']['output'];
};

export enum TCtpApprovalRuleStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TCtpApprovalRuleStatusSet = TCtpMessagePayload & {
  __typename?: 'ApprovalRuleStatusSet';
  oldStatus: TCtpApprovalRuleStatus;
  status: TCtpApprovalRuleStatus;
  type: TCtpScalars['String']['output'];
};

export type TCtpApprovalRuleUpdateAction = {
  setApprovers?: TCtpInputMaybe<TCtpSetApprovalRuleApprovers>;
  setCustomField?: TCtpInputMaybe<TCtpSetApprovalRuleCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetApprovalRuleCustomType>;
  setDescription?: TCtpInputMaybe<TCtpSetApprovalRuleDescription>;
  setKey?: TCtpInputMaybe<TCtpSetApprovalRuleKey>;
  setName?: TCtpInputMaybe<TCtpSetApprovalRuleName>;
  setPredicate?: TCtpInputMaybe<TCtpSetApprovalRulePredicate>;
  setRequesters?: TCtpInputMaybe<TCtpSetApprovalRuleRequesters>;
  setStatus?: TCtpInputMaybe<TCtpSetApprovalRuleStatus>;
};

export type TCtpApproveApprovalFlow = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
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
  TCtpQuoteRequestQueryInterface & {
    __typename?: 'AsAssociate';
    approvalFlow?: TCtpMaybe<TCtpApprovalFlow>;
    approvalFlows: TCtpApprovalFlowQueryResult;
    approvalRule?: TCtpMaybe<TCtpApprovalRule>;
    approvalRules: TCtpApprovalRuleQueryResult;
    businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
    businessUnits: TCtpBusinessUnitQueryResult;
    cart?: TCtpMaybe<TCtpCart>;
    carts: TCtpCartQueryResult;
    order?: TCtpMaybe<TCtpOrder>;
    orders: TCtpOrderQueryResult;
    quote?: TCtpMaybe<TCtpQuote>;
    quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
    quoteRequests: TCtpQuoteRequestQueryResult;
    quotes: TCtpQuoteQueryResult;
  };

export type TCtpAsAssociate_ApprovalFlowArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpAsAssociate_ApprovalFlowsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_ApprovalRuleArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_ApprovalRulesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_BusinessUnitArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_BusinessUnitsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_CartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpAsAssociate_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_QuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_QuoteRequestArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_QuoteRequestsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociate_QuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpAsAssociateArgument = {
  associateId: TCtpScalars['String']['input'];
  businessUnitKey: TCtpScalars['KeyReferenceInput']['input'];
};

export type TCtpAsset = {
  __typename?: 'Asset';
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  sources: Array<TCtpAssetSource>;
  tags: Array<TCtpScalars['String']['output']>;
};

export type TCtpAsset_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpAsset_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpAssetDimensions = {
  __typename?: 'AssetDimensions';
  height: TCtpScalars['Int']['output'];
  width: TCtpScalars['Int']['output'];
};

export type TCtpAssetDimensionsInput = {
  height: TCtpScalars['Int']['input'];
  width: TCtpScalars['Int']['input'];
};

export type TCtpAssetDraftInput = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  sources?: TCtpInputMaybe<Array<TCtpAssetSourceInput>>;
  tags?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpAssetSource = {
  __typename?: 'AssetSource';
  contentType?: TCtpMaybe<TCtpScalars['String']['output']>;
  dimensions?: TCtpMaybe<TCtpAssetDimensions>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  uri: TCtpScalars['String']['output'];
};

export type TCtpAssetSourceInput = {
  contentType?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  dimensions?: TCtpInputMaybe<TCtpAssetDimensionsInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  uri: TCtpScalars['String']['input'];
};

export type TCtpAssociate = {
  __typename?: 'Associate';
  associateRoleAssignments: Array<TCtpAssociateRoleAssignment>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef?: TCtpMaybe<TCtpReference>;
};

export type TCtpAssociateDraft = {
  associateRoleAssignments?: TCtpInputMaybe<
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
    buyerAssignable: TCtpScalars['Boolean']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    id: TCtpScalars['String']['output'];
    key: TCtpScalars['String']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    permissions: Array<TCtpPermission>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpAssociateRoleAssignment = {
  __typename?: 'AssociateRoleAssignment';
  associateRole: TCtpAssociateRole;
  associateRoleRef?: TCtpMaybe<TCtpKeyReference>;
  inheritance: TCtpAssociateInheritanceMode;
};

export type TCtpAssociateRoleAssignmentDraft = {
  associateRole: TCtpResourceIdentifierInput;
  inheritance?: TCtpInputMaybe<TCtpAssociateInheritanceMode>;
};

export type TCtpAssociateRoleBuyerAssignableChanged = TCtpMessagePayload & {
  __typename?: 'AssociateRoleBuyerAssignableChanged';
  buyerAssignable: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRoleCreated = TCtpMessagePayload & {
  __typename?: 'AssociateRoleCreated';
  associateRole: TCtpAssociateRole;
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRoleDeleted = TCtpMessagePayload & {
  __typename?: 'AssociateRoleDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRoleDraft = {
  buyerAssignable: TCtpScalars['Boolean']['input'];
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key: TCtpScalars['String']['input'];
  name?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  permissions?: TCtpInputMaybe<Array<TCtpPermission>>;
};

export type TCtpAssociateRoleNameSet = TCtpMessagePayload & {
  __typename?: 'AssociateRoleNameSet';
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRolePermissionAdded = TCtpMessagePayload & {
  __typename?: 'AssociateRolePermissionAdded';
  permission: TCtpPermission;
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRolePermissionRemoved = TCtpMessagePayload & {
  __typename?: 'AssociateRolePermissionRemoved';
  permission: TCtpPermission;
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRolePermissionsSet = TCtpMessagePayload & {
  __typename?: 'AssociateRolePermissionsSet';
  permissions?: TCtpMaybe<Array<TCtpPermission>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpAssociateRoleQueryResult = {
  __typename?: 'AssociateRoleQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpAssociateRole>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpAssociateRoleUpdateAction = {
  addPermission?: TCtpInputMaybe<TCtpAddAssociateRolePermission>;
  changeBuyerAssignable?: TCtpInputMaybe<TCtpChangeAssociateRoleBuyerAssignable>;
  removePermission?: TCtpInputMaybe<TCtpRemoveAssociateRolePermission>;
  setCustomField?: TCtpInputMaybe<TCtpSetAssociateRoleCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetAssociateRoleCustomType>;
  setName?: TCtpInputMaybe<TCtpSetAssociateRoleName>;
  setPermissions?: TCtpInputMaybe<TCtpSetAssociateRolePermissions>;
};

export type TCtpAttribute = {
  name: TCtpScalars['String']['output'];
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
  inputTip?: TCtpMaybe<TCtpScalars['String']['output']>;
  inputTipAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  isRequired: TCtpScalars['Boolean']['output'];
  isSearchable: TCtpScalars['Boolean']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
  name: TCtpScalars['String']['output'];
  type: TCtpAttributeDefinitionType;
};

export type TCtpAttributeDefinition_InputTipArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpAttributeDefinition_LabelArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpAttributeDefinitionDraft = {
  attributeConstraint?: TCtpInputMaybe<TCtpAttributeConstraint>;
  inputHint?: TCtpInputMaybe<TCtpTextInputHint>;
  inputTip?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  isRequired: TCtpScalars['Boolean']['input'];
  isSearchable: TCtpScalars['Boolean']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
  name: TCtpScalars['String']['input'];
  type: TCtpAttributeTypeDraft;
};

export type TCtpAttributeDefinitionResult = {
  __typename?: 'AttributeDefinitionResult';
  limit?: TCtpMaybe<TCtpScalars['Int']['output']>;
  offset?: TCtpMaybe<TCtpScalars['Int']['output']>;
  results: Array<TCtpAttributeDefinition>;
  total: TCtpScalars['Int']['output'];
};

/** (https://docs.commercetools.com/api/projects/productTypes#attributetype)[https://docs.commercetools.com/api/projects/productTypes#attributetype] */
export type TCtpAttributeDefinitionType = {
  name: TCtpScalars['String']['output'];
};

export type TCtpAttributeGroup = TCtpVersioned & {
  __typename?: 'AttributeGroup';
  attributes: Array<TCtpAttributeReference>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpAttributeGroup_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpAttributeGroup_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpAttributeGroupDraft = {
  attributes: Array<TCtpAttributeReferenceInput>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpAttributeGroupLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'AttributeGroupLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpAttributeGroupLimitsProjection = {
  __typename?: 'AttributeGroupLimitsProjection';
  total: TCtpAttributeGroupLimitWithCurrent;
};

export type TCtpAttributeGroupQueryResult = {
  __typename?: 'AttributeGroupQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpAttributeGroup>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpAttributeGroupUpdateAction = {
  addAttribute?: TCtpInputMaybe<TCtpAddAttributeGroupAttribute>;
  changeName?: TCtpInputMaybe<TCtpChangeAttributeGroupName>;
  removeAttribute?: TCtpInputMaybe<TCtpRemoveAttributeGroupAttribute>;
  setAttributes?: TCtpInputMaybe<TCtpSetAttributeGroupAttributes>;
  setDescription?: TCtpInputMaybe<TCtpSetAttributeGroupDescription>;
  setKey?: TCtpInputMaybe<TCtpSetAttributeGroupKey>;
};

export type TCtpAttributeReference = {
  __typename?: 'AttributeReference';
  key: TCtpScalars['String']['output'];
};

export type TCtpAttributeReferenceInput = {
  key: TCtpScalars['String']['input'];
};

export type TCtpAttributeSetElementTypeDraft = {
  boolean?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  date?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  datetime?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  enum?: TCtpInputMaybe<TCtpEnumTypeDraft>;
  lenum?: TCtpInputMaybe<TCtpLocalizableEnumTypeDraft>;
  ltext?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  money?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  number?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  reference?: TCtpInputMaybe<TCtpReferenceTypeDefinitionDraft>;
  text?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  time?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
};

export type TCtpAttributeSetTypeDraft = {
  elementType: TCtpAttributeSetElementTypeDraft;
};

export type TCtpAttributeTypeDraft = {
  boolean?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  date?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  datetime?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  enum?: TCtpInputMaybe<TCtpEnumTypeDraft>;
  lenum?: TCtpInputMaybe<TCtpLocalizableEnumTypeDraft>;
  ltext?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  money?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  number?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  reference?: TCtpInputMaybe<TCtpReferenceTypeDefinitionDraft>;
  set?: TCtpInputMaybe<TCtpAttributeSetTypeDraft>;
  text?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
  time?: TCtpInputMaybe<TCtpSimpleAttributeTypeDraft>;
};

export type TCtpAttribution = {
  __typename?: 'Attribution';
  clientId?: TCtpMaybe<TCtpScalars['String']['output']>;
  source: TCtpAttributionSource;
  userRef?: TCtpMaybe<TCtpReference>;
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
  headerValue: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpAuthorizationHeaderInput = {
  headerValue: TCtpScalars['String']['input'];
};

export enum TCtpAwsAuthenticationMode {
  Credentials = 'Credentials',
  Iam = 'IAM',
}

export type TCtpAzureFunctionsAuthentication =
  TCtpHttpDestinationAuthentication & {
    __typename?: 'AzureFunctionsAuthentication';
    key: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpAzureFunctionsAuthenticationInput = {
  key: TCtpScalars['String']['input'];
};

export type TCtpAzureServiceBusDestination = TCtpDestination & {
  __typename?: 'AzureServiceBusDestination';
  connectionString: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpAzureServiceBusDestinationInput = {
  connectionString: TCtpScalars['String']['input'];
};

export type TCtpBaseMoney = {
  centAmount: TCtpScalars['Long']['output'];
  currencyCode: TCtpScalars['Currency']['output'];
  fractionDigits: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpBaseMoneyInput = {
  centPrecision?: TCtpInputMaybe<TCtpMoneyInput>;
  highPrecision?: TCtpInputMaybe<TCtpHighPrecisionMoneyInput>;
};

export type TCtpBaseSearchKeywordInput = {
  custom?: TCtpInputMaybe<TCtpCustomSuggestTokenizerInput>;
  whitespace?: TCtpInputMaybe<TCtpWhitespaceSuggestTokenizerInput>;
};

export type TCtpBooleanAttribute = TCtpAttribute & {
  __typename?: 'BooleanAttribute';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['Boolean']['output'];
};

export type TCtpBooleanAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'BooleanAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
};

export type TCtpBooleanField = TCtpCustomField & {
  __typename?: 'BooleanField';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['Boolean']['output'];
};

export type TCtpBooleanType = TCtpFieldType & {
  __typename?: 'BooleanType';
  name: TCtpScalars['String']['output'];
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
    billingAddressIds: Array<TCtpScalars['String']['output']>;
    billingAddresses: Array<TCtpAddress>;
    contactEmail?: TCtpMaybe<TCtpScalars['String']['output']>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    defaultBillingAddress?: TCtpMaybe<TCtpAddress>;
    defaultBillingAddressId?: TCtpMaybe<TCtpScalars['String']['output']>;
    defaultShippingAddress?: TCtpMaybe<TCtpAddress>;
    defaultShippingAddressId?: TCtpMaybe<TCtpScalars['String']['output']>;
    id: TCtpScalars['String']['output'];
    inheritedAssociates?: TCtpMaybe<Array<TCtpInheritedAssociate>>;
    /** This field contains the inherited stores from its parentUnit if storeMode is set to FromParent. */
    inheritedStores?: TCtpMaybe<Array<TCtpInheritedStore>>;
    key: TCtpScalars['String']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name: TCtpScalars['String']['output'];
    parentUnit?: TCtpMaybe<TCtpBusinessUnit>;
    parentUnitRef?: TCtpMaybe<TCtpKeyReference>;
    shippingAddressIds: Array<TCtpScalars['String']['output']>;
    shippingAddresses: Array<TCtpAddress>;
    status: TCtpBusinessUnitStatus;
    storeMode?: TCtpMaybe<TCtpScalars['String']['output']>;
    stores?: TCtpMaybe<Array<TCtpStore>>;
    storesRef?: TCtpMaybe<Array<TCtpKeyReference>>;
    topLevelUnit: TCtpBusinessUnit;
    topLevelUnitRef?: TCtpMaybe<TCtpKeyReference>;
    unitType: TCtpBusinessUnitType;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpBusinessUnitAddressAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressAdded';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAddressChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressChanged';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAddressCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomFieldAdded';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpBusinessUnitAddressCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomFieldChanged';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  oldValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpBusinessUnitAddressCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomFieldRemoved';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAddressCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomTypeRemoved';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAddressCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressCustomTypeSet';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  customFields: TCtpCustomFieldsType;
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAddressRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAddressRemoved';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export enum TCtpBusinessUnitApprovalRuleMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent',
}

export type TCtpBusinessUnitApprovalRuleModeChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitApprovalRuleModeChanged';
  approvalRuleMode: TCtpBusinessUnitApprovalRuleMode;
  oldApprovalRuleMode?: TCtpMaybe<TCtpBusinessUnitApprovalRuleMode>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAssociateAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateAdded';
  associate: TCtpAssociate;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAssociateChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateChanged';
  associate: TCtpAssociate;
  type: TCtpScalars['String']['output'];
};

export enum TCtpBusinessUnitAssociateMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent',
}

export type TCtpBusinessUnitAssociateModeChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateModeChanged';
  associateMode: TCtpBusinessUnitAssociateMode;
  oldAssociateMode?: TCtpMaybe<TCtpBusinessUnitAssociateMode>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAssociateRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociateRemoved';
  associate: TCtpAssociate;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitAssociatesSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitAssociatesSet';
  associates: Array<TCtpAssociate>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitBillingAddressAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitBillingAddressAdded';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitBillingAddressRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitBillingAddressRemoved';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitConfiguration = {
  __typename?: 'BusinessUnitConfiguration';
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  myBusinessUnitAssociateRoleOnCreation?: TCtpMaybe<TCtpAssociateRole>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  myBusinessUnitAssociateRoleOnCreationRef?: TCtpMaybe<TCtpKeyReference>;
  myBusinessUnitStatusOnCreation: TCtpBusinessUnitConfigurationStatus;
};

export enum TCtpBusinessUnitConfigurationStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TCtpBusinessUnitContactEmailSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitContactEmailSet';
  contactEmail?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitCreated = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCreated';
  businessUnit: TCtpBusinessUnit;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomFieldAdded';
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpBusinessUnitCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomFieldChanged';
  name: TCtpScalars['String']['output'];
  oldValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpBusinessUnitCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomFieldRemoved';
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomTypeRemoved';
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitDefaultBillingAddressSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitDefaultBillingAddressSet';
  address?: TCtpMaybe<TCtpAddress>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitDefaultShippingAddressSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitDefaultShippingAddressSet';
  address?: TCtpMaybe<TCtpAddress>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitDeleted = TCtpMessagePayload & {
  __typename?: 'BusinessUnitDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitDraft = {
  addresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  approvalRuleMode?: TCtpInputMaybe<TCtpBusinessUnitApprovalRuleMode>;
  associateMode?: TCtpInputMaybe<TCtpBusinessUnitAssociateMode>;
  associates?: TCtpInputMaybe<Array<TCtpAssociateDraft>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  contactEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  key: TCtpScalars['String']['input'];
  name: TCtpScalars['String']['input'];
  parentUnit?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  storeMode?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  stores?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
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
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitParentChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitParentChanged';
  newParentUnit?: TCtpMaybe<TCtpBusinessUnit>;
  newParentUnitRef?: TCtpMaybe<TCtpKeyReference>;
  oldParentUnit?: TCtpMaybe<TCtpBusinessUnit>;
  oldParentUnitRef?: TCtpMaybe<TCtpKeyReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitQueryResult = {
  __typename?: 'BusinessUnitQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpBusinessUnit>;
  total: TCtpScalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpBusinessUnitSearchConfiguration = {
  __typename?: 'BusinessUnitSearchConfiguration';
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  status: TCtpBusinessUnitSearchStatus;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpBusinessUnitSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpBusinessUnitShippingAddressAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitShippingAddressAdded';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitShippingAddressRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitShippingAddressRemoved';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export enum TCtpBusinessUnitStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TCtpBusinessUnitStatusChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStatusChanged';
  status: TCtpBusinessUnitStatus;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitStoreAdded = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoreAdded';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitStoreModeChanged = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoreModeChanged';
  oldStoreMode: TCtpScalars['String']['output'];
  oldStores?: TCtpMaybe<Array<TCtpStore>>;
  oldStoresRef?: TCtpMaybe<Array<TCtpKeyReference>>;
  storeMode: TCtpScalars['String']['output'];
  stores?: TCtpMaybe<Array<TCtpStore>>;
  storesRef?: TCtpMaybe<Array<TCtpKeyReference>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitStoreRemoved = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoreRemoved';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpBusinessUnitStoresSet = TCtpMessagePayload & {
  __typename?: 'BusinessUnitStoresSet';
  stores: Array<TCtpStore>;
  storesRef: Array<TCtpKeyReference>;
  type: TCtpScalars['String']['output'];
};

export enum TCtpBusinessUnitType {
  Company = 'Company',
  Division = 'Division',
}

export type TCtpBusinessUnitUpdateAction = {
  addAddress?: TCtpInputMaybe<TCtpAddBusinessUnitAddress>;
  addAssociate?: TCtpInputMaybe<TCtpAddBusinessUnitAssociate>;
  addBillingAddressId?: TCtpInputMaybe<TCtpAddBusinessUnitBillingAddressId>;
  addShippingAddressId?: TCtpInputMaybe<TCtpAddBusinessUnitShippingAddressId>;
  addStore?: TCtpInputMaybe<TCtpAddBusinessUnitStore>;
  changeAddress?: TCtpInputMaybe<TCtpChangeBusinessUnitAddress>;
  changeApprovalRuleMode?: TCtpInputMaybe<TCtpChangeBusinessUnitApprovalRuleMode>;
  changeAssociate?: TCtpInputMaybe<TCtpChangeBusinessUnitAssociate>;
  changeAssociateMode?: TCtpInputMaybe<TCtpChangeBusinessUnitAssociateMode>;
  changeName?: TCtpInputMaybe<TCtpChangeBusinessUnitName>;
  changeParentUnit?: TCtpInputMaybe<TCtpChangeBusinessUnitParentUnit>;
  changeStatus?: TCtpInputMaybe<TCtpChangeBusinessUnitStatus>;
  removeAddress?: TCtpInputMaybe<TCtpRemoveBusinessUnitAddress>;
  removeAssociate?: TCtpInputMaybe<TCtpRemoveBusinessUnitAssociate>;
  removeBillingAddressId?: TCtpInputMaybe<TCtpRemoveBusinessUnitBillingAddressId>;
  removeShippingAddressId?: TCtpInputMaybe<TCtpRemoveBusinessUnitShippingAddressId>;
  removeStore?: TCtpInputMaybe<TCtpRemoveBusinessUnitStore>;
  setAddressCustomField?: TCtpInputMaybe<TCtpSetBusinessUnitAddressCustomField>;
  setAddressCustomType?: TCtpInputMaybe<TCtpSetBusinessUnitAddressCustomType>;
  setAssociates?: TCtpInputMaybe<TCtpSetBusinessUnitAssociates>;
  setContactEmail?: TCtpInputMaybe<TCtpSetBusinessUnitContactEmail>;
  setCustomField?: TCtpInputMaybe<TCtpSetBusinessUnitCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetBusinessUnitCustomType>;
  setDefaultBillingAddress?: TCtpInputMaybe<TCtpSetBusinessUnitDefaultBillingAddress>;
  setDefaultShippingAddress?: TCtpInputMaybe<TCtpSetBusinessUnitDefaultShippingAddress>;
  setStoreMode?: TCtpInputMaybe<TCtpSetBusinessUnitStoreMode>;
  setStores?: TCtpInputMaybe<TCtpSetBusinessUnitStores>;
};

export type TCtpCancelQuoteRequest = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type TCtpCart = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Cart';
    anonymousId?: TCtpMaybe<TCtpScalars['String']['output']>;
    billingAddress?: TCtpMaybe<TCtpAddress>;
    businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
    businessUnitRef?: TCtpMaybe<TCtpKeyReference>;
    cartState: TCtpCartState;
    country?: TCtpMaybe<TCtpScalars['Country']['output']>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    customLineItems: Array<TCtpCustomLineItem>;
    customer?: TCtpMaybe<TCtpCustomer>;
    customerEmail?: TCtpMaybe<TCtpScalars['String']['output']>;
    customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    customerGroupRef?: TCtpMaybe<TCtpReference>;
    customerId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deleteDaysAfterLastModification?: TCtpMaybe<TCtpScalars['Int']['output']>;
    directDiscounts: Array<TCtpDirectDiscount>;
    discountCodes: Array<TCtpDiscountCodeInfo>;
    discountOnTotalPrice?: TCtpMaybe<TCtpDiscountOnTotalPrice>;
    id: TCtpScalars['String']['output'];
    inventoryMode: TCtpInventoryMode;
    itemShippingAddresses: Array<TCtpAddress>;
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    lineItems: Array<TCtpLineItem>;
    locale?: TCtpMaybe<TCtpScalars['Locale']['output']>;
    origin: TCtpCartOrigin;
    paymentInfo?: TCtpMaybe<TCtpPaymentInfo>;
    refusedGifts: Array<TCtpCartDiscount>;
    refusedGiftsRefs: Array<TCtpReference>;
    shipping: Array<TCtpShipping>;
    shippingAddress?: TCtpMaybe<TCtpAddress>;
    shippingCustomFields?: TCtpMaybe<TCtpCustomFieldsType>;
    shippingInfo?: TCtpMaybe<TCtpShippingInfo>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingMode: TCtpShippingMode;
    shippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
    store?: TCtpMaybe<TCtpStore>;
    storeRef?: TCtpMaybe<TCtpKeyReference>;
    taxCalculationMode: TCtpTaxCalculationMode;
    taxMode: TCtpTaxMode;
    taxRoundingMode: TCtpRoundingMode;
    taxedPrice?: TCtpMaybe<TCtpTaxedPrice>;
    taxedShippingPrice?: TCtpMaybe<TCtpTaxedPrice>;
    totalLineItemQuantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
    totalPrice: TCtpMoney;
    version: TCtpScalars['Long']['output'];
  };

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type TCtpCart_LineItemsArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCartClassificationInput = {
  values: Array<TCtpLocalizedEnumValueInput>;
};

export type TCtpCartClassificationType = TCtpShippingRateInputType & {
  __typename?: 'CartClassificationType';
  type: TCtpScalars['String']['output'];
  values: Array<TCtpShippingRateInputLocalizedEnumValue>;
};

export type TCtpCartCreated = TCtpMessagePayload & {
  __typename?: 'CartCreated';
  discountCodesRefs: Array<TCtpReference>;
  lineItemCount: TCtpScalars['Int']['output'];
  totalPrice: TCtpMoney;
  type: TCtpScalars['String']['output'];
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
    cartPredicate: TCtpScalars['String']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    id: TCtpScalars['String']['output'];
    isActive: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    referenceRefs: Array<TCtpReference>;
    requiresDiscountCode: TCtpScalars['Boolean']['output'];
    sortOrder: TCtpScalars['String']['output'];
    stackingMode: TCtpStackingMode;
    stores: Array<TCtpStore>;
    storesRef: Array<TCtpKeyReference>;
    target?: TCtpMaybe<TCtpCartDiscountTarget>;
    validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    value: TCtpCartDiscountValue;
    version: TCtpScalars['Long']['output'];
  };

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type TCtpCartDiscount_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type TCtpCartDiscount_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCartDiscountCreated = TCtpMessagePayload & {
  __typename?: 'CartDiscountCreated';
  cartDiscount: TCtpCartDiscount;
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountDeleted = TCtpMessagePayload & {
  __typename?: 'CartDiscountDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountDraft = {
  cartPredicate: TCtpScalars['String']['input'];
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  isActive?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  requiresDiscountCode?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  sortOrder: TCtpScalars['String']['input'];
  stackingMode?: TCtpInputMaybe<TCtpStackingMode>;
  stores?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
  target?: TCtpInputMaybe<TCtpCartDiscountTargetInput>;
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  value: TCtpCartDiscountValueInput;
};

export type TCtpCartDiscountLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CartDiscountLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpCartDiscountLimitsProjection = {
  __typename?: 'CartDiscountLimitsProjection';
  totalActiveWithoutDiscountCodes: TCtpCartDiscountLimitWithCurrent;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type TCtpCartDiscountQueryInterface = {
  cartDiscount?: TCtpMaybe<TCtpCartDiscount>;
  cartDiscounts: TCtpCartDiscountQueryResult;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type TCtpCartDiscountQueryInterface_CartDiscountArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Fields to access cartDiscounts. Includes direct access to a single cartDiscount and searching for cartDiscounts. */
export type TCtpCartDiscountQueryInterface_CartDiscountsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCartDiscountQueryResult = {
  __typename?: 'CartDiscountQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCartDiscount>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpCartDiscountStoreAdded = TCtpMessagePayload & {
  __typename?: 'CartDiscountStoreAdded';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountStoreRemoved = TCtpMessagePayload & {
  __typename?: 'CartDiscountStoreRemoved';
  store: TCtpStore;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountStoresSet = TCtpMessagePayload & {
  __typename?: 'CartDiscountStoresSet';
  stores: Array<TCtpStore>;
  storesRef: Array<TCtpKeyReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountTarget = {
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountTargetInput = {
  customLineItems?: TCtpInputMaybe<TCtpCustomLineItemsTargetInput>;
  lineItems?: TCtpInputMaybe<TCtpLineItemsTargetInput>;
  multiBuyCustomLineItems?: TCtpInputMaybe<TCtpMultiBuyCustomLineItemsTargetInput>;
  multiBuyLineItems?: TCtpInputMaybe<TCtpMultiBuyLineItemsTargetInput>;
  shipping?: TCtpInputMaybe<TCtpShippingTargetInput>;
  totalPrice?: TCtpInputMaybe<TCtpCartDiscountTotalPriceTargetInput>;
};

export type TCtpCartDiscountTotalPriceTarget = TCtpCartDiscountTarget & {
  __typename?: 'CartDiscountTotalPriceTarget';
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountTotalPriceTargetInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCartDiscountUpdateAction = {
  addStore?: TCtpInputMaybe<TCtpAddCartDiscountStore>;
  changeCartPredicate?: TCtpInputMaybe<TCtpChangeCartDiscountCartPredicate>;
  changeIsActive?: TCtpInputMaybe<TCtpChangeCartDiscountIsActive>;
  changeName?: TCtpInputMaybe<TCtpChangeCartDiscountName>;
  changeRequiresDiscountCode?: TCtpInputMaybe<TCtpChangeCartDiscountRequiresDiscountCode>;
  changeSortOrder?: TCtpInputMaybe<TCtpChangeCartDiscountSortOrder>;
  changeStackingMode?: TCtpInputMaybe<TCtpChangeCartDiscountStackingMode>;
  changeTarget?: TCtpInputMaybe<TCtpChangeCartDiscountTarget>;
  changeValue?: TCtpInputMaybe<TCtpChangeCartDiscountValue>;
  removeStore?: TCtpInputMaybe<TCtpRemoveCartDiscountStore>;
  setCustomField?: TCtpInputMaybe<TCtpSetCartDiscountCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetCartDiscountCustomType>;
  setDescription?: TCtpInputMaybe<TCtpSetCartDiscountDescription>;
  setKey?: TCtpInputMaybe<TCtpSetCartDiscountKey>;
  setStores?: TCtpInputMaybe<TCtpSetCartDiscountStores>;
  setValidFrom?: TCtpInputMaybe<TCtpSetCartDiscountValidFrom>;
  setValidFromAndUntil?: TCtpInputMaybe<TCtpSetCartDiscountValidFromAndUntil>;
  setValidUntil?: TCtpInputMaybe<TCtpSetCartDiscountValidUntil>;
};

export type TCtpCartDiscountValue = {
  type: TCtpScalars['String']['output'];
};

export type TCtpCartDiscountValueBaseMoneyInput = {
  /** CurrencyCode and centAmount are deprecated. Please use `Money`(centPrecision) or `HighPrecisionMoney`(highPrecision). */
  centAmount?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  centPrecision?: TCtpInputMaybe<TCtpMoneyInput>;
  /** CurrencyCode and centAmount are deprecated. Please use `Money`(centPrecision) or `HighPrecisionMoney`(highPrecision). */
  currencyCode?: TCtpInputMaybe<TCtpScalars['Currency']['input']>;
  highPrecision?: TCtpInputMaybe<TCtpHighPrecisionMoneyInput>;
};

export type TCtpCartDiscountValueInput = {
  absolute?: TCtpInputMaybe<TCtpAbsoluteDiscountValueInput>;
  absoluteCart?: TCtpInputMaybe<TCtpAbsoluteCartDiscountValueInput>;
  fixed?: TCtpInputMaybe<TCtpFixedPriceDiscountValueInput>;
  giftLineItem?: TCtpInputMaybe<TCtpGiftLineItemValueInput>;
  relative?: TCtpInputMaybe<TCtpRelativeDiscountValueInput>;
};

export type TCtpCartDraft = {
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  billingAddress?: TCtpInputMaybe<TCtpAddressInput>;
  businessUnit?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  currency: TCtpScalars['Currency']['input'];
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customLineItems?: TCtpInputMaybe<Array<TCtpCustomLineItemDraft>>;
  customShipping?: TCtpInputMaybe<Array<TCtpCustomShippingDraft>>;
  customerEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customerGroup?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  customerId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  discountCodes?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  externalTaxRateForShippingMethod?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  itemShippingAddresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItems?: TCtpInputMaybe<Array<TCtpLineItemDraft>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
  origin?: TCtpInputMaybe<TCtpCartOrigin>;
  shipping?: TCtpInputMaybe<Array<TCtpShippingDraft>>;
  shippingAddress?: TCtpInputMaybe<TCtpAddressInput>;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  shippingMode?: TCtpInputMaybe<TCtpShippingMode>;
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
  store?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  taxCalculationMode?: TCtpInputMaybe<TCtpTaxCalculationMode>;
  taxMode?: TCtpInputMaybe<TCtpTaxMode>;
  taxRoundingMode?: TCtpInputMaybe<TCtpRoundingMode>;
};

export type TCtpCartLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CartLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
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
}

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type TCtpCartQueryInterface = {
  cart?: TCtpMaybe<TCtpCart>;
  carts: TCtpCartQueryResult;
};

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type TCtpCartQueryInterface_CartArgs = {
  id: TCtpScalars['String']['input'];
};

/** Fields to access carts. Includes direct access to a single cart and searching for carts. */
export type TCtpCartQueryInterface_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCartQueryResult = {
  __typename?: 'CartQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCart>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpCartScoreInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCartScoreType = TCtpShippingRateInputType & {
  __typename?: 'CartScoreType';
  type: TCtpScalars['String']['output'];
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
  addCustomLineItem?: TCtpInputMaybe<TCtpAddCartCustomLineItem>;
  addCustomShippingMethod?: TCtpInputMaybe<TCtpAddCartCustomShippingMethod>;
  addDiscountCode?: TCtpInputMaybe<TCtpAddCartDiscountCode>;
  addItemShippingAddress?: TCtpInputMaybe<TCtpAddCartItemShippingAddress>;
  addLineItem?: TCtpInputMaybe<TCtpAddCartLineItem>;
  addPayment?: TCtpInputMaybe<TCtpAddCartPayment>;
  addShippingMethod?: TCtpInputMaybe<TCtpAddCartShippingMethod>;
  addShoppingList?: TCtpInputMaybe<TCtpAddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: TCtpInputMaybe<TCtpApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: TCtpInputMaybe<TCtpApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeCustomLineItemMoney?: TCtpInputMaybe<TCtpChangeCartCustomLineItemMoney>;
  changeCustomLineItemPriceMode?: TCtpInputMaybe<TCtpChangeCartCustomLineItemPriceMode>;
  changeCustomLineItemQuantity?: TCtpInputMaybe<TCtpChangeCartCustomLineItemQuantity>;
  changeLineItemQuantity?: TCtpInputMaybe<TCtpChangeCartLineItemQuantity>;
  changeLineItemsOrder?: TCtpInputMaybe<TCtpChangeCartLineItemsOrder>;
  changeTaxCalculationMode?: TCtpInputMaybe<TCtpChangeCartTaxCalculationMode>;
  changeTaxMode?: TCtpInputMaybe<TCtpChangeCartTaxMode>;
  changeTaxRoundingMode?: TCtpInputMaybe<TCtpChangeCartTaxRoundingMode>;
  freezeCart?: TCtpInputMaybe<TCtpFreezeCart>;
  recalculate?: TCtpInputMaybe<TCtpRecalculateCart>;
  removeCustomLineItem?: TCtpInputMaybe<TCtpRemoveCartCustomLineItem>;
  removeDiscountCode?: TCtpInputMaybe<TCtpRemoveCartDiscountCode>;
  removeItemShippingAddress?: TCtpInputMaybe<TCtpRemoveCartItemShippingAddress>;
  removeLineItem?: TCtpInputMaybe<TCtpRemoveCartLineItem>;
  removePayment?: TCtpInputMaybe<TCtpRemoveCartPayment>;
  removeShippingMethod?: TCtpInputMaybe<TCtpRemoveCartShippingMethod>;
  setAnonymousId?: TCtpInputMaybe<TCtpSetCartAnonymousId>;
  setBillingAddress?: TCtpInputMaybe<TCtpSetCartBillingAddress>;
  setBillingAddressCustomField?: TCtpInputMaybe<TCtpSetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: TCtpInputMaybe<TCtpSetCartBillingAddressCustomType>;
  setBusinessUnit?: TCtpInputMaybe<TCtpSetCartBusinessUnit>;
  setCartTotalTax?: TCtpInputMaybe<TCtpSetCartTotalTax>;
  setCountry?: TCtpInputMaybe<TCtpSetCartCountry>;
  setCustomField?: TCtpInputMaybe<TCtpSetCartCustomField>;
  setCustomLineItemCustomField?: TCtpInputMaybe<TCtpSetCartCustomLineItemCustomField>;
  setCustomLineItemCustomType?: TCtpInputMaybe<TCtpSetCartCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: TCtpInputMaybe<TCtpSetCartCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: TCtpInputMaybe<TCtpSetCartCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: TCtpInputMaybe<TCtpSetCartCustomLineItemTaxRate>;
  setCustomShippingMethod?: TCtpInputMaybe<TCtpSetCartCustomShippingMethod>;
  setCustomType?: TCtpInputMaybe<TCtpSetCartCustomType>;
  setCustomerEmail?: TCtpInputMaybe<TCtpSetCartCustomerEmail>;
  setCustomerGroup?: TCtpInputMaybe<TCtpSetCartCustomerGroup>;
  setCustomerId?: TCtpInputMaybe<TCtpSetCartCustomerId>;
  setDeleteDaysAfterLastModification?: TCtpInputMaybe<TCtpSetCartDeleteDaysAfterLastModification>;
  setDirectDiscounts?: TCtpInputMaybe<TCtpSetCartDirectDiscounts>;
  setItemShippingAddressCustomField?: TCtpInputMaybe<TCtpSetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: TCtpInputMaybe<TCtpSetCartItemShippingAddressCustomType>;
  setKey?: TCtpInputMaybe<TCtpSetCartKey>;
  setLineItemCustomField?: TCtpInputMaybe<TCtpSetCartLineItemCustomField>;
  setLineItemCustomType?: TCtpInputMaybe<TCtpSetCartLineItemCustomType>;
  setLineItemDistributionChannel?: TCtpInputMaybe<TCtpSetCartLineItemDistributionChannel>;
  setLineItemInventoryMode?: TCtpInputMaybe<TCtpSetCartLineItemInventoryMode>;
  setLineItemPrice?: TCtpInputMaybe<TCtpSetCartLineItemPrice>;
  setLineItemShippingDetails?: TCtpInputMaybe<TCtpSetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: TCtpInputMaybe<TCtpSetCartLineItemSupplyChannel>;
  setLineItemTaxAmount?: TCtpInputMaybe<TCtpSetCartLineItemTaxAmount>;
  setLineItemTaxRate?: TCtpInputMaybe<TCtpSetCartLineItemTaxRate>;
  setLineItemTotalPrice?: TCtpInputMaybe<TCtpSetCartLineItemTotalPrice>;
  setLocale?: TCtpInputMaybe<TCtpSetCartLocale>;
  setShippingAddress?: TCtpInputMaybe<TCtpSetCartShippingAddress>;
  setShippingAddressCustomField?: TCtpInputMaybe<TCtpSetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: TCtpInputMaybe<TCtpSetCartShippingAddressCustomType>;
  setShippingCustomField?: TCtpInputMaybe<TCtpSetCartShippingCustomField>;
  setShippingCustomType?: TCtpInputMaybe<TCtpSetCartShippingCustomType>;
  setShippingMethod?: TCtpInputMaybe<TCtpSetCartShippingMethod>;
  setShippingMethodTaxAmount?: TCtpInputMaybe<TCtpSetCartShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: TCtpInputMaybe<TCtpSetCartShippingMethodTaxRate>;
  setShippingRateInput?: TCtpInputMaybe<TCtpSetCartShippingRateInput>;
  unfreezeCart?: TCtpInputMaybe<TCtpUnfreezeCart>;
  updateItemShippingAddress?: TCtpInputMaybe<TCtpUpdateCartItemShippingAddress>;
};

export type TCtpCartValueInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCartValueType = TCtpShippingRateInputType & {
  __typename?: 'CartValueType';
  type: TCtpScalars['String']['output'];
};

export type TCtpCartsConfiguration = {
  __typename?: 'CartsConfiguration';
  allowAddingUnpublishedProducts: TCtpScalars['Boolean']['output'];
  countryTaxRateFallbackEnabled: TCtpScalars['Boolean']['output'];
  deleteDaysAfterLastModification?: TCtpMaybe<TCtpScalars['Int']['output']>;
  totalPriceDiscountDoesNotReduceExternalTax: TCtpScalars['Boolean']['output'];
};

export type TCtpCartsConfigurationInput = {
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpCategory = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Category';
    ancestors: Array<TCtpCategory>;
    ancestorsRef: Array<TCtpReference>;
    assets: Array<TCtpAsset>;
    /** Number of direct child categories. */
    childCount: TCtpScalars['Int']['output'];
    /** Direct child categories. */
    children?: TCtpMaybe<Array<TCtpCategory>>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    orderHint: TCtpScalars['String']['output'];
    parent?: TCtpMaybe<TCtpCategory>;
    parentRef?: TCtpMaybe<TCtpReference>;
    slug?: TCtpMaybe<TCtpScalars['String']['output']>;
    slugAllLocales: Array<TCtpLocalizedString>;
    /** Number of staged products in the category subtree. */
    stagedProductCount: TCtpScalars['Int']['output'];
    version: TCtpScalars['Long']['output'];
  };

export type TCtpCategory_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategory_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategory_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategory_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategory_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategory_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategoryCreated = TCtpMessagePayload & {
  __typename?: 'CategoryCreated';
  category: TCtpCategory;
  type: TCtpScalars['String']['output'];
};

export type TCtpCategoryDraft = {
  assets?: TCtpInputMaybe<Array<TCtpAssetDraftInput>>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  orderHint?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parent?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  slug: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpCategoryLimitsProjection = {
  __typename?: 'CategoryLimitsProjection';
  maxCategories: TCtpLimit;
};

export type TCtpCategoryOrderHint = {
  __typename?: 'CategoryOrderHint';
  categoryId: TCtpScalars['String']['output'];
  orderHint: TCtpScalars['String']['output'];
};

export type TCtpCategoryOrderHintInput = {
  orderHint: TCtpScalars['String']['input'];
  uuid: TCtpScalars['String']['input'];
};

export type TCtpCategoryOrderHintProductSearch = {
  __typename?: 'CategoryOrderHintProductSearch';
  categoryId: TCtpScalars['String']['output'];
  orderHint: TCtpScalars['String']['output'];
};

export type TCtpCategoryQueryResult = {
  __typename?: 'CategoryQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCategory>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpCategorySearch = {
  __typename?: 'CategorySearch';
  ancestors: Array<TCtpCategorySearch>;
  ancestorsRef: Array<TCtpReference>;
  assets: Array<TCtpAsset>;
  childCount: TCtpScalars['Int']['output'];
  /** Direct child categories. */
  children: Array<TCtpCategorySearch>;
  createdAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  orderHint: TCtpScalars['String']['output'];
  parent?: TCtpMaybe<TCtpCategorySearch>;
  parentRef?: TCtpMaybe<TCtpReference>;
  productTypeNames: Array<TCtpScalars['String']['output']>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  stagedProductCount: TCtpScalars['Int']['output'];
  version: TCtpScalars['Long']['output'];
};

export type TCtpCategorySearch_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategorySearch_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategorySearch_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategorySearchResult = {
  __typename?: 'CategorySearchResult';
  count: TCtpScalars['Int']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCategorySearch>;
  total: TCtpScalars['Int']['output'];
};

export type TCtpCategorySlugChanged = TCtpMessagePayload & {
  __typename?: 'CategorySlugChanged';
  oldSlug?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldSlugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCategorySlugChanged_OldSlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategorySlugChanged_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCategoryUpdateAction = {
  addAsset?: TCtpInputMaybe<TCtpAddCategoryAsset>;
  changeAssetName?: TCtpInputMaybe<TCtpChangeCategoryAssetName>;
  changeAssetOrder?: TCtpInputMaybe<TCtpChangeCategoryAssetOrder>;
  changeName?: TCtpInputMaybe<TCtpChangeCategoryName>;
  changeOrderHint?: TCtpInputMaybe<TCtpChangeCategoryOrderHint>;
  changeParent?: TCtpInputMaybe<TCtpChangeCategoryParent>;
  changeSlug?: TCtpInputMaybe<TCtpChangeCategorySlug>;
  removeAsset?: TCtpInputMaybe<TCtpRemoveCategoryAsset>;
  setAssetCustomField?: TCtpInputMaybe<TCtpSetCategoryAssetCustomField>;
  setAssetCustomType?: TCtpInputMaybe<TCtpSetCategoryAssetCustomType>;
  setAssetDescription?: TCtpInputMaybe<TCtpSetCategoryAssetDescription>;
  setAssetKey?: TCtpInputMaybe<TCtpSetCategoryAssetKey>;
  setAssetSources?: TCtpInputMaybe<TCtpSetCategoryAssetSources>;
  setAssetTags?: TCtpInputMaybe<TCtpSetCategoryAssetTags>;
  setCustomField?: TCtpInputMaybe<TCtpSetCategoryCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetCategoryCustomType>;
  setDescription?: TCtpInputMaybe<TCtpSetCategoryDescription>;
  setExternalId?: TCtpInputMaybe<TCtpSetCategoryExternalId>;
  setKey?: TCtpInputMaybe<TCtpSetCategoryKey>;
  setMetaDescription?: TCtpInputMaybe<TCtpSetCategoryMetaDescription>;
  setMetaKeywords?: TCtpInputMaybe<TCtpSetCategoryMetaKeywords>;
  setMetaTitle?: TCtpInputMaybe<TCtpSetCategoryMetaTitle>;
};

export type TCtpChangeAssociateRoleBuyerAssignable = {
  buyerAssignable: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeAttributeGroupName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeBusinessUnitAddress = {
  address: TCtpAddressInput;
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpChangeBusinessUnitApprovalRuleMode = {
  approvalRuleMode: TCtpBusinessUnitApprovalRuleMode;
};

export type TCtpChangeBusinessUnitAssociate = {
  associate: TCtpAssociateDraft;
};

export type TCtpChangeBusinessUnitAssociateMode = {
  associateMode: TCtpBusinessUnitAssociateMode;
};

export type TCtpChangeBusinessUnitName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpChangeBusinessUnitParentUnit = {
  parentUnit: TCtpResourceIdentifierInput;
};

export type TCtpChangeBusinessUnitStatus = {
  status: TCtpBusinessUnitStatus;
};

export type TCtpChangeCartCustomLineItemMoney = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  money: TCtpBaseMoneyInput;
};

export type TCtpChangeCartCustomLineItemPriceMode = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  mode: TCtpCustomLineItemPriceMode;
};

export type TCtpChangeCartCustomLineItemQuantity = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpChangeCartDiscountCartPredicate = {
  cartPredicate: TCtpScalars['String']['input'];
};

export type TCtpChangeCartDiscountIsActive = {
  isActive: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeCartDiscountName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeCartDiscountRequiresDiscountCode = {
  requiresDiscountCode: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeCartDiscountSortOrder = {
  sortOrder: TCtpScalars['String']['input'];
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
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  /** Only valid for the general Carts API. Ignored for the My Carts API. */
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpChangeCartLineItemsOrder = {
  lineItemOrder: Array<TCtpScalars['String']['input']>;
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
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeCategoryAssetOrder = {
  assetOrder: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeCategoryName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeCategoryOrderHint = {
  orderHint: TCtpScalars['String']['input'];
};

export type TCtpChangeCategoryParent = {
  parent: TCtpResourceIdentifierInput;
};

export type TCtpChangeCategorySlug = {
  slug: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeChannelDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpChangeChannelKey = {
  key: TCtpScalars['String']['input'];
};

export type TCtpChangeChannelName = {
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpChangeCustomerAddress = {
  address: TCtpAddressInput;
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpChangeCustomerEmail = {
  email: TCtpScalars['String']['input'];
};

export type TCtpChangeCustomerGroupName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpChangeDiscountCodeCartDiscounts = {
  cartDiscounts: Array<TCtpResourceIdentifierInput>;
};

export type TCtpChangeDiscountCodeGroups = {
  groups: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeDiscountCodeIsActive = {
  isActive: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeExtensionDestination = {
  destination: TCtpExtensionDestinationInput;
};

export type TCtpChangeExtensionTriggers = {
  triggers: Array<TCtpTriggerInput>;
};

export type TCtpChangeInventoryEntryQuantity = {
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpChangeMyBusinessUnitAddress = {
  address: TCtpAddressInput;
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpChangeMyBusinessUnitAssociate = {
  associate: TCtpAssociateDraft;
};

export type TCtpChangeMyBusinessUnitName = {
  name: TCtpScalars['String']['input'];
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
  interactionId: TCtpScalars['String']['input'];
  transactionId: TCtpScalars['String']['input'];
};

export type TCtpChangePaymentTransactionState = {
  state: TCtpTransactionState;
  transactionId: TCtpScalars['String']['input'];
};

export type TCtpChangePaymentTransactionTimestamp = {
  timestamp: TCtpScalars['DateTime']['input'];
  transactionId: TCtpScalars['String']['input'];
};

export type TCtpChangeProductAssetName = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpChangeProductAssetOrder = {
  assetOrder: Array<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpChangeProductDiscountIsActive = {
  isActive: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeProductDiscountName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeProductDiscountPredicate = {
  predicate: TCtpScalars['String']['input'];
};

export type TCtpChangeProductDiscountSortOrder = {
  sortOrder: TCtpScalars['String']['input'];
};

export type TCtpChangeProductDiscountValue = {
  value: TCtpProductDiscountValueInput;
};

export type TCtpChangeProductImageLabel = {
  imageUrl: TCtpScalars['String']['input'];
  label?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpChangeProductMasterVariant = {
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpChangeProductName = {
  name: Array<TCtpLocalizedStringItemInputType>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpChangeProductPrice = {
  price: TCtpProductPriceDataInput;
  priceId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpChangeProductSelectionName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeProductSlug = {
  slug: Array<TCtpLocalizedStringItemInputType>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpChangeProductTailoringAssetName = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpChangeProductTailoringAssetOrder = {
  assetOrder: Array<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpChangeProjectSettingsBusinessUnitSearchStatus = {
  status: TCtpBusinessUnitSearchStatus;
};

export type TCtpChangeProjectSettingsCartsConfiguration = {
  cartsConfiguration: TCtpCartsConfigurationInput;
};

export type TCtpChangeProjectSettingsCountries = {
  countries: Array<TCtpScalars['Country']['input']>;
};

export type TCtpChangeProjectSettingsCountryTaxRateFallbackEnabled = {
  countryTaxRateFallbackEnabled: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeProjectSettingsCurrencies = {
  currencies: Array<TCtpScalars['Currency']['input']>;
};

export type TCtpChangeProjectSettingsCustomerSearchStatus = {
  status: TCtpCustomerSearchStatus;
};

export type TCtpChangeProjectSettingsLanguages = {
  languages: Array<TCtpScalars['Locale']['input']>;
};

export type TCtpChangeProjectSettingsMessagesConfiguration = {
  messagesConfiguration: TCtpMessagesConfigurationDraft;
};

export type TCtpChangeProjectSettingsMessagesEnabled = {
  messagesEnabled: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeProjectSettingsMyBusinessUnitStatusOnCreation = {
  status: TCtpBusinessUnitConfigurationStatus;
};

export type TCtpChangeProjectSettingsName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpChangeProjectSettingsOrderSearchStatus = {
  status: TCtpOrderSearchStatus;
};

export type TCtpChangeProjectSettingsProductSearchIndexingEnabled = {
  enabled: TCtpScalars['Boolean']['input'];
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  mode?: TCtpInputMaybe<TCtpProductSearchIndexingMode>;
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
    value: TCtpScalars['Boolean']['input'];
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
  active: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeShippingMethodIsDefault = {
  isDefault: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeShippingMethodName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpChangeShippingMethodTaxCategory = {
  taxCategory: TCtpResourceIdentifierInput;
};

export type TCtpChangeShoppingListLineItemQuantity = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Int']['input'];
};

export type TCtpChangeShoppingListLineItemsOrder = {
  lineItemOrder: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeShoppingListName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeShoppingListTextLineItemName = {
  name: Array<TCtpLocalizedStringItemInputType>;
  textLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  textLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpChangeShoppingListTextLineItemQuantity = {
  quantity: TCtpScalars['Int']['input'];
  textLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  textLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpChangeShoppingListTextLineItemsOrder = {
  textLineItemOrder: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeStagedOrderCustomLineItemMoney = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  money: TCtpBaseMoneyInput;
};

export type TCtpChangeStagedOrderCustomLineItemMoneyOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderCustomLineItemMoneyOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    money: TCtpBaseMoney;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderCustomLineItemQuantity = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpChangeStagedOrderCustomLineItemQuantityOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderCustomLineItemQuantityOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    quantity: TCtpScalars['Long']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderLineItemQuantity = {
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpChangeStagedOrderLineItemQuantityOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderLineItemQuantityOutput';
    externalPrice?: TCtpMaybe<TCtpBaseMoney>;
    externalTotalPrice?: TCtpMaybe<TCtpExternalLineItemTotalPrice>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    quantity: TCtpScalars['Long']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderOrderState = {
  orderState: TCtpOrderState;
};

export type TCtpChangeStagedOrderOrderStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderOrderStateOutput';
    orderState: TCtpOrderState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderPaymentState = {
  paymentState: TCtpPaymentState;
};

export type TCtpChangeStagedOrderPaymentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderPaymentStateOutput';
    paymentState: TCtpPaymentState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderShipmentState = {
  shipmentState: TCtpShipmentState;
};

export type TCtpChangeStagedOrderShipmentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderShipmentStateOutput';
    shipmentState: TCtpShipmentState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderTaxCalculationMode = {
  taxCalculationMode: TCtpTaxCalculationMode;
};

export type TCtpChangeStagedOrderTaxCalculationModeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderTaxCalculationModeOutput';
    taxCalculationMode: TCtpTaxCalculationMode;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderTaxMode = {
  taxMode: TCtpTaxMode;
};

export type TCtpChangeStagedOrderTaxModeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderTaxModeOutput';
    taxMode: TCtpTaxMode;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedOrderTaxRoundingMode = {
  taxRoundingMode: TCtpRoundingMode;
};

export type TCtpChangeStagedOrderTaxRoundingModeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ChangeStagedOrderTaxRoundingModeOutput';
    taxRoundingMode: TCtpRoundingMode;
    type: TCtpScalars['String']['output'];
  };

export type TCtpChangeStagedQuoteState = {
  stagedQuoteState: TCtpStagedQuoteState;
};

export type TCtpChangeStandalonePriceActive = {
  active: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeStandalonePriceValue = {
  /** default is `false` */
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value: TCtpBaseMoneyInput;
};

export type TCtpChangeStateInitial = {
  initial: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeStateKey = {
  key: TCtpScalars['String']['input'];
};

export type TCtpChangeStateType = {
  type: TCtpStateType;
};

export type TCtpChangeStoreProductSelectionActive = {
  active: TCtpScalars['Boolean']['input'];
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpChangeSubscription = {
  __typename?: 'ChangeSubscription';
  resourceTypeId: TCtpScalars['String']['output'];
};

export type TCtpChangeSubscriptionDestination = {
  destination: TCtpDestinationInput;
};

export type TCtpChangeSubscriptionInput = {
  resourceTypeId: TCtpScalars['String']['input'];
};

export type TCtpChangeTypeEnumValueLabel = {
  fieldName: TCtpScalars['String']['input'];
  value: TCtpEnumValueInput;
};

export type TCtpChangeTypeEnumValueOrder = {
  fieldName: TCtpScalars['String']['input'];
  keys: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeTypeFieldDefinitionOrder = {
  fieldNames: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeTypeInputHint = {
  fieldName: TCtpScalars['String']['input'];
  inputHint: TCtpTextInputHint;
};

export type TCtpChangeTypeKey = {
  key: TCtpScalars['String']['input'];
};

export type TCtpChangeTypeLabel = {
  fieldName: TCtpScalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeTypeLocalizedEnumValueLabel = {
  fieldName: TCtpScalars['String']['input'];
  value: TCtpLocalizedEnumValueInput;
};

export type TCtpChangeTypeLocalizedEnumValueOrder = {
  fieldName: TCtpScalars['String']['input'];
  keys: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeTypeName = {
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeZoneName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpChannel = TCtpReferenceExpandable &
  TCtpReviewTarget &
  TCtpVersioned & {
    __typename?: 'Channel';
    address?: TCtpMaybe<TCtpAddress>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    geoLocation?: TCtpMaybe<TCtpPoint>;
    id: TCtpScalars['String']['output'];
    key: TCtpScalars['String']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    reviewRatingStatistics?: TCtpMaybe<TCtpReviewRatingStatistics>;
    roles: Array<TCtpChannelRole>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpChannel_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpChannel_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpChannelDraft = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  geoLocation?: TCtpInputMaybe<TCtpGeometryInput>;
  key: TCtpScalars['String']['input'];
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  roles: Array<TCtpChannelRole>;
};

export type TCtpChannelQueryResult = {
  __typename?: 'ChannelQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpChannel>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpChannelReferenceIdentifier = {
  __typename?: 'ChannelReferenceIdentifier';
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  typeId: TCtpScalars['String']['output'];
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
  addRoles?: TCtpInputMaybe<TCtpAddChannelRoles>;
  changeDescription?: TCtpInputMaybe<TCtpChangeChannelDescription>;
  changeKey?: TCtpInputMaybe<TCtpChangeChannelKey>;
  changeName?: TCtpInputMaybe<TCtpChangeChannelName>;
  removeRoles?: TCtpInputMaybe<TCtpRemoveChannelRoles>;
  setAddress?: TCtpInputMaybe<TCtpSetChannelAddress>;
  setAddressCustomField?: TCtpInputMaybe<TCtpSetChannelAddressCustomField>;
  setAddressCustomType?: TCtpInputMaybe<TCtpSetChannelAddressCustomType>;
  setCustomField?: TCtpInputMaybe<TCtpSetChannelCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetChannelCustomType>;
  setGeoLocation?: TCtpInputMaybe<TCtpSetChannelGeoLocation>;
  setRoles?: TCtpInputMaybe<TCtpSetChannelRoles>;
};

export type TCtpClassificationShippingRateInput = TCtpShippingRateInput & {
  __typename?: 'ClassificationShippingRateInput';
  key: TCtpScalars['String']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
  type: TCtpScalars['String']['output'];
};

export type TCtpClassificationShippingRateInput_LabelArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpClassificationShippingRateInputDraft = {
  key: TCtpScalars['String']['input'];
};

export type TCtpClassificationShippingRateInputDraftOutput =
  TCtpShippingRateInputDraftOutput & {
    __typename?: 'ClassificationShippingRateInputDraftOutput';
    key: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpCloudEventsSubscriptionsFormat = TCtpNotificationFormat & {
  __typename?: 'CloudEventsSubscriptionsFormat';
  cloudEventsVersion: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCloudEventsSubscriptionsFormatInput = {
  cloudEventsVersion: TCtpScalars['String']['input'];
};

export type TCtpCommercetoolsSubscription = TCtpVersioned & {
  __typename?: 'CommercetoolsSubscription';
  changes: Array<TCtpChangeSubscription>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  destination: TCtpDestination;
  format: TCtpNotificationFormat;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  messages: Array<TCtpMessageSubscription>;
  status: TCtpSubscriptionHealthStatus;
  version: TCtpScalars['Long']['output'];
};

export type TCtpCommercetoolsSubscriptionQueryResult = {
  __typename?: 'CommercetoolsSubscriptionQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCommercetoolsSubscription>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpConfluentCloudDestination = TCtpDestination & {
  __typename?: 'ConfluentCloudDestination';
  acks: TCtpScalars['String']['output'];
  apiKey: TCtpScalars['String']['output'];
  apiSecret: TCtpScalars['String']['output'];
  bootstrapServer: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  topic: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpConfluentCloudDestinationInput = {
  acks: TCtpScalars['String']['input'];
  apiKey: TCtpScalars['String']['input'];
  apiSecret: TCtpScalars['String']['input'];
  bootstrapServer: TCtpScalars['String']['input'];
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  topic: TCtpScalars['String']['input'];
};

export type TCtpCreateApiClient = {
  accessTokenValiditySeconds?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  deleteDaysAfterCreation?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  name: TCtpScalars['String']['input'];
  refreshTokenValiditySeconds?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  scope: TCtpScalars['String']['input'];
};

export type TCtpCreateProductSelectionDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  mode?: TCtpInputMaybe<TCtpProductSelectionMode>;
  name: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpCreateStandalonePrice = {
  active?: TCtpScalars['Boolean']['input'];
  channel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customerGroup?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  discounted?: TCtpInputMaybe<TCtpDiscountedProductPriceValueInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpStagedPriceDraft>;
  tiers?: TCtpInputMaybe<Array<TCtpProductPriceTierInput>>;
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  value: TCtpBaseMoneyInput;
};

export type TCtpCreateStore = {
  countries?: TCtpInputMaybe<Array<TCtpStoreCountryInput>>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannels?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
  key: TCtpScalars['String']['input'];
  languages?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  productSelections?: TCtpInputMaybe<Array<TCtpProductSelectionSettingDraft>>;
  supplyChannels?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpCreateZone = {
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  locations?: TCtpInputMaybe<Array<TCtpZoneLocation>>;
  name: TCtpScalars['String']['input'];
};

export type TCtpCustomField = {
  name: TCtpScalars['String']['output'];
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
  name: TCtpScalars['String']['input'];
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
  value: TCtpScalars['String']['input'];
};

export type TCtpCustomFieldsCommand = {
  __typename?: 'CustomFieldsCommand';
  fields: TCtpScalars['Json']['output'];
  typeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  typeKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  typeResId?: TCtpMaybe<TCtpResourceIdentifier>;
};

export type TCtpCustomFieldsDraft = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCustomFieldsType = {
  __typename?: 'CustomFieldsType';
  /** This field contains non-typed data. */
  customFieldsRaw?: TCtpMaybe<Array<TCtpRawCustomField>>;
  type?: TCtpMaybe<TCtpTypeDefinition>;
  typeRef: TCtpReference;
};

export type TCtpCustomFieldsType_CustomFieldsRawArgs = {
  excludeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type TCtpCustomLineItem = {
  __typename?: 'CustomLineItem';
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  money: TCtpBaseMoney;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  perMethodTaxRate: Array<TCtpMethodTaxRate>;
  priceMode: TCtpCustomLineItemPriceMode;
  quantity: TCtpScalars['Long']['output'];
  shippingDetails?: TCtpMaybe<TCtpItemShippingDetails>;
  slug: TCtpScalars['String']['output'];
  state: Array<TCtpItemState>;
  taxCategory?: TCtpMaybe<TCtpTaxCategory>;
  taxCategoryRef?: TCtpMaybe<TCtpReference>;
  taxRate?: TCtpMaybe<TCtpTaxRate>;
  taxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
  taxedPricePortions: Array<TCtpMethodTaxedPrice>;
  totalPrice: TCtpMoney;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type TCtpCustomLineItem_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCustomLineItemDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: TCtpInputMaybe<TCtpCustomLineItemPriceMode>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  slug: TCtpScalars['String']['input'];
  taxCategory?: TCtpInputMaybe<TCtpReferenceInput>;
};

export type TCtpCustomLineItemDraftOutput = {
  __typename?: 'CustomLineItemDraftOutput';
  custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
  externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  money: TCtpBaseMoney;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  priceMode: TCtpCustomLineItemPriceMode;
  quantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
  shippingDetails?: TCtpMaybe<TCtpItemShippingDetailsDraftOutput>;
  slug: TCtpScalars['String']['output'];
  taxCategoryResId?: TCtpMaybe<TCtpResourceIdentifier>;
};

export type TCtpCustomLineItemDraftOutput_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpCustomLineItemImportDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  money: TCtpBaseMoneyInput;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: TCtpInputMaybe<TCtpCustomLineItemPriceMode>;
  quantity: TCtpScalars['Long']['input'];
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  slug: TCtpScalars['String']['input'];
  state?: TCtpInputMaybe<Array<TCtpItemStateDraftType>>;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  taxRate?: TCtpInputMaybe<TCtpTaxRateInput>;
};

export enum TCtpCustomLineItemPriceMode {
  /** Cart discounts are deactivated for the custom line items with this price mode. */
  External = 'External',
  /** This is the default mode. */
  Standard = 'Standard',
}

export type TCtpCustomLineItemReturnItem = TCtpReturnItem & {
  __typename?: 'CustomLineItemReturnItem';
  comment?: TCtpMaybe<TCtpScalars['String']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customLineItemId: TCtpScalars['String']['output'];
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  paymentState: TCtpReturnPaymentState;
  quantity: TCtpScalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomLineItemStateTransition = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'CustomLineItemStateTransition';
    customLineItemId: TCtpScalars['String']['output'];
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    fromState?: TCtpMaybe<TCtpState>;
    fromStateRef: TCtpReference;
    quantity: TCtpScalars['Long']['output'];
    toState?: TCtpMaybe<TCtpState>;
    toStateRef: TCtpReference;
    transitionDate: TCtpScalars['DateTime']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpCustomLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'CustomLineItemsTarget';
  predicate: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomLineItemsTargetInput = {
  predicate: TCtpScalars['String']['input'];
};

export type TCtpCustomObject = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'CustomObject';
    container: TCtpScalars['String']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    id: TCtpScalars['String']['output'];
    key: TCtpScalars['String']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    value: TCtpScalars['Json']['output'];
    version: TCtpScalars['Long']['output'];
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
  container: TCtpScalars['String']['input'];
  key: TCtpScalars['String']['input'];
  /**
   * The value should be passed in a form of escaped JSON.
   *
   * Example for `value` field:
   *
   * ```
   * "{ \"stringField\": \"myVal\", \"numberField\": 123, \"boolField\": false, \"nestedObject\": { \"nestedObjectKey\": \"anotherValue\" }, \"dateField\": \"2018-10-12T14:00:00.000Z\" }"
   * ```
   */
  value: TCtpScalars['String']['input'];
  version?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpCustomObjectLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CustomObjectLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpCustomObjectLimitsProjection = {
  __typename?: 'CustomObjectLimitsProjection';
  total: TCtpCustomObjectLimitWithCurrent;
};

export type TCtpCustomObjectQueryResult = {
  __typename?: 'CustomObjectQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCustomObject>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpCustomShippingDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: TCtpInputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  key: TCtpScalars['String']['input'];
  shippingAddress: TCtpAddressInput;
  shippingMethodName: TCtpScalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
  taxCategory?: TCtpInputMaybe<TCtpReferenceInput>;
};

export type TCtpCustomSuggestTokenizer = TCtpSuggestTokenizer & {
  __typename?: 'CustomSuggestTokenizer';
  inputs: Array<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomSuggestTokenizerInput = {
  inputs: Array<TCtpScalars['String']['input']>;
};

export type TCtpCustomSuggestTokenizerProductSearch =
  TCtpSuggestTokenizerProductSearch & {
    __typename?: 'CustomSuggestTokenizerProductSearch';
    inputs: Array<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type TCtpCustomer = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Customer';
    addresses: Array<TCtpAddress>;
    authenticationMode?: TCtpMaybe<TCtpAuthenticationMode>;
    billingAddressIds: Array<TCtpScalars['String']['output']>;
    billingAddresses: Array<TCtpAddress>;
    companyName?: TCtpMaybe<TCtpScalars['String']['output']>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
    customerGroupAssignments?: TCtpMaybe<Array<TCtpCustomerGroupAssignment>>;
    customerGroupRef?: TCtpMaybe<TCtpReference>;
    customerNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    dateOfBirth?: TCtpMaybe<TCtpScalars['Date']['output']>;
    defaultBillingAddress?: TCtpMaybe<TCtpAddress>;
    defaultBillingAddressId?: TCtpMaybe<TCtpScalars['String']['output']>;
    defaultShippingAddress?: TCtpMaybe<TCtpAddress>;
    defaultShippingAddressId?: TCtpMaybe<TCtpScalars['String']['output']>;
    email: TCtpScalars['String']['output'];
    externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
    firstName?: TCtpMaybe<TCtpScalars['String']['output']>;
    id: TCtpScalars['String']['output'];
    isEmailVerified: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    lastName?: TCtpMaybe<TCtpScalars['String']['output']>;
    locale?: TCtpMaybe<TCtpScalars['Locale']['output']>;
    middleName?: TCtpMaybe<TCtpScalars['String']['output']>;
    password?: TCtpMaybe<TCtpScalars['String']['output']>;
    salutation?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingAddressIds: Array<TCtpScalars['String']['output']>;
    shippingAddresses: Array<TCtpAddress>;
    stores: Array<TCtpStore>;
    storesRef: Array<TCtpKeyReference>;
    title?: TCtpMaybe<TCtpScalars['String']['output']>;
    vatId?: TCtpMaybe<TCtpScalars['String']['output']>;
    version: TCtpScalars['Long']['output'];
  };

/** A field to access a customer's active cart. */
export type TCtpCustomerActiveCartInterface = {
  customerActiveCart?: TCtpMaybe<TCtpCart>;
};

/** A field to access a customer's active cart. */
export type TCtpCustomerActiveCartInterface_CustomerActiveCartArgs = {
  customerId: TCtpScalars['String']['input'];
};

export type TCtpCustomerAddressAdded = TCtpMessagePayload & {
  __typename?: 'CustomerAddressAdded';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerAddressChanged = TCtpMessagePayload & {
  __typename?: 'CustomerAddressChanged';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerAddressCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomFieldAdded';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpCustomerAddressCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomFieldChanged';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  previousValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpCustomerAddressCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomFieldRemoved';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerAddressCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomTypeRemoved';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerAddressCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'CustomerAddressCustomTypeSet';
  addressId?: TCtpMaybe<TCtpScalars['String']['output']>;
  customFields: TCtpCustomFieldsType;
  previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerAddressRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerAddressRemoved';
  address: TCtpAddress;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerCompanyNameSet = TCtpMessagePayload & {
  __typename?: 'CustomerCompanyNameSet';
  companyName?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerCreated = TCtpMessagePayload & {
  __typename?: 'CustomerCreated';
  customer: TCtpCustomer;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'CustomerCustomFieldAdded';
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpCustomerCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'CustomerCustomFieldChanged';
  name: TCtpScalars['String']['output'];
  previousValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpCustomerCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerCustomFieldRemoved';
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerCustomTypeRemoved';
  previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'CustomerCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerDateOfBirthSet = TCtpMessagePayload & {
  __typename?: 'CustomerDateOfBirthSet';
  dateOfBirth?: TCtpMaybe<TCtpScalars['Date']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerDeleted = TCtpMessagePayload & {
  __typename?: 'CustomerDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerEmailChanged = TCtpMessagePayload & {
  __typename?: 'CustomerEmailChanged';
  email: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerEmailToken = TCtpVersioned & {
  __typename?: 'CustomerEmailToken';
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  customerId: TCtpScalars['String']['output'];
  expiresAt: TCtpScalars['DateTime']['output'];
  id: TCtpScalars['String']['output'];
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  value: TCtpScalars['String']['output'];
  version: TCtpScalars['Long']['output'];
};

export type TCtpCustomerEmailTokenCreated = TCtpMessagePayload & {
  __typename?: 'CustomerEmailTokenCreated';
  customerId: TCtpScalars['String']['output'];
  expiresAt: TCtpScalars['DateTime']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerEmailVerified = TCtpMessagePayload & {
  __typename?: 'CustomerEmailVerified';
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerFirstNameSet = TCtpMessagePayload & {
  __typename?: 'CustomerFirstNameSet';
  firstName?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

/** A customer can be a member in a customer group (e.g. reseller, gold member). A customer group can be used in price calculations with special prices being assigned to certain customer groups. */
export type TCtpCustomerGroup = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'CustomerGroup';
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name: TCtpScalars['String']['output'];
    version: TCtpScalars['Long']['output'];
  };

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomerGroupAssignment = {
  __typename?: 'CustomerGroupAssignment';
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomerGroupAssignmentAdded = TCtpMessagePayload & {
  __typename?: 'CustomerGroupAssignmentAdded';
  customerGroupAssignment: TCtpCustomerGroupAssignment;
  type: TCtpScalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomerGroupAssignmentDraft = {
  customerGroup: TCtpResourceIdentifierInput;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomerGroupAssignmentRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerGroupAssignmentRemoved';
  customerGroupAssignment: TCtpCustomerGroupAssignment;
  type: TCtpScalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpCustomerGroupAssignmentsSet = TCtpMessagePayload & {
  __typename?: 'CustomerGroupAssignmentsSet';
  customerGroupAssignments: Array<TCtpCustomerGroupAssignment>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerGroupCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomFieldAdded';
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpCustomerGroupCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomFieldChanged';
  name: TCtpScalars['String']['output'];
  oldValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
};

export type TCtpCustomerGroupCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomFieldRemoved';
  name: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerGroupCustomTypeRemoved = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomTypeRemoved';
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerGroupCustomTypeSet = TCtpMessagePayload & {
  __typename?: 'CustomerGroupCustomTypeSet';
  customFields: TCtpCustomFieldsType;
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerGroupDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  groupName: TCtpScalars['String']['input'];
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCustomerGroupLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CustomerGroupLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpCustomerGroupLimitsProjection = {
  __typename?: 'CustomerGroupLimitsProjection';
  total: TCtpCustomerGroupLimitWithCurrent;
};

export type TCtpCustomerGroupQueryResult = {
  __typename?: 'CustomerGroupQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCustomerGroup>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpCustomerGroupReferenceIdentifier = {
  __typename?: 'CustomerGroupReferenceIdentifier';
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  typeId: TCtpScalars['String']['output'];
};

export type TCtpCustomerGroupSet = TCtpMessagePayload & {
  __typename?: 'CustomerGroupSet';
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerGroupUpdateAction = {
  changeName?: TCtpInputMaybe<TCtpChangeCustomerGroupName>;
  setCustomField?: TCtpInputMaybe<TCtpSetCustomerGroupCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetCustomerGroupCustomType>;
  setKey?: TCtpInputMaybe<TCtpSetCustomerGroupKey>;
};

export type TCtpCustomerLastNameSet = TCtpMessagePayload & {
  __typename?: 'CustomerLastNameSet';
  lastName?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'CustomerLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpCustomerLimitsProjection = {
  __typename?: 'CustomerLimitsProjection';
  total: TCtpCustomerLimitWithCurrent;
};

export type TCtpCustomerPasswordToken = TCtpVersioned & {
  __typename?: 'CustomerPasswordToken';
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  customerId: TCtpScalars['String']['output'];
  expiresAt: TCtpScalars['DateTime']['output'];
  id: TCtpScalars['String']['output'];
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  value: TCtpScalars['String']['output'];
  version: TCtpScalars['Long']['output'];
};

export type TCtpCustomerPasswordTokenCreated = TCtpMessagePayload & {
  __typename?: 'CustomerPasswordTokenCreated';
  customerId: TCtpScalars['String']['output'];
  expiresAt: TCtpScalars['DateTime']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerPasswordUpdated = TCtpMessagePayload & {
  __typename?: 'CustomerPasswordUpdated';
  reset: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type TCtpCustomerQueryInterface = {
  customer?: TCtpMaybe<TCtpCustomer>;
  customers: TCtpCustomerQueryResult;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type TCtpCustomerQueryInterface_CustomerArgs = {
  emailToken?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  passwordToken?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Fields to access customer accounts. Includes direct access to a single customer and searching for customers. */
export type TCtpCustomerQueryInterface_CustomersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCustomerQueryResult = {
  __typename?: 'CustomerQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpCustomer>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpCustomerSearchConfiguration = {
  __typename?: 'CustomerSearchConfiguration';
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  status: TCtpCustomerSearchStatus;
};

export enum TCtpCustomerSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpCustomerSignInDraft = {
  anonymousCart?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  anonymousCartSignInMode?: TCtpInputMaybe<TCtpAnonymousCartSignInMode>;
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  email: TCtpScalars['String']['input'];
  password: TCtpScalars['String']['input'];
  updateProductData?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpCustomerSignInResult = {
  __typename?: 'CustomerSignInResult';
  cart?: TCtpMaybe<TCtpCart>;
  customer: TCtpCustomer;
};

export type TCtpCustomerSignMeInDraft = {
  activeCartSignInMode?: TCtpInputMaybe<TCtpAnonymousCartSignInMode>;
  email: TCtpScalars['String']['input'];
  password: TCtpScalars['String']['input'];
  updateProductData?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpCustomerSignMeUpDraft = {
  addresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  companyName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  dateOfBirth?: TCtpInputMaybe<TCtpScalars['Date']['input']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  email: TCtpScalars['String']['input'];
  firstName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lastName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
  middleName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  password?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  salutation?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  stores?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
  title?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  vatId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCustomerSignUpDraft = {
  addresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  anonymousCart?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  /** This field will be deprecated in favour of anonymousCart.id. */
  anonymousCartId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  authenticationMode?: TCtpInputMaybe<TCtpAuthenticationMode>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  companyName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customerGroup?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  customerGroupAssignments?: TCtpInputMaybe<
    Array<TCtpCustomerGroupAssignmentDraft>
  >;
  customerNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  dateOfBirth?: TCtpInputMaybe<TCtpScalars['Date']['input']>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  email: TCtpScalars['String']['input'];
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  firstName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  isEmailVerified?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lastName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
  middleName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  password?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  salutation?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  stores?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
  title?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  vatId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpCustomerTitleSet = TCtpMessagePayload & {
  __typename?: 'CustomerTitleSet';
  title?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpCustomerUpdateAction = {
  addAddress?: TCtpInputMaybe<TCtpAddCustomerAddress>;
  addBillingAddressId?: TCtpInputMaybe<TCtpAddCustomerBillingAddressId>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  addCustomerGroupAssignment?: TCtpInputMaybe<TCtpAddCustomerGroupAssignment>;
  addShippingAddressId?: TCtpInputMaybe<TCtpAddCustomerShippingAddressId>;
  addStore?: TCtpInputMaybe<TCtpAddCustomerStore>;
  changeAddress?: TCtpInputMaybe<TCtpChangeCustomerAddress>;
  changeEmail?: TCtpInputMaybe<TCtpChangeCustomerEmail>;
  removeAddress?: TCtpInputMaybe<TCtpRemoveCustomerAddress>;
  removeBillingAddressId?: TCtpInputMaybe<TCtpRemoveCustomerBillingAddressId>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  removeCustomerGroupAssignment?: TCtpInputMaybe<TCtpRemoveCustomerGroupAssignment>;
  removeShippingAddressId?: TCtpInputMaybe<TCtpRemoveCustomerShippingAddressId>;
  removeStore?: TCtpInputMaybe<TCtpRemoveCustomerStore>;
  setAddressCustomField?: TCtpInputMaybe<TCtpSetCustomerAddressCustomField>;
  setAddressCustomType?: TCtpInputMaybe<TCtpSetCustomerAddressCustomType>;
  setAuthenticationMode?: TCtpInputMaybe<TCtpSetCustomerAuthenticationMode>;
  setCompanyName?: TCtpInputMaybe<TCtpSetCustomerCompanyName>;
  setCustomField?: TCtpInputMaybe<TCtpSetCustomerCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetCustomerCustomType>;
  setCustomerGroup?: TCtpInputMaybe<TCtpSetCustomerGroup>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  setCustomerGroupAssignments?: TCtpInputMaybe<TCtpSetCustomerGroupAssignments>;
  setCustomerNumber?: TCtpInputMaybe<TCtpSetCustomerNumber>;
  setDateOfBirth?: TCtpInputMaybe<TCtpSetCustomerDateOfBirth>;
  setDefaultBillingAddress?: TCtpInputMaybe<TCtpSetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: TCtpInputMaybe<TCtpSetCustomerDefaultShippingAddress>;
  setExternalId?: TCtpInputMaybe<TCtpSetCustomerExternalId>;
  setFirstName?: TCtpInputMaybe<TCtpSetCustomerFirstName>;
  setKey?: TCtpInputMaybe<TCtpSetCustomerKey>;
  setLastName?: TCtpInputMaybe<TCtpSetCustomerLastName>;
  setLocale?: TCtpInputMaybe<TCtpSetCustomerLocale>;
  setMiddleName?: TCtpInputMaybe<TCtpSetCustomerMiddleName>;
  setSalutation?: TCtpInputMaybe<TCtpSetCustomerSalutation>;
  setStores?: TCtpInputMaybe<TCtpSetCustomerStores>;
  setTitle?: TCtpInputMaybe<TCtpSetCustomerTitle>;
  setVatId?: TCtpInputMaybe<TCtpSetCustomerVatId>;
};

export type TCtpDateAttribute = TCtpAttribute & {
  __typename?: 'DateAttribute';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['Date']['output'];
};

export type TCtpDateAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'DateAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
};

export type TCtpDateField = TCtpCustomField & {
  __typename?: 'DateField';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['Date']['output'];
};

export type TCtpDateTimeAttribute = TCtpAttribute & {
  __typename?: 'DateTimeAttribute';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['DateTime']['output'];
};

export type TCtpDateTimeAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'DateTimeAttributeDefinitionType';
    name: TCtpScalars['String']['output'];
  };

export type TCtpDateTimeField = TCtpCustomField & {
  __typename?: 'DateTimeField';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['DateTime']['output'];
};

export type TCtpDateTimeType = TCtpFieldType & {
  __typename?: 'DateTimeType';
  name: TCtpScalars['String']['output'];
};

export type TCtpDateType = TCtpFieldType & {
  __typename?: 'DateType';
  name: TCtpScalars['String']['output'];
};

export type TCtpDelivery = {
  __typename?: 'Delivery';
  address?: TCtpMaybe<TCtpAddress>;
  createdAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  items: Array<TCtpDeliveryItem>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  parcels: Array<TCtpParcel>;
};

export type TCtpDeliveryAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryAdded';
    delivery: TCtpDelivery;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpDeliveryAddressSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryAddressSet';
    address?: TCtpMaybe<TCtpAddress>;
    deliveryId: TCtpScalars['String']['output'];
    oldAddress?: TCtpMaybe<TCtpAddress>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpDeliveryCustomFieldAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomFieldAdded';
    deliveryId: TCtpScalars['String']['output'];
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value: TCtpScalars['Json']['output'];
  };

export type TCtpDeliveryCustomFieldChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomFieldChanged';
    deliveryId: TCtpScalars['String']['output'];
    name: TCtpScalars['String']['output'];
    previousValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
    type: TCtpScalars['String']['output'];
    value: TCtpScalars['Json']['output'];
  };

export type TCtpDeliveryCustomFieldRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomFieldRemoved';
    deliveryId: TCtpScalars['String']['output'];
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpDeliveryCustomTypeRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomTypeRemoved';
    deliveryId: TCtpScalars['String']['output'];
    previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpDeliveryCustomTypeSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryCustomTypeSet';
    customFields: TCtpCustomFieldsType;
    deliveryId: TCtpScalars['String']['output'];
    previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpDeliveryDraft = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  items: Array<TCtpDeliveryItemDraftType>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcels: Array<TCtpParcelDraft>;
};

export type TCtpDeliveryItem = {
  __typename?: 'DeliveryItem';
  id: TCtpScalars['String']['output'];
  quantity: TCtpScalars['Long']['output'];
};

export type TCtpDeliveryItemDraftType = {
  id: TCtpScalars['String']['input'];
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpDeliveryItemsUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryItemsUpdated';
    deliveryId: TCtpScalars['String']['output'];
    items: Array<TCtpDeliveryItem>;
    oldItems: Array<TCtpDeliveryItem>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpDeliveryRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'DeliveryRemoved';
    delivery: TCtpDelivery;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpDestination = {
  type: TCtpScalars['String']['output'];
};

export type TCtpDestinationInput = {
  AzureServiceBus?: TCtpInputMaybe<TCtpAzureServiceBusDestinationInput>;
  ConfluentCloud?: TCtpInputMaybe<TCtpConfluentCloudDestinationInput>;
  EventBridge?: TCtpInputMaybe<TCtpEventBridgeDestinationInput>;
  EventGrid?: TCtpInputMaybe<TCtpEventGridDestinationInput>;
  GoogleCloudPubSub?: TCtpInputMaybe<TCtpGoogleCloudPubSubDestinationInput>;
  SNS?: TCtpInputMaybe<TCtpSnsDestinationInput>;
  SQS?: TCtpInputMaybe<TCtpSqsDestinationInput>;
};

export type TCtpDimensions = {
  __typename?: 'Dimensions';
  height: TCtpScalars['Int']['output'];
  width: TCtpScalars['Int']['output'];
};

export type TCtpDimensionsInput = {
  height: TCtpScalars['Int']['input'];
  width: TCtpScalars['Int']['input'];
};

export type TCtpDimensionsProductSearch = {
  __typename?: 'DimensionsProductSearch';
  height: TCtpScalars['Int']['output'];
  width: TCtpScalars['Int']['output'];
};

export type TCtpDirectDiscount = {
  __typename?: 'DirectDiscount';
  id: TCtpScalars['String']['output'];
  target?: TCtpMaybe<TCtpCartDiscountTarget>;
  value: TCtpCartDiscountValue;
};

export type TCtpDirectDiscountDraft = {
  target?: TCtpInputMaybe<TCtpCartDiscountTargetInput>;
  value: TCtpCartDiscountValueInput;
};

export type TCtpDirectDiscountDraftOutput = {
  __typename?: 'DirectDiscountDraftOutput';
  target?: TCtpMaybe<TCtpCartDiscountTarget>;
  value: TCtpCartDiscountValue;
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
    applicationCount: TCtpScalars['Long']['output'];
    applicationVersion?: TCtpMaybe<TCtpScalars['Long']['output']>;
    cartDiscountRefs: Array<TCtpReference>;
    cartDiscounts: Array<TCtpCartDiscount>;
    cartPredicate?: TCtpMaybe<TCtpScalars['String']['output']>;
    code: TCtpScalars['String']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    groups: Array<TCtpScalars['String']['output']>;
    id: TCtpScalars['String']['output'];
    isActive: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    maxApplications?: TCtpMaybe<TCtpScalars['Long']['output']>;
    maxApplicationsPerCustomer?: TCtpMaybe<TCtpScalars['Long']['output']>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    referenceRefs: Array<TCtpReference>;
    validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    version: TCtpScalars['Long']['output'];
  };

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type TCtpDiscountCode_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type TCtpDiscountCode_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpDiscountCodeCreated = TCtpMessagePayload & {
  __typename?: 'DiscountCodeCreated';
  discountCode: TCtpDiscountCode;
  type: TCtpScalars['String']['output'];
};

export type TCtpDiscountCodeDeleted = TCtpMessagePayload & {
  __typename?: 'DiscountCodeDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpDiscountCodeDraft = {
  /** Specify what CartDiscounts the API applies when you add the DiscountCode to the Cart. */
  cartDiscounts: Array<TCtpResourceIdentifierInput>;
  /** DiscountCode can only be applied to Carts that match this predicate. */
  cartPredicate?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  /**
   * User-defined unique identifier for the DiscountCode that can be added to the Cart to apply the related CartDiscounts.
   * It cannot be modified after the DiscountCode is created.
   */
  code: TCtpScalars['String']['input'];
  /** Custom Fields for the DiscountCode. */
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  /** The description of the DiscountCode. */
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  /** Groups to which the DiscountCode will belong to. */
  groups?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  /** Only active DiscountCodes can be applied to the Cart. */
  isActive?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  /** User-defined unique identifier for the DiscountCode. */
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  /** Number of times the DiscountCode can be applied. If not set, the DiscountCode can be applied any number of times. */
  maxApplications?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  /** Number of times the DiscountCode can be applied per Customer. If not set, the DiscountCode can be applied any number of times. */
  maxApplicationsPerCustomer?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  /** Name of the DiscountCode. */
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  /** Date and time (UTC) from which the DiscountCode is effective. Must be earlier than `validUntil`. */
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  /** Date and time (UTC) until which the DiscountCode is effective. Must be later than `validFrom`. */
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpDiscountCodeInfo = {
  __typename?: 'DiscountCodeInfo';
  discountCode?: TCtpMaybe<TCtpDiscountCode>;
  discountCodeRef: TCtpReference;
  state?: TCtpMaybe<TCtpDiscountCodeState>;
};

export type TCtpDiscountCodeKeySet = TCtpMessagePayload & {
  __typename?: 'DiscountCodeKeySet';
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpDiscountCodeQueryResult = {
  __typename?: 'DiscountCodeQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpDiscountCode>;
  total: TCtpScalars['Long']['output'];
};

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
  changeCartDiscounts?: TCtpInputMaybe<TCtpChangeDiscountCodeCartDiscounts>;
  changeGroups?: TCtpInputMaybe<TCtpChangeDiscountCodeGroups>;
  changeIsActive?: TCtpInputMaybe<TCtpChangeDiscountCodeIsActive>;
  setCartPredicate?: TCtpInputMaybe<TCtpSetDiscountCodeCartPredicate>;
  setCustomField?: TCtpInputMaybe<TCtpSetDiscountCodeCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetDiscountCodeCustomType>;
  setDescription?: TCtpInputMaybe<TCtpSetDiscountCodeDescription>;
  setKey?: TCtpInputMaybe<TCtpSetDiscountCodeKey>;
  setMaxApplications?: TCtpInputMaybe<TCtpSetDiscountCodeMaxApplications>;
  setMaxApplicationsPerCustomer?: TCtpInputMaybe<TCtpSetDiscountCodeMaxApplicationsPerCustomer>;
  setName?: TCtpInputMaybe<TCtpSetDiscountCodeName>;
  setValidFrom?: TCtpInputMaybe<TCtpSetDiscountCodeValidFrom>;
  setValidFromAndUntil?: TCtpInputMaybe<TCtpSetDiscountCodeValidFromAndUntil>;
  setValidUntil?: TCtpInputMaybe<TCtpSetDiscountCodeValidUntil>;
};

export type TCtpDiscountOnTotalPrice = {
  __typename?: 'DiscountOnTotalPrice';
  discountedAmount: TCtpBaseMoney;
  discountedGrossAmount?: TCtpMaybe<TCtpBaseMoney>;
  discountedNetAmount?: TCtpMaybe<TCtpBaseMoney>;
  includedDiscounts: Array<TCtpDiscountedTotalPricePortion>;
};

export type TCtpDiscountedLineItemPortion = {
  __typename?: 'DiscountedLineItemPortion';
  discount?: TCtpMaybe<TCtpCartDiscount>;
  discountRef: TCtpReference;
  discountedAmount: TCtpBaseMoney;
};

export type TCtpDiscountedLineItemPortionDraft = {
  discount: TCtpReferenceInput;
  discountedAmount: TCtpBaseMoneyInput;
};

export type TCtpDiscountedLineItemPrice = {
  __typename?: 'DiscountedLineItemPrice';
  includedDiscounts: Array<TCtpDiscountedLineItemPortion>;
  value: TCtpBaseMoney;
};

export type TCtpDiscountedLineItemPriceDraft = {
  includedDiscounts?: TCtpInputMaybe<Array<TCtpDiscountedLineItemPortionDraft>>;
  value: TCtpBaseMoneyInput;
};

export type TCtpDiscountedLineItemPriceForQuantity = {
  __typename?: 'DiscountedLineItemPriceForQuantity';
  discountedPrice: TCtpDiscountedLineItemPrice;
  quantity: TCtpScalars['Long']['output'];
};

export type TCtpDiscountedProductPriceValue = {
  __typename?: 'DiscountedProductPriceValue';
  discount?: TCtpMaybe<TCtpProductDiscount>;
  discountRef: TCtpReference;
  value: TCtpBaseMoney;
};

export type TCtpDiscountedProductPriceValueInput = {
  discount: TCtpResourceIdentifierInput;
  value: TCtpBaseMoneyInput;
};

export type TCtpDiscountedProductSearchPriceValue = {
  __typename?: 'DiscountedProductSearchPriceValue';
  discount?: TCtpMaybe<TCtpProductDiscount>;
  discountRef: TCtpReference;
  value: TCtpBaseMoney;
};

export type TCtpDiscountedTotalPricePortion = {
  __typename?: 'DiscountedTotalPricePortion';
  discount?: TCtpMaybe<TCtpCartDiscount>;
  discountRef: TCtpReference;
  discountedAmount: TCtpBaseMoney;
};

export type TCtpEnumAttribute = TCtpAttribute & {
  __typename?: 'EnumAttribute';
  key: TCtpScalars['String']['output'];
  label: TCtpScalars['String']['output'];
  name: TCtpScalars['String']['output'];
};

export type TCtpEnumAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'EnumAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
  values: TCtpPlainEnumValueResult;
};

export type TCtpEnumAttributeDefinitionType_ValuesArgs = {
  excludeKeys?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeKeys?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpEnumField = TCtpCustomField & {
  __typename?: 'EnumField';
  key: TCtpScalars['String']['output'];
  name: TCtpScalars['String']['output'];
};

export type TCtpEnumType = TCtpFieldType & {
  __typename?: 'EnumType';
  name: TCtpScalars['String']['output'];
  values: Array<TCtpEnumValue>;
};

export type TCtpEnumTypeDraft = {
  values: Array<TCtpPlainEnumValueDraft>;
};

export type TCtpEnumValue = {
  __typename?: 'EnumValue';
  key: TCtpScalars['String']['output'];
  label: TCtpScalars['String']['output'];
};

export type TCtpEnumValueInput = {
  key: TCtpScalars['String']['input'];
  label: TCtpScalars['String']['input'];
};

export type TCtpEventBridgeDestination = TCtpDestination & {
  __typename?: 'EventBridgeDestination';
  accountId: TCtpScalars['String']['output'];
  region: TCtpScalars['String']['output'];
  source: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpEventBridgeDestinationInput = {
  accountId: TCtpScalars['String']['input'];
  region: TCtpScalars['String']['input'];
};

export type TCtpEventGridDestination = TCtpDestination & {
  __typename?: 'EventGridDestination';
  accessKey: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
  uri: TCtpScalars['String']['output'];
};

export type TCtpEventGridDestinationInput = {
  accessKey: TCtpScalars['String']['input'];
  uri: TCtpScalars['String']['input'];
};

export type TCtpExcludeProductSelectionProduct = {
  product: TCtpResourceIdentifierInput;
  variantExclusion?: TCtpInputMaybe<TCtpProductVariantExclusionDraft>;
};

export type TCtpExistsFilterInput = {
  path: TCtpScalars['String']['input'];
};

export type TCtpExtension = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Extension';
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    destination: TCtpExtensionDestination;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    timeoutInMs?: TCtpMaybe<TCtpScalars['Int']['output']>;
    triggers: Array<TCtpTrigger>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpExtensionDestination = {
  type: TCtpScalars['String']['output'];
};

export type TCtpExtensionDestinationInput = {
  AWSLambda?: TCtpInputMaybe<TCtpAwsLambdaDestinationInput>;
  GoogleCloudFunction?: TCtpInputMaybe<TCtpGoogleCloudFunctionDestinationInput>;
  HTTP?: TCtpInputMaybe<TCtpHttpDestinationInput>;
};

export type TCtpExtensionDraft = {
  destination: TCtpExtensionDestinationInput;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  timeoutInMs?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  triggers: Array<TCtpTriggerInput>;
};

export type TCtpExtensionLimitsProjection = {
  __typename?: 'ExtensionLimitsProjection';
  timeoutInMs: TCtpLimit;
};

export type TCtpExtensionQueryResult = {
  __typename?: 'ExtensionQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpExtension>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpExtensionUpdateAction = {
  changeDestination?: TCtpInputMaybe<TCtpChangeExtensionDestination>;
  changeTriggers?: TCtpInputMaybe<TCtpChangeExtensionTriggers>;
  setKey?: TCtpInputMaybe<TCtpSetExtensionKey>;
  setTimeoutInMs?: TCtpInputMaybe<TCtpSetExtensionTimeoutInMs>;
};

export type TCtpExternalDiscountValue = TCtpProductDiscountValue & {
  __typename?: 'ExternalDiscountValue';
  type: TCtpScalars['String']['output'];
};

export type TCtpExternalDiscountValueInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpExternalLineItemTotalPrice = {
  __typename?: 'ExternalLineItemTotalPrice';
  price: TCtpBaseMoney;
  totalPrice: TCtpMoney;
};

export type TCtpExternalLineItemTotalPriceDraft = {
  price: TCtpBaseMoneyInput;
  totalPrice: TCtpMoneyInput;
};

export type TCtpExternalOAuth = {
  __typename?: 'ExternalOAuth';
  authorizationHeader: TCtpScalars['String']['output'];
  url: TCtpScalars['String']['output'];
};

export type TCtpExternalOAuthDraft = {
  authorizationHeader: TCtpScalars['String']['input'];
  url: TCtpScalars['String']['input'];
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
  amount: TCtpScalars['Float']['input'];
  country: TCtpScalars['Country']['input'];
  includedInPrice?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  name: TCtpScalars['String']['input'];
  state?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  subRates?: TCtpInputMaybe<Array<TCtpSubRateDraft>>;
};

export type TCtpExternalTaxRateDraftOutput = {
  __typename?: 'ExternalTaxRateDraftOutput';
  amount?: TCtpMaybe<TCtpScalars['Float']['output']>;
  country: TCtpScalars['Country']['output'];
  includedInPrice: TCtpScalars['Boolean']['output'];
  name: TCtpScalars['String']['output'];
  state?: TCtpMaybe<TCtpScalars['String']['output']>;
  subRates: Array<TCtpSubRate>;
};

export type TCtpFacetResult = {
  type: TCtpScalars['String']['output'];
};

export type TCtpFacetResultValue = {
  __typename?: 'FacetResultValue';
  facet: TCtpScalars['String']['output'];
  value: TCtpFacetResult;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type TCtpFieldDefinition = {
  __typename?: 'FieldDefinition';
  inputHint: TCtpTextInputHint;
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
  name: TCtpScalars['String']['output'];
  required: TCtpScalars['Boolean']['output'];
  type: TCtpFieldType;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type TCtpFieldDefinition_LabelArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpFieldDefinitionInput = {
  inputHint: TCtpTextInputHint;
  label: Array<TCtpLocalizedStringItemInputType>;
  name: TCtpScalars['String']['input'];
  required: TCtpScalars['Boolean']['input'];
  type: TCtpFieldTypeInput;
};

export type TCtpFieldType = {
  name: TCtpScalars['String']['output'];
};

export type TCtpFieldTypeEnumTypeDraft = {
  values: Array<TCtpEnumValueInput>;
};

export type TCtpFieldTypeInput = {
  Boolean?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Date?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  DateTime?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Enum?: TCtpInputMaybe<TCtpFieldTypeEnumTypeDraft>;
  LocalizedEnum?: TCtpInputMaybe<TCtpFieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Money?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Number?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Reference?: TCtpInputMaybe<TCtpFieldTypeReferenceTypeDraft>;
  Set?: TCtpInputMaybe<TCtpFieldTypeSetTypeDraft>;
  String?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Time?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
};

export type TCtpFieldTypeLocalizedEnumTypeDraft = {
  values: Array<TCtpLocalizedEnumValueInput>;
};

export type TCtpFieldTypeReferenceTypeDraft = {
  referenceTypeId: TCtpScalars['String']['input'];
};

export type TCtpFieldTypeSetElementTypeDraft = {
  Boolean?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Date?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  DateTime?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Enum?: TCtpInputMaybe<TCtpFieldTypeEnumTypeDraft>;
  LocalizedEnum?: TCtpInputMaybe<TCtpFieldTypeLocalizedEnumTypeDraft>;
  LocalizedString?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Money?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Number?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Reference?: TCtpInputMaybe<TCtpFieldTypeReferenceTypeDraft>;
  String?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
  Time?: TCtpInputMaybe<TCtpSimpleFieldTypeDraft>;
};

export type TCtpFieldTypeSetTypeDraft = {
  elementType: TCtpFieldTypeSetElementTypeDraft;
};

export type TCtpFixedPriceDiscountValue = TCtpCartDiscountValue & {
  __typename?: 'FixedPriceDiscountValue';
  money: Array<TCtpBaseMoney>;
  type: TCtpScalars['String']['output'];
};

export type TCtpFixedPriceDiscountValueInput = {
  money: Array<TCtpCartDiscountValueBaseMoneyInput>;
};

export type TCtpFreezeCart = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpGeometry = {
  type: TCtpScalars['String']['output'];
};

export type TCtpGeometryInput = {
  coordinates?: TCtpInputMaybe<Array<TCtpScalars['Float']['input']>>;
  type: TCtpScalars['String']['input'];
};

export type TCtpGiftLineItemValue = TCtpCartDiscountValue & {
  __typename?: 'GiftLineItemValue';
  distributionChannelRef?: TCtpMaybe<TCtpChannelReferenceIdentifier>;
  productRef: TCtpProductReferenceIdentifier;
  supplyChannelRef?: TCtpMaybe<TCtpChannelReferenceIdentifier>;
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpGiftLineItemValueInput = {
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  product: TCtpResourceIdentifierInput;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variantId: TCtpScalars['Int']['input'];
};

export type TCtpGoogleCloudFunctionDestination = TCtpExtensionDestination & {
  __typename?: 'GoogleCloudFunctionDestination';
  type: TCtpScalars['String']['output'];
  url: TCtpScalars['String']['output'];
};

export type TCtpGoogleCloudFunctionDestinationInput = {
  url: TCtpScalars['String']['input'];
};

export type TCtpGoogleCloudPubSubDestination = TCtpDestination & {
  __typename?: 'GoogleCloudPubSubDestination';
  projectId: TCtpScalars['String']['output'];
  topic: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpGoogleCloudPubSubDestinationInput = {
  projectId: TCtpScalars['String']['input'];
  topic: TCtpScalars['String']['input'];
};

export type TCtpHasProductTailoringData = {
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  variants: Array<TCtpProductVariantTailoring>;
};

export type TCtpHasProductTailoringData_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpHasProductTailoringData_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpHighPrecisionMoney = TCtpBaseMoney & {
  __typename?: 'HighPrecisionMoney';
  centAmount: TCtpScalars['Long']['output'];
  currencyCode: TCtpScalars['Currency']['output'];
  fractionDigits: TCtpScalars['Int']['output'];
  preciseAmount: TCtpScalars['Long']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpHighPrecisionMoneyInput = {
  centAmount?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  currencyCode: TCtpScalars['Currency']['input'];
  fractionDigits: TCtpScalars['Int']['input'];
  preciseAmount: TCtpScalars['Long']['input'];
};

export type TCtpHttpDestination = TCtpExtensionDestination & {
  __typename?: 'HttpDestination';
  authentication?: TCtpMaybe<TCtpHttpDestinationAuthentication>;
  type: TCtpScalars['String']['output'];
  url: TCtpScalars['String']['output'];
};

export type TCtpHttpDestinationAuthentication = {
  type: TCtpScalars['String']['output'];
};

export type TCtpHttpDestinationAuthenticationInput = {
  AuthorizationHeader?: TCtpInputMaybe<TCtpAuthorizationHeaderInput>;
  AzureFunctions?: TCtpInputMaybe<TCtpAzureFunctionsAuthenticationInput>;
};

export type TCtpHttpDestinationInput = {
  authentication?: TCtpInputMaybe<TCtpHttpDestinationAuthenticationInput>;
  url: TCtpScalars['String']['input'];
};

export type TCtpImage = {
  __typename?: 'Image';
  dimensions: TCtpDimensions;
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  url: TCtpScalars['String']['output'];
};

export type TCtpImageInput = {
  dimensions: TCtpDimensionsInput;
  label?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  url: TCtpScalars['String']['input'];
};

export type TCtpImageProductSearch = {
  __typename?: 'ImageProductSearch';
  dimensions: TCtpDimensionsProductSearch;
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  url: TCtpScalars['String']['output'];
};

export type TCtpImportOrderCustomLineItemState = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportOrderDraft = {
  billingAddress?: TCtpInputMaybe<TCtpAddressInput>;
  completedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customLineItems?: Array<TCtpCustomLineItemImportDraft>;
  customerEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customerGroup?: TCtpInputMaybe<TCtpReferenceInput>;
  customerId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  itemShippingAddresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  lineItems?: Array<TCtpLineItemImportDraft>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderState?: TCtpInputMaybe<TCtpOrderState>;
  origin?: TCtpInputMaybe<TCtpCartOrigin>;
  paymentInfo?: TCtpInputMaybe<TCtpReferenceInput>;
  paymentState?: TCtpInputMaybe<TCtpPaymentState>;
  purchaseOrderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shipmentState?: TCtpInputMaybe<TCtpShipmentState>;
  shippingAddress?: TCtpInputMaybe<TCtpAddressInput>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  shippingInfo?: TCtpInputMaybe<TCtpShippingInfoImportDraft>;
  state?: TCtpInputMaybe<TCtpReferenceInput>;
  store?: TCtpInputMaybe<TCtpReferenceInput>;
  taxCalculationMode?: TCtpInputMaybe<TCtpTaxCalculationMode>;
  taxedPrice?: TCtpInputMaybe<TCtpTaxedPriceDraft>;
  totalPrice: TCtpMoneyInput;
};

export type TCtpImportOrderLineItemState = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportStagedOrderCustomLineItemState = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportStagedOrderCustomLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ImportStagedOrderCustomLineItemStateOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    state: TCtpScalars['Set']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpImportStagedOrderLineItemState = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state: Array<TCtpItemStateDraftType>;
};

export type TCtpImportStagedOrderLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'ImportStagedOrderLineItemStateOutput';
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    state: TCtpScalars['Set']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpInStore = TCtpCartDiscountQueryInterface &
  TCtpCartQueryInterface &
  TCtpCustomerActiveCartInterface &
  TCtpCustomerQueryInterface &
  TCtpMeFieldInterface &
  TCtpOrderQueryInterface &
  TCtpShippingMethodsByCartInterface & {
    __typename?: 'InStore';
    /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
    businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
    /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
    businessUnits: TCtpBusinessUnitQueryResult;
    cart?: TCtpMaybe<TCtpCart>;
    cartDiscount?: TCtpMaybe<TCtpCartDiscount>;
    cartDiscounts: TCtpCartDiscountQueryResult;
    carts: TCtpCartQueryResult;
    customer?: TCtpMaybe<TCtpCustomer>;
    customerActiveCart?: TCtpMaybe<TCtpCart>;
    customers: TCtpCustomerQueryResult;
    /**
     * This field can only be used with an access token created with the password flow or with an anonymous session.
     *
     * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
     */
    me: TCtpInStoreMe;
    order?: TCtpMaybe<TCtpOrder>;
    orders: TCtpOrderQueryResult;
    product?: TCtpMaybe<TCtpProduct>;
    productSelectionAssignments: TCtpProductAssignmentQueryResult;
    productTailoring?: TCtpMaybe<TCtpProductTailoring>;
    productTailoringList: TCtpProductTailoringQueryResult;
    quote?: TCtpMaybe<TCtpQuote>;
    quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
    quoteRequests: TCtpQuoteRequestQueryResult;
    quotes: TCtpQuoteQueryResult;
    shippingMethodsByCart: Array<TCtpShippingMethod>;
    shoppingList?: TCtpMaybe<TCtpShoppingList>;
    shoppingLists: TCtpShoppingListQueryResult;
    stagedQuote?: TCtpMaybe<TCtpStagedQuote>;
    stagedQuotes: TCtpStagedQuoteQueryResult;
  };

export type TCtpInStore_BusinessUnitArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_BusinessUnitsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_CartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpInStore_CartDiscountArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_CartDiscountsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_CustomerArgs = {
  emailToken?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  passwordToken?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_CustomerActiveCartArgs = {
  customerId: TCtpScalars['String']['input'];
};

export type TCtpInStore_CustomersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_ProductArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  localeProjection?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  projectExpandedProducts?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_ProductSelectionAssignmentsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_ProductTailoringArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_ProductTailoringListArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_QuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_QuoteRequestArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_QuoteRequestsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_QuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_ShippingMethodsByCartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpInStore_ShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_ShoppingListsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_StagedQuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStore_StagedQuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStoreMe = TCtpActiveCartInterface &
  TCtpCartQueryInterface &
  TCtpMeQueryInterface &
  TCtpOrderQueryInterface &
  TCtpShoppingListQueryInterface & {
    __typename?: 'InStoreMe';
    activeCart?: TCtpMaybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    cart?: TCtpMaybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    carts: TCtpCartQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customer?: TCtpMaybe<TCtpCustomer>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    order?: TCtpMaybe<TCtpOrder>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    orders: TCtpOrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingList?: TCtpMaybe<TCtpShoppingList>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingLists: TCtpShoppingListQueryResult;
  };

export type TCtpInStoreMe_CartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpInStoreMe_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStoreMe_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStoreMe_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStoreMe_ShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInStoreMe_ShoppingListsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpInheritedAssociate = {
  __typename?: 'InheritedAssociate';
  associateRoleAssignments: Array<TCtpInheritedAssociateRoleAssignment>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef?: TCtpMaybe<TCtpReference>;
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
  store?: TCtpMaybe<TCtpStore>;
  storeRef: TCtpKeyReference;
};

export type TCtpInitiator = {
  __typename?: 'Initiator';
  anonymousId?: TCtpMaybe<TCtpScalars['String']['output']>;
  associateRef?: TCtpMaybe<TCtpReference>;
  attributedTo?: TCtpMaybe<TCtpAttribution>;
  clientId?: TCtpMaybe<TCtpScalars['String']['output']>;
  customerRef?: TCtpMaybe<TCtpReference>;
  externalUserId?: TCtpMaybe<TCtpScalars['String']['output']>;
  isPlatformClient?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  userRef?: TCtpMaybe<TCtpReference>;
};

export type TCtpInterfaceInteractionsRaw = {
  __typename?: 'InterfaceInteractionsRaw';
  fields: Array<TCtpRawCustomField>;
  type?: TCtpMaybe<TCtpTypeDefinition>;
  typeRef: TCtpReference;
};

export type TCtpInterfaceInteractionsRaw_FieldsArgs = {
  excludeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpInterfaceInteractionsRawResult = {
  __typename?: 'InterfaceInteractionsRawResult';
  limit?: TCtpMaybe<TCtpScalars['Int']['output']>;
  offset?: TCtpMaybe<TCtpScalars['Int']['output']>;
  results: Array<TCtpInterfaceInteractionsRaw>;
  total: TCtpScalars['Int']['output'];
};

/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type TCtpInventoryEntry = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'InventoryEntry';
    availableQuantity: TCtpScalars['Long']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    expectedDelivery?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    quantityOnStock: TCtpScalars['Long']['output'];
    restockableInDays?: TCtpMaybe<TCtpScalars['Int']['output']>;
    sku: TCtpScalars['String']['output'];
    supplyChannel?: TCtpMaybe<TCtpChannel>;
    supplyChannelRef?: TCtpMaybe<TCtpReference>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpInventoryEntryCreated = TCtpMessagePayload & {
  __typename?: 'InventoryEntryCreated';
  inventoryEntry: TCtpInventoryEntry;
  type: TCtpScalars['String']['output'];
};

export type TCtpInventoryEntryDeleted = TCtpMessagePayload & {
  __typename?: 'InventoryEntryDeleted';
  sku: TCtpScalars['String']['output'];
  supplyChannel?: TCtpMaybe<TCtpChannel>;
  supplyChannelRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpInventoryEntryDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  expectedDelivery?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantityOnStock: TCtpScalars['Long']['input'];
  restockableInDays?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku: TCtpScalars['String']['input'];
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpInventoryEntryQuantitySet = TCtpMessagePayload & {
  __typename?: 'InventoryEntryQuantitySet';
  newAvailableQuantity: TCtpScalars['Long']['output'];
  newQuantityOnStock: TCtpScalars['Long']['output'];
  oldAvailableQuantity: TCtpScalars['Long']['output'];
  oldQuantityOnStock: TCtpScalars['Long']['output'];
  supplyChannel?: TCtpMaybe<TCtpChannel>;
  supplyChannelRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpInventoryEntryQueryResult = {
  __typename?: 'InventoryEntryQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpInventoryEntry>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpInventoryEntryUpdateAction = {
  addQuantity?: TCtpInputMaybe<TCtpAddInventoryEntryQuantity>;
  changeQuantity?: TCtpInputMaybe<TCtpChangeInventoryEntryQuantity>;
  removeQuantity?: TCtpInputMaybe<TCtpRemoveInventoryEntryQuantity>;
  setCustomField?: TCtpInputMaybe<TCtpSetInventoryEntryCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetInventoryEntryCustomType>;
  setExpectedDelivery?: TCtpInputMaybe<TCtpSetInventoryEntryExpectedDelivery>;
  setRestockableInDays?: TCtpInputMaybe<TCtpSetInventoryEntryRestockableInDays>;
  setSupplyChannel?: TCtpInputMaybe<TCtpSetInventoryEntrySupplyChannel>;
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
  addressKey: TCtpScalars['String']['input'];
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpItemShippingAddressTargetDraftOutput = {
  __typename?: 'ItemShippingAddressTargetDraftOutput';
  addressKey: TCtpScalars['String']['output'];
  quantity: TCtpScalars['Long']['output'];
};

export type TCtpItemShippingAddressTargetDraftType = {
  addressKey: TCtpScalars['String']['input'];
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpItemShippingDetails = {
  __typename?: 'ItemShippingDetails';
  targets: Array<TCtpItemShippingTarget>;
  valid: TCtpScalars['Boolean']['output'];
};

export type TCtpItemShippingDetailsDraft = {
  itemShippingAddressTargets?: TCtpInputMaybe<
    Array<TCtpItemShippingAddressTargetDraft>
  >;
  shippingTargets?: TCtpInputMaybe<Array<TCtpShippingMethodTargetDraft>>;
  targets?: Array<TCtpShippingTargetDraft>;
};

export type TCtpItemShippingDetailsDraftOutput = {
  __typename?: 'ItemShippingDetailsDraftOutput';
  itemShippingAddressTargets: Array<TCtpItemShippingAddressTargetDraftOutput>;
  shippingTargets: Array<TCtpShippingMethodTargetDraftOutput>;
  targets: Array<TCtpItemShippingTarget>;
};

export type TCtpItemShippingDetailsDraftType = {
  itemShippingAddressTargets?: TCtpInputMaybe<
    Array<TCtpItemShippingAddressTargetDraftType>
  >;
  shippingTargets?: TCtpInputMaybe<Array<TCtpShippingMethodTargetDraftType>>;
  targets?: TCtpInputMaybe<Array<TCtpShippingTargetDraftType>>;
};

export type TCtpItemShippingTarget = {
  __typename?: 'ItemShippingTarget';
  addressKey: TCtpScalars['String']['output'];
  quantity: TCtpScalars['Long']['output'];
  shippingMethodKey?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpItemState = {
  __typename?: 'ItemState';
  quantity: TCtpScalars['Long']['output'];
  state?: TCtpMaybe<TCtpState>;
  stateRef: TCtpReference;
};

export type TCtpItemStateDraftType = {
  quantity: TCtpScalars['Long']['input'];
  state: TCtpReferenceInput;
};

export type TCtpKeyReference = {
  __typename?: 'KeyReference';
  key: TCtpScalars['String']['output'];
  typeId: TCtpScalars['String']['output'];
};

export type TCtpLimit = {
  __typename?: 'Limit';
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpLimitWithCurrent = {
  current?: TCtpMaybe<TCtpScalars['Long']['output']>;
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
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
  addedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
  distributionChannel?: TCtpMaybe<TCtpChannel>;
  distributionChannelRef?: TCtpMaybe<TCtpReference>;
  id: TCtpScalars['String']['output'];
  inventoryMode?: TCtpMaybe<TCtpInventoryMode>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  lineItemMode: TCtpLineItemMode;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  perMethodTaxRate: Array<TCtpMethodTaxRate>;
  price: TCtpProductPrice;
  priceMode: TCtpLineItemPriceMode;
  productId: TCtpScalars['String']['output'];
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productSlug?: TCtpMaybe<TCtpScalars['String']['output']>;
  productSlugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  productType?: TCtpMaybe<TCtpProductTypeDefinition>;
  productTypeRef?: TCtpMaybe<TCtpReference>;
  quantity: TCtpScalars['Long']['output'];
  shippingDetails?: TCtpMaybe<TCtpItemShippingDetails>;
  state: Array<TCtpItemState>;
  supplyChannel?: TCtpMaybe<TCtpChannel>;
  supplyChannelRef?: TCtpMaybe<TCtpReference>;
  taxRate?: TCtpMaybe<TCtpTaxRate>;
  taxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
  taxedPricePortions: Array<TCtpMethodTaxedPrice>;
  totalPrice?: TCtpMaybe<TCtpMoney>;
  variant?: TCtpMaybe<TCtpProductVariant>;
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
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
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
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpLineItemDraft = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpLineItemDraftOutput = {
  __typename?: 'LineItemDraftOutput';
  addedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
  distributionChannelResId?: TCtpMaybe<TCtpResourceIdentifier>;
  externalPrice?: TCtpMaybe<TCtpBaseMoney>;
  externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
  externalTotalPrice?: TCtpMaybe<TCtpExternalLineItemTotalPrice>;
  inventoryMode?: TCtpMaybe<TCtpInventoryMode>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  perMethodExternalTaxRate: Array<TCtpMethodExternalTaxRateDraftOutput>;
  productId?: TCtpMaybe<TCtpScalars['String']['output']>;
  quantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
  shippingDetails?: TCtpMaybe<TCtpItemShippingDetailsDraftOutput>;
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
  supplyChannelResId?: TCtpMaybe<TCtpResourceIdentifier>;
  variantId?: TCtpMaybe<TCtpScalars['Int']['output']>;
};

export type TCtpLineItemImportDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  price: TCtpProductPriceDataInput;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  state?: TCtpInputMaybe<Array<TCtpItemStateDraftType>>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  taxRate?: TCtpInputMaybe<TCtpTaxRateInput>;
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

export type TCtpLineItemReturnItem = TCtpReturnItem & {
  __typename?: 'LineItemReturnItem';
  comment?: TCtpMaybe<TCtpScalars['String']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lineItemId: TCtpScalars['String']['output'];
  paymentState: TCtpReturnPaymentState;
  quantity: TCtpScalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
  type: TCtpScalars['String']['output'];
};

export type TCtpLineItemStateTransition = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'LineItemStateTransition';
    fromState?: TCtpMaybe<TCtpState>;
    fromStateRef: TCtpReference;
    lineItemId: TCtpScalars['String']['output'];
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    quantity: TCtpScalars['Long']['output'];
    toState?: TCtpMaybe<TCtpState>;
    toStateRef: TCtpReference;
    transitionDate: TCtpScalars['DateTime']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'LineItemsTarget';
  predicate: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpLineItemsTargetInput = {
  predicate: TCtpScalars['String']['input'];
};

export type TCtpLocalizableEnumAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'LocalizableEnumAttributeDefinitionType';
    name: TCtpScalars['String']['output'];
    values: TCtpLocalizableEnumValueTypeResult;
  };

export type TCtpLocalizableEnumAttributeDefinitionType_ValuesArgs = {
  excludeKeys?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeKeys?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpLocalizableEnumTypeDraft = {
  values: Array<TCtpLocalizedEnumValueDraft>;
};

export type TCtpLocalizableEnumValueType = {
  __typename?: 'LocalizableEnumValueType';
  key: TCtpScalars['String']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
};

export type TCtpLocalizableEnumValueType_LabelArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpLocalizableEnumValueTypeResult = {
  __typename?: 'LocalizableEnumValueTypeResult';
  limit?: TCtpMaybe<TCtpScalars['Int']['output']>;
  offset?: TCtpMaybe<TCtpScalars['Int']['output']>;
  results: Array<TCtpLocalizableEnumValueType>;
  total: TCtpScalars['Int']['output'];
};

export type TCtpLocalizableTextAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'LocalizableTextAttributeDefinitionType';
    name: TCtpScalars['String']['output'];
  };

export type TCtpLocalizedEnumAttribute = TCtpAttribute & {
  __typename?: 'LocalizedEnumAttribute';
  key: TCtpScalars['String']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
};

export type TCtpLocalizedEnumAttribute_LabelArgs = {
  locale: TCtpScalars['Locale']['input'];
};

export type TCtpLocalizedEnumField = TCtpCustomField & {
  __typename?: 'LocalizedEnumField';
  key: TCtpScalars['String']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
};

export type TCtpLocalizedEnumField_LabelArgs = {
  locale: TCtpScalars['Locale']['input'];
};

export type TCtpLocalizedEnumType = TCtpFieldType & {
  __typename?: 'LocalizedEnumType';
  name: TCtpScalars['String']['output'];
  values: Array<TCtpLocalizedEnumValue>;
};

export type TCtpLocalizedEnumValue = {
  __typename?: 'LocalizedEnumValue';
  key: TCtpScalars['String']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
};

export type TCtpLocalizedEnumValue_LabelArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpLocalizedEnumValueDraft = {
  key: TCtpScalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpLocalizedEnumValueInput = {
  key: TCtpScalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpLocalizedString = {
  __typename?: 'LocalizedString';
  locale: TCtpScalars['Locale']['output'];
  value: TCtpScalars['String']['output'];
};

export type TCtpLocalizedStringAttribute = TCtpAttribute & {
  __typename?: 'LocalizedStringAttribute';
  name: TCtpScalars['String']['output'];
  value?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpLocalizedStringAttribute_ValueArgs = {
  locale: TCtpScalars['Locale']['input'];
};

export type TCtpLocalizedStringField = TCtpCustomField & {
  __typename?: 'LocalizedStringField';
  name: TCtpScalars['String']['output'];
  value?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpLocalizedStringField_ValueArgs = {
  locale: TCtpScalars['Locale']['input'];
};

export type TCtpLocalizedStringItemInputType = {
  locale: TCtpScalars['Locale']['input'];
  value: TCtpScalars['String']['input'];
};

export type TCtpLocalizedStringType = TCtpFieldType & {
  __typename?: 'LocalizedStringType';
  name: TCtpScalars['String']['output'];
};

export type TCtpLocalizedText = {
  locale: TCtpScalars['Locale']['input'];
  text: TCtpScalars['String']['input'];
};

export type TCtpLocation = {
  __typename?: 'Location';
  country: TCtpScalars['Country']['output'];
  state?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpMe = TCtpActiveCartInterface &
  TCtpCartQueryInterface &
  TCtpMeQueryInterface &
  TCtpOrderQueryInterface &
  TCtpShoppingListQueryInterface & {
    __typename?: 'Me';
    activeCart?: TCtpMaybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    businessUnits: TCtpBusinessUnitQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    cart?: TCtpMaybe<TCtpCart>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    carts: TCtpCartQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    customer?: TCtpMaybe<TCtpCustomer>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    order?: TCtpMaybe<TCtpOrder>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    orders: TCtpOrderQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    payment?: TCtpMaybe<TCtpMyPayment>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    payments: TCtpMyPaymentQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quote?: TCtpMaybe<TCtpQuote>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quoteRequests: TCtpQuoteRequestQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    quotes: TCtpQuoteQueryResult;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingList?: TCtpMaybe<TCtpShoppingList>;
    /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
    shoppingLists: TCtpShoppingListQueryResult;
  };

export type TCtpMe_BusinessUnitArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_BusinessUnitsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_CartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpMe_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_PaymentArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpMe_PaymentsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_QuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_QuoteRequestArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_QuoteRequestsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_QuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_ShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMe_ShoppingListsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** The me field gives access to the data that is specific to the customer or anonymous session linked to the access token. */
export type TCtpMeFieldInterface = {
  me: TCtpMeQueryInterface;
};

export type TCtpMeQueryInterface = {
  activeCart?: TCtpMaybe<TCtpCart>;
  cart?: TCtpMaybe<TCtpCart>;
  carts: TCtpCartQueryResult;
  order?: TCtpMaybe<TCtpOrder>;
  orders: TCtpOrderQueryResult;
  shoppingList?: TCtpMaybe<TCtpShoppingList>;
  shoppingLists: TCtpShoppingListQueryResult;
};

export type TCtpMeQueryInterface_CartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpMeQueryInterface_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMeQueryInterface_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMeQueryInterface_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMeQueryInterface_ShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMeQueryInterface_ShoppingListsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMessage = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Message';
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    id: TCtpScalars['String']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    payload: TCtpMessagePayload;
    resourceRef: TCtpReference;
    resourceVersion: TCtpScalars['Long']['output'];
    sequenceNumber: TCtpScalars['Long']['output'];
    type: TCtpScalars['String']['output'];
    userProvidedIdentifiers?: TCtpMaybe<TCtpUserProvidedIdentifiers>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpMessagePayload = {
  type: TCtpScalars['String']['output'];
};

export type TCtpMessageQueryResult = {
  __typename?: 'MessageQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpMessage>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpMessageSubscription = {
  __typename?: 'MessageSubscription';
  resourceTypeId: TCtpScalars['String']['output'];
  types: Array<TCtpScalars['String']['output']>;
};

export type TCtpMessageSubscriptionInput = {
  resourceTypeId: TCtpScalars['String']['input'];
  types?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpMessagesConfiguration = {
  __typename?: 'MessagesConfiguration';
  deleteDaysAfterCreation?: TCtpMaybe<TCtpScalars['Int']['output']>;
  enabled: TCtpScalars['Boolean']['output'];
};

export type TCtpMessagesConfigurationDraft = {
  deleteDaysAfterCreation: TCtpScalars['Int']['input'];
  enabled: TCtpScalars['Boolean']['input'];
};

export type TCtpMethodExternalTaxRateDraft = {
  shippingMethodKey: TCtpScalars['String']['input'];
  taxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
};

export type TCtpMethodExternalTaxRateDraftOutput = {
  __typename?: 'MethodExternalTaxRateDraftOutput';
  shippingMethodKey: TCtpScalars['String']['output'];
  taxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
};

export type TCtpMethodTaxRate = {
  __typename?: 'MethodTaxRate';
  shippingMethodKey: TCtpScalars['String']['output'];
  taxRate?: TCtpMaybe<TCtpTaxRate>;
};

export type TCtpMethodTaxedPrice = {
  __typename?: 'MethodTaxedPrice';
  shippingMethodKey: TCtpScalars['String']['output'];
  taxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
};

export type TCtpMissingFilterInput = {
  path: TCtpScalars['String']['input'];
};

export type TCtpMoney = TCtpBaseMoney & {
  __typename?: 'Money';
  centAmount: TCtpScalars['Long']['output'];
  currencyCode: TCtpScalars['Currency']['output'];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpMoneyAttribute = TCtpAttribute & {
  __typename?: 'MoneyAttribute';
  centAmount: TCtpScalars['Long']['output'];
  currencyCode: TCtpScalars['Currency']['output'];
  name: TCtpScalars['String']['output'];
};

export type TCtpMoneyAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'MoneyAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
};

export type TCtpMoneyDraft = {
  centAmount: TCtpScalars['Long']['input'];
  currencyCode: TCtpScalars['Currency']['input'];
};

export type TCtpMoneyField = TCtpCustomField & {
  __typename?: 'MoneyField';
  centAmount: TCtpScalars['Long']['output'];
  currencyCode: TCtpScalars['Currency']['output'];
  name: TCtpScalars['String']['output'];
};

export type TCtpMoneyInput = {
  centAmount: TCtpScalars['Long']['input'];
  currencyCode: TCtpScalars['Currency']['input'];
};

export type TCtpMoneyType = TCtpFieldType & {
  __typename?: 'MoneyType';
  name: TCtpScalars['String']['output'];
};

export type TCtpMoveProductImageToPosition = {
  imageUrl: TCtpScalars['String']['input'];
  position: TCtpScalars['Int']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpMoveProductTailoringImageToPosition = {
  imageUrl: TCtpScalars['String']['input'];
  position: TCtpScalars['Int']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpMultiBuyCustomLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'MultiBuyCustomLineItemsTarget';
  discountedQuantity: TCtpScalars['Long']['output'];
  maxOccurrence?: TCtpMaybe<TCtpScalars['Int']['output']>;
  predicate: TCtpScalars['String']['output'];
  selectionMode: TCtpSelectionMode;
  triggerQuantity: TCtpScalars['Long']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpMultiBuyCustomLineItemsTargetInput = {
  discountedQuantity: TCtpScalars['Long']['input'];
  maxOccurrence?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  predicate: TCtpScalars['String']['input'];
  selectionMode?: TCtpInputMaybe<TCtpSelectionMode>;
  triggerQuantity: TCtpScalars['Long']['input'];
};

export type TCtpMultiBuyLineItemsTarget = TCtpCartDiscountTarget & {
  __typename?: 'MultiBuyLineItemsTarget';
  discountedQuantity: TCtpScalars['Long']['output'];
  maxOccurrence?: TCtpMaybe<TCtpScalars['Int']['output']>;
  predicate: TCtpScalars['String']['output'];
  selectionMode: TCtpSelectionMode;
  triggerQuantity: TCtpScalars['Long']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpMultiBuyLineItemsTargetInput = {
  discountedQuantity: TCtpScalars['Long']['input'];
  maxOccurrence?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  predicate: TCtpScalars['String']['input'];
  selectionMode?: TCtpInputMaybe<TCtpSelectionMode>;
  triggerQuantity: TCtpScalars['Long']['input'];
};

export type TCtpMutation = {
  __typename?: 'Mutation';
  createApiClient?: TCtpMaybe<TCtpApiClientWithSecret>;
  createApprovalRule?: TCtpMaybe<TCtpApprovalRule>;
  createAssociateRole?: TCtpMaybe<TCtpAssociateRole>;
  createAttributeGroup?: TCtpMaybe<TCtpAttributeGroup>;
  createBusinessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  createCart?: TCtpMaybe<TCtpCart>;
  createCartDiscount?: TCtpMaybe<TCtpCartDiscount>;
  createCategory?: TCtpMaybe<TCtpCategory>;
  createChannel?: TCtpMaybe<TCtpChannel>;
  createCustomerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  createDiscountCode?: TCtpMaybe<TCtpDiscountCode>;
  createExtension?: TCtpMaybe<TCtpExtension>;
  createInventoryEntry?: TCtpMaybe<TCtpInventoryEntry>;
  createMyBusinessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyCart?: TCtpMaybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromCart?: TCtpMaybe<TCtpOrder>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyOrderFromQuote?: TCtpMaybe<TCtpOrder>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyPayment?: TCtpMaybe<TCtpMyPayment>;
  createMyQuoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  createMyShoppingList?: TCtpMaybe<TCtpShoppingList>;
  createOrUpdateCustomObject?: TCtpMaybe<TCtpCustomObject>;
  createOrderEdit?: TCtpMaybe<TCtpOrderEdit>;
  createOrderFromCart?: TCtpMaybe<TCtpOrder>;
  createOrderFromQuote?: TCtpMaybe<TCtpOrder>;
  createPayment?: TCtpMaybe<TCtpPayment>;
  createProduct?: TCtpMaybe<TCtpProduct>;
  createProductDiscount?: TCtpMaybe<TCtpProductDiscount>;
  createProductSelection?: TCtpMaybe<TCtpProductSelection>;
  createProductTailoring?: TCtpMaybe<TCtpProductTailoring>;
  createProductType?: TCtpMaybe<TCtpProductTypeDefinition>;
  createQuote?: TCtpMaybe<TCtpQuote>;
  createQuoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  createReview?: TCtpMaybe<TCtpReview>;
  createShippingMethod?: TCtpMaybe<TCtpShippingMethod>;
  createShoppingList?: TCtpMaybe<TCtpShoppingList>;
  createStagedQuote?: TCtpMaybe<TCtpStagedQuote>;
  createStandalonePrice?: TCtpMaybe<TCtpStandalonePrice>;
  createState?: TCtpMaybe<TCtpState>;
  createStore?: TCtpMaybe<TCtpStore>;
  createSubscription?: TCtpMaybe<TCtpCommercetoolsSubscription>;
  createTaxCategory?: TCtpMaybe<TCtpTaxCategory>;
  createTypeDefinition?: TCtpMaybe<TCtpTypeDefinition>;
  createZone?: TCtpMaybe<TCtpZone>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerChangeMyPassword?: TCtpMaybe<TCtpCustomer>;
  customerChangePassword?: TCtpMaybe<TCtpCustomer>;
  /** Verifies customer's email using a token. */
  customerConfirmEmail?: TCtpMaybe<TCtpCustomer>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerConfirmMyEmail?: TCtpMaybe<TCtpCustomer>;
  customerCreateEmailVerificationToken: TCtpCustomerEmailToken;
  /** The token value is used to reset the password of the customer with the given email. The token is valid only for 10 minutes. */
  customerCreatePasswordResetToken?: TCtpMaybe<TCtpCustomerPasswordToken>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  customerResetMyPassword?: TCtpMaybe<TCtpCustomer>;
  /**
   * The following workflow can be used to reset the customer’s password:
   *
   * 1. Create a password reset token and send it embedded in a link to the customer.
   * 2. When the customer clicks on the link, you may optionally retrieve customer by password token.
   * 3. When the customer entered new password, use reset customer’s password to reset the password.
   */
  customerResetPassword?: TCtpMaybe<TCtpCustomer>;
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
  deleteApiClient?: TCtpMaybe<TCtpApiClientWithoutSecret>;
  deleteAssociateRole?: TCtpMaybe<TCtpAssociateRole>;
  deleteAttributeGroup?: TCtpMaybe<TCtpAttributeGroup>;
  deleteBusinessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  deleteCart?: TCtpMaybe<TCtpCart>;
  deleteCartDiscount?: TCtpMaybe<TCtpCartDiscount>;
  deleteCategory?: TCtpMaybe<TCtpCategory>;
  deleteChannel?: TCtpMaybe<TCtpChannel>;
  deleteCustomObject?: TCtpMaybe<TCtpCustomObject>;
  deleteCustomer?: TCtpMaybe<TCtpCustomer>;
  deleteCustomerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  deleteDiscountCode?: TCtpMaybe<TCtpDiscountCode>;
  deleteExtension?: TCtpMaybe<TCtpExtension>;
  deleteInventoryEntry?: TCtpMaybe<TCtpInventoryEntry>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCart?: TCtpMaybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyCustomer?: TCtpMaybe<TCtpCustomer>;
  deleteMyPayment?: TCtpMaybe<TCtpMyPayment>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  deleteMyShoppingList?: TCtpMaybe<TCtpShoppingList>;
  deleteOrder?: TCtpMaybe<TCtpOrder>;
  deleteOrderEdit?: TCtpMaybe<TCtpOrderEdit>;
  deletePayment?: TCtpMaybe<TCtpPayment>;
  deleteProduct?: TCtpMaybe<TCtpProduct>;
  deleteProductDiscount?: TCtpMaybe<TCtpProductDiscount>;
  deleteProductSelection?: TCtpMaybe<TCtpProductSelection>;
  deleteProductTailoring?: TCtpMaybe<TCtpProductTailoring>;
  deleteProductType?: TCtpMaybe<TCtpProductTypeDefinition>;
  deleteQuote?: TCtpMaybe<TCtpQuote>;
  deleteQuoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  deleteReview?: TCtpMaybe<TCtpReview>;
  deleteShippingMethod?: TCtpMaybe<TCtpShippingMethod>;
  deleteShoppingList?: TCtpMaybe<TCtpShoppingList>;
  deleteStagedQuote?: TCtpMaybe<TCtpStagedQuote>;
  deleteStandalonePrice?: TCtpMaybe<TCtpStandalonePrice>;
  deleteState?: TCtpMaybe<TCtpState>;
  deleteStore?: TCtpMaybe<TCtpStore>;
  deleteSubscription?: TCtpMaybe<TCtpCommercetoolsSubscription>;
  deleteTaxCategory?: TCtpMaybe<TCtpTaxCategory>;
  deleteTypeDefinition?: TCtpMaybe<TCtpTypeDefinition>;
  deleteZone?: TCtpMaybe<TCtpZone>;
  importOrder?: TCtpMaybe<TCtpOrder>;
  replicateCart?: TCtpMaybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  replicateMyCart?: TCtpMaybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta Signs up a new customer and associates it with the business unit. */
  signUpInMyBusinessUnit: TCtpCustomerSignInResult;
  updateApprovalFlow?: TCtpMaybe<TCtpApprovalFlow>;
  updateApprovalRule?: TCtpMaybe<TCtpApprovalRule>;
  updateAssociateRole?: TCtpMaybe<TCtpAssociateRole>;
  updateAttributeGroup?: TCtpMaybe<TCtpAttributeGroup>;
  updateBusinessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  updateCart?: TCtpMaybe<TCtpCart>;
  updateCartDiscount?: TCtpMaybe<TCtpCartDiscount>;
  updateCategory?: TCtpMaybe<TCtpCategory>;
  updateChannel?: TCtpMaybe<TCtpChannel>;
  updateCustomer?: TCtpMaybe<TCtpCustomer>;
  updateCustomerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  updateDiscountCode?: TCtpMaybe<TCtpDiscountCode>;
  updateExtension?: TCtpMaybe<TCtpExtension>;
  updateInventoryEntry?: TCtpMaybe<TCtpInventoryEntry>;
  updateMyBusinessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCart?: TCtpMaybe<TCtpCart>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyCustomer?: TCtpMaybe<TCtpCustomer>;
  updateMyPayment?: TCtpMaybe<TCtpMyPayment>;
  updateMyQuote?: TCtpMaybe<TCtpQuote>;
  updateMyQuoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  updateMyShoppingList?: TCtpMaybe<TCtpShoppingList>;
  updateOrder?: TCtpMaybe<TCtpOrder>;
  updateOrderEdit?: TCtpMaybe<TCtpOrderEdit>;
  updatePayment?: TCtpMaybe<TCtpPayment>;
  updateProduct?: TCtpMaybe<TCtpProduct>;
  updateProductDiscount?: TCtpMaybe<TCtpProductDiscount>;
  updateProductSelection?: TCtpMaybe<TCtpProductSelection>;
  updateProductTailoring?: TCtpMaybe<TCtpProductTailoring>;
  updateProductType?: TCtpMaybe<TCtpProductTypeDefinition>;
  updateProject?: TCtpMaybe<TCtpProjectProjection>;
  updateQuote?: TCtpMaybe<TCtpQuote>;
  updateQuoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  updateReview?: TCtpMaybe<TCtpReview>;
  updateShippingMethod?: TCtpMaybe<TCtpShippingMethod>;
  updateShoppingList?: TCtpMaybe<TCtpShoppingList>;
  updateStagedQuote?: TCtpMaybe<TCtpStagedQuote>;
  updateStandalonePrice?: TCtpMaybe<TCtpStandalonePrice>;
  updateState?: TCtpMaybe<TCtpState>;
  updateStore?: TCtpMaybe<TCtpStore>;
  updateSubscription?: TCtpMaybe<TCtpCommercetoolsSubscription>;
  updateTaxCategory?: TCtpMaybe<TCtpTaxCategory>;
  updateTypeDefinition?: TCtpMaybe<TCtpTypeDefinition>;
  updateZone?: TCtpMaybe<TCtpZone>;
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
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpBusinessUnitDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateCartArgs = {
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpCartDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateCartDiscountArgs = {
  draft: TCtpCartDiscountDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
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
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateMyOrderFromCartArgs = {
  draft: TCtpOrderMyCartCommand;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
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
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateOrUpdateCustomObjectArgs = {
  draft: TCtpCustomObjectDraft;
};

export type TCtpMutation_CreateOrderEditArgs = {
  draft: TCtpOrderEditDraft;
};

export type TCtpMutation_CreateOrderFromCartArgs = {
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpOrderCartCommand;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateOrderFromQuoteArgs = {
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpOrderQuoteCommand;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
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
};

export type TCtpMutation_CreateProductTailoringArgs = {
  draft: TCtpProductTailoringDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateProductTypeArgs = {
  draft: TCtpProductTypeDraft;
};

export type TCtpMutation_CreateQuoteArgs = {
  draft: TCtpQuoteDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateQuoteRequestArgs = {
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  draft: TCtpQuoteRequestDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateReviewArgs = {
  draft: TCtpReviewDraft;
};

export type TCtpMutation_CreateShippingMethodArgs = {
  draft: TCtpShippingMethodDraft;
};

export type TCtpMutation_CreateShoppingListArgs = {
  draft: TCtpShoppingListDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CreateStagedQuoteArgs = {
  draft: TCtpStagedQuoteDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
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
  currentPassword: TCtpScalars['String']['input'];
  newPassword: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_CustomerChangePasswordArgs = {
  currentPassword: TCtpScalars['String']['input'];
  id: TCtpScalars['String']['input'];
  newPassword: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_CustomerConfirmEmailArgs = {
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  tokenValue: TCtpScalars['String']['input'];
  version?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpMutation_CustomerConfirmMyEmailArgs = {
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  tokenValue: TCtpScalars['String']['input'];
};

export type TCtpMutation_CustomerCreateEmailVerificationTokenArgs = {
  id: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  ttlMinutes: TCtpScalars['Int']['input'];
  version?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpMutation_CustomerCreatePasswordResetTokenArgs = {
  email: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  ttlMinutes?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpMutation_CustomerResetMyPasswordArgs = {
  newPassword: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  tokenValue: TCtpScalars['String']['input'];
};

export type TCtpMutation_CustomerResetPasswordArgs = {
  newPassword: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  tokenValue: TCtpScalars['String']['input'];
  version?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpMutation_CustomerSignInArgs = {
  draft: TCtpCustomerSignInDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CustomerSignMeInArgs = {
  draft: TCtpCustomerSignMeInDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CustomerSignMeUpArgs = {
  draft: TCtpCustomerSignMeUpDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_CustomerSignUpArgs = {
  draft: TCtpCustomerSignUpDraft;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpMutation_DeleteApiClientArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpMutation_DeleteAssociateRoleArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteAttributeGroupArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteBusinessUnitArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteCartArgs = {
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteCartDiscountArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteCategoryArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteChannelArgs = {
  id: TCtpScalars['String']['input'];
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteCustomObjectArgs = {
  container?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  version?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpMutation_DeleteCustomerArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteCustomerGroupArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteDiscountCodeArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteExtensionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteInventoryEntryArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteMyCartArgs = {
  id: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteMyCustomerArgs = {
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteMyPaymentArgs = {
  id: TCtpScalars['String']['input'];
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteMyShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteOrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteOrderEditArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeletePaymentArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteProductArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteProductDiscountArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteProductSelectionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteProductTailoringArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteProductTypeArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteQuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteQuoteRequestArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteReviewArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteShippingMethodArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteStagedQuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  personalDataErasure?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteStandalonePriceArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteStateArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteStoreArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteSubscriptionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteTaxCategoryArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteTypeDefinitionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_DeleteZoneArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_ImportOrderArgs = {
  draft: TCtpImportOrderDraft;
};

export type TCtpMutation_ReplicateCartArgs = {
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  reference: TCtpReferenceInput;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
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
  id: TCtpScalars['String']['input'];
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateApprovalRuleArgs = {
  actions: Array<TCtpApprovalRuleUpdateAction>;
  asAssociate: TCtpAsAssociateArgument;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateAssociateRoleArgs = {
  actions: Array<TCtpAssociateRoleUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateAttributeGroupArgs = {
  actions: Array<TCtpAttributeGroupUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateBusinessUnitArgs = {
  actions: Array<TCtpBusinessUnitUpdateAction>;
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateCartArgs = {
  actions: Array<TCtpCartUpdateAction>;
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateCartDiscountArgs = {
  actions: Array<TCtpCartDiscountUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateCategoryArgs = {
  actions: Array<TCtpCategoryUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateChannelArgs = {
  actions: Array<TCtpChannelUpdateAction>;
  id: TCtpScalars['String']['input'];
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateCustomerArgs = {
  actions: Array<TCtpCustomerUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateCustomerGroupArgs = {
  actions: Array<TCtpCustomerGroupUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateDiscountCodeArgs = {
  actions: Array<TCtpDiscountCodeUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateExtensionArgs = {
  actions: Array<TCtpExtensionUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateInventoryEntryArgs = {
  actions: Array<TCtpInventoryEntryUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyBusinessUnitArgs = {
  actions: Array<TCtpMyBusinessUnitUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyCartArgs = {
  actions: Array<TCtpMyCartUpdateAction>;
  id: TCtpScalars['String']['input'];
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyCustomerArgs = {
  actions: Array<TCtpMyCustomerUpdateAction>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyPaymentArgs = {
  actions: Array<TCtpMyPaymentUpdateAction>;
  id: TCtpScalars['String']['input'];
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyQuoteArgs = {
  actions: Array<TCtpMyQuoteUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyQuoteRequestArgs = {
  actions: Array<TCtpMyQuoteRequestUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateMyShoppingListArgs = {
  actions: Array<TCtpMyShoppingListUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateOrderArgs = {
  actions: Array<TCtpOrderUpdateAction>;
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateOrderEditArgs = {
  actions: Array<TCtpOrderEditUpdateAction>;
  dryRun?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdatePaymentArgs = {
  actions: Array<TCtpPaymentUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateProductArgs = {
  actions: Array<TCtpProductUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateProductDiscountArgs = {
  actions: Array<TCtpProductDiscountUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateProductSelectionArgs = {
  actions: Array<TCtpProductSelectionUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateProductTailoringArgs = {
  actions: Array<TCtpProductTailoringUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateProductTypeArgs = {
  actions: Array<TCtpProductTypeUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateProjectArgs = {
  actions: Array<TCtpProjectSettingsUpdateAction>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateQuoteArgs = {
  actions: Array<TCtpQuoteUpdateAction>;
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateQuoteRequestArgs = {
  actions: Array<TCtpQuoteRequestUpdateAction>;
  asAssociate?: TCtpInputMaybe<TCtpAsAssociateArgument>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateReviewArgs = {
  actions: Array<TCtpReviewUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateShippingMethodArgs = {
  actions: Array<TCtpShippingMethodUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateShoppingListArgs = {
  actions: Array<TCtpShoppingListUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateStagedQuoteArgs = {
  actions: Array<TCtpStagedQuoteUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateStandalonePriceArgs = {
  actions: Array<TCtpStandalonePriceUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateStateArgs = {
  actions: Array<TCtpStateUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateStoreArgs = {
  actions: Array<TCtpStoreUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateSubscriptionArgs = {
  actions: Array<TCtpSubscriptionUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateTaxCategoryArgs = {
  actions: Array<TCtpTaxCategoryUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateTypeDefinitionArgs = {
  actions: Array<TCtpTypeUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpMutation_UpdateZoneArgs = {
  actions: Array<TCtpZoneUpdateAction>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  version: TCtpScalars['Long']['input'];
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpMyBusinessUnitDraft = {
  addresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  /** The indices of the billing addresses in the `addresses` list. The `billingAddressIds` of the customer will be set to the IDs of that addresses. */
  billingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  contactEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  /** The index of the address in the `addresses` list. The `defaultBillingAddressId` of the customer will be set to the ID of that address. */
  defaultBillingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  /** The index of the address in the `addresses` list. The `defaultShippingAddressId` of the customer will be set to the ID of that address. */
  defaultShippingAddress?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  key: TCtpScalars['String']['input'];
  name: TCtpScalars['String']['input'];
  parentUnit?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  /** The indices of the shipping addresses in the `addresses` list. The `shippingAddressIds` of the `Customer` will be set to the IDs of that addresses. */
  shippingAddresses?: TCtpInputMaybe<Array<TCtpScalars['Int']['input']>>;
  storeMode?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  unitType: TCtpBusinessUnitType;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpMyBusinessUnitUpdateAction = {
  addAddress?: TCtpInputMaybe<TCtpAddMyBusinessUnitAddress>;
  addBillingAddressId?: TCtpInputMaybe<TCtpAddMyBusinessUnitBillingAddressId>;
  addShippingAddressId?: TCtpInputMaybe<TCtpAddMyBusinessUnitShippingAddressId>;
  changeAddress?: TCtpInputMaybe<TCtpChangeMyBusinessUnitAddress>;
  changeAssociate?: TCtpInputMaybe<TCtpChangeMyBusinessUnitAssociate>;
  changeName?: TCtpInputMaybe<TCtpChangeMyBusinessUnitName>;
  changeParentUnit?: TCtpInputMaybe<TCtpChangeMyBusinessUnitParentUnit>;
  removeAddress?: TCtpInputMaybe<TCtpRemoveMyBusinessUnitAddress>;
  removeAssociate?: TCtpInputMaybe<TCtpRemoveMyBusinessUnitAssociate>;
  removeBillingAddressId?: TCtpInputMaybe<TCtpRemoveMyBusinessUnitBillingAddressId>;
  removeShippingAddressId?: TCtpInputMaybe<TCtpRemoveMyBusinessUnitShippingAddressId>;
  setAddressCustomField?: TCtpInputMaybe<TCtpSetMyBusinessUnitAddressCustomField>;
  setAddressCustomType?: TCtpInputMaybe<TCtpSetMyBusinessUnitAddressCustomType>;
  setContactEmail?: TCtpInputMaybe<TCtpSetMyBusinessUnitContactEmail>;
  setCustomField?: TCtpInputMaybe<TCtpSetMyBusinessUnitCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetMyBusinessUnitCustomType>;
  setDefaultBillingAddress?: TCtpInputMaybe<TCtpSetMyBusinessUnitDefaultBillingAddress>;
  setDefaultShippingAddress?: TCtpInputMaybe<TCtpSetMyBusinessUnitDefaultShippingAddress>;
};

export type TCtpMyCartDraft = {
  billingAddress?: TCtpInputMaybe<TCtpAddressInput>;
  businessUnit?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  currency: TCtpScalars['Currency']['input'];
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customShipping?: TCtpInputMaybe<Array<TCtpCustomShippingDraft>>;
  customerEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  discountCodes?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  itemShippingAddresses?: TCtpInputMaybe<Array<TCtpAddressInput>>;
  lineItems?: TCtpInputMaybe<Array<TCtpMyLineItemDraft>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
  shipping?: TCtpInputMaybe<Array<TCtpShippingDraft>>;
  shippingAddress?: TCtpInputMaybe<TCtpAddressInput>;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  shippingMode?: TCtpInputMaybe<TCtpShippingMode>;
  store?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  taxMode?: TCtpInputMaybe<TCtpTaxMode>;
};

export type TCtpMyCartUpdateAction = {
  addDiscountCode?: TCtpInputMaybe<TCtpAddCartDiscountCode>;
  addItemShippingAddress?: TCtpInputMaybe<TCtpAddCartItemShippingAddress>;
  addLineItem?: TCtpInputMaybe<TCtpAddMyCartLineItem>;
  addPayment?: TCtpInputMaybe<TCtpAddCartPayment>;
  addShoppingList?: TCtpInputMaybe<TCtpAddCartShoppingList>;
  applyDeltaToCustomLineItemShippingDetailsTargets?: TCtpInputMaybe<TCtpApplyCartDeltaToCustomLineItemShippingDetailsTargets>;
  applyDeltaToLineItemShippingDetailsTargets?: TCtpInputMaybe<TCtpApplyCartDeltaToLineItemShippingDetailsTargets>;
  changeLineItemQuantity?: TCtpInputMaybe<TCtpChangeCartLineItemQuantity>;
  changeLineItemsOrder?: TCtpInputMaybe<TCtpChangeCartLineItemsOrder>;
  changeTaxMode?: TCtpInputMaybe<TCtpChangeMyCartTaxMode>;
  recalculate?: TCtpInputMaybe<TCtpRecalculateCart>;
  removeDiscountCode?: TCtpInputMaybe<TCtpRemoveCartDiscountCode>;
  removeItemShippingAddress?: TCtpInputMaybe<TCtpRemoveCartItemShippingAddress>;
  removeLineItem?: TCtpInputMaybe<TCtpRemoveCartLineItem>;
  removePayment?: TCtpInputMaybe<TCtpRemoveCartPayment>;
  setBillingAddress?: TCtpInputMaybe<TCtpSetCartBillingAddress>;
  setBillingAddressCustomField?: TCtpInputMaybe<TCtpSetCartBillingAddressCustomField>;
  setBillingAddressCustomType?: TCtpInputMaybe<TCtpSetCartBillingAddressCustomType>;
  setBusinessUnit?: TCtpInputMaybe<TCtpSetCartBusinessUnit>;
  setCountry?: TCtpInputMaybe<TCtpSetCartCountry>;
  setCustomField?: TCtpInputMaybe<TCtpSetCartCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetCartCustomType>;
  setCustomerEmail?: TCtpInputMaybe<TCtpSetCartCustomerEmail>;
  setDeleteDaysAfterLastModification?: TCtpInputMaybe<TCtpSetCartDeleteDaysAfterLastModification>;
  setItemShippingAddressCustomField?: TCtpInputMaybe<TCtpSetCartItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: TCtpInputMaybe<TCtpSetCartItemShippingAddressCustomType>;
  setLineItemCustomField?: TCtpInputMaybe<TCtpSetCartLineItemCustomField>;
  setLineItemCustomType?: TCtpInputMaybe<TCtpSetCartLineItemCustomType>;
  setLineItemDistributionChannel?: TCtpInputMaybe<TCtpSetCartLineItemDistributionChannel>;
  setLineItemShippingDetails?: TCtpInputMaybe<TCtpSetCartLineItemShippingDetails>;
  setLineItemSupplyChannel?: TCtpInputMaybe<TCtpSetCartLineItemSupplyChannel>;
  setLocale?: TCtpInputMaybe<TCtpSetCartLocale>;
  setShippingAddress?: TCtpInputMaybe<TCtpSetCartShippingAddress>;
  setShippingAddressCustomField?: TCtpInputMaybe<TCtpSetCartShippingAddressCustomField>;
  setShippingAddressCustomType?: TCtpInputMaybe<TCtpSetCartShippingAddressCustomType>;
  setShippingCustomField?: TCtpInputMaybe<TCtpSetCartShippingCustomField>;
  setShippingCustomType?: TCtpInputMaybe<TCtpSetCartShippingCustomType>;
  setShippingMethod?: TCtpInputMaybe<TCtpSetMyCartShippingMethod>;
  updateItemShippingAddress?: TCtpInputMaybe<TCtpUpdateCartItemShippingAddress>;
};

export type TCtpMyCustomerUpdateAction = {
  addAddress?: TCtpInputMaybe<TCtpAddCustomerAddress>;
  addBillingAddressId?: TCtpInputMaybe<TCtpAddCustomerBillingAddressId>;
  addShippingAddressId?: TCtpInputMaybe<TCtpAddCustomerShippingAddressId>;
  changeAddress?: TCtpInputMaybe<TCtpChangeCustomerAddress>;
  changeEmail?: TCtpInputMaybe<TCtpChangeCustomerEmail>;
  removeAddress?: TCtpInputMaybe<TCtpRemoveCustomerAddress>;
  removeBillingAddressId?: TCtpInputMaybe<TCtpRemoveCustomerBillingAddressId>;
  removeShippingAddressId?: TCtpInputMaybe<TCtpRemoveCustomerShippingAddressId>;
  setAddressCustomField?: TCtpInputMaybe<TCtpSetCustomerAddressCustomField>;
  setAddressCustomType?: TCtpInputMaybe<TCtpSetCustomerAddressCustomType>;
  setCompanyName?: TCtpInputMaybe<TCtpSetCustomerCompanyName>;
  setCustomField?: TCtpInputMaybe<TCtpSetCustomerCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetCustomerCustomType>;
  setDateOfBirth?: TCtpInputMaybe<TCtpSetCustomerDateOfBirth>;
  setDefaultBillingAddress?: TCtpInputMaybe<TCtpSetCustomerDefaultBillingAddress>;
  setDefaultShippingAddress?: TCtpInputMaybe<TCtpSetCustomerDefaultShippingAddress>;
  setFirstName?: TCtpInputMaybe<TCtpSetCustomerFirstName>;
  setLastName?: TCtpInputMaybe<TCtpSetCustomerLastName>;
  setLocale?: TCtpInputMaybe<TCtpSetCustomerLocale>;
  setMiddleName?: TCtpInputMaybe<TCtpSetCustomerMiddleName>;
  setSalutation?: TCtpInputMaybe<TCtpSetCustomerSalutation>;
  setTitle?: TCtpInputMaybe<TCtpSetCustomerTitle>;
  setVatId?: TCtpInputMaybe<TCtpSetCustomerVatId>;
};

export type TCtpMyLineItemDraft = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

/**
 * My Payments endpoint provides access to payments scoped to a specific user.
 * [documentation](https://docs.commercetools.com/api/projects/me-payments#mypayment)
 */
export type TCtpMyPayment = {
  __typename?: 'MyPayment';
  amountPlanned: TCtpMoney;
  anonymousId?: TCtpMaybe<TCtpScalars['String']['output']>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef?: TCtpMaybe<TCtpReference>;
  id: TCtpScalars['String']['output'];
  paymentMethodInfo: TCtpPaymentMethodInfo;
  transactions: Array<TCtpTransaction>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpMyPaymentDraft = {
  amountPlanned: TCtpMoneyInput;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  paymentMethodInfo?: TCtpInputMaybe<TCtpPaymentMethodInfoInput>;
  transaction?: TCtpInputMaybe<TCtpMyTransactionDraft>;
};

export type TCtpMyPaymentQueryResult = {
  __typename?: 'MyPaymentQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpMyPayment>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpMyPaymentUpdateAction = {
  addTransaction?: TCtpInputMaybe<TCtpAddMyPaymentTransaction>;
  changeAmountPlanned?: TCtpInputMaybe<TCtpChangePaymentAmountPlanned>;
  setCustomField?: TCtpInputMaybe<TCtpSetPaymentCustomField>;
  setMethodInfoInterface?: TCtpInputMaybe<TCtpSetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: TCtpInputMaybe<TCtpSetPaymentMethodInfoMethod>;
  setMethodInfoName?: TCtpInputMaybe<TCtpSetPaymentMethodInfoName>;
};

export type TCtpMyQuoteRequestDraft = {
  cartId: TCtpScalars['String']['input'];
  cartVersion: TCtpScalars['Long']['input'];
  comment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpMyQuoteRequestUpdateAction = {
  cancelQuoteRequest?: TCtpInputMaybe<TCtpCancelQuoteRequest>;
  setCustomField?: TCtpInputMaybe<TCtpSetMyQuoteRequestCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetMyQuoteRequestCustomType>;
};

export enum TCtpMyQuoteState {
  Accepted = 'Accepted',
  Declined = 'Declined',
}

export type TCtpMyQuoteUpdateAction = {
  changeMyQuoteState?: TCtpInputMaybe<TCtpChangeMyQuoteMyQuoteState>;
  requestQuoteRenegotiation?: TCtpInputMaybe<TCtpRequestQuoteRenegotiation>;
  setCustomField?: TCtpInputMaybe<TCtpSetQuoteCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetQuoteCustomType>;
};

export type TCtpMyShoppingListDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  lineItems?: TCtpInputMaybe<Array<TCtpShoppingListLineItemDraft>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  textLineItems?: TCtpInputMaybe<Array<TCtpTextLineItemDraft>>;
};

export type TCtpMyShoppingListUpdateAction = {
  addLineItem?: TCtpInputMaybe<TCtpAddShoppingListLineItem>;
  addTextLineItem?: TCtpInputMaybe<TCtpAddShoppingListTextLineItem>;
  changeLineItemQuantity?: TCtpInputMaybe<TCtpChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: TCtpInputMaybe<TCtpChangeShoppingListLineItemsOrder>;
  changeName?: TCtpInputMaybe<TCtpChangeShoppingListName>;
  changeTextLineItemName?: TCtpInputMaybe<TCtpChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: TCtpInputMaybe<TCtpChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: TCtpInputMaybe<TCtpChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: TCtpInputMaybe<TCtpRemoveShoppingListLineItem>;
  removeTextLineItem?: TCtpInputMaybe<TCtpRemoveShoppingListTextLineItem>;
  setCustomField?: TCtpInputMaybe<TCtpSetShoppingListCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetShoppingListCustomType>;
  setDeleteDaysAfterLastModification?: TCtpInputMaybe<TCtpSetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: TCtpInputMaybe<TCtpSetShoppingListDescription>;
  setLineItemCustomField?: TCtpInputMaybe<TCtpSetShoppingListLineItemCustomField>;
  setLineItemCustomType?: TCtpInputMaybe<TCtpSetShoppingListLineItemCustomType>;
  setStore?: TCtpInputMaybe<TCtpSetShoppingListStore>;
  setTextLineItemCustomField?: TCtpInputMaybe<TCtpSetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: TCtpInputMaybe<TCtpSetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: TCtpInputMaybe<TCtpSetShoppingListTextLineItemDescription>;
};

export type TCtpMyTransactionDraft = {
  amount: TCtpMoneyInput;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  interactionId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  timestamp?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  type: TCtpTransactionType;
};

export type TCtpNestedAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'NestedAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
  typeRef: TCtpReference;
};

export type TCtpNotProcessed = TCtpOrderEditResult & {
  __typename?: 'NotProcessed';
  type: TCtpScalars['String']['output'];
};

export type TCtpNotificationFormat = {
  type: TCtpScalars['String']['output'];
};

export type TCtpNumberAttribute = TCtpAttribute & {
  __typename?: 'NumberAttribute';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['BigDecimal']['output'];
};

export type TCtpNumberAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'NumberAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
};

export type TCtpNumberField = TCtpCustomField & {
  __typename?: 'NumberField';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['BigDecimal']['output'];
};

export type TCtpNumberType = TCtpFieldType & {
  __typename?: 'NumberType';
  name: TCtpScalars['String']['output'];
};

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type TCtpOrder = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Order';
    anonymousId?: TCtpMaybe<TCtpScalars['String']['output']>;
    billingAddress?: TCtpMaybe<TCtpAddress>;
    businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
    businessUnitRef?: TCtpMaybe<TCtpKeyReference>;
    cart?: TCtpMaybe<TCtpCart>;
    cartRef?: TCtpMaybe<TCtpReference>;
    completedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    country?: TCtpMaybe<TCtpScalars['Country']['output']>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    customLineItems: Array<TCtpCustomLineItem>;
    customer?: TCtpMaybe<TCtpCustomer>;
    customerEmail?: TCtpMaybe<TCtpScalars['String']['output']>;
    customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    customerGroupRef?: TCtpMaybe<TCtpReference>;
    customerId?: TCtpMaybe<TCtpScalars['String']['output']>;
    directDiscounts: Array<TCtpDirectDiscount>;
    discountCodes: Array<TCtpDiscountCodeInfo>;
    discountOnTotalPrice?: TCtpMaybe<TCtpDiscountOnTotalPrice>;
    id: TCtpScalars['String']['output'];
    inventoryMode: TCtpInventoryMode;
    itemShippingAddresses: Array<TCtpAddress>;
    /** @deprecated An internal field that should not be used in customer logic */
    lastMessageSequenceNumber: TCtpScalars['Long']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    lineItems: Array<TCtpLineItem>;
    locale?: TCtpMaybe<TCtpScalars['Locale']['output']>;
    orderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    orderState: TCtpOrderState;
    origin: TCtpCartOrigin;
    paymentInfo?: TCtpMaybe<TCtpPaymentInfo>;
    paymentState?: TCtpMaybe<TCtpPaymentState>;
    purchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    quote?: TCtpMaybe<TCtpQuote>;
    quoteRef?: TCtpMaybe<TCtpReference>;
    refusedGifts: Array<TCtpCartDiscount>;
    refusedGiftsRefs: Array<TCtpReference>;
    returnInfo: Array<TCtpReturnInfo>;
    shipmentState?: TCtpMaybe<TCtpShipmentState>;
    shipping: Array<TCtpShipping>;
    shippingAddress?: TCtpMaybe<TCtpAddress>;
    shippingCustomFields?: TCtpMaybe<TCtpCustomFieldsType>;
    shippingInfo?: TCtpMaybe<TCtpShippingInfo>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingMode: TCtpShippingMode;
    shippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
    state?: TCtpMaybe<TCtpState>;
    stateRef?: TCtpMaybe<TCtpReference>;
    store?: TCtpMaybe<TCtpStore>;
    storeRef?: TCtpMaybe<TCtpKeyReference>;
    syncInfo: Array<TCtpSyncInfo>;
    taxCalculationMode: TCtpTaxCalculationMode;
    taxMode: TCtpTaxMode;
    taxRoundingMode: TCtpRoundingMode;
    taxedPrice?: TCtpMaybe<TCtpTaxedPrice>;
    taxedShippingPrice?: TCtpMaybe<TCtpTaxedPrice>;
    totalPrice: TCtpMoney;
    version: TCtpScalars['Long']['output'];
  };

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type TCtpOrder_LineItemsArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpOrderBillingAddressSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderBillingAddressSet';
    address?: TCtpMaybe<TCtpAddress>;
    oldAddress?: TCtpMaybe<TCtpAddress>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCartCommand = {
  cart?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderState?: TCtpInputMaybe<TCtpOrderState>;
  paymentState?: TCtpInputMaybe<TCtpPaymentState>;
  purchaseOrderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shipmentState?: TCtpInputMaybe<TCtpShipmentState>;
  state?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpOrderCreated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCreated';
    order: TCtpOrder;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomFieldAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomFieldAdded';
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value: TCtpScalars['Json']['output'];
  };

export type TCtpOrderCustomFieldChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomFieldChanged';
    name: TCtpScalars['String']['output'];
    previousValue?: TCtpMaybe<TCtpScalars['Json']['output']>;
    type: TCtpScalars['String']['output'];
    value: TCtpScalars['Json']['output'];
  };

export type TCtpOrderCustomFieldRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomFieldRemoved';
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomLineItemAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemAdded';
    customLineItem: TCtpCustomLineItem;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomLineItemDiscountSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemDiscountSet';
    customLineItemId: TCtpScalars['String']['output'];
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
    taxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomLineItemQuantityChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemQuantityChanged';
    customLineItemId: TCtpScalars['String']['output'];
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    oldQuantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
    quantity: TCtpScalars['Long']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomLineItemRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomLineItemRemoved';
    customLineItem?: TCtpMaybe<TCtpCustomLineItem>;
    customLineItemId: TCtpScalars['String']['output'];
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomTypeRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomTypeRemoved';
    previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomTypeSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomTypeSet';
    customFields: TCtpCustomFieldsType;
    previousTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomerEmailSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomerEmailSet';
    email?: TCtpMaybe<TCtpScalars['String']['output']>;
    oldEmail?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomerGroupSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomerGroupSet';
    customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    customerGroupRef?: TCtpMaybe<TCtpReference>;
    oldCustomerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    oldCustomerGroupRef?: TCtpMaybe<TCtpReference>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderCustomerSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderCustomerSet';
    customer?: TCtpMaybe<TCtpCustomer>;
    customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    customerGroupRef?: TCtpMaybe<TCtpReference>;
    customerRef?: TCtpMaybe<TCtpReference>;
    oldCustomer?: TCtpMaybe<TCtpCustomer>;
    oldCustomerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    oldCustomerGroupRef?: TCtpMaybe<TCtpReference>;
    oldCustomerRef?: TCtpMaybe<TCtpReference>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderDeleted = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDeleted';
    order?: TCtpMaybe<TCtpOrder>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderDiscountCodeAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDiscountCodeAdded';
    discountCode?: TCtpMaybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderDiscountCodeRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDiscountCodeRemoved';
    discountCode?: TCtpMaybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderDiscountCodeStateSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderDiscountCodeStateSet';
    discountCode?: TCtpMaybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    oldState?: TCtpMaybe<TCtpDiscountCodeState>;
    state: TCtpDiscountCodeState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderEdit = TCtpVersioned & {
  __typename?: 'OrderEdit';
  comment?: TCtpMaybe<TCtpScalars['String']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  resource?: TCtpMaybe<TCtpOrder>;
  resourceRef: TCtpReference;
  result: TCtpOrderEditResult;
  stagedActions: Array<TCtpStagedOrderUpdateActionOutput>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpOrderEditApplied = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderEditApplied';
    edit?: TCtpMaybe<TCtpOrderEdit>;
    editRef: TCtpReference;
    result: TCtpApplied;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderEditDraft = {
  comment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  dryRun?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  resource: TCtpReferenceInput;
  stagedActions: Array<TCtpStagedOrderUpdateAction>;
};

export type TCtpOrderEditLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'OrderEditLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpOrderEditLimitsProjection = {
  __typename?: 'OrderEditLimitsProjection';
  total: TCtpOrderEditLimitWithCurrent;
};

export type TCtpOrderEditQueryResult = {
  __typename?: 'OrderEditQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpOrderEdit>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpOrderEditResult = {
  type: TCtpScalars['String']['output'];
};

export type TCtpOrderEditUpdateAction = {
  addStagedAction?: TCtpInputMaybe<TCtpAddOrderEditStagedAction>;
  setComment?: TCtpInputMaybe<TCtpSetOrderEditComment>;
  setCustomField?: TCtpInputMaybe<TCtpSetOrderEditCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetOrderEditCustomType>;
  setKey?: TCtpInputMaybe<TCtpSetOrderEditKey>;
  setStagedActions?: TCtpInputMaybe<TCtpSetOrderEditStagedActions>;
};

export type TCtpOrderExcerpt = {
  __typename?: 'OrderExcerpt';
  taxedPrice?: TCtpMaybe<TCtpTaxedPrice>;
  totalPrice: TCtpMoney;
  version?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpOrderImported = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderImported';
    order: TCtpOrder;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderLineItemAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemAdded';
    addedQuantity: TCtpScalars['Long']['output'];
    lineItem: TCtpLineItem;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderLineItemDiscountSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemDiscountSet';
    discountedPricePerQuantity: Array<TCtpDiscountedLineItemPriceForQuantity>;
    lineItemId: TCtpScalars['String']['output'];
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    taxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
    taxedPricePortions: Array<TCtpMethodTaxedPrice>;
    totalPrice: TCtpMoney;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderLineItemDistributionChannelSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemDistributionChannelSet';
    distributionChannel?: TCtpMaybe<TCtpChannel>;
    distributionChannelRef?: TCtpMaybe<TCtpReference>;
    lineItemId: TCtpScalars['String']['output'];
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderLineItemRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderLineItemRemoved';
    lineItemId: TCtpScalars['String']['output'];
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    newPrice?: TCtpMaybe<TCtpProductPrice>;
    newQuantity: TCtpScalars['Long']['output'];
    newShippingDetails?: TCtpMaybe<TCtpItemShippingDetails>;
    newState: TCtpScalars['Set']['output'];
    newTaxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
    newTotalPrice: TCtpMoney;
    removedQuantity: TCtpScalars['Long']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderMessagePayload = {
  type: TCtpScalars['String']['output'];
};

export type TCtpOrderMyCartCommand = {
  id: TCtpScalars['String']['input'];
  version: TCtpScalars['Long']['input'];
};

export type TCtpOrderMyQuoteCommand = {
  id: TCtpScalars['String']['input'];
  quoteStateToAccepted?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpOrderPaymentAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderPaymentAdded';
    paymentRef: TCtpReference;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderPaymentRemoved = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderPaymentRemoved';
    paymentRef: TCtpReference;
    removedPaymentInfo: TCtpScalars['Boolean']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderPaymentStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderPaymentStateChanged';
    oldPaymentState?: TCtpMaybe<TCtpPaymentState>;
    paymentState: TCtpPaymentState;
    type: TCtpScalars['String']['output'];
  };

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type TCtpOrderQueryInterface = {
  order?: TCtpMaybe<TCtpOrder>;
  orders: TCtpOrderQueryResult;
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type TCtpOrderQueryInterface_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Fields to access orders. Includes direct access to a single order and searching for orders. */
export type TCtpOrderQueryInterface_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpOrderQueryResult = {
  __typename?: 'OrderQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpOrder>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpOrderQuoteCommand = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderState?: TCtpInputMaybe<TCtpOrderState>;
  paymentState?: TCtpInputMaybe<TCtpPaymentState>;
  quote?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  quoteStateToAccepted?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  shipmentState?: TCtpInputMaybe<TCtpShipmentState>;
  state?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  version: TCtpScalars['Long']['input'];
};

export type TCtpOrderReturnShipmentStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderReturnShipmentStateChanged';
    returnItemId: TCtpScalars['String']['output'];
    returnShipmentState: TCtpReturnShipmentState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderSearchConfiguration = {
  __typename?: 'OrderSearchConfiguration';
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  status: TCtpOrderSearchStatus;
};

export enum TCtpOrderSearchStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
}

export type TCtpOrderShipmentStateChanged = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShipmentStateChanged';
    oldShipmentState?: TCtpMaybe<TCtpShipmentState>;
    shipmentState: TCtpShipmentState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderShippingAddressSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingAddressSet';
    address?: TCtpMaybe<TCtpAddress>;
    oldAddress?: TCtpMaybe<TCtpAddress>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderShippingInfoSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingInfoSet';
    oldShippingInfo?: TCtpMaybe<TCtpShippingInfo>;
    shippingInfo?: TCtpMaybe<TCtpShippingInfo>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderShippingRateInputSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderShippingRateInputSet';
    oldShippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
    shippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
    type: TCtpScalars['String']['output'];
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
    oldOrderState?: TCtpMaybe<TCtpOrderState>;
    orderId: TCtpScalars['String']['output'];
    orderState: TCtpOrderState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderStateTransition = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderStateTransition';
    force: TCtpScalars['Boolean']['output'];
    oldState?: TCtpMaybe<TCtpState>;
    oldStateRef?: TCtpMaybe<TCtpReference>;
    state?: TCtpMaybe<TCtpState>;
    stateRef: TCtpReference;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderStoreSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'OrderStoreSet';
    oldStore?: TCtpMaybe<TCtpStore>;
    oldStoreRef?: TCtpMaybe<TCtpKeyReference>;
    store?: TCtpMaybe<TCtpStore>;
    storeRef?: TCtpMaybe<TCtpKeyReference>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpOrderUpdateAction = {
  addDelivery?: TCtpInputMaybe<TCtpAddOrderDelivery>;
  addItemShippingAddress?: TCtpInputMaybe<TCtpAddOrderItemShippingAddress>;
  addParcelToDelivery?: TCtpInputMaybe<TCtpAddOrderParcelToDelivery>;
  addPayment?: TCtpInputMaybe<TCtpAddOrderPayment>;
  addReturnInfo?: TCtpInputMaybe<TCtpAddOrderReturnInfo>;
  changeOrderState?: TCtpInputMaybe<TCtpChangeOrderState>;
  changePaymentState?: TCtpInputMaybe<TCtpChangeOrderPaymentState>;
  changeShipmentState?: TCtpInputMaybe<TCtpChangeOrderShipmentState>;
  importCustomLineItemState?: TCtpInputMaybe<TCtpImportOrderCustomLineItemState>;
  importLineItemState?: TCtpInputMaybe<TCtpImportOrderLineItemState>;
  removeDelivery?: TCtpInputMaybe<TCtpRemoveOrderDelivery>;
  removeItemShippingAddress?: TCtpInputMaybe<TCtpRemoveOrderItemShippingAddress>;
  removeParcelFromDelivery?: TCtpInputMaybe<TCtpRemoveOrderParcelFromDelivery>;
  removePayment?: TCtpInputMaybe<TCtpRemoveOrderPayment>;
  setBillingAddress?: TCtpInputMaybe<TCtpSetOrderBillingAddress>;
  setBillingAddressCustomField?: TCtpInputMaybe<TCtpSetOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: TCtpInputMaybe<TCtpSetOrderBillingAddressCustomType>;
  setCustomField?: TCtpInputMaybe<TCtpSetOrderCustomField>;
  setCustomLineItemCustomField?: TCtpInputMaybe<TCtpSetOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: TCtpInputMaybe<TCtpSetOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: TCtpInputMaybe<TCtpSetOrderCustomLineItemShippingDetails>;
  setCustomType?: TCtpInputMaybe<TCtpSetOrderCustomType>;
  setCustomerEmail?: TCtpInputMaybe<TCtpSetOrderCustomerEmail>;
  setCustomerId?: TCtpInputMaybe<TCtpSetOrderCustomerId>;
  setDeliveryAddress?: TCtpInputMaybe<TCtpSetOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: TCtpInputMaybe<TCtpSetOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: TCtpInputMaybe<TCtpSetOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: TCtpInputMaybe<TCtpSetOrderDeliveryCustomField>;
  setDeliveryCustomType?: TCtpInputMaybe<TCtpSetOrderDeliveryCustomType>;
  setDeliveryItems?: TCtpInputMaybe<TCtpSetOrderDeliveryItems>;
  setItemShippingAddressCustomField?: TCtpInputMaybe<TCtpSetOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: TCtpInputMaybe<TCtpSetOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: TCtpInputMaybe<TCtpSetOrderLineItemCustomField>;
  setLineItemCustomType?: TCtpInputMaybe<TCtpSetOrderLineItemCustomType>;
  setLineItemShippingDetails?: TCtpInputMaybe<TCtpSetOrderLineItemShippingDetails>;
  setLocale?: TCtpInputMaybe<TCtpSetOrderLocale>;
  setOrderNumber?: TCtpInputMaybe<TCtpSetOrderNumber>;
  setParcelCustomField?: TCtpInputMaybe<TCtpSetOrderParcelCustomField>;
  setParcelCustomType?: TCtpInputMaybe<TCtpSetOrderParcelCustomType>;
  setParcelItems?: TCtpInputMaybe<TCtpSetOrderParcelItems>;
  setParcelMeasurements?: TCtpInputMaybe<TCtpSetOrderParcelMeasurements>;
  setParcelTrackingData?: TCtpInputMaybe<TCtpSetOrderParcelTrackingData>;
  setPurchaseOrderNumber?: TCtpInputMaybe<TCtpSetOrderPurchaseOrderNumber>;
  setReturnInfo?: TCtpInputMaybe<TCtpSetOrderReturnInfo>;
  setReturnItemCustomField?: TCtpInputMaybe<TCtpSetOrderReturnItemCustomField>;
  setReturnItemCustomType?: TCtpInputMaybe<TCtpSetOrderReturnItemCustomType>;
  setReturnPaymentState?: TCtpInputMaybe<TCtpSetOrderReturnPaymentState>;
  setReturnShipmentState?: TCtpInputMaybe<TCtpSetOrderReturnShipmentState>;
  setShippingAddress?: TCtpInputMaybe<TCtpSetOrderShippingAddress>;
  setShippingAddressCustomField?: TCtpInputMaybe<TCtpSetOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: TCtpInputMaybe<TCtpSetOrderShippingAddressCustomType>;
  setShippingCustomField?: TCtpInputMaybe<TCtpSetOrderShippingCustomField>;
  setShippingCustomType?: TCtpInputMaybe<TCtpSetOrderShippingCustomType>;
  setStore?: TCtpInputMaybe<TCtpSetOrderStore>;
  transitionCustomLineItemState?: TCtpInputMaybe<TCtpTransitionOrderCustomLineItemState>;
  transitionLineItemState?: TCtpInputMaybe<TCtpTransitionOrderLineItemState>;
  transitionState?: TCtpInputMaybe<TCtpTransitionOrderState>;
  updateItemShippingAddress?: TCtpInputMaybe<TCtpUpdateOrderItemShippingAddress>;
  updateSyncInfo?: TCtpInputMaybe<TCtpUpdateOrderSyncInfo>;
};

export type TCtpParcel = {
  __typename?: 'Parcel';
  createdAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  items: Array<TCtpDeliveryItem>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  measurements?: TCtpMaybe<TCtpParcelMeasurements>;
  trackingData?: TCtpMaybe<TCtpTrackingData>;
};

export type TCtpParcelAddedToDelivery = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelAddedToDelivery';
    delivery: TCtpDelivery;
    parcel: TCtpParcel;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpParcelData = {
  __typename?: 'ParcelData';
  custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
  items: Array<TCtpDeliveryItem>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  measurements?: TCtpMaybe<TCtpParcelMeasurements>;
  trackingData?: TCtpMaybe<TCtpTrackingData>;
};

export type TCtpParcelDataDraftType = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  items?: TCtpInputMaybe<Array<TCtpDeliveryItemDraftType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  measurements?: TCtpInputMaybe<TCtpParcelMeasurementsDraftType>;
  trackingData?: TCtpInputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpParcelDraft = {
  createdAt: TCtpScalars['DateTime']['input'];
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  id: TCtpScalars['String']['input'];
  items?: TCtpInputMaybe<Array<TCtpDeliveryItemDraftType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  measurements?: TCtpInputMaybe<TCtpParcelMeasurementsDraftType>;
  trackingData?: TCtpInputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpParcelItemsUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelItemsUpdated';
    deliveryId: TCtpScalars['String']['output'];
    items: Array<TCtpDeliveryItem>;
    oldItems: Array<TCtpDeliveryItem>;
    parcelId: TCtpScalars['String']['output'];
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpParcelMeasurements = {
  __typename?: 'ParcelMeasurements';
  heightInMillimeter?: TCtpMaybe<TCtpScalars['Int']['output']>;
  lengthInMillimeter?: TCtpMaybe<TCtpScalars['Int']['output']>;
  weightInGram?: TCtpMaybe<TCtpScalars['Int']['output']>;
  widthInMillimeter?: TCtpMaybe<TCtpScalars['Int']['output']>;
};

export type TCtpParcelMeasurementsDraftType = {
  heightInMillimeter?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  lengthInMillimeter?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  weightInGram?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  widthInMillimeter?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpParcelMeasurementsUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelMeasurementsUpdated';
    deliveryId: TCtpScalars['String']['output'];
    measurements?: TCtpMaybe<TCtpParcelMeasurements>;
    parcelId: TCtpScalars['String']['output'];
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpParcelRemovedFromDelivery = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelRemovedFromDelivery';
    deliveryId: TCtpScalars['String']['output'];
    parcel: TCtpParcel;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpParcelTrackingDataUpdated = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ParcelTrackingDataUpdated';
    deliveryId: TCtpScalars['String']['output'];
    parcelId: TCtpScalars['String']['output'];
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    trackingData?: TCtpMaybe<TCtpTrackingData>;
    type: TCtpScalars['String']['output'];
  };

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type TCtpPayment = TCtpVersioned & {
  __typename?: 'Payment';
  amountPlanned: TCtpMoney;
  anonymousId?: TCtpMaybe<TCtpScalars['String']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef?: TCtpMaybe<TCtpReference>;
  id: TCtpScalars['String']['output'];
  interfaceId?: TCtpMaybe<TCtpScalars['String']['output']>;
  interfaceInteractionsRaw: TCtpInterfaceInteractionsRawResult;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  paymentMethodInfo: TCtpPaymentMethodInfo;
  paymentStatus: TCtpPaymentStatus;
  transactions: Array<TCtpTransaction>;
  version: TCtpScalars['Long']['output'];
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type TCtpPayment_InterfaceInteractionsRawArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpPaymentCreated = TCtpMessagePayload & {
  __typename?: 'PaymentCreated';
  payment: TCtpPayment;
  type: TCtpScalars['String']['output'];
};

export type TCtpPaymentDraft = {
  amountPlanned: TCtpMoneyInput;
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customer?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  interfaceId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  interfaceInteractions?: TCtpInputMaybe<Array<TCtpCustomFieldsDraft>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  paymentMethodInfo?: TCtpInputMaybe<TCtpPaymentMethodInfoInput>;
  paymentStatus?: TCtpInputMaybe<TCtpPaymentStatusInput>;
  transactions?: TCtpInputMaybe<Array<TCtpTransactionDraft>>;
};

export type TCtpPaymentInfo = {
  __typename?: 'PaymentInfo';
  paymentRefs: Array<TCtpReference>;
  payments: Array<TCtpPayment>;
};

export type TCtpPaymentInteractionAdded = TCtpMessagePayload & {
  __typename?: 'PaymentInteractionAdded';
  interaction: TCtpCustomFieldsType;
  type: TCtpScalars['String']['output'];
};

export type TCtpPaymentMethodInfo = {
  __typename?: 'PaymentMethodInfo';
  method?: TCtpMaybe<TCtpScalars['String']['output']>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  paymentInterface?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpPaymentMethodInfo_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpPaymentMethodInfoInput = {
  method?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  paymentInterface?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpPaymentQueryResult = {
  __typename?: 'PaymentQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpPayment>;
  total: TCtpScalars['Long']['output'];
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
  interfaceCode?: TCtpMaybe<TCtpScalars['String']['output']>;
  interfaceText?: TCtpMaybe<TCtpScalars['String']['output']>;
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
};

export type TCtpPaymentStatusInput = {
  interfaceCode?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  interfaceText?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpPaymentStatusInterfaceCodeSet = TCtpMessagePayload & {
  __typename?: 'PaymentStatusInterfaceCodeSet';
  interfaceCode?: TCtpMaybe<TCtpScalars['String']['output']>;
  paymentId: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpPaymentStatusStateTransition = TCtpMessagePayload & {
  __typename?: 'PaymentStatusStateTransition';
  force: TCtpScalars['Boolean']['output'];
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpPaymentTransactionAdded = TCtpMessagePayload & {
  __typename?: 'PaymentTransactionAdded';
  transaction: TCtpTransaction;
  type: TCtpScalars['String']['output'];
};

export type TCtpPaymentTransactionStateChanged = TCtpMessagePayload & {
  __typename?: 'PaymentTransactionStateChanged';
  state: TCtpTransactionState;
  transactionId: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpPaymentUpdateAction = {
  addInterfaceInteraction?: TCtpInputMaybe<TCtpAddPaymentInterfaceInteraction>;
  addTransaction?: TCtpInputMaybe<TCtpAddPaymentTransaction>;
  changeAmountPlanned?: TCtpInputMaybe<TCtpChangePaymentAmountPlanned>;
  changeTransactionInteractionId?: TCtpInputMaybe<TCtpChangePaymentTransactionInteractionId>;
  changeTransactionState?: TCtpInputMaybe<TCtpChangePaymentTransactionState>;
  changeTransactionTimestamp?: TCtpInputMaybe<TCtpChangePaymentTransactionTimestamp>;
  setAmountPaid?: TCtpInputMaybe<TCtpSetPaymentAmountPaid>;
  setAmountRefunded?: TCtpInputMaybe<TCtpSetPaymentAmountRefunded>;
  setAnonymousId?: TCtpInputMaybe<TCtpSetPaymentAnonymousId>;
  setAuthorization?: TCtpInputMaybe<TCtpSetPaymentAuthorization>;
  setCustomField?: TCtpInputMaybe<TCtpSetPaymentCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetPaymentCustomType>;
  setCustomer?: TCtpInputMaybe<TCtpSetPaymentCustomer>;
  setExternalId?: TCtpInputMaybe<TCtpSetPaymentExternalId>;
  setInterfaceId?: TCtpInputMaybe<TCtpSetPaymentInterfaceId>;
  setKey?: TCtpInputMaybe<TCtpSetPaymentKey>;
  setMethodInfoInterface?: TCtpInputMaybe<TCtpSetPaymentMethodInfoInterface>;
  setMethodInfoMethod?: TCtpInputMaybe<TCtpSetPaymentMethodInfoMethod>;
  setMethodInfoName?: TCtpInputMaybe<TCtpSetPaymentMethodInfoName>;
  setStatusInterfaceCode?: TCtpInputMaybe<TCtpSetPaymentStatusInterfaceCode>;
  setStatusInterfaceText?: TCtpInputMaybe<TCtpSetPaymentStatusInterfaceText>;
  setTransactionCustomField?: TCtpInputMaybe<TCtpSetPaymentTransactionCustomField>;
  setTransactionCustomType?: TCtpInputMaybe<TCtpSetPaymentTransactionCustomType>;
  transitionState?: TCtpInputMaybe<TCtpTransitionPaymentState>;
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
  CreateOrdersFromOthersCarts = 'CreateOrdersFromOthersCarts',
  CreateOrdersFromOthersQuotes = 'CreateOrdersFromOthersQuotes',
  CreateOthersCarts = 'CreateOthersCarts',
  CreateQuoteRequestsFromOthersCarts = 'CreateQuoteRequestsFromOthersCarts',
  DeclineMyQuotes = 'DeclineMyQuotes',
  DeclineOthersQuotes = 'DeclineOthersQuotes',
  DeleteMyCarts = 'DeleteMyCarts',
  DeleteOthersCarts = 'DeleteOthersCarts',
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
  UpdateOthersCarts = 'UpdateOthersCarts',
  UpdateOthersOrders = 'UpdateOthersOrders',
  UpdateOthersQuoteRequests = 'UpdateOthersQuoteRequests',
  UpdateParentUnit = 'UpdateParentUnit',
  ViewMyCarts = 'ViewMyCarts',
  ViewMyOrders = 'ViewMyOrders',
  ViewMyQuoteRequests = 'ViewMyQuoteRequests',
  ViewMyQuotes = 'ViewMyQuotes',
  ViewOthersCarts = 'ViewOthersCarts',
  ViewOthersOrders = 'ViewOthersOrders',
  ViewOthersQuoteRequests = 'ViewOthersQuoteRequests',
  ViewOthersQuotes = 'ViewOthersQuotes',
}

export type TCtpPlainEnumValue = {
  __typename?: 'PlainEnumValue';
  key: TCtpScalars['String']['output'];
  label: TCtpScalars['String']['output'];
};

export type TCtpPlainEnumValueDraft = {
  key: TCtpScalars['String']['input'];
  label: TCtpScalars['String']['input'];
};

export type TCtpPlainEnumValueResult = {
  __typename?: 'PlainEnumValueResult';
  limit?: TCtpMaybe<TCtpScalars['Int']['output']>;
  offset?: TCtpMaybe<TCtpScalars['Int']['output']>;
  results: Array<TCtpPlainEnumValue>;
  total: TCtpScalars['Int']['output'];
};

export type TCtpPlatformFormat = TCtpNotificationFormat & {
  __typename?: 'PlatformFormat';
  type: TCtpScalars['String']['output'];
};

export type TCtpPlatformFormatInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpPoint = TCtpGeometry & {
  __typename?: 'Point';
  coordinates: Array<TCtpScalars['Float']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpPreviewFailure = TCtpOrderEditResult & {
  __typename?: 'PreviewFailure';
  errors: Array<TCtpScalars['Json']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpPreviewSuccess = TCtpOrderEditResult & {
  __typename?: 'PreviewSuccess';
  messagePayloads: Array<TCtpOrderMessagePayload>;
  preview: TCtpOrder;
  type: TCtpScalars['String']['output'];
};

export type TCtpPriceFunction = {
  __typename?: 'PriceFunction';
  currencyCode: TCtpScalars['Currency']['output'];
  function: TCtpScalars['String']['output'];
};

export type TCtpPriceFunctionDraft = {
  currencyCode: TCtpScalars['Currency']['input'];
  function: TCtpScalars['String']['input'];
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

export type TCtpPriceSelectorInput = {
  channel?: TCtpInputMaybe<TCtpReferenceInput>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  currency: TCtpScalars['Currency']['input'];
  customerGroup?: TCtpInputMaybe<TCtpReferenceInput>;
  date?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpProduct = TCtpReferenceExpandable &
  TCtpReviewTarget &
  TCtpVersioned & {
    __typename?: 'Product';
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    masterData: TCtpProductCatalogData;
    priceMode?: TCtpMaybe<TCtpPriceMode>;
    productSelectionRefs: TCtpSelectionOfProductQueryResult;
    productType?: TCtpMaybe<TCtpProductTypeDefinition>;
    productTypeRef: TCtpReference;
    reviewRatingStatistics?: TCtpMaybe<TCtpReviewRatingStatistics>;
    skus: Array<TCtpScalars['String']['output']>;
    state?: TCtpMaybe<TCtpState>;
    stateRef?: TCtpMaybe<TCtpReference>;
    taxCategory?: TCtpMaybe<TCtpTaxCategory>;
    taxCategoryRef?: TCtpMaybe<TCtpReference>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpProduct_ProductSelectionRefsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpProductAddedToCategory = TCtpMessagePayload & {
  __typename?: 'ProductAddedToCategory';
  category: TCtpReferenceId;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpProductAssignment = {
  __typename?: 'ProductAssignment';
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  productSelection?: TCtpMaybe<TCtpProductSelection>;
  productSelectionRef: TCtpReference;
  variantExclusion?: TCtpMaybe<TCtpProductVariantExclusion>;
  variantSelection?: TCtpMaybe<TCtpProductVariantSelection>;
};

export type TCtpProductAssignmentQueryResult = {
  __typename?: 'ProductAssignmentQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductAssignment>;
  total: TCtpScalars['Long']['output'];
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
  name: TCtpScalars['String']['input'];
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
  value: TCtpScalars['String']['input'];
};

export type TCtpProductCatalogData = {
  __typename?: 'ProductCatalogData';
  current?: TCtpMaybe<TCtpProductData>;
  hasStagedChanges: TCtpScalars['Boolean']['output'];
  published: TCtpScalars['Boolean']['output'];
  staged?: TCtpMaybe<TCtpProductData>;
};

export type TCtpProductCreated = TCtpMessagePayload & {
  __typename?: 'ProductCreated';
  productProjection: TCtpProductProjectionMessagePayload;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductData = {
  __typename?: 'ProductData';
  allVariants: Array<TCtpProductVariant>;
  categories: Array<TCtpCategory>;
  categoriesRef: Array<TCtpReference>;
  categoryOrderHint?: TCtpMaybe<TCtpScalars['String']['output']>;
  categoryOrderHints: Array<TCtpCategoryOrderHint>;
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  masterVariant: TCtpProductVariant;
  metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  searchKeyword?: TCtpMaybe<Array<TCtpSearchKeyword>>;
  searchKeywords: Array<TCtpSearchKeywords>;
  skus: Array<TCtpScalars['String']['output']>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  variant?: TCtpMaybe<TCtpProductVariant>;
  variants: Array<TCtpProductVariant>;
};

export type TCtpProductData_AllVariantsArgs = {
  hasImages?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  isOnStock?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  skus?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  stockChannelIds?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductData_CategoryOrderHintArgs = {
  categoryId: TCtpScalars['String']['input'];
};

export type TCtpProductData_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductData_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductData_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductData_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductData_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductData_SearchKeywordArgs = {
  locale: TCtpScalars['Locale']['input'];
};

export type TCtpProductData_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductData_VariantArgs = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpProductData_VariantsArgs = {
  hasImages?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  isOnStock?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  skus?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  stockChannelIds?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductDeleted = TCtpMessagePayload & {
  __typename?: 'ProductDeleted';
  currentProjection?: TCtpMaybe<TCtpProductProjectionMessagePayload>;
  removedImageUrls: TCtpScalars['Set']['output'];
  type: TCtpScalars['String']['output'];
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
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    id: TCtpScalars['String']['output'];
    isActive: TCtpScalars['Boolean']['output'];
    isValid: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    predicate: TCtpScalars['String']['output'];
    referenceRefs: Array<TCtpReference>;
    sortOrder: TCtpScalars['String']['output'];
    validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    value: TCtpProductDiscountValue;
    version: TCtpScalars['Long']['output'];
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
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
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
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductDiscountDraft = {
  /** Description of the ProductDiscount. */
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  /** Set to `true` to activate the ProductDiscount, set to `false` to deactivate it (even though the `predicate` matches). */
  isActive?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  /** User-defined unique identifier for the ProductDiscount. */
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  /** Name of the ProductDiscount. */
  name: Array<TCtpLocalizedStringItemInputType>;
  /** A valid ProductDiscount Predicate. */
  predicate: TCtpScalars['String']['input'];
  /**
   * Decimal value between 0 and 1 (passed as String literal) that defines the order of ProductDiscounts to apply in case more than one is applicable and active. A ProductDiscount with a higher `sortOrder` is prioritized.
   * The value must be **unique** among all ProductDiscounts in the Project.
   */
  sortOrder: TCtpScalars['String']['input'];
  /** Date and time (UTC) from which the Discount is effective. */
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  /** Date and time (UTC) until which the Discount is effective. */
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  /** Type of Discount and its corresponding value. */
  value: TCtpProductDiscountValueInput;
};

export type TCtpProductDiscountLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ProductDiscountLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpProductDiscountLimitsProjection = {
  __typename?: 'ProductDiscountLimitsProjection';
  totalActive: TCtpProductDiscountLimitWithCurrent;
};

export type TCtpProductDiscountQueryResult = {
  __typename?: 'ProductDiscountQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductDiscount>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpProductDiscountUpdateAction = {
  changeIsActive?: TCtpInputMaybe<TCtpChangeProductDiscountIsActive>;
  changeName?: TCtpInputMaybe<TCtpChangeProductDiscountName>;
  changePredicate?: TCtpInputMaybe<TCtpChangeProductDiscountPredicate>;
  changeSortOrder?: TCtpInputMaybe<TCtpChangeProductDiscountSortOrder>;
  changeValue?: TCtpInputMaybe<TCtpChangeProductDiscountValue>;
  setDescription?: TCtpInputMaybe<TCtpSetProductDiscountDescription>;
  setKey?: TCtpInputMaybe<TCtpSetProductDiscountKey>;
  setValidFrom?: TCtpInputMaybe<TCtpSetProductDiscountValidFrom>;
  setValidFromAndUntil?: TCtpInputMaybe<TCtpSetProductDiscountValidFromAndUntil>;
  setValidUntil?: TCtpInputMaybe<TCtpSetProductDiscountValidUntil>;
};

export type TCtpProductDiscountValue = {
  type: TCtpScalars['String']['output'];
};

export type TCtpProductDiscountValueInput = {
  absolute?: TCtpInputMaybe<TCtpAbsoluteDiscountValueInput>;
  external?: TCtpInputMaybe<TCtpExternalDiscountValueInput>;
  relative?: TCtpInputMaybe<TCtpRelativeDiscountValueInput>;
};

export type TCtpProductDraft = {
  categories?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
  categoryOrderHints?: TCtpInputMaybe<Array<TCtpCategoryOrderHintInput>>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  masterVariant?: TCtpInputMaybe<TCtpProductVariantInput>;
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  priceMode?: TCtpInputMaybe<TCtpPriceMode>;
  productType: TCtpResourceIdentifierInput;
  publish?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  searchKeywords?: TCtpInputMaybe<Array<TCtpSearchKeywordInput>>;
  slug: Array<TCtpLocalizedStringItemInputType>;
  state?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  variants?: TCtpInputMaybe<Array<TCtpProductVariantInput>>;
};

export type TCtpProductImageAdded = TCtpMessagePayload & {
  __typename?: 'ProductImageAdded';
  image: TCtpImage;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductLimitsProjection = {
  __typename?: 'ProductLimitsProjection';
  pricesPerVariant: TCtpLimit;
  productTailoring: TCtpLimit;
  variants: TCtpLimit;
};

export type TCtpProductOfSelection = {
  __typename?: 'ProductOfSelection';
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  variantExclusion?: TCtpMaybe<TCtpProductVariantExclusion>;
  variantSelection?: TCtpMaybe<TCtpProductVariantSelection>;
};

export type TCtpProductOfSelectionQueryResult = {
  __typename?: 'ProductOfSelectionQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductOfSelection>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpProductPrice = {
  __typename?: 'ProductPrice';
  channel?: TCtpMaybe<TCtpChannel>;
  channelRef?: TCtpMaybe<TCtpReference>;
  country?: TCtpMaybe<TCtpScalars['Country']['output']>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  tiers?: TCtpMaybe<Array<TCtpProductPriceTier>>;
  validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  value: TCtpBaseMoney;
};

export type TCtpProductPriceAdded = TCtpMessagePayload & {
  __typename?: 'ProductPriceAdded';
  price: TCtpProductPrice;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceChanged = TCtpMessagePayload & {
  __typename?: 'ProductPriceChanged';
  newPrice: TCtpProductPrice;
  oldPrice: TCtpProductPrice;
  oldStagedPrice?: TCtpMaybe<TCtpProductPrice>;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldAdded = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldAdded';
  name: TCtpScalars['String']['output'];
  priceId: TCtpScalars['String']['output'];
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldChanged = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldChanged';
  name: TCtpScalars['String']['output'];
  priceId: TCtpScalars['String']['output'];
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpScalars['Json']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldRemoved = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldRemoved';
  name: TCtpScalars['String']['output'];
  priceId: TCtpScalars['String']['output'];
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldsRemoved = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldsRemoved';
  priceId: TCtpScalars['String']['output'];
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceCustomFieldsSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceCustomFieldsSet';
  customField: TCtpCustomFieldsType;
  oldTypeId?: TCtpMaybe<TCtpScalars['String']['output']>;
  priceId: TCtpScalars['String']['output'];
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceDataInput = {
  channel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customerGroup?: TCtpInputMaybe<TCtpReferenceInput>;
  discounted?: TCtpInputMaybe<TCtpDiscountedProductPriceValueInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  tiers?: TCtpInputMaybe<Array<TCtpProductPriceTierInput>>;
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  value: TCtpBaseMoneyInput;
};

export type TCtpProductPriceDiscountUpdateMessagePayload = {
  __typename?: 'ProductPriceDiscountUpdateMessagePayload';
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  priceId: TCtpScalars['String']['output'];
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
  staged: TCtpScalars['Boolean']['output'];
  variantId: TCtpScalars['Int']['output'];
  variantKey?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpProductPriceDiscountsSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceDiscountsSet';
  type: TCtpScalars['String']['output'];
  updatedPrices: Array<TCtpProductPriceDiscountUpdateMessagePayload>;
};

export type TCtpProductPriceExternalDiscountSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceExternalDiscountSet';
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  priceId: TCtpScalars['String']['output'];
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
  variantKey?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpProductPriceKeySet = TCtpMessagePayload & {
  __typename?: 'ProductPriceKeySet';
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  priceId?: TCtpMaybe<TCtpScalars['String']['output']>;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceModeSet = TCtpMessagePayload & {
  __typename?: 'ProductPriceModeSet';
  to?: TCtpMaybe<TCtpPriceMode>;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductPriceRemoved = TCtpMessagePayload & {
  __typename?: 'ProductPriceRemoved';
  price: TCtpProductPrice;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductPriceSearch = {
  __typename?: 'ProductPriceSearch';
  channel?: TCtpMaybe<TCtpChannel>;
  channelRef?: TCtpMaybe<TCtpReference>;
  country?: TCtpMaybe<TCtpScalars['Country']['output']>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  discounted?: TCtpMaybe<TCtpDiscountedProductSearchPriceValue>;
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  tiers?: TCtpMaybe<Array<TCtpProductSearchPriceTier>>;
  validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  value: TCtpBaseMoney;
};

export type TCtpProductPriceTier = {
  __typename?: 'ProductPriceTier';
  minimumQuantity: TCtpScalars['Int']['output'];
  value: TCtpBaseMoney;
};

export type TCtpProductPriceTierInput = {
  minimumQuantity: TCtpScalars['Int']['input'];
  value: TCtpBaseMoneyInput;
};

export type TCtpProductPricesSet = TCtpMessagePayload & {
  __typename?: 'ProductPricesSet';
  prices: Array<TCtpProductPrice>;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductProjection = {
  __typename?: 'ProductProjection';
  categories: Array<TCtpCategory>;
  categoriesRef: Array<TCtpReference>;
  categoryOrderHints: Array<TCtpCategoryOrderHintProductSearch>;
  createdAt: TCtpScalars['DateTime']['output'];
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  hasStagedChanges: TCtpScalars['Boolean']['output'];
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  masterVariant: TCtpProductSearchVariant;
  metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productType?: TCtpMaybe<TCtpProductTypeDefinition>;
  productTypeRef: TCtpReference;
  published: TCtpScalars['Boolean']['output'];
  reviewRatingStatistics?: TCtpMaybe<TCtpReviewRatingStatistics>;
  searchKeywords: Array<TCtpSearchKeywordsProductSearch>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
  taxCategory?: TCtpMaybe<TCtpTaxCategory>;
  taxCategoryRef?: TCtpMaybe<TCtpReference>;
  variants: Array<TCtpProductSearchVariant>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpProductProjection_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjection_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjection_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjection_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjection_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjection_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload = {
  __typename?: 'ProductProjectionMessagePayload';
  categories: Array<TCtpCategory>;
  categoriesRef: Array<TCtpReference>;
  categoryOrderHints: Array<TCtpCategoryOrderHint>;
  createdAt: TCtpScalars['DateTime']['output'];
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  hasStagedChanges: TCtpScalars['Boolean']['output'];
  id: TCtpScalars['String']['output'];
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  masterVariant: TCtpProductVariant;
  metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productType?: TCtpMaybe<TCtpProductTypeDefinition>;
  productTypeRef: TCtpReference;
  published: TCtpScalars['Boolean']['output'];
  reviewRatingStatistics?: TCtpMaybe<TCtpReviewRatingStatistics>;
  searchKeywords: Array<TCtpSearchKeywords>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
  taxCategory?: TCtpMaybe<TCtpTaxCategory>;
  taxCategoryRef?: TCtpMaybe<TCtpReference>;
  variants: Array<TCtpProductVariant>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpProductProjectionMessagePayload_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionMessagePayload_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductProjectionSearchResult = {
  __typename?: 'ProductProjectionSearchResult';
  count: TCtpScalars['Int']['output'];
  facets: Array<TCtpFacetResultValue>;
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductProjection>;
  total: TCtpScalars['Int']['output'];
};

export type TCtpProductPublished = TCtpMessagePayload & {
  __typename?: 'ProductPublished';
  productProjection: TCtpProductProjectionMessagePayload;
  removedImageUrls: Array<TCtpScalars['String']['output']>;
  scope: TCtpPublishScope;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductQueryResult = {
  __typename?: 'ProductQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProduct>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpProductReferenceIdentifier = {
  __typename?: 'ProductReferenceIdentifier';
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  typeId: TCtpScalars['String']['output'];
};

export type TCtpProductRemovedFromCategory = TCtpMessagePayload & {
  __typename?: 'ProductRemovedFromCategory';
  category: TCtpReferenceId;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpProductRevertedStagedChanges = TCtpMessagePayload & {
  __typename?: 'ProductRevertedStagedChanges';
  removedImageUrls: TCtpScalars['Set']['output'];
  type: TCtpScalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export enum TCtpProductSearchIndexingMode {
  ProductProjectionsSearch = 'ProductProjectionsSearch',
  ProductsSearch = 'ProductsSearch',
}

export type TCtpProductSearchPriceTier = {
  __typename?: 'ProductSearchPriceTier';
  minimumQuantity: TCtpScalars['Int']['output'];
  value: TCtpBaseMoney;
};

export type TCtpProductSearchVariant = {
  __typename?: 'ProductSearchVariant';
  assets: Array<TCtpAsset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<TCtpRawProductSearchAttribute>;
  availability?: TCtpMaybe<TCtpProductSearchVariantAvailabilityWithChannels>;
  id: TCtpScalars['Int']['output'];
  images: Array<TCtpImageProductSearch>;
  isMatchingVariant?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: TCtpMaybe<TCtpProductPriceSearch>;
  prices?: TCtpMaybe<Array<TCtpProductPriceSearch>>;
  scopedPrice?: TCtpMaybe<TCtpScopedPrice>;
  scopedPriceDiscounted?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpProductSearchVariant_AttributesRawArgs = {
  excludeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductSearchVariant_PriceArgs = {
  channelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  currency: TCtpScalars['Currency']['input'];
  customerGroupId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  date?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

/** Product variant availabilities */
export type TCtpProductSearchVariantAvailabilitiesResult = {
  __typename?: 'ProductSearchVariantAvailabilitiesResult';
  limit?: TCtpMaybe<TCtpScalars['Int']['output']>;
  offset?: TCtpMaybe<TCtpScalars['Int']['output']>;
  results: Array<TCtpProductSearchVariantAvailabilityWithChannel>;
  total: TCtpScalars['Int']['output'];
};

/** Product variant availability */
export type TCtpProductSearchVariantAvailability = {
  __typename?: 'ProductSearchVariantAvailability';
  availableQuantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  isOnStock: TCtpScalars['Boolean']['output'];
  restockableInDays?: TCtpMaybe<TCtpScalars['Int']['output']>;
  version?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpProductSearchVariantAvailabilityWithChannel = {
  __typename?: 'ProductSearchVariantAvailabilityWithChannel';
  availability: TCtpProductSearchVariantAvailability;
  channel?: TCtpMaybe<TCtpChannel>;
  channelRef: TCtpReference;
};

export type TCtpProductSearchVariantAvailabilityWithChannels = {
  __typename?: 'ProductSearchVariantAvailabilityWithChannels';
  channels: TCtpProductSearchVariantAvailabilitiesResult;
  noChannel?: TCtpMaybe<TCtpProductSearchVariantAvailability>;
};

export type TCtpProductSearchVariantAvailabilityWithChannels_ChannelsArgs = {
  excludeChannelIds?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeChannelIds?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpProductSelection = TCtpVersioned & {
  __typename?: 'ProductSelection';
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  mode: TCtpProductSelectionMode;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productCount: TCtpScalars['Int']['output'];
  productRefs: TCtpProductOfSelectionQueryResult;
  version: TCtpScalars['Long']['output'];
};

export type TCtpProductSelection_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductSelection_ProductRefsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpProductSelectionCreated = TCtpMessagePayload & {
  __typename?: 'ProductSelectionCreated';
  productSelection: TCtpProductSelection;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductSelectionDeleted = TCtpMessagePayload & {
  __typename?: 'ProductSelectionDeleted';
  type: TCtpScalars['String']['output'];
};

export enum TCtpProductSelectionMode {
  /** Mode of Product Selection used to include a specific list of individual Products */
  Individual = 'Individual',
  /** Mode of Product Selection used to exclude a specific list of individual Products */
  IndividualExclusion = 'IndividualExclusion',
}

export type TCtpProductSelectionProductAdded = TCtpMessagePayload & {
  __typename?: 'ProductSelectionProductAdded';
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  type: TCtpScalars['String']['output'];
  variantSelection?: TCtpMaybe<TCtpProductVariantSelection>;
};

export type TCtpProductSelectionProductExcluded = TCtpMessagePayload & {
  __typename?: 'ProductSelectionProductExcluded';
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  type: TCtpScalars['String']['output'];
  variantExclusion?: TCtpMaybe<TCtpProductVariantExclusion>;
};

export type TCtpProductSelectionProductRemoved = TCtpMessagePayload & {
  __typename?: 'ProductSelectionProductRemoved';
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

/** Fields to access product selection assignments. */
export type TCtpProductSelectionQueryInterface = {
  productSelectionAssignments: TCtpProductAssignmentQueryResult;
};

/** Fields to access product selection assignments. */
export type TCtpProductSelectionQueryInterface_ProductSelectionAssignmentsArgs =
  {
    limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
    offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
    sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
    where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  };

export type TCtpProductSelectionQueryResult = {
  __typename?: 'ProductSelectionQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductSelection>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpProductSelectionSetting = {
  __typename?: 'ProductSelectionSetting';
  active: TCtpScalars['Boolean']['output'];
  productSelection?: TCtpMaybe<TCtpProductSelection>;
  productSelectionRef: TCtpReference;
};

export type TCtpProductSelectionSettingDraft = {
  active: TCtpScalars['Boolean']['input'];
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpProductSelectionSettingInActionInput = {
  active?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  productSelection: TCtpResourceIdentifierInput;
};

export type TCtpProductSelectionUpdateAction = {
  addProduct?: TCtpInputMaybe<TCtpAddProductSelectionProduct>;
  changeName?: TCtpInputMaybe<TCtpChangeProductSelectionName>;
  excludeProduct?: TCtpInputMaybe<TCtpExcludeProductSelectionProduct>;
  removeProduct?: TCtpInputMaybe<TCtpRemoveProductSelectionProduct>;
  setCustomField?: TCtpInputMaybe<TCtpSetProductSelectionCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetProductSelectionCustomType>;
  setKey?: TCtpInputMaybe<TCtpSetProductSelectionKey>;
  setVariantExclusion?: TCtpInputMaybe<TCtpSetProductSelectionVariantExclusion>;
  setVariantSelection?: TCtpInputMaybe<TCtpSetProductSelectionVariantSelection>;
};

export type TCtpProductSelectionVariantExclusionChanged = TCtpMessagePayload & {
  __typename?: 'ProductSelectionVariantExclusionChanged';
  newVariantExclusion?: TCtpMaybe<TCtpProductVariantExclusion>;
  oldVariantExclusion?: TCtpMaybe<TCtpProductVariantExclusion>;
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductSelectionVariantSelectionChanged = TCtpMessagePayload & {
  __typename?: 'ProductSelectionVariantSelectionChanged';
  newVariantSelection?: TCtpMaybe<TCtpProductVariantSelection>;
  oldVariantSelection?: TCtpMaybe<TCtpProductVariantSelection>;
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductSlugChanged = TCtpMessagePayload & {
  __typename?: 'ProductSlugChanged';
  oldSlug?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldSlugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales: Array<TCtpLocalizedString>;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductSlugChanged_OldSlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductSlugChanged_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductStateTransition = TCtpMessagePayload & {
  __typename?: 'ProductStateTransition';
  force: TCtpScalars['Boolean']['output'];
  state?: TCtpMaybe<TCtpState>;
  stateRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoring = TCtpVersioned & {
  __typename?: 'ProductTailoring';
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  current?: TCtpMaybe<TCtpProductTailoringData>;
  hasStagedChanges: TCtpScalars['Boolean']['output'];
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  product?: TCtpMaybe<TCtpProduct>;
  productRef: TCtpReference;
  published: TCtpScalars['Boolean']['output'];
  staged?: TCtpMaybe<TCtpProductTailoringData>;
  store?: TCtpMaybe<TCtpStore>;
  storeRef: TCtpKeyReference;
  version: TCtpScalars['Long']['output'];
};

export type TCtpProductTailoringCreated = TCtpHasProductTailoringData &
  TCtpMessagePayload & {
    __typename?: 'ProductTailoringCreated';
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
    metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    productRef: TCtpReference;
    publish: TCtpScalars['Boolean']['output'];
    slug?: TCtpMaybe<TCtpScalars['String']['output']>;
    slugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    storeRef: TCtpKeyReference;
    type: TCtpScalars['String']['output'];
    variants: Array<TCtpProductVariantTailoring>;
  };

export type TCtpProductTailoringCreated_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringCreated_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringData = TCtpHasProductTailoringData & {
  __typename?: 'ProductTailoringData';
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaKeywords?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaKeywordsAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  metaTitle?: TCtpMaybe<TCtpScalars['String']['output']>;
  metaTitleAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  variants: Array<TCtpProductVariantTailoring>;
};

export type TCtpProductTailoringData_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringData_MetaDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringData_MetaKeywordsArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringData_MetaTitleArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringData_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringData_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringDeleted = TCtpMessagePayload & {
  __typename?: 'ProductTailoringDeleted';
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoringDescriptionSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringDescriptionSet';
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  oldDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoringDescriptionSet_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringDescriptionSet_OldDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringDraft = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  product: TCtpResourceIdentifierInput;
  publish?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  slug?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  variants?: TCtpInputMaybe<Array<TCtpProductVariantTailoringInput>>;
};

export type TCtpProductTailoringImageAdded = TCtpMessagePayload & {
  __typename?: 'ProductTailoringImageAdded';
  image: TCtpImage;
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductTailoringImagesSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringImagesSet';
  images: Array<TCtpImage>;
  oldImages: Array<TCtpImage>;
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductTailoringNameSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringNameSet';
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  oldName?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldNameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoringNameSet_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringNameSet_OldNameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringPublished = TCtpMessagePayload & {
  __typename?: 'ProductTailoringPublished';
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoringQueryResult = {
  __typename?: 'ProductTailoringQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductTailoring>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpProductTailoringSlugSet = TCtpMessagePayload & {
  __typename?: 'ProductTailoringSlugSet';
  oldSlug?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldSlugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoringSlugSet_OldSlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringSlugSet_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpProductTailoringUnpublished = TCtpMessagePayload & {
  __typename?: 'ProductTailoringUnpublished';
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductTailoringUpdateAction = {
  addAsset?: TCtpInputMaybe<TCtpAddProductTailoringAsset>;
  addExternalImage?: TCtpInputMaybe<TCtpAddProductTailoringExternalImage>;
  addVariant?: TCtpInputMaybe<TCtpAddProductVariantTailoring>;
  changeAssetName?: TCtpInputMaybe<TCtpChangeProductTailoringAssetName>;
  changeAssetOrder?: TCtpInputMaybe<TCtpChangeProductTailoringAssetOrder>;
  moveImageToPosition?: TCtpInputMaybe<TCtpMoveProductTailoringImageToPosition>;
  publish?: TCtpInputMaybe<TCtpPublishTailoring>;
  removeAsset?: TCtpInputMaybe<TCtpRemoveProductTailoringAsset>;
  removeImage?: TCtpInputMaybe<TCtpRemoveProductTailoringImage>;
  removeVariant?: TCtpInputMaybe<TCtpRemoveProductVariantTailoring>;
  setAssetCustomField?: TCtpInputMaybe<TCtpSetProductTailoringAssetCustomField>;
  setAssetCustomType?: TCtpInputMaybe<TCtpSetProductTailoringAssetCustomType>;
  setAssetDescription?: TCtpInputMaybe<TCtpSetProductTailoringAssetDescription>;
  setAssetKey?: TCtpInputMaybe<TCtpSetProductTailoringAssetKey>;
  setAssetSources?: TCtpInputMaybe<TCtpSetProductTailoringAssetSources>;
  setAssetTags?: TCtpInputMaybe<TCtpSetProductTailoringAssetTags>;
  setAttribute?: TCtpInputMaybe<TCtpSetProductTailoringAttribute>;
  setAttributeInAllVariants?: TCtpInputMaybe<TCtpSetProductTailoringAttributeInAllVariants>;
  setDescription?: TCtpInputMaybe<TCtpSetProductTailoringDescription>;
  setImageLabel?: TCtpInputMaybe<TCtpSetProductTailoringImageLabel>;
  setImages?: TCtpInputMaybe<TCtpSetProductTailoringImages>;
  setMetaAttributes?: TCtpInputMaybe<TCtpSetProductTailoringMetaAttributes>;
  setMetaDescription?: TCtpInputMaybe<TCtpSetProductTailoringMetaDescription>;
  setMetaKeywords?: TCtpInputMaybe<TCtpSetProductTailoringMetaKeywords>;
  setMetaTitle?: TCtpInputMaybe<TCtpSetProductTailoringMetaTitle>;
  setName?: TCtpInputMaybe<TCtpSetProductTailoringName>;
  setSlug?: TCtpInputMaybe<TCtpSetProductTailoringSlug>;
  unpublish?: TCtpInputMaybe<TCtpUnpublishTailoring>;
};

export type TCtpProductTypeDefinition = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ProductTypeDefinition';
    attributeDefinitions: TCtpAttributeDefinitionResult;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    description: TCtpScalars['String']['output'];
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name: TCtpScalars['String']['output'];
    version: TCtpScalars['Long']['output'];
  };

export type TCtpProductTypeDefinition_AttributeDefinitionsArgs = {
  excludeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductTypeDefinitionQueryResult = {
  __typename?: 'ProductTypeDefinitionQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpProductTypeDefinition>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpProductTypeDraft = {
  attributeDefinitions?: TCtpInputMaybe<Array<TCtpAttributeDefinitionDraft>>;
  description: TCtpScalars['String']['input'];
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
};

export type TCtpProductTypeLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ProductTypeLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpProductTypeLimitsProjection = {
  __typename?: 'ProductTypeLimitsProjection';
  total: TCtpProductTypeLimitWithCurrent;
};

export type TCtpProductTypeUpdateAction = {
  addAttributeDefinition?: TCtpInputMaybe<TCtpAddAttributeDefinition>;
  addLocalizedEnumValue?: TCtpInputMaybe<TCtpAddLocalizedEnumValue>;
  addPlainEnumValue?: TCtpInputMaybe<TCtpAddPlainEnumValue>;
  changeAttributeName?: TCtpInputMaybe<TCtpChangeAttributeName>;
  changeAttributeOrder?: TCtpInputMaybe<TCtpChangeAttributeOrder>;
  changeAttributeOrderByName?: TCtpInputMaybe<TCtpChangeAttributeOrderByName>;
  changeDescription?: TCtpInputMaybe<TCtpChangeDescription>;
  changeEnumKey?: TCtpInputMaybe<TCtpChangeEnumKey>;
  changeInputHint?: TCtpInputMaybe<TCtpChangeInputHint>;
  changeIsSearchable?: TCtpInputMaybe<TCtpChangeIsSearchable>;
  changeLabel?: TCtpInputMaybe<TCtpChangeLabel>;
  changeLocalizedEnumValueLabel?: TCtpInputMaybe<TCtpChangeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: TCtpInputMaybe<TCtpChangeLocalizedEnumValueOrder>;
  changeName?: TCtpInputMaybe<TCtpChangeName>;
  changePlainEnumValueLabel?: TCtpInputMaybe<TCtpChangePlainEnumValueLabel>;
  changePlainEnumValueOrder?: TCtpInputMaybe<TCtpChangePlainEnumValueOrder>;
  removeAttributeDefinition?: TCtpInputMaybe<TCtpRemoveAttributeDefinition>;
  removeEnumValues?: TCtpInputMaybe<TCtpRemoveEnumValues>;
  setInputTip?: TCtpInputMaybe<TCtpSetInputTip>;
  setKey?: TCtpInputMaybe<TCtpSetKey>;
};

export type TCtpProductUnpublished = TCtpMessagePayload & {
  __typename?: 'ProductUnpublished';
  type: TCtpScalars['String']['output'];
};

export type TCtpProductUpdateAction = {
  addAsset?: TCtpInputMaybe<TCtpAddProductAsset>;
  addExternalImage?: TCtpInputMaybe<TCtpAddProductExternalImage>;
  addPrice?: TCtpInputMaybe<TCtpAddProductPrice>;
  addToCategory?: TCtpInputMaybe<TCtpAddProductToCategory>;
  addVariant?: TCtpInputMaybe<TCtpAddProductVariant>;
  changeAssetName?: TCtpInputMaybe<TCtpChangeProductAssetName>;
  changeAssetOrder?: TCtpInputMaybe<TCtpChangeProductAssetOrder>;
  changeImageLabel?: TCtpInputMaybe<TCtpChangeProductImageLabel>;
  changeMasterVariant?: TCtpInputMaybe<TCtpChangeProductMasterVariant>;
  changeName?: TCtpInputMaybe<TCtpChangeProductName>;
  changePrice?: TCtpInputMaybe<TCtpChangeProductPrice>;
  changeSlug?: TCtpInputMaybe<TCtpChangeProductSlug>;
  moveImageToPosition?: TCtpInputMaybe<TCtpMoveProductImageToPosition>;
  publish?: TCtpInputMaybe<TCtpPublishProduct>;
  removeAsset?: TCtpInputMaybe<TCtpRemoveProductAsset>;
  removeFromCategory?: TCtpInputMaybe<TCtpRemoveProductFromCategory>;
  removeImage?: TCtpInputMaybe<TCtpRemoveProductImage>;
  removePrice?: TCtpInputMaybe<TCtpRemoveProductPrice>;
  removeVariant?: TCtpInputMaybe<TCtpRemoveProductVariant>;
  revertStagedChanges?: TCtpInputMaybe<TCtpRevertStagedChanges>;
  revertStagedVariantChanges?: TCtpInputMaybe<TCtpRevertStagedVariantChanges>;
  setAssetCustomField?: TCtpInputMaybe<TCtpSetProductAssetCustomField>;
  setAssetCustomType?: TCtpInputMaybe<TCtpSetProductAssetCustomType>;
  setAssetDescription?: TCtpInputMaybe<TCtpSetProductAssetDescription>;
  setAssetKey?: TCtpInputMaybe<TCtpSetProductAssetKey>;
  setAssetSources?: TCtpInputMaybe<TCtpSetProductAssetSources>;
  setAssetTags?: TCtpInputMaybe<TCtpSetProductAssetTags>;
  setAttribute?: TCtpInputMaybe<TCtpSetProductAttribute>;
  setAttributeInAllVariants?: TCtpInputMaybe<TCtpSetProductAttributeInAllVariants>;
  setCategoryOrderHint?: TCtpInputMaybe<TCtpSetProductCategoryOrderHint>;
  setDescription?: TCtpInputMaybe<TCtpSetProductDescription>;
  setDiscountedPrice?: TCtpInputMaybe<TCtpSetProductDiscountedPrice>;
  setImageLabel?: TCtpInputMaybe<TCtpSetProductImageLabel>;
  setKey?: TCtpInputMaybe<TCtpSetProductKey>;
  setMetaAttributes?: TCtpInputMaybe<TCtpSetProductMetaAttributes>;
  setMetaDescription?: TCtpInputMaybe<TCtpSetProductMetaDescription>;
  setMetaKeywords?: TCtpInputMaybe<TCtpSetProductMetaKeywords>;
  setMetaTitle?: TCtpInputMaybe<TCtpSetProductMetaTitle>;
  setPriceKey?: TCtpInputMaybe<TCtpSetProductPriceKey>;
  setPriceMode?: TCtpInputMaybe<TCtpSetProductPriceMode>;
  setPrices?: TCtpInputMaybe<TCtpSetProductPrices>;
  setProductPriceCustomField?: TCtpInputMaybe<TCtpSetProductPriceCustomField>;
  setProductPriceCustomType?: TCtpInputMaybe<TCtpSetProductPriceCustomType>;
  setProductVariantKey?: TCtpInputMaybe<TCtpSetProductVariantKey>;
  setSearchKeywords?: TCtpInputMaybe<TCtpSetSearchKeywords>;
  setSku?: TCtpInputMaybe<TCtpSetProductSku>;
  setTaxCategory?: TCtpInputMaybe<TCtpSetProductTaxCategory>;
  transitionState?: TCtpInputMaybe<TCtpTransitionProductState>;
  unpublish?: TCtpInputMaybe<TCtpUnpublishProduct>;
};

export type TCtpProductVariant = {
  __typename?: 'ProductVariant';
  assets: Array<TCtpAsset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<TCtpRawProductAttribute>;
  availability?: TCtpMaybe<TCtpProductVariantAvailabilityWithChannels>;
  id: TCtpScalars['Int']['output'];
  images: Array<TCtpImage>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: TCtpMaybe<TCtpProductPrice>;
  prices?: TCtpMaybe<Array<TCtpProductPrice>>;
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpProductVariant_AttributesRawArgs = {
  excludeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductVariant_PriceArgs = {
  channelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
  currency: TCtpScalars['Currency']['input'];
  customerGroupAssignmentIds?: TCtpInputMaybe<
    Array<TCtpScalars['String']['input']>
  >;
  customerGroupId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  date?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpProductVariantAdded = TCtpMessagePayload & {
  __typename?: 'ProductVariantAdded';
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  variant: TCtpProductVariant;
};

/** Product variant availabilities */
export type TCtpProductVariantAvailabilitiesResult = {
  __typename?: 'ProductVariantAvailabilitiesResult';
  limit?: TCtpMaybe<TCtpScalars['Int']['output']>;
  offset?: TCtpMaybe<TCtpScalars['Int']['output']>;
  results: Array<TCtpProductVariantAvailabilityWithChannel>;
  total: TCtpScalars['Int']['output'];
};

/** Product variant availability */
export type TCtpProductVariantAvailability = {
  __typename?: 'ProductVariantAvailability';
  availableQuantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  isOnStock: TCtpScalars['Boolean']['output'];
  restockableInDays?: TCtpMaybe<TCtpScalars['Int']['output']>;
  version?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpProductVariantAvailabilityWithChannel = {
  __typename?: 'ProductVariantAvailabilityWithChannel';
  availability: TCtpProductVariantAvailability;
  channel?: TCtpMaybe<TCtpChannel>;
  channelRef: TCtpReference;
};

export type TCtpProductVariantAvailabilityWithChannels = {
  __typename?: 'ProductVariantAvailabilityWithChannels';
  channels: TCtpProductVariantAvailabilitiesResult;
  noChannel?: TCtpMaybe<TCtpProductVariantAvailability>;
};

export type TCtpProductVariantAvailabilityWithChannels_ChannelsArgs = {
  excludeChannelIds?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeChannelIds?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpProductVariantDeleted = TCtpMessagePayload & {
  __typename?: 'ProductVariantDeleted';
  removedImageUrls: TCtpScalars['Set']['output'];
  staged?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  type: TCtpScalars['String']['output'];
  variant?: TCtpMaybe<TCtpProductVariant>;
};

export type TCtpProductVariantExclusion = {
  __typename?: 'ProductVariantExclusion';
  skus: Array<TCtpScalars['String']['output']>;
};

export type TCtpProductVariantExclusionDraft = {
  skus?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductVariantImportDraft = {
  attributes?: TCtpInputMaybe<Array<TCtpProductAttributeInput>>;
  id?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  images?: TCtpInputMaybe<Array<TCtpImageInput>>;
  prices?: TCtpInputMaybe<Array<TCtpProductPriceDataInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpProductVariantInput = {
  assets?: TCtpInputMaybe<Array<TCtpAssetDraftInput>>;
  attributes?: TCtpInputMaybe<Array<TCtpProductAttributeInput>>;
  images?: TCtpInputMaybe<Array<TCtpImageInput>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  prices?: TCtpInputMaybe<Array<TCtpProductPriceDataInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpProductVariantSelection = {
  skus: Array<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpProductVariantSelectionDraft = {
  includeAllExcept?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeOnly?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpProductVariantSelectionIncludeAllExcept =
  TCtpProductVariantSelection & {
    __typename?: 'ProductVariantSelectionIncludeAllExcept';
    skus: Array<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpProductVariantSelectionIncludeOnly =
  TCtpProductVariantSelection & {
    __typename?: 'ProductVariantSelectionIncludeOnly';
    skus: Array<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpProductVariantTailoring = {
  __typename?: 'ProductVariantTailoring';
  assets: Array<TCtpAsset>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  attributesRaw: Array<TCtpRawProductAttribute>;
  id: TCtpScalars['Int']['output'];
  images: Array<TCtpImage>;
};

export type TCtpProductVariantTailoringAdded = TCtpMessagePayload & {
  __typename?: 'ProductVariantTailoringAdded';
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
  variant: TCtpVariantTailoring;
  variantId: TCtpScalars['Int']['output'];
};

export type TCtpProductVariantTailoringInput = {
  assets?: TCtpInputMaybe<Array<TCtpAssetDraftInput>>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  attributes?: TCtpInputMaybe<Array<TCtpProductAttributeInput>>;
  id?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  images?: TCtpInputMaybe<Array<TCtpImageInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpProductVariantTailoringRemoved = TCtpMessagePayload & {
  __typename?: 'ProductVariantTailoringRemoved';
  productKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  productRef: TCtpReference;
  storeRef: TCtpKeyReference;
  type: TCtpScalars['String']['output'];
  variant: TCtpVariantTailoring;
  variantId: TCtpScalars['Int']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpProductsSearchConfiguration = {
  __typename?: 'ProductsSearchConfiguration';
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
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
  businessUnits?: TCtpMaybe<TCtpBusinessUnitConfiguration>;
  carts: TCtpCartsConfiguration;
  countries: Array<TCtpScalars['Country']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  currencies: Array<TCtpScalars['Currency']['output']>;
  externalOAuth?: TCtpMaybe<TCtpExternalOAuth>;
  key: TCtpScalars['String']['output'];
  languages: Array<TCtpScalars['Locale']['output']>;
  lastModifiedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  messages: TCtpMessagesConfiguration;
  name: TCtpScalars['String']['output'];
  searchIndexing?: TCtpMaybe<TCtpSearchIndexingConfiguration>;
  shippingRateInputType?: TCtpMaybe<TCtpShippingRateInputType>;
  shoppingLists: TCtpShoppingListsConfiguration;
  trialUntil?: TCtpMaybe<TCtpScalars['YearMonth']['output']>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpProjectSettingsUpdateAction = {
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeBusinessUnitSearchStatus?: TCtpInputMaybe<TCtpChangeProjectSettingsBusinessUnitSearchStatus>;
  changeCartsConfiguration?: TCtpInputMaybe<TCtpChangeProjectSettingsCartsConfiguration>;
  changeCountries?: TCtpInputMaybe<TCtpChangeProjectSettingsCountries>;
  changeCountryTaxRateFallbackEnabled?: TCtpInputMaybe<TCtpChangeProjectSettingsCountryTaxRateFallbackEnabled>;
  changeCurrencies?: TCtpInputMaybe<TCtpChangeProjectSettingsCurrencies>;
  changeCustomerSearchStatus?: TCtpInputMaybe<TCtpChangeProjectSettingsCustomerSearchStatus>;
  changeLanguages?: TCtpInputMaybe<TCtpChangeProjectSettingsLanguages>;
  changeMessagesConfiguration?: TCtpInputMaybe<TCtpChangeProjectSettingsMessagesConfiguration>;
  changeMessagesEnabled?: TCtpInputMaybe<TCtpChangeProjectSettingsMessagesEnabled>;
  changeMyBusinessUnitStatusOnCreation?: TCtpInputMaybe<TCtpChangeProjectSettingsMyBusinessUnitStatusOnCreation>;
  changeName?: TCtpInputMaybe<TCtpChangeProjectSettingsName>;
  changeOrderSearchStatus?: TCtpInputMaybe<TCtpChangeProjectSettingsOrderSearchStatus>;
  changeProductSearchIndexingEnabled?: TCtpInputMaybe<TCtpChangeProjectSettingsProductSearchIndexingEnabled>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeProjectSettingsProductSearchIndexingEnabled?: TCtpInputMaybe<TCtpChangeProjectSettingsProductSearchIndexingEnabled>;
  changeShoppingListsConfiguration?: TCtpInputMaybe<TCtpChangeProjectSettingsShoppingListsConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  changeStandalonePriceSearchStatus?: TCtpInputMaybe<TCtpChangeProjectSettingsStandalonePriceSearchStatus>;
  changeTotalPriceDiscountDoesNotReduceExternalTax?: TCtpInputMaybe<TCtpChangeProjectSettingsTotalPriceDiscountDoesNotReduceExternalTax>;
  setExternalOAuth?: TCtpInputMaybe<TCtpSetProjectSettingsExternalOAuth>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  setMyBusinessUnitAssociateRoleOnCreation?: TCtpInputMaybe<TCtpSetProjectSettingsMyBusinessUnitAssociateRoleOnCreation>;
  setShippingRateInputType?: TCtpInputMaybe<TCtpSetProjectSettingsShippingRateInputType>;
};

export type TCtpPublishProduct = {
  scope?: TCtpInputMaybe<TCtpPublishScope>;
};

export enum TCtpPublishScope {
  /** Publishes the complete staged projection */
  All = 'All',
  /** Publishes only prices on the staged projection */
  Prices = 'Prices',
}

export type TCtpPublishTailoring = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpPurchaseOrderNumberSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'PurchaseOrderNumberSet';
    oldPurchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    purchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
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
    apiClient?: TCtpMaybe<TCtpApiClientWithoutSecret>;
    apiClients: TCtpApiClientWithoutSecretQueryResult;
    /** This field gives access to the resources (such as carts) as an associate of a given business unit. */
    asAssociate: TCtpAsAssociate;
    associateRole?: TCtpMaybe<TCtpAssociateRole>;
    associateRoles: TCtpAssociateRoleQueryResult;
    attributeGroup?: TCtpMaybe<TCtpAttributeGroup>;
    attributeGroups: TCtpAttributeGroupQueryResult;
    businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
    businessUnits: TCtpBusinessUnitQueryResult;
    cart?: TCtpMaybe<TCtpCart>;
    cartDiscount?: TCtpMaybe<TCtpCartDiscount>;
    cartDiscounts: TCtpCartDiscountQueryResult;
    carts: TCtpCartQueryResult;
    categories: TCtpCategoryQueryResult;
    category?: TCtpMaybe<TCtpCategory>;
    /** Autocomplete the categories based on category fields like name, description, etc. */
    categoryAutocomplete: TCtpCategorySearchResult;
    /** Search the categories using full-text search, filtering and sorting */
    categorySearch: TCtpCategorySearchResult;
    channel?: TCtpMaybe<TCtpChannel>;
    channels: TCtpChannelQueryResult;
    customObject?: TCtpMaybe<TCtpCustomObject>;
    customObjects: TCtpCustomObjectQueryResult;
    customer?: TCtpMaybe<TCtpCustomer>;
    customerActiveCart?: TCtpMaybe<TCtpCart>;
    customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
    customerGroups: TCtpCustomerGroupQueryResult;
    customers: TCtpCustomerQueryResult;
    discountCode?: TCtpMaybe<TCtpDiscountCode>;
    discountCodes: TCtpDiscountCodeQueryResult;
    extension?: TCtpMaybe<TCtpExtension>;
    extensions: TCtpExtensionQueryResult;
    /** This field gives access to the resources (such as carts) that are inside the given store. */
    inStore: TCtpInStore;
    /** This field gives access to the resources (such as carts) that are inside one of the given stores. */
    inStores: TCtpInStore;
    inventoryEntries: TCtpInventoryEntryQueryResult;
    inventoryEntry?: TCtpMaybe<TCtpInventoryEntry>;
    limits: TCtpProjectCustomLimitsProjection;
    /**
     * This field can only be used with an access token created with the password flow or with an anonymous session.
     *
     * It gives access to the data that is specific to the customer or the anonymous session linked to the access token.
     */
    me: TCtpMe;
    message?: TCtpMaybe<TCtpMessage>;
    messages: TCtpMessageQueryResult;
    order?: TCtpMaybe<TCtpOrder>;
    orderEdit?: TCtpMaybe<TCtpOrderEdit>;
    orderEdits: TCtpOrderEditQueryResult;
    orders: TCtpOrderQueryResult;
    payment?: TCtpMaybe<TCtpPayment>;
    payments: TCtpPaymentQueryResult;
    product?: TCtpMaybe<TCtpProduct>;
    productDiscount?: TCtpMaybe<TCtpProductDiscount>;
    productDiscounts: TCtpProductDiscountQueryResult;
    productProjectionSearch: TCtpProductProjectionSearchResult;
    productProjectionsSuggest: TCtpSuggestResult;
    productSelection?: TCtpMaybe<TCtpProductSelection>;
    productSelectionAssignments: TCtpProductAssignmentQueryResult;
    productSelections: TCtpProductSelectionQueryResult;
    productTailoring?: TCtpMaybe<TCtpProductTailoring>;
    productTailoringList: TCtpProductTailoringQueryResult;
    productType?: TCtpMaybe<TCtpProductTypeDefinition>;
    productTypes: TCtpProductTypeDefinitionQueryResult;
    products: TCtpProductQueryResult;
    project: TCtpProjectProjection;
    quote?: TCtpMaybe<TCtpQuote>;
    quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
    quoteRequests: TCtpQuoteRequestQueryResult;
    quotes: TCtpQuoteQueryResult;
    review?: TCtpMaybe<TCtpReview>;
    reviews: TCtpReviewQueryResult;
    shippingMethod?: TCtpMaybe<TCtpShippingMethod>;
    shippingMethods: TCtpShippingMethodQueryResult;
    shippingMethodsByCart: Array<TCtpShippingMethod>;
    shippingMethodsByLocation: Array<TCtpShippingMethod>;
    shoppingList?: TCtpMaybe<TCtpShoppingList>;
    shoppingLists: TCtpShoppingListQueryResult;
    stagedQuote?: TCtpMaybe<TCtpStagedQuote>;
    stagedQuotes: TCtpStagedQuoteQueryResult;
    /**
     * StandalonePrices are managed and queried through the StandalonePrices API
     * and associated to a ProductVariant through the sku field.
     */
    standalonePrice?: TCtpMaybe<TCtpStandalonePrice>;
    /**
     * StandalonePrices are managed and queried through the StandalonePrices API
     * and associated to a ProductVariant through the sku field.
     */
    standalonePrices: TCtpStandalonePriceQueryResult;
    state?: TCtpMaybe<TCtpState>;
    states: TCtpStateQueryResult;
    store?: TCtpMaybe<TCtpStore>;
    stores: TCtpStoreQueryResult;
    subscription?: TCtpMaybe<TCtpCommercetoolsSubscription>;
    subscriptions: TCtpCommercetoolsSubscriptionQueryResult;
    taxCategories: TCtpTaxCategoryQueryResult;
    taxCategory?: TCtpMaybe<TCtpTaxCategory>;
    typeDefinition?: TCtpMaybe<TCtpTypeDefinition>;
    typeDefinitions: TCtpTypeDefinitionQueryResult;
    zone?: TCtpMaybe<TCtpZone>;
    zones: TCtpZoneQueryResult;
  };

export type TCtpQuery_ApiClientArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpQuery_ApiClientsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_AsAssociateArgs = {
  associateId: TCtpScalars['String']['input'];
  businessUnitKey: TCtpScalars['KeyReferenceInput']['input'];
};

export type TCtpQuery_AssociateRoleArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_AssociateRolesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_AttributeGroupArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_AttributeGroupsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_BusinessUnitArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_BusinessUnitsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpQuery_CartDiscountArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CartDiscountsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CartsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CategoriesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CategoryArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CategoryAutocompleteArgs = {
  filters?: TCtpInputMaybe<Array<TCtpScalars['SearchFilter']['input']>>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  locale: TCtpScalars['Locale']['input'];
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  text: TCtpScalars['String']['input'];
};

export type TCtpQuery_CategorySearchArgs = {
  filters?: TCtpInputMaybe<Array<TCtpScalars['SearchFilter']['input']>>;
  fulltext?: TCtpInputMaybe<TCtpLocalizedText>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  queryFilters?: TCtpInputMaybe<Array<TCtpScalars['SearchFilter']['input']>>;
  sorts?: TCtpInputMaybe<Array<TCtpScalars['SearchSort']['input']>>;
};

export type TCtpQuery_ChannelArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ChannelsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CustomObjectArgs = {
  container?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CustomObjectsArgs = {
  container: TCtpScalars['String']['input'];
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CustomerArgs = {
  emailToken?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  passwordToken?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CustomerActiveCartArgs = {
  customerId: TCtpScalars['String']['input'];
};

export type TCtpQuery_CustomerGroupArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CustomerGroupsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_CustomersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_DiscountCodeArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_DiscountCodesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ExtensionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ExtensionsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_InStoreArgs = {
  key: TCtpScalars['KeyReferenceInput']['input'];
};

export type TCtpQuery_InStoresArgs = {
  keys: Array<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpQuery_InventoryEntriesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_InventoryEntryArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_MessageArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_MessagesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_OrderArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_OrderEditArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_OrderEditsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_OrdersArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_PaymentArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_PaymentsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  localeProjection?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  projectExpandedProducts?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductDiscountArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductDiscountsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductProjectionSearchArgs = {
  facetFilters?: TCtpInputMaybe<Array<TCtpSearchFilterInput>>;
  facets?: TCtpInputMaybe<Array<TCtpSearchFacetInput>>;
  filters?: TCtpInputMaybe<Array<TCtpSearchFilterInput>>;
  fuzzy?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  fuzzyLevel?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
  localeProjection?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  markMatchingVariant?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  markMatchingVariants?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  priceSelector?: TCtpInputMaybe<TCtpPriceSelectorInput>;
  projectExpandedProducts?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  queryFilters?: TCtpInputMaybe<Array<TCtpSearchFilterInput>>;
  sorts?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  storeProjection?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  text?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductProjectionsSuggestArgs = {
  fuzzy?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  searchKeywords: Array<TCtpSearchKeywordArgument>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpQuery_ProductSelectionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductSelectionAssignmentsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductSelectionsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductTailoringArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  storeKey?: TCtpInputMaybe<TCtpScalars['KeyReferenceInput']['input']>;
};

export type TCtpQuery_ProductTailoringListArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductTypeArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductTypesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ProductsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  localeProjection?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  projectExpandedProducts?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  skus?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_QuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_QuoteRequestArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_QuoteRequestsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_QuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ReviewArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ReviewsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ShippingMethodArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ShippingMethodsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ShippingMethodsByCartArgs = {
  id: TCtpScalars['String']['input'];
};

export type TCtpQuery_ShippingMethodsByLocationArgs = {
  country: TCtpScalars['Country']['input'];
  currency?: TCtpInputMaybe<TCtpScalars['Currency']['input']>;
  state?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ShoppingListsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StagedQuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StagedQuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StandalonePriceArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StandalonePricesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StateArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StatesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StoreArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_StoresArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_SubscriptionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_SubscriptionsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_TaxCategoriesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_TaxCategoryArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_TypeDefinitionArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_TypeDefinitionsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ZoneArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuery_ZonesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQueryLimitsProjection = {
  __typename?: 'QueryLimitsProjection';
  offset: TCtpLimit;
};

export type TCtpQuote = TCtpVersioned & {
  __typename?: 'Quote';
  billingAddress?: TCtpMaybe<TCtpAddress>;
  businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  businessUnitRef?: TCtpMaybe<TCtpKeyReference>;
  buyerComment?: TCtpMaybe<TCtpScalars['String']['output']>;
  country?: TCtpMaybe<TCtpScalars['Country']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customLineItems: Array<TCtpCustomLineItem>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  customerRef?: TCtpMaybe<TCtpReference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<TCtpDirectDiscount>;
  id: TCtpScalars['String']['output'];
  inventoryMode: TCtpInventoryMode;
  itemShippingAddresses: Array<TCtpAddress>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  lineItems: Array<TCtpLineItem>;
  paymentInfo?: TCtpMaybe<TCtpPaymentInfo>;
  purchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  quoteRequestRef: TCtpReference;
  quoteState: TCtpQuoteState;
  sellerComment?: TCtpMaybe<TCtpScalars['String']['output']>;
  shippingAddress?: TCtpMaybe<TCtpAddress>;
  shippingInfo?: TCtpMaybe<TCtpShippingInfo>;
  shippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
  stagedQuote?: TCtpMaybe<TCtpStagedQuote>;
  stagedQuoteRef: TCtpReference;
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
  store?: TCtpMaybe<TCtpStore>;
  storeRef?: TCtpMaybe<TCtpKeyReference>;
  taxCalculationMode: TCtpTaxCalculationMode;
  taxMode: TCtpTaxMode;
  taxRoundingMode: TCtpRoundingMode;
  taxedPrice?: TCtpMaybe<TCtpTaxedPrice>;
  totalPrice: TCtpMoney;
  validTo?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpQuote_LineItemsArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuoteCreated = TCtpMessagePayload & {
  __typename?: 'QuoteCreated';
  quote: TCtpQuote;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteCustomerChanged = TCtpMessagePayload & {
  __typename?: 'QuoteCustomerChanged';
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef: TCtpReference;
  previousCustomer?: TCtpMaybe<TCtpCustomer>;
  previousCustomerRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteDeleted = TCtpMessagePayload & {
  __typename?: 'QuoteDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  stagedQuote?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  stagedQuoteStateToSent?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  stagedQuoteVersion?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  state?: TCtpInputMaybe<TCtpReferenceInput>;
};

/** Fields to access Quotes. */
export type TCtpQuoteQueryInterface = {
  quote?: TCtpMaybe<TCtpQuote>;
  quotes: TCtpQuoteQueryResult;
};

/** Fields to access Quotes. */
export type TCtpQuoteQueryInterface_QuoteArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Fields to access Quotes. */
export type TCtpQuoteQueryInterface_QuotesArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuoteQueryResult = {
  __typename?: 'QuoteQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpQuote>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpQuoteRenegotiationRequested = TCtpMessagePayload & {
  __typename?: 'QuoteRenegotiationRequested';
  buyerComment?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteRequest = TCtpVersioned & {
  __typename?: 'QuoteRequest';
  billingAddress?: TCtpMaybe<TCtpAddress>;
  businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  businessUnitRef?: TCtpMaybe<TCtpKeyReference>;
  cartRef?: TCtpMaybe<TCtpReference>;
  comment?: TCtpMaybe<TCtpScalars['String']['output']>;
  country?: TCtpMaybe<TCtpScalars['Country']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customLineItems: Array<TCtpCustomLineItem>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  customerRef?: TCtpMaybe<TCtpReference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<TCtpDirectDiscount>;
  id: TCtpScalars['String']['output'];
  inventoryMode: TCtpInventoryMode;
  itemShippingAddresses: Array<TCtpAddress>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  lineItems: Array<TCtpLineItem>;
  paymentInfo?: TCtpMaybe<TCtpPaymentInfo>;
  purchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  quoteRequestState: TCtpQuoteRequestState;
  shippingAddress?: TCtpMaybe<TCtpAddress>;
  shippingInfo?: TCtpMaybe<TCtpShippingInfo>;
  shippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
  store?: TCtpMaybe<TCtpStore>;
  storeRef?: TCtpMaybe<TCtpKeyReference>;
  taxCalculationMode: TCtpTaxCalculationMode;
  taxMode: TCtpTaxMode;
  taxRoundingMode: TCtpRoundingMode;
  taxedPrice?: TCtpMaybe<TCtpTaxedPrice>;
  totalPrice: TCtpMoney;
  version: TCtpScalars['Long']['output'];
};

export type TCtpQuoteRequest_LineItemsArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuoteRequestCreated = TCtpMessagePayload & {
  __typename?: 'QuoteRequestCreated';
  quoteRequest: TCtpQuoteRequest;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteRequestCustomerChanged = TCtpMessagePayload & {
  __typename?: 'QuoteRequestCustomerChanged';
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef: TCtpReference;
  previousCustomer?: TCtpMaybe<TCtpCustomer>;
  previousCustomerRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteRequestDeleted = TCtpMessagePayload & {
  __typename?: 'QuoteRequestDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteRequestDraft = {
  cart?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  cartVersion?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  comment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  purchaseOrderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state?: TCtpInputMaybe<TCtpReferenceInput>;
};

/** Fields to access QuoteRequests. */
export type TCtpQuoteRequestQueryInterface = {
  quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  quoteRequests: TCtpQuoteRequestQueryResult;
};

/** Fields to access QuoteRequests. */
export type TCtpQuoteRequestQueryInterface_QuoteRequestArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Fields to access QuoteRequests. */
export type TCtpQuoteRequestQueryInterface_QuoteRequestsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpQuoteRequestQueryResult = {
  __typename?: 'QuoteRequestQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpQuoteRequest>;
  total: TCtpScalars['Long']['output'];
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
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteRequestStateTransition = TCtpMessagePayload & {
  __typename?: 'QuoteRequestStateTransition';
  force: TCtpScalars['Boolean']['output'];
  oldState?: TCtpMaybe<TCtpState>;
  oldStateRef?: TCtpMaybe<TCtpReference>;
  state?: TCtpMaybe<TCtpState>;
  stateRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteRequestUpdateAction = {
  changeCustomer?: TCtpInputMaybe<TCtpChangeQuoteRequestCustomer>;
  changeQuoteRequestState?: TCtpInputMaybe<TCtpChangeQuoteRequestState>;
  setCustomField?: TCtpInputMaybe<TCtpSetQuoteRequestCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetQuoteRequestCustomType>;
  transitionState?: TCtpInputMaybe<TCtpTransitionQuoteRequestState>;
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
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteStateTransition = TCtpMessagePayload & {
  __typename?: 'QuoteStateTransition';
  force: TCtpScalars['Boolean']['output'];
  oldState?: TCtpMaybe<TCtpState>;
  oldStateRef?: TCtpMaybe<TCtpReference>;
  state?: TCtpMaybe<TCtpState>;
  stateRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpQuoteUpdateAction = {
  changeCustomer?: TCtpInputMaybe<TCtpChangeQuoteCustomer>;
  changeQuoteState?: TCtpInputMaybe<TCtpChangeQuoteState>;
  requestQuoteRenegotiation?: TCtpInputMaybe<TCtpRequestQuoteRenegotiation>;
  setCustomField?: TCtpInputMaybe<TCtpSetQuoteCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetQuoteCustomType>;
  transitionState?: TCtpInputMaybe<TCtpTransitionQuoteState>;
};

export type TCtpRangeCount = {
  type: TCtpScalars['String']['output'];
};

export type TCtpRangeCountDouble = TCtpRangeCount & {
  __typename?: 'RangeCountDouble';
  count: TCtpScalars['Int']['output'];
  from: TCtpScalars['Float']['output'];
  fromStr: TCtpScalars['String']['output'];
  max: TCtpScalars['Float']['output'];
  mean: TCtpScalars['Float']['output'];
  min: TCtpScalars['Float']['output'];
  productCount?: TCtpMaybe<TCtpScalars['Int']['output']>;
  to: TCtpScalars['Float']['output'];
  toStr: TCtpScalars['String']['output'];
  total: TCtpScalars['Float']['output'];
  totalCount: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpRangeCountLong = TCtpRangeCount & {
  __typename?: 'RangeCountLong';
  count: TCtpScalars['Int']['output'];
  from: TCtpScalars['Long']['output'];
  fromStr: TCtpScalars['String']['output'];
  max: TCtpScalars['Long']['output'];
  mean: TCtpScalars['Float']['output'];
  min: TCtpScalars['Long']['output'];
  productCount?: TCtpMaybe<TCtpScalars['Int']['output']>;
  to: TCtpScalars['Long']['output'];
  toStr: TCtpScalars['String']['output'];
  total: TCtpScalars['Long']['output'];
  totalCount: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpRangeElementInput = {
  from: TCtpScalars['String']['input'];
  to: TCtpScalars['String']['input'];
};

export type TCtpRangeFacetInput = {
  alias?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  countProducts?: TCtpScalars['Boolean']['input'];
  path: TCtpScalars['String']['input'];
  ranges: Array<TCtpRangeElementInput>;
};

export type TCtpRangeFacetResult = TCtpFacetResult & {
  __typename?: 'RangeFacetResult';
  dataType: TCtpScalars['String']['output'];
  ranges: Array<TCtpRangeCount>;
  type: TCtpScalars['String']['output'];
};

export type TCtpRangeFilterInput = {
  path: TCtpScalars['String']['input'];
  ranges: Array<TCtpRangeElementInput>;
};

export type TCtpRawCustomField = {
  __typename?: 'RawCustomField';
  name: TCtpScalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: TCtpMaybe<TCtpReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<TCtpReferenceExpandable>;
  value: TCtpScalars['Json']['output'];
};

export type TCtpRawProductAttribute = {
  __typename?: 'RawProductAttribute';
  attributeDefinition?: TCtpMaybe<TCtpAttributeDefinition>;
  name: TCtpScalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: TCtpMaybe<TCtpReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<TCtpReferenceExpandable>;
  value: TCtpScalars['Json']['output'];
};

export type TCtpRawProductSearchAttribute = {
  __typename?: 'RawProductSearchAttribute';
  name: TCtpScalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: TCtpMaybe<TCtpReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<TCtpReferenceExpandable>;
  value: TCtpScalars['Json']['output'];
};

export type TCtpRecalculateCart = {
  updateProductData?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpReference = {
  __typename?: 'Reference';
  id: TCtpScalars['String']['output'];
  typeId: TCtpScalars['String']['output'];
};

export type TCtpReferenceAttribute = TCtpAttribute & {
  __typename?: 'ReferenceAttribute';
  id: TCtpScalars['String']['output'];
  name: TCtpScalars['String']['output'];
  typeId: TCtpScalars['String']['output'];
};

export type TCtpReferenceAttributeDefinitionType =
  TCtpAttributeDefinitionType & {
    __typename?: 'ReferenceAttributeDefinitionType';
    name: TCtpScalars['String']['output'];
    referenceTypeId: TCtpScalars['String']['output'];
  };

export type TCtpReferenceExpandable = {
  id: TCtpScalars['String']['output'];
};

export type TCtpReferenceField = TCtpCustomField & {
  __typename?: 'ReferenceField';
  id: TCtpScalars['String']['output'];
  name: TCtpScalars['String']['output'];
  typeId: TCtpScalars['String']['output'];
};

export type TCtpReferenceId = {
  __typename?: 'ReferenceId';
  id: TCtpScalars['String']['output'];
  typeId: TCtpScalars['String']['output'];
};

export type TCtpReferenceInput = {
  id: TCtpScalars['String']['input'];
  typeId: TCtpScalars['String']['input'];
};

export type TCtpReferenceType = TCtpFieldType & {
  __typename?: 'ReferenceType';
  name: TCtpScalars['String']['output'];
  referenceTypeId: TCtpScalars['String']['output'];
};

export type TCtpReferenceTypeDefinitionDraft = {
  referenceTypeId: TCtpScalars['String']['input'];
};

export type TCtpRefreshTokenLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'RefreshTokenLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpRefreshTokenLimitsProjection = {
  __typename?: 'RefreshTokenLimitsProjection';
  total: TCtpRefreshTokenLimitWithCurrent;
};

export type TCtpRejectApprovalFlow = {
  reason?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRelativeDiscountValue = TCtpCartDiscountValue &
  TCtpProductDiscountValue & {
    __typename?: 'RelativeDiscountValue';
    permyriad: TCtpScalars['Int']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpRelativeDiscountValueInput = {
  permyriad: TCtpScalars['Int']['input'];
};

export type TCtpRemoveAssociateRolePermission = {
  permission: TCtpPermission;
};

export type TCtpRemoveAttributeGroupAttribute = {
  attribute: TCtpAttributeReferenceInput;
};

export type TCtpRemoveBusinessUnitAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveBusinessUnitAssociate = {
  customer: TCtpResourceIdentifierInput;
};

export type TCtpRemoveBusinessUnitBillingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveBusinessUnitShippingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveBusinessUnitStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCartCustomLineItem = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveCartDiscountCode = {
  discountCode: TCtpReferenceInput;
};

export type TCtpRemoveCartDiscountStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCartItemShippingAddress = {
  addressKey: TCtpScalars['String']['input'];
};

export type TCtpRemoveCartLineItem = {
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetailsToRemove?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpRemoveCartPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCartShippingMethod = {
  shippingKey: TCtpScalars['String']['input'];
};

export type TCtpRemoveCategoryAsset = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveChannelRoles = {
  roles: Array<TCtpChannelRole>;
};

export type TCtpRemoveCustomerAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveCustomerBillingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveCustomerGroupAssignment = {
  customerGroup: TCtpResourceIdentifierInput;
};

export type TCtpRemoveCustomerShippingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveCustomerStore = {
  store: TCtpResourceIdentifierInput;
};

export type TCtpRemoveInventoryEntryQuantity = {
  quantity: TCtpScalars['Long']['input'];
};

export type TCtpRemoveMyBusinessUnitAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveMyBusinessUnitAssociate = {
  customer: TCtpResourceIdentifierInput;
};

export type TCtpRemoveMyBusinessUnitBillingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveMyBusinessUnitShippingAddressId = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveOrderDelivery = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveOrderItemShippingAddress = {
  addressKey: TCtpScalars['String']['input'];
};

export type TCtpRemoveOrderParcelFromDelivery = {
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpRemoveProductAsset = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpRemoveProductFromCategory = {
  category: TCtpResourceIdentifierInput;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpRemoveProductImage = {
  imageUrl: TCtpScalars['String']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpRemoveProductPrice = {
  priceId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpRemoveProductSelectionProduct = {
  product: TCtpResourceIdentifierInput;
};

export type TCtpRemoveProductTailoringAsset = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpRemoveProductTailoringImage = {
  imageUrl: TCtpScalars['String']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpRemoveProductVariant = {
  id?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpRemoveProductVariantTailoring = {
  id?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpRemoveShippingMethodShippingRate = {
  shippingRate: TCtpShippingRateDraft;
  zone: TCtpResourceIdentifierInput;
};

export type TCtpRemoveShippingMethodZone = {
  zone: TCtpResourceIdentifierInput;
};

export type TCtpRemoveShoppingListLineItem = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpRemoveShoppingListTextLineItem = {
  quantity?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  textLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  textLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveStagedChanges = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveStagedOrderCustomLineItem = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveStagedOrderCustomLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderCustomLineItemOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStagedOrderDelivery = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveStagedOrderDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderDeliveryOutput';
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStagedOrderDiscountCode = {
  discountCode: TCtpReferenceInput;
};

export type TCtpRemoveStagedOrderDiscountCodeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderDiscountCodeOutput';
    discountCode?: TCtpMaybe<TCtpDiscountCode>;
    discountCodeRef: TCtpReference;
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStagedOrderItemShippingAddress = {
  addressKey: TCtpScalars['String']['input'];
};

export type TCtpRemoveStagedOrderItemShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderItemShippingAddressOutput';
    addressKey: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStagedOrderLineItem = {
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  shippingDetailsToRemove?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpRemoveStagedOrderLineItemOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderLineItemOutput';
    externalPrice?: TCtpMaybe<TCtpBaseMoney>;
    externalTotalPrice?: TCtpMaybe<TCtpExternalLineItemTotalPrice>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    quantity?: TCtpMaybe<TCtpScalars['Long']['output']>;
    shippingDetailsToRemove?: TCtpMaybe<TCtpItemShippingDetailsDraftOutput>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStagedOrderParcelFromDelivery = {
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRemoveStagedOrderParcelFromDeliveryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderParcelFromDeliveryOutput';
    parcelId?: TCtpMaybe<TCtpScalars['String']['output']>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStagedOrderPayment = {
  payment: TCtpResourceIdentifierInput;
};

export type TCtpRemoveStagedOrderPaymentOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'RemoveStagedOrderPaymentOutput';
    paymentResId: TCtpResourceIdentifier;
    type: TCtpScalars['String']['output'];
  };

export type TCtpRemoveStandalonePriceTier = {
  minimumQuantity: TCtpScalars['Int']['input'];
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
  fieldName: TCtpScalars['String']['input'];
};

export type TCtpRemoveZoneLocation = {
  location: TCtpZoneLocation;
};

export type TCtpRequestQuoteRenegotiation = {
  buyerComment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpResourceIdentifier = {
  __typename?: 'ResourceIdentifier';
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  typeId: TCtpScalars['String']['output'];
};

export type TCtpResourceIdentifierInput = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Stores information about returns connected to this order. */
export type TCtpReturnInfo = {
  __typename?: 'ReturnInfo';
  items: Array<TCtpReturnItem>;
  returnDate?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  returnTrackingId?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpReturnInfoAdded = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ReturnInfoAdded';
    returnInfo: TCtpReturnInfo;
    type: TCtpScalars['String']['output'];
  };

export type TCtpReturnInfoDraftType = {
  items: Array<TCtpReturnItemDraftType>;
  returnDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  returnTrackingId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpReturnInfoDraftTypeOutput = {
  __typename?: 'ReturnInfoDraftTypeOutput';
  items: Array<TCtpReturnItemDraftTypeOutput>;
  returnDate?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  returnTrackingId?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpReturnInfoSet = TCtpMessagePayload &
  TCtpOrderMessagePayload & {
    __typename?: 'ReturnInfoSet';
    returnInfo?: TCtpMaybe<Array<TCtpReturnInfo>>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpReturnItem = {
  comment?: TCtpMaybe<TCtpScalars['String']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  paymentState: TCtpReturnPaymentState;
  quantity: TCtpScalars['Long']['output'];
  shipmentState: TCtpReturnShipmentState;
  type: TCtpScalars['String']['output'];
};

export type TCtpReturnItemDraftType = {
  comment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
  shipmentState: TCtpReturnShipmentState;
};

export type TCtpReturnItemDraftTypeOutput = {
  __typename?: 'ReturnItemDraftTypeOutput';
  comment?: TCtpMaybe<TCtpScalars['String']['output']>;
  custom?: TCtpMaybe<TCtpCustomFieldsCommand>;
  customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
  quantity: TCtpScalars['Long']['output'];
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
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpRevertStagedVariantChanges = {
  variantId: TCtpScalars['Int']['input'];
};

export type TCtpReview = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Review';
    authorName?: TCtpMaybe<TCtpScalars['String']['output']>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    customer?: TCtpMaybe<TCtpCustomer>;
    customerRef?: TCtpMaybe<TCtpReference>;
    id: TCtpScalars['String']['output'];
    includedInStatistics: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    locale?: TCtpMaybe<TCtpScalars['Locale']['output']>;
    rating?: TCtpMaybe<TCtpScalars['Int']['output']>;
    state?: TCtpMaybe<TCtpState>;
    stateRef?: TCtpMaybe<TCtpReference>;
    target?: TCtpMaybe<TCtpReviewTarget>;
    targetRef?: TCtpMaybe<TCtpReference>;
    text?: TCtpMaybe<TCtpScalars['String']['output']>;
    title?: TCtpMaybe<TCtpScalars['String']['output']>;
    uniquenessValue?: TCtpMaybe<TCtpScalars['String']['output']>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpReviewCreated = TCtpMessagePayload & {
  __typename?: 'ReviewCreated';
  review: TCtpReview;
  type: TCtpScalars['String']['output'];
};

export type TCtpReviewDraft = {
  authorName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customer?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
  rating?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  state?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  target?: TCtpInputMaybe<TCtpTargetReferenceInput>;
  text?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  title?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  uniquenessValue?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpReviewQueryResult = {
  __typename?: 'ReviewQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpReview>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpReviewRatingSet = TCtpMessagePayload & {
  __typename?: 'ReviewRatingSet';
  includedInStatistics: TCtpScalars['Boolean']['output'];
  newRating?: TCtpMaybe<TCtpScalars['Int']['output']>;
  oldRating?: TCtpMaybe<TCtpScalars['Int']['output']>;
  target?: TCtpMaybe<TCtpReviewTarget>;
  targetRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpReviewRatingStatistics = {
  __typename?: 'ReviewRatingStatistics';
  averageRating: TCtpScalars['Float']['output'];
  count: TCtpScalars['Long']['output'];
  highestRating: TCtpScalars['Int']['output'];
  lowestRating: TCtpScalars['Int']['output'];
  ratingsDistribution: TCtpScalars['Json']['output'];
};

export type TCtpReviewStateTransition = TCtpMessagePayload & {
  __typename?: 'ReviewStateTransition';
  force: TCtpScalars['Boolean']['output'];
  newIncludedInStatistics: TCtpScalars['Boolean']['output'];
  newState?: TCtpMaybe<TCtpState>;
  newStateRef: TCtpReference;
  oldIncludedInStatistics: TCtpScalars['Boolean']['output'];
  oldState?: TCtpMaybe<TCtpState>;
  oldStateRef?: TCtpMaybe<TCtpReference>;
  target?: TCtpMaybe<TCtpReviewTarget>;
  targetRef?: TCtpMaybe<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpReviewTarget = {
  id: TCtpScalars['String']['output'];
};

export type TCtpReviewUpdateAction = {
  setAuthorName?: TCtpInputMaybe<TCtpSetReviewAuthorName>;
  setCustomField?: TCtpInputMaybe<TCtpSetReviewCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetReviewCustomType>;
  setCustomer?: TCtpInputMaybe<TCtpSetReviewCustomer>;
  setKey?: TCtpInputMaybe<TCtpSetReviewKey>;
  setLocale?: TCtpInputMaybe<TCtpSetReviewLocale>;
  setRating?: TCtpInputMaybe<TCtpSetReviewRating>;
  setTarget?: TCtpInputMaybe<TCtpSetReviewTarget>;
  setText?: TCtpInputMaybe<TCtpSetReviewText>;
  setTitle?: TCtpInputMaybe<TCtpSetReviewTitle>;
  transitionState?: TCtpInputMaybe<TCtpTransitionReviewState>;
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
  accessKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  accessSecret?: TCtpMaybe<TCtpScalars['String']['output']>;
  authenticationMode: TCtpAwsAuthenticationMode;
  topicArn: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpSnsDestinationInput = {
  accessKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  accessSecret?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  authenticationMode?: TCtpInputMaybe<TCtpAwsAuthenticationMode>;
  topicArn: TCtpScalars['String']['input'];
};

export type TCtpSqsDestination = TCtpDestination & {
  __typename?: 'SQSDestination';
  accessKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  accessSecret?: TCtpMaybe<TCtpScalars['String']['output']>;
  authenticationMode: TCtpAwsAuthenticationMode;
  queueUrl: TCtpScalars['String']['output'];
  region: TCtpScalars['String']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpSqsDestinationInput = {
  accessKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  accessSecret?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  authenticationMode?: TCtpInputMaybe<TCtpAwsAuthenticationMode>;
  queueUrl: TCtpScalars['String']['input'];
  region: TCtpScalars['String']['input'];
};

export type TCtpScopedPrice = {
  __typename?: 'ScopedPrice';
  channel?: TCtpMaybe<TCtpChannel>;
  channelRef?: TCtpMaybe<TCtpReference>;
  country?: TCtpMaybe<TCtpScalars['String']['output']>;
  currentValue: TCtpBaseMoney;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  discounted?: TCtpMaybe<TCtpDiscountedProductSearchPriceValue>;
  id: TCtpScalars['String']['output'];
  validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  value: TCtpBaseMoney;
};

export type TCtpScoreShippingRateInput = TCtpShippingRateInput & {
  __typename?: 'ScoreShippingRateInput';
  score: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpScoreShippingRateInputDraft = {
  score: TCtpScalars['Int']['input'];
};

export type TCtpScoreShippingRateInputDraftOutput =
  TCtpShippingRateInputDraftOutput & {
    __typename?: 'ScoreShippingRateInputDraftOutput';
    score: TCtpScalars['Int']['output'];
    type: TCtpScalars['String']['output'];
  };

export type TCtpSearchFacetInput = {
  model?: TCtpInputMaybe<TCtpSearchFacetModelInput>;
  string?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSearchFacetModelInput = {
  range?: TCtpInputMaybe<TCtpRangeFacetInput>;
  terms?: TCtpInputMaybe<TCtpTermsFacetInput>;
};

export type TCtpSearchFilterInput = {
  model?: TCtpInputMaybe<TCtpSearchFilterModelInput>;
  string?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSearchFilterModelInput = {
  exists?: TCtpInputMaybe<TCtpExistsFilterInput>;
  missing?: TCtpInputMaybe<TCtpMissingFilterInput>;
  range?: TCtpInputMaybe<TCtpRangeFilterInput>;
  tree?: TCtpInputMaybe<TCtpTreeFilterInput>;
  value?: TCtpInputMaybe<TCtpValueFilterInput>;
};

export type TCtpSearchIndexingConfiguration = {
  __typename?: 'SearchIndexingConfiguration';
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  businessUnits?: TCtpMaybe<TCtpBusinessUnitSearchConfiguration>;
  customers?: TCtpMaybe<TCtpCustomerSearchConfiguration>;
  orders?: TCtpMaybe<TCtpOrderSearchConfiguration>;
  products?: TCtpMaybe<TCtpSearchIndexingConfigurationValues>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  productsSearch?: TCtpMaybe<TCtpProductsSearchConfiguration>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  standalonePrices?: TCtpMaybe<TCtpStandalonePriceSearchConfiguration>;
};

export type TCtpSearchIndexingConfigurationValues = {
  __typename?: 'SearchIndexingConfigurationValues';
  lastModifiedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  status?: TCtpMaybe<TCtpSearchIndexingStatus>;
};

export enum TCtpSearchIndexingStatus {
  Activated = 'Activated',
  Deactivated = 'Deactivated',
  Indexing = 'Indexing',
}

export type TCtpSearchKeyword = {
  __typename?: 'SearchKeyword';
  suggestTokenizer?: TCtpMaybe<TCtpSuggestTokenizer>;
  text: TCtpScalars['String']['output'];
};

export type TCtpSearchKeywordArgument = {
  locale: TCtpScalars['Locale']['input'];
  searchKeyword: TCtpScalars['String']['input'];
};

export type TCtpSearchKeywordInput = {
  keywords: Array<TCtpSearchKeywordItemInput>;
  locale: TCtpScalars['Locale']['input'];
};

export type TCtpSearchKeywordItemInput = {
  suggestTokenizer?: TCtpInputMaybe<TCtpBaseSearchKeywordInput>;
  text: TCtpScalars['String']['input'];
};

export type TCtpSearchKeywordProductSearch = {
  __typename?: 'SearchKeywordProductSearch';
  suggestTokenizer?: TCtpMaybe<TCtpSuggestTokenizerProductSearch>;
  text: TCtpScalars['String']['output'];
};

export type TCtpSearchKeywords = {
  __typename?: 'SearchKeywords';
  locale: TCtpScalars['Locale']['output'];
  searchKeywords: Array<TCtpSearchKeyword>;
};

export type TCtpSearchKeywordsProductSearch = {
  __typename?: 'SearchKeywordsProductSearch';
  locale: TCtpScalars['Locale']['output'];
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
  createdAt: TCtpScalars['DateTime']['output'];
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  productSelection?: TCtpMaybe<TCtpProductSelection>;
  productSelectionRef: TCtpReference;
  variantExclusion?: TCtpMaybe<TCtpProductVariantExclusion>;
  variantSelection?: TCtpMaybe<TCtpProductVariantSelection>;
};

export type TCtpSelectionOfProductQueryResult = {
  __typename?: 'SelectionOfProductQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpSelectionOfProduct>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpSetApprovalFlowCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetApprovalFlowCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetApprovalRuleApprovers = {
  approvers: TCtpApproverHierarchyDraft;
};

export type TCtpSetApprovalRuleCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetApprovalRuleCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetApprovalRuleDescription = {
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetApprovalRuleKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetApprovalRuleName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpSetApprovalRulePredicate = {
  predicate: TCtpScalars['String']['input'];
};

export type TCtpSetApprovalRuleRequesters = {
  requesters: Array<TCtpRuleRequesterDraft>;
};

export type TCtpSetApprovalRuleStatus = {
  status: TCtpApprovalRuleStatus;
};

export type TCtpSetAssociateRoleCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetAssociateRoleCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetAssociateRoleName = {
  name?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetAssociateRolePermissions = {
  permissions?: TCtpInputMaybe<Array<TCtpPermission>>;
};

export type TCtpSetAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'SetAttributeDefinitionType';
  elementType: TCtpAttributeDefinitionType;
  name: TCtpScalars['String']['output'];
};

export type TCtpSetAttributeGroupAttributes = {
  attributes: Array<TCtpAttributeReferenceInput>;
};

export type TCtpSetAttributeGroupDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetAttributeGroupKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitAddressCustomField = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitAddressCustomType = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitAssociates = {
  associates?: TCtpInputMaybe<Array<TCtpAssociateDraft>>;
};

export type TCtpSetBusinessUnitContactEmail = {
  contactEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitDefaultBillingAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitDefaultShippingAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetBusinessUnitStoreMode = {
  storeMode?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  stores?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetBusinessUnitStores = {
  stores: Array<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartAnonymousId = {
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartBillingAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetCartBillingAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartBillingAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartBusinessUnit = {
  businessUnit: TCtpResourceIdentifierInput;
};

export type TCtpSetCartCountry = {
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
};

export type TCtpSetCartCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemCustomField = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemCustomType = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemShippingDetails = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpSetCartCustomLineItemTaxAmount = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  externalTaxAmount?: TCtpInputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomLineItemTaxRate = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomShippingMethod = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethodName: TCtpScalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomerEmail = {
  email?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartCustomerGroup = {
  customerGroup?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartCustomerId = {
  customerId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetCartDirectDiscounts = {
  discounts: Array<TCtpDirectDiscountDraft>;
};

export type TCtpSetCartDiscountCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartDiscountCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartDiscountDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCartDiscountKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartDiscountStores = {
  stores?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetCartDiscountValidFrom = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetCartDiscountValidFromAndUntil = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetCartDiscountValidUntil = {
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetCartItemShippingAddressCustomField = {
  addressKey: TCtpScalars['String']['input'];
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartItemShippingAddressCustomType = {
  addressKey: TCtpScalars['String']['input'];
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemCustomField = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemDistributionChannel = {
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemInventoryMode = {
  inventoryMode?: TCtpInputMaybe<TCtpInventoryMode>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemPrice = {
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemShippingDetails = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraft>;
};

export type TCtpSetCartLineItemSupplyChannel = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartLineItemTaxAmount = {
  externalTaxAmount?: TCtpInputMaybe<TCtpExternalTaxAmountDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemTaxRate = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLineItemTotalPrice = {
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartLocale = {
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpSetCartShippingAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetCartShippingAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartShippingAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartShippingCustomField = {
  name: TCtpScalars['String']['input'];
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartShippingCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartShippingMethod = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCartShippingMethodTaxAmount = {
  externalTaxAmount?: TCtpInputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartShippingMethodTaxRate = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCartShippingRateInput = {
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpSetCartTotalTax = {
  externalTaxPortions?: TCtpInputMaybe<Array<TCtpTaxPortionDraft>>;
  externalTotalGross?: TCtpInputMaybe<TCtpMoneyInput>;
};

export type TCtpSetCategoryAssetCustomField = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryAssetCustomType = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryAssetDescription = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryAssetKey = {
  assetId: TCtpScalars['String']['input'];
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryAssetSources = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sources?: TCtpInputMaybe<Array<TCtpAssetSourceInput>>;
};

export type TCtpSetCategoryAssetTags = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  tags?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

export type TCtpSetCategoryCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryExternalId = {
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCategoryMetaDescription = {
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryMetaKeywords = {
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetCategoryMetaTitle = {
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetChannelAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetChannelAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetChannelAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetChannelCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetChannelCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetChannelGeoLocation = {
  geoLocation?: TCtpInputMaybe<TCtpGeometryInput>;
};

export type TCtpSetChannelRoles = {
  roles: Array<TCtpChannelRole>;
};

export type TCtpSetCustomerAddressCustomField = {
  addressId: TCtpScalars['String']['input'];
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerAddressCustomType = {
  addressId: TCtpScalars['String']['input'];
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerAuthenticationMode = {
  authMode: TCtpAuthenticationMode;
  password?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerCompanyName = {
  companyName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerDateOfBirth = {
  dateOfBirth?: TCtpInputMaybe<TCtpScalars['Date']['input']>;
};

export type TCtpSetCustomerDefaultBillingAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerDefaultShippingAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerExternalId = {
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerFirstName = {
  firstName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerGroup = {
  customerGroup?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetCustomerGroupAssignments = {
  customerGroupAssignments: Array<TCtpCustomerGroupAssignmentDraft>;
};

export type TCtpSetCustomerGroupCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerGroupCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerGroupKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerLastName = {
  lastName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerLocale = {
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpSetCustomerMiddleName = {
  middleName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerNumber = {
  customerNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerSalutation = {
  salutation?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerStores = {
  stores: Array<TCtpResourceIdentifierInput>;
};

export type TCtpSetCustomerTitle = {
  title?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetCustomerVatId = {
  vatId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetDiscountCodeCartPredicate = {
  cartPredicate?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetDiscountCodeCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetDiscountCodeCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetDiscountCodeDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetDiscountCodeKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetDiscountCodeMaxApplications = {
  maxApplications?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpSetDiscountCodeMaxApplicationsPerCustomer = {
  maxApplicationsPerCustomer?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
};

export type TCtpSetDiscountCodeName = {
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetDiscountCodeValidFrom = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetDiscountCodeValidFromAndUntil = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetDiscountCodeValidUntil = {
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetExtensionKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetExtensionTimeoutInMs = {
  timeoutInMs?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetInventoryEntryCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetInventoryEntryCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetInventoryEntryExpectedDelivery = {
  expectedDelivery?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetInventoryEntryRestockableInDays = {
  restockableInDays?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetInventoryEntrySupplyChannel = {
  supplyChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetMyBusinessUnitAddressCustomField = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitAddressCustomType = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitContactEmail = {
  contactEmail?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitDefaultBillingAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyBusinessUnitDefaultShippingAddress = {
  addressId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  addressKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyCartShippingMethod = {
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetMyQuoteRequestCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetMyQuoteRequestCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderBillingAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetOrderBillingAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderBillingAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderCustomLineItemCustomField = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderCustomLineItemCustomType = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderCustomLineItemShippingDetails = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetOrderCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderCustomerEmail = {
  email?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderCustomerId = {
  customerId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderDeliveryAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderDeliveryAddressCustomField = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderDeliveryAddressCustomType = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderDeliveryCustomField = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderDeliveryCustomType = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderDeliveryItems = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  items: Array<TCtpDeliveryItemDraftType>;
};

export type TCtpSetOrderEditComment = {
  comment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderEditCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderEditCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderEditKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderEditStagedActions = {
  stagedActions: Array<TCtpStagedOrderUpdateAction>;
};

export type TCtpSetOrderItemShippingAddressCustomField = {
  addressKey: TCtpScalars['String']['input'];
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderItemShippingAddressCustomType = {
  addressKey: TCtpScalars['String']['input'];
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderLineItemCustomField = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderLineItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderLineItemShippingDetails = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetOrderLocale = {
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpSetOrderNumber = {
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderParcelCustomField = {
  name: TCtpScalars['String']['input'];
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderParcelCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderParcelItems = {
  items: Array<TCtpDeliveryItemDraftType>;
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderParcelMeasurements = {
  measurements?: TCtpInputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderParcelTrackingData = {
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  trackingData?: TCtpInputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpSetOrderPurchaseOrderNumber = {
  purchaseOrderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderReturnInfo = {
  items?: TCtpInputMaybe<Array<TCtpReturnInfoDraftType>>;
};

export type TCtpSetOrderReturnItemCustomField = {
  name: TCtpScalars['String']['input'];
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderReturnItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderReturnPaymentState = {
  paymentState: TCtpReturnPaymentState;
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderReturnShipmentState = {
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shipmentState: TCtpReturnShipmentState;
};

export type TCtpSetOrderShippingAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetOrderShippingAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderShippingAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderShippingCustomField = {
  name: TCtpScalars['String']['input'];
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderShippingCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetOrderStore = {
  store?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetPaymentAmountPaid = {
  amount?: TCtpInputMaybe<TCtpMoneyInput>;
};

export type TCtpSetPaymentAmountRefunded = {
  amount?: TCtpInputMaybe<TCtpMoneyInput>;
};

export type TCtpSetPaymentAnonymousId = {
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentAuthorization = {
  amount?: TCtpInputMaybe<TCtpMoneyInput>;
  until?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetPaymentCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentCustomer = {
  customer?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetPaymentExternalId = {
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentInterfaceId = {
  interfaceId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentMethodInfoInterface = {
  interface: TCtpScalars['String']['input'];
};

export type TCtpSetPaymentMethodInfoMethod = {
  method?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentMethodInfoName = {
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetPaymentStatusInterfaceCode = {
  interfaceCode?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentStatusInterfaceText = {
  interfaceText?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentTransactionCustomField = {
  name: TCtpScalars['String']['input'];
  transactionId: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetPaymentTransactionCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  transactionId: TCtpScalars['String']['input'];
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductAssetCustomField = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAssetCustomType = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAssetDescription = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAssetKey = {
  assetId: TCtpScalars['String']['input'];
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAssetSources = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sources?: TCtpInputMaybe<Array<TCtpAssetSourceInput>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAssetTags = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  tags?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAttribute = {
  name: TCtpScalars['String']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductAttributeInAllVariants = {
  name: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductCategoryOrderHint = {
  categoryId: TCtpScalars['String']['input'];
  orderHint?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductDiscountDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetProductDiscountKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductDiscountValidFrom = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetProductDiscountValidFromAndUntil = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetProductDiscountValidUntil = {
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetProductDiscountedPrice = {
  discounted?: TCtpInputMaybe<TCtpDiscountedProductPriceValueInput>;
  priceId: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductImageLabel = {
  imageUrl: TCtpScalars['String']['input'];
  label?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductMetaAttributes = {
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductMetaDescription = {
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductMetaKeywords = {
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductMetaTitle = {
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductPriceCustomField = {
  name: TCtpScalars['String']['input'];
  priceId: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductPriceCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  priceId: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductPriceKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  priceId: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductPriceMode = {
  priceMode?: TCtpInputMaybe<TCtpPriceMode>;
};

export type TCtpSetProductPrices = {
  prices: Array<TCtpProductPriceDataInput>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductSelectionCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductSelectionCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductSelectionKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductSelectionVariantExclusion = {
  product: TCtpResourceIdentifierInput;
  variantExclusion?: TCtpInputMaybe<TCtpProductVariantExclusionDraft>;
};

export type TCtpSetProductSelectionVariantSelection = {
  product: TCtpResourceIdentifierInput;
  variantSelection?: TCtpInputMaybe<TCtpProductVariantSelectionDraft>;
};

export type TCtpSetProductSku = {
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId: TCtpScalars['Int']['input'];
};

export type TCtpSetProductTailoringAssetCustomField = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetCustomType = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetDescription = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetKey = {
  assetId: TCtpScalars['String']['input'];
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetSources = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sources?: TCtpInputMaybe<Array<TCtpAssetSourceInput>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAssetTags = {
  assetId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  assetKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  tags?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAttribute = {
  name: TCtpScalars['String']['input'];
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringAttributeInAllVariants = {
  name: TCtpScalars['String']['input'];
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetProductTailoringDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringImageLabel = {
  imageUrl: TCtpScalars['String']['input'];
  label?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringImages = {
  images: Array<TCtpImageInput>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProductTailoringMetaAttributes = {
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringMetaDescription = {
  metaDescription?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringMetaKeywords = {
  metaKeywords?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringMetaTitle = {
  metaTitle?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringName = {
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTailoringSlug = {
  slug?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetProductTaxCategory = {
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetProductVariantKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetProjectSettingsExternalOAuth = {
  externalOAuth?: TCtpInputMaybe<TCtpExternalOAuthDraft>;
};

/** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
export type TCtpSetProjectSettingsMyBusinessUnitAssociateRoleOnCreation = {
  associateRole?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetProjectSettingsShippingRateInputType = {
  shippingRateInputType?: TCtpInputMaybe<TCtpShippingRateInputTypeInput>;
};

export type TCtpSetQuoteCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetQuoteCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetQuoteRequestCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetQuoteRequestCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetReviewAuthorName = {
  authorName?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetReviewCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetReviewCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetReviewCustomer = {
  customer?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetReviewKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetReviewLocale = {
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpSetReviewRating = {
  rating?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetReviewTarget = {
  target?: TCtpInputMaybe<TCtpTargetReferenceInput>;
};

export type TCtpSetReviewText = {
  text?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetReviewTitle = {
  title?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetSearchKeywords = {
  searchKeywords: Array<TCtpSearchKeywordInput>;
  staged?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
};

export type TCtpSetShippingMethodCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShippingMethodCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShippingMethodDescription = {
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShippingMethodKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShippingMethodLocalizedDescription = {
  localizedDescription?: TCtpInputMaybe<
    Array<TCtpLocalizedStringItemInputType>
  >;
};

export type TCtpSetShippingMethodLocalizedName = {
  localizedName?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShippingMethodPredicate = {
  predicate?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListAnonymousId = {
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListCustomer = {
  customer?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetShoppingListDeleteDaysAfterLastModification = {
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSetShoppingListDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShoppingListKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListLineItemCustomField = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListLineItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListSlug = {
  slug?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetShoppingListStore = {
  store?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetShoppingListTextLineItemCustomField = {
  name: TCtpScalars['String']['input'];
  textLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  textLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListTextLineItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  textLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  textLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetShoppingListTextLineItemDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  textLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  textLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderBillingAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetStagedOrderBillingAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderBillingAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBillingAddressCustomFieldOutput';
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderBillingAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderBillingAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBillingAddressCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderBillingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderBillingAddressOutput';
    address?: TCtpMaybe<TCtpAddressDraft>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCountry = {
  country?: TCtpInputMaybe<TCtpScalars['Country']['input']>;
};

export type TCtpSetStagedOrderCountryOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCountryOutput';
    country?: TCtpMaybe<TCtpScalars['Country']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomFieldOutput';
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderCustomLineItemCustomField = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemCustomFieldOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderCustomLineItemCustomType = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomLineItemShippingDetails = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetStagedOrderCustomLineItemShippingDetailsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemShippingDetailsOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingDetails?: TCtpMaybe<TCtpItemShippingDetailsDraftOutput>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomLineItemTaxAmount = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  externalTaxAmount?: TCtpInputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemTaxAmountOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemTaxAmountOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    externalTaxAmount?: TCtpMaybe<TCtpExternalTaxAmountDraftOutput>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomLineItemTaxRate = {
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomLineItemTaxRateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomLineItemTaxRateOutput';
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomShippingMethod = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethodName: TCtpScalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderCustomShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomShippingMethodOutput';
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodName: TCtpScalars['String']['output'];
    shippingRate: TCtpShippingRate;
    taxCategoryResId?: TCtpMaybe<TCtpResourceIdentifier>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomerEmail = {
  email?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomerEmailOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomerEmailOutput';
    email?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomerGroup = {
  customerGroup?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderCustomerGroupOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomerGroupOutput';
    customerGroupResId?: TCtpMaybe<TCtpCustomerGroupReferenceIdentifier>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderCustomerId = {
  customerId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderCustomerIdOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderCustomerIdOutput';
    customerId?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryAddressCustomField = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryAddressCustomFieldOutput';
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderDeliveryAddressCustomType = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryAddressCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryAddressOutput';
    address?: TCtpMaybe<TCtpAddressDraft>;
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryCustomField = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryCustomFieldOutput';
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderDeliveryCustomType = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderDeliveryCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderDeliveryItems = {
  deliveryId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  deliveryKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  items: Array<TCtpDeliveryItemDraftType>;
};

export type TCtpSetStagedOrderDeliveryItemsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDeliveryItemsOutput';
    deliveryId?: TCtpMaybe<TCtpScalars['String']['output']>;
    deliveryKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    items: Array<TCtpDeliveryItem>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderDirectDiscounts = {
  discounts: Array<TCtpDirectDiscountDraft>;
};

export type TCtpSetStagedOrderDirectDiscountsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderDirectDiscountsOutput';
    discounts: Array<TCtpDirectDiscountDraftOutput>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderItemShippingAddressCustomField = {
  addressKey: TCtpScalars['String']['input'];
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderItemShippingAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderItemShippingAddressCustomFieldOutput';
    addressKey: TCtpScalars['String']['output'];
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderItemShippingAddressCustomType = {
  addressKey: TCtpScalars['String']['input'];
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderItemShippingAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderItemShippingAddressCustomTypeOutput';
    addressKey: TCtpScalars['String']['output'];
    custom: TCtpCustomFieldsCommand;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemCustomField = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemCustomFieldOutput';
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderLineItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemDistributionChannel = {
  distributionChannel?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemDistributionChannelOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemDistributionChannelOutput';
    distributionChannelResId?: TCtpMaybe<TCtpChannelReferenceIdentifier>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemPrice = {
  externalPrice?: TCtpInputMaybe<TCtpBaseMoneyInput>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemPriceOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemPriceOutput';
    externalPrice?: TCtpMaybe<TCtpBaseMoney>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemShippingDetails = {
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingDetails?: TCtpInputMaybe<TCtpItemShippingDetailsDraftType>;
};

export type TCtpSetStagedOrderLineItemShippingDetailsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemShippingDetailsOutput';
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingDetails?: TCtpMaybe<TCtpItemShippingDetailsDraftOutput>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemTaxAmount = {
  externalTaxAmount?: TCtpInputMaybe<TCtpExternalTaxAmountDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemTaxAmountOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemTaxAmountOutput';
    externalTaxAmount?: TCtpMaybe<TCtpExternalTaxAmountDraftOutput>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemTaxRate = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemTaxRateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemTaxRateOutput';
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLineItemTotalPrice = {
  externalTotalPrice?: TCtpInputMaybe<TCtpExternalLineItemTotalPriceDraft>;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderLineItemTotalPriceOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLineItemTotalPriceOutput';
    externalTotalPrice?: TCtpMaybe<TCtpExternalLineItemTotalPrice>;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderLocale = {
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpSetStagedOrderLocaleOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderLocaleOutput';
    locale?: TCtpMaybe<TCtpScalars['Locale']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderOrderNumber = {
  orderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderOrderNumberOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderOrderNumberOutput';
    orderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderOrderTotalTax = {
  externalTaxPortions?: TCtpInputMaybe<Array<TCtpTaxPortionDraft>>;
  externalTotalGross?: TCtpInputMaybe<TCtpMoneyInput>;
};

export type TCtpSetStagedOrderOrderTotalTaxOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderOrderTotalTaxOutput';
    externalTaxPortions: Array<TCtpTaxPortion>;
    externalTotalGross?: TCtpMaybe<TCtpMoney>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelCustomField = {
  name: TCtpScalars['String']['input'];
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelCustomFieldOutput';
    name: TCtpScalars['String']['output'];
    parcelId?: TCtpMaybe<TCtpScalars['String']['output']>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderParcelCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    parcelId?: TCtpMaybe<TCtpScalars['String']['output']>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelItems = {
  items: Array<TCtpDeliveryItemDraftType>;
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelItemsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelItemsOutput';
    items: Array<TCtpDeliveryItem>;
    parcelId?: TCtpMaybe<TCtpScalars['String']['output']>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelMeasurements = {
  measurements?: TCtpInputMaybe<TCtpParcelMeasurementsDraftType>;
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderParcelMeasurementsOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelMeasurementsOutput';
    measurements?: TCtpMaybe<TCtpParcelMeasurements>;
    parcelId?: TCtpMaybe<TCtpScalars['String']['output']>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderParcelTrackingData = {
  parcelId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  parcelKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  trackingData?: TCtpInputMaybe<TCtpTrackingDataDraftType>;
};

export type TCtpSetStagedOrderParcelTrackingDataOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderParcelTrackingDataOutput';
    parcelId?: TCtpMaybe<TCtpScalars['String']['output']>;
    parcelKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    trackingData?: TCtpMaybe<TCtpTrackingData>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderPurchaseOrderNumber = {
  purchaseOrderNumber?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderPurchaseOrderNumberOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderPurchaseOrderNumberOutput';
    purchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnInfo = {
  items?: TCtpInputMaybe<Array<TCtpReturnInfoDraftType>>;
};

export type TCtpSetStagedOrderReturnInfoOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnInfoOutput';
    items: Array<TCtpReturnInfoDraftTypeOutput>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnItemCustomField = {
  name: TCtpScalars['String']['input'];
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderReturnItemCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnItemCustomFieldOutput';
    name: TCtpScalars['String']['output'];
    returnItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    returnItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderReturnItemCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderReturnItemCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnItemCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    returnItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    returnItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnPaymentState = {
  paymentState: TCtpReturnPaymentState;
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderReturnPaymentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnPaymentStateOutput';
    paymentState: TCtpReturnPaymentState;
    returnItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    returnItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderReturnShipmentState = {
  returnItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  returnItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  shipmentState: TCtpReturnShipmentState;
};

export type TCtpSetStagedOrderReturnShipmentStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderReturnShipmentStateOutput';
    returnItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    returnItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    shipmentState: TCtpReturnShipmentState;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddress = {
  address?: TCtpInputMaybe<TCtpAddressInput>;
};

export type TCtpSetStagedOrderShippingAddressAndCustomShippingMethod = {
  address: TCtpAddressInput;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethodName: TCtpScalars['String']['input'];
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderShippingAddressAndCustomShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressAndCustomShippingMethodOutput';
    address: TCtpAddressDraft;
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodName: TCtpScalars['String']['output'];
    shippingRate: TCtpShippingRate;
    taxCategoryResId?: TCtpMaybe<TCtpResourceIdentifier>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddressAndShippingMethod = {
  address: TCtpAddressInput;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderShippingAddressAndShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressAndShippingMethodOutput';
    address: TCtpAddressDraft;
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodResId?: TCtpMaybe<TCtpResourceIdentifier>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddressCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingAddressCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressCustomFieldOutput';
    name: TCtpScalars['String']['output'];
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderShippingAddressCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingAddressCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingAddressOutput';
    address?: TCtpMaybe<TCtpAddressDraft>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingCustomField = {
  name: TCtpScalars['String']['input'];
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingCustomFieldOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingCustomFieldOutput';
    name: TCtpScalars['String']['output'];
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
    value?: TCtpMaybe<TCtpScalars['Json']['output']>;
  };

export type TCtpSetStagedOrderShippingCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingCustomTypeOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingCustomTypeOutput';
    custom: TCtpCustomFieldsCommand;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingMethod = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderShippingMethodOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingMethodOutput';
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    shippingMethodResId?: TCtpMaybe<TCtpResourceIdentifier>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingMethodTaxAmount = {
  externalTaxAmount?: TCtpInputMaybe<TCtpExternalTaxAmountDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingMethodTaxAmountOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingMethodTaxAmountOutput';
    externalTaxAmount?: TCtpMaybe<TCtpExternalTaxAmountDraftOutput>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingMethodTaxRate = {
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  shippingKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedOrderShippingMethodTaxRateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingMethodTaxRateOutput';
    externalTaxRate?: TCtpMaybe<TCtpExternalTaxRateDraftOutput>;
    shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderShippingRateInput = {
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpSetStagedOrderShippingRateInputOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderShippingRateInputOutput';
    shippingRateInput?: TCtpMaybe<TCtpShippingRateInputDraftOutput>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedOrderStore = {
  store?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
};

export type TCtpSetStagedOrderStoreOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'SetStagedOrderStoreOutput';
    storeResId?: TCtpMaybe<TCtpResourceIdentifier>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpSetStagedQuoteCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedQuoteCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedQuoteSellerComment = {
  sellerComment?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStagedQuoteValidTo = {
  validTo?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetStandalonePriceCustomFields = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStandalonePriceDiscountedPrice = {
  discounted?: TCtpInputMaybe<TCtpDiscountedProductPriceValueInput>;
};

export type TCtpSetStandalonePriceKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStandalonePriceTiers = {
  tiers: Array<TCtpProductPriceTierInput>;
};

export type TCtpSetStandalonePriceValidFrom = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetStandalonePriceValidFromAndUntil = {
  validFrom?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetStandalonePriceValidUntil = {
  validUntil?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpSetStateDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetStateName = {
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetStateRoles = {
  roles: Array<TCtpStateRole>;
};

export type TCtpSetStateTransitions = {
  transitions?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetStoreCountries = {
  countries?: TCtpInputMaybe<Array<TCtpStoreCountryInput>>;
};

export type TCtpSetStoreCustomField = {
  name: TCtpScalars['String']['input'];
  value?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStoreCustomType = {
  fields?: TCtpInputMaybe<Array<TCtpCustomFieldInput>>;
  type?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  typeId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetStoreDistributionChannels = {
  distributionChannels?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetStoreLanguages = {
  languages?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
};

export type TCtpSetStoreName = {
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetStoreProductSelections = {
  productSelections?: TCtpInputMaybe<
    Array<TCtpProductSelectionSettingInActionInput>
  >;
};

export type TCtpSetStoreSupplyChannels = {
  supplyChannels?: TCtpInputMaybe<Array<TCtpResourceIdentifierInput>>;
};

export type TCtpSetSubscriptionChanges = {
  changes: Array<TCtpChangeSubscriptionInput>;
};

export type TCtpSetSubscriptionKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetSubscriptionMessages = {
  messages: Array<TCtpMessageSubscriptionInput>;
};

export type TCtpSetTaxCategoryKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetType = TCtpFieldType & {
  __typename?: 'SetType';
  elementType: TCtpFieldType;
  name: TCtpScalars['String']['output'];
};

export type TCtpSetTypeDescription = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetZoneDescription = {
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSetZoneKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export enum TCtpShipmentState {
  Backorder = 'Backorder',
  Delayed = 'Delayed',
  Delivered = 'Delivered',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped',
}

export type TCtpShipping = {
  __typename?: 'Shipping';
  shippingAddress?: TCtpMaybe<TCtpAddress>;
  shippingCustomFields?: TCtpMaybe<TCtpCustomFieldsType>;
  shippingInfo?: TCtpMaybe<TCtpShippingInfo>;
  shippingKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  shippingRateInput?: TCtpMaybe<TCtpShippingRateInput>;
};

export type TCtpShippingDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  deliveries?: TCtpInputMaybe<Array<TCtpDeliveryDraft>>;
  externalTaxRate?: TCtpInputMaybe<TCtpExternalTaxRateDraft>;
  key: TCtpScalars['String']['input'];
  shippingAddress: TCtpAddressInput;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  shippingRateInput?: TCtpInputMaybe<TCtpShippingRateInputDraft>;
};

export type TCtpShippingInfo = {
  __typename?: 'ShippingInfo';
  deliveries: Array<TCtpDelivery>;
  discountedPrice?: TCtpMaybe<TCtpDiscountedLineItemPrice>;
  price: TCtpMoney;
  shippingMethod?: TCtpMaybe<TCtpShippingMethod>;
  shippingMethodName: TCtpScalars['String']['output'];
  shippingMethodRef?: TCtpMaybe<TCtpReference>;
  shippingMethodState: TCtpShippingMethodState;
  shippingRate: TCtpShippingRate;
  taxCategory?: TCtpMaybe<TCtpTaxCategory>;
  taxCategoryRef?: TCtpMaybe<TCtpReference>;
  taxRate?: TCtpMaybe<TCtpTaxRate>;
  taxedPrice?: TCtpMaybe<TCtpTaxedItemPrice>;
};

export type TCtpShippingInfoImportDraft = {
  deliveries?: Array<TCtpDeliveryDraft>;
  discountedPrice?: TCtpInputMaybe<TCtpDiscountedLineItemPriceDraft>;
  price: TCtpMoneyInput;
  shippingMethod?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  shippingMethodName: TCtpScalars['String']['input'];
  shippingMethodState?: TCtpShippingMethodState;
  shippingRate: TCtpShippingRateDraft;
  taxCategory?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  taxRate?: TCtpInputMaybe<TCtpTaxRateInput>;
};

export type TCtpShippingMethod = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ShippingMethod';
    active: TCtpScalars['Boolean']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    id: TCtpScalars['String']['output'];
    isDefault: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    localizedDescription?: TCtpMaybe<TCtpScalars['String']['output']>;
    localizedDescriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    localizedName?: TCtpMaybe<TCtpScalars['String']['output']>;
    localizedNameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    name: TCtpScalars['String']['output'];
    predicate?: TCtpMaybe<TCtpScalars['String']['output']>;
    taxCategory?: TCtpMaybe<TCtpTaxCategory>;
    taxCategoryRef?: TCtpMaybe<TCtpReference>;
    version: TCtpScalars['Long']['output'];
    zoneRates: Array<TCtpZoneRate>;
  };

export type TCtpShippingMethod_LocalizedDescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShippingMethod_LocalizedNameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShippingMethodDraft = {
  active?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  /** The usage of parameter 'description' is deprecated in favor of using 'localizedDescription' */
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  isDefault: TCtpScalars['Boolean']['input'];
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  localizedDescription?: TCtpInputMaybe<
    Array<TCtpLocalizedStringItemInputType>
  >;
  localizedName?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  name: TCtpScalars['String']['input'];
  predicate?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  taxCategory: TCtpResourceIdentifierInput;
  zoneRates?: TCtpInputMaybe<Array<TCtpZoneRateDraft>>;
};

export type TCtpShippingMethodLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ShippingMethodLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpShippingMethodLimitsProjection = {
  __typename?: 'ShippingMethodLimitsProjection';
  total: TCtpShippingMethodLimitWithCurrent;
};

export type TCtpShippingMethodQueryResult = {
  __typename?: 'ShippingMethodQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpShippingMethod>;
  total: TCtpScalars['Long']['output'];
};

export enum TCtpShippingMethodState {
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will fail with error ShippingMethodDoesNotMatchCart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  MatchesCart = 'MatchesCart',
}

export type TCtpShippingMethodTargetDraft = {
  quantity: TCtpScalars['Long']['input'];
  shippingMethodKey: TCtpScalars['String']['input'];
};

export type TCtpShippingMethodTargetDraftOutput = {
  __typename?: 'ShippingMethodTargetDraftOutput';
  quantity: TCtpScalars['Long']['output'];
  shippingMethodKey: TCtpScalars['String']['output'];
};

export type TCtpShippingMethodTargetDraftType = {
  quantity: TCtpScalars['Long']['input'];
  shippingMethodKey: TCtpScalars['String']['input'];
};

export type TCtpShippingMethodUpdateAction = {
  addShippingRate?: TCtpInputMaybe<TCtpAddShippingMethodShippingRate>;
  addZone?: TCtpInputMaybe<TCtpAddShippingMethodZone>;
  changeActive?: TCtpInputMaybe<TCtpChangeShippingMethodActive>;
  changeIsDefault?: TCtpInputMaybe<TCtpChangeShippingMethodIsDefault>;
  changeName?: TCtpInputMaybe<TCtpChangeShippingMethodName>;
  changeTaxCategory?: TCtpInputMaybe<TCtpChangeShippingMethodTaxCategory>;
  removeShippingRate?: TCtpInputMaybe<TCtpRemoveShippingMethodShippingRate>;
  removeZone?: TCtpInputMaybe<TCtpRemoveShippingMethodZone>;
  setCustomField?: TCtpInputMaybe<TCtpSetShippingMethodCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetShippingMethodCustomType>;
  /** This action is deprecated in favor of using 'setLocalizedDescription' */
  setDescription?: TCtpInputMaybe<TCtpSetShippingMethodDescription>;
  setKey?: TCtpInputMaybe<TCtpSetShippingMethodKey>;
  setLocalizedDescription?: TCtpInputMaybe<TCtpSetShippingMethodLocalizedDescription>;
  setLocalizedName?: TCtpInputMaybe<TCtpSetShippingMethodLocalizedName>;
  setPredicate?: TCtpInputMaybe<TCtpSetShippingMethodPredicate>;
};

/** A field to retrieve available shipping methods for a cart. */
export type TCtpShippingMethodsByCartInterface = {
  shippingMethodsByCart: Array<TCtpShippingMethod>;
};

/** A field to retrieve available shipping methods for a cart. */
export type TCtpShippingMethodsByCartInterface_ShippingMethodsByCartArgs = {
  id: TCtpScalars['String']['input'];
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
  freeAbove?: TCtpMaybe<TCtpMoney>;
  isMatching?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  price: TCtpMoney;
  tiers: Array<TCtpShippingRatePriceTier>;
};

export type TCtpShippingRateCartClassificationPriceTier =
  TCtpShippingRatePriceTier & {
    __typename?: 'ShippingRateCartClassificationPriceTier';
    isMatching?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
    price: TCtpMoney;
    type: TCtpScalars['String']['output'];
    value: TCtpScalars['String']['output'];
  };

export type TCtpShippingRateCartScorePriceTier = TCtpShippingRatePriceTier & {
  __typename?: 'ShippingRateCartScorePriceTier';
  isMatching?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  price?: TCtpMaybe<TCtpMoney>;
  priceFunction?: TCtpMaybe<TCtpPriceFunction>;
  score: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingRateCartValuePriceTier = TCtpShippingRatePriceTier & {
  __typename?: 'ShippingRateCartValuePriceTier';
  isMatching?: TCtpMaybe<TCtpScalars['Boolean']['output']>;
  minimumCentAmount: TCtpScalars['Int']['output'];
  price: TCtpMoney;
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingRateDraft = {
  freeAbove?: TCtpInputMaybe<TCtpMoneyDraft>;
  price: TCtpMoneyDraft;
  tiers?: TCtpInputMaybe<Array<TCtpShippingRatePriceTierDraft>>;
};

export type TCtpShippingRateInput = {
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingRateInputDraft = {
  Classification?: TCtpInputMaybe<TCtpClassificationShippingRateInputDraft>;
  Score?: TCtpInputMaybe<TCtpScoreShippingRateInputDraft>;
};

export type TCtpShippingRateInputDraftOutput = {
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingRateInputLocalizedEnumValue = {
  __typename?: 'ShippingRateInputLocalizedEnumValue';
  key: TCtpScalars['String']['output'];
  label?: TCtpMaybe<TCtpScalars['String']['output']>;
  labelAllLocales: Array<TCtpLocalizedString>;
};

export type TCtpShippingRateInputLocalizedEnumValue_LabelArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShippingRateInputType = {
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingRateInputTypeInput = {
  CartClassification?: TCtpInputMaybe<TCtpCartClassificationInput>;
  CartScore?: TCtpInputMaybe<TCtpCartScoreInput>;
  CartValue?: TCtpInputMaybe<TCtpCartValueInput>;
};

export type TCtpShippingRatePriceTier = {
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingRatePriceTierCartClassificationDraft = {
  price: TCtpMoneyDraft;
  value: TCtpScalars['String']['input'];
};

export type TCtpShippingRatePriceTierCartScoreDraft = {
  price?: TCtpInputMaybe<TCtpMoneyDraft>;
  priceFunction?: TCtpInputMaybe<TCtpPriceFunctionDraft>;
  score: TCtpScalars['Int']['input'];
};

export type TCtpShippingRatePriceTierCartValueDraft = {
  minimumCentAmount: TCtpScalars['Int']['input'];
  price: TCtpMoneyDraft;
};

export type TCtpShippingRatePriceTierDraft = {
  CartClassification?: TCtpInputMaybe<TCtpShippingRatePriceTierCartClassificationDraft>;
  CartScore?: TCtpInputMaybe<TCtpShippingRatePriceTierCartScoreDraft>;
  CartValue?: TCtpInputMaybe<TCtpShippingRatePriceTierCartValueDraft>;
};

export type TCtpShippingTarget = TCtpCartDiscountTarget & {
  __typename?: 'ShippingTarget';
  type: TCtpScalars['String']['output'];
};

export type TCtpShippingTargetDraft = {
  addressKey: TCtpScalars['String']['input'];
  quantity: TCtpScalars['Long']['input'];
  shippingMethodKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpShippingTargetDraftType = {
  addressKey: TCtpScalars['String']['input'];
  quantity: TCtpScalars['Long']['input'];
  shippingMethodKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpShippingTargetInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpShoppingList = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'ShoppingList';
    anonymousId?: TCtpMaybe<TCtpScalars['String']['output']>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    customer?: TCtpMaybe<TCtpCustomer>;
    customerRef?: TCtpMaybe<TCtpReference>;
    deleteDaysAfterLastModification?: TCtpMaybe<TCtpScalars['Int']['output']>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    lineItems: Array<TCtpShoppingListLineItem>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    slug?: TCtpMaybe<TCtpScalars['String']['output']>;
    slugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    store?: TCtpMaybe<TCtpStore>;
    storeRef?: TCtpMaybe<TCtpKeyReference>;
    textLineItems: Array<TCtpTextLineItem>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpShoppingList_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShoppingList_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShoppingList_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShoppingListDraft = {
  anonymousId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  customer?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItems?: TCtpInputMaybe<Array<TCtpShoppingListLineItemDraft>>;
  name: Array<TCtpLocalizedStringItemInputType>;
  slug?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  textLineItems?: TCtpInputMaybe<Array<TCtpTextLineItemDraft>>;
};

export type TCtpShoppingListLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ShoppingListLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpShoppingListLimitsProjection = {
  __typename?: 'ShoppingListLimitsProjection';
  lineItems: TCtpLimit;
  textLineItems: TCtpLimit;
  total: TCtpShoppingListLimitWithCurrent;
};

export type TCtpShoppingListLineItem = {
  __typename?: 'ShoppingListLineItem';
  addedAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  deactivatedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  productId: TCtpScalars['String']['output'];
  productSlug?: TCtpMaybe<TCtpScalars['String']['output']>;
  productSlugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  productType: TCtpProductTypeDefinition;
  productTypeRef: TCtpReference;
  quantity: TCtpScalars['Int']['output'];
  variant?: TCtpMaybe<TCtpProductVariant>;
  variantId?: TCtpMaybe<TCtpScalars['Int']['output']>;
};

export type TCtpShoppingListLineItem_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShoppingListLineItem_ProductSlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpShoppingListLineItemDraft = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  productId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sku?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  variantId?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type TCtpShoppingListQueryInterface = {
  shoppingList?: TCtpMaybe<TCtpShoppingList>;
  shoppingLists: TCtpShoppingListQueryResult;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type TCtpShoppingListQueryInterface_ShoppingListArgs = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Fields to access shopping lists. Includes direct access to a single list and searching for shopping lists. */
export type TCtpShoppingListQueryInterface_ShoppingListsArgs = {
  limit?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  offset?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
  sort?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  where?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpShoppingListQueryResult = {
  __typename?: 'ShoppingListQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpShoppingList>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpShoppingListUpdateAction = {
  addLineItem?: TCtpInputMaybe<TCtpAddShoppingListLineItem>;
  addTextLineItem?: TCtpInputMaybe<TCtpAddShoppingListTextLineItem>;
  changeLineItemQuantity?: TCtpInputMaybe<TCtpChangeShoppingListLineItemQuantity>;
  changeLineItemsOrder?: TCtpInputMaybe<TCtpChangeShoppingListLineItemsOrder>;
  changeName?: TCtpInputMaybe<TCtpChangeShoppingListName>;
  changeTextLineItemName?: TCtpInputMaybe<TCtpChangeShoppingListTextLineItemName>;
  changeTextLineItemQuantity?: TCtpInputMaybe<TCtpChangeShoppingListTextLineItemQuantity>;
  changeTextLineItemsOrder?: TCtpInputMaybe<TCtpChangeShoppingListTextLineItemsOrder>;
  removeLineItem?: TCtpInputMaybe<TCtpRemoveShoppingListLineItem>;
  removeTextLineItem?: TCtpInputMaybe<TCtpRemoveShoppingListTextLineItem>;
  setAnonymousId?: TCtpInputMaybe<TCtpSetShoppingListAnonymousId>;
  setCustomField?: TCtpInputMaybe<TCtpSetShoppingListCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetShoppingListCustomType>;
  setCustomer?: TCtpInputMaybe<TCtpSetShoppingListCustomer>;
  setDeleteDaysAfterLastModification?: TCtpInputMaybe<TCtpSetShoppingListDeleteDaysAfterLastModification>;
  setDescription?: TCtpInputMaybe<TCtpSetShoppingListDescription>;
  setKey?: TCtpInputMaybe<TCtpSetShoppingListKey>;
  setLineItemCustomField?: TCtpInputMaybe<TCtpSetShoppingListLineItemCustomField>;
  setLineItemCustomType?: TCtpInputMaybe<TCtpSetShoppingListLineItemCustomType>;
  setSlug?: TCtpInputMaybe<TCtpSetShoppingListSlug>;
  setStore?: TCtpInputMaybe<TCtpSetShoppingListStore>;
  setTextLineItemCustomField?: TCtpInputMaybe<TCtpSetShoppingListTextLineItemCustomField>;
  setTextLineItemCustomType?: TCtpInputMaybe<TCtpSetShoppingListTextLineItemCustomType>;
  setTextLineItemDescription?: TCtpInputMaybe<TCtpSetShoppingListTextLineItemDescription>;
};

export type TCtpShoppingListsConfiguration = {
  __typename?: 'ShoppingListsConfiguration';
  deleteDaysAfterLastModification?: TCtpMaybe<TCtpScalars['Int']['output']>;
};

export type TCtpShoppingListsConfigurationInput = {
  deleteDaysAfterLastModification?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpSignUpInMyBusinessUnitDraft = {
  associateRoleAssignments: Array<TCtpAssociateRoleAssignmentDraft>;
  businessUnit: TCtpResourceIdentifierInput;
  customer: TCtpCustomerSignUpDraft;
  version: TCtpScalars['Long']['input'];
};

export type TCtpSimpleAttributeTypeDraft = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpSimpleFieldTypeDraft = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

/** Describes how this discount interacts with other discounts */
export enum TCtpStackingMode {
  /** Default. Continue applying other matching discounts after applying this one. */
  Stacking = 'Stacking',
  /** Don’t apply any more matching discounts after this one. */
  StopAfterThisDiscount = 'StopAfterThisDiscount',
}

export type TCtpStagedOrderUpdateAction = {
  addCustomLineItem?: TCtpInputMaybe<TCtpAddStagedOrderCustomLineItem>;
  addDelivery?: TCtpInputMaybe<TCtpAddStagedOrderDelivery>;
  addDiscountCode?: TCtpInputMaybe<TCtpAddStagedOrderDiscountCode>;
  addItemShippingAddress?: TCtpInputMaybe<TCtpAddStagedOrderItemShippingAddress>;
  addLineItem?: TCtpInputMaybe<TCtpAddStagedOrderLineItem>;
  addParcelToDelivery?: TCtpInputMaybe<TCtpAddStagedOrderParcelToDelivery>;
  addPayment?: TCtpInputMaybe<TCtpAddStagedOrderPayment>;
  addReturnInfo?: TCtpInputMaybe<TCtpAddStagedOrderReturnInfo>;
  addShoppingList?: TCtpInputMaybe<TCtpAddStagedOrderShoppingList>;
  changeCustomLineItemMoney?: TCtpInputMaybe<TCtpChangeStagedOrderCustomLineItemMoney>;
  changeCustomLineItemQuantity?: TCtpInputMaybe<TCtpChangeStagedOrderCustomLineItemQuantity>;
  changeLineItemQuantity?: TCtpInputMaybe<TCtpChangeStagedOrderLineItemQuantity>;
  changeOrderState?: TCtpInputMaybe<TCtpChangeStagedOrderOrderState>;
  changePaymentState?: TCtpInputMaybe<TCtpChangeStagedOrderPaymentState>;
  changeShipmentState?: TCtpInputMaybe<TCtpChangeStagedOrderShipmentState>;
  changeTaxCalculationMode?: TCtpInputMaybe<TCtpChangeStagedOrderTaxCalculationMode>;
  changeTaxMode?: TCtpInputMaybe<TCtpChangeStagedOrderTaxMode>;
  changeTaxRoundingMode?: TCtpInputMaybe<TCtpChangeStagedOrderTaxRoundingMode>;
  importCustomLineItemState?: TCtpInputMaybe<TCtpImportStagedOrderCustomLineItemState>;
  importLineItemState?: TCtpInputMaybe<TCtpImportStagedOrderLineItemState>;
  removeCustomLineItem?: TCtpInputMaybe<TCtpRemoveStagedOrderCustomLineItem>;
  removeDelivery?: TCtpInputMaybe<TCtpRemoveStagedOrderDelivery>;
  removeDiscountCode?: TCtpInputMaybe<TCtpRemoveStagedOrderDiscountCode>;
  removeItemShippingAddress?: TCtpInputMaybe<TCtpRemoveStagedOrderItemShippingAddress>;
  removeLineItem?: TCtpInputMaybe<TCtpRemoveStagedOrderLineItem>;
  removeParcelFromDelivery?: TCtpInputMaybe<TCtpRemoveStagedOrderParcelFromDelivery>;
  removePayment?: TCtpInputMaybe<TCtpRemoveStagedOrderPayment>;
  setBillingAddress?: TCtpInputMaybe<TCtpSetStagedOrderBillingAddress>;
  setBillingAddressCustomField?: TCtpInputMaybe<TCtpSetStagedOrderBillingAddressCustomField>;
  setBillingAddressCustomType?: TCtpInputMaybe<TCtpSetStagedOrderBillingAddressCustomType>;
  setCountry?: TCtpInputMaybe<TCtpSetStagedOrderCountry>;
  setCustomField?: TCtpInputMaybe<TCtpSetStagedOrderCustomField>;
  setCustomLineItemCustomField?: TCtpInputMaybe<TCtpSetStagedOrderCustomLineItemCustomField>;
  setCustomLineItemCustomType?: TCtpInputMaybe<TCtpSetStagedOrderCustomLineItemCustomType>;
  setCustomLineItemShippingDetails?: TCtpInputMaybe<TCtpSetStagedOrderCustomLineItemShippingDetails>;
  setCustomLineItemTaxAmount?: TCtpInputMaybe<TCtpSetStagedOrderCustomLineItemTaxAmount>;
  setCustomLineItemTaxRate?: TCtpInputMaybe<TCtpSetStagedOrderCustomLineItemTaxRate>;
  setCustomShippingMethod?: TCtpInputMaybe<TCtpSetStagedOrderCustomShippingMethod>;
  setCustomType?: TCtpInputMaybe<TCtpSetStagedOrderCustomType>;
  setCustomerEmail?: TCtpInputMaybe<TCtpSetStagedOrderCustomerEmail>;
  setCustomerGroup?: TCtpInputMaybe<TCtpSetStagedOrderCustomerGroup>;
  setCustomerId?: TCtpInputMaybe<TCtpSetStagedOrderCustomerId>;
  setDeliveryAddress?: TCtpInputMaybe<TCtpSetStagedOrderDeliveryAddress>;
  setDeliveryAddressCustomField?: TCtpInputMaybe<TCtpSetStagedOrderDeliveryAddressCustomField>;
  setDeliveryAddressCustomType?: TCtpInputMaybe<TCtpSetStagedOrderDeliveryAddressCustomType>;
  setDeliveryCustomField?: TCtpInputMaybe<TCtpSetStagedOrderDeliveryCustomField>;
  setDeliveryCustomType?: TCtpInputMaybe<TCtpSetStagedOrderDeliveryCustomType>;
  setDeliveryItems?: TCtpInputMaybe<TCtpSetStagedOrderDeliveryItems>;
  setDirectDiscounts?: TCtpInputMaybe<TCtpSetStagedOrderDirectDiscounts>;
  setItemShippingAddressCustomField?: TCtpInputMaybe<TCtpSetStagedOrderItemShippingAddressCustomField>;
  setItemShippingAddressCustomType?: TCtpInputMaybe<TCtpSetStagedOrderItemShippingAddressCustomType>;
  setLineItemCustomField?: TCtpInputMaybe<TCtpSetStagedOrderLineItemCustomField>;
  setLineItemCustomType?: TCtpInputMaybe<TCtpSetStagedOrderLineItemCustomType>;
  setLineItemDistributionChannel?: TCtpInputMaybe<TCtpSetStagedOrderLineItemDistributionChannel>;
  setLineItemPrice?: TCtpInputMaybe<TCtpSetStagedOrderLineItemPrice>;
  setLineItemShippingDetails?: TCtpInputMaybe<TCtpSetStagedOrderLineItemShippingDetails>;
  setLineItemTaxAmount?: TCtpInputMaybe<TCtpSetStagedOrderLineItemTaxAmount>;
  setLineItemTaxRate?: TCtpInputMaybe<TCtpSetStagedOrderLineItemTaxRate>;
  setLineItemTotalPrice?: TCtpInputMaybe<TCtpSetStagedOrderLineItemTotalPrice>;
  setLocale?: TCtpInputMaybe<TCtpSetStagedOrderLocale>;
  setOrderNumber?: TCtpInputMaybe<TCtpSetStagedOrderOrderNumber>;
  setOrderTotalTax?: TCtpInputMaybe<TCtpSetStagedOrderOrderTotalTax>;
  setParcelCustomField?: TCtpInputMaybe<TCtpSetStagedOrderParcelCustomField>;
  setParcelCustomType?: TCtpInputMaybe<TCtpSetStagedOrderParcelCustomType>;
  setParcelItems?: TCtpInputMaybe<TCtpSetStagedOrderParcelItems>;
  setParcelMeasurements?: TCtpInputMaybe<TCtpSetStagedOrderParcelMeasurements>;
  setParcelTrackingData?: TCtpInputMaybe<TCtpSetStagedOrderParcelTrackingData>;
  setPurchaseOrderNumber?: TCtpInputMaybe<TCtpSetStagedOrderPurchaseOrderNumber>;
  setReturnInfo?: TCtpInputMaybe<TCtpSetStagedOrderReturnInfo>;
  setReturnItemCustomField?: TCtpInputMaybe<TCtpSetStagedOrderReturnItemCustomField>;
  setReturnItemCustomType?: TCtpInputMaybe<TCtpSetStagedOrderReturnItemCustomType>;
  setReturnPaymentState?: TCtpInputMaybe<TCtpSetStagedOrderReturnPaymentState>;
  setReturnShipmentState?: TCtpInputMaybe<TCtpSetStagedOrderReturnShipmentState>;
  setShippingAddress?: TCtpInputMaybe<TCtpSetStagedOrderShippingAddress>;
  setShippingAddressAndCustomShippingMethod?: TCtpInputMaybe<TCtpSetStagedOrderShippingAddressAndCustomShippingMethod>;
  setShippingAddressAndShippingMethod?: TCtpInputMaybe<TCtpSetStagedOrderShippingAddressAndShippingMethod>;
  setShippingAddressCustomField?: TCtpInputMaybe<TCtpSetStagedOrderShippingAddressCustomField>;
  setShippingAddressCustomType?: TCtpInputMaybe<TCtpSetStagedOrderShippingAddressCustomType>;
  setShippingCustomField?: TCtpInputMaybe<TCtpSetStagedOrderShippingCustomField>;
  setShippingCustomType?: TCtpInputMaybe<TCtpSetStagedOrderShippingCustomType>;
  setShippingMethod?: TCtpInputMaybe<TCtpSetStagedOrderShippingMethod>;
  setShippingMethodTaxAmount?: TCtpInputMaybe<TCtpSetStagedOrderShippingMethodTaxAmount>;
  setShippingMethodTaxRate?: TCtpInputMaybe<TCtpSetStagedOrderShippingMethodTaxRate>;
  setShippingRateInput?: TCtpInputMaybe<TCtpSetStagedOrderShippingRateInput>;
  setStore?: TCtpInputMaybe<TCtpSetStagedOrderStore>;
  transitionCustomLineItemState?: TCtpInputMaybe<TCtpTransitionStagedOrderCustomLineItemState>;
  transitionLineItemState?: TCtpInputMaybe<TCtpTransitionStagedOrderLineItemState>;
  transitionState?: TCtpInputMaybe<TCtpTransitionStagedOrderState>;
  updateItemShippingAddress?: TCtpInputMaybe<TCtpUpdateStagedOrderItemShippingAddress>;
  updateSyncInfo?: TCtpInputMaybe<TCtpUpdateStagedOrderSyncInfo>;
};

export type TCtpStagedOrderUpdateActionOutput = {
  type: TCtpScalars['String']['output'];
};

export type TCtpStagedPriceDraft = {
  value: TCtpBaseMoneyInput;
};

export type TCtpStagedQuote = TCtpVersioned & {
  __typename?: 'StagedQuote';
  businessUnit?: TCtpMaybe<TCtpBusinessUnit>;
  businessUnitRef?: TCtpMaybe<TCtpKeyReference>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customer?: TCtpMaybe<TCtpCustomer>;
  customerRef?: TCtpMaybe<TCtpReference>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  purchaseOrderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  quotationCart?: TCtpMaybe<TCtpCart>;
  quotationCartRef: TCtpReference;
  quoteRequest?: TCtpMaybe<TCtpQuoteRequest>;
  quoteRequestRef: TCtpReference;
  sellerComment?: TCtpMaybe<TCtpScalars['String']['output']>;
  stagedQuoteState: TCtpStagedQuoteState;
  state?: TCtpMaybe<TCtpState>;
  stateRef?: TCtpMaybe<TCtpReference>;
  store?: TCtpMaybe<TCtpStore>;
  storeRef?: TCtpMaybe<TCtpKeyReference>;
  validTo?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpStagedQuoteCreated = TCtpMessagePayload & {
  __typename?: 'StagedQuoteCreated';
  stagedQuote: TCtpStagedQuote;
  type: TCtpScalars['String']['output'];
};

export type TCtpStagedQuoteDeleted = TCtpMessagePayload & {
  __typename?: 'StagedQuoteDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpStagedQuoteDraft = {
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quoteRequest?: TCtpInputMaybe<TCtpResourceIdentifierInput>;
  quoteRequestStateToAccepted?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  quoteRequestVersion?: TCtpInputMaybe<TCtpScalars['Long']['input']>;
  state?: TCtpInputMaybe<TCtpReferenceInput>;
};

export type TCtpStagedQuoteQueryResult = {
  __typename?: 'StagedQuoteQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpStagedQuote>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpStagedQuoteSellerCommentSet = TCtpMessagePayload & {
  __typename?: 'StagedQuoteSellerCommentSet';
  sellerComment?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
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
  type: TCtpScalars['String']['output'];
};

export type TCtpStagedQuoteStateTransition = TCtpMessagePayload & {
  __typename?: 'StagedQuoteStateTransition';
  force: TCtpScalars['Boolean']['output'];
  oldState?: TCtpMaybe<TCtpState>;
  oldStateRef?: TCtpMaybe<TCtpReference>;
  state?: TCtpMaybe<TCtpState>;
  stateRef: TCtpReference;
  type: TCtpScalars['String']['output'];
};

export type TCtpStagedQuoteUpdateAction = {
  changeStagedQuoteState?: TCtpInputMaybe<TCtpChangeStagedQuoteState>;
  setCustomField?: TCtpInputMaybe<TCtpSetStagedQuoteCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetStagedQuoteCustomType>;
  setSellerComment?: TCtpInputMaybe<TCtpSetStagedQuoteSellerComment>;
  setValidTo?: TCtpInputMaybe<TCtpSetStagedQuoteValidTo>;
  transitionState?: TCtpInputMaybe<TCtpTransitionStagedQuoteState>;
};

export type TCtpStagedQuoteValidToSet = TCtpMessagePayload & {
  __typename?: 'StagedQuoteValidToSet';
  type: TCtpScalars['String']['output'];
  validTo?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
};

export type TCtpStagedStandalonePrice = {
  __typename?: 'StagedStandalonePrice';
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  value: TCtpBaseMoney;
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
  active: TCtpScalars['Boolean']['output'];
  channel?: TCtpMaybe<TCtpChannel>;
  /** Product distribution Channel for which this Price is valid. */
  channelRef?: TCtpMaybe<TCtpReference>;
  /** Country for which this Price is valid. */
  country?: TCtpMaybe<TCtpScalars['Country']['output']>;
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  /** Custom Fields for the StandalonePrice. */
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  customerGroup?: TCtpMaybe<TCtpCustomerGroup>;
  /** CustomerGroup Reference for which this Price is valid. */
  customerGroupRef?: TCtpMaybe<TCtpReference>;
  /** Set if a matching ProductDiscount exists. */
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  expiresAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  /** Unique identifier of the StandalonePrice. */
  id: TCtpScalars['String']['output'];
  /** User-defined unique identifier of the StandalonePrice. */
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  /** SKU of the ProductVariant to which this Price is associated. */
  sku: TCtpScalars['String']['output'];
  /** Staged changes of the StandalonePrice. Only present if the StandalonePrice has some changes staged. */
  staged?: TCtpMaybe<TCtpStagedStandalonePrice>;
  /**
   * Price tiers if any are defined.
   * If `discounted` is present, the tiered Price is ignored for a Product Variant.
   */
  tiers?: TCtpMaybe<Array<TCtpProductPriceTier>>;
  /** Date from which the Price is valid. */
  validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  /** Date until the Price is valid. */
  validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  /** Money value of this Price. */
  value: TCtpBaseMoney;
  /** Current version of the StandalonePrice. */
  version: TCtpScalars['Long']['output'];
};

export type TCtpStandalonePriceActiveChanged = TCtpMessagePayload & {
  __typename?: 'StandalonePriceActiveChanged';
  active: TCtpScalars['Boolean']['output'];
  oldActive: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceCreated = TCtpMessagePayload & {
  __typename?: 'StandalonePriceCreated';
  standalonePrice: TCtpStandalonePrice;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceDeleted = TCtpMessagePayload & {
  __typename?: 'StandalonePriceDeleted';
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceDiscountSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceDiscountSet';
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceExpiresAtSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceExpiresAtSet';
  expiresAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceExternalDiscountSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceExternalDiscountSet';
  discounted?: TCtpMaybe<TCtpDiscountedProductPriceValue>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceKeySet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceKeySet';
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  oldKey?: TCtpMaybe<TCtpScalars['String']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceQueryResult = {
  __typename?: 'StandalonePriceQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpStandalonePrice>;
  total: TCtpScalars['Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type TCtpStandalonePriceSearchConfiguration = {
  __typename?: 'StandalonePriceSearchConfiguration';
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
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
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceStagedChangesRemoved = TCtpMessagePayload & {
  __typename?: 'StandalonePriceStagedChangesRemoved';
  stagedChanges?: TCtpMaybe<TCtpStagedStandalonePrice>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceTierAdded = TCtpMessagePayload & {
  __typename?: 'StandalonePriceTierAdded';
  tier: TCtpProductPriceTier;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceTierRemoved = TCtpMessagePayload & {
  __typename?: 'StandalonePriceTierRemoved';
  tier: TCtpProductPriceTier;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceTiersSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceTiersSet';
  previousTiers: Array<TCtpProductPriceTier>;
  tiers: Array<TCtpProductPriceTier>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStandalonePriceUpdateAction = {
  addPriceTier?: TCtpInputMaybe<TCtpAddStandalonePriceTier>;
  applyStagedChanges?: TCtpInputMaybe<TCtpApplyStagedChanges>;
  changeActive?: TCtpInputMaybe<TCtpChangeStandalonePriceActive>;
  changeValue?: TCtpInputMaybe<TCtpChangeStandalonePriceValue>;
  removePriceTier?: TCtpInputMaybe<TCtpRemoveStandalonePriceTier>;
  removeStagedChanges?: TCtpInputMaybe<TCtpRemoveStagedChanges>;
  setCustomField?: TCtpInputMaybe<TCtpSetStandalonePriceCustomFields>;
  setCustomType?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  setDiscountedPrice?: TCtpInputMaybe<TCtpSetStandalonePriceDiscountedPrice>;
  setKey?: TCtpInputMaybe<TCtpSetStandalonePriceKey>;
  setPriceTiers?: TCtpInputMaybe<TCtpSetStandalonePriceTiers>;
  setValidFrom?: TCtpInputMaybe<TCtpSetStandalonePriceValidFrom>;
  setValidFromAndUntil?: TCtpInputMaybe<TCtpSetStandalonePriceValidFromAndUntil>;
  setValidUntil?: TCtpInputMaybe<TCtpSetStandalonePriceValidUntil>;
};

export type TCtpStandalonePriceValidFromAndUntilSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValidFromAndUntilSet';
  previousValidFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  previousValidUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  type: TCtpScalars['String']['output'];
  validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
};

export type TCtpStandalonePriceValidFromSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValidFromSet';
  previousValidFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  type: TCtpScalars['String']['output'];
  validFrom?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
};

export type TCtpStandalonePriceValidUntilSet = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValidUntilSet';
  previousValidUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  type: TCtpScalars['String']['output'];
  validUntil?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
};

export type TCtpStandalonePriceValueChanged = TCtpMessagePayload & {
  __typename?: 'StandalonePriceValueChanged';
  oldValue?: TCtpMaybe<TCtpBaseMoney>;
  staged: TCtpScalars['Boolean']['output'];
  type: TCtpScalars['String']['output'];
  value: TCtpBaseMoney;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type TCtpState = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'State';
    builtIn: TCtpScalars['Boolean']['output'];
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    id: TCtpScalars['String']['output'];
    initial: TCtpScalars['Boolean']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    roles: Array<TCtpStateRole>;
    transitions?: TCtpMaybe<Array<TCtpState>>;
    transitionsRef?: TCtpMaybe<Array<TCtpReference>>;
    type: TCtpStateType;
    version: TCtpScalars['Long']['output'];
  };

/** [State](https://docs.commercetools.com/api/projects/states) */
export type TCtpState_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type TCtpState_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpStateDraft = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  initial?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  key: TCtpScalars['String']['input'];
  name?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  roles?: TCtpInputMaybe<Array<TCtpStateRole>>;
  transitions?: TCtpInputMaybe<Array<TCtpReferenceInput>>;
  type: TCtpStateType;
};

export type TCtpStateQueryResult = {
  __typename?: 'StateQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpState>;
  total: TCtpScalars['Long']['output'];
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
  ReviewState = 'ReviewState',
  StagedQuoteState = 'StagedQuoteState',
}

export type TCtpStateUpdateAction = {
  addRoles?: TCtpInputMaybe<TCtpAddStateRoles>;
  changeInitial?: TCtpInputMaybe<TCtpChangeStateInitial>;
  changeKey?: TCtpInputMaybe<TCtpChangeStateKey>;
  changeType?: TCtpInputMaybe<TCtpChangeStateType>;
  removeRoles?: TCtpInputMaybe<TCtpRemoveStateRoles>;
  setDescription?: TCtpInputMaybe<TCtpSetStateDescription>;
  setName?: TCtpInputMaybe<TCtpSetStateName>;
  setRoles?: TCtpInputMaybe<TCtpSetStateRoles>;
  setTransitions?: TCtpInputMaybe<TCtpSetStateTransitions>;
};

/** Stores allow defining different contexts for a project. */
export type TCtpStore = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Store';
    countries?: TCtpMaybe<Array<TCtpStoreCountry>>;
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    custom?: TCtpMaybe<TCtpCustomFieldsType>;
    distributionChannels: Array<TCtpChannel>;
    distributionChannelsRef: Array<TCtpReference>;
    id: TCtpScalars['String']['output'];
    key: TCtpScalars['String']['output'];
    languages?: TCtpMaybe<Array<TCtpScalars['Locale']['output']>>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    productSelections: Array<TCtpProductSelectionSetting>;
    supplyChannels: Array<TCtpChannel>;
    supplyChannelsRef: Array<TCtpReference>;
    version: TCtpScalars['Long']['output'];
  };

/** Stores allow defining different contexts for a project. */
export type TCtpStore_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpStoreCountriesChanged = TCtpMessagePayload & {
  __typename?: 'StoreCountriesChanged';
  addedCountries?: TCtpMaybe<Array<TCtpStoreCountry>>;
  removedCountries?: TCtpMaybe<Array<TCtpStoreCountry>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreCountry = {
  __typename?: 'StoreCountry';
  code: TCtpScalars['Country']['output'];
};

export type TCtpStoreCountryInput = {
  code: TCtpScalars['Country']['input'];
};

export type TCtpStoreCreated = TCtpMessagePayload & {
  __typename?: 'StoreCreated';
  countries?: TCtpMaybe<Array<TCtpStoreCountry>>;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  distributionChannels: Array<TCtpChannel>;
  distributionChannelsRef: Array<TCtpReference>;
  languages: Array<TCtpScalars['Locale']['output']>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  productSelections: Array<TCtpProductSelectionSetting>;
  productSelectionsRef: Array<TCtpReference>;
  supplyChannels: Array<TCtpChannel>;
  supplyChannelsRef: Array<TCtpReference>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreCreated_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpStoreDeleted = TCtpMessagePayload & {
  __typename?: 'StoreDeleted';
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreDistributionChannelsChanged = TCtpMessagePayload & {
  __typename?: 'StoreDistributionChannelsChanged';
  addedDistributionChannels?: TCtpMaybe<Array<TCtpChannel>>;
  addedDistributionChannelsRef?: TCtpMaybe<Array<TCtpReference>>;
  removedDistributionChannels?: TCtpMaybe<Array<TCtpChannel>>;
  removedDistributionChannelsRef?: TCtpMaybe<Array<TCtpReference>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreLanguagesChanged = TCtpMessagePayload & {
  __typename?: 'StoreLanguagesChanged';
  addedLanguages?: TCtpMaybe<Array<TCtpScalars['Locale']['output']>>;
  removedLanguages?: TCtpMaybe<Array<TCtpScalars['Locale']['output']>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'StoreLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpStoreLimitsProjection = {
  __typename?: 'StoreLimitsProjection';
  inventorySupplyChannels: TCtpLimit;
  productDistributionChannels: TCtpLimit;
  productSelections: TCtpLimit;
  total: TCtpStoreLimitWithCurrent;
};

export type TCtpStoreNameSet = TCtpMessagePayload & {
  __typename?: 'StoreNameSet';
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreNameSet_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpStoreProductSelectionsChanged = TCtpMessagePayload & {
  __typename?: 'StoreProductSelectionsChanged';
  addedProductSelections?: TCtpMaybe<Array<TCtpProductSelectionSetting>>;
  removedProductSelections?: TCtpMaybe<Array<TCtpProductSelectionSetting>>;
  type: TCtpScalars['String']['output'];
  updatedProductSelections?: TCtpMaybe<Array<TCtpProductSelectionSetting>>;
};

export type TCtpStoreQueryResult = {
  __typename?: 'StoreQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpStore>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpStoreSupplyChannelsChanged = TCtpMessagePayload & {
  __typename?: 'StoreSupplyChannelsChanged';
  addedSupplyChannels?: TCtpMaybe<Array<TCtpChannel>>;
  addedSupplyChannelsRef?: TCtpMaybe<Array<TCtpReference>>;
  removedSupplyChannels?: TCtpMaybe<Array<TCtpChannel>>;
  removedSupplyChannelsRef?: TCtpMaybe<Array<TCtpReference>>;
  type: TCtpScalars['String']['output'];
};

export type TCtpStoreUpdateAction = {
  addCountry?: TCtpInputMaybe<TCtpAddStoreCountry>;
  addDistributionChannel?: TCtpInputMaybe<TCtpAddStoreDistributionChannel>;
  addProductSelection?: TCtpInputMaybe<TCtpAddStoreProductSelection>;
  addSupplyChannel?: TCtpInputMaybe<TCtpAddStoreSupplyChannel>;
  changeProductSelectionActive?: TCtpInputMaybe<TCtpChangeStoreProductSelectionActive>;
  removeCountry?: TCtpInputMaybe<TCtpRemoveStoreCountry>;
  removeDistributionChannel?: TCtpInputMaybe<TCtpRemoveStoreDistributionChannel>;
  removeProductSelection?: TCtpInputMaybe<TCtpRemoveStoreProductSelection>;
  removeSupplyChannel?: TCtpInputMaybe<TCtpRemoveStoreSupplyChannel>;
  setCountries?: TCtpInputMaybe<TCtpSetStoreCountries>;
  setCustomField?: TCtpInputMaybe<TCtpSetStoreCustomField>;
  setCustomType?: TCtpInputMaybe<TCtpSetStoreCustomType>;
  setDistributionChannels?: TCtpInputMaybe<TCtpSetStoreDistributionChannels>;
  setLanguages?: TCtpInputMaybe<TCtpSetStoreLanguages>;
  setName?: TCtpInputMaybe<TCtpSetStoreName>;
  setProductSelections?: TCtpInputMaybe<TCtpSetStoreProductSelections>;
  setSupplyChannels?: TCtpInputMaybe<TCtpSetStoreSupplyChannels>;
};

export type TCtpStringAttribute = TCtpAttribute & {
  __typename?: 'StringAttribute';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['String']['output'];
};

export type TCtpStringField = TCtpCustomField & {
  __typename?: 'StringField';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['String']['output'];
};

export type TCtpStringType = TCtpFieldType & {
  __typename?: 'StringType';
  name: TCtpScalars['String']['output'];
};

export type TCtpSubRate = {
  __typename?: 'SubRate';
  amount: TCtpScalars['Float']['output'];
  name: TCtpScalars['String']['output'];
};

export type TCtpSubRateDraft = {
  amount: TCtpScalars['Float']['input'];
  name: TCtpScalars['String']['input'];
};

export type TCtpSubscriptionDraft = {
  changes?: TCtpInputMaybe<Array<TCtpChangeSubscriptionInput>>;
  destination: TCtpDestinationInput;
  format?: TCtpInputMaybe<TCtpSubscriptionFormatInput>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  messages?: TCtpInputMaybe<Array<TCtpMessageSubscriptionInput>>;
};

export type TCtpSubscriptionFormatInput = {
  CloudEvents?: TCtpInputMaybe<TCtpCloudEventsSubscriptionsFormatInput>;
  Platform?: TCtpInputMaybe<TCtpPlatformFormatInput>;
};

export enum TCtpSubscriptionHealthStatus {
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  Healthy = 'Healthy',
  ManuallySuspended = 'ManuallySuspended',
  TemporaryError = 'TemporaryError',
}

export type TCtpSubscriptionUpdateAction = {
  changeDestination?: TCtpInputMaybe<TCtpChangeSubscriptionDestination>;
  setChanges?: TCtpInputMaybe<TCtpSetSubscriptionChanges>;
  setKey?: TCtpInputMaybe<TCtpSetSubscriptionKey>;
  setMessages?: TCtpInputMaybe<TCtpSetSubscriptionMessages>;
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
  locale: TCtpScalars['Locale']['output'];
  suggestions: Array<TCtpSuggestion>;
};

export type TCtpSuggestTokenizer = {
  type: TCtpScalars['String']['output'];
};

export type TCtpSuggestTokenizerProductSearch = {
  type: TCtpScalars['String']['output'];
};

export type TCtpSuggestion = {
  __typename?: 'Suggestion';
  text: TCtpScalars['String']['output'];
};

/** Stores information about order synchronization activities (like export or import). */
export type TCtpSyncInfo = {
  __typename?: 'SyncInfo';
  channel?: TCtpMaybe<TCtpChannel>;
  channelRef: TCtpReference;
  externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
  syncedAt: TCtpScalars['DateTime']['output'];
};

export type TCtpTargetReferenceInput = {
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  typeId: TCtpScalars['String']['input'];
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
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name: TCtpScalars['String']['output'];
    rates: Array<TCtpTaxRate>;
    version: TCtpScalars['Long']['output'];
  };

export type TCtpTaxCategoryAddTaxRate = {
  taxRate: TCtpTaxRateDraft;
};

export type TCtpTaxCategoryChangeName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpTaxCategoryDraft = {
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  rates?: TCtpInputMaybe<Array<TCtpTaxRateDraft>>;
};

export type TCtpTaxCategoryLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'TaxCategoryLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpTaxCategoryLimitsProjection = {
  __typename?: 'TaxCategoryLimitsProjection';
  total: TCtpTaxCategoryLimitWithCurrent;
};

export type TCtpTaxCategoryQueryResult = {
  __typename?: 'TaxCategoryQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpTaxCategory>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpTaxCategoryRemoveTaxRate = {
  taxRateId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  taxRateKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpTaxCategoryReplaceTaxRate = {
  taxRate: TCtpTaxRateDraft;
  taxRateId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  taxRateKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpTaxCategorySetDescription = {
  description?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpTaxCategoryUpdateAction = {
  addTaxRate?: TCtpInputMaybe<TCtpTaxCategoryAddTaxRate>;
  changeName?: TCtpInputMaybe<TCtpTaxCategoryChangeName>;
  removeTaxRate?: TCtpInputMaybe<TCtpTaxCategoryRemoveTaxRate>;
  replaceTaxRate?: TCtpInputMaybe<TCtpTaxCategoryReplaceTaxRate>;
  setDescription?: TCtpInputMaybe<TCtpTaxCategorySetDescription>;
  setKey?: TCtpInputMaybe<TCtpSetTaxCategoryKey>;
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
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  rate: TCtpScalars['Float']['output'];
};

export type TCtpTaxPortionDraft = {
  amount: TCtpMoneyInput;
  name?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  rate: TCtpScalars['Float']['input'];
};

export type TCtpTaxRate = {
  __typename?: 'TaxRate';
  amount: TCtpScalars['Float']['output'];
  country: TCtpScalars['Country']['output'];
  id?: TCtpMaybe<TCtpScalars['String']['output']>;
  includedInPrice: TCtpScalars['Boolean']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  name: TCtpScalars['String']['output'];
  state?: TCtpMaybe<TCtpScalars['String']['output']>;
  subRates: Array<TCtpSubRate>;
};

export type TCtpTaxRateDraft = {
  amount?: TCtpInputMaybe<TCtpScalars['Float']['input']>;
  country: TCtpScalars['Country']['input'];
  includedInPrice: TCtpScalars['Boolean']['input'];
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  state?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  subRates?: TCtpInputMaybe<Array<TCtpSubRateDraft>>;
};

export type TCtpTaxRateInput = {
  amount: TCtpScalars['Float']['input'];
  country: TCtpScalars['Country']['input'];
  id?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  includedInPrice: TCtpScalars['Boolean']['input'];
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: TCtpScalars['String']['input'];
  state?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  subRates?: TCtpInputMaybe<Array<TCtpSubRateDraft>>;
};

export type TCtpTaxedItemPrice = {
  __typename?: 'TaxedItemPrice';
  taxPortions: Array<TCtpTaxPortion>;
  totalGross: TCtpMoney;
  totalNet: TCtpMoney;
  totalTax?: TCtpMaybe<TCtpMoney>;
};

export type TCtpTaxedPrice = {
  __typename?: 'TaxedPrice';
  taxPortions: Array<TCtpTaxPortion>;
  totalGross: TCtpMoney;
  totalNet: TCtpMoney;
  totalTax?: TCtpMaybe<TCtpMoney>;
};

export type TCtpTaxedPriceDraft = {
  taxPortions: Array<TCtpTaxPortionDraft>;
  totalGross: TCtpBaseMoneyInput;
  totalNet: TCtpBaseMoneyInput;
  totalTax?: TCtpInputMaybe<TCtpBaseMoneyInput>;
};

export type TCtpTermCount = {
  __typename?: 'TermCount';
  count: TCtpScalars['Int']['output'];
  productCount?: TCtpMaybe<TCtpScalars['Int']['output']>;
  term: TCtpScalars['String']['output'];
};

export type TCtpTermsFacetInput = {
  alias?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  countProducts?: TCtpScalars['Boolean']['input'];
  path: TCtpScalars['String']['input'];
};

export type TCtpTermsFacetResult = TCtpFacetResult & {
  __typename?: 'TermsFacetResult';
  dataType: TCtpScalars['String']['output'];
  missing: TCtpScalars['Int']['output'];
  other: TCtpScalars['Int']['output'];
  terms: Array<TCtpTermCount>;
  total: TCtpScalars['Int']['output'];
  type: TCtpScalars['String']['output'];
};

export type TCtpTextAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'TextAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
};

/** UI hint telling what kind of edit control should be displayed for a text attribute. */
export enum TCtpTextInputHint {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine',
}

export type TCtpTextLineItem = {
  __typename?: 'TextLineItem';
  addedAt: TCtpScalars['DateTime']['output'];
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  description?: TCtpMaybe<TCtpScalars['String']['output']>;
  descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
  id: TCtpScalars['String']['output'];
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  name?: TCtpMaybe<TCtpScalars['String']['output']>;
  nameAllLocales: Array<TCtpLocalizedString>;
  quantity: TCtpScalars['Int']['output'];
};

export type TCtpTextLineItem_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpTextLineItem_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpTextLineItemDraft = {
  addedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  name: Array<TCtpLocalizedStringItemInputType>;
  quantity?: TCtpInputMaybe<TCtpScalars['Int']['input']>;
};

export type TCtpTimeAttribute = TCtpAttribute & {
  __typename?: 'TimeAttribute';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['Time']['output'];
};

export type TCtpTimeAttributeDefinitionType = TCtpAttributeDefinitionType & {
  __typename?: 'TimeAttributeDefinitionType';
  name: TCtpScalars['String']['output'];
};

export type TCtpTimeField = TCtpCustomField & {
  __typename?: 'TimeField';
  name: TCtpScalars['String']['output'];
  value: TCtpScalars['Time']['output'];
};

export type TCtpTimeType = TCtpFieldType & {
  __typename?: 'TimeType';
  name: TCtpScalars['String']['output'];
};

export type TCtpTrackingData = {
  __typename?: 'TrackingData';
  carrier?: TCtpMaybe<TCtpScalars['String']['output']>;
  isReturn: TCtpScalars['Boolean']['output'];
  provider?: TCtpMaybe<TCtpScalars['String']['output']>;
  providerTransaction?: TCtpMaybe<TCtpScalars['String']['output']>;
  trackingId?: TCtpMaybe<TCtpScalars['String']['output']>;
};

export type TCtpTrackingDataDraftType = {
  carrier?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  isReturn?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  provider?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  providerTransaction?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  trackingId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpTransaction = {
  __typename?: 'Transaction';
  amount: TCtpMoney;
  custom?: TCtpMaybe<TCtpCustomFieldsType>;
  id: TCtpScalars['String']['output'];
  interactionId?: TCtpMaybe<TCtpScalars['String']['output']>;
  state: TCtpTransactionState;
  timestamp?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
  type?: TCtpMaybe<TCtpTransactionType>;
};

export type TCtpTransactionDraft = {
  amount: TCtpMoneyInput;
  custom?: TCtpInputMaybe<TCtpCustomFieldsDraft>;
  interactionId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  state?: TCtpInputMaybe<TCtpTransactionState>;
  timestamp?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
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
  actualTransitionDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fromState: TCtpResourceIdentifierInput;
  quantity: TCtpScalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionOrderLineItemState = {
  actualTransitionDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  fromState: TCtpResourceIdentifierInput;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionOrderState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionPaymentState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionProductState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpReferenceInput;
};

export type TCtpTransitionQuoteRequestState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionQuoteState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionReviewState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderCustomLineItemState = {
  actualTransitionDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  customLineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  customLineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  fromState: TCtpResourceIdentifierInput;
  quantity: TCtpScalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderCustomLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'TransitionStagedOrderCustomLineItemStateOutput';
    actualTransitionDate?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    customLineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    customLineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    fromStateResId: TCtpResourceIdentifier;
    quantity: TCtpScalars['Long']['output'];
    toStateResId: TCtpResourceIdentifier;
    type: TCtpScalars['String']['output'];
  };

export type TCtpTransitionStagedOrderLineItemState = {
  actualTransitionDate?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
  fromState: TCtpResourceIdentifierInput;
  lineItemId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  lineItemKey?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  quantity: TCtpScalars['Long']['input'];
  toState: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderLineItemStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'TransitionStagedOrderLineItemStateOutput';
    actualTransitionDate?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    fromStateResId: TCtpResourceIdentifier;
    lineItemId?: TCtpMaybe<TCtpScalars['String']['output']>;
    lineItemKey?: TCtpMaybe<TCtpScalars['String']['output']>;
    quantity: TCtpScalars['Long']['output'];
    toStateResId: TCtpResourceIdentifier;
    type: TCtpScalars['String']['output'];
  };

export type TCtpTransitionStagedOrderState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTransitionStagedOrderStateOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'TransitionStagedOrderStateOutput';
    force: TCtpScalars['Boolean']['output'];
    stateResId: TCtpResourceIdentifier;
    type: TCtpScalars['String']['output'];
  };

export type TCtpTransitionStagedQuoteState = {
  force?: TCtpInputMaybe<TCtpScalars['Boolean']['input']>;
  state: TCtpResourceIdentifierInput;
};

export type TCtpTreeFilterInput = {
  path: TCtpScalars['String']['input'];
  rootValues: Array<TCtpScalars['String']['input']>;
  subTreeValues: Array<TCtpScalars['String']['input']>;
};

export type TCtpTrigger = {
  __typename?: 'Trigger';
  actions: Array<TCtpActionType>;
  condition?: TCtpMaybe<TCtpScalars['String']['output']>;
  resourceTypeId: TCtpScalars['String']['output'];
};

export type TCtpTriggerInput = {
  actions?: TCtpInputMaybe<Array<TCtpActionType>>;
  condition?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  resourceTypeId: TCtpScalars['String']['input'];
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'TypeDefinition';
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    descriptionAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
    fieldDefinitions: Array<TCtpFieldDefinition>;
    id: TCtpScalars['String']['output'];
    key: TCtpScalars['String']['output'];
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    name?: TCtpMaybe<TCtpScalars['String']['output']>;
    nameAllLocales: Array<TCtpLocalizedString>;
    resourceTypeIds: Array<TCtpScalars['String']['output']>;
    version: TCtpScalars['Long']['output'];
  };

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition_DescriptionArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition_FieldDefinitionsArgs = {
  excludeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
  includeNames?: TCtpInputMaybe<Array<TCtpScalars['String']['input']>>;
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type TCtpTypeDefinition_NameArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpTypeDefinitionDraft = {
  description?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
  fieldDefinitions?: TCtpInputMaybe<Array<TCtpFieldDefinitionInput>>;
  key: TCtpScalars['String']['input'];
  name: Array<TCtpLocalizedStringItemInputType>;
  resourceTypeIds: Array<TCtpScalars['String']['input']>;
};

export type TCtpTypeDefinitionQueryResult = {
  __typename?: 'TypeDefinitionQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpTypeDefinition>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpTypeUpdateAction = {
  addEnumValue?: TCtpInputMaybe<TCtpAddTypeEnumValue>;
  addFieldDefinition?: TCtpInputMaybe<TCtpAddTypeFieldDefinition>;
  addLocalizedEnumValue?: TCtpInputMaybe<TCtpAddTypeLocalizedEnumValue>;
  changeEnumValueLabel?: TCtpInputMaybe<TCtpChangeTypeEnumValueLabel>;
  changeEnumValueOrder?: TCtpInputMaybe<TCtpChangeTypeEnumValueOrder>;
  changeFieldDefinitionOrder?: TCtpInputMaybe<TCtpChangeTypeFieldDefinitionOrder>;
  changeInputHint?: TCtpInputMaybe<TCtpChangeTypeInputHint>;
  changeKey?: TCtpInputMaybe<TCtpChangeTypeKey>;
  changeLabel?: TCtpInputMaybe<TCtpChangeTypeLabel>;
  changeLocalizedEnumValueLabel?: TCtpInputMaybe<TCtpChangeTypeLocalizedEnumValueLabel>;
  changeLocalizedEnumValueOrder?: TCtpInputMaybe<TCtpChangeTypeLocalizedEnumValueOrder>;
  changeName?: TCtpInputMaybe<TCtpChangeTypeName>;
  removeFieldDefinition?: TCtpInputMaybe<TCtpRemoveTypeFieldDefinition>;
  setDescription?: TCtpInputMaybe<TCtpSetTypeDescription>;
};

export type TCtpUnfreezeCart = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpUnpublishProduct = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpUnpublishTailoring = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpUpdateCartItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpUpdateOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpUpdateOrderSyncInfo = {
  channel: TCtpResourceIdentifierInput;
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  syncedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpUpdateStagedOrderItemShippingAddress = {
  address: TCtpAddressInput;
};

export type TCtpUpdateStagedOrderItemShippingAddressOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'UpdateStagedOrderItemShippingAddressOutput';
    address: TCtpAddressDraft;
    type: TCtpScalars['String']['output'];
  };

export type TCtpUpdateStagedOrderSyncInfo = {
  channel: TCtpResourceIdentifierInput;
  externalId?: TCtpInputMaybe<TCtpScalars['String']['input']>;
  syncedAt?: TCtpInputMaybe<TCtpScalars['DateTime']['input']>;
};

export type TCtpUpdateStagedOrderSyncInfoOutput =
  TCtpStagedOrderUpdateActionOutput & {
    __typename?: 'UpdateStagedOrderSyncInfoOutput';
    channelResId: TCtpChannelReferenceIdentifier;
    externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
    syncedAt?: TCtpMaybe<TCtpScalars['DateTime']['output']>;
    type: TCtpScalars['String']['output'];
  };

export type TCtpUserProvidedIdentifiers = {
  __typename?: 'UserProvidedIdentifiers';
  customerNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  externalId?: TCtpMaybe<TCtpScalars['String']['output']>;
  key?: TCtpMaybe<TCtpScalars['String']['output']>;
  orderNumber?: TCtpMaybe<TCtpScalars['String']['output']>;
  sku?: TCtpMaybe<TCtpScalars['String']['output']>;
  slug?: TCtpMaybe<TCtpScalars['String']['output']>;
  slugAllLocales?: TCtpMaybe<Array<TCtpLocalizedString>>;
};

export type TCtpUserProvidedIdentifiers_SlugArgs = {
  acceptLanguage?: TCtpInputMaybe<Array<TCtpScalars['Locale']['input']>>;
  locale?: TCtpInputMaybe<TCtpScalars['Locale']['input']>;
};

export type TCtpValueFacetResult = TCtpFacetResult & {
  __typename?: 'ValueFacetResult';
  count: TCtpScalars['Int']['output'];
  productCount?: TCtpMaybe<TCtpScalars['Int']['output']>;
  type: TCtpScalars['String']['output'];
};

export type TCtpValueFilterInput = {
  path: TCtpScalars['String']['input'];
  values: Array<TCtpScalars['String']['input']>;
};

export type TCtpVariantTailoring = {
  __typename?: 'VariantTailoring';
  assets: Array<TCtpAsset>;
  images: Array<TCtpImage>;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type TCtpVersioned = {
  createdAt: TCtpScalars['DateTime']['output'];
  createdBy?: TCtpMaybe<TCtpInitiator>;
  id: TCtpScalars['String']['output'];
  lastModifiedAt: TCtpScalars['DateTime']['output'];
  lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
  version: TCtpScalars['Long']['output'];
};

export type TCtpWhitespaceSuggestTokenizer = TCtpSuggestTokenizer & {
  __typename?: 'WhitespaceSuggestTokenizer';
  type: TCtpScalars['String']['output'];
};

export type TCtpWhitespaceSuggestTokenizerInput = {
  dummy?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpWhitespaceSuggestTokenizerProductSearch =
  TCtpSuggestTokenizerProductSearch & {
    __typename?: 'WhitespaceSuggestTokenizerProductSearch';
    type: TCtpScalars['String']['output'];
  };

/** Zones allow defining ShippingRates for specific Locations. */
export type TCtpZone = TCtpReferenceExpandable &
  TCtpVersioned & {
    __typename?: 'Zone';
    createdAt: TCtpScalars['DateTime']['output'];
    createdBy?: TCtpMaybe<TCtpInitiator>;
    description?: TCtpMaybe<TCtpScalars['String']['output']>;
    id: TCtpScalars['String']['output'];
    key?: TCtpMaybe<TCtpScalars['String']['output']>;
    lastModifiedAt: TCtpScalars['DateTime']['output'];
    lastModifiedBy?: TCtpMaybe<TCtpInitiator>;
    locations: Array<TCtpLocation>;
    name: TCtpScalars['String']['output'];
    version: TCtpScalars['Long']['output'];
  };

export type TCtpZoneLimitWithCurrent = TCtpLimitWithCurrent & {
  __typename?: 'ZoneLimitWithCurrent';
  current: TCtpScalars['Long']['output'];
  limit?: TCtpMaybe<TCtpScalars['Long']['output']>;
};

export type TCtpZoneLimitsProjection = {
  __typename?: 'ZoneLimitsProjection';
  total: TCtpZoneLimitWithCurrent;
};

export type TCtpZoneLocation = {
  country: TCtpScalars['Country']['input'];
  state?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};

export type TCtpZoneQueryResult = {
  __typename?: 'ZoneQueryResult';
  count: TCtpScalars['Int']['output'];
  exists: TCtpScalars['Boolean']['output'];
  offset: TCtpScalars['Int']['output'];
  results: Array<TCtpZone>;
  total: TCtpScalars['Long']['output'];
};

export type TCtpZoneRate = {
  __typename?: 'ZoneRate';
  shippingRates: Array<TCtpShippingRate>;
  zone?: TCtpMaybe<TCtpZone>;
  zoneRef?: TCtpMaybe<TCtpReference>;
};

export type TCtpZoneRateDraft = {
  shippingRates?: TCtpInputMaybe<Array<TCtpShippingRateDraft>>;
  zone: TCtpResourceIdentifierInput;
};

export type TCtpZoneUpdateAction = {
  addLocation?: TCtpInputMaybe<TCtpAddZoneLocation>;
  changeName?: TCtpInputMaybe<TCtpChangeZoneName>;
  removeLocation?: TCtpInputMaybe<TCtpRemoveZoneLocation>;
  setDescription?: TCtpInputMaybe<TCtpSetZoneDescription>;
  setKey?: TCtpInputMaybe<TCtpSetZoneKey>;
};

export type TCtpAddAttributeDefinition = {
  attributeDefinition: TCtpAttributeDefinitionDraft;
};

export type TCtpAddLocalizedEnumValue = {
  attributeName: TCtpScalars['String']['input'];
  value: TCtpLocalizedEnumValueDraft;
};

export type TCtpAddPlainEnumValue = {
  attributeName: TCtpScalars['String']['input'];
  value: TCtpPlainEnumValueDraft;
};

export type TCtpChangeAttributeName = {
  attributeName: TCtpScalars['String']['input'];
  newAttributeName: TCtpScalars['String']['input'];
};

export type TCtpChangeAttributeOrder = {
  attributeDefinitions: Array<TCtpAttributeDefinitionDraft>;
};

export type TCtpChangeAttributeOrderByName = {
  attributeNames: Array<TCtpScalars['String']['input']>;
};

export type TCtpChangeDescription = {
  description: TCtpScalars['String']['input'];
};

export type TCtpChangeEnumKey = {
  attributeName: TCtpScalars['String']['input'];
  key: TCtpScalars['String']['input'];
  newKey: TCtpScalars['String']['input'];
};

export type TCtpChangeInputHint = {
  attributeName: TCtpScalars['String']['input'];
  newValue: TCtpTextInputHint;
};

export type TCtpChangeIsSearchable = {
  attributeName: TCtpScalars['String']['input'];
  isSearchable: TCtpScalars['Boolean']['input'];
};

export type TCtpChangeLabel = {
  attributeName: TCtpScalars['String']['input'];
  label: Array<TCtpLocalizedStringItemInputType>;
};

export type TCtpChangeLocalizedEnumValueLabel = {
  attributeName: TCtpScalars['String']['input'];
  newValue: TCtpLocalizedEnumValueDraft;
};

export type TCtpChangeLocalizedEnumValueOrder = {
  attributeName: TCtpScalars['String']['input'];
  values: Array<TCtpLocalizedEnumValueDraft>;
};

export type TCtpChangeName = {
  name: TCtpScalars['String']['input'];
};

export type TCtpChangePlainEnumValueLabel = {
  attributeName: TCtpScalars['String']['input'];
  newValue: TCtpPlainEnumValueDraft;
};

export type TCtpChangePlainEnumValueOrder = {
  attributeName: TCtpScalars['String']['input'];
  values: Array<TCtpPlainEnumValueDraft>;
};

export type TCtpRemoveAttributeDefinition = {
  name: TCtpScalars['String']['input'];
};

export type TCtpRemoveEnumValues = {
  attributeName: TCtpScalars['String']['input'];
  keys: Array<TCtpScalars['String']['input']>;
};

export type TCtpSetInputTip = {
  attributeName: TCtpScalars['String']['input'];
  inputTip?: TCtpInputMaybe<Array<TCtpLocalizedStringItemInputType>>;
};

export type TCtpSetKey = {
  key?: TCtpInputMaybe<TCtpScalars['String']['input']>;
};
