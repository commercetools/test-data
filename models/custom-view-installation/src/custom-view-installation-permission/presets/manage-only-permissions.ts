import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import { CUSTOM_VIEW_HOST_ENTRY_POINT_URI_PATH } from '@commercetools-frontend/constants';
import { supportedManageOAuthScopes } from '@commercetools-test-data/custom-view';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import CustomViewInstallationPermission from '../builder';

const preset = (additionalPermission = '') => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    CUSTOM_VIEW_HOST_ENTRY_POINT_URI_PATH,
    [additionalPermission]
  );
  return CustomViewInstallationPermission()
    .name(
      !additionalPermission
        ? resourceAccesses.manage
        : // @ts-ignore
          resourceAccesses[
            `manage${upperFirst(camelCase(additionalPermission))}`
          ]
    )
    .oAuthScopes(sampleSize(supportedManageOAuthScopes, 1));
};

export default preset;
