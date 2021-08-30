import DetailedView from "../../components/DetailedItemView";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";

export const contentMain = {
    modals: [
        {
            name: "loginModal",
            show: "show",
            handler: "handleModal",
            component: <Login />
        },
        {
            name: "signUpModal",
            show: "signUpShow",
            handler: "handleSignUpModal",
            component: <SignUp />
        },
        {
            name: "detailedViewModal",
            show: "detailViewShow",
            handler: "handleDetailViewModal",
            component: <DetailedView />
        }

    ]
};