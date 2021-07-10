import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IIconProps {
  type: 'up' | 'down';
}

interface IButtonProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1.5px; 
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;

  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
    border-color: ${({ theme }) => theme.colors.success_light};
  `}

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border-color: ${({ theme }) => theme.colors.attention_light};
  `}
`;

export const Icon = styled(Feather) <IIconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) => type === 'up' ? theme.colors.success
    : theme.colors.attention}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
