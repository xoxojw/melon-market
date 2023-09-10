import { cls } from "@/libs/utils";

interface TabButtons {
  method: "email" | "phone";
  onEmailClick: () => void;
  onPhoneClick: () => void;
}

const TabButtons = ({ method, onEmailClick, onPhoneClick }: TabButtons) => {
  return (
    <>
      <button
        className={cls(
          "pb-4 text-sm font-medium border-b-2 outline-none",
          method === "email" ? "border-melon-500 text-melon-500" : "border-transparent text-gray-500",
        )}
        onClick={onEmailClick}
      >
        이메일으로 로그인
      </button>
      <button
        className={cls(
          "pb-4 text-sm font-medium border-b-2 outline-none",
          method === "phone" ? "border-melon-500 text-melon-500" : "border-transparent text-gray-500",
        )}
        onClick={onPhoneClick}
      >
        핸드폰 번호로 로그인
      </button>
    </>
  );
};

export default TabButtons;
