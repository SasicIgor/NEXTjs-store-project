import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import TextAreaInput from "@/components/form/TextAreaInput";
import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from "@/utils/actions";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await fetchAdminProductDetails(id);
  console.log(product);
  const { name, company, description, featured, price } = await product;
  console.log(name);
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <div className="border p-8 rounded">
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>

        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput name="name" label="product name" defaultValue={name} />
            <FormInput name="company" defaultValue={company} />
            <FormInput name="price" defaultValue={price.toString()} />
          </div>
          <TextAreaInput
            name="description"
            label="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default EditProductPage;
