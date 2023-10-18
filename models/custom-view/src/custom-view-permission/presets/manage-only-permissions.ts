import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import { CUSTOM_VIEW_HOST_ENTRY_POINT_URI_PATH } from '@commercetools-frontend/constants';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import CustomApplicationPermission from '../builder';
import { supportedManageOAuthScopes } from '../constants';

const preset = (additionalPermission = '') => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    CUSTOM_VIEW_HOST_ENTRY_POINT_URI_PATH,
    [additionalPermission]
  );
  return CustomApplicationPermission()
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
