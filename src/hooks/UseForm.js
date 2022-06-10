import { useEffect, useState } from 'react';

const UseForm = (validate) => {
   const [values, setValues] = useState({
      username: "",
      password: "",
   });

   const [errors, setErrors] = useState({});
   const [submit, setSubmit] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      setErrors(validate(values));
      setSubmit(true);
   }

   useEffect(() => {
      if (Object.keys(errors).length == 0 && submit) {
         setTimeout(() => {
            alert("Form submitted successfully!");

            setValues({
               username: '',
               password: '',
            });

         }, 1000);

      }
   }, [errors]);

   return { handleChange, values, handleSubmit, errors };
}

export default UseForm;