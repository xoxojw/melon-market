import type { NextPage } from "next";

import Template from "@/app/template";
import { UploadProductForm } from "@/components";

const Upload: NextPage = () => {
  return (
    <Template title="제품 등록하기" canGoBack>
      <UploadProductForm />
    </Template>
  );
};

export default Upload;