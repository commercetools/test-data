import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import type { TBuilder } from '@/core';
import { supportedManageOAuthScopes } from '../constants';
import { CustomApplicationInstallationPermissionGraphql } from '../index';
import type { TCustomApplicationInstallationPermissionGraphql } from '../types';

export const graphqlPreset = (
  entryPointUriPath: string = 'avengers',
  additionalPermission: string = ''
): TBuilder<TCustomApplicationInstallationPermissionGraphql> => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    entryPointUriPath,
    [additionalPermission]
  );

  return CustomApplicationInstallationPermissionGraphql.random()
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
