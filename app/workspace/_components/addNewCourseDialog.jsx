"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const difficultyItems = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

function AddNewCourseDialog({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    numberOfChapters: 0,
    includeVideo: false,
    difficultyLevel: "",
    category: "",
  });

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGenerate = () => {
    console.log(formData);
  };

  return (
    <Dialog>
      <DialogTrigger render={<span />}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI</DialogTitle>
          <DialogDescription>
            Fill in the details below to generate a course with AI.
          </DialogDescription>
        </DialogHeader>

        {/* Form lives outside DialogDescription — never put block elements inside it */}
        <div className="flex flex-col gap-4 mt-1">
          <div>
            <label className="text-sm font-medium">Course Name</label>
            <Input
              placeholder="Course Name"
              onChange={(event) =>
                onHandleInputChange("name", event?.target.value)
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Course Description (Optional)
            </label>
            <Textarea
              placeholder="Course Description"
              onChange={(event) =>
                onHandleInputChange("description", event?.target.value)
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">No. of Chapters</label>
            <Input
              type="number"
              placeholder="No. of Chapters"
              onChange={(event) =>
                onHandleInputChange("numberOfChapters", event?.target.value)
              }
            />
          </div>

          <div className="flex gap-3 items-center">
            <label className="text-sm font-medium">Include Video</label>
            <Switch
              onCheckedChange={(value) =>
                onHandleInputChange("includeVideo", value)
              }
            />
          </div>

          <div>
            <label className="text-sm font-medium">Difficulty Level</label>
            <Select
              onValueChange={(value) =>
                onHandleInputChange("difficultyLevel", value)
              }
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select difficulty level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {difficultyItems.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Category (Optional)</label>
            <Input
              placeholder="Category (separated by comma)"
              onChange={(event) =>
                onHandleInputChange("category", event?.target.value)
              }
            />
          </div>

          <div className="mt-2">
            <Button className="w-full" onClick={onGenerate}>
              Generate Course
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewCourseDialog;
