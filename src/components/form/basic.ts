import { ControllerProps } from 'react-hook-form';

export interface IBasicProps {
  label?: string;
  name: string;
  readonly?: boolean;
  rules?: ControllerProps['rules'];
}
