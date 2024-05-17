import { fake, Generator } from '@commercetools-test-data/core';
import {
  CustomApplicationInstallation,
  CustomApplication,
} from '@commercetools-test-data/custom-application';
import {
  CustomViewInstallation,
  CustomView,
} from '@commercetools-test-data/custom-view';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as ContactInformation from './contact-information';
import * as OidcSSOConfig from './oidc-sso-config';
import type { TOrganizationExtension } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TOrganizationExtension>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    installedApplications: fake(() => [CustomApplicationInstallation.random()]),
    installedCustomViews: fake(() => [CustomViewInstallation.random()]),
    organizationId: fake((f) => f.string.uuid()),
    registeredApplications: fake(() => [
      CustomApplication.random(),
      CustomApplication.random(),
    ]),
    registeredCustomViews: fake(() => [
      CustomView.random(),
      CustomView.random(),
    ]),
    applicationsMaintainerContactInformation: fake(() =>
      ContactInformation.random()
    ),
    oidcSsoConfig: fake(() => OidcSSOConfig.random()),
  },
});

export default generator;
