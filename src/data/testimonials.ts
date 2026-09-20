// ─── Client Testimonials ─────────────────────────────────────────────────────
// Static array — replace with CMS/API call later without changing the interface.

export interface Testimonial {
  /** Display name of the person */
  name: string;
  /** Job title or role */
  role: string;
  /** Company or organisation */
  company: string;
  /** The testimonial text */
  quote: string;
  /**
   * Two-letter initials used as avatar fallback when no photo is provided.
   * Keep it to 2 characters for best fit in the avatar circle.
   */
  avatar: string;
  /** Optional URL to a real photo — leave undefined to show initials avatar */
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Shivkumar Realtors",
    role: "Client",
    company: "Shivkumar Realtors",
    quote:
      "Soham is an exceptional developer who brings both technical expertise and creative problem-solving to the table. His work on our real estate platform was top-notch.",
    avatar: "SR",
  },
  {
    name: "Mandir Committee",
    role: "Organisation",
    company: "Sri Ram Mandir",
    quote:
      "The Sri Ram Mandir portal was delivered with great attention to detail. The multilingual support and donation management features work flawlessly.",
    avatar: "RM",
  },
  {
    name: "Tech Lead",
    role: "Collaborator",
    company: "Internal Project",
    quote:
      "A highly dedicated professional. His ability to translate complex requirements into clean, maintainable code is impressive.",
    avatar: "TL",
  },
  {
    name: "Tawade Kitchen",
    role: "Owner",
    company: "Tawade Kitchen",
    quote:
      "Working with Soham was a breeze. He's communicative, efficient, and delivers exactly what he promises.",
    avatar: "TK",
  },
  {
    name: "Education Consultant",
    role: "Client",
    company: "CollegeMatch",
    quote:
      "The AI-driven recommendations in CollegeMatch were a game-changer for our students. Soham's ability to integrate complex AI logic into a user-friendly interface is remarkable.",
    avatar: "EC",
  },
];
