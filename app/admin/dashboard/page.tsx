"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Calendar,
  ChevronDown,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  PenSquare,
  Search,
  Settings,
  User,
  Users,
  ImageIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Horizon Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Link href="/">
                      <SidebarMenuButton tooltip="Website">
                        <Home className="h-4 w-4" />
                        <span>Website</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Content</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Pages">
                      <FileText className="h-4 w-4" />
                      <span>Pages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Blog">
                      <PenSquare className="h-4 w-4" />
                      <span>Blog</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Events">
                      <Calendar className="h-4 w-4" />
                      <span>Events</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Media">
                      <ImageIcon className="h-4 w-4" />
                      <span>Media</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Users</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Students">
                      <Users className="h-4 w-4" />
                      <span>Students</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Faculty">
                      <User className="h-4 w-4" />
                      <span>Faculty</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Messages">
                      <MessageSquare className="h-4 w-4" />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/admin">
                  <SidebarMenuButton tooltip="Logout">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <header className="sticky top-0 z-30 flex h-14 sm:h-16 items-center gap-2 sm:gap-4 border-b bg-background px-3 sm:px-6">
            <SidebarTrigger />
            <div className="w-full flex items-center justify-between">
              <div className="relative w-full max-w-[180px] sm:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-background pl-8 text-xs sm:text-sm md:w-[300px] lg:w-[400px]"
                />
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-8 sm:h-9 flex items-center gap-2 text-xs sm:text-sm">
                      <span className="hidden md:inline-block">Admin User</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/admin" className="flex w-full">
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="flex-1 p-3 sm:p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Admin User</p>
              </div>

              <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6" onValueChange={setActiveTab}>
                <div className="overflow-x-auto pb-2">
                  <TabsList className="w-full sm:w-auto">
                    <TabsTrigger value="overview" className="text-xs sm:text-sm">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="text-xs sm:text-sm">
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="reports" className="text-xs sm:text-sm">
                      Reports
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="text-xs sm:text-sm">
                      Notifications
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="space-y-4 sm:space-y-6">
                  <div className="grid gap-3 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                        <CardTitle className="text-xs sm:text-sm font-medium">Total Students</CardTitle>
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg sm:text-2xl font-bold">1,248</div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">+12% from last month</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                        <CardTitle className="text-xs sm:text-sm font-medium">Faculty Members</CardTitle>
                        <User className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg sm:text-2xl font-bold">86</div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">+2 new this month</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                        <CardTitle className="text-xs sm:text-sm font-medium">Upcoming Events</CardTitle>
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg sm:text-2xl font-bold">12</div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">Next: Open House (Mar 15)</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                        <CardTitle className="text-xs sm:text-sm font-medium">New Messages</CardTitle>
                        <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-lg sm:text-2xl font-bold">24</div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">8 require response</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                      <CardHeader className="p-3 sm:p-6">
                        <CardTitle className="text-sm sm:text-base">Recent Content Updates</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">
                          Latest changes to website content
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-3 sm:space-y-4">
                          {[
                            {
                              title: "Homepage Hero Updated",
                              user: "Admin User",
                              time: "2 hours ago",
                              type: "Page Edit",
                            },
                            {
                              title: "New Event: Science Fair",
                              user: "Jane Smith",
                              time: "Yesterday",
                              type: "Event Created",
                            },
                            {
                              title: "Faculty Profile Updated",
                              user: "John Doe",
                              time: "2 days ago",
                              type: "Profile Edit",
                            },
                            {
                              title: "New Blog Post: Student Success Stories",
                              user: "Admin User",
                              time: "3 days ago",
                              type: "Blog Post",
                            },
                            {
                              title: "Updated Admissions Page",
                              user: "Jane Smith",
                              time: "1 week ago",
                              type: "Page Edit",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between border-b pb-3 sm:pb-4 last:border-0 last:pb-0"
                            >
                              <div className="space-y-1">
                                <p className="font-medium text-xs sm:text-sm">{item.title}</p>
                                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
                                  <span>{item.user}</span>
                                  <span>•</span>
                                  <span>{item.time}</span>
                                </div>
                              </div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground">{item.type}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="lg:col-span-3">
                      <CardHeader className="p-3 sm:p-6">
                        <CardTitle className="text-sm sm:text-base">Recent Messages</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">
                          Latest inquiries from the contact form
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-3 sm:space-y-4">
                          {[
                            {
                              name: "Robert Johnson",
                              email: "robert@example.com",
                              subject: "Admission Inquiry",
                              time: "1 hour ago",
                            },
                            {
                              name: "Sarah Williams",
                              email: "sarah@example.com",
                              subject: "Campus Tour Request",
                              time: "3 hours ago",
                            },
                            {
                              name: "Michael Brown",
                              email: "michael@example.com",
                              subject: "Scholarship Information",
                              time: "Yesterday",
                            },
                            {
                              name: "Emily Davis",
                              email: "emily@example.com",
                              subject: "Transfer Student Question",
                              time: "Yesterday",
                            },
                          ].map((message, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 sm:gap-4 border-b pb-3 sm:pb-4 last:border-0 last:pb-0"
                            >
                              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-xs sm:text-sm">
                                {message.name.charAt(0)}
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium text-xs sm:text-sm">{message.name}</p>
                                  <span className="text-[10px] sm:text-xs text-muted-foreground">{message.time}</span>
                                </div>
                                <p className="text-[10px] sm:text-xs text-muted-foreground">{message.subject}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
                  <Card>
                    <CardHeader className="p-3 sm:p-6">
                      <CardTitle className="text-sm sm:text-base">Website Analytics</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Website traffic and engagement metrics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                      <div className="h-[200px] sm:h-[300px] flex items-center justify-center border rounded-md">
                        <p className="text-xs sm:text-sm text-muted-foreground">Analytics chart would display here</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="p-3 sm:p-6">
                        <CardTitle className="text-sm sm:text-base">Page Views</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Most visited pages this month</CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-2">
                          {[
                            { page: "Homepage", views: 12458, change: "+12%" },
                            { page: "Admissions", views: 8932, change: "+8%" },
                            { page: "Programs", views: 6721, change: "+5%" },
                            { page: "Events", views: 4210, change: "+15%" },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                              <span>{item.page}</span>
                              <div className="flex items-center gap-2">
                                <span>{item.views.toLocaleString()}</span>
                                <span className="text-green-500">{item.change}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="p-3 sm:p-6">
                        <CardTitle className="text-sm sm:text-base">User Devices</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Device breakdown of visitors</CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-2">
                          {[
                            { device: "Mobile", percentage: 58 },
                            { device: "Desktop", percentage: 32 },
                            { device: "Tablet", percentage: 10 },
                          ].map((item, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span>{item.device}</span>
                                <span>{item.percentage}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{ width: `${item.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="reports" className="space-y-4 sm:space-y-6">
                  <Card>
                    <CardHeader className="p-3 sm:p-6">
                      <CardTitle className="text-sm sm:text-base">Reports</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Generate and view reports</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                      <div className="space-y-4">
                        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                          {[
                            {
                              title: "Enrollment Report",
                              description: "Student enrollment statistics by grade and program",
                            },
                            {
                              title: "Website Traffic Report",
                              description: "Visitor analytics and page performance",
                            },
                            {
                              title: "Content Engagement Report",
                              description: "Most viewed pages and content",
                            },
                          ].map((report, i) => (
                            <Card key={i} className="border">
                              <CardHeader className="p-3 sm:p-4 pb-1 sm:pb-2">
                                <CardTitle className="text-xs sm:text-sm">{report.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-3 sm:p-4 pt-0 sm:pt-0">
                                <p className="text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
                                  {report.description}
                                </p>
                                <Button variant="outline" size="sm" className="w-full text-xs">
                                  Generate Report
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4 sm:space-y-6">
                  <Card>
                    <CardHeader className="p-3 sm:p-6">
                      <CardTitle className="text-sm sm:text-base">Notifications</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">System notifications and alerts</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          {
                            title: "Content Update Required",
                            description: "The Events page needs to be updated with the latest schedule.",
                            time: "2 hours ago",
                            priority: "High",
                          },
                          {
                            title: "New User Registration",
                            description: "A new faculty member has registered and needs approval.",
                            time: "Yesterday",
                            priority: "Medium",
                          },
                          {
                            title: "System Maintenance",
                            description: "Scheduled maintenance will occur this weekend.",
                            time: "2 days ago",
                            priority: "Low",
                          },
                        ].map((notification, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 sm:gap-4 border-b pb-3 sm:pb-4 last:border-0 last:pb-0"
                          >
                            <div
                              className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full ${
                                notification.priority === "High"
                                  ? "bg-destructive/10 text-destructive"
                                  : notification.priority === "Medium"
                                    ? "bg-amber-500/10 text-amber-500"
                                    : "bg-primary/10 text-primary"
                              }`}
                            >
                              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium text-xs sm:text-sm">{notification.title}</p>
                                <span className="text-[10px] sm:text-xs text-muted-foreground">
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-[10px] sm:text-xs text-muted-foreground">{notification.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

