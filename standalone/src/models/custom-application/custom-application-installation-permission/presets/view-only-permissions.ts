import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import type { TBuilder } from '@/core';
import { supportedViewOAuthScopes } from '../../constants';
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
        ? resourceAccesses.view
        : // @ts-ignore
          resourceAccesses[`view${upperFirst(camelCase(additionalPermission))}`]
    )
    .oAuthScopes(sampleSize(supportedViewOAuthScopes, 1));
};

export const graphqlPreset =
  (): TBuilder<TCustomApplicationInstallationPermissionGraphql> =>
    populatePreset(CustomApplicationInstallationPermissionGraphql.random());
