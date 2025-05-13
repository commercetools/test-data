import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import { supportedViewOAuthScopes } from '../../constants';
import CustomApplicationPermission from '../builder';

const preset = (entryPointUriPath = 'avengers', additionalPermission = '') => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    entryPointUriPath,
    [additionalPermission]
  );
  return CustomApplicationPermission()
    .name(
      !additionalPermission
        ? resourceAccesses.view
        : // @ts-ignore
          resourceAccesses[`view${upperFirst(camelCase(additionalPermission))}`]
    )
    .oAuthScopes(sampleSize(supportedViewOAuthScopes, 1));
};

export default preset;
