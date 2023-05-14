"use client";

import PageContainer from "../components/PageContainer";
import FlexForm from "../components/FlexForm";
import { Button, Input } from "@chakra-ui/react";
import SocialLoginButton from "../components/SocialLoginButton";
import { RiKakaoTalkFill, RiDiscordFill, RiGoogleFill } from "react-icons/ri";

export default function page() {
  return (
    <PageContainer pageName="회원가입 페이지">
      <FlexForm header="회원가입">
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="passwordCheck" placeholder="비밀번호 확인" />
        <Button w="50%" colorScheme="blue">
          회원가입
        </Button>
        <SocialLoginButton>
          <RiKakaoTalkFill />
          카카오 로그인
        </SocialLoginButton>
        <SocialLoginButton>
          <RiDiscordFill />
          디스코드 로그인
        </SocialLoginButton>
        <SocialLoginButton>
          <RiGoogleFill />
          구글 로그인
        </SocialLoginButton>
      </FlexForm>
    </PageContainer>
  );
}
