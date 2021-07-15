import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import {
  Button,
  ImageContainer,
  Title
} from './styles';

interface ISignInSocialButtonProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>
}

export function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: ISignInSocialButtonProps) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Title>
        {title}
      </Title>
    </Button>
  );
}