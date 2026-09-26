import { internalMutation, mutation } from "./_generated/server";
import { v } from "convex/values";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s-]{6,17}$/;

export const createContactRequest = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    service: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim();
    const phone = args.phone.trim();
    const email = args.email.trim().toLowerCase();
    const service = args.service.trim();
    const message = args.message.trim();

    if (name.length < 2 || name.length > 80) {
      throw new Error("Please enter your name.");
    }
    if (!PHONE_RE.test(phone)) {
      throw new Error("Please enter a valid phone number.");
    }
    if (!EMAIL_RE.test(email)) {
      throw new Error("Please enter a valid email address.");
    }
    if (service.length < 2 || service.length > 60) {
      throw new Error("Please choose a service.");
    }
    if (message.length < 10 || message.length > 2000) {
      throw new Error("Message must be between 10 and 2000 characters.");
    }

    return await ctx.db.insert("contactRequests", {
      name,
      phone,
      email,
      service,
      message,
      status: "new",
    });
  },
});

export const listContactRequests = internalMutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contactRequests").order("desc").take(50);
  },
});
