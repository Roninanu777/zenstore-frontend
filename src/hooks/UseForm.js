import { useEffect, useState } from 'react';

export const LoginForm = (validate) => {
   const [values, setValues] = useState({
      email: "",
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
               email: '',
               password: '',
            });

         }, 1000);

      }
   }, [errors]);

   return { handleChange, values, handleSubmit, errors };
}

export const SignupForm = (validate) => {
   const [values, setValues] = useState({
      username: "",
      email: "",
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
               email: '',
               password: '',
            });

         }, 1000);

      }
   }, [errors]);

   return { handleChange, values, handleSubmit, errors };
}
