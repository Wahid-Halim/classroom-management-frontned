"use client";
import { Plus, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENTS_OPTIONS } from "@/constants";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Mathematics",
    code: "MATH-101",
    description:
      "Introduction to algebra, equations, and basic calculus concepts.",
    department: "Science",
    createdAt: "2024-01-12T10:30:00.000Z",
  },
  {
    id: 2,
    name: "Physics",
    code: "PHYS-201",
    description: "Fundamentals of mechanics, energy, and motion.",
    department: "Science",
    createdAt: "2024-02-03T14:20:00.000Z",
  },
  {
    id: 3,
    name: "English Literature",
    code: "ENG-150",
    description:
      "Study of classical and modern literature and writing techniques.",
    department: "Arts",
    createdAt: "2024-03-15T09:10:00.000Z",
  },
  {
    id: 4,
    name: "Computer Science",
    code: "CS-101",
    description: "Basics of programming, algorithms, and problem-solving.",
    department: "Technology",
    createdAt: "2024-04-01T08:00:00.000Z",
  },
  {
    id: 5,
    name: "Business Management",
    code: "BUS-210",
    description:
      "Introduction to management, leadership, and organizational skills.",
    department: "Business",
    createdAt: "2024-01-28T12:45:00.000Z",
  },
  {
    id: 3,
    name: "English Literature",
    code: "ENG-150",
    description:
      "Study of classical and modern literature and writing techniques.",
    department: "Arts",
    createdAt: "2024-03-15T09:10:00.000Z",
  },
  {
    id: 4,
    name: "Computer Science",
    code: "CS-101",
    description: "Basics of programming, algorithms, and problem-solving.",
    department: "Technology",
    createdAt: "2024-04-01T08:00:00.000Z",
  },
  {
    id: 5,
    name: "Business Management",
    code: "BUS-210",
    description:
      "Introduction to management, leadership, and organizational skills.",
    department: "Business",
    createdAt: "2024-01-28T12:45:00.000Z",
  },
  {
    id: 3,
    name: "English Literature",
    code: "ENG-150",
    description:
      "Study of classical and modern literature and writing techniques.",
    department: "Arts",
    createdAt: "2024-03-15T09:10:00.000Z",
  },
  {
    id: 4,
    name: "Computer Science",
    code: "CS-101",
    description: "Basics of programming, algorithms, and problem-solving.",
    department: "Technology",
    createdAt: "2024-04-01T08:00:00.000Z",
  },
  {
    id: 5,
    name: "Business Management",
    code: "BUS-210",
    description:
      "Introduction to management, leadership, and organizational skills.",
    department: "Business",
    createdAt: "2024-01-28T12:45:00.000Z",
  },
];

const SubjectList = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <h1 className="page-title">Subjects</h1>
      <div className="">
        <p></p>
        <div></div>
      </div>
      <DataTable columns={columns} data={SUBJECTS} />
    </div>
  );
};

export default SubjectList;
