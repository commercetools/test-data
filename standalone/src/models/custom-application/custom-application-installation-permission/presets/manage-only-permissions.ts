import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import type { TBuilder } from '@commercetools-test-data/core';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import { supportedManageOAuthScopes } from '../constants';
import { CustomApplicationInstallationPermissionGraphql } from '../index';
import type { TCustomApplicationInstallationPermissionGraphql } from '../types';

const populatePreset = <
  TModel extends TCustomApplicationInstallationPermissionGraphql,
>(
  builder: TBuilder<TModel>,
  entryPointUriPath: string = 'avengers',
  additionalPermission: string = ''
) => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    entryPointUriPath,
    [additionalPermission]
  );
  return builder
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

export const graphqlPreset =
  (): TBuilder<TCustomApplicationInstallationPermissionGraphql> =>
    populatePreset(CustomApplicationInstallationPermissionGraphql.random());
