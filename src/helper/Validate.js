export default function Validate(values, login) {
   let errors = {};
   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

   if (!values.username.trim()) {
      errors.username = 'Username required.'
   } else if (!isNaN(values.username)) {
      errors.username = "Enter characters only."
   }

   // if (!login) {
   //    if (!values.email) {
   //       errors.email = "Email required.";
   //    } else if (!regex.test(values.email)) {
   //       errors.email = "Enter a valid email address."
   //    }
   // }

   if (!values.password) {
      errors.password = "Password required."
   } else if (values.password.length < 6) {
      errors.password = "Password must be atleast of 6 characters."
   }

   return errors;

}