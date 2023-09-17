"use client";
import { Input, TextArea, Button } from "@/components";
import { useMutation } from "@/hooks";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UploadProductFormProps {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const UploadProductForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, } = useForm<UploadProductFormProps>();
  const [uploadProduct, { loading, data }] = useMutation<UploadProductMutation>("/api/products");
  const onValid = (productForm: UploadProductFormProps) => {
    if (loading) return;
    console.log(productForm, errors);
    uploadProduct(productForm);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`)
    }
  }, [data, router])

  return (
    <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
      {/* <div>
        <label className="w-full h-60 py-6 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-sm hover:text-melon-500 hover:border-melon-200 transition ease-in-out duration-200 cursor-pointer">
          <svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <input className="hidden" type="file" />
      </div> */}
      <Input
        register={register("name", { required: "제품 이름을 입력해주세요." })}
        name="name"
        label="제품 이름"
        type="text"
      />
      <p className="text-red-400 text-sm">{errors.name?.message}</p>
      <Input
        register={register("price", { required: "판매하고자 하는 가격을 입력해주세요." })}
        name="price"
        label="제품 가격"
        type="number"
        kind="price"
      />
      <p className="text-red-400 text-sm">{errors.price?.message}</p>
      <TextArea
        register={register("description", { required: "제품에 대한 설명을 입력해주세요." })}
        name="description"
        label="제품 설명"
        rows={10}
      />
      <p className="text-red-400 text-sm">{errors.description?.message}</p>
      <Button text={loading ? "업로드 중.." : "업로드 하기"} />
    </form>
  );
};

export default UploadProductForm;
