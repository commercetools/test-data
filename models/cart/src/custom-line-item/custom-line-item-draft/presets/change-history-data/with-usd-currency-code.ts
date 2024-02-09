import { MoneyDraft } from '@commercetools-test-data/commons';
import { TCustomLineItemDraftBuilder } from '../../../types';
import * as CustomLineItemDraft from '../../index';

const customLineItemWithUsdCurrencyCode = (): TCustomLineItemDraftBuilder =>
  CustomLineItemDraft.random().money(
    MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode()
  );

export default customLineItemWithUsdCurrencyCode;
