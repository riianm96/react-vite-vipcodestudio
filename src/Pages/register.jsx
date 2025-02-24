
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayout";
import ImgDark from "../assets/img/create-account-office-dark.jpeg";
import ImgLight from "../assets/img/create-account-office.jpeg"


const RegisterPage = ()=>{
    return (
        <AuthLayout ImgDark={ImgDark} ImgLight={ImgLight}>
            <FormRegister></FormRegister>
        </AuthLayout>
    );
}

export default RegisterPage;