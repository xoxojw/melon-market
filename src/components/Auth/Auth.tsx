"use client";
import { NextComponentType } from "next";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useIsMobile } from "@/hooks";

import { TabButtons, Button, Input } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import { useMutation } from "@/hooks";

interface AuthForm {
  email?: string;
  phone?: string;
}

const Auth: NextComponentType = () => {
  const [login, { loading, data, error }] = useMutation("/api/users/auth");
  const isMobile = useIsMobile();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<AuthForm>({
    mode: "onBlur",
  });
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {onEmailClick
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };

  const onValid = (validForm: AuthForm) => {
    login(validForm);
  };

  console.log(loading, data, error);

  return (
    <div className="mt-16 px-4 mx-auto">
      <h3 className="text-3xl font-bold text-center">당신 근처의 멜론마켓</h3>
      <div className="mt-8 mx-auto">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500">다음으로 로그인하기</h5>
          <div className="mt-8 border-b grid grid-cols-2 gap-16 w-full">
            <TabButtons method={method} onEmailClick={onEmailClick} onPhoneClick={onPhoneClick} />
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onValid)} className="flex flex-col mt-8">
            <div className="mt-1">
              {method === "email" ? (
                <>
                  <Input
                    register={register("email", {
                      required: "이메일을 입력해주세요.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "이메일 형식이 아닙니다.",
                      },
                    })}
                    kind="email"
                    name="email"
                    label="이메일"
                    type="email"
                  />
                  <p className="text-red-400 text-sm">{errors.email?.message}</p>
                </>
              ) : null}
              {method === "phone" ? (
                <>
                  <Input
                    register={register("phone", {
                      required: "핸드폰 번호를 입력해주세요.",
                      pattern: {
                        value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                        message: "핸드폰 번호 형식이 아닙니다."
                      }
                    })}
                    kind="phone"
                    name="phone"
                    label="핸드폰 번호"
                    type="number"
                  />
                  <p className="text-red-400 text-sm">{errors.phone?.message}</p>
                </>
                )
                : null}
            </div>
              {method === "email" ? <Button text={submitting ? "링크 전송 중" : "이메일 링크로 로그인"} /> : null}
              {method === "phone" ? <Button text={submitting ? "인증번호 전송 중" : "인증번호 받기"} /> : null}
          </form>
          <div className="mt-11">
            <div className="relative">
              <div className="absolute w-full border-t" />
              <div className="relative -top-3 text-center">
                <span className="px-2 bg-white text-gray-700 text-sm">다른 방법으로 로그인하기</span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-8">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white">
                <svg viewBox="0 0 48 48" height="32px" >
                <clipPath id="g">
                  <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                </clipPath>
                <g className="colors" clipPath="url(#g)">
                  <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                  <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                  <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                  <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                </g>
                </svg>
                <span className="text-sm ml-3">{isMobile ? "" : "Google 로그인"}</span>
              </button>
              <button className="bg-logos-kakao flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm">
                <FontAwesomeIcon icon={faComment} color="#000000" size="xl" />
                <span className="text-sm ml-3">{isMobile ? "" : "카카오 로그인"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;