/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  shipmentState,
  paymentState,
  LineItemReturnItemType,
} from './constants';
import { TLineItemReturnItem, TLineItemReturnItemGraphql } from './types';
import { LineItemReturnItem } from '.';

const getMatchingStrings = (values: { [s: string]: string }) =>
  new RegExp(`^(${Object.values(values).join('|')})$`);

describe('builder', () => {
  const defaultLineItemReturnItemSpec = {
    id: expect.any(String),
    key: null,
    quantity: expect.any(Number),
    type: LineItemReturnItemType,
    comment: null,
    shipmentState: expect.stringMatching(getMatchingStrings(shipmentState)),
    paymentState: expect.stringMatching(getMatchingStrings(paymentState)),
    lineItemId: expect.any(String),
    custom: null,
    createdAt: expect.any(String),
    lastModifiedAt: expect.any(String),
  };

  it(
    ...createBuilderSpec<TLineItemReturnItem, TLineItemReturnItem>(
      'default',
      LineItemReturnItem.random(),
      expect.objectContaining(defaultLineItemReturnItemSpec)
    )
  );
  it(
    ...createBuilderSpec<TLineItemReturnItem, TLineItemReturnItemGraphql>(
      'graphql',
      LineItemReturnItem.random(),
      expect.objectContaining({
        ...defaultLineItemReturnItemSpec,
        __typename: 'LineItemReturnItem',
      })
    )
  );

  it('should allow customization', () => {
    const id = 'test-id';
    const key = 'test key';
    const quantity = 1234;
    const comment = 'test comment';
    const shipmentStateAdvised = shipmentState.advised;
    const paymentStateNonRefundable = paymentState.nonRefundable;
    const lineItemId = 'test-line-item-id';

    const lineItemReturnItemMock = LineItemReturnItem.random()
      .id(id)
      .key(key)
      .quantity(quantity)
      .comment(comment)
      .shipmentState(shipmentStateAdvised)
      .paymentState(paymentStateNonRefundable)
      .lineItemId(lineItemId)
      // .custom(custom)
      .buildGraphql();

    expect(lineItemReturnItemMock).toEqual(
      expect.objectContaining({
        id,
        key,
        quantity,
        comment,
        shipmentState: shipmentStateAdvised,
        paymentState: paymentStateNonRefundable,
        lineItemId,
        __typename: 'LineItemReturnItem',
      })
    );
  });
});
