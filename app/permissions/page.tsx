"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, MessageSquare, Bell, Battery, Smartphone } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Permissions() {
  const router = useRouter()
  const [permissions, setPermissions] = useState({
    calls: false,
    messages: false,
    notifications: false,
    battery: false,
    device: false,
  })

  const handleToggle = (permission: keyof typeof permissions) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }))
  }

  const handleContinue = () => {
    // Check if at least calls and messages permissions are granted
    if (!permissions.calls || !permissions.messages) {
      alert("Call and message permissions are required for TrueAlert to function properly.")
      return
    }

    // Redirect to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">App Permissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-center text-gray-600 mb-6">
                  TrueAlert needs the following permissions to protect you from scams:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <Label htmlFor="calls" className="font-medium">
                        Call Access
                        <p className="text-sm text-gray-500">To detect and filter scam calls</p>
                      </Label>
                    </div>
                    <Switch id="calls" checked={permissions.calls} onCheckedChange={() => handleToggle("calls")} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                      <Label htmlFor="messages" className="font-medium">
                        Message Access
                        <p className="text-sm text-gray-500">To detect and filter scam messages</p>
                      </Label>
                    </div>
                    <Switch
                      id="messages"
                      checked={permissions.messages}
                      onCheckedChange={() => handleToggle("messages")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-green-600" />
                      <Label htmlFor="notifications" className="font-medium">
                        Notifications
                        <p className="text-sm text-gray-500">To alert you about potential scams</p>
                      </Label>
                    </div>
                    <Switch
                      id="notifications"
                      checked={permissions.notifications}
                      onCheckedChange={() => handleToggle("notifications")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Battery className="h-5 w-5 text-green-600" />
                      <Label htmlFor="battery" className="font-medium">
                        Battery Optimization
                        <p className="text-sm text-gray-500">To run efficiently in the background</p>
                      </Label>
                    </div>
                    <Switch
                      id="battery"
                      checked={permissions.battery}
                      onCheckedChange={() => handleToggle("battery")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-green-600" />
                      <Label htmlFor="device" className="font-medium">
                        Device Access
                        <p className="text-sm text-gray-500">To protect your device from threats</p>
                      </Label>
                    </div>
                    <Switch id="device" checked={permissions.device} onCheckedChange={() => handleToggle("device")} />
                  </div>
                </div>

                <div className="pt-4">
                  <Button onClick={handleContinue} className="w-full bg-green-600 hover:bg-green-700">
                    Continue to Dashboard
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-500 mt-4">
                  You can change these permissions later in your device settings. TrueAlert uses this information only
                  to protect you from scams.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
