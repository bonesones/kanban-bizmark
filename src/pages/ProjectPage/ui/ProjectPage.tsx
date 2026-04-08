import { Sidebar } from "@/widgets/Sidebar";
import { Header } from "@/widgets/header";
import { KanbanBoard } from "@/widgets/kanban-board";

export const ProjectPage = () => (
  <div className="flex min-h-screen">
    <Sidebar />

    <div className="pl-5 flex-1 flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1">
        <KanbanBoard />
      </div>
    </div>
  </div>
);
