import type { LineItemReturnItem } from '@commercetools/platform-sdk';
import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import {
  shipmentState,
  paymentState,
  LineItemReturnItemType,
} from './constants';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/orders#lineitemreturnitem
const generator = Generator<LineItemReturnItem>({
  fields: {
    id: fake((f) => f.string.uuid()),
    key: null,
    quantity: fake((f) => f.number.int()),
    type: LineItemReturnItemType,
    comment: null,
    shipmentState: fake((f) =>
      f.helpers.arrayElement({ ...Object.values(shipmentState) })
    ),
    paymentState: fake((f) =>
      f.helpers.arrayElement({ ...Object.values(paymentState) })
    ),
    lineItemId: fake((f) => f.string.uuid()),
    custom: null,
    createdAt: fake(getOlderDate),
    lastModifiedAt: fake(getNewerDate),
  },
});

export default generator;
