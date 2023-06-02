import { Money } from '@commercetools-test-data/commons';
import { TCustomLineItemDraftBuilder } from '../../../types';
import * as CustomLineItemDraft from '../../index';

const customLineItemWithUsCurrencyCode = (): TCustomLineItemDraftBuilder =>
  CustomLineItemDraft.random().money(
    Money.presets.changeHistoryData.withUsCurrencyCode()
  );

export default customLineItemWithUsCurrencyCode;
