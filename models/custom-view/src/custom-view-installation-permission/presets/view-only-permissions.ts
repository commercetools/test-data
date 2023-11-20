import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import { CUSTOM_VIEW_HOST_ENTRY_POINT_URI_PATH } from '@commercetools-frontend/constants';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import { supportedViewOAuthScopes } from '../../custom-view-permission/constants';
import CustomViewInstallationPermission from '../builder';

const preset = (additionalPermission = '') => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    CUSTOM_VIEW_HOST_ENTRY_POINT_URI_PATH,
    [additionalPermission]
  );
  return CustomViewInstallationPermission()
    .name(
      !additionalPermission
        ? resourceAccesses.view
        : // @ts-ignore
          resourceAccesses[`view${upperFirst(camelCase(additionalPermission))}`]
    )
    .oAuthScopes(sampleSize(supportedViewOAuthScopes, 1));
};

export default preset;
