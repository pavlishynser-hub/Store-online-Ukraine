"use client";

import { FormEvent, useId, useState } from "react";

type DeliveryMethod = "nova" | "ukr" | "pickup";

type FormState = {
  fullName: string;
  phone: string;
  deliveryMethod: DeliveryMethod;
  novaBranch: string;
  ukrBranch: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const deliveryOptions: { value: DeliveryMethod; label: string }[] = [
  { value: "nova", label: "Нова Пошта" },
  { value: "ukr", label: "Укрпошта" },
  { value: "pickup", label: "Самовивіз" }
];

const initialState: FormState = {
  fullName: "",
  phone: "",
  deliveryMethod: "nova",
  novaBranch: "",
  ukrBranch: ""
};

export function OrderForm({ productName }: { productName: string }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const groupId = useId();

  const handleChange = (field: keyof FormState, value: string | DeliveryMethod) => {
    if (field === "deliveryMethod") {
      const method = value as DeliveryMethod;
      setForm((prev) => ({
        ...prev,
        deliveryMethod: method,
        novaBranch: method === "nova" ? prev.novaBranch : "",
        ukrBranch: method === "ukr" ? prev.ukrBranch : ""
      }));
      setErrors((prev) => ({ ...prev, deliveryMethod: undefined }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Вкажіть імʼя та прізвище";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Вкажіть номер телефону";
    }

    if (form.deliveryMethod === "nova" && !form.novaBranch.trim()) {
      nextErrors.novaBranch = "Вкажіть номер відділення Нової пошти";
    }

    if (form.deliveryMethod === "ukr" && !form.ukrBranch.trim()) {
      nextErrors.ukrBranch = "Вкажіть номер відділення Укрпошти";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    console.log("Нове замовлення", {
      товар: productName,
      ...form
    });

    alert("Дякуємо! Ми зв'яжемося з вами для підтвердження замовлення.");

    setForm(initialState);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
      <div>
        <label htmlFor="fullName" className="text-sm font-semibold text-slate-800">
          Ваше ім&apos;я та прізвище *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={form.fullName}
          onChange={(event) => handleChange("fullName", event.target.value)}
          className={`mt-2 w-full rounded-xl border bg-white/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.fullName ? "border-red-400 focus:ring-red-500" : "border-slate-200"
          }`}
          placeholder="Марія Іваненко"
        />
        {errors.fullName ? (
          <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
          Телефон *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          className={`mt-2 w-full rounded-xl border bg-white/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.phone ? "border-red-400 focus:ring-red-500" : "border-slate-200"
          }`}
          placeholder="+38 (0__) ___ __ __"
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-500">{errors.phone}</p> : null}
      </div>

      <fieldset>
        <legend
          id={`${groupId}-delivery-label`}
          className="text-sm font-semibold text-slate-800"
        >
          Спосіб доставки *
        </legend>
        <div
          className="mt-3 grid gap-2 sm:grid-cols-3"
          role="radiogroup"
          aria-labelledby={`${groupId}-delivery-label`}
        >
          {deliveryOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition ${
                form.deliveryMethod === option.value
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name="deliveryMethod"
                value={option.value}
                className="sr-only"
                checked={form.deliveryMethod === option.value}
                onChange={() => handleChange("deliveryMethod", option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      {form.deliveryMethod === "nova" ? (
        <div>
          <label htmlFor="novaBranch" className="text-sm font-semibold text-slate-800">
            Номер відділення Нової пошти *
          </label>
          <input
            id="novaBranch"
            name="novaBranch"
            type="text"
            value={form.novaBranch}
            onChange={(event) => handleChange("novaBranch", event.target.value)}
            className={`mt-2 w-full rounded-xl border bg-white/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.novaBranch ? "border-red-400 focus:ring-red-500" : "border-slate-200"
            }`}
            placeholder="№ 23, м. Київ"
          />
          {errors.novaBranch ? (
            <p className="mt-1 text-xs text-red-500">{errors.novaBranch}</p>
          ) : null}
        </div>
      ) : null}

      {form.deliveryMethod === "ukr" ? (
        <div>
          <label htmlFor="ukrBranch" className="text-sm font-semibold text-slate-800">
            Номер відділення Укрпошти *
          </label>
          <input
            id="ukrBranch"
            name="ukrBranch"
            type="text"
            value={form.ukrBranch}
            onChange={(event) => handleChange("ukrBranch", event.target.value)}
            className={`mt-2 w-full rounded-xl border bg-white/80 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.ukrBranch ? "border-red-400 focus:ring-red-500" : "border-slate-200"
            }`}
            placeholder="№ 12, м. Львів"
          />
          {errors.ukrBranch ? (
            <p className="mt-1 text-xs text-red-500">{errors.ukrBranch}</p>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Надсилаємо..." : "Підтвердити замовлення"}
      </button>
    </form>
  );
}
