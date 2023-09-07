import Template from "@/app/template";
import Button from "@/components/Button/Button";
import TextArea from "@/components/TextArea/TextArea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Template canGoBack>
      <form className="p-4 space-y-4">
        <TextArea requrired placeholder="질문을 남겨보세요!" />
        <Button text="질문 등록하기" />
      </form>
    </Template>
  );
};

export default Write;