import { fake, Generator } from '../../core';
import { createRelatedDates } from '../../utils';
import {
  CustomApplicationInstallation,
  CustomApplication,
} from '../custom-application';
import {
  CustomViewInstallation,
  CustomView,
} from '../custom-view';
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
