import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actions";

const CreateProductPage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput name="name" label="product name" placeholder={"shoes"} />
            <FormInput
              name="company"
              label="company"
              placeholder={"Forma Ideale"}
            />
            <FormInput
              name="price"
              placeholder="300"
              type="number"
              label="Price ($)"
            />
            <FormInput name="image" type="file" />
          </div>
          <TextAreaInput name="description" />
          <div className="my-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProductPage;
