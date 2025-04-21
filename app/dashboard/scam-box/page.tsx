"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageSquare, Search, Trash2, CheckCircle, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for demonstration
const scamCalls = [
  {
    id: 1,
    number: "+1 (555) 123-4567",
    date: "2024-04-21",
    time: "10:23 AM",
    riskLevel: "high",
    reason: "Known scam number",
  },
  {
    id: 2,
    number: "+1 (555) 987-6543",
    date: "2024-04-20",
    time: "3:45 PM",
    riskLevel: "high",
    reason: "Suspicious call pattern",
  },
  {
    id: 3,
    number: "+1 (555) 456-7890",
    date: "2024-04-19",
    time: "11:12 AM",
    riskLevel: "medium",
    reason: "Reported by other users",
  },
]

const scamMessages = [
  {
    id: 1,
    number: "+1 (555) 234-5678",
    date: "2024-04-21",
    time: "9:15 AM",
    riskLevel: "high",
    content:
      "URGENT: Your account has been compromised. Click here to secure your account immediately: hxxp://fake-security.com",
    reason: "Suspicious link",
  },
  {
    id: 2,
    number: "+1 (555) 876-5432",
    date: "2024-04-20",
    time: "2:30 PM",
    riskLevel: "high",
    content: "Congratulations! You've won a $1000 gift card. Claim now: hxxp://free-gift-cards.com",
    reason: "Phishing attempt",
  },
  {
    id: 3,
    number: "+1 (555) 345-6789",
    date: "2024-04-19",
    time: "4:50 PM",
    riskLevel: "medium",
    content: "Your package delivery failed. Update your delivery preferences: hxxp://delivery-update.com",
    reason: "Suspicious link",
  },
]

export default function ScamBox() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRisk, setFilterRisk] = useState("all")
  const [selectedTab, setSelectedTab] = useState("calls")

  // Filter data based on search term and risk level
  const filteredCalls = scamCalls.filter((call) => {
    const matchesSearch = call.number.includes(searchTerm)
    const matchesRisk = filterRisk === "all" || call.riskLevel === filterRisk
    return matchesSearch && matchesRisk
  })

  const filteredMessages = scamMessages.filter((message) => {
    const matchesSearch =
      message.number.includes(searchTerm) || message.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRisk = filterRisk === "all" || message.riskLevel === filterRisk
    return matchesSearch && matchesRisk
  })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Scam Box</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by number or content..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={filterRisk} onValueChange={setFilterRisk}>
                <SelectTrigger>
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risks</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select defaultValue="newest">
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="risk">Risk Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="calls" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-6">
          <TabsTrigger value="calls">
            <Phone className="h-4 w-4 mr-2" />
            Calls ({filteredCalls.length})
          </TabsTrigger>
          <TabsTrigger value="messages">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messages ({filteredMessages.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calls" className="space-y-4">
          {filteredCalls.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">No scam calls found</h3>
              <p className="text-gray-500">
                {searchTerm || filterRisk !== "all" ? "Try adjusting your filters" : "Your call history is clean"}
              </p>
            </div>
          ) : (
            filteredCalls.map((call) => (
              <Card key={call.id} className="overflow-hidden">
                <div className={`h-1 ${call.riskLevel === "high" ? "bg-red-500" : "bg-orange-400"}`} />
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${call.riskLevel === "high" ? "bg-red-100" : "bg-orange-100"}`}>
                        <Phone
                          className={`h-5 w-5 ${call.riskLevel === "high" ? "text-red-600" : "text-orange-600"}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{call.number}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {call.date} at {call.time}
                          </span>
                        </div>
                        <div className="mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              call.riskLevel === "high" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {call.riskLevel === "high" ? "High Risk" : "Medium Risk"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          <span className="font-medium">Reason:</span> {call.reason}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 md:self-start">
                      <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Not a Scam
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          {filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">No scam messages found</h3>
              <p className="text-gray-500">
                {searchTerm || filterRisk !== "all" ? "Try adjusting your filters" : "Your message history is clean"}
              </p>
            </div>
          ) : (
            filteredMessages.map((message) => (
              <Card key={message.id} className="overflow-hidden">
                <div className={`h-1 ${message.riskLevel === "high" ? "bg-red-500" : "bg-orange-400"}`} />
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-full ${message.riskLevel === "high" ? "bg-red-100" : "bg-orange-100"}`}
                      >
                        <MessageSquare
                          className={`h-5 w-5 ${message.riskLevel === "high" ? "text-red-600" : "text-orange-600"}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{message.number}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {message.date} at {message.time}
                          </span>
                        </div>
                        <div className="mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              message.riskLevel === "high" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {message.riskLevel === "high" ? "High Risk" : "Medium Risk"}
                          </span>
                        </div>
                        <div className="mt-3 p-3 bg-gray-50 rounded-md text-sm">{message.content}</div>
                        <p className="text-sm text-gray-600 mt-2">
                          <span className="font-medium">Reason:</span> {message.reason}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 md:self-start">
                      <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Not a Scam
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
