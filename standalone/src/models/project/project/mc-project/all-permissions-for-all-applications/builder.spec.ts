/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import {
  TAllPermissionsForAllApplications,
  TAllPermissionsForAllApplicationsGraphql,
} from './types';
import * as AllPermissionsForAllApplications from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TAllPermissionsForAllApplications,
      TAllPermissionsForAllApplications
    >(
      'default',
      AllPermissionsForAllApplications.random(),
      expect.objectContaining({
        allAppliedActionRights: expect.arrayContaining([
          expect.objectContaining({
            group: expect.any(String),
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
        allAppliedDataFences: expect.arrayContaining([
          expect.objectContaining({
            type: 'Store',
            group: expect.any(String),
            name: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        allAppliedPermissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
        allAppliedMenuVisibilities: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAllPermissionsForAllApplications,
      TAllPermissionsForAllApplications
    >(
      'rest',
      AllPermissionsForAllApplications.random(),
      expect.objectContaining({
        allAppliedActionRights: expect.arrayContaining([
          expect.objectContaining({
            group: expect.any(String),
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
        allAppliedDataFences: expect.arrayContaining([
          expect.objectContaining({
            type: 'Store',
            group: expect.any(String),
            name: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        allAppliedPermissions: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
        allAppliedMenuVisibilities: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TAllPermissionsForAllApplications,
      TAllPermissionsForAllApplicationsGraphql
    >(
      'graphql',
      AllPermissionsForAllApplications.random(),
      expect.objectContaining({
        __typename: 'AllPermissionsForAllApplications',
        allAppliedActionRights: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'AppliedActionRight',
            group: expect.any(String),
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
        allAppliedDataFences: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'AppliedDataFence',
            type: 'Store',
            group: expect.any(String),
            name: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        allAppliedPermissions: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'AppliedPermission',
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
        allAppliedMenuVisibilities: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'AppliedMenuVisibilities',
            name: expect.any(String),
            value: expect.any(Boolean),
          }),
        ]),
      })
    )
  );
});
