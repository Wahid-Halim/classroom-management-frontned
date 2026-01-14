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

const SubjectList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const router = useRouter();
  return (
    <div>
      <h1 className="page-title">Subject</h1>
      <div className="intro-row">
        <p>Quick access to essential metrics and management tools</p>
        <div className="action-row">
          <div className="search-field">
            <Search className="search-icon" />
            <Input
              type="email"
              placeholder="Email"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div
            className="
                  flex gap-2 w-ful sm:w-auto mt-2"
          >
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {DEPARTMENTS_OPTIONS.map((department) => (
                  <SelectItem key={department.value} value={department.label}>
                    {department.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={() => router.push("/create")}>
              <Plus />
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectList;
