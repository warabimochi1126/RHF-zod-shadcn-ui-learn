"use client";

import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form';
import { formSchema } from '@/lib/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/textarea';
import { useMailForm } from '@/hooks/useMailForm';

const MailForm = () => {
  const { form, onSubmit } = useMailForm();

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="container flex flex-col gap-3">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ユーザー名</FormLabel>
            <FormControl>
              <Input placeholder="ユーザー名" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

       <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>メールアドレス</FormLabel>
            <FormControl>
              <Input placeholder="メールアドレス" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

       <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel>主題</FormLabel>
            <FormControl>
              <Input placeholder="主題" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>本文</FormLabel>
            <FormControl>
              <Textarea placeholder="本文" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="file"
        render={({ field }) => (
          <FormItem>
            <FormLabel>添付画像</FormLabel>
            <FormControl>
              <Input accept="image/*" type="file" placeholder="主題" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  </Form>


  )
}

export default MailForm