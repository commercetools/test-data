import { TBuilder } from '@commercetools-test-data/core';

// TODO: generate graphql types and use those

type LocalizedField = {
  id?: string;
  locale: string;
  value?: string;
};

type CustomViewType = 'CustomPanel';

type CustomViewSize = 'SMALL' | 'LARGE';

type CustomViewStatus = 'DRAFT' | 'PRIVATE_USAGE';

type CustomViewTypeSettings = {
  size?: CustomViewSize;
};

type CustomViewPermission = {
  name: string;
  oAuthScopes: string[];
};

export type TCustomView = {
  id: string;
  // owner: OrganizationExtension;
  ownerId: string;
  url: string;
  defaultLabel: string;
  description?: string;
  labelAllLocales: LocalizedField[];
  locators: string[];
  permissions: CustomViewPermission[];
  status: CustomViewStatus;
  type: CustomViewType;
  typeSettings?: CustomViewTypeSettings;
  createdAt: string;
  updatedAt: string;
};
export type TCustomViewGraphql = TCustomView & {
  __typename: 'CustomView';
};

export type TCustomViewDraft = Omit<
  TCustomView,
  'id' | 'createdAt' | 'updatedAt' | 'ownerId' | 'status'
>;
export type TCustomViewDraftGraphql = TCustomViewDraft;

export type TCustomViewBuilder = TBuilder<TCustomView>;
export type TCreateCustomViewBuilder = () => TCustomViewBuilder;

export type TCustomViewDraftBuilder = TBuilder<TCustomViewDraft>;
export type TCreateCustomViewDraftBuilder = () => TCustomViewDraftBuilder;
