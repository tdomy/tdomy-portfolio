export const contactContent = {
  lead: "ご相談やご質問は、以下のフォームからお送りください。",
  fields: {
    name: { label: "お名前", placeholder: "山田 太郎" },
    email: { label: "メールアドレス", placeholder: "you@example.com" },
    message: {
      label: "お問い合わせ内容",
      placeholder: "ご相談内容をご記入ください",
    },
  },
  submit: { idle: "送信する", pending: "送信中..." },
  messages: {
    success: "送信しました。内容を確認のうえ、ご連絡いたします。",
    invalid: "入力内容をご確認ください。",
    failure: "送信に失敗しました。時間をおいて、もう一度お試しください。",
  },
  errors: {
    nameRequired: "お名前を入力してください。",
    nameTooLong: "お名前は100文字以内で入力してください。",
    emailInvalid: "メールアドレスの形式が正しくありません。",
    messageTooShort: "お問い合わせ内容は10文字以上で入力してください。",
    messageTooLong: "お問い合わせ内容は5000文字以内で入力してください。",
  },
} as const;
