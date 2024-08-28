import {
  LocalizedString,
  LocalizedField,
} from '@commercetools-test-data/commons';
import { FilterValues } from '@commercetools-test-data/filter-values';
import {
  TMcSettingsFilterValues,
  TMcSettingsSortOrder,
} from '@commercetools-test-data/graphql-types';
import CustomersSearchListMyView from './builder';
import { TCustomersSearchListMyViewGraphql } from './types';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = CustomersSearchListMyView().build();

    expect(built).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        projectKey: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        userId: expect.any(String),
        isActive: true,
        nameAllLocales: null,
        sort: null,
        filters: null,
        table: null,
      })
    );
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built: TCustomersSearchListMyViewGraphql =
      CustomersSearchListMyView().buildGraphql();
    expect(built.__typename).toEqual('CustomersSearchListMyView');
  });
  it('should add the nameAllLocales', () => {
    const built: TCustomersSearchListMyViewGraphql =
      CustomersSearchListMyView().buildGraphql();
    expect(built.nameAllLocales).toBeDefined();
  });
  it('should remove `name`', () => {
    const built: TCustomersSearchListMyViewGraphql =
      CustomersSearchListMyView().buildGraphql();
    expect(built.name).not.toBeDefined();
  });
});

it('should allow customization', () => {
  const name = LocalizedString.random().en('my-view');
  const filterValues =
    FilterValues.random().buildGraphql() as TMcSettingsFilterValues;
  const CustomersSearchListMyViewMock = CustomersSearchListMyView()
    .id('123')
    .createdAt('2022-07-26T22:00:00.123Z')
    .updatedAt('2022-08-26T22:00:00.123Z')
    .userId('user-123')
    .projectKey('my-project')
    .nameAllLocales(name)
    .name('my-view')
    .isActive(true)
    .table({
      visibleColumns: ['name', 'email'],
    })
    .sort({ key: 'createdAt', order: TMcSettingsSortOrder.Asc })
    .filters([filterValues])
    .buildGraphql<TCustomersSearchListMyViewGraphql>();

  expect(CustomersSearchListMyViewMock).toEqual(
    expect.objectContaining({
      id: '123',
      createdAt: '2022-07-26T22:00:00.123Z',
      updatedAt: '2022-08-26T22:00:00.123Z',
      userId: 'user-123',
      projectKey: 'my-project',
      nameAllLocales: [LocalizedField.random().value(name).buildGraphql()],
      table: {
        visibleColumns: ['name', 'email'],
      },
      sort: {
        key: 'createdAt',
        order: TMcSettingsSortOrder.Asc,
      },
      filters: [filterValues],
      __typename: 'CustomersSearchListMyView',
    })
  );
});
