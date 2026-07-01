"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Users, KanbanSquare, ListFilter, UserRound, LayoutDashboard, Newspaper, MessageSquare, LogOut,
} from "lucide-react";
import {
  Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarGroupContent, SidebarMenu, SidebarMenuItem,
  SidebarMenuButton, useSidebar,
} from "@/components/ui/sidebar";
import { initials, avatarClass } from "@/components/crm/avatar";

type Item = { href: string; label: string; icon: typeof Users };
type Group = { label: string; folio: string; items: Item[] };

const roleLabels: Record<string, string> = { admin: "Admin", agent: "Agente", viewer: "Lector" };

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(href + "/");
}

// Ícono de los tres diamantes recortado del lockup horizontal por CSS: no hay
// asset solo-ícono, así que se muestra la banda izquierda del logo completo.
function DiamondMark() {
  return (
    <span
      aria-hidden
      className="block h-9 w-[22px] shrink-0"
      style={{
        backgroundImage: "url(/logo-adaf.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "116px auto",
        backgroundPosition: "0px 42%",
      }}
    />
  );
}

export function AppSidebar({
  user, showUsers, showDashboard, showBlog, logoutAction,
}: {
  user: { name: string; role: string };
  showUsers: boolean;
  showDashboard: boolean;
  showBlog: boolean;
  logoutAction: () => void;
}) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const comercial: Item[] = [];
  if (showDashboard) comercial.push({ href: "/admin/dashboard", label: "Resumen", icon: LayoutDashboard });
  comercial.push({ href: "/admin", label: "Leads", icon: ListFilter });
  comercial.push({ href: "/admin/board", label: "Pipeline", icon: KanbanSquare });

  const contenido: Item[] = [];
  if (showBlog) contenido.push({ href: "/admin/blog", label: "Blog", icon: Newspaper });
  if (user.role === "admin") contenido.push({ href: "/admin/feedback", label: "Comentarios", icon: MessageSquare });

  const cuenta: Item[] = [];
  if (showUsers) cuenta.push({ href: "/admin/users", label: "Usuarios", icon: Users });
  cuenta.push({ href: "/admin/profile", label: "Perfil", icon: UserRound });

  const groups: Group[] = [
    { label: "Comercial", folio: "I", items: comercial },
    { label: "Contenido", folio: "II", items: contenido },
    { label: "Cuenta", folio: "III", items: cuenta },
  ].filter((g) => g.items.length > 0);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="crm-side-header gap-0 p-0">
        <Link
          href="/admin"
          aria-label="ADAF · Panel"
          className={`flex items-center ${collapsed ? "justify-center px-0 py-3" : "px-4 py-3.5"}`}
        >
          {collapsed ? (
            <DiamondMark />
          ) : (
            <Image
              src="/logo-adaf.png"
              alt="ADAF · Asesoría y Defensa Aduanera Fiscal"
              width={500}
              height={172}
              priority
              className="h-11 w-auto select-none"
            />
          )}
        </Link>
        {!collapsed && (
          <div className="px-4 pb-3">
            <div className="crm-tricolor w-full" />
            <p className="crm-eyebrow mt-2.5 !text-[9.5px] !tracking-[0.22em] text-[var(--crm-ink-faint)]">
              Panel interno
            </p>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-1 pt-2">
        {groups.map((g) => (
          <SidebarGroup key={g.label}>
            {!collapsed && (
              <div className="crm-side-grouplabel mb-1 px-2 pt-1">
                <span className="crm-folio">{g.folio}</span>
                <span>{g.label}</span>
                <span className="ml-auto h-px flex-1 bg-[var(--crm-line)]" />
              </div>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map(({ href, label, icon: Icon }) => {
                  const active = isActive(pathname, href);
                  return (
                    <SidebarMenuItem key={href}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        tooltip={label}
                        className="crm-side-item h-9 font-medium"
                      >
                        <Link href={href}>
                          <Icon strokeWidth={active ? 2.1 : 1.8} />
                          <span>{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-[var(--crm-line)] p-2">
        {!collapsed && (
          <div className="flex items-center gap-2.5 rounded-lg px-2 py-2">
            <span
              className={`flex size-8 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${avatarClass(
                user.name
              )}`}
            >
              {initials(user.name)}
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-[13px] font-semibold text-[var(--crm-ink)]">{user.name}</p>
              <p className="text-[11px] text-[var(--crm-ink-mute)]">{roleLabels[user.role] ?? user.role}</p>
            </div>
          </div>
        )}
        <SidebarMenu>
          <SidebarMenuItem>
            <form action={logoutAction} className="w-full">
              <SidebarMenuButton
                asChild
                tooltip="Salir"
                className="h-9 text-[var(--crm-ink-mute)] hover:!bg-[var(--crm-wine-tint)] hover:!text-[var(--crm-wine)]"
              >
                <button type="submit" aria-label="Salir">
                  <LogOut strokeWidth={1.8} />
                  <span>Salir</span>
                </button>
              </SidebarMenuButton>
            </form>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
