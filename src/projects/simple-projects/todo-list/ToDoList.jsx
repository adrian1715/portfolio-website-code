import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ProjectsNote from "../../../components/ProjectsNote";

export default function ToDoList() {
  async function imports() {
    try {
      await import("./app");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <Helmet>
        <title>ToDo List - Adrian Lobato</title>
      </Helmet>

      <div id="todo-list" style={{ marginLeft: "20px" }}>
        <h1>ToDo List</h1>
        <ul>
          <li>"new" - Add a ToDo</li>
          <li>"list" - List all ToDo's</li>
          <li>"delete" - Remove Specific ToDo</li>
          <li>"quit" - Quit App</li>
        </ul>
      </div>

      <ProjectsNote />
    </>
  );
}
