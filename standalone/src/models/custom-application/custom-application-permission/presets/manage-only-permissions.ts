import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import type { TBuilder } from '@/core';
import { supportedManageOAuthScopes } from '../../constants';
import { CustomApplicationPermissionGraphql } from '../index';
import type { TCustomApplicationPermissionGraphql } from '../types';

const populatePreset = <TModel extends TCustomApplicationPermissionGraphql>(
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
  (): TBuilder<TCustomApplicationPermissionGraphql> =>
    populatePreset(CustomApplicationPermissionGraphql.random());
