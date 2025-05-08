import { LocalizedField } from '../commons';
import { FilterValues } from '../filter-values';
import {
  TMcSettingsFilterValues,
  TMcSettingsSortOrder,
} from '../../graphql-types';
import CustomersSearchListMyView from './builder';
import { TCustomersSearchListMyView } from './types';

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
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
          }),
        ]),
        sort: null,
        filters: null,
        table: null,
      })
    );
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built: TCustomersSearchListMyView =
      CustomersSearchListMyView().buildGraphql();
    expect(built.__typename).toEqual('CustomersSearchListMyView');
  });
});

it('should allow customization', () => {
  const name = LocalizedField.random();
  const filterValues =
    FilterValues.random().buildGraphql() as TMcSettingsFilterValues;
  const CustomersSearchListMyViewMock = CustomersSearchListMyView()
    .id('123')
    .createdAt('2022-07-26T22:00:00.123Z')
    .updatedAt('2022-08-26T22:00:00.123Z')
    .userId('user-123')
    .projectKey('my-project')
    .nameAllLocales([name])
    .isActive(true)
    .table({
      visibleColumns: ['name', 'email'],
    })
    .sort({ key: 'createdAt', order: TMcSettingsSortOrder.Asc })
    .filters([filterValues])
    .buildGraphql<TCustomersSearchListMyView>();

  expect(CustomersSearchListMyViewMock).toEqual(
    expect.objectContaining({
      id: '123',
      createdAt: '2022-07-26T22:00:00.123Z',
      updatedAt: '2022-08-26T22:00:00.123Z',
      userId: 'user-123',
      projectKey: 'my-project',
      nameAllLocales: [name.buildGraphql()],
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
