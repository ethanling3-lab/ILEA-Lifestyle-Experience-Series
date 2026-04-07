"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { EventType } from "@/lib/types";
import {
  walkTheWorldSchema,
  hfhyDinnerSchema,
  type WalkTheWorldFormData,
  type HFHYDinnerFormData,
} from "@/lib/validation";

type FormData = WalkTheWorldFormData | HFHYDinnerFormData;

interface RegistrationFormProps {
  eventType: EventType;
}

export default function RegistrationForm({ eventType }: RegistrationFormProps) {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const schema = eventType === "walk_the_world" ? walkTheWorldSchema : hfhyDinnerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: eventType,
      ...(eventType === "walk_the_world"
        ? { ticket_type: "individual" }
        : { ticket_type: "standard", dietary_preferences: "" }),
    } as FormData,
  });

  const ticketType = watch("ticket_type");

  const onSubmit = async (data: FormData) => {
    setSubmitState("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }
      if (result.redirectUrl) {
        window.location.href = result.redirectUrl;
        return;
      }
      setSubmitState("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="text-center py-12 px-8 rounded-2xl bg-sage/5 border border-sage/20">
        <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          You&apos;re In!
        </h3>
        <p className="text-foreground-muted">
          Thank you for joining the experience. Check your email for confirmation details.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-foreground/10 bg-white text-foreground placeholder:text-foreground-muted/40 transition-all duration-200 focus:border-blue-primary/30 focus:ring-2 focus:ring-blue-primary/10 focus:outline-none";
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5";
  const errorClasses = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="hidden" {...register("type")} />

      {/* Name */}
      <div>
        <label className={labelClasses}>Full Name</label>
        <input
          {...register("name")}
          placeholder="Your full name"
          className={inputClasses}
        />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClasses}>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClasses}>Phone (optional)</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+65 9123 4567"
          className={inputClasses}
        />
      </div>

      {/* Ticket Type */}
      <div>
        <label className={labelClasses}>Ticket Type</label>
        <select {...register("ticket_type")} className={inputClasses}>
          {eventType === "walk_the_world" ? (
            <>
              <option value="individual">Individual</option>
              <option value="couple">Couple</option>
              <option value="group">Group (3-10 pax)</option>
            </>
          ) : (
            <>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </>
          )}
        </select>
      </div>

      {/* Walk-specific: Group size */}
      {eventType === "walk_the_world" && ticketType === "group" && (
        <div>
          <label className={labelClasses}>Group Size</label>
          <input
            {...register("group_size" as keyof FormData, { valueAsNumber: true })}
            type="number"
            min={3}
            max={10}
            placeholder="3-10"
            className={inputClasses}
          />
        </div>
      )}

      {/* Walk-specific: Emergency contact */}
      {eventType === "walk_the_world" && (
        <div>
          <label className={labelClasses}>Emergency Contact (optional)</label>
          <input
            {...register("emergency_contact" as keyof FormData)}
            placeholder="Name & phone number"
            className={inputClasses}
          />
        </div>
      )}

      {/* Dinner-specific: Dietary preferences */}
      {eventType === "hfhy_dinner" && (
        <>
          <div>
            <label className={labelClasses}>Dietary Preferences</label>
            <select {...register("dietary_preferences" as keyof FormData)} className={inputClasses}>
              <option value="">Select preference</option>
              <option value="no_restriction">No Restriction</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="halal">Halal</option>
              <option value="gluten_free">Gluten Free</option>
            </select>
            {"dietary_preferences" in errors && errors.dietary_preferences && (
              <p className={errorClasses}>{errors.dietary_preferences.message}</p>
            )}
          </div>
          <div>
            <label className={labelClasses}>Allergies (optional)</label>
            <input
              {...register("allergies" as keyof FormData)}
              placeholder="Any food allergies?"
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Additional Guests</label>
            <input
              {...register("guests" as keyof FormData, { valueAsNumber: true })}
              type="number"
              min={0}
              max={5}
              placeholder="0"
              className={inputClasses}
            />
          </div>
        </>
      )}

      {/* Error message */}
      {submitState === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="w-full py-4 px-8 rounded-full text-base font-medium text-white transition-all duration-200
          bg-gradient-to-r from-gold to-[#D4B87A]
          hover:shadow-[0_6px_24px_rgba(201,169,110,0.35)] hover:-translate-y-0.5
          active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {submitState === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          "Join This Experience"
        )}
      </button>
    </form>
  );
}
