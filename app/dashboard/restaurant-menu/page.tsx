"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RestaurantMenuPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Restaurant Menu</CardTitle>
          <CardDescription>Manage your restaurant's menu</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is where you'll be able to manage your restaurant's menu.</p>
          <p className="mt-2">Feature coming soon!</p>
        </CardContent>
      </Card>
    </div>
  )
}

