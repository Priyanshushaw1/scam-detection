"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, HelpCircle, FileText, Send } from "lucide-react"

export default function HelpPage() {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      role: "system",
      content: "Welcome to TrueAlert AI Chatbox! How can I help you today?",
    },
  ])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message to chat
    setChatHistory((prev) => [...prev, { role: "user", content: message }])

    // Simulate AI response based on user query
    setTimeout(() => {
      let aiResponse = ""

      if (message.toLowerCase().includes("scam") || message.toLowerCase().includes("fraud")) {
        aiResponse =
          "Scams often involve attempts to trick you into revealing personal information or sending money. Always verify the identity of anyone contacting you unexpectedly, especially if they're requesting sensitive information or payment."
      } else if (message.toLowerCase().includes("call")) {
        aiResponse =
          "TrueAlert protects you from scam calls by analyzing caller information and comparing it against our database of known scam numbers. If a suspicious call is detected, you'll receive an alert before answering."
      } else if (message.toLowerCase().includes("message") || message.toLowerCase().includes("sms")) {
        aiResponse =
          "Our message protection filters suspicious messages that contain common scam indicators like urgent requests, unusual links, or requests for personal information. These messages are automatically moved to your Scam Box."
      } else {
        aiResponse =
          "I'm here to help with any questions about scams, fraud, or how to use TrueAlert. Feel free to ask about specific scam types or how our protection features work."
      }

      setChatHistory((prev) => [...prev, { role: "system", content: aiResponse }])
    }, 1000)

    // Clear input
    setMessage("")
  }

  const faqItems = [
    {
      question: "How does TrueAlert detect scam calls?",
      answer:
        "TrueAlert uses a combination of AI algorithms and a database of known scam numbers to identify potential threats. It analyzes caller patterns, frequency, and other signals to determine if a call might be fraudulent.",
    },
    {
      question: "What should I do if I receive a scam call?",
      answer:
        "If TrueAlert identifies a call as potentially fraudulent, we recommend not answering. If you do answer, never share personal information, financial details, or access codes. Report the call through the app to help improve our detection system.",
    },
    {
      question: "Can TrueAlert block all scam messages?",
      answer:
        "While TrueAlert is highly effective, no system can catch 100% of scams. We continuously update our algorithms to improve detection rates. Always remain vigilant and report any suspicious messages that make it through our filters.",
    },
    {
      question: "Is my personal data secure with TrueAlert?",
      answer:
        "Yes, TrueAlert prioritizes your privacy and security. We only access the data necessary to protect you from scams, and all information is encrypted. We never sell your personal data to third parties.",
    },
    {
      question: "How do I report a false positive?",
      answer:
        "If a legitimate message or call is flagged as a scam, you can mark it as 'Not a Scam' in the Scam Box. This helps our system learn and improve its accuracy over time.",
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Help & Support</h1>

      <Tabs defaultValue="chatbox" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="chatbox">
            <MessageSquare className="h-4 w-4 mr-2" />
            AI Chatbox
          </TabsTrigger>
          <TabsTrigger value="faq">
            <HelpCircle className="h-4 w-4 mr-2" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="guides">
            <FileText className="h-4 w-4 mr-2" />
            Guides
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chatbox" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                AI Chatbox
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col h-[400px]">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          chat.role === "user" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {chat.content}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    placeholder="Ask about scams or how to use TrueAlert..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-gray-500">
            <p>
              The AI Chatbox provides real-time information about the latest scams and can answer your questions about
              fraud protection.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-green-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                User Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h3 className="font-medium">Getting Started with TrueAlert</h3>
                  <p className="text-sm text-gray-600">
                    Learn how to set up and configure TrueAlert for maximum protection.
                  </p>
                </div>

                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h3 className="font-medium">Understanding Scam Types</h3>
                  <p className="text-sm text-gray-600">
                    A comprehensive guide to different types of scams and how to identify them.
                  </p>
                </div>

                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h3 className="font-medium">Customizing AI Filter Settings</h3>
                  <p className="text-sm text-gray-600">
                    How to adjust your AI filter settings for your specific needs.
                  </p>
                </div>

                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h3 className="font-medium">What to Do If You've Been Scammed</h3>
                  <p className="text-sm text-gray-600">Steps to take if you believe you've fallen victim to a scam.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
