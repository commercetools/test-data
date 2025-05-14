import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import type { TBuilder } from '@commercetools-test-data/core';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import { supportedViewOAuthScopes } from '../constants';
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
        ? resourceAccesses.view
        : // @ts-ignore
          resourceAccesses[`view${upperFirst(camelCase(additionalPermission))}`]
    )
    .oAuthScopes(sampleSize(supportedViewOAuthScopes, 1));
};

export const graphqlPreset =
  (): TBuilder<TCustomApplicationPermissionGraphql> =>
    populatePreset(CustomApplicationPermissionGraphql.random());
