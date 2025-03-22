'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
// Import shadcn UI components (adjust paths as needed)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";



export default function MainProfileLayout({student}) {
  const [studentInfo, setStudentInfo] = useState({});
  const [isEditorMode, setIsEditorMode] = useState(true);

  useEffect(() => {
    setStudentInfo(student);
  }, []);
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Half */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
        <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden">
          <Image
            src="/student.png"
            alt="Naruto Uzumaki"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full m-6">
          <div className="flex flex-col">
            <Label className="text-sm pb-2">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder={studentInfo.name}
              className="p-5 text-sm h-10"
              disabled={isEditorMode}
              onChange={(e) =>
                setStudentInfo({ ...studentInfo, name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <Label className="text-sm pb-2">
              Second Name <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder={studentInfo.name}
              className="p-5 text-sm h-10"
              disabled={isEditorMode}
              // Add an onChange if this field is editable
            />
          </div>
          <div className="flex flex-col">
            <Label className="text-sm pb-2">
              First Major <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder={studentInfo.firstMajor}
              className="p-5 text-sm h-10"
              disabled={isEditorMode}
              onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  firstMajor: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <Label className="text-sm pb-2">
              Second Major <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder={studentInfo.secondMajor}
              className="p-5 text-sm h-10"
              disabled={isEditorMode}
              onChange={(e) =>
                setStudentInfo({
                  ...studentInfo,
                  secondMajor: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="w-full h-1/5">
          <Label className="text-sm pb-2">
            Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            placeholder={studentInfo.description}
            className="p-5 text-sm h-full"
            disabled={isEditorMode}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, description: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end w-full m-6">
          <Button
            className="text-base px-4 py-4"
            onClick={() => {
              if (!isEditorMode) {
                updateStudentInfo();
              }
              setIsEditorMode(!isEditorMode);
            }}
          >
            {isEditorMode ? "Edit" : "Save"}
          </Button>
        </div>
      </div>

      {/* Right Half
      <div className="flex flex-col bg-blue-100 items-center justify-center w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="text-center">More Content</p>
      </div> */}
    </div>
  );
}
