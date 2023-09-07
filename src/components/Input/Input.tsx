"use client";
import { useForm } from "react-hook-form";

const Input = () => {
	const { register } = useForm();
	return (
		<form className="flex flex-col">
			<input
				{...register("username")}
				type="text"
				placeholder="닉네임을 입력하세요."
			/>
      <input
        {...register("email")}
				type="email"
				placeholder="이메일을 입력하세요."
			/>
      <input
        {...register("password")}
				type="password"
				placeholder="비밀번호를 입력하세요."
			/>
      <input
        {...register("passwordCheck")}
				type="password"
				placeholder="비밀번호를 한번 더 입력하세요."
			/>
      <input
				type="submit"
				value="회원가입"
			/>
		</form>
	);
};

export default Input;
