"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { contactContent } from "@/data/contact";
import type { ContactField, ContactFormState } from "@/types/content";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: {},
};

const fieldConfig: {
  name: ContactField;
  type: "text" | "email" | "textarea";
  autoComplete: string;
  maxLength: number;
  minLength?: number;
}[] = [
  { name: "name", type: "text", autoComplete: "name", maxLength: 100 },
  { name: "email", type: "email", autoComplete: "email", maxLength: 254 },
  {
    name: "message",
    type: "textarea",
    autoComplete: "off",
    maxLength: 5000,
    minLength: 10,
  },
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <form className="contact-form" action={formAction} noValidate>
      {fieldConfig.map((field) => {
        const { label, placeholder } = contactContent.fields[field.name];
        const id = `contact-${field.name}`;
        const error = state.fieldErrors[field.name];
        const errorId = `${id}-error`;
        const commonProps = {
          id,
          name: field.name,
          placeholder,
          required: true,
          maxLength: field.maxLength,
          minLength: field.minLength,
          autoComplete: field.autoComplete,
          defaultValue: state.values[field.name] ?? "",
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? errorId : undefined,
        };

        return (
          <div className="field" key={field.name}>
            <label htmlFor={id}>{label}</label>
            {field.type === "textarea" ? (
              <textarea rows={6} {...commonProps} />
            ) : (
              <input type={field.type} {...commonProps} />
            )}
            {error ? (
              <p id={errorId} className="field-error">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className="field-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-footer">
        <button type="submit" disabled={pending}>
          {pending ? contactContent.submit.pending : contactContent.submit.idle}
        </button>
        <p
          className="form-status"
          data-status={state.status}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
