"use client";
import { NextComponentType } from "next";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cls } from "../../libs/utils";
import Button from "./Button";

const Enter: NextComponentType = () => {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  const isMobile = useIsMobile();
  return (
    <div className="mt-16 px-4 mx-auto">
      <h3 className="text-3xl font-bold text-center">당신 근처의 멜론마켓</h3>
      <div className="mt-8 mx-auto">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500">다음으로 로그인하기</h5>
          <div className="mt-8 border-b grid grid-cols-2 gap-16 w-full">
            <button
              className={cls("pb-4 text-sm font-medium border-b-2 outline-none",
                method === "email"
                  ? "border-melon-500 text-melon-500"
                  : "border-transparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              이메일으로 로그인
            </button>
            <button
              className={cls("pb-4 text-sm font-medium border-b-2 outline-none",
              method === "phone"
                ? "border-melon-500 text-melon-500"
                : "border-transparent text-gray-500"
            )}
              onClick={onPhoneClick}
            >
              핸드폰 번호로 로그인
            </button>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col mt-8">
            <label htmlFor="input" className="text-sm font-medium text-gray-700">
              {method === "email" ? "이메일" : null}
              {method === "phone" ? "핸드폰 번호" : null}
            </label>
            <div className="mt-1">
              {method === "email"
                ? <input
                  id="input"
                  type="email"
                  className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-melon-300 focus:border-melon-300"
                  placeholder="example@email.com"
                  required
                />
                : null}
              {method === "phone"
                ? (
                <div className="flex rounded-md shadow-sm">
                  <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 select-none text-sm">
                    +82
                  </span>
                  <input
                    id="input"
                    type="number"
                    className="w-full px-3 py-2 border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-melon-300 focus:border-melon-300"
                    placeholder="010-0000-0000"
                    required
                  />
                </div>
                )
                : null}
            </div>
              {method === "email" ? <Button text="이메일 링크로 로그인" /> : null}
              {method === "phone" ? <Button text="인증번호 받기" /> : null}
          </form>
          <div className="mt-11">
            <div className="relative">
              <div className="absolute w-full border-t" />
              <div className="relative -top-3 text-center">
                <span className="px-2 bg-white text-gray-700 text-sm">다른 방법으로 로그인하기</span>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-2 gap-10">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <svg viewBox="0 0 48 48" height="32px" >
                <clipPath id="g">
                  <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                </clipPath>
                <g className="colors" clip-path="url(#g)">
                  <path fill="#FBBC05" d="M0 37V11l17 13z"/>
                  <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                  <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                  <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                </g>
                </svg>
                <span className="text-sm ml-3">{isMobile ? "" : "Google 로그인"}</span>
              </button>
              <button className="bg-logos-kakao flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-logos-kakaoHover">
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

export default Enter;
