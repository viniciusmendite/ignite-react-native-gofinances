import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}