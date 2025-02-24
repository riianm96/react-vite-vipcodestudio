
import AuthLayout from "../components/Layout/AuthLayout";
import ImgDark from "../assets/img/forgot-password-office-dark.jpeg";
import ImgLight from "../assets/img/forgot-password-office.jpeg"
import FormForgot from "../components/Fragments/FormForgot";

const ForgotPage = ()=>{
    return (
        <AuthLayout ImgLight={ImgLight} ImgDark={ImgDark} >
            <FormForgot></FormForgot>
        </AuthLayout>
    );
}

export default ForgotPage;