import {
  LayoutDashboard,
  Wallet,
  User,
  Bell,
  MessageCircle,
  DollarSign,
  Users,
  Briefcase,
  Settings,
} from "lucide-react";

export const sidebarConfig = {
  client: [
    {
      title: "Dashboard",
      href: "/client/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Wallet",
      href: "/client/wallet",
      icon: Wallet,
    },
    {
      title: "Consultations",
      href: "/client/consultations",
      icon: MessageCircle,
    },
    {
      title: "Notifications",
      href: "/client/notifications",
      icon: Bell,
    },
    {
      title: "Profile",
      href: "/client/profile",
      icon: User,
    },
  ],

  consultant: [
    {
      title: "Dashboard",
      href: "/consultant/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Consultations",
      href: "/consultant/consultations",
      icon: MessageCircle,
    },
    {
      title: "Earnings",
      href: "/consultant/earnings",
      icon: DollarSign,
    },
    {
      title: "Profile",
      href: "/consultant/profile",
      icon: User,
    },
  ],

  admin: [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Consultants",
      href: "/admin/consultants",
      icon: Briefcase,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ],
};