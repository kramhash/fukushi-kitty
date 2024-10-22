export type formMode = "form" | "composite" | "processing";
export type IForm = {
  name: string;
  job: string;
  trigger: string;
  email: string;
  xaccount: string;
  googleReCaptchaToken: string;
};
