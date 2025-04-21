import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, CheckCircle, Phone, MessageSquare, Bell } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  // Sample data for demonstration
  const stats = {
    scamCalls: 12,
    scamMessages: 8,
    totalScanned: 145,
    protectionLevel: "High",
  }

  const recentAlerts = [
    {
      id: 1,
      type: "call",
      number: "+1 (555) 123-4567",
      timestamp: "Today, 10:23 AM",
      risk: "high",
    },
    {
      id: 2,
      type: "message",
      number: "+1 (555) 987-6543",
      timestamp: "Today, 9:15 AM",
      risk: "medium",
    },
    {
      id: 3,
      type: "call",
      number: "+1 (555) 456-7890",
      timestamp: "Yesterday, 4:30 PM",
      risk: "high",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button className="bg-green-600 hover:bg-green-700">
          <Bell className="h-4 w-4 mr-2" />
          Scan Now
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Scam Calls Blocked</p>
                <p className="text-2xl font-bold">{stats.scamCalls}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Scam Messages Filtered</p>
                <p className="text-2xl font-bold">{stats.scamMessages}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Scanned</p>
                <p className="text-2xl font-bold">{stats.totalScanned}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Protection Level</p>
                <p className="text-2xl font-bold">{stats.protectionLevel}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {alert.type === "call" ? (
                      <Phone className="h-5 w-5 text-gray-600" />
                    ) : (
                      <MessageSquare className="h-5 w-5 text-gray-600" />
                    )}
                    <div>
                      <p className="font-medium">{alert.number}</p>
                      <p className="text-sm text-gray-500">{alert.timestamp}</p>
                    </div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      alert.risk === "high" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {alert.risk === "high" ? "High Risk" : "Medium Risk"}
                  </div>
                </div>
              ))}

              <Link href="/dashboard/scam-box">
                <Button variant="outline" className="w-full mt-2">
                  View All Alerts
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Protection Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Call Protection</span>
                </div>
                <span className="text-green-600 font-medium">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Message Protection</span>
                </div>
                <span className="text-green-600 font-medium">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Bell className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Real-time Alerts</span>
                </div>
                <span className="text-green-600 font-medium">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <AlertTriangle className="h-4 w-4 text-green-600" />
                  </div>
                  <span>AI Scam Detection</span>
                </div>
                <span className="text-green-600 font-medium">Active</span>
              </div>

              <Link href="/dashboard/filter-settings">
                <Button variant="outline" className="w-full mt-2">
                  Manage Protection Settings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
