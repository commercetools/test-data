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
