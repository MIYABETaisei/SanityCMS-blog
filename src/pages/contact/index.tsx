import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "src/components/Header";

type FormInput = {
  name: string;
  email: string;
  comment: string;
};

type Props = {
  post: PostItem;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-2xl mx-auto px-5 mt-10">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
        >
          <hr className="py-3 mt-2" />
          <label className="black mb-5">
            <span className="text=gray-700">Name</span>
            <input
              {...register("name", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-gray-500 outline-none focus:ring"
              placeholder="John Appleseed"
              type="text"
            />
          </label>
          <label className="black mb-5">
            <span className="text=gray-700">Email</span>
            <input
              {...register("email", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-gray-500 outline-none focus:ring"
              placeholder="John@gmail.com"
              type="text"
            />
          </label>
          <label className="black mb-5">
            <span className="text=gray-700">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-gray-500 outline-none focus:ring"
              placeholder="John Appleseed"
              rows={8}
            />
          </label>

          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">- The Name Field is required</span>
            )}
            {errors.email && (
              <span className="text-red-500">
                - The Email Field is required
              </span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                - The Comment Field is required
              </span>
            )}
          </div>

          <input
            className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white px-4 font-bold py-2 rounded cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
