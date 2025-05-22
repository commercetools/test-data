import { fake, Generator } from '@/core';
import {
  CustomApplicationInstallationGraphql,
  CustomApplicationGraphql,
} from '@/models/custom-application';
import { CustomViewInstallation, CustomView } from '@/models/custom-view';
import { createRelatedDates } from '@/utils';
import * as ContactInformation from './contact-information';
import * as OidcSSOConfig from './oidc-sso-config';
import type { TOrganizationExtension } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TOrganizationExtension>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    installedApplications: fake(() => [
      CustomApplicationInstallationGraphql.random(),
    ]),
    installedCustomViews: fake(() => [CustomViewInstallation.random()]),
    organizationId: fake((f) => f.string.uuid()),
    registeredApplications: fake(() => [
      CustomApplicationGraphql.random(),
      CustomApplicationGraphql.random(),
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
