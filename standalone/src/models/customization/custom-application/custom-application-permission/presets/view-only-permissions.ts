import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import type { TBuilder } from '@/core';
import { supportedViewOAuthScopes } from '../../constants';
import { CustomApplicationPermissionGraphql } from '../index';
import type { TCustomApplicationPermissionGraphql } from '../types';

export const graphqlPreset = (
  entryPointUriPath: string = 'avengers',
  additionalPermission: string = ''
): TBuilder<TCustomApplicationPermissionGraphql> => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    entryPointUriPath,
    [additionalPermission]
  );
  return CustomApplicationPermissionGraphql.random()
    .name(
      !additionalPermission
        ? resourceAccesses.view
        : // @ts-ignore
          resourceAccesses[`view${upperFirst(camelCase(additionalPermission))}`]
    )
    .oAuthScopes(sampleSize(supportedViewOAuthScopes, 1));
};
