import { formSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

export const useMailForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          subject: "",
          email: "",
          content: "",
          file: undefined,
        }
      });
    
    const onSubmit = useCallback(async (values: any) => {
      const { username, email, subject, content, file } = values;

      console.log(username, email, subject, content, file);

      try {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            email,
            subject,
            content
          })
        })
      } catch(error) {
        console.error(error);
      }
    }, []);

    return { form, onSubmit };
}