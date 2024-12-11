import { GalleryVerticalEnd, Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { WeatherWidget } from "./weather-widget";

// Menu items.
const items = [
  {
    title: "Casa Paradise",
    url: "casa-paradise",
    icon: Home,
  },
  {
    title: "Del Mar",
    url: "del-mar",
    icon: Home,
  },
  {
    title: "Rincon",
    url: "rincon",
    icon: Home,
  },
  {
    title: "Galeria de imagenes",
    url: "#",
    icon: Home,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton className="hidden sm:flex" size="lg" asChild>
                <a href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Paradise Chapadmalal</span>
                    <span className="">Cabañas de mar</span>
                  </div>
                </a>
              </SidebarMenuButton>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <WeatherWidget />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
