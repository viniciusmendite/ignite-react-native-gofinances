import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';

import LogoSvg from '../../assets/logo.svg';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';

import { useAuth } from '../../hooks/auth';
import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Aviso',
        text2: 'Não foi possível conectar a conta Google',
      });
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}