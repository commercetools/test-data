import CustomViewTypeSettings from '../builder';
import { CustomViewSize } from '../types';

const customViewPanel = (size: CustomViewSize) =>
  CustomViewTypeSettings().size(size);

export default customViewPanel;
