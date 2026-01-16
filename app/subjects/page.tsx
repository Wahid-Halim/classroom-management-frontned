import { DataTable } from "@/components/subject/data-table";
import SubjectList from "@/components/subject/subject-list";
import { columns } from "@/components/subject/columns";
import { Subject } from "@/types";



const page = () => {
  return (
    <div>
      <SubjectList />
    </div>
  );
};

export default page;
