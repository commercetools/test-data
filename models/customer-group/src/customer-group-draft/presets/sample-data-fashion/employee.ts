import CustomerGroupDraft from '../../builder';

const employee = () =>
  CustomerGroupDraft().key('employee').groupName('Employee');

export default employee;
