"use client";
import { useRef } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
	username: string;
	email: string;
	password: string;
	passwordCheck: string;
	errors?: string;
}

const TestPage = () => {
	const { register, handleSubmit, formState: { errors }, watch, setError, setValue, reset } = useForm<LoginForm>({
		mode: "onBlur",
	});
	const password = useRef({});
  password.current = watch("password", "");
	const onValid = (data: LoginForm) => {
		console.log("i'm valid");
		reset();
	};
	const onInvalid = (errors: FieldErrors) => {
		console.log(errors);
	};
	return (
		<form
			onSubmit={handleSubmit(onValid, onInvalid)}
			className="flex flex-col"
		>
			<input
				{...register("email", {
					required: "이메일을 입력해주세요.",
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
						message: "이메일 형식이 아닙니다.",
					},
				})}
				placeholder="이메일을 입력하세요."
			/>
			<p className="text-red-400">{errors.email?.message}</p>
			<input
				{...register("username", {
					required: "닉네임을 입력해주세요.",
					pattern: {
						value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/,
						message: "닉네임은 영문, 한글, 숫자로만 입력 가능합니다."
					},
					minLength: {
						value: 2,
						message: "닉네임은 두 글자 이상 입력해주세요.",
					},
					maxLength: {
						value: 10,
						message: "닉네임은 열 글자를 초과할 수 없습니다.",
					}
				})}
				type="text"
				placeholder="닉네임을 입력하세요."
			/>
			<p className="text-red-400">{errors.username?.message}</p>
			<input
				{...register("password", {
					required: "비밀번호를 입력해주세요.",
					pattern: {
						value: /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/,
						message: "영문과 숫자를 포함하여 8~20자로 입력해주세요."
					}
				})}
				type="password"
				placeholder="비밀번호를 입력하세요."
			/>
			<p className="text-red-400">{errors.password?.message}</p>
			<input
				{...register("passwordCheck", {
					required: "비밀번호를 한번 더 입력해주세요.",
					validate: value => value === password.current || "비밀번호와 비밀번호 확인이 일치하지 않습니다."
				})}
				type="password"
				placeholder="비밀번호를 한번 더 입력하세요."
			/>
			<p className="text-red-400">{errors.passwordCheck?.message}</p>
			<input
				type="submit"
				value="회원가입"
			/>
			<p className="text-red-400">{errors.errors?.message}</p>
		</form>
	);
};

export default TestPage;
