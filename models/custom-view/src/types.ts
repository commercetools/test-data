import { TBuilder } from '@commercetools-test-data/core';

type LocalizedField = {
  id?: string;
  locale: string;
  value?: string;
};

type CustomViewType = 'CustomPanel';

type CustomViewSize = 'SMALL' | 'LARGE';

type CustomViewStatus = 'DRAFT' | 'PUBLIC';

type CustomViewTypeSettings = {
  size?: CustomViewSize;
};

type CustomViewPermission = {
  name: string;
  oAuthScopes: string[];
};

export type CustomViewInstallationPermission = {
  createdAt: string;
  id: string;
  name: string;
  oAuthScopes: string[];
  updatedAt: string;
};

export type CustomViewInstallation = {
  acceptedPermissions: CustomViewInstallationPermission[];
  createdAt: string;
  id: string;
  installInAllProjects: boolean;
  // owner: OrganizationExtension;
  ownerId: string;
  // projects: ProjectExtension[];
  updatedAt: string;
};

export type CustomView = {
  createdAt: string;
  defaultLabel: string;
  description?: string;
  id: string;
  installedBy: CustomViewInstallation[];
  labelAllLocales: LocalizedField[];
  locators: string[];
  // owner: OrganizationExtension;
  ownerId: string;
  permissions: Array<CustomViewPermission>;
  status: CustomViewStatus;
  type: CustomViewType;
  typeSettings?: CustomViewTypeSettings;
  updatedAt: string;
  url: string;
};

export type CustomViewDraft = {
  defaultLabel: string;
  description?: string;
  labelAllLocales: LocalizedField[];
  locators: string[];
  permissions: CustomViewPermission[];
  type: CustomViewType;
  typeSettings?: CustomViewTypeSettings;
  status: CustomViewStatus;
  url: string;
};

export type TCustomView = CustomView;
export type TCustomViewDraft = CustomViewDraft;

export type TCustomViewBuilder = TBuilder<CustomView>;
export type TCreateCustomViewBuilder = () => TCustomViewBuilder;

export type TCustomViewDraftBuilder = TBuilder<CustomViewDraft>;
export type TCreateCustomViewDraftBuilder = () => TCustomViewDraftBuilder;
