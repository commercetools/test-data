/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { LineItemReturnItem } from '../line-item-return-item';
import { TReturnInfo, TReturnInfoGraphql } from './types';
import { ReturnInfo } from '.';

describe('builder', () => {
  const defaultReturnInfoSpec = {
    items: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        quantity: expect.any(Number),
      }),
    ]),
    returnTrackingId: expect.any(String),
    returnDate: expect.any(String),
  };

  it(
    ...createBuilderSpec<TReturnInfo, TReturnInfo>(
      'default',
      ReturnInfo.random(),
      expect.objectContaining(defaultReturnInfoSpec)
    )
  );
  it(
    ...createBuilderSpec<TReturnInfo, TReturnInfoGraphql>(
      'graphql',
      ReturnInfo.random(),
      expect.objectContaining({
        ...defaultReturnInfoSpec,
        __typename: 'ReturnInfo',
      })
    )
  );

  it('should allow customization', () => {
    const returnTrackingId = 'test returnTrackingId';
    const returnDate = '2021-01-01T00:00:00.000Z';
    const comment = 'test comment';
    const lineItemReturnItem = LineItemReturnItem.random().comment(comment);

    const customReturnInfo = ReturnInfo.random()
      // @ts-expect-error - this is the next (sub)model to be migrated and this will be fixed in the next PR
      .items([lineItemReturnItem])
      .returnTrackingId(returnTrackingId)
      .returnDate(returnDate)
      .buildGraphql();

    expect(customReturnInfo).toEqual(
      expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            comment,
          }),
        ]),
        returnTrackingId,
        returnDate,
      })
    );
  });
});
