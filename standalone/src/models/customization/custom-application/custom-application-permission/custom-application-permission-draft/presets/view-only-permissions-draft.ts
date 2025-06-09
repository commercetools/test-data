import { entryPointUriPathToResourceAccesses } from '@commercetools-frontend/application-config/ssr';
import camelCase from 'lodash/camelCase';
import sampleSize from 'lodash/sampleSize';
import upperFirst from 'lodash/upperFirst';
import type { TBuilder } from '@/core';
import { supportedViewOAuthScopes } from '../../constants';
import type { TCustomApplicationPermissionDraftGraphql } from '../../types';
import { CustomApplicationPermissionDraftGraphql } from '../index';

export const graphqlPreset = (
  entryPointUriPath: string = 'avengers',
  additionalPermission: string = ''
): TBuilder<TCustomApplicationPermissionDraftGraphql> => {
  const resourceAccesses = entryPointUriPathToResourceAccesses(
    entryPointUriPath,
    [additionalPermission]
  );
  return CustomApplicationPermissionDraftGraphql.random()
    .name(
      !additionalPermission
        ? resourceAccesses.view
        : // @ts-ignore
          resourceAccesses[`view${upperFirst(camelCase(additionalPermission))}`]
    )
    .oAuthScopes(sampleSize(supportedViewOAuthScopes, 1));
};
