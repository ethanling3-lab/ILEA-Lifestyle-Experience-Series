export type EventType = "walk_the_world" | "hfhy_dinner";

export interface Submission {
  id: string;
  type: EventType;
  name: string;
  email: string;
  phone?: string;
  data: Record<string, unknown>;
  status: "new" | "contacted" | "converted" | "paid";
  payment_status: "none" | "pending_payment" | "paid" | "payment_failed";
  payment_id?: string;
  amount?: number;
  created_at: string;
}

export interface WalkTheWorldData {
  ticket_type: "individual" | "couple" | "group";
  group_size?: number;
  emergency_contact?: string;
}

export interface HFHYDinnerData {
  ticket_type: "standard" | "premium" | "vip";
  dietary_preferences: string;
  allergies?: string;
  guests?: number;
}

export interface StatsData {
  totalRegistrations: number;
  paidCount: number;
  revenue: number;
  walkTheWorldCount: number;
  hfhyDinnerCount: number;
  newThisWeek: number;
}
