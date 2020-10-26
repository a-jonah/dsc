import ajax from "./ajax"

const Base_URL = "http://localhost:3000/api"

export const Login = (userName, pass, captcha) => ajax(Base_URL + "/v1/users/login", { user_name: userName, login_password: pass, captcha: captcha }, "post")