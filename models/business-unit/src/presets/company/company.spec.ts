import { TBusinessUnitDraft } from '../../types';
import company from './company';

describe('Business Unit for company', () => {
  it('should return a CustomLineItem', () => {
    const businessUnitForCompany = company().build<TBusinessUnitDraft>();

    expect(businessUnitForCompany).toEqual(
      expect.objectContaining({
        unitType: 'Company',
        // Check for more fields here that are shared on business unit
      })
    );
  });
});
