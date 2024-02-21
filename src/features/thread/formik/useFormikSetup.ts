// hooks/formik/useFormikSetup.ts
import { useFormik } from "formik";

const useFormikSetup = () => {
  return useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: () => {
      // handle form submission logic here
      console.log();
    },
  });
};

export default useFormikSetup;
