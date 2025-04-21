"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Shield,
  Phone,
  MessageSquare,
  AlertTriangle,
  Save,
  RefreshCw,
  Globe,
  Link,
  DollarSign,
  UserX,
  Clock,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterSettings() {
  const [settings, setSettings] = useState({
    callProtection: true,
    messageProtection: true,
    sensitivityLevel: 80,
    blockInternational: true,
    blockLinks: true,
    blockFinancial: true,
    blockUnknown: false,
    updateFrequency: "daily",
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: typeof prev[setting] === "boolean" ? !prev[setting] : prev[setting],
    }))
  }

  const handleSliderChange = (value: number[]) => {
    setSettings((prev) => ({
      ...prev,
      sensitivityLevel: value[0],
    }))
  }

  const handleSelectChange = (value: string) => {
    setSettings((prev) => ({
      ...prev,
      updateFrequency: value,
    }))
  }

  const handleSaveSettings = () => {
    // In a real app, this would save to a database or API
    alert("Settings saved successfully!")
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">AI Filter Settings</h1>
        <Button onClick={handleSaveSettings} className="bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              General Protection Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <Label htmlFor="callProtection" className="font-medium">
                    Call Protection
                    <p className="text-sm text-gray-500">Detect and block potential scam calls</p>
                  </Label>
                </div>
                <Switch
                  id="callProtection"
                  checked={settings.callProtection}
                  onCheckedChange={() => handleToggle("callProtection")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <Label htmlFor="messageProtection" className="font-medium">
                    Message Protection
                    <p className="text-sm text-gray-500">Detect and filter potential scam messages</p>
                  </Label>
                </div>
                <Switch
                  id="messageProtection"
                  checked={settings.messageProtection}
                  onCheckedChange={() => handleToggle("messageProtection")}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-green-600" />
                  <Label className="font-medium">
                    AI Sensitivity Level
                    <p className="text-sm text-gray-500">Higher sensitivity may result in more false positives</p>
                  </Label>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">Low</span>
                  <Slider
                    value={[settings.sensitivityLevel]}
                    min={0}
                    max={100}
                    step={10}
                    onValueChange={handleSliderChange}
                    className="flex-1"
                  />
                  <span className="text-sm">High</span>
                </div>
                <div className="text-center text-sm font-medium text-green-600">{settings.sensitivityLevel}%</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-green-600" />
                  <Label htmlFor="updateFrequency" className="font-medium">
                    Database Update Frequency
                    <p className="text-sm text-gray-500">How often to update the scam detection database</p>
                  </Label>
                </div>
                <Select value={settings.updateFrequency} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-green-600" />
              Message Filter Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-600" />
                  <Label htmlFor="blockInternational" className="font-medium">
                    Block International Numbers
                    <p className="text-sm text-gray-500">Filter messages from international numbers</p>
                  </Label>
                </div>
                <Switch
                  id="blockInternational"
                  checked={settings.blockInternational}
                  onCheckedChange={() => handleToggle("blockInternational")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Link className="h-5 w-5 text-green-600" />
                  <Label htmlFor="blockLinks" className="font-medium">
                    Block Suspicious Links
                    <p className="text-sm text-gray-500">Filter messages containing suspicious URLs</p>
                  </Label>
                </div>
                <Switch
                  id="blockLinks"
                  checked={settings.blockLinks}
                  onCheckedChange={() => handleToggle("blockLinks")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <Label htmlFor="blockFinancial" className="font-medium">
                    Block Financial Requests
                    <p className="text-sm text-gray-500">Filter messages asking for money or financial information</p>
                  </Label>
                </div>
                <Switch
                  id="blockFinancial"
                  checked={settings.blockFinancial}
                  onCheckedChange={() => handleToggle("blockFinancial")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UserX className="h-5 w-5 text-green-600" />
                  <Label htmlFor="blockUnknown" className="font-medium">
                    Block Unknown Senders
                    <p className="text-sm text-gray-500">Filter messages from numbers not in your contacts</p>
                  </Label>
                </div>
                <Switch
                  id="blockUnknown"
                  checked={settings.blockUnknown}
                  onCheckedChange={() => handleToggle("blockUnknown")}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              Advanced Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                These advanced settings help fine-tune the AI scam detection algorithm. Only modify these if you
                understand their impact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Whitelist Numbers</h3>
                  <p className="text-sm text-gray-600 mb-3">Add trusted numbers that should never be flagged</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Whitelist
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Blacklist Numbers</h3>
                  <p className="text-sm text-gray-600 mb-3">Add numbers that should always be flagged</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Blacklist
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Custom Keywords</h3>
                  <p className="text-sm text-gray-600 mb-3">Add keywords that trigger scam detection</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Keywords
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Export Data</h3>
                  <p className="text-sm text-gray-600 mb-3">Export your scam detection history</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Export Data
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50">
                  Reset to Default Settings
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
