import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectedDepartmentsProp {
  selectedDepartments: string;
  onSelectedDepartments: (value: string) => void;
}

export const SelectDepartments: React.FC<SelectedDepartmentsProp> = ({
  selectedDepartments,
  onSelectedDepartments,
}) => {
  return (
    <Select value={selectedDepartments} onValueChange={onSelectedDepartments}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Select a departments" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>All Departments</SelectLabel>

          <SelectItem value="all">All departments</SelectItem>
          <SelectItem value="cs">CS</SelectItem>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="biology">Biology</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
