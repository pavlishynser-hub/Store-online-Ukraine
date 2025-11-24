"use client";

import { useState } from "react";

type DeliveryMethod = "novaPoshta" | "ukrposhta" | "pickup";

type OrderFormValues = {
  fullName: string;
  phone: string;
  deliveryMethod: DeliveryMethod;
  novaBranch: string;
  ukrBranch: string;
};

type OrderFormErrors = Partial<Record<keyof OrderFormValues, string>>;

// Перелік варіантів доставки, що відображається у радіо-групі
const deliveryOptions: { value: DeliveryMethod; label: string }[] = [
  { value: "novaPoshta", label: "Нова пошта" },
  { value: "ukrposhta", label: "Укрпошта" },
  { value: "pickup", label: "Самовивіз" }
];

// Початкові значення інпутів форми
const initialValues: OrderFormValues = {
  fullName: "",
  phone: "",
  deliveryMethod: "novaPoshta",
  novaBranch: "",
  ukrBranch: ""
};

export function OrderForm({ productName }: { productName: string }) {
  const [values, setValues] = useState<OrderFormValues>(initialValues);
  const [errors, setErrors] = useState<OrderFormErrors>({});

  const handleChange = (field: keyof OrderFormValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Мінімальна валідація на клієнті
  const validate = () => {
    const nextErrors: OrderFormErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Вкажіть ім'я та прізвище";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Вкажіть номер телефону";
    }

    if (values.deliveryMethod === "novaPoshta" && !values.novaBranch.trim()) {
      nextErrors.novaBranch = "Вкажіть номер відділення";
    }

    if (values.deliveryMethod === "ukrposhta" && !values.ukrBranch.trim()) {
      nextErrors.ukrBranch = "Вкажіть номер відділення";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Order submitted:", {
      product: productName,
      ...values
    });

    alert("Дякуємо! Ми зв'яжемося з вами для підтвердження замовлення.");
    setValues(initialValues);
  };

  const showNovaBranch = values.deliveryMethod === "novaPoshta";
  const showUkrBranch = values.deliveryMethod === "ukrposhta";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-white p-5 shadow-sm">
      <div className="space-y-1">
        <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
          Ваше ім’я та прізвище *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange("fullName")}
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 ${
            errors.fullName ? "border-red-400" : "border-slate-200 focus:border-blue-500"
          }`}
          placeholder="Олександр Іваненко"
        />
        {errors.fullName ? <p className="text-xs text-red-500">{errors.fullName}</p> : null}
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Телефон *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 ${
            errors.phone ? "border-red-400" : "border-slate-200 focus:border-blue-500"
          }`}
          placeholder="+38 0ХХ ХХХ ХХ ХХ"
        />
        {errors.phone ? <p className="text-xs text-red-500">{errors.phone}</p> : null}
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-700">Спосіб доставки *</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {deliveryOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                values.deliveryMethod === option.value
                  ? "border-blue-500 bg-blue-50 text-blue-600"
                  : "border-slate-200 text-slate-600"
              }`}
            >
              <input
                type="radio"
                name="deliveryMethod"
                value={option.value}
                checked={values.deliveryMethod === option.value}
                onChange={handleChange("deliveryMethod")}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {showNovaBranch ? (
        <div className="space-y-1">
          <label htmlFor="novaBranch" className="text-sm font-medium text-slate-700">
            Номер відділення Нової пошти *
          </label>
          <input
            id="novaBranch"
            name="novaBranch"
            type="text"
            value={values.novaBranch}
            onChange={handleChange("novaBranch")}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 ${
              errors.novaBranch ? "border-red-400" : "border-slate-200 focus:border-blue-500"
            }`}
            placeholder="№ 23, Київ"
          />
          {errors.novaBranch ? <p className="text-xs text-red-500">{errors.novaBranch}</p> : null}
        </div>
      ) : null}

      {showUkrBranch ? (
        <div className="space-y-1">
          <label htmlFor="ukrBranch" className="text-sm font-medium text-slate-700">
            Номер відділення Укрпошти *
          </label>
          <input
            id="ukrBranch"
            name="ukrBranch"
            type="text"
            value={values.ukrBranch}
            onChange={handleChange("ukrBranch")}
            className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 ${
              errors.ukrBranch ? "border-red-400" : "border-slate-200 focus:border-blue-500"
            }`}
            placeholder="№ 140, Львів"
          />
          {errors.ukrBranch ? <p className="text-xs text-red-500">{errors.ukrBranch}</p> : null}
        </div>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Підтвердити замовлення
      </button>
    </form>
  );
}
