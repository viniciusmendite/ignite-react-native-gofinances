import React from 'react';

import {
  Container,
  Category,
  Icon
} from './styles';

interface ICategorySelectButtonProps {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: ICategorySelectButtonProps) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}