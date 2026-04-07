import { z } from "zod";

export const baseSubmissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
});

export const walkTheWorldSchema = baseSubmissionSchema.extend({
  type: z.literal("walk_the_world"),
  ticket_type: z.enum(["individual", "couple", "group"]),
  group_size: z.number().min(3).max(10).optional(),
  emergency_contact: z.string().optional(),
});

export const hfhyDinnerSchema = baseSubmissionSchema.extend({
  type: z.literal("hfhy_dinner"),
  ticket_type: z.enum(["standard", "premium", "vip"]),
  dietary_preferences: z.string().min(1, "Please select dietary preference"),
  allergies: z.string().optional(),
  guests: z.number().min(0).max(5).optional(),
});

export const submissionSchema = z.discriminatedUnion("type", [
  walkTheWorldSchema,
  hfhyDinnerSchema,
]);

export type WalkTheWorldFormData = z.infer<typeof walkTheWorldSchema>;
export type HFHYDinnerFormData = z.infer<typeof hfhyDinnerSchema>;
export type SubmissionFormData = z.infer<typeof submissionSchema>;
