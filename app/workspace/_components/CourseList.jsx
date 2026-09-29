"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function CourseList() {
  const [courseList, setCourseList] = React.useState([]);
  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl">Course List</h2>
      {courseList?.length == 0 ? (
        <div className="flex p-7 items-center justify-center flex-col border rouneded-xl mt-2 bg-secondary">
          <Image
            src={"/online-courses.jpg"}
            alt="edu"
            width={100}
            height={100}
          />
          <h2 className="my-2 text-xl font-bold">
            Look like yuo haven't created any courses yet
          </h2>
          <Button>+ Create your first course</Button>
        </div>
      ) : (
        <div>List of Courses</div>
      )}
    </div>
  );
}

export default CourseList;
