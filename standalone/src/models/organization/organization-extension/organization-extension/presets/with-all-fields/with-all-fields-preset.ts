import {
  CustomApplicationGraphql,
  CustomApplicationInstallationGraphql,
} from '../../../../../../custom-application';
import {
  CustomView,
  CustomViewInstallation,
} from '../../../../../../custom-view';
import { ContactInformationGraphql } from '../../../contact-information';
import { OidcSsoConfigGraphql } from '../../../oidc-sso-config';
import { OrganizationExtensionGraphql } from '../../index';

const preset = () =>
  OrganizationExtensionGraphql.random()
    .applicationsMaintainerContactInformation(
      ContactInformationGraphql.random()
    )
    .oidcSsoConfig(OidcSsoConfigGraphql.random())
    .installedApplications([CustomApplicationInstallationGraphql.random()])
    .installedCustomViews([CustomViewInstallation.random()])
    .registeredApplications([CustomApplicationGraphql.random()])
    .registeredCustomViews([CustomView.random()]);

export const graphqlPreset = preset;
export const compatPreset = preset;
