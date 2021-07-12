import React from 'react';

import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  CategoryList,
  Category,
  Icon,
  Name,
  Divisor,
  Footer,
} from './styles';

interface ICategory {
  key: string;
  name: string;
}

interface ICategorySelectProps {
  category: string;
  setCategory: (category: ICategory) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
}: ICategorySelectProps) {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <CategoryList 
      data={categories}
      keyExtractor={item => item.key}
      renderItem={({ item }) => (
        <Category>
          <Icon name={item.icon} />
          <Name>{item.name}</Name>
        </Category>
      )}
      ItemSeparatorComponent={() => <Divisor />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}