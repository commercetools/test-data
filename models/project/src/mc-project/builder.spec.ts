/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import * as AppliedPermission from './applied-permission';
import * as ProjectExpiry from './project-expiry';
import type { TMcProject, TMcProjectGraphql } from './types';
import * as McProject from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TMcProject, TMcProject>(
      'default',
      McProject.random().key('project-key-1'),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        version: expect.any(Number),
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        isProductionProject: false,
        initialized: true,
        expiry: null,
        suspension: null,
        shippingRateInputType: null,
        apiVersion: '1',
        plan: expect.any(String),
        sampleDataImportDataset: expect.any(String),
        owner: null,
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
        allPermissionsForAllApplications: expect.objectContaining({
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
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcProject, TMcProject>(
      'rest',
      McProject.random(),
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        isProductionProject: false,
        initialized: true,
        expiry: null,
        suspension: null,
        shippingRateInputType: null,
        apiVersion: '1',
        plan: expect.any(String),
        sampleDataImportDataset: expect.any(String),
        owner: null,
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
        allPermissionsForAllApplications: expect.objectContaining({
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
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TMcProject, TMcProjectGraphql>(
      'graphql',
      McProject.random()
        .key('project-key-1')
        .expiry(ProjectExpiry.random().isActive(true).daysLeft(5))
        .allAppliedPermissions([
          AppliedPermission.random().name('canView'),
          AppliedPermission.random().name('canManage'),
        ]),
      expect.objectContaining({
        __typename: 'Project',
        id: expect.any(String),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        version: expect.any(Number),
        key: 'project-key-1',
        name: expect.any(String),
        countries: ['EN'],
        currencies: ['EUR'],
        languages: ['en'],
        isProductionProject: false,
        initialized: true,
        expiry: {
          __typename: 'ProjectExpiry',
          isActive: true,
          daysLeft: 5,
        },
        suspension: null,
        shippingRateInputType: null,
        apiVersion: '1',
        plan: expect.any(String),
        sampleDataImportDataset: expect.any(String),
        owner: null,
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
        allAppliedPermissions: [
          {
            __typename: 'AppliedPermission',
            name: 'canView',
            value: expect.any(Boolean),
          },
          {
            __typename: 'AppliedPermission',
            name: 'canManage',
            value: expect.any(Boolean),
          },
        ],
        allPermissionsForAllApplications: expect.objectContaining({
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
        }),
      })
    )
  );
});
