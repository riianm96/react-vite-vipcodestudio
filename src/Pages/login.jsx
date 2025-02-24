
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayout";
import ImgDark from "../assets/img/login-office-dark.jpeg";
import ImgLight from "../assets/img/login-office.jpeg"

const LoginPage = ()=>{
    return (
        <AuthLayout ImgLight={ImgLight} ImgDark={ImgDark} >
            <FormLogin></FormLogin>
        </AuthLayout>
    );
}

export default LoginPage;