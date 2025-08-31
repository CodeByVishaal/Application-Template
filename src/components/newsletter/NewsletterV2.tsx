import arrowRightTwo from "/assets/img/icon/arrow-right-two.png";
import { toast } from "react-toastify";

interface FormEventHandler {
  // eslint-disable-next-line no-unused-vars
  (event: React.FormEvent<HTMLFormElement>): void;
}

const NewsletterV2 = () => {
  const handleForm: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.reset();
    toast.success("Thanks For Your Email!");
  };

  return <></>;
};

export default NewsletterV2;
