import CardTopFilms from "./CardTopFilms";
import AuthForm from "./features/auth/AuthForm";

const HomePage = () => {
    return (
        <div className="text-center">
            Home PAGE 
            <CardTopFilms />
            <AuthForm />
        </div>
    );
};

export default HomePage;
