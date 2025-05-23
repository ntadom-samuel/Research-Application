'use client'
import { ArrowLeft, Filter, Info, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"
export default function MainPage({student, updateStudent}) {

  const [isEditing, setIsEditing] = useState(false);
  const [studentInfo, setStudentInfo] = useState(student);


  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
          {/* Left Column - Profile Section */}
          <div className="relative border rounded-lg p-6">
            {/* Back Button at Top Left */}
            <Button variant="ghost" size="icon" className="absolute top-2 left-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {/* Profile Avatar */}
            <div className="flex justify-center mb-6 mt-6">
              <Image src="/student.png" alt="Profile Picture" width={80} height={80} className="rounded-full" />

            </div>

            {/* Form Fields - 2x2 Grid with Labels */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder={studentInfo.firstName} disabled={!isEditing} className="border rounded" onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  firstName: e.target.value,
                })
              } />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder={studentInfo.secondName} disabled={!isEditing} className="border rounded" onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  secondName: e.target.value,
                })
              }/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="firstMajor">First Major</Label>
                <Input id="firstMajor" placeholder={studentInfo.firstMajor} disabled={!isEditing} className="border rounded" onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  firstMajor: e.target.value,
                })
              } />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondMajor">Second Major</Label>
                <Input id="secondMajor" placeholder={studentInfo.secondMajor} disabled={!isEditing} className="border rounded" onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  secondMajor: e.target.value,
                })
              } />
              </div>
            </div>

            {/* Full Width Fields */}
            <div className="space-y-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder={studentInfo.description} disabled={!isEditing} className="border rounded w-full min-h-[80px]" onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  description: e.target.value,
                })
              } />
              </div>
            </div>
            <div className="flex w-full justify-end bottom-4">

  <Button
            className="rounded-[5px] bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              if (isEditing) {
              updateStudent(studentInfo);
              }
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
</div>
  
</div>
            {/* Bottom Right Circle */}
          
          

          {/* Right Column - Professors Section */}
          <div className="border rounded-lg p-4">
            {/* Top Navigation */}
            <div className="flex justify-end items-center mb-6">
              <span className="text-sm font-medium">MY PROFESSORS</span>
            </div>

            {/* Filter Section */}
            <div className="mb-6">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Table with Sort Icons */}
              <div className="w-full">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-2 mb-2 border-b pb-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Name</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">Field</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">University</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2 items-center p-2 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full shrink-0" />
                      <span className="text-sm">Edu Huston</span>
                    </div>
                    <span className="text-sm">Physics</span>
                    <span className="text-sm">MIT</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 items-center p-2 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full shrink-0" />
                      <span className="text-sm">Jane Smith</span>
                    </div>
                    <span className="text-sm">Phys and CS</span>
                    <span className="text-sm">Stanford</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 items-center p-2 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full shrink-0" />
                      <span className="text-sm">John Doe</span>
                    </div>
                    <span className="text-sm">Mathematics</span>
                    <span className="text-sm">Calvin College</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 items-center p-2 bg-gray-50 rounded-md relative">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full shrink-0" />
                      <span className="text-sm">Alex Johnson</span>
                    </div>
                    <span className="text-sm">Quantum Cyber</span>
                    <span className="text-sm">Harvard</span>
                    <Button variant="ghost" size="icon" className="absolute right-2">
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  )
}

