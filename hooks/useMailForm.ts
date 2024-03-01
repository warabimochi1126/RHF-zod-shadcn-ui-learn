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
          content: ""
        }
      });
    
    
    const onSubmit = useCallback(async (values: any) => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
          method: "POST"
        })
      } catch(error) {
        console.error(error);
      }
    }, []);

    return { form, onSubmit };
}