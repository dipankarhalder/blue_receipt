import { FC } from 'react';
import { IErrorProps } from '../interface';

const ErrorText: FC<IErrorProps> = ({ displayText, validateText }) => {
  return displayText && <span>{validateText}</span>
}

export default ErrorText;