"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Book,
  LayoutDashboard,
  PencilRulerIcon,
  UserCircle2Icon,
  Compass,
  WalletCards,
} from "lucide-react";
import AddNewCourseDialog from "./addNewCourseDialog";

const SideBarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-courses",
  },
  {
    title: "Explore Courses",
    icon: Compass,
    path: "/workspace/explore",
  },
  {
    title: "AI Tools",
    icon: PencilRulerIcon,
    path: "/workspace/ai-tools",
  },
  {
    title: "Billing",
    icon: WalletCards,
    path: "/workspace/billing",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/profile",
  },
];

function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className={"p-4"}>
        <Image src={"/logo.svg"} alt="Logo" width={48} height={48} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AddNewCourseDialog>
            <Button className="w-full">Create New Course</Button>
          </AddNewCourseDialog>
        </SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {SideBarOptions.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  render={<Link href={item.path} />}
                  isActive={path.includes(item.path)}
                  className={`p- text-[17px] ${path.includes(item.path) ? "!bg-primary-600 !text-primary" : ""}`}
                >
                  <item.icon className="h-7 w-7" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
