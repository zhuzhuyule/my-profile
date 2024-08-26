import { ControllerProps } from 'react-hook-form';

export interface IBasicProps {
  name: string;
  readonly?: boolean;
  rules?: ControllerProps['rules'];
}
