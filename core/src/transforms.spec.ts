import {
  toGraphqlPaginatedQueryResult,
  toRestPaginatedQueryResult,
  toExpandedReference,
} from './helpers';

describe('expanding reference', () => {
  describe('with typeId and id', () => {
    it('should return expanded reference', () => {
      const channel = { id: 'channel-id' };
      expect(toExpandedReference('channel')(channel)).toEqual({
        typeId: 'channel',
        id: channel.id,
        obj: channel,
      });
    });
  });
  describe('without typeId', () => {
    it('should return null', () => {
      expect(toExpandedReference()({ id: 'channel-id' })).toEqual(null);
    });
  });
  describe('without data.id', () => {
    it('should return null', () => {
      expect(toExpandedReference('channel')({})).toEqual(null);
    });
  });
});

describe('paginated query results', () => {
  describe('REST', () => {
    describe('without options', () => {
      it('should add total, count, offset and results to the list', () => {
        const list = [{ id: 1 }, { id: 2 }];
        const paginatedQueryResult = toRestPaginatedQueryResult(list);

        expect(paginatedQueryResult.results).toEqual(list);
        expect(paginatedQueryResult.count).toBe(list.length);
        expect(paginatedQueryResult.total).toBe(100);
        expect(paginatedQueryResult.offset).toBe(0);
      });
    });

    describe('with options', () => {
      it('should add total, count, offset and results to the list', () => {
        const list = [{ id: 1 }, { id: 2 }];
        const paginatedQueryResult = toRestPaginatedQueryResult(list, {
          total: 200,
          offset: 100,
        });

        expect(paginatedQueryResult.results).toEqual(list);
        expect(paginatedQueryResult.count).toBe(list.length);
        expect(paginatedQueryResult.total).toBe(200);
        expect(paginatedQueryResult.offset).toBe(100);
      });
    });
  });

  describe('GraphQL', () => {
    describe('without options', () => {
      it('should add total, count, offset, results and __typename to the list', () => {
        const list = [{ id: 1 }, { id: 2 }];
        const paginatedQueryResult = toGraphqlPaginatedQueryResult(list, {
          name: 'Project',
        });

        expect(paginatedQueryResult.results).toEqual(list);
        expect(paginatedQueryResult.count).toBe(list.length);
        expect(paginatedQueryResult.total).toBe(100);
        expect(paginatedQueryResult.offset).toBe(0);

        expect(paginatedQueryResult.__typename).toEqual('ProjectQueryResult');
      });
    });

    describe('with options', () => {
      it('should add total, count, offset, results and __typename to the list', () => {
        const list = [{ id: 1 }, { id: 2 }];
        const paginatedQueryResult = toGraphqlPaginatedQueryResult(list, {
          total: 200,
          offset: 100,
          name: 'Project',
        });

        expect(paginatedQueryResult.results).toEqual(list);
        expect(paginatedQueryResult.count).toBe(list.length);
        expect(paginatedQueryResult.total).toBe(200);
        expect(paginatedQueryResult.offset).toBe(100);

        expect(paginatedQueryResult.__typename).toEqual('ProjectQueryResult');
      });
    });
  });
});
